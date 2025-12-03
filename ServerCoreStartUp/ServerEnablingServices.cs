using EasyData.Services;
using Korzh.DbUtils;
using Microsoft.CodeAnalysis;
using Microsoft.Extensions.FileProviders;
//using MirrorSharp;
//using MirrorSharp.AspNetCore;
using EASYTools.MonacoProvider;
using EASYTools.MonacoProvider.Api;
using Snickler.RSSCore.Caching;
using Snickler.RSSCore.Extensions;
using Snickler.RSSCore.Models;
using System.Collections.Immutable;
using SignalRChat.Hubs;

namespace EasyITCenter.ServerCoreConfiguration {

    /// <summary>
    /// Server Core Enabling Settings of Security, API Communications, Technologies, Modules,Rules,
    /// Rights, Rules, Rights, Conditions, Cors, Cookies, Formats, Services, Logging, etc..
    /// </summary>
    public class ServerEnablingServices {



        /// <summary>
        /// Enable Automatic Js,Css Minification
        /// </summary>
        /// <param name="app"></param>
        internal static void EnableAutoMinify(ref IApplicationBuilder app) {
            //if (bool.Parse(DbOperations.GetServerParameterLists("EnableAutoMinify").Value)) { app.UseWebOptimizer(); }
        }
               

        /// <summary>
        /// Enable Server Logging in Debug Mode
        /// </summary>
        internal static void EnableLogging(ref IApplicationBuilder app) {
                if (SrvRuntime.DebugMode) { app.UseHttpLogging(); }
         }


        /// <summary>
        /// Server Cors Configuration
        /// </summary>
        internal static void EnableCors(ref IApplicationBuilder app) {
            if (bool.Parse(DbOperations.GetServerParameterLists("ServerCorsEnabled").Value)) {
                app.UseCors(x => {
                    List<ServerCorsDefAllowedOriginList> data;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        data = new EasyITCenterContext().ServerCorsDefAllowedOriginLists.Where(a => a.Active).ToList();
                    }
                    Console.WriteLine("Allowed Domains: " + data.ObjectToJson());
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerCorsAllowAnyHeader").Value)) { x.AllowAnyHeader(); }
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerCorsAllowAnyMethod").Value)) { x.AllowAnyMethod(); }
                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerCorsAllowCredentials").Value)) { x.AllowCredentials(); }

                    if (bool.Parse(DbOperations.GetServerParameterLists("ServerCorsAllowAnyOrigin").Value)) { x.AllowAnyOrigin(); }
                    else if (!bool.Parse(DbOperations.GetServerParameterLists("ServerCorsAllowAnyOrigin").Value) && data.Any()) { 
                        string[] allowedDomains = data.Select(a => a.AllowedDomain).ToArray(); x.WithOrigins(allowedDomains);
                        x.WithOrigins(allowedDomains);
                        //TODO CHECK Allowed Domain
                    }

                });
            };
        }

        /// <summary>
        /// Server WebSocket Configuration
        /// </summary>
        /// <param name="app"></param>
        /// <returns></returns>
        internal static void EnableWebSocket(ref IApplicationBuilder app) {
            if (bool.Parse(DbOperations.GetServerParameterLists("WebSocketEngineEnabled").Value)) {
                var webSocketOptions = new WebSocketOptions() {
                    KeepAliveInterval = TimeSpan.FromHours(double.Parse(DbOperations.GetServerParameterLists("WebSocketTimeoutMin").Value)),
                };
                app.UseWebSockets(webSocketOptions);
            }
        }


        //RssFeed Support
        internal static void EnableRssFeed(ref IApplicationBuilder app) {
            if (bool.Parse(DbOperations.GetServerParameterLists("WebRSSFeedsEnabled").Value)) {
                app.UseRSSFeed("/feed", new RSSFeedOptions {
                    Title = DbOperations.GetServerParameterLists("ConfigCoreServerRegisteredName").Value + " RSS Feed",
                    Copyright = "2023 " + DbOperations.GetServerParameterLists("ConfigCoreServerRegisteredName").Value,
                    Description = "RSS Feed with Company Portfolio",
                    ManagingEditor = DbOperations.GetServerParameterLists("ConfigManagerEmailAddress").Value,
                    Webmaster = DbOperations.GetServerParameterLists("EmailerServiceEmailAddress").Value,
                    Url = new Uri(DbOperations.GetServerParameterLists("ServerPublicUrl").Value),
                    Caching = new MemoryCacheProvider { CacheDuration = TimeSpan.FromDays(5), Key = "RSSCacheKey" }
                });
            }
        }


        /// <summary>
        /// Server Endpoints Configuration
        /// </summary>
        internal static void EnableEndpoints(ref IApplicationBuilder app) {



            app.UseEndpoints(endpoints => {

                //EasyData Support
                if (bool.Parse(DbOperations.GetServerParameterLists("ModuleWebDataManagerEnabled").Value)) { endpoints.MapEasyData(options => { options.UseDbContext<EasyITCenterContext>(); }); }
                if (bool.Parse(DbOperations.GetServerParameterLists("ModuleSwaggerApiDocEnabled").Value)) { endpoints.MapSwagger(); }

                endpoints.MapControllers();

                //endpoints.MapHub<ChatHub>("/chatHub");

                if (bool.Parse(DbOperations.GetServerParameterLists("WebRazorPagesEngineEnabled").Value)) {
                    endpoints.MapRazorPages();
                    endpoints.MapControllerRoute(name: "ServerCorePages", pattern: "{controller=ServerCorePages}/{action=Index}/{id?}");
                }

                /*
                //HeathService Support
                if (bool.Parse(DbOperations.GetServerParameterLists("ModuleHealthServiceEnabled").Value)) {
                    endpoints.MapHealthChecks("/HealthResultService",
                        new HealthCheckOptions() {
                            Predicate = p => true,
                            ResultStatusCodes = { [HealthStatus.Healthy] = StatusCodes.Status200OK, [HealthStatus.Degraded] = StatusCodes.Status500InternalServerError, [HealthStatus.Unhealthy] = StatusCodes.Status503ServiceUnavailable },
                            ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse,
                            AllowCachingResponses = false
                        });
                }

                
                //Monaco Support
                endpoints.MapPost("/MonacoCompletion/{0}", async (e) =>
                {
                    using var reader = new StreamReader(e.Request.Body);
                    string text = await reader.ReadToEndAsync();
                    if (text != null) {
                        if (e.Request.Path.Value?.EndsWith("complete") == true) {
                            var tabCompletionResults = await CompletitionRequestHandler.Handle(JsonSerializer.Deserialize<TabCompletionRequest>(text));
                            await JsonSerializer.SerializeAsync(e.Response.Body, tabCompletionResults); return;
                        }
                        else if (e.Request.Path.Value?.EndsWith("signature") == true) {
                            var signatureHelpResult = await CompletitionRequestHandler.Handle(JsonSerializer.Deserialize<SignatureHelpRequest>(text));
                            await JsonSerializer.SerializeAsync(e.Response.Body, signatureHelpResult); return;
                        }
                        else if (e.Request.Path.Value?.EndsWith("hover") == true) {
                            var hoverInfoResult = await CompletitionRequestHandler.Handle(JsonSerializer.Deserialize<HoverInfoRequest>(text));
                            await JsonSerializer.SerializeAsync(e.Response.Body, hoverInfoResult); return;
                        }
                        else if (e.Request.Path.Value?.EndsWith("codeCheck") == true) {
                            var codeCheckResults = await CompletitionRequestHandler.Handle(JsonSerializer.Deserialize<CodeCheckRequest>(text));
                            await JsonSerializer.SerializeAsync(e.Response.Body, codeCheckResults); return;
                        }
                    }
                    e.Response.StatusCode = 405;
                });
                


                //MirrorSharp Support
                if (bool.Parse(DbOperations.GetServerParameterLists("ModuleCSharpCodeBuilder").Value)) { endpoints.MapMirrorSharp("/mirrorsharp", new MirrorSharpOptions { SelfDebugEnabled = true, IncludeExceptionDetails = true  }
                .SetupCSharp(o => {
                    o.AddMetadataReferencesFromFiles(FileOperations.GetPathFiles(SrvRuntime.StartupPath, "*.dll", SearchOption.TopDirectoryOnly).ToArray());
                    // = ..MetadataReferences = GetAllReferences().ToImmutableList();
                })); }

                /*
                static IEnumerable<MetadataReference> GetAllReferences() {
                    yield return ReferenceAssembly("System.Runtime");
                    //yield return ReferenceAssembly("System.Runtime");
                    //yield return ReferenceAssembly("System.Collections");
                    var assembly = typeof(IScriptGlobals).Assembly;
                    yield return MetadataReference.CreateFromFile(assembly.Location);
                    foreach (var reference in assembly.GetReferencedAssemblies()) {
                        yield return ReferenceAssembly(reference.Name!);
                    }
                }

                static MetadataReference ReferenceAssembly(string name) {
                    var rootPath = Path.Combine(AppContext.BaseDirectory);
                    var assemblyPath = Path.Combine(rootPath, name + ".dll");
                    var documentationPath = Path.Combine(rootPath, name + ".xml");
                    return MetadataReference.CreateFromFile(assemblyPath, documentation: null);
                }
                */
            });
            
            //MirrorSharp Support
            //if (bool.Parse(DbOperations.GetServerParameterLists("ModuleCSharpCodeBuilder").Value)) { app.MapMirrorSharp("/mirrorsharp"); }

            //HeathService Support
            if (bool.Parse(DbOperations.GetServerParameterLists("ModuleHealthServiceEnabled").Value)) {
                app.UseHealthChecks("/HealthResultService");
                //app.UseMiddleware<ServerCycleTaskMiddleware>();
                app.UseHealthChecksUI(setup => {
                    setup.UIPath = DbOperations.GetServerParameterLists("ModuleHealthServicePath").Value.StartsWith("/") ? DbOperations.GetServerParameterLists("ModuleHealthServicePath").Value : "/" + DbOperations.GetServerParameterLists("ModuleHealthServicePath").Value;
                    setup.AsideMenuOpened = true;
                    setup.PageTitle = DbOperations.GetServerParameterLists("ConfigCoreServerRegisteredName").Value;
                    setup.AddCustomStylesheet(Path.Combine(SrvRuntime.SrvModulesPath, "HealthCheck", "HealthChecksUI.css"));
                });
            }

          
        }
    }
}