using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EasyITCenter.DBModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;


namespace EasyITCenter.Controllers {


    public class FancyTreeJsonDataRequest
    {
        public string WebRootPath { get; set; }
        public string FileMask { get; set; }
        public bool RootDirectoryOnly { get; set; }
    }

    public class FancyTreeJsonData
    {
        public string title { get; set; }
        public bool folder { get; set; }
        public bool checkbox { get; set; }
        public string key { get; set; }
        public List<FancyTreeChildren>? children { get; set; } = null;
    }

    public class FancyTreeChildren {
        public string title { get; set; }
        public string key { get; set; }
    }

    [AllowAnonymous]
    [Route("/JsonGeneratorService")]
    public class JsonGeneratorService : Controller {

        private readonly Microsoft.AspNetCore.Hosting.IWebHostEnvironment _hostingEnvironment;
        public JsonGeneratorService(Microsoft.AspNetCore.Hosting.IWebHostEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }




        /// <summary>
        /// Must set path with path\\path or path/path
        /// FileMask *.*, *.html, index.html
        /// </summary>
        /// <param name="jsonDataRequest"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/JsonGeneratorService/GetFancyTreeJsonData")]
        [Consumes("application/json")]
        public async Task<IActionResult> GetFancyTreeJsonData([FromBody] FancyTreeJsonDataRequest jsonDataRequest) {
            try {
                List<string>? loadFiles = null; List<FancyTreeJsonData> result = new();
                loadFiles = FileOperations.GetPathFiles(Path.Combine(SrvRuntime.WebRootPath, jsonDataRequest.WebRootPath), $"{jsonDataRequest.FileMask}", jsonDataRequest.RootDirectoryOnly ? SearchOption.TopDirectoryOnly : SearchOption.AllDirectories);

                loadFiles.ForEach(htmlFile => { 
                    result.Add(new FancyTreeJsonData() { title = Path.GetFileName(htmlFile).ToLower() == "index.html" ? htmlFile.Split(Path.DirectorySeparatorChar.ToString())[htmlFile.Split(Path.DirectorySeparatorChar.ToString()).Length - 2] : Path.GetFileNameWithoutExtension(htmlFile), checkbox = false, folder = false, key = htmlFile.Split("wwwroot")[1] });
                });

                return base.Json(new WebClasses.JsonResult() { Result = result, Status = DBResult.success.ToString() });
            } catch (Exception ex) {
                return base.Json(new WebClasses.JsonResult() { Result = DataOperations.GetErrMsg(ex), Status = DBResult.error.ToString(), ErrorMessage = DataOperations.GetErrMsg(ex) });
            }
        }


        /// <summary>
        /// FancyTree Code Library Browser Data
        /// </summary>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpGet("/JsonGeneratorService/GetFancyTreeCodeLibrary")]
        [Consumes("application/json")]
        public async Task<IActionResult> GetFancyTreeCodeLibrary() {
            List<SolutionCodeLibraryList> data = new(); string lastCodeType = null;
            List<FancyTreeJsonData> result = new(); FancyTreeJsonData codeGroup = new();
            try {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    data = new EasyITCenterContext().SolutionCodeLibraryLists.OrderBy(a => a.InheritedCodeType).ThenBy(a => a.Name).ToList();
                }

                data.ForEach(code => {
                    if (code.InheritedCodeType != lastCodeType) {
                        if (lastCodeType != null) { result.Add(codeGroup); }
                        codeGroup = new FancyTreeJsonData() { title = code.InheritedCodeType, checkbox = false, folder = true, key = string.Empty, children = new List<FancyTreeChildren>() };
                        codeGroup.children.Add(new FancyTreeChildren() { title = code.Name, key = code.CodeContent });
                    } else { codeGroup.children.Add(new FancyTreeChildren() { title = code.Name, key = code.CodeContent }); }

                    lastCodeType = code.InheritedCodeType;
                });
                result.Add(codeGroup);
                return base.Json(result);
            } catch (Exception ex) {
                return base.Json(result);
            }
        }
    }
}
