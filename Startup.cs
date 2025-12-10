namespace EASYDATACenter {

    /// <summary>
    /// Server Startup Definitions
    /// </summary>
    public class Startup {

        /// <summary>
        /// Server Core: Main Configure of Server Services, Technologies, Modules, etc..
        /// </summary>
        /// <param name="services"></param>
        /// <returns>void.</returns>
        public void ConfigureServices(IServiceCollection services) {

            #region Server Data Segment

            ServerCoreConfiguration.ConfigureScopes(ref services);
            ServerCoreConfiguration.ConfigureDatabaseContext(ref services);
            ServerCoreConfiguration.ConfigureThirdPartyApi(ref services);
            ServerCoreConfiguration.ConfigureLogging(ref services);

            ServerCoreConfiguration.ConfigureServerWebPages(ref services);
            if (BackendServer.ServerSettings.ServerWebBrowserEnabled) services.AddDirectoryBrowser();

            #endregion Server Data Segment

            #region Server Core & Security

            ServerCoreConfiguration.ConfigureCookie(ref services);
            ServerCoreConfiguration.ConfigureControllers(ref services);
            ServerCoreConfiguration.ConfigureAuthentication(ref services);
            services.AddHttpContextAccessor();
            services.AddEndpointsApiExplorer();

            #endregion Server Core & Security

            #region Server Modules

            ServerModulesConfiguration.ConfigureCoreAdmin(ref services);
            ServerModulesConfiguration.ConfigureSwagger(ref services);
            ServerModulesConfiguration.ConfigureHealthCheck(ref services);
            ServerModulesConfiguration.ConfigureDocumentation(ref services);
            #endregion Server Modules
        }

        /// <summary>
        /// Server Core: Main Enabling of Server Services, Technologies, Modules, etc..
        /// </summary>
        /// <param name="app">          </param>
        /// <param name="loggerFactory"></param>
        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory) {
            ServerEnablingServices.EnableLogging(ref app, ref loggerFactory);
            ServerModulesEnabling.EnableSwagger(ref app);

            app.Use(async (context, next) => { await next(); if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value)) { context.Request.Path = "/server"; await next(); } });
            app.UseForwardedHeaders(new ForwardedHeadersOptions { ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto });
            app.UseExceptionHandler("/Error");
            app.UseRouting();
            app.UseDefaultFiles();
            app.UseHsts();
            app.UseStaticFiles(new StaticFileOptions { ServeUnknownFileTypes = true });
            app.UseCookiePolicy();
            app.UseAuthentication();
            app.UseAuthorization();

            ServerEnablingServices.EnableCors(ref app);
            ServerEnablingServices.EnableWebSocket(ref app);
            ServerEnablingServices.EnableEndpoints(ref app);

            ServerModulesEnabling.EnableCoreAdmin(ref app);
            ServerModulesEnabling.EnableDocumentation(ref app);

            if (BackendServer.ServerSettings.ServerWebBrowserEnabled) { app.UseDirectoryBrowser(); }
            if (BackendServer.ServerSettings.ServerFtpEngineEnabled) { app.UseFileServer(enableDirectoryBrowsing: true); }
            if (BackendServer.ServerSettings.ServerMvcWebPagesEngineEnabled) { app.UseMvcWithDefaultRoute(); }
        }
    }
}