using RedirectResult = Microsoft.AspNetCore.Mvc.RedirectResult;

namespace EasyITCenter.Controllers {

    /// <summary>
    /// Server Routing Rulles
    /// </summary>
    [AllowAnonymous]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class StatusPageService : ControllerBase {


        /// <summary>
        /// StartUp Web Redirection
        /// </summary>
        /// <returns></returns>
        [HttpGet("/")]
        public IActionResult Index() {
            return bool.Parse(DbOperations.GetServerParameterLists("RedirectOnPageNotFound").Value) ?
                new RedirectResult(DbOperations.GetServerParameterLists("RedirectPath").Value) : 
                new RedirectResult(DbOperations.GetServerParameterLists("RedirectPath").Value.StartsWith("/") ? DbOperations.GetServerParameterLists("RedirectPath").Value : "/" + DbOperations.GetServerParameterLists("RedirectPath").Value);
        }


        /// <summary>
        /// TODO měli jste na mysli: seznam adres serveru - všech jsou zabezpečené
        /// </summary>
        /// <returns></returns>
        [HttpGet("/StatusPageService/404NonExistPage")]
        public ContentResult NonExistPage() {

            string? nonExistPageFinal = new EasyITCenterContext().ServerModuleAndServiceLists.
                Where(a => a.Name.ToLower() == "404NonExistPage".ToLower()).FirstOrDefault()?.CustomHtmlContent;
            if (nonExistPageFinal != null) {
                base.StatusCode(StatusCodes.Status404NotFound);
                return base.Content(nonExistPageFinal, "text/html");
            } else {
                base.StatusCode(StatusCodes.Status404NotFound); 
                return base.Content("Missing \"404NonExistPage\" Template 404 in: Generator Dynamic Wesites.");
            }
        }



        [HttpGet("/StatusPageService/401UnauthorizedPage")]
        public ContentResult UnauthorizedPage() {

            string? nonExistPageFinal = new EasyITCenterContext().ServerModuleAndServiceLists.
                Where(a => a.Name.ToLower() == "401UnauthorizedPage".ToLower()).FirstOrDefault()?.CustomHtmlContent;
            if (nonExistPageFinal != null) {
                base.StatusCode(StatusCodes.Status401Unauthorized);
                return base.Content(nonExistPageFinal, "text/html");
            }
            else {
                base.StatusCode(StatusCodes.Status401Unauthorized);
                return base.Content("Missing \"401UnauthorizedPage\" Template 404 in: Generator Dynamic Wesites.");
            }
        }


    }
}