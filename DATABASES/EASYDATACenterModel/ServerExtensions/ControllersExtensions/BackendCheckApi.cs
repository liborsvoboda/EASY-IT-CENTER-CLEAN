namespace EASYDATACenter.ControllersExtensions {

    /// <summary>
    /// Simple Api for Checking Avaiability
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [ApiController]
    [Route("BackendCheck")]
    public class BackendCheckApi : ControllerBase {

        /// <summary>
        /// Gets the backend check API.
        /// </summary>
        /// <returns></returns>
        [HttpGet("/BackendCheck")]
        public Task<string> GetBackendCheckApi() { return Task.FromResult(ServerCoreDbOperations.DBTranslate("ServerRunning", BackendServer.ServerSettings.ConfigServerLanguage)); }
    }
}