using EASYTools.DBEntitySchema.Core;
using Markdig.Extensions.AutoIdentifiers;
using Markdig;
using MarkdownDocumenting.Extensions;
using Quartz.Impl;
using Quartz.Spi;
using Westwind.AspNetCore.LiveReload;
using Westwind.AspNetCore.Markdown;
using Pek.Markdig.HighlightJs;
using Docfx.MarkdigEngine.Extensions;


namespace EasyITCenter.ServerCoreConfiguration {
   
    /// <summary>
    /// Configure Server Ad-dons and Modules
    /// </summary>
    public class ServerModules {


        /// <summary>
        /// Server Module: Configure Report Designer Module
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureReportDesigner(ref IServiceCollection services) {
            services.AddFastReport();
        }
        


        /// <summary>
        /// Server Module: Configure Automatic MDtoHtml Files Show in WebPages
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureMarkdownAsHtmlFiles(ref IServiceCollection services) {
            if (bool.Parse(DbOperations.GetServerParameterLists("EnableAutoShowStaticMdAsHtml").Value))
            {
                services.AddMarkdown(config =>
                {
                    config.ConfigureMarkdigPipeline = builder =>
                    {
                        builder.UseEmphasisExtras(Markdig.Extensions.EmphasisExtras.EmphasisExtraOptions.Default)
                            .UsePipeTables().UseGridTables().UseAutoIdentifiers(AutoIdentifierOptions.GitHub)
                            .UseAutoLinks().UseAbbreviations().UseEmojiAndSmiley(true).UseListExtras()
                            .UseAdvancedExtensions().UseBootstrap().UseCitations().UseDefinitionLists()
                            .UseDiagrams().UseEmphasisExtras().UseFigures().UseListExtras().UseFooters().UseFootnotes()
                            .UseGlobalization().UseMathematics().UseMediaLinks().UsePreciseSourceLocation().UseReferralLinks()
                            .UseSmartyPants().UseTaskLists().UseDFMCodeInfoPrefix()
                            .UseHighlightJs().UseInteractiveCode().UseXref()//.UsePrism()
                            .UseUrlRewriter(link => link.Url.AsRelativeResource())
                            //.UseUrlRewriter(link => link.Url.Replace(!ServerConfigSettings.ConfigServerStartupOnHttps && ServerConfigSettings.ConfigServerStartupHTTPAndHTTPS ? "https://" : "http://", !ServerConfigSettings.ConfigServerStartupOnHttps && ServerConfigSettings.ConfigServerStartupHTTPAndHTTPS ? "http://" : "https://"))
                            .UseFigures().UseTaskLists().UseCustomContainers().UseGenericAttributes();//.Build();
                    };
                });
            }
        }
        

        /// <summary>
        /// Server Module: Configures the Scheduler Module.
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureScheduler(ref IServiceCollection services) {
            if (bool.Parse(DbOperations.GetServerParameterLists("ModuleAutoSchedulerEnabled").Value)) {
                services.AddSingleton<IJobFactory, JobFactory>();
                var scheduler = new StdSchedulerFactory().GetScheduler().ConfigureAwait(false).GetAwaiter().GetResult();
                services.AddSingleton(provider => { scheduler.JobFactory = provider.GetService<IJobFactory>(); return scheduler; });
                SrvRuntime.SrvScheduler = scheduler;
                services.AddHostedService<AutoSchedulerService>();
                ServerCoreAutoScheduler.AutoSchedulerPlanner().GetAwaiter().GetResult();
            }
        }


        /// <summary>
        /// Server Module: Generated Developer Documentation for Developers Documentation contain
        /// full Server Structure for extremely simple developing
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureDocumentation(ref IServiceCollection services) {
            if (bool.Parse(DbOperations.GetServerParameterLists("ModuleMdDocumentationEnabled").Value)) { services.AddDocumentation(); }
        }


        /// <summary>
        /// Module Entity Schema Design Generator
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureDBEntitySchema(ref IServiceCollection services) {
            if (bool.Parse(DbOperations.GetServerParameterLists("ModuleDBEntitySchemaEnabled").Value)) { services.AddDBEntitySchema(DBConn.DatabaseConnectionString); }
        }


        
        /// <summary>
        /// Server Module: Generated Developer Documentation for Developers Documentation contain
        /// full Server Structure for extremely simple developing
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureLiveDataMonitor(ref IServiceCollection services) {
            if (bool.Parse(DbOperations.GetServerParameterLists("WebLiveDataMonitorEnabled").Value)) {
                try {
                    List<ServerLiveDataMonitorList> data;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        data = new EasyITCenterContext().ServerLiveDataMonitorLists.Where(a => a.Active).ToList();
                    }
                    Console.WriteLine("Live Data Monitoring Paths: " + data.ObjectToJson());
                    if (data != null) {
                        
                        foreach (ServerLiveDataMonitorList monitor in data) {
                            services.AddLiveReload(config => {
                                try {
                                    if (FileOperations.CheckDirectory(Path.Combine(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(monitor.RootPath)))) {
                                        config.LiveReloadEnabled = true;
                                        config.ServerRefreshTimeout = 10000;
                                        config.FolderToMonitor = Path.Combine(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(monitor.RootPath));
                                        if (monitor.FileExtensions.Length > 0) { config.ClientFileExtensions = monitor.FileExtensions; }
                                    }
                                    else { CoreOperations.SendEmail(new SendMailRequest() { Content = "Path For Live Data Monitoring not Exist" + System.IO.Path.Combine(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(monitor.RootPath))}); }
                                } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); }
                            });
                        }
                    } else { services.AddLiveReload(); }
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); }
            }
        }

        /// <summary>
        /// Server Module: Automatic DB Data Manager for work with data directly Extreme
        /// Posibilities https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureHealthCheck(ref IServiceCollection services) {
            if (bool.Parse(DbOperations.GetServerParameterLists("ModuleHealthServiceEnabled").Value)) {
                //TODO Custom Health Checks
                //services.AddStartupTask<ServerCycleTaskList>();
                services.AddHealthChecks()
                .AddSqlServer(DBConn.DatabaseConnectionString, null, "Kontrola připojení k DB ")
                .AddDbContextCheck<EasyITCenterContext>("DB Schema");

                List<ServerHealthCheckTaskList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    data = new EasyITCenterContext().ServerHealthCheckTaskLists.Where(a => a.Active).ToList();
                }
                Console.WriteLine("ServerHealth Monitoring Tasks: " + data.ObjectToJson());
                foreach (ServerHealthCheckTaskList item in data) {
                    try {
                        switch (item.InheritedCheckType) {
                            case "driveSize":
                                services.AddHealthChecks().AddDiskStorageHealthCheck(diskOptions => { diskOptions.AddDrive(driveName: item.ServerDrive, item.SizeMb.Value); }, item.TaskName);
                                break;

                            case "folderExist":
                                if (item.FolderPath != null && FileOperations.CheckDirectory(item.FolderPath)) {
                                    services.AddHealthChecks().AddFolder(folderOption => { folderOption.AddFolder(System.IO.Path.GetFullPath(item.FolderPath)); }, item.TaskName);
                                }
                                break;

                            case "processMemory":
                                services.AddHealthChecks().AddProcessAllocatedMemoryHealthCheck(item.SizeMb.Value, item.TaskName);
                                break;

                            case "allocatedMemory":
                                services.AddHealthChecks().AddWorkingSetHealthCheck(item.SizeMb.Value * 1024 * 1024, item.TaskName);
                                break;

                            case "ping":
                                services.AddHealthChecks().AddPingHealthCheck(option => { option.AddHost(item.IpAddress, 10); }, item.TaskName);
                                break;

                            case "tcpPort":
                                services.AddHealthChecks().AddTcpHealthCheck(option => { option.AddHost(item.IpAddress, item.Port.Value); }, item.TaskName);
                                break;

                            case "serverUrlPath":
                                services.AddHealthChecks().AddUrlGroup(new Uri(bool.Parse(DbOperations.GetServerParameterLists("ConfigServerStartupOnHttps").Value) ? $"https://localhost:{DbOperations.GetServerParameterLists("ConfigServerStartupHttpsPort").Value}" + item.ServerUrlPath : $"http://localhost:{DbOperations.GetServerParameterLists("ConfigServerStartupHttpPort").Value}" + item.ServerUrlPath), item.TaskName);
                                if (bool.Parse(DbOperations.GetServerParameterLists("ConfigServerStartupHTTPAndHTTPS").Value)) { services.AddHealthChecks().AddUrlGroup(new Uri($"http://localhost:{DbOperations.GetServerParameterLists("ConfigServerStartupHttpPort").Value}" + item.ServerUrlPath), item.TaskName + "_HTTP"); }
                                break;

                            case "urlPath":
                                services.AddHealthChecks().AddUrlGroup(new Uri(item.UrlPath), item.TaskName);
                                break;

                            case "mssqlConnection":
                                services.AddHealthChecks().AddSqlServer(item.DbSqlConnection, null, item.TaskName);
                                break;

                            case "mysqlConnection":
                                services.AddHealthChecks().AddMySql(item.DbSqlConnection, item.TaskName);
                                break;

                            case "oracleConnection":
                                services.AddHealthChecks().AddOracle(item.DbSqlConnection, "select * from v$version", item.TaskName);
                                break;

                            case "postgresConnection":
                                services.AddHealthChecks().AddNpgSql(item.DbSqlConnection, "SELECT 1;", null, item.TaskName);
                                break;
                        }
                    } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); }
                };
                
                services.AddHealthChecksUI(setup => {

                    setup.SetHeaderText(DbOperations.GetServerParameterLists("ConfigCoreServerRegisteredName").Value + " IT Dohledové Centrum");
                    setup.AddHealthCheckEndpoint("IT:  NET | HW | SW | OS | DB  Monitoring", bool.Parse(DbOperations.GetServerParameterLists("ConfigServerStartupOnHttps").Value) ? $"https://localhost:{DbOperations.GetServerParameterLists("ConfigServerStartupHttpsPort").Value}" + "/HealthResultService" : $"http://localhost:{DbOperations.GetServerParameterLists("ConfigServerStartupHttpPort").Value}" + "/HealthResultService");
                    setup.DisableDatabaseMigrations();
                    setup.SetApiMaxActiveRequests(200);
                    setup.SetMinimumSecondsBetweenFailureNotifications(10);
                    setup.SetEvaluationTimeInSeconds(int.Parse(DbOperations.GetServerParameterLists("ModuleHealthServiceRefreshIntervalSec").Value));
                    setup.MaximumHistoryEntriesPerEndpoint(10);
                }).AddInMemoryStorage(optionsBuilder => { optionsBuilder.EnableSensitiveDataLogging(false); });
            }
        }



        /// <summary>
        /// Server Module: Swagger Api Doc Generator And Online Tester Configuration
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureSwagger(ref IServiceCollection services) {
            if (bool.Parse(DbOperations.GetServerParameterLists("ModuleSwaggerApiDocEnabled").Value)) {
                //services.AddSwaggerSchemaBuilder(c => c.CamelCase = true);
                
                 services.AddSwaggerGen(cfg => {
                     cfg.AddSecurityDefinition("Basic", new OpenApiSecurityScheme { Name = "Authorization", Type = SecuritySchemeType.Http, Scheme = "basic", In = ParameterLocation.Header, Description = "Basic Authorization header for getting Bearer Token." });
                     cfg.AddSecurityRequirement(new OpenApiSecurityRequirement
                     { { new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Basic" } }, new List<string>() } });
                     cfg.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme { Description = "JWT Authorization header using the Bearer scheme for All safe APIs.", Name = "Authorization", In = ParameterLocation.Header, Scheme = "bearer", Type = SecuritySchemeType.Http, BearerFormat = "JWT" });
                     cfg.AddSecurityRequirement(new OpenApiSecurityRequirement
                     { { new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" } }, new List<string>() } });

                     cfg.SchemaGeneratorOptions = new SchemaGeneratorOptions { SchemaIdSelector = type => type.FullName };
                     cfg.SwaggerDoc(Assembly.GetEntryAssembly()?.GetName()?.Version?.ToString(), new OpenApiInfo {
                         Title = DbOperations.GetServerParameterLists("ConfigCoreServerRegisteredName").Value + " Server API",
                         Version = Assembly.GetEntryAssembly()?.GetName()?.Version?.ToString(),
                         TermsOfService = new Uri(DbOperations.GetServerParameterLists("ServerPublicUrl").Value),
                         Description = EICServer.SwaggerDesc,
                         Contact = new OpenApiContact { Name = "Libor Svoboda", Email = DbOperations.GetServerParameterLists("EmailerServiceEmailAddress").Value, Url = new Uri("https://groupware-solution.eu/contactus") },
                         License = new OpenApiLicense { Name = DbOperations.GetServerParameterLists("ConfigCoreServerRegisteredName").Value + " Server License", Url = new Uri("https://www.groupware-solution.eu/") }
                     });

                     var xmlFile = Path.Combine(SrvRuntime.StartupPath, $"{Assembly.GetEntryAssembly()?.GetName().Name}.xml");
                     if (File.Exists(xmlFile)) { try { cfg.IncludeXmlComments(xmlFile, true); } catch { } }
                     try { cfg.IncludeXmlComments(Assembly.GetExecutingAssembly().Location, true); } catch { }


                     //cfg.InferSecuritySchemes();
                     cfg.UseOneOfForPolymorphism();
                     //cfg.UseInlineDefinitionsForEnums();
                     cfg.DescribeAllParametersInCamelCase();
                     cfg.EnableAnnotations(true, true);
                     cfg.UseAllOfForInheritance();
                     cfg.SupportNonNullableReferenceTypes();
                     //cfg.UseAllOfToExtendReferenceSchemas();
                     cfg.DocInclusionPredicate((docName, description) => true);
                     cfg.CustomSchemaIds(type => type.FullName);
                     cfg.ResolveConflictingActions(x => x.First());
                });
                services.AddSwaggerGenNewtonsoftSupport();
            }
        }

    }


    /// <summary>
    /// Enable Configured Server Ad-dons and Modules
    /// </summary>
    public class ServerModulesEnabling {


        /// <summary>
        /// Server Module: Enable Automatic MDtoHtml Files Show in WebPages
        /// </summary>
        /// <param name="app"></param>
        internal static void EnableMarkdownAsHtmlFiles(ref IApplicationBuilder app) {
            if (bool.Parse(DbOperations.GetServerParameterLists("EnableAutoShowStaticMdAsHtml").Value)) { app.UseMarkdown(); }
        }


        /// <summary>
        /// Server Module: Enable Generated Developer Documentation
        /// </summary>
        internal static void EnableDocumentation(ref IApplicationBuilder app) {
            if (bool.Parse(DbOperations.GetServerParameterLists("ModuleMdDocumentationEnabled").Value)) {
                app.UseDocumentation(builder => {
                    builder.HighlightJsStyle = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/server-Integrated/server-modules/docs/material-darker.css";
                    builder.GetMdlStyle = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/server-Integrated/server-modules/docs/material.min.css";
                    builder.NavBarStyle = MarkdownDocumenting.Elements.NavBarStyle.Default;
                    builder.RootPathHandling = HandlingType.Redirect;
                    builder.RoutePrefix = null;
                    //builder.SetIndexDocument(new EasyITCenterContext().DocSrvDocumentationLists.OrderBy(a => a.DocumentationGroup.Sequence)
                    //.ThenBy(a => a.Sequence).ThenBy(a => a.Name).FirstOrDefault().Name.Replace(" ", ""));

                    //if (ServerConfigSettings.ServerRazorWebPagesEngineEnabled) builder.AddCustomLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DashBoard", ServerConfigSettings.ServiceServerLanguage), "/DashBoard"));
                    //if (ServerConfigSettings.ModuleHealthServiceEnabled) builder.AddCustomLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("GithubInteli", ServerConfigSettings.ServiceServerLanguage), "/Tools/EDC_ESB_InteliHelp/book/"));

                    //if (ServerConfigSettings.ServerRazorWebPagesEngineEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DashBoard", ServerConfigSettings.ServiceServerLanguage), "/"));
                    //if (ServerConfigSettings.ServerWebBrowserEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("ServerFiles", ServerConfigSettings.ServiceServerLanguage), "/server"));
                    //if (ServerConfigSettings.ModuleSwaggerApiDocEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("AutoGeneratedApiDocsWithTesting", ServerConfigSettings.ServiceServerLanguage), "/AdminApiDocs"));
                    //if (ServerConfigSettings.ModuleDataManagerEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DataManagementForDevMode", ServerConfigSettings.ServiceServerLanguage), "/CoreAdmin"));
                    //if (ServerConfigSettings.ModuleDbDiagramGeneratorEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("DbDgmlSchema", ServerConfigSettings.ServiceServerLanguage), "/DbDgmlSchema"));
                    //if (ServerConfigSettings.ModuleHealthServiceEnabled) builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("ConfiguredServerHeathCheckService(>200)", ServerConfigSettings.ServiceServerLanguage), "/ServerHealthService"));

                    //builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("Groupware-Solution.Eu", ServerConfigSettings.ServiceServerLanguage), "https://Groupware-Solution.Eu"));
                    //builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("GitHub", ServerConfigSettings.ServiceServerLanguage), "https://github.com/liborsvoboda"));
                    //builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("GitHubInteli", ServerConfigSettings.ServiceServerLanguage), "/Tools/EDC_ESB_InteliHelp/book/"));
                    //builder.AddFooterLink(new MarkdownDocumenting.Elements.CustomLink(ServerCoreDbOperations.DBTranslate("OnlineExamples", ServerConfigSettings.ServiceServerLanguage), "https://KlikneteZde.Cz"));
                });
            }
        }


        /// <summary>
        /// https://github.com/swagger-api/swagger-codegen
        /// Server Module: Enable Swagger Api Doc Generator And Online Tester
        /// </summary>
        internal static void EnableSwagger(ref IApplicationBuilder app) {
            if (bool.Parse(DbOperations.GetServerParameterLists("ModuleSwaggerApiDocEnabled").Value)) {
                app.UseSwagger();
                app.UseSwaggerUI(cfg => {
                    cfg.RoutePrefix = DbOperations.GetServerParameterLists("ModuleSwaggerApiDocPath").Value.StartsWith("/") ? DbOperations.GetServerParameterLists("ModuleSwaggerApiDocPath").Value.Substring(1) : DbOperations.GetServerParameterLists("ModuleSwaggerApiDocPath").Value;
                    cfg.DocumentTitle = EICServer.SwaggerDesc;
                    //c.InjectJavascript()
                    //c.InjectStylesheets();
                    cfg.DocExpansion(DocExpansion.None);
                    cfg.EnableTryItOutByDefault();
                    cfg.DisplayRequestDuration();
                    //c.EnableDeepLinking();
                    cfg.EnableFilter();
                    //c.DisplayOperationId();
                    cfg.DefaultModelExpandDepth(1);
                    cfg.DefaultModelRendering(ModelRendering.Model);
                    cfg.DefaultModelsExpandDepth(1);
                    //c.EnablePersistAuthorization();
                    //c.EnableValidator();
                    //c.ShowCommonExtensions();
                    //c.ShowExtensions();
                    cfg.SupportedSubmitMethods(SubmitMethod.Get,SubmitMethod.Put, SubmitMethod.Delete, SubmitMethod.Head, SubmitMethod.Post);
                    cfg.UseRequestInterceptor("(request) => { return request; }");
                    cfg.UseResponseInterceptor("(response) => { return response; }");
                    cfg.SwaggerEndpoint(SrvRuntime.OpenApiDescriptionFile, "Server API version " + Assembly.GetEntryAssembly()?.GetName()?.Version?.ToString());
                });
            }
        }
        
        /// <summary>
        /// Server Module: Enable Live Data Monitor
        /// </summary>
        internal static void EnableLiveDataMonitor(ref IApplicationBuilder app) { 
            if (bool.Parse(DbOperations.GetServerParameterLists("WebLiveDataMonitorEnabled").Value)) { app.UseLiveReload(); } 
        }


        /// <summary>
        /// Enable Report Designer Module
        /// </summary>
        /// <param name="app"></param>
        internal static void EnableReportDesigner(ref IApplicationBuilder app) { app.UseFastReport();}


        /// <summary>
        /// Server Module: Enable DBEntitySchema Web Page
        /// </summary>
        internal static void EnableDBEntitySchema(ref IApplicationBuilder app) {
            if (bool.Parse(DbOperations.GetServerParameterLists("ModuleDBEntitySchemaEnabled").Value)) {
                app.UseDBEntitySchema(cfg => cfg.PathMatch = "/DBEntitySchema");
            }
        }


    }

}