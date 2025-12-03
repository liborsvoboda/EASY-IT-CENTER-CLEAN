/*
* Server Core Web Helpers
* System Extensions for Correct Core working
* DataTypes Conversion Support, etc.
*/

using ReverseMarkdown.Converters;

namespace EasyITCenter.ServerCoreStructure {

    /// <summary>
    /// User Storage Operations
    /// </summary>
    public static class UserStorageOperations {


        /// <summary>
        /// Create User Storage Directory on Authenticated User Login
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        public static bool CreateUserStorage(string username) {
           string[] folders = null;
            try {
                FileOperations.CreatePath(Path.Combine(SrvRuntime.UserPath, username), false);
                folders = DbOperations.GetServerParameterLists("DefaultUserStorageFolders").Value.Split(";");
                folders.ToList().ForEach(folder => { FileOperations.CreatePath(Path.Combine(SrvRuntime.UserPath, username, folder), false); });
            } catch { }

            return true;
        }


        /// <summary>
        /// Get User Storage Directories
        /// </summary>
        /// <param name="userRootPath"></param>
        /// <param name="path"></param>
        /// <returns></returns>
        public static List<FancyTreeUserData> GetUserDirectories(string userRootPath,string path) {
            string[] data = null; List<FancyTreeUserData> directories = new();
            data = Directory.GetDirectories(path);
            data.ToList().ForEach(dir => {
                directories.Add(new FancyTreeUserData() {
                    title = dir.Split(System.IO.Path.DirectorySeparatorChar).Last(),
                    checkbox = true, folder = true, key = string.Empty, children = new List<FancyTreeUserData>(),
                    path = dir.Replace(userRootPath,""), extension = string.Empty, scanned = false
                });
            });

            return directories;
        }


        /// <summary>
        /// Get User Storage Files
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public static List<FancyTreeUserData> GetUserFiles(string path) {
            List<string> data = null; List<FancyTreeUserData> files = new();
            data = FileOperations.GetPathFiles(path, "*", SearchOption.AllDirectories);
            data.ForEach(file => {
                files.Add(new FancyTreeUserData() {
                    title = System.IO.Path.GetFileName(file), checkbox = true, folder = false, scanned = true, children = null, 
                    key = DbOperations.GetServerParameterLists("TextFilesExtensionList").Value.Split(";").ToList().Where(a => a.ToLower() == System.IO.Path.GetExtension(System.IO.Path.GetFileName(file)).ToLower().Replace(".", "")).Count() > 0
                    ? FileOperations.ReadTextFile(file) //file content
                    : file.Replace(SrvRuntime.WebRootPath, "").Replace(System.IO.Path.DirectorySeparatorChar, '/'), //file path
                    path = file.Replace(path, ""), extension = System.IO.Path.GetExtension(System.IO.Path.GetFileName(file)).ToLower().Replace(".","")
                });
            });

            return files;
        }
    }
}