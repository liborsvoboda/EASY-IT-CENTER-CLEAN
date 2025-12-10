using MarkdownDocumenting.Extensions;

namespace EASYDATACenter.ServerConfiguration {

    /// <summary>
    /// Configure Server Ad-dons and Modules
    /// </summary>
    public class ServerModulesConfiguration {
        public static readonly string SwaggerModuleDescription = "Full Backend Server DB & API & WebSocket model";

        /// <summary>
        /// Server Module: Automatic DB Data Manager for work with data directly
        /// services.AddCoreAdmin("Admin"); is Token RoleName
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureCoreAdmin(ref IServiceCollection services) {
            if (BackendServer.ServerSettings.ModuleDataManagerEnabled) { services.AddCoreAdmin(); }
        }

        /// <summary>
        /// Server Module: Generted Developer Documentation for Defvelopers Documentation contain
        /// full Server Structure for extremelly simple developing
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureDocumentation(ref IServiceCollection services) {
            if (BackendServer.ServerSettings.ModuleMdDocumentationEnabled) { services.AddDocumentation(); }
        }

        /// <summary>
        /// Server Module: Automatic DB Data Manager for work with data directly
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureHealthCheck(ref IServiceCollection services) {
            if (BackendServer.ServerSettings.ModuleHealthServiceEnabled && !BackendServer.ServerRuntimeData.DebugMode) {
                services.AddHealthChecks()
                .AddSqlServer(BackendServer.ServerSettings.DatabaseConnectionString, null, "DB Connection Check")
                .AddDbContextCheck<EASYDATACenterContext>()
                .AddDiskStorageHealthCheck(diskOptions => { diskOptions.AddDrive(driveName: "c:\\", 1000); }, "Drive C free space is more than 1GB")
                .AddProcessAllocatedMemoryHealthCheck(200, "Used Process Memory under 200MB")
                .AddFolder(folderOption => { folderOption.AddFolder(BackendServer.ServerRuntimeData.Setting_folder); }, "Setting Folder")
                .AddUrlGroup(new Uri((BackendServer.ServerSettings.ConfigServerStartupOnHttps) ? $"https://localhost:{BackendServer.ServerSettings.ConfigServerStartupPort}" + "/CoreAdmin" : $"http://localhost:{BackendServer.ServerSettings.ConfigServerStartupPort}" + "/CoreAdmin"), "CoreAdmin - Data Manager")
                .AddUrlGroup(new Uri((BackendServer.ServerSettings.ConfigServerStartupOnHttps) ? $"https://localhost:{BackendServer.ServerSettings.ConfigServerStartupPort}" + "/AdminApiDocs" : $"http://localhost:{BackendServer.ServerSettings.ConfigServerStartupPort}" + "/AdminApiDocs"), "swagger - Api Documentation")
                .AddWorkingSetHealthCheck(500 * 1024 * 1024, "All Used Memory under 500MB");

                services.AddHealthChecksUI(setup => {
                    setup.AddHealthCheckEndpoint("Server services", (BackendServer.ServerSettings.ConfigServerStartupOnHttps) ? $"https://localhost:{BackendServer.ServerSettings.ConfigServerStartupPort}" + "/HealthResultService" : $"http://localhost:{BackendServer.ServerSettings.ConfigServerStartupPort}" + "/HealthResultService");
                    setup.DisableDatabaseMigrations();
                    setup.SetApiMaxActiveRequests(10);
                    setup.SetEvaluationTimeInSeconds(BackendServer.ServerSettings.ModuleHealthServiceRefreshIntervalSec);
                    setup.MaximumHistoryEntriesPerEndpoint(30);
                }).AddInMemoryStorage(optionsBuilder => { optionsBuilder.EnableSensitiveDataLogging(false); });
            }
        }

        /// <summary>
        /// Server Module: Swagger Api Doc Generator And Online Tester Configuration
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureSwagger(ref IServiceCollection services) {
            if (BackendServer.ServerSettings.ModuleSwaggerApiDocEnabled) {
                services.AddSwaggerGen(c => {
                    c.AddSecurityDefinition("Basic", new OpenApiSecurityScheme { Name = "Authorization", Type = SecuritySchemeType.Http, Scheme = "basic", In = ParameterLocation.Header, Description = "Basic Authorization header for getting Bearer Token." });
                    c.AddSecurityRequirement(new OpenApiSecurityRequirement
                    { { new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Basic" } }, new List<string>() } });
                    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme { Description = "JWT Authorization header using the Bearer scheme for All safe APIs.", Name = "Authorization", In = ParameterLocation.Header, Scheme = "bearer", Type = SecuritySchemeType.Http, BearerFormat = "JWT" });
                    c.AddSecurityRequirement(new OpenApiSecurityRequirement
                    { { new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" } }, new List<string>() } });

                    c.SchemaGeneratorOptions = new SchemaGeneratorOptions { SchemaIdSelector = type => type.FullName };
                    c.SwaggerDoc(Assembly.GetEntryAssembly().GetName().Version.ToString(), new OpenApiInfo {
                        Title = BackendServer.ServerSettings.SpecialServerServiceName + " Server API",
                        Version = Assembly.GetEntryAssembly().GetName().Version.ToString(),
                        Description = SwaggerModuleDescription,
                        Contact = new OpenApiContact { Name = "Libor Svoboda", Email = BackendServer.ServerSettings.EmailerServiceEmailAddress, Url = new Uri("https://groupware-solution.eu/contactus") },
                        License = new OpenApiLicense { Name = BackendServer.ServerSettings.SpecialServerServiceName + " Server License", Url = new Uri("https://www.groupware-solution.eu/") }
                    });

                    var xmlFile = Path.Combine(AppContext.BaseDirectory, $"{BackendServer.ServerSettings.SpecialServerServiceName}.xml");
                    if (File.Exists(xmlFile)) c.IncludeXmlComments(xmlFile, true);

                    //c.InferSecuritySchemes();
                    c.UseOneOfForPolymorphism();
                    //c.UseInlineDefinitionsForEnums();
                    c.DescribeAllParametersInCamelCase();
                    c.EnableAnnotations(true, true);
                    c.UseAllOfForInheritance();
                    c.SupportNonNullableReferenceTypes();
                    //c.UseAllOfToExtendReferenceSchemas();
                    c.DocInclusionPredicate((docName, description) => true);
                    c.CustomSchemaIds(type => type.FullName);
                    c.ResolveConflictingActions(x => x.First());
                });
            }
        }
    }

    /// <summary>
    /// Enable Configured Server Ad-dons and Modules
    /// </summary>
    public class ServerModulesEnabling {

        /// <summary>
        /// Server Module: Enable Swagger Api Doc Generator And Online Tester
        /// </summary>
        internal static void EnableCoreAdmin(ref IApplicationBuilder app) {
            app.UseCoreAdminCustomTitle("Data Management");
            //app.UseCoreAdminCustomAuth((o) => { o.; return CommunicationController.CheckAdmin(o); });
            if (BackendServer.ServerSettings.ModuleDataManagerEnabled) { app.UseCoreAdminCustomUrl("CoreAdmin"); }
        }

        /// <summary>
        /// Server Module: Enable Generated Developer Documentation
        /// </summary>
        internal static void EnableDocumentation(ref IApplicationBuilder app) {
            if (BackendServer.ServerSettings.ModuleMdDocumentationEnabled) {
                app.UseDocumentation(builder => {
                    builder.HighlightJsStyle = "/metro/css/material-darker.css";
                    builder.GetMdlStyle = "/metro/css/material.min.css";
                    builder.NavBarStyle = MarkdownDocumenting.Elements.NavBarStyle.Default;

                    builder.RootPathHandling = HandlingType.HandleWithHighOrder;
                    builder.IndexDocument = ("EASYDATACenterFullCodeDocs");

                    if (BackendServer.ServerSettings.ServerRazorWebPagesEngineEnabled) builder.AddCustomLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DashBoard", BackendServer.ServerSettings.ConfigServerLanguage), "/DashBoard"));
                    if (BackendServer.ServerSettings.ModuleHealthServiceEnabled) builder.AddCustomLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("GithubInteli", BackendServer.ServerSettings.ConfigServerLanguage), "https://liborsvoboda.github.io/EASYSYSTEM-EASYSERVER-EN/"));

                    if (BackendServer.ServerSettings.ServerRazorWebPagesEngineEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DashBoard", BackendServer.ServerSettings.ConfigServerLanguage), "/DashBoard"));
                    if (BackendServer.ServerSettings.ServerWebBrowserEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("ServerFiles", BackendServer.ServerSettings.ConfigServerLanguage), "/server"));
                    if (BackendServer.ServerSettings.ModuleSwaggerApiDocEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("AutoGeneratedApiDocsWithTesting", BackendServer.ServerSettings.ConfigServerLanguage), "/AdminApiDocs"));
                    if (BackendServer.ServerSettings.ModuleDataManagerEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DataManagementForDevMode", BackendServer.ServerSettings.ConfigServerLanguage), "/CoreAdmin"));
                    if (BackendServer.ServerSettings.ModuleDbDiagramGeneratorEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DbDgmlSchema", BackendServer.ServerSettings.ConfigServerLanguage), "/DbDgmlSchema"));
                    if (BackendServer.ServerSettings.ModuleHealthServiceEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("ConfiguredServerHeathCheckService(>200)", BackendServer.ServerSettings.ConfigServerLanguage), "/ServerHealthService"));

                    builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("Groupware-Solution.Eu", BackendServer.ServerSettings.ConfigServerLanguage), "https://Groupware-Solution.Eu"));
                    builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("GitHub", BackendServer.ServerSettings.ConfigServerLanguage), "https://github.com/liborsvoboda"));
                    builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("GitHubInteli", BackendServer.ServerSettings.ConfigServerLanguage), "https://liborsvoboda.github.io/EASYSYSTEM-EASYSERVER-EN/"));
                    builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("OnlineExamples", BackendServer.ServerSettings.ConfigServerLanguage), "https://KlikneteZde.Cz"));
                });
            }
        }

        /// <summary>
        /// Server Module: Enable Swagger Api Doc Generator And Online Tester
        /// </summary>
        internal static void EnableSwagger(ref IApplicationBuilder app) {
            if (BackendServer.ServerSettings.ModuleSwaggerApiDocEnabled) {
                app.UseSwagger();
                app.UseSwaggerUI(c => {
                    c.RoutePrefix = "AdminApiDocs";
                    c.DocumentTitle = ServerModulesConfiguration.SwaggerModuleDescription;
                    c.SwaggerEndpoint("/swagger/" + Assembly.GetEntryAssembly().GetName().Version.ToString() + "/swagger.json", "Server API version " + Assembly.GetEntryAssembly().GetName().Version.ToString());
                    c.DocExpansion(DocExpansion.None);
                    c.EnableTryItOutByDefault();
                    c.DisplayRequestDuration();
                    //c.EnableDeepLinking();
                    c.EnableFilter();
                    //c.DisplayOperationId();
                    c.DefaultModelExpandDepth(1);
                    c.DefaultModelRendering(ModelRendering.Model);
                    c.DefaultModelsExpandDepth(1);
                    //c.EnablePersistAuthorization();
                    //c.EnableValidator();
                    //c.ShowCommonExtensions();
                    //c.ShowExtensions();
                    c.SupportedSubmitMethods(SubmitMethod.Get, SubmitMethod.Head, SubmitMethod.Post);
                    c.UseRequestInterceptor("(request) => { return request; }");
                    c.UseResponseInterceptor("(response) => { return response; }");
                });
            }
        }


    }
}