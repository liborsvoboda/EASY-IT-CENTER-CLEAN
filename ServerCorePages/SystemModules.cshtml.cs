using Microsoft.AspNetCore.Mvc.RazorPages;
using EasyITCenter.ServerCoreStructure;
using Westwind.AspNetCore.Markdown;

namespace ServerCorePages {

    /// <summary>
    /// Default Page for Every Web Request Here are defined
    /// Main Pages Sections THIs Page Is Alone For
    /// </summary>
    public class SystemModulesModel : PageModel {
        public static ServerWebPagesToken ServerWebPagesToken;
        public static string? result;

        /// <summary>
        /// Checking Cookie TOKEN FROM Metro for User/UserRole checking on Server Side This Is Use
        /// For User Checking In Razor/MVC Server Web Pages This is Use For User Role and his Rights
        /// If is Logged Checking Has Loaded User Claims with Full Token Info
        /// </summary>
        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                ServerWebPagesToken = CoreOperations.CheckTokenValidityFromString(requestToken);
                if (ServerWebPagesToken.IsValid) { User.AddIdentities(ServerWebPagesToken.UserClaims.Identities); }
            }
            else { ServerWebPagesToken = new ServerWebPagesToken(); }
        }


        #region Global Methods For Centralize Templates CSS Part

        /// <summary>
        /// MultiLang CSS Library Files List
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedMultiLangCssFiles() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            //Load Js Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts("cssfiles", "multilang-fullpage").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = "";

                if (managedFile.RewriteLowerLevel) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { html += managedFile.ProviderContent + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += managedFile.AdminFileContent + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && managedFile.UserFileContent?.Length > 0) { insertedPart += managedFile.UserFileContent + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += managedFile.GuestFileContent + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += managedFile.GuestFileContent + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += managedFile.UserFileContent + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += managedFile.AdminFileContent + Environment.NewLine; }
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { insertedPart += managedFile.ProviderContent + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }


        /// <summary>
        /// Central CSS Library Files List
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedCentralCssFiles() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            //Load Js Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts("cssfiles", "central-fullpage").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();

                if (managedFile.RewriteLowerLevel) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { html += managedFile.ProviderContent + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += managedFile.AdminFileContent + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && managedFile.UserFileContent?.Length > 0) { insertedPart += managedFile.UserFileContent + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += managedFile.GuestFileContent + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += managedFile.GuestFileContent + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += managedFile.UserFileContent + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += managedFile.AdminFileContent + Environment.NewLine; }
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { insertedPart += managedFile.ProviderContent + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }

        /// <summary>
        /// Global CSS Library Files List
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedGlobalCssFiles() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            //Load Js Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts("cssfiles", "global-fullpage").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();

                if (managedFile.RewriteLowerLevel) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { html += managedFile.ProviderContent + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += managedFile.AdminFileContent + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && managedFile.UserFileContent?.Length > 0) { insertedPart += managedFile.UserFileContent + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += managedFile.GuestFileContent + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += managedFile.GuestFileContent + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += managedFile.UserFileContent + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += managedFile.AdminFileContent + Environment.NewLine; }
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { insertedPart += managedFile.ProviderContent + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }

        //------------------------------------------------------


        /// <summary>
        /// MultiLang CSS Stylisation Template Controler
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedMultiLangCssLayoutFiles() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            //Load Css Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts(".css", "multilang-layout.").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();
                string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();

                if (managedFile.RewriteLowerLevel) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { html += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" />" + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" />" + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin" && managedFile.UserFileContent?.Length > 0) && managedFile.UserFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" />" + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" />" + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" />" + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" />" + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" />" + Environment.NewLine; }

                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" />" + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }


        /// <summary>
        /// Central CSS Stylisation Template Controler
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedCentralCssLayoutFiles() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            //Load Css Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts(".css", "central-layout.").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();
                string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();

                if (managedFile.RewriteLowerLevel) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { html += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" />" + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" />" + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin" && managedFile.UserFileContent?.Length > 0) && managedFile.UserFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" />" + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" />" + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" />" + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" />" + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" />" + Environment.NewLine; }

                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" />" + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }


        /// <summary>
        /// Global CSS Stylisation Template Controler
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedGlobalCssLayoutFiles() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            //Load Css Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts(".css", "global-layout.").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();
                string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();

                if (managedFile.RewriteLowerLevel) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { html += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" />" + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" />" + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin" && managedFile.UserFileContent?.Length > 0) && managedFile.UserFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" />" + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" />" + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" />" + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" />" + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" />" + Environment.NewLine; }

                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { insertedPart += "<link rel=\"stylesheet\" href=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" />" + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }

        #endregion Global Methods For Centralize Templates CSS Part

        #region Global Methods For Centralize Templates JS Part

        /// <summary>
        /// MultiLang JS Library Files List
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedMultiLangJsFiles() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            //Load Js Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts("jsfiles", "multilang-fullpage").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();

                if (managedFile.RewriteLowerLevel) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { html += managedFile.ProviderContent + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += managedFile.AdminFileContent + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && managedFile.UserFileContent?.Length > 0) { insertedPart += managedFile.UserFileContent + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += managedFile.GuestFileContent + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += managedFile.GuestFileContent + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += managedFile.UserFileContent + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += managedFile.AdminFileContent + Environment.NewLine; }
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { insertedPart += managedFile.ProviderContent + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }


        /// <summary>
        /// Central JS Library Files List
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedCentralJsFiles() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            //Load Js Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts("jsfiles", "central-fullpage").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();

                if (managedFile.RewriteLowerLevel) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { html += managedFile.ProviderContent + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += managedFile.AdminFileContent + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && managedFile.UserFileContent?.Length > 0) { insertedPart += managedFile.UserFileContent + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += managedFile.GuestFileContent + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += managedFile.GuestFileContent + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += managedFile.UserFileContent + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += managedFile.AdminFileContent + Environment.NewLine; }
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { insertedPart += managedFile.ProviderContent + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }

        /// <summary>
        /// Global JS Library Files List
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedGlobalJsFiles() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            //Load Js Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts("jsfiles", "global-fullpage").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();

                if (managedFile.RewriteLowerLevel) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { html += managedFile.ProviderContent + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += managedFile.AdminFileContent + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && managedFile.UserFileContent?.Length > 0) { insertedPart += managedFile.UserFileContent + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += managedFile.GuestFileContent + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += managedFile.GuestFileContent + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += managedFile.UserFileContent + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += managedFile.AdminFileContent + Environment.NewLine; }
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { insertedPart += managedFile.ProviderContent + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }


        //------------------------------------------------

        /// <summary>
        /// MultiLang JS Library Files Template Controler
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedMultiLangJsLayoutFiles() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            //Load Js Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts(".js", "multilang-layout.").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();

                if (managedFile.RewriteLowerLevel) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { html += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" ></script>" + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && managedFile.UserFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" ></script>" + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" ></script>" + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" ></script>" + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }


    


        /// <summary>
        /// Central JS Library Files Template Controler
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedCentralJsLayoutFiles() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            //Load Js Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts(".js", "central-layout.").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();

                if (managedFile.RewriteLowerLevel) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { html += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" ></script>" + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && managedFile.UserFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" ></script>" + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" ></script>" + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" ></script>" + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }


        /// <summary>
        /// Global JS Library Files Template Controler
        /// </summary>
        /// <returns></returns>
        public ViewResult GetManagedGlobalJsLayoutFiles() {
            List<WebCoreFileList> data; string html = null; var result = new ViewResult();

            string? authRole = User.FindFirstValue(ClaimTypes.Role.ToString())?.ToLower();
            //Load Js Section
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = DbOperations.GetWebPortalJsCssScripts(".js", "global-layout.").OrderBy(a => a.Sequence).ToList();
            }
            string insertedPart = "";
            data.ForEach(managedFile => {
                insertedPart = ""; string fileExt = managedFile.FileName.Split(".").Last();

                if (managedFile.RewriteLowerLevel) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { html += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" ></script>" + Environment.NewLine; }

                    if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    else if ((authRole == "webuser" || authRole == "admin") && managedFile.UserFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    else if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" ></script>" + Environment.NewLine; }
                    html += insertedPart;
                }
                else {
                    if (managedFile.GuestFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName + "\" ></script>" + Environment.NewLine; }

                    if (authRole == "webuser" && managedFile.UserFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "user." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    else if (authRole == "admin" && managedFile.AdminFileContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "admin." + fileExt) + "\" ></script>" + Environment.NewLine; }
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerProviderModeEnabled").Value) && managedFile.ProviderContent?.Length > 0) { insertedPart += "<script type=\"text/javascript\" src=\"../../metro/" + managedFile.MetroPath + "/" + managedFile.FileName.Replace(fileExt, "provider." + fileExt) + "\" ></script>" + Environment.NewLine; }
                }
                html += insertedPart;
            });

            result.ContentType = html;
            return result;
        }

        #endregion Global Methods For Centralize Templates JS Part
    }
}