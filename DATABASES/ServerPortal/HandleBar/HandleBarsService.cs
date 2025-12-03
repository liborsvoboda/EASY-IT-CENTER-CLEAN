using HandlebarsDotNet;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Octokit;
using ScrapySharp.Network;
using Swashbuckle.AspNetCore.Annotations;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace EasyITCenter.Controllers {

    public class DataToTemplateRequest {
        public string Template { get; set; }
        public string PartialTemplate { get; set; } = null;
        public string Data { get; set; }
    }

    [AllowAnonymous]
    [Route("/HandleBarsService")]
    public class HandleBarsService : Controller {

        private readonly Microsoft.AspNetCore.Hosting.IWebHostEnvironment _hostingEnvironment;
        public HandleBarsService(Microsoft.AspNetCore.Hosting.IWebHostEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }


        /// <summary>
        /// Generate HTML code from Template and JSON Data set, 
        /// </summary>
        /// <param name="codegenRequest"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/HandleBarsService/GetTemplateCode")]
        [Consumes("application/json")]
        public async Task<IActionResult> GetTemplateCode([FromBody] DataToTemplateRequest codegenRequestBody) {
            try {
                if (!string.IsNullOrWhiteSpace(codegenRequestBody.PartialTemplate)) { Handlebars.RegisterTemplate(DataOperations.GetHandleBarPartialVariable(codegenRequestBody.PartialTemplate), codegenRequestBody.PartialTemplate); }
                var template = Handlebars.Compile(codegenRequestBody.Template);
                string? result = template(JsonConvert.DeserializeObject<object>(codegenRequestBody.Data));

                return base.Json(new WebClasses.JsonResult() { Result = result, Status = DBResult.success.ToString() });
            } catch (Exception ex) {
                return base.Json(new WebClasses.JsonResult() { Result = DataOperations.GetErrMsg(ex), Status = DBResult.error.ToString(), ErrorMessage = DataOperations.GetErrMsg(ex) });
            }
        }



    }
}
