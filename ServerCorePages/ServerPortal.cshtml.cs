using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.RazorPages;

using Westwind.AspNetCore.Markdown;

using System;
using System.IO;
using System.Linq;
using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Security.Claims;
using System.Threading.Tasks;

using EasyITCenter;
using EasyITCenter.Managers;
using EasyITCenter.WebClasses;
using EasyITCenter.Controllers;
using EasyITCenter.ServerCoreStructure;
using Humanizer;


namespace ServerCorePages {

    public class ServerPortalModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;

        public static PageModel GeneratorModel { get; set; }

        public void OnGet() {
            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = CoreOperations.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            } else { serverWebPagesToken = new ServerWebPagesToken(); }
        }

        //TODO Create Script loading for model
        public static IActionResult GetFromMainFrame() {

            return new ContentResult() { Content = "test" };
        }
    }
}
