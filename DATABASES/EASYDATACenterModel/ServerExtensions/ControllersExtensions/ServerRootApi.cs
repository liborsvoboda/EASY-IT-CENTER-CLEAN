namespace EASYDATACenter.ControllersExtensions {

    /// <summary>
    /// Server Root Controller
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [ApiController]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ServerRootApi : ControllerBase {

        /// <summary>
        /// Server Root "/" Redirection to "server" Folder
        /// </summary>
        /// <returns></returns>
        [HttpGet("/")]
        public IActionResult Index() {
            return new RedirectResult("~/server");
        }
    }
}