using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Playwright;
using PuppeteerSharp;
using ScrapySharp.Network;
using Westwind.AspNetCore.Markdown;
using System.Diagnostics;
using Octokit;

namespace EasyITCenter.Controllers {

    public enum ProcessType
    {
        dotnet,
        cmd,
        bat,
        node,
        powershellFile,
        powershellScript,
        py,
        py3,
        sh
    }

    /// <summary>
    /// Server Process class for running external prrocesses
    /// </summary>
    public class RunProcessRequest
    {
        public string Command { get; set; }
        public string? WorkingDirectory { get; set; } = null;
        public ProcessType ProcessType { get; set; }
        public bool WaitForExit = true;
        public string StartupScriptName { get; set; } = null;
    }


    [AllowAnonymous]
    [Route("/ProcessService")]
    public class ProcessService : Controller {


        /// <summary>
        /// wwwroot is replaced with full path
        /// </summary>
        /// <param name="processRequest"></param>
        /// <returns></returns>
        [HttpPost("/ProcessService/StartProcessScript")]
        [Consumes("application/json")]
        public async Task<IActionResult> StartProcessScript([FromBody] RunProcessRequest processRequest) {

            if (EasyITCenterContextExtension.IsAdmin() || EasyITCenterContextExtension.IsWebAdmin()) {
                processRequest.Command = processRequest.Command.Replace("wwwroot", SrvRuntime.WebRootPath);
                processRequest.WorkingDirectory = processRequest.WorkingDirectory.Replace("wwwroot", SrvRuntime.WebRootPath);
                
                await ProcessOperations.ServerProcessStartAsync(processRequest);
                return base.Json(new WebClasses.JsonResult() { Result = string.Empty, Status = DBResult.success.ToString() });
            }
            return base.Json(new WebClasses.JsonResult() { Result = string.Empty, Status = DBResult.DeniedYouAreNotAdmin.ToString() });

        }


        [HttpGet("/ProcessService/KillProcessScript/{processPid}")]
        [Consumes("application/json")]
        public async Task<IActionResult> KillProcessScript(int processPid) {

            if (EasyITCenterContextExtension.IsAdmin() || EasyITCenterContextExtension.IsWebAdmin()) {
                ProcessOperations.ServerProcessKill(processPid);
                return base.Json(new WebClasses.JsonResult() { Result = string.Empty, Status = DBResult.success.ToString() });
            }
            return base.Json(new WebClasses.JsonResult() { Result = string.Empty, Status = DBResult.DeniedYouAreNotAdmin.ToString() });
        }


        [HttpGet("/ProcessService/GetProcessList")]
        [Consumes("application/json")]
        public async Task<IActionResult> GetProcessList() {
            List<Tuple<int, string, string, string>> processList = new();
            SrvRuntime.SrvProcessManager.ForEach(process => { processList.Add(new Tuple<int, string, string, string>(process.Item1, process.Item2, process.Item3, ((Process)process.Item4).ProcessName )); });
            return base.Json(new WebClasses.JsonResult() { Result = processList.ObjectToJson(), Status = DBResult.success.ToString() });
        }

    }
}
