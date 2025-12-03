[Zpět](../../../)   


```cs   

using EasyITCenter.Services;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Primitives;
using System.Collections;

namespace EasyITCenter.ServerCoreStructure {

    public class WebsitesStaticFileDbProvider : IFileProvider {
        private readonly IServiceProvider serviceProvider;

        private IServiceScope CreateScope() => serviceProvider.CreateScope();

        public WebsitesStaticFileDbProvider(IServiceProvider serviceProvider) {
            this.serviceProvider = serviceProvider;
        }

        public IDirectoryContents GetDirectoryContents(string subpath) {
            using (var scope = CreateScope()) {
                return new DirectoryContents(scope.ServiceProvider.GetRequiredService<WebsitesStaticFileDbRepository>().GetFiles(subpath).ToArray());
            }
        }

        public IFileInfo GetFileInfo(string subpath) {
            using (var scope = CreateScope()) {
                var find = scope.ServiceProvider.GetRequiredService<WebsitesStaticFileDbRepository>().ReadFile(subpath);
                if (find != null) return new FileInfo(find);
                return new NotFoundFileInfo(subpath);
            }
        }

        public IChangeToken Watch(string filter) => NullChangeToken.Singleton;
    }

    public class DirectoryContents : IDirectoryContents {
        private IFileInfo[] files;

        public DirectoryContents(IEnumerable<SolutionStaticFilePathList> files) {
            this.files = files.Select(o => new FileInfo(o)).ToArray();
        }

        public bool Exists => true;

        public IEnumerator<IFileInfo> GetEnumerator() {
            foreach (var f in files) yield return f;
        }

        IEnumerator IEnumerable.GetEnumerator() => files.GetEnumerator();
    }

    public class FileInfo : IFileInfo {
        private SolutionStaticFileList file = null!;

        public FileInfo(SolutionStaticFileList file) {
            this.file = file;
            LastModified = file.TimeStamp;
            Name = System.IO.Path.GetFileName(file.FileNamePath);
            Length = file.Content.Length;
        }

        public FileInfo(SolutionStaticFilePathList index) {
            Name = System.IO.Path.GetFileName(index.Path);
            Length = index.Size;
            LastModified = index.TimeStamp;
        }

        public bool Exists => true;
        public DateTimeOffset LastModified { get; private set; }
        public long Length { get; private set; }
        public string Name { get; private set; }
        public string PhysicalPath => null!;
        public bool IsDirectory => false;

        public Stream CreateReadStream() => file == null ? null! : new MemoryStream(file.Content);
    }
}

```      

