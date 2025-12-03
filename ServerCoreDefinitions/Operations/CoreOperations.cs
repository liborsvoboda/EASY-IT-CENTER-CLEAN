using ServerCorePages;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.IdentityModel.Tokens;
using NUglify.Helpers;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Mail;
using System.Runtime.InteropServices;

namespace EasyITCenter.ServerCoreStructure {

    /// <summary>
    /// Specific Server Core Operations Library
    /// </summary>
    public static class CoreOperations {


        //TODO CAN BE INSERTED CUSTOM KEYS FOR Machines o Other HERE WILL BE VALIDATED: NEW AGENDA 
        public static HttpContext IncludeCookieTokenToRequest(HttpContext context) {
            ServerWebPagesToken? serverWebPagesToken = null;
            string token = context.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;

            if (token == null && context.Request.Headers.Authorization.ToString().Length > 0) { token = context.Request.Headers.Authorization.ToString().Substring(7); }
            if (token != null) {
                serverWebPagesToken = CoreOperations.CheckTokenValidityFromString(token);
                if (serverWebPagesToken.IsValid) {
                    context.User.AddIdentities(serverWebPagesToken.UserClaims.Identities);
                    try { context.Items.Add(new KeyValuePair<object, object>("ServerWebPagesToken", serverWebPagesToken)); } catch { } }
            }
            return context;
        }

        /// <summary>
        /// Selection Layout Between Static File / MarkDown / Or Portal
        /// Resolve Routing Logic Layout Selection 
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public static HttpContext ChechUrlRequestValidOrAuthorized(HttpContext context) {
            RouteLayoutTypes routeLayout = RouteLayoutTypes.EmptyLayout; RoutingActionTypes routingResult = RoutingActionTypes.None;
            string routePath = context.Request.Path.ToString().ToLower(); string? validPath = null;
            try {

                /*301,302,404 Ignore Files*/
                if (context.Response.StatusCode != StatusCodes.Status200OK && context.Request.Path.ToString().Split("/").Last().Contains(".")) {
                    routeLayout = RouteLayoutTypes.EmptyLayout; validPath = routePath; routingResult = RoutingActionTypes.Return;
                }

                //Check Server Module
                ServerModuleAndServiceList SystemModule = DbOperations.CheckDefinedWebPageExists(routePath);
                if (SystemModule != null) {
                    if (context.Items.FirstOrDefault(a => a.Key.ToString() == "SystemModule").Value != null) { context.Items.Remove("SystemModule"); }
                    try { context.Items.Add(new KeyValuePair<object, object>("SystemModule", SystemModule)); } catch { }

                    string? userRole = context.User.Claims?.FirstOrDefault(a => a.Type.ToString() == ClaimTypes.Role.ToString())?.Value;
                    if (!SystemModule.RestrictedAccess
                        || (SystemModule.RestrictedAccess && userRole != null && SystemModule.AllowedRoles != null && SystemModule.AllowedRoles.Split(",").ToList().Contains(userRole))) {
                        /*Go To Server Module*/
                        routeLayout = RouteLayoutTypes.SystemModulesLayout; validPath = routePath; routingResult = RoutingActionTypes.Return;
                    } else if (SystemModule.RestrictedAccess && (userRole == null || userRole != null && (string.IsNullOrWhiteSpace(SystemModule.AllowedRoles) ||
                        (!string.IsNullOrWhiteSpace(SystemModule.AllowedRoles) && !SystemModule.AllowedRoles.Split(",").ToList().Contains(userRole))))) {
                        ServerModuleAndServiceList? loginmodule = new EasyITCenterContext().ServerModuleAndServiceLists.FirstOrDefault(a => a.IsLoginModule);
                        if (context.Items.FirstOrDefault(a => a.Key.ToString() == "LoginModule").Value != null) { context.Items.Remove("LoginModule"); }
                        try { context.Items.Add(new KeyValuePair<object, object?>("LoginModule", loginmodule)); } catch { }
                        try { if (SystemModule.UrlSubPath != null) { context.Response.Cookies.Append("RequestedModulePath", SystemModule.UrlSubPath); } } catch { }
                    }
                    routeLayout = RouteLayoutTypes.SystemModulesLayout;
                    if (routePath != "/systemmodules") { validPath = "/systemmodules"; routingResult = RoutingActionTypes.Next;
                    } else { validPath = routePath; routingResult = RoutingActionTypes.Return; }
                }

                #region Solve Controlled Static Files
                //Startup Redirect To Static File
                if (validPath == null && context.Response.StatusCode == StatusCodes.Status200OK && routePath == "/"
                    && routePath != DbOperations.GetServerParameterLists("RedirectPath").Value && bool.Parse(DbOperations.GetServerParameterLists("RedirectOnPageNotFound").Value) && DbOperations.GetServerParameterLists("RedirectPath").Value.ToLower() != "/systemportal") {
                    routeLayout = RouteLayoutTypes.StaticFileLayout; /*enable change for md */ routePath = DbOperations.GetServerParameterLists("RedirectPath").Value; routingResult = RoutingActionTypes.Next;
                }


                //Check Portal Startup Or Id Or MenuName //Here check Menu Items
                try {
                    int webMenuId = 0; webMenuId = int.TryParse(routePath.Split("/").Last().Split("-")[0], out int checkInt) ? checkInt : 0;
                    if (
                        /*Portal started*/ (routePath == "/" && bool.Parse(DbOperations.GetServerParameterLists("RedirectOnPageNotFound").Value) && DbOperations.GetServerParameterLists("RedirectPath").Value.ToLower() == "/systemportal" ) || routePath == "/systemportal" ||
                        /*Portal run*/ (new EasyITCenterContext().WebMenuLists.Where(a => a.Id == webMenuId || a.Name.ToLower() == routePath.Substring(1)).Any())
                    ) { routeLayout = RouteLayoutTypes.SystemPortalLayout; validPath = DbOperations.GetServerParameterLists("RedirectPath").Value; routingResult = RoutingActionTypes.Next; }
                } catch { }
                #endregion

                //Check Server Defined Modules
                //TODO vytvořit agendu nastroju a k nim templaty v ni budou i editory a nastroje Kazdy Layout bude mit svoji Page
                if (validPath == null && routePath.StartsWith("/easydata", StringComparison.OrdinalIgnoreCase)) { routeLayout = RouteLayoutTypes.MetroLayout; validPath = routePath; routingResult = RoutingActionTypes.Return; }
                if (validPath == null && routePath.StartsWith("/serverportal", StringComparison.OrdinalIgnoreCase)) { routeLayout = RouteLayoutTypes.ServerPortalLayout; validPath = routePath; routingResult = RoutingActionTypes.Return; }
                if (validPath == null && routePath.StartsWith("/razortemplate", StringComparison.OrdinalIgnoreCase)) { routeLayout = RouteLayoutTypes.RazorTemplateLayout; validPath = routePath; routingResult = RoutingActionTypes.Return; }
                //if (validPath == null && routePath.StartsWith("/systemportal", StringComparison.OrdinalIgnoreCase)) { routeLayout = RouteLayoutTypes.SystemPortalLayout; validPath = routePath; routingResult = RoutingActionTypes.Return; }





                //Check MarkDown Type missing .md for Show in Markdown Layout
                if (bool.Parse(DbOperations.GetServerParameterLists("EnableAutoShowStaticMdAsHtml").Value)) {
                    if (!routePath.EndsWith("/") && File.Exists(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(routePath) + ".md")) 
                        { validPath = routePath; routeLayout = RouteLayoutTypes.ViewerMarkDownFileLayout; routingResult = RoutingActionTypes.Next; }
                    else if (!routePath.EndsWith("/") && File.Exists(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(routePath) + "/index.md")) 
                        { validPath = routePath + "/index"; routeLayout = RouteLayoutTypes.ViewerMarkDownFileLayout; routingResult = RoutingActionTypes.Next; } 
                    else if (!routePath.EndsWith("/") && File.Exists(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(routePath) + "/readme.md")) 
                        { validPath = routePath + "/readme"; routeLayout = RouteLayoutTypes.ViewerMarkDownFileLayout; routingResult = RoutingActionTypes.Next; }
                }


                //Check Report By extension '.frx' for Show
                if (routePath.EndsWith(".frx") || routePath.EndsWith(".fpx")) 
                    { routeLayout = RouteLayoutTypes.ViewerReportFileLayout; validPath = routePath; routingResult = RoutingActionTypes.Next; }


                //Check Html By missing '.html' for Open In HTML Editor
                //if (!routePath.EndsWith("/") && !context.Request.Path.ToString().Split("/").Last().Contains(".") && File.Exists(ServerRuntimeData.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(routePath) + ".html")) { routeLayout = RouteLayoutTypes.EditorHtmlFileLayout; validPath = routePath + ".html"; routingResult = RoutingActionTypes.Next; }


                //Check Index.html & Html file
                if (validPath == null) {
                    if (routePath.EndsWith(".html") && File.Exists(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(routePath))) {
                        routeLayout = RouteLayoutTypes.StaticFileLayout; validPath = routePath; routingResult = RoutingActionTypes.Next;
                    }

                    if ((routePath.EndsWith("/") && File.Exists(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(routePath) + "index.html"))
                        || (!routePath.EndsWith("/") && !context.Request.Path.ToString().Split("/").Last().Contains(".") && File.Exists(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(routePath) + Path.DirectorySeparatorChar + "index.html"))
                        ) {
                        if (!routePath.ToLower().EndsWith(".html")) {
                            validPath = !routePath.ToLower().EndsWith(".html") && !routePath.ToLower().EndsWith("index") && !routePath.EndsWith('/')
                            ? routePath + "/index.html" : routePath + "index.html";
                            routeLayout = RouteLayoutTypes.StaticFileLayout; routingResult = RoutingActionTypes.Next;
                        }
                    }
                }

                //Any Validation Founded
                if (validPath == null && context.Items.FirstOrDefault(a => a.Key.ToString() == "CommandType").Value == null) {
                    routeLayout = DataOperations.GenericToEnum<RouteLayoutTypes>(DbOperations.CheckDefinedWebPageExists("/StatusPageService/404NonExistPage").InheritedLayoutType);
                    validPath = "/StatusPageService/404NonExistPage"; routingResult = RoutingActionTypes.Next;
                }
            } catch (Exception Ex) {
                routeLayout = RouteLayoutTypes.SystemPortalLayout; validPath = routePath; routingResult = RoutingActionTypes.Return;
                CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) });
            }

            if (context.Items.FirstOrDefault(a => a.Key.ToString() == "RouteLayoutTypes").Value == null) { context.Items.Add("RouteLayoutTypes", routeLayout); }
            if (context.Items.FirstOrDefault(a => a.Key.ToString() == "FileValidUrl").Value == null) { context.Items.Add("FileValidUrl", validPath); }
            if (context.Items.FirstOrDefault(a => a.Key.ToString() == "CommandType").Value != null) { context.Items.Remove("CommandType"); context.Items.Add("CommandType", RoutingActionTypes.Return); }
            else { context.Items.Add("CommandType", routingResult); }

            return context;
        }




        /// <summary>
        /// Sends the mass mail.
        /// </summary>
        /// <param name="mailRequests">The mail requests.</param>
        public static void SendMassEmail(List<SendMailRequest> mailRequests) {
            mailRequests.ForEach(mailRequest => { SendEmail(mailRequest, true); });
        }

        /// <summary>
        /// System Mailer sending Emails To service email with detected fail for analyze and
        /// corrections on the Way provide better services every time !!! This You can implement
        /// everywhere, !!! In Debug mode is written to Console, in Release will be sent email Empty
        /// Sender And Recipients set email for Service Recipient
        /// </summary>
        /// <param name="mailRequest">    </param>
        /// <param name="sendImmediately"></param>
        public static string SendEmail(SendMailRequest mailRequest, bool sendImmediately = false) {
            try {
                if ((!SrvRuntime.DebugMode && !bool.Parse(DbOperations.GetServerParameterLists("ConfigLogWarnPlusToDbEnabled").Value)) || sendImmediately) {
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServiceCoreCheckerEmailSenderActive").Value) || sendImmediately) {
                        MailMessage Email = new() { From = new MailAddress(mailRequest.Sender ?? DbOperations.GetServerParameterLists("EmailerSMTPLoginUsername").Value) };

                        if (mailRequest.Recipients != null && mailRequest.Recipients.Any()) { mailRequest.Recipients.ForEach(email => { Email.To.Add(email); }); }
                        else { Email.To.Add(DbOperations.GetServerParameterLists("EmailerServiceEmailAddress").Value); }

                        Email.Subject = mailRequest.Subject ?? DbOperations.GetServerParameterLists("ConfigCoreServerRegisteredName").Value;
                        Email.Body = mailRequest.Content;Email.IsBodyHtml = true;

                        SmtpClient MailClient = new(DbOperations.GetServerParameterLists("EmailerSMTPServerAddress").Value, int.Parse(DbOperations.GetServerParameterLists("EmailerSMTPPort").Value)) {
                            Credentials = new NetworkCredential(DbOperations.GetServerParameterLists("EmailerSMTPLoginUsername").Value, DbOperations.GetServerParameterLists("EmailerSMTPLoginPassword").Value),
                            EnableSsl = bool.Parse(DbOperations.GetServerParameterLists("EmailerSMTPSslIsEnabled").Value),Host = DbOperations.GetServerParameterLists("EmailerSMTPServerAddress").Value,Port = int.Parse(DbOperations.GetServerParameterLists("EmailerSMTPPort").Value)
                        };
                        MailClient.Timeout = 5000;
                        MailClient.SendAsync(Email, Guid.NewGuid().ToString());
                    }
                }
                else {
                    if (DBConn.DatabaseLogWarnToDbEnabled && mailRequest.Content != null &&
                        !SrvRuntime.SrvRestartReq && SrvRuntime.ServerCoreStatus == ServerStatusTypes.Running.ToString()) {
                        SolutionFailList SolutionFailList = new SolutionFailList() { UserId = null, InheritedLogMonitorType = "PrimaryServer", Message = mailRequest.Content, LogLevel = null, UserName = null };
                        new EasyITCenterContext().SolutionFailLists.Add(SolutionFailList).Context.SaveChanges();
                        Console.WriteLine(mailRequest.Content); Debug.WriteLine(mailRequest.Content);
                    }
                }
                return DBResult.success.ToString();
            } catch (Exception ex) {
                return DBResult.error.ToString();
            }
        }

        /// <summary>
        /// Gets the self signed certificate For API Security HTTPS.
        /// </summary>
        /// <param name="password">The password.</param>
        /// <returns></returns>
        public static X509Certificate2 GetSelfSignedCertificate(string password) {
            var commonName = DbOperations.GetServerParameterLists("ConfigCertificateDomain").Value;
            var rsaKeySize = 2048;
            var years = 10;
            var hashAlgorithm = HashAlgorithmName.SHA256;

            using (var rsa = RSA.Create(rsaKeySize)) {
                var request = new CertificateRequest($"cn={commonName}", rsa, hashAlgorithm, RSASignaturePadding.Pkcs1);

                SubjectAlternativeNameBuilder subjectAlternativeNameBuilder = new();
                subjectAlternativeNameBuilder.AddDnsName(Assembly.GetExecutingAssembly().GetName().FullName);

                X509BasicConstraintsExtension extension = new();

                request.CertificateExtensions.Add(
                  new X509KeyUsageExtension(X509KeyUsageFlags.DataEncipherment | X509KeyUsageFlags.KeyEncipherment | X509KeyUsageFlags.DigitalSignature | X509KeyUsageFlags.KeyCertSign, false)
                );

                request.CertificateExtensions.Add(
                  new X509EnhancedKeyUsageExtension(
                    new OidCollection { new Oid("1.3.6.1.5.5.7.3.1"), new Oid("1.3.6.1.5.5.7.3.2") }, false)
                );

                var notAfter = DateTimeOffset.Now.AddYears(years);
                var certificate = request.CreateSelfSigned(DateTimeOffset.Now.AddDays(-1), notAfter);
                if (SrvOStype.IsWindows()) { certificate.FriendlyName = Assembly.GetExecutingAssembly().GetName().FullName; }

                try { //Saving Autogenerate Certificate
                    byte[] exportedData = certificate.Export(X509ContentType.Pfx, password);
                    File.WriteAllBytes(System.IO.Path.Combine(SrvRuntime.StartupPath, SrvRuntime.DataPath, "ServerAutoCertificate.pfx"), exportedData);
                } catch { }

                return new X509Certificate2(certificate.Export(X509ContentType.Pfx, password), password, X509KeyStorageFlags.Exportable);
            }
        }

        /// <summary>
        /// Set Imported Certificate from file on Server for Https File must has Valid path from
        /// Startup Data Path
        /// </summary>
        /// <returns></returns>
        public static X509Certificate2 GetSelfSignedCertificateFromFile(string FileNameFromDataPath) {
            byte[]? certificate = null;
            string? password = null;
            try {
                certificate = File.ReadAllBytes(System.IO.Path.Combine(SrvRuntime.StartupPath, SrvRuntime.DataPath, FileNameFromDataPath));
                password = DbOperations.GetServerParameterLists("ConfigCertificatePassword").Value;
                return new X509Certificate2(certificate, password);
            } catch (Exception Ex) { SendEmail(new SendMailRequest() { Content = "Incorrect Certificate Path or Password, " + DataOperations.GetErrMsg(Ex) }); }
            return GetSelfSignedCertificate(DbOperations.GetServerParameterLists("ConfigCertificatePassword").Value);
        }

        /// <summary>
        /// Calls the GET API URL with string Response
        /// </summary>
        /// <param name="url">The URL.</param>
        /// <returns></returns>
        public static async Task<string> CallGetApiUrl(string url) {
            HttpClient httpClient = new HttpClient();
            return await httpClient.GetStringAsync(url);
        }


       
       

        /// <summary>
        /// Server Token Validation Parameters definition For Api is Used if is ON/Off for Api is On everyTime
        /// </summary>
        /// <returns></returns>
        public static TokenValidationParameters ValidAndGetTokenParameters() {
            return new TokenValidationParameters {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(DbOperations.GetServerParameterLists("ConfigJwtLocalKey").Value)),
                ValidateIssuer = false,
                ValidateAudience = false, 
                ValidateLifetime = bool.Parse(DbOperations.GetServerParameterLists("ConfigTimeTokenValidationEnabled").Value),
                ClockSkew = TimeSpan.FromMinutes(double.Parse(DbOperations.GetServerParameterLists("ConfigApiTokenTimeoutMin").Value)),
            };
        }

        /// <summary>
        /// Token Validator Extension For Server WebPages
        /// </summary>
        /// <param name="tokenString">The token string.</param>
        /// <returns></returns>
        public static ServerWebPagesToken CheckTokenValidityFromString(string tokenString) {
            try {
                JwtSecurityTokenHandler? tokenForChek = new JwtSecurityTokenHandler();
                ClaimsPrincipal userClaims = tokenForChek.ValidateToken(tokenString, ValidAndGetTokenParameters(), out SecurityToken refreshedToken);
                ServerWebPagesToken validation = new() { Data = new() { { "Token", tokenString } }, UserClaims = userClaims, stringToken = tokenString, Token = refreshedToken, IsValid = refreshedToken != null, userRole = userClaims.FindFirstValue(ClaimTypes.Role) };
                return validation;
            } catch { }
            return new ServerWebPagesToken();
        }


        /// <summary>
        /// Extension For Checking Operation System of Server Running
        /// </summary>
        public static class SrvOStype {
            public static bool IsWindows() => RuntimeInformation.IsOSPlatform(OSPlatform.Windows);
            public static bool IsMacOS() => RuntimeInformation.IsOSPlatform(OSPlatform.OSX);
            public static bool IsLinux() => RuntimeInformation.IsOSPlatform(OSPlatform.Linux);
        }


        /// <summary>
        /// Scan Registered Routes List
        /// You Can Check Pfysical API Path
        /// Data are stored in ServerRuntimeData.ServerRegisteredRoutesList
        /// </summary>
        /// <param name="patchForCheck"></param>
        /// <param name="updateList"></param>
        public static bool GetServerRegisteredRoutesList(string patchForCheck, bool updateList = false) {
            try {
                if (updateList || SrvRuntime.SrvRegisteredRoutesList == null) { //a=>a.AttributeRouteInfo.Name action
                    var RouteGroups = ((IReadOnlyList<ActionDescriptor>)SrvRuntime.ActionRouterProvider.ActionDescriptors.Items).GroupBy(a => a.AttributeRouteInfo?.Template).ObjectToJson();
                    SrvRuntime.SrvRegisteredRoutesList = SrvRuntime.ActionRouterProvider.ActionDescriptors.Items.ToArray().ToList();
                    return RouteGroups.Contains(patchForCheck);
                }
            } catch { }
            return false;
        }
    }
}