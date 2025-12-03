namespace EasyITCenter.Controllers {

    /// <summary>
    /// Server Root Controller
    /// </summary>
    [ApiController]
    [Route("WebApi")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class ServerWebProviderGetOnlyApi : ControllerBase {

        private Microsoft.AspNetCore.Hosting.IWebHostEnvironment _hostingEnvironment;
        public ServerWebProviderGetOnlyApi(Microsoft.AspNetCore.Hosting.IWebHostEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }

        /// <summary>
        /// Provider: For Show EASY Menu Codes on WebPages
        /// </summary>
        /// <returns></returns>
        [HttpGet("/WebApi/WebPages/GetTemplateWebMenuList")]
        public async Task<string> GetTemplateWebMenuList() {
            try {
                //if (CommunicationController.IsAdmin()) {
                List<WebMenuList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                    IsolationLevel = IsolationLevel.ReadUncommitted
                })) {
                    data = new EasyITCenterContext().WebMenuLists.OrderBy(a => a.Name).ToList();
                }

                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                    ReferenceHandler = ReferenceHandler.IgnoreCycles,
                    WriteIndented = true,
                    DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetErrMsg(ex) }); }
        }

        /// <summary>
        /// Provider: For Show EASY Script Codes on WebPages
        /// </summary>
        /// <returns></returns>
        [HttpGet("/WebApi/WebPages/GetWebPortalCssJsContent")]
        public async Task<string> GetManagedCssJsScriptList() {
            try {
                List<WebCoreFileList> data = new();
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    data = new EasyITCenterContext().WebCoreFileLists.OrderBy(a=>a.InheritedJsCssDefinitionType).ThenBy(a => a.FileName).ToList();
                }

                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                    ReferenceHandler = ReferenceHandler.IgnoreCycles,
                    WriteIndented = true,
                    DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetErrMsg(ex) }); }
        }

        /// <summary>
        /// Provider Its for Show Tools on WebPages
        /// </summary>
        /// <returns></returns>
        [HttpGet("/WebApi/WebPages/GetSolutionToolList")]
        public async Task<string> GetSolutionToolList() {
            try {
                List<ServerToolPanelDefinitionList> data = new();
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    data = new EasyITCenterContext().ServerToolPanelDefinitionLists.Include(a => a.ToolType)
                        .OrderBy(a => a.ToolType).ThenBy(a => a.SystemName).ToList();
                }

                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                    ReferenceHandler = ReferenceHandler.IgnoreCycles,
                    WriteIndented = true,
                    DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetErrMsg(ex) }); }
        }
    }
}