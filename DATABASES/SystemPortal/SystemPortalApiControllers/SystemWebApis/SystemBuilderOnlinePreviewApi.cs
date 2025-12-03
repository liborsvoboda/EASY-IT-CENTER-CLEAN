using System.Text.RegularExpressions;

namespace EasyITCenter.Controllers {

    [ApiController]
    [Route("WebApi")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class SystemBuilderOnlinePreviewApi : ControllerBase {

        /// <summary>
        /// SYSTEM WebBuilder Code Library Preview Api
        /// </summary>
        /// <returns></returns>
        [HttpGet("/WebApi/WebBuilderCodePreview/{id}")]
        public ContentResult GetWebBuilderCodePreview(int id) {
            try {
                string data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                    IsolationLevel = IsolationLevel.ReadUncommitted
                })) {
                    data = new EasyITCenterContext().SolutionCodeLibraryLists.Where(a => a.Id == id)
                        .OrderByDescending(a => a.TimeStamp).First().CodeContent;
                }

                string head;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { head = new EasyITCenterContext().WebSettingLists.Where(a => a.Key == "WebBuilderHeadSection").First().Value; }
                try {
                    string? prevHeader = Regex.Split(data, "<HEAD>", RegexOptions.IgnoreCase)[0];
                    string? pastHeader = Regex.Split(data, "</HEAD>", RegexOptions.IgnoreCase).Length > 1 ? Regex.Split(data, "</HEAD>", RegexOptions.IgnoreCase)[1] : "";
                    data = prevHeader + head + pastHeader;
                } catch { data = head + data; }

                return new ContentResult { Content = data, ContentType = "text/html" };
            } catch (Exception ex) {
                return new ContentResult { Content = DataOperations.GetUserApiErrMessage(ex), ContentType = "text/html" };
            }
        }

        /// <summary>
        /// SYSTEM WebBuilder Menu Preview Api
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [HttpGet("/WebApi/WebBuilderMenuPreview/{id}")]
        public ContentResult GetWebBuilderMenuPreview(int id) {
            try {
                string data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                    IsolationLevel = IsolationLevel.ReadUncommitted
                })) {
                    data = new EasyITCenterContext().WebMenuLists.Where(a => a.Id == id)
                        .OrderByDescending(a => a.TimeStamp).First().HtmlContent;
                }

                string head;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { head = new EasyITCenterContext().WebSettingLists.Where(a => a.Key == "WebBuilderHeadSection").First().Value; }
                try {
                    string? prevHeader = Regex.Split(data, "<HEAD>", RegexOptions.IgnoreCase)[0];
                    string? pastHeader = Regex.Split(data, "</HEAD>", RegexOptions.IgnoreCase).Length > 1 ? Regex.Split(data, "</HEAD>", RegexOptions.IgnoreCase)[1] : "";
                    data = prevHeader + head + pastHeader;
                } catch { data = head + data; }

                return new ContentResult { Content = data, ContentType = "text/html" };
            } catch (Exception ex) {
                return new ContentResult { Content = DataOperations.GetUserApiErrMessage(ex), ContentType = "text/html" };
            }
        }

        /// <summary>
        /// SYSTEM WebBUilder Global Page Body Block Preview API
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [HttpGet("/WebApi/WebBuilderGlobalBodyBlockPreview/{id}")]
        public ContentResult GetWebBuilderGlobalBodyBlockPreview(int id) {
            try {
                WebGlobalPageBlockList data; string htmlData = "";
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                    IsolationLevel = IsolationLevel.ReadUncommitted
                })) {
                    data = new EasyITCenterContext().WebGlobalPageBlockLists.Where(a => a.Id == id)
                        .OrderByDescending(a => a.TimeStamp).First();
                }

                string head;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) 
                    { head = new EasyITCenterContext().WebSettingLists.Where(a => a.Key == "WebBuilderHeadSection").First().Value; }
                htmlData = head + Environment.NewLine;

                htmlData += (!string.IsNullOrWhiteSpace(data.GuestHtmlContent) ? "<-- GuestHtmlContent -->" + Environment.NewLine + data.GuestHtmlContent + Environment.NewLine : "");
                htmlData += (!string.IsNullOrWhiteSpace(data.UserHtmlContent) ? "<-- UserHtmlContent -->" + Environment.NewLine + data.UserHtmlContent + Environment.NewLine : "");
                htmlData += (!string.IsNullOrWhiteSpace(data.AdminHtmlContent) ? "<-- AdminHtmlContent -->" + Environment.NewLine + data.AdminHtmlContent + Environment.NewLine : "");
                htmlData += (!string.IsNullOrWhiteSpace(data.ProviderHtmlContent) ? "<-- ProviderHtmlContent -->" + Environment.NewLine + data.ProviderHtmlContent + Environment.NewLine : "");

                return new ContentResult { Content = htmlData, ContentType = "text/html" };
            } catch (Exception ex) {
                return new ContentResult { Content = DataOperations.GetUserApiErrMessage(ex), ContentType = "text/html" };
            }
        }
    }
}