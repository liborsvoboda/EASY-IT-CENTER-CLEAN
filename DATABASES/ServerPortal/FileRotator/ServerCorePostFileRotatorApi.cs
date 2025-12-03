using Microsoft.AspNetCore.Http;
using SharpCompress.Common;
using System.Xml.Serialization;

namespace EasyITCenter.ControllersExtensions {

    /// <summary>
    /// Server Root Controller
    /// </summary>
    [ApiController]
     //[ApiExplorerSettings(IgnoreApi = true)]
    [Route("FileRotator")]
    public class ServerCorePostFileRotatorApi : Controller {


        /// <summary>
        ///  WebApi ContentTool SubmitRotator
        /// </summary>
        /// <param name="filename"></param>
        /// <returns></returns>
        [HttpGet("/FileRotator/GetApiFileRotator/{filename}"), DisableRequestSizeLimit]
        public async Task<IActionResult> GetApiFileRotator(string filename) {
            try {
                byte[] fileArray = SrvRuntime.FileRotatorTool.FirstOrDefault(a => a.Key.ToString() == filename).Value as byte[];
                return File(fileArray, MimeTypes.GetMimeType(filename), filename);
            } catch (Exception ex) { return BadRequest(new string[] { "error:" + DataOperations.GetUserApiErrMessage(ex), "application/json" }); }
        }



        /// <summary>
        /// WebApi ConentTool WebBuilder File Responser
        /// </summary>
        /// <returns></returns>
        [HttpPost("/FileRotator/PostApiFileRotator"), DisableRequestSizeLimit]
        public async Task<IActionResult> PostApiFileRotator(List<IFormFile> files) {
            string mimeType = null; byte[] loadedfile; string stringFile = null; byte[] fileByteArray = null;
            try {
                foreach (var formFile in Request.Form.Files) {
                    mimeType = MimeTypes.GetMimeType(formFile.FileName);
                    using (var ms = new MemoryStream()) {
                        formFile.CopyTo(ms);
                        fileByteArray = ms.ToArray();
                        stringFile = Convert.ToBase64String(fileByteArray);
                    }
                }

                string uniqueFilename = DataOperations.RandomString(20) + "." + mimeType.Split("/")[1];
                IDictionary<object, object> detail = new Dictionary<object, object> {
                    { "filename", uniqueFilename },
                    { "url", "/FileRotator/GetApiFileRotator/" + uniqueFilename },
                    { "name", "image" },
                    { "size", stringFile.Length },
                    { "image", fileByteArray },
                    { "file",  File(fileByteArray, mimeType, DataOperations.RandomString(20) + "." + mimeType.Split("/")[1]) }
                };

                SrvRuntime.FileRotatorTool.Add(uniqueFilename, fileByteArray);
                return Ok(JsonSerializer.Serialize(detail));
            } catch (Exception ex) { return BadRequest(new string[] { "error:" + DataOperations.GetUserApiErrMessage(ex), "application/json" }); }
        }


        /// <summary>
        /// WebApi ConentTool WebBuilder File Responser
        /// </summary>
        /// <returns></returns>
        [HttpPost("/FileRotator/PutApiFileRotator"), DisableRequestSizeLimit]
        public async Task<IActionResult> PutApiFileRotator(List<IFormFile> files) {
            string mimeType = null; byte[] loadedfile; string stringFile = null; byte[] fileByteArray = null;
            string filename = Request.Form.AsEnumerable().First(a => a.Key == "url").Value.ToString().Split("/").Last();
            try {

                byte[] fileArray = SrvRuntime.FileRotatorTool.FirstOrDefault(a => a.Key.ToString() == filename).Value as byte[];
                mimeType = MimeTypes.GetMimeType(filename);
                stringFile = Convert.ToBase64String(fileArray);
                IDictionary<object, object> detail = new Dictionary<object, object> {
                    { "filename", filename },
                    { "url", "/FileRotator/GetApiFileRotator/" + filename },
                    { "name", "image" },
                    { "size", fileArray.Length },
                    { "image", fileArray },
                    { "file",  File(fileArray, mimeType, DataOperations.RandomString(20) + "." + mimeType.Split("/")[1]) }
                };

                SrvRuntime.FileRotatorTool.Remove(filename);
                return Ok(JsonSerializer.Serialize(detail));
            } catch (Exception ex) { return BadRequest(new string[] { "error:" + DataOperations.GetUserApiErrMessage(ex), "application/json" }); }
        }


    }
}