using Microsoft.AspNetCore.StaticFiles;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.ResponseCompression;
using SignalRChat.Hubs;


namespace EasyITCenter {

    /// <summary>
    /// Server Startup Definitions
    /// </summary>
    public class StartupOrig {

        //https://github.com/fawdlstty/SimpleMS


        /// <summary>
        /// Server Core: Main Configure of Server Services, Technologies, Modules, etc..
        /// </summary>
        /// <param name="services"></param>
        /// <returns>void.</returns>
        public void ConfigureServices(IServiceCollection services) {

            ServerConfigurationServices.ConfigureDatabaseContext(ref services);
           


            ServerConfigurationServices.ConfigureCookie(ref services);
            ServerConfigurationServices.ConfigureControllers(ref services);
            ServerConfigurationServices.ConfigureDefaultAuthentication(ref services);
            ServerConfigurationServices.ConfigureLetsEncrypt(ref services);
            services.AddHttpContextAccessor();
            services.AddResponseCompression(options => { options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(new[] { "text/javascript" }); });
            services.AddResponseCaching();
            //services.AddMemoryCache();
            //services.AddDistributedMemoryCache();
            services.AddSession(options => { options.Cookie.Name = "SessionCookie";
                options.Cookie.SameSite = SameSiteMode.Lax; options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
                options.Cookie.IsEssential = true; options.IdleTimeout = TimeSpan.FromMinutes(30);
            });

            services.AddEndpointsApiExplorer();
            //ServerConfigurationServices.ConfigureWebSocketLoggerMonitor(ref services);
            //ServerConfigurationServices.ConfigureRssFeed(ref services);



            //ServerModules.ConfigureScheduler(ref services);
            //ServerModules.ConfigureSwagger(ref services);
            //ServerModules.ConfigureHealthCheck(ref services);
            //ServerModules.ConfigureDocumentation(ref services);
            //ServerModules.ConfigureLiveDataMonitor(ref services);
            //ServerModules.ConfigureDBEntitySchema(ref services);
            //ServerModules.ConfigureMarkdownAsHtmlFiles(ref services);
            //ServerModules.ConfigureReportDesigner(ref services);


            //REGISTERING SERVICES BY CLASS OR INTERFACE

            //ServerConfigurationServices.ConfigureUserFluentEmailing(ref services);
            //ServerConfigurationServices.AutoRegisterClassServices(ref services);
            //ServerConfigurationServices.ConfigureTransient(ref services);
            //ServerConfigurationServices.ConfigureSingletons(ref services);

            //https://github.com/dotnet/AspNetCore.Docs/blob/main/aspnetcore/signalr/dotnet-client/sample/SignalRChatClient/MainWindow.xaml.cs
            //primi chat s aplikaci
            services.AddSignalR();
            //services.AddServerSideBlazor();

            ServerConfigurationServices.ConfigureServerManagement(ref services);
        }


        /// <summary>
        /// Server Core: Main Enabling of Server Services, Technologies, Modules, etc..
        /// </summary>
        /// <param name="app">           </param>
        /// <param name="serverLifetime"></param>
        public async void Configure(IApplicationBuilder app, IHostApplicationLifetime serverLifetime, IActionDescriptorCollectionProvider routerActionProvider) {

            SrvRuntime.ActionRouterProvider = routerActionProvider;
            serverLifetime.ApplicationStarted.Register(ServerOnStarted); serverLifetime.ApplicationStopping.Register(ServerOnStopping); serverLifetime.ApplicationStopped.Register(ServerOnStopped);
            ServerEnablingServices.EnableLogging(ref app);

            if (bool.Parse(DbOperations.GetServerParameterLists("ConfigServerStartupOnHttps").Value)) {
                app.UseForwardedHeaders(new ForwardedHeadersOptions { ForwardedHeaders = ForwardedHeaders.All });
                app.UseCertificateForwarding();
            }



            //Applied new Working Style For Files Markdown, Html, Editor, Images,
            app.Use(async (HttpContext context, Func<Task> next) => {
                string requestPath = context.Request.Path.ToString().ToLower(); bool redirected = false;
                context = CoreOperations.IncludeCookieTokenToRequest(context); //Include TOKEN


                //Ignored WEBSOCKET && DEFINED SPECIAL PATHS RUN DIRECLY
                //TODO INSERT ALL Server PORTAL Prefixes SAME AS Registered DB
                if (!context.WebSockets.IsWebSocketRequest) { await next();
                    //GO TO CONTROLLED AREA



                    //TODO NOT CORRECT AND MISSING ACCESS IN DB
                    //Excluded Url For Server Browsing From Page Settings, redirected Defined paths
                    if (DbOperations.CheckDBServerApiRule(requestPath)?.Count() > 0
                    //|| (!string.IsNullOrEmpty(System.IO.Path.GetExtension(context.Request.Path)))
                    || context.Response.StatusCode == StatusCodes.Status301MovedPermanently || context.Response.StatusCode == StatusCodes.Status302Found
                    ) { return; }



                    //Check Server Api Security if ok Allow go to NEXT PROCESSES
                    ServerApiSecurityList? serverApiSecurity = DbOperations.GetServerApiSecurity(requestPath);
                    if (serverApiSecurity != null) {
                        if (context.User.Identity != null && context.User.FindFirstValue(ClaimTypes.PrimarySid) == null
                        && ( ( context.Request.Method == "GET" && serverApiSecurity.ReadRestrictedAccess ) || ( context.Request.Method == "POST" && serverApiSecurity.WriteRestrictedAccess ) )) {
                            if (serverApiSecurity.RedirectPathOnError?.Length == 0) { redirected = true; context.Request.Path = "/StatusPageService/401UnauthorizedPage"; await next(); } else {
                                ServerModuleAndServiceList? loginModule = new EasyITCenterContext().ServerModuleAndServiceLists.FirstOrDefault(a => a.IsLoginModule);
                                if (context.Items.FirstOrDefault(a => a.Key.ToString() == "LoginModule").Value != null) { context.Items.Remove("LoginModule"); }
                                try { context.Items.Add(new KeyValuePair<object, object?>("LoginModule", loginModule)); } catch { }
                                try { context.Response.Cookies.Append("RequestedModulePath", requestPath); } catch { }
                                redirected = true; context.Request.Path = "/SystemModules"; await next();
                            }
                        } else if (context.User.Identity != null && context.User.FindFirstValue(ClaimTypes.PrimarySid) != null
                              && ( ( context.Request.Method == "GET" && serverApiSecurity.ReadRestrictedAccess && serverApiSecurity.ReadAllowedRoles != null && !serverApiSecurity.ReadAllowedRoles.ToLower().Split(",").Contains(context.User.FindFirstValue(ClaimTypes.Role).ToLower()) )
                              || ( context.Request.Method != "GET" && serverApiSecurity.WriteRestrictedAccess && serverApiSecurity.WriteAllowedRoles != null && !serverApiSecurity.WriteAllowedRoles.ToLower().Split(",").Contains(context.User.FindFirstValue(ClaimTypes.Role).ToLower()) )
                              )) {
                            if (serverApiSecurity.RedirectPathOnError?.Length == 0) { redirected = true; context.Request.Path = "/StatusPageService/401UnauthorizedPage"; await next(); } else {
                                ServerModuleAndServiceList? loginModule = new EasyITCenterContext().ServerModuleAndServiceLists.FirstOrDefault(a => a.IsLoginModule);
                                if (context.Items.FirstOrDefault(a => a.Key.ToString() == "LoginModule").Value != null) { context.Items.Remove("LoginModule"); }
                                try { context.Items.Add(new KeyValuePair<object, object?>("LoginModule", loginModule)); } catch { }
                                try { context.Response.Cookies.Append("RequestedModulePath", requestPath); } catch { }
                                redirected = true; context.Request.Path = "/SystemModules"; await next();

                            }
                        }

                    } else if (context.Response.StatusCode == StatusCodes.Status200OK) { return; }
                    // ALLOVE All 200 AFTER SECURITY CHECK - DYNAMIC MODULES AND ALL OTHER MUST BE 404



                    //Verify Request For Detect Layout, Redirection, Module, Correct File Path, WebMenu Selection
                    RouteLayoutTypes routeLayout = RouteLayoutTypes.EmptyLayout; RoutingActionTypes commandType = RoutingActionTypes.None; string fileValidUrl = context.Request.Path;
                    context = CoreOperations.ChechUrlRequestValidOrAuthorized(context);
                    try { routeLayout = ( (RouteLayoutTypes)context.Items.FirstOrDefault(a => a.Key.ToString() == "RouteLayoutTypes").Value ); } catch { }
                    try { commandType = ( (RoutingActionTypes)context.Items.FirstOrDefault(a => a.Key.ToString() == "CommandType").Value ); } catch { }
                    try { fileValidUrl = ( (string)context.Items.FirstOrDefault(a => a.Key.ToString() == "FileValidUrl").Value ); } catch { }

                    //Show MarkDownFile in Layout by missing .md extension
                    if (!redirected && routeLayout == RouteLayoutTypes.ViewerMarkDownFileLayout) { redirected = true; context.Request.Path = "/ViewerMarkDownFile"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }
                    //Show Report File in Layout by .frx extension
                    else if (!redirected && routeLayout == RouteLayoutTypes.ViewerReportFileLayout) { redirected = true; context.Request.Path = "/ReportViewer/ViewerReportFile"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); } else if (!redirected && routeLayout == RouteLayoutTypes.ServerPortalLayout) { redirected = true; return; } else if (!redirected && routeLayout == RouteLayoutTypes.SystemPortalLayout && requestPath != fileValidUrl) { redirected = true; context.Request.Path = "/SystemPortal"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); } else if (!redirected && routeLayout == RouteLayoutTypes.SystemModulesLayout && requestPath != fileValidUrl) { redirected = true; context.Request.Path = "/SystemModules"; context.Response.StatusCode = StatusCodes.Status200OK; await next(); }

                    if (!redirected && commandType == RoutingActionTypes.Return) { return; } else if (!redirected && commandType == RoutingActionTypes.Next) { context.Request.Path = fileValidUrl; context.Response.StatusCode = StatusCodes.Status200OK; await next(); } else if (!redirected && commandType == RoutingActionTypes.Next && context.Request.Path.ToString().ToLower() == fileValidUrl) { return; }
                }
            });


            app.UseExceptionHandler("/Error");
            app.UseRouting();
            app.UseDefaultFiles(new DefaultFilesOptions() { DefaultFileNames = new List<string> { "index.html" } });
            //ServerModulesEnabling.EnableMarkdownAsHtmlFiles(ref app);

            app.UseHsts();
            if (bool.Parse(DbOperations.GetServerParameterLists("ConfigServerStartupOnHttps").Value)) { app.UseHttpsRedirection(); }

            //Allowed File Types For Web TODO define over Administration
            FileExtensionContentTypeProvider? staticFilesProvider = new FileExtensionContentTypeProvider();
            staticFilesProvider.Mappings[".js"] = "text/javascript"; staticFilesProvider.Mappings[".css"] = "text/css";
            staticFilesProvider.Mappings[".json"] = "application/json"; staticFilesProvider.Mappings[".code"] = "text/cs";
            staticFilesProvider.Mappings[".xaml"] = "text/xaml"; staticFilesProvider.Mappings[".zip"] = "application/zip";
            staticFilesProvider.Mappings[".markdown"] = "text/markdown"; staticFilesProvider.Mappings[".snippets"] = "text/plain";
            staticFilesProvider.Mappings[".tsx"] = "text/javascript"; staticFilesProvider.Mappings[".html"] = "text/html; charset=utf-8";
            staticFilesProvider.Mappings[".jpg"] = "image/jpeg"; staticFilesProvider.Mappings[".jpeg"] = "image/jpeg";
            staticFilesProvider.Mappings[".png"] = "image/png"; staticFilesProvider.Mappings[".gif"] = "image/gif";
            staticFilesProvider.Mappings[".ico"] = "image/vnd.microsoft.icon"; staticFilesProvider.Mappings[".ttf"] = "font/ttf";
            staticFilesProvider.Mappings[".ts"] = "text/javascript";

            //app.UseStaticFiles(new StaticFileOptions { ServeUnknownFileTypes = true, ContentTypeProvider = staticFilesProvider, HttpsCompression = HttpsCompressionMode.Compress, DefaultContentType = "text/html" });
            app.UseStaticFiles(new StaticFileOptions { ServeUnknownFileTypes = true });

            app.UseCookiePolicy();
            app.UseSession();
            app.UseResponseCaching();
            app.UseResponseCompression();

            app.UseAuthentication();
            app.UseAuthorization();
            //ServerEnablingServices.EnableAutoMinify(ref app);
            //ServerModulesEnabling.EnableSwagger(ref app);
            //ServerModulesEnabling.EnableLiveDataMonitor(ref app);
            //ServerModulesEnabling.EnableDBEntitySchema(ref app);
            //ServerModulesEnabling.EnableReportDesigner(ref app);
            ServerEnablingServices.EnableCors(ref app);
            //ServerEnablingServices.EnableWebSocket(ref app);
            //ServerEnablingServices.EnableEndpoints(ref app);
            //ServerModulesEnabling.EnableDocumentation(ref app);
            //ServerEnablingServices.EnableRssFeed(ref app);

            if (bool.Parse(DbOperations.GetServerParameterLists("WebBrowserContentEnabled").Value)) { //Browsable Path Definitions
                List<ServerStaticOrMvcDefPathList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().ServerStaticOrMvcDefPathLists.Where(a => a.IsBrowsable && a.Active).ToList(); }

                data.ForEach(path => {
                    try {
                        app.UseFileServer(new FileServerOptions {
                            FileProvider = new PhysicalFileProvider(Path.Combine(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(path.WebRootSubPath))),
                            RequestPath = path.WebRootSubPath.StartsWith("/") ? path.WebRootSubPath : "/" + path.WebRootSubPath, EnableDirectoryBrowsing = true
                        });
                        if (!string.IsNullOrWhiteSpace(path.AliasPath)) { app.UseFileServer(new FileServerOptions { FileProvider = new PhysicalFileProvider(Path.Combine(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(path.WebRootSubPath))),
                            RequestPath = !string.IsNullOrWhiteSpace(path.AliasPath) ? ( path.AliasPath.StartsWith("/") ? path.AliasPath : "/" + path.AliasPath ) : "", EnableDirectoryBrowsing = true
                        });
                        }
                    } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); }
                });
            }

            if (bool.Parse(DbOperations.GetServerParameterLists("WebMvcPagesEngineEnabled").Value)) { app.UseMvcWithDefaultRoute(); }
            try { app.UsePathBase(DbOperations.GetServerParameterLists("RedirectPath").Value); } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); }
            if (bool.Parse(DbOperations.GetServerParameterLists("BrowserLinkEnabled").Value)) { app.UseBrowserLink(); }
            if (bool.Parse(DbOperations.GetServerParameterLists("ModuleWebDataManagerEnabled").Value)) { app.UseEasyData(); }


            //Load registered routes List To Runtime
            CoreOperations.GetServerRegisteredRoutesList("",true);
        }

        /// <summary>
        /// Server Core Enabling Disabling Hosted Services
        /// </summary>
        private void ServerOnStarted() => SrvRuntime.ServerCoreStatus = ServerStatusTypes.Running.ToString();
        private void ServerOnStopping() => SrvRuntime.ServerCoreStatus = ServerStatusTypes.Stopping.ToString();
        private void ServerOnStopped() => SrvRuntime.ServerCoreStatus = ServerStatusTypes.Stopped.ToString();
    }
}