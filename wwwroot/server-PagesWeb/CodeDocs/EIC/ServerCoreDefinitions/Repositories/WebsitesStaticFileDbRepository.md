[Zpět](../../../)   


```csharp   

namespace EasyITCenter.Services {

    public class WebsitesStaticFileDbRepository {
        private readonly EasyITCenterContext _EasyITCenter = new EasyITCenterContext();

        public void CreateDirectory(int websiteId, string path, int userId, bool ignoreExisting = false) {
            var existing = _EasyITCenter.SolutionStaticFilePathLists.SingleOrDefault(o => o.Path == "/" + o.Website.WebsiteName + path);
            if (existing != null) {
                if (!ignoreExisting) throw new Exception($"Directory {path} already exists");
                return;
            }
            _EasyITCenter.SolutionStaticFilePathLists.Add(new SolutionStaticFilePathList { WebsiteId = websiteId, Path = path, Size = 0, Active = true, UserId = userId });
            _EasyITCenter.SaveChanges();
        }

        private void CreateParentDir(int websiteId, int userId, string path) {
            var p = path.Split('/');
            var que = new Queue<string>();
            for (int i = 1; i < p.Length; i++) {
                var parentDir = "/" + string.Join("/", que.ToArray());
                CreateDirectory(websiteId, path, userId, true);
                que.Enqueue(p[i]);
            }
        }

        public void CreateOrUpdateFile(int websiteId, string path, byte[] data, int userId) {
            SolutionStaticFilePathList? existing = _EasyITCenter.SolutionStaticFilePathLists.FirstOrDefault(o => o.Path == "/" + o.Website.WebsiteName + path);

            int parentPathId = 0;
            if (existing == null) {
                SolutionStaticFilePathList pathList = new SolutionStaticFilePathList { WebsiteId = websiteId, Path = path, Size = data.Length, Active = true, UserId = userId };
                EntityEntry<SolutionStaticFilePathList> saving = _EasyITCenter.SolutionStaticFilePathLists.Add(pathList);
                saving.Context.SaveChanges(); parentPathId = pathList.Id;
            }
            else {
                existing.Size = data.Length; parentPathId = existing.Id;
                EntityEntry<SolutionStaticFilePathList>? saving = _EasyITCenter.SolutionStaticFilePathLists.Update(existing);
                saving.Context.SaveChanges();
            }

            // create parent directory if not exists
            CreateParentDir(websiteId, userId, path);
            if (existing != null) {
                var existingFile = _EasyITCenter.SolutionStaticFileLists.FirstOrDefault(o => o.FileNamePath == "/" + o.Website.WebsiteName + path);
                existingFile.Content = data; existingFile.TimeStamp = DateTimeOffset.Now.DateTime;
                _EasyITCenter.SolutionStaticFileLists.Update(existingFile);
                _EasyITCenter.SaveChanges();
            }
            else {
                var dataEntity = new SolutionStaticFileList { FileNamePath = path, WebsiteId = websiteId, StaticPathId = parentPathId, Content = data, UserId = userId, Active = true, TimeStamp = DateTimeOffset.Now.DateTime };
                _EasyITCenter.SolutionStaticFileLists.Add(dataEntity);
                _EasyITCenter.SaveChanges();
            }
        }

        public IEnumerable<SolutionStaticFilePathList> GetFiles(string path, bool recurse = false) {
            var all = _EasyITCenter.SolutionStaticFilePathLists.Where(o => o.Path.StartsWith(path) && o.Path != "/" + o.Website.WebsiteName + path);
            if (!recurse) {
                return all.Where(o => !o.Path.Substring(path.Length + 1).Contains("/")).ToArray();
            }
            return all.ToArray();
        }

        public SolutionStaticFileList ReadFile(string path) {
            var existing = _EasyITCenter.SolutionStaticFilePathLists.SingleOrDefault(o => o.Path == "/" + o.Website.WebsiteName + path);
            if (existing == null) return null!;
            return _EasyITCenter.SolutionStaticFileLists.SingleOrDefault(o => o.StaticPathId == existing.Id)!;
        }

        public void DeleteFile(string path, string userId) {
            var existing = _EasyITCenter.SolutionStaticFilePathLists.SingleOrDefault(o => o.Path == "/" + o.Website.WebsiteName + path);
            if (existing == null) throw new Exception($"File {path} not found");
            var dataEntity = _EasyITCenter.SolutionStaticFileLists.SingleOrDefault(o => o.StaticPathId == existing.Id);
            _EasyITCenter.SolutionStaticFilePathLists.Remove(existing);
            _EasyITCenter.SaveChanges();
        }

        public void DeleteDirectory(string path, string userId) {
            var existing = _EasyITCenter.SolutionStaticFilePathLists.SingleOrDefault(o => o.Path == "/" + o.Website.WebsiteName + path);
            if (existing == null) { throw new Exception($"Directory {path} not found"); }
            var children = _EasyITCenter.SolutionStaticFilePathLists.Where(o => o.Path.StartsWith(path + "/")).ToList();
            var data = _EasyITCenter; data.RemoveRange(children);
            data.SaveChanges();
        }
    }
}

```      

