using System;
using System.Collections;
using System.Collections.Generic;
using System.IO.Compression;
using System.Linq;
using System.Threading.Tasks;
using EasyITCenter.DBModel;
using FastReport.Utils;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace EasyITCenter.Controllers {


    public class FancyTreeUserData {
        public string title { get; set; }
        public bool folder { get; set; }
        public bool checkbox { get; set; }
        public string key { get; set; }
        public string path { get; set; }
        public string extension { get; set; }
        public bool scanned { get; set; }
        public List<FancyTreeUserData>? children { get; set; } = null;
    }


    public class Files
    {
        public string Filename { get; set; }
        public string Content { get; set; }
    }

    public class UserStorageContent {
        public string Path { get; set; }
        public string? Filename { get; set; } = null;
        public string? Content { get; set; } = null;
        public List<Files>? Files { get; set; } = null;
    }

    public class UserStorageRenameDir {
        public string SourcePath { get; set; }
        public string TargetPath { get; set; }
    }

    public class UserStorageSunGallery {
        public string src { get; set; }
        public string name { get; set; }
        public string alt { get; set; }
        public string tag { get; set; }
    }


    public class JsonResultLower
    {
        public string status { get; set; }
        public object result { get; set; }
        public string errorMessage { get; set; }
    }


    [AllowAnonymous]
    [Route("/UserStorageService")]
    public class UserStorageService : Controller {

        private readonly Microsoft.AspNetCore.Hosting.IWebHostEnvironment _hostingEnvironment;
        public UserStorageService(Microsoft.AspNetCore.Hosting.IWebHostEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }


        /// <summary>
        /// Get User Storage Structure
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpGet("/UserStorageService/GetUserStorage")]
        [Consumes("application/json")]
        public async Task<IActionResult> GetUserStorage() {
            FancyTreeUserData dir = new(); string path = null; string userRootPath = null;
            List<FancyTreeUserData> result = new();
            try {
                if (EasyITCenterContextExtension.IsLogged()) {

                    userRootPath = path = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName());

                ScanDirectory:
                    result.AddRange(UserStorageOperations.GetUserDirectories(userRootPath, path));
                    dir = result.Where(a => a.scanned == false).FirstOrDefault();

                    if (dir != null) {
                        path = userRootPath + dir.path;
                        result.Remove(dir);
                        dir.scanned = true;
                        result.Add(dir);
                        result = result.OrderBy(a => a.title).ToList();
                        goto ScanDirectory;
                    }
                } else {
                    userRootPath = path = Path.Combine(SrvRuntime.UserPath, "guest");

                ScanDirectoryGuest:
                    result.AddRange(UserStorageOperations.GetUserDirectories(userRootPath, path));
                    dir = result.Where(a => a.scanned == false).FirstOrDefault();

                    if (dir != null) {
                        path = userRootPath + dir.path;
                        result.Remove(dir);
                        dir.scanned = true;
                        result.Add(dir);
                        result = result.OrderBy(a => a.title).ToList();
                        goto ScanDirectoryGuest;
                    }
                }

                //FILES Part
                result.AddRange(UserStorageOperations.GetUserFiles(userRootPath));

                result.OrderByDescending(a => a.path.Split(System.IO.Path.DirectorySeparatorChar).Length).ToList().ForEach(res => {
                    if (res.path.Split(System.IO.Path.DirectorySeparatorChar).Count() > 2) {
                        result.Where(a => a.path == string.Join(System.IO.Path.DirectorySeparatorChar, res.path.Split(System.IO.Path.DirectorySeparatorChar).Take(res.path.Split(System.IO.Path.DirectorySeparatorChar).Count() - 1))).First().children.Add(res);
                        result.Remove(res);
                    }
                });


                return base.Json(result);
            } catch (Exception ex) {
                return base.Json(result);
            }
        }


        /// <summary>
        /// Create User Storage Folder
        /// </summary>
        /// <param name="userStorageContent"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/CreateUserFolder")]
        [Consumes("application/json")]
        public async Task<string> CreateUserFolder([FromBody] UserStorageContent userStorageContent) {
            string userRootPath = null;
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName());
                    FileOperations.CreateDirectory(userRootPath + userStorageContent.Path);

                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                } else { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty }); }

                           
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Rename User Storage Folder
        /// </summary>
        /// <param name="userStorageRenameDir"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/MoveUserFolder")]
        [Consumes("application/json")]
        public async Task<string> MoveUserFolder([FromBody] UserStorageRenameDir userStorageRenameDir) {
            string userRootPath = null;
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName());
                    FileOperations.MoveDirectory(userRootPath + userStorageRenameDir.SourcePath, userRootPath + userStorageRenameDir.TargetPath);

                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                } else { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty }); }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Copy User Storage Folder
        /// </summary>
        /// <param name="userStorageRenameDir"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/CopyUserFolder")]
        [Consumes("application/json")]
        public async Task<string> CopyUserFolder([FromBody] UserStorageRenameDir userStorageRenameDir) {
            string userRootPath = null;
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName());
                    FileOperations.CopyDirectory(userRootPath + userStorageRenameDir.SourcePath, userRootPath + userStorageRenameDir.TargetPath);

                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                } else { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty }); }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Download User Storage Folder
        /// </summary>
        /// <param name="userStorageRenameDir"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/DownloadUserFolder")]
        [Consumes("application/json")]
        public async Task<IActionResult> DownloadUserFolder([FromBody] UserStorageContent userStorageContent) {
            string userRootPath = null;
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName()) + userStorageContent.Path;
                } else { userRootPath = Path.Combine(SrvRuntime.UserPath, "guest") + userStorageContent.Path; }

                ZipFile.CreateFromDirectory(userRootPath, Path.Combine(SrvRuntime.UserPath, "temp", FileOperations.GetLastFolderFromPath(userStorageContent.Path) + ".zip"));
                byte[] zipPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, "temp", FileOperations.GetLastFolderFromPath(userStorageContent.Path) + ".zip"));
                FileOperations.DeleteFile(Path.Combine(SrvRuntime.UserPath, "temp", FileOperations.GetLastFolderFromPath(userStorageContent.Path) + ".zip"));

                return File(zipPackage, "application/x-zip-compressed", FileOperations.GetLastFolderFromPath(userStorageContent.Path) + ".zip");
            } catch (Exception ex) {
                return BadRequest(new { Status = DBResult.error.ToString(), ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Clear User Storage Folder
        /// </summary>
        /// <param name="userStorageContent"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/ClearUserFolder")]
        [Consumes("application/json")]
        public async Task<string> ClearUserFolder([FromBody] UserStorageContent userStorageContent) {
            string userRootPath = null;
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName()) + userStorageContent.Path;
                    FileOperations.ClearFolder(userRootPath);
                
                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                } else { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty }); }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Delete User Storage Folder
        /// </summary>
        /// <param name="userStorageContent"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/DeleteUserFolder")]
        [Consumes("application/json")]
        public async Task<string> DeleteUserFolder([FromBody] UserStorageContent userStorageContent) {
            string userRootPath = null;
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName()) + userStorageContent.Path;
                    FileOperations.DeleteDirectory(userRootPath);

                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                } else { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty }); }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Create User Storage File
        /// </summary>
        /// <param name="userStorageContent"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/CreateUserFile")]
        [Consumes("application/json")]
        public async Task<string> CreateUserFile([FromBody] UserStorageContent userStorageContent) {
            string userRootPath = null;
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName()) + userStorageContent.Path + userStorageContent.Filename;
                    FileOperations.CreateFile(userRootPath);

                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                } else { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty }); }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Save User Storage File
        /// </summary>
        /// <param name="userStorageContent"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/SetUserTextFile")]
        [Consumes("application/json")]
        public async Task<string> SetUserTextFile([FromBody] UserStorageContent userStorageContent) {
            string userRootPath = null; string result = null;

            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName());
                    FileOperations.WriteToFile(userRootPath + userStorageContent.Path, userStorageContent.Content, true);

                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                } else { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty }); }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Rename User Storage File
        /// </summary>
        /// <param name="userStorageRenameDir"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/MoveUserFile")]
        [Consumes("application/json")]
        public async Task<string> MoveUserFile([FromBody] UserStorageRenameDir userStorageRenameDir) {
            string userRootPath = null;
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName());
                    FileOperations.MoveFile(userRootPath + userStorageRenameDir.SourcePath, userRootPath + userStorageRenameDir.TargetPath);

                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                } else { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty }); }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Copy User Storage File
        /// </summary>
        /// <param name="userStorageRenameDir"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/CopyUserFile")]
        [Consumes("application/json")]
        public async Task<string> CopyUserFile([FromBody] UserStorageRenameDir userStorageRenameDir) {
            string userRootPath = null;
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName());
                    FileOperations.CopyFile(userRootPath + userStorageRenameDir.SourcePath, userRootPath + userStorageRenameDir.TargetPath);

                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                } else { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty }); }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Delete User Storage Folder
        /// </summary>
        /// <param name="userStorageContent"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/DeleteUserFile")]
        [Consumes("application/json")]
        public async Task<string> DeleteUserFile([FromBody] UserStorageContent userStorageContent) {
            string userRootPath = null;
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName()) + userStorageContent.Path;
                    FileOperations.DeleteFile(userRootPath);

                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                } else { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty }); }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Download User Storage File
        /// </summary>
        /// <param name="userStorageRenameDir"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/DownloadUserFile")]
        [Consumes("application/json")]
        public async Task<IActionResult> DownloadUserFile([FromBody] UserStorageContent userStorageContent) {
            string userRootPath = null; string tempFolder = null;
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName()) + userStorageContent.Path;
                } else { 
                    userRootPath = Path.Combine(SrvRuntime.UserPath, "guest") + userStorageContent.Path; 
                }

                tempFolder = Path.Combine(SrvRuntime.UserPath, "temp") + string.Join(System.IO.Path.DirectorySeparatorChar, userStorageContent.Path.Split(System.IO.Path.DirectorySeparatorChar).Take(userStorageContent.Path.Split(System.IO.Path.DirectorySeparatorChar).Count() - 1));
                FileOperations.DeleteDirectory(tempFolder); FileOperations.CreateDirectory(tempFolder);
                FileOperations.CopyFile(userRootPath, tempFolder + System.IO.Path.DirectorySeparatorChar + System.IO.Path.GetFileName(userStorageContent.Path));
                
                ZipFile.CreateFromDirectory(tempFolder, Path.Combine(SrvRuntime.UserPath,"temp", System.IO.Path.GetFileNameWithoutExtension(userStorageContent.Path) + ".zip"));
                byte[] zipPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, "temp", System.IO.Path.GetFileNameWithoutExtension(userStorageContent.Path) + ".zip"));

                FileOperations.DeleteDirectory(tempFolder);
                FileOperations.DeleteFile(Path.Combine(SrvRuntime.UserPath, "temp", System.IO.Path.GetFileNameWithoutExtension(userStorageContent.Path) + ".zip"));

                return File(zipPackage, "application/x-zip-compressed", System.IO.Path.GetFileNameWithoutExtension(userStorageContent.Path) + ".zip");
            } catch (Exception ex) {
                return BadRequest(new { Status = DBResult.error.ToString(), ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// User Storage SUNEditor Galery List
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpGet("/UserStorageService/GetSunImageList")]
        [Consumes("application/json")]
        public async Task<IActionResult> GetSunImageList() {
            string userRootPath = null; List<string> extensionList = new();
            List<string> images = new(); List<UserStorageSunGallery> result = new();
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName(), "Images");
                } else { userRootPath = Path.Combine(SrvRuntime.UserPath, "guest", "Images"); }

                extensionList = DbOperations.GetServerParameterLists("ImageExtensionList").Value.Split(";").ToList();
                extensionList.ForEach(ext => {
                    images = FileOperations.GetPathFiles(userRootPath, $"*.{ext}", SearchOption.AllDirectories);
                    images.ForEach(img => { 
                        result.Add(new UserStorageSunGallery() {
                            name = System.IO.Path.GetFileName(img),
                            alt = System.IO.Path.GetFileNameWithoutExtension(img),
                            src = img.Replace(SrvRuntime.WebRootPath, "").Replace(System.IO.Path.DirectorySeparatorChar,'/'),
                            tag = FileOperations.GetLastFolderFromPath(img)
                        });
                    });
                });
                result = result.OrderBy(a => a.tag).ThenBy(a=>a.name).ToList();
                return base.Json(new JsonResultLower() { result = result, status = DBResult.success.ToString() }); ;
            } catch (Exception ex) {
                return base.Json(new WebClasses.JsonResult() { Result = DataOperations.GetUserApiErrMessage(ex), Status = DBResult.error.ToString() }); 
            }
        }


        /// <summary>
        /// Upload User Storage Files
        /// </summary>
        /// <param name="userStorageContent"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/UserStorageService/UploadUserFiles")]
        [Consumes("application/json")]
        public async Task<string> UploadUserFiles([FromBody] UserStorageContent userStorageContent) {
            string userRootPath = null;
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    userRootPath = Path.Combine(SrvRuntime.UserPath, EasyITCenterContextExtension.GetUserName());
                    userStorageContent.Files.ForEach(file => { FileOperations.ByteArrayToFile(userRootPath + userStorageContent.Path + "\\" + file.Filename, Convert.FromBase64String(file.Content.Split(",")[1])); });

                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), RecordCount = userStorageContent.Files.Count(), ErrorMessage = string.Empty });
                } else { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty }); }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        

    }
}