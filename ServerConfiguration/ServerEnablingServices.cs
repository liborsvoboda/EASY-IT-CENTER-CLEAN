/*
 * Server Core Configuration Part
 */

namespace EASYDATACenter.ServerConfiguration {

    /// <summary>
    /// Server Core Enabling Settings of Security, API Communications, Technologies, Modules,Rules,
    /// Rights, Rules, Rights, Conditions, Cors, Cookies, Formats, Services, Logging, etc..
    /// </summary>
    public class ServerEnablingServices {

        /// <summary>
        /// Enable Server Logging in Debug Mode
        /// </summary>
        /// <param name="app">          </param>
        /// <param name="loggerFactory"></param>
        /// <returns></returns>
        internal static void EnableLogging(ref IApplicationBuilder app, ref ILoggerFactory loggerFactory) {
            if (BackendServer.ServerRuntimeData.DebugMode) { app.UseHttpLogging(); }
        }

        /// <summary>
        /// Server Cors Configuration
        /// </summary>
        internal static void EnableCors(ref IApplicationBuilder app) {
            /*
            return app.UseCors(
                    builder =>
                    {
                        var allowedDomains = new[] { "http://localhost", "http://localhost:4200", "http://localhost:8080" };

                        builder
                        .WithOrigins(allowedDomains)
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials();
                    }
                );
            });
            */

            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
            //.AllowCredentials()
            );
        }

        /// <summary>
        /// Server WebSocket Configuration
        /// </summary>
        /// <param name="app"></param>
        /// <returns></returns>
        internal static void EnableWebSocket(ref IApplicationBuilder app) {
            if (BackendServer.ServerSettings.ServerWebSocketEngineEnabled) {
                var webSocketOptions = new WebSocketOptions() {
                    KeepAliveInterval = TimeSpan.FromHours(BackendServer.ServerSettings.ConfigWebSocketTimeoutMin),
                    ReceiveBufferSize = BackendServer.ServerSettings.ConfigMaxWebSocketBufferSizeKb
                };

                app.UseWebSockets(webSocketOptions);
                app.Use(async (context, next) => {
                    if (context.Request.Path == "/ws") {
                        if (context.WebSockets.IsWebSocketRequest) {
                            WebSocket webSocket = await context.WebSockets.AcceptWebSocketAsync();
                            await WebSocketExampleApi.Echo(context, webSocket);
                        } else { context.Response.StatusCode = 400; }
                    } else { await next(); }
                });
            }
        }

        /// <summary>
        /// Server Endpoints Configuration
        /// </summary>
        internal static void EnableEndpoints(ref IApplicationBuilder app) {
            app.UseEndpoints(endpoints => {
                //Standard WebPages Controller
                //endpoints.MapControllerRoute(
                //name: "default",
                //pattern: "{controller=Home}/{action=Index}/{id?}");

                endpoints.MapControllers();

                if (BackendServer.ServerSettings.ServerRazorWebPagesEngineEnabled) {
                    endpoints.MapRazorPages();
                    endpoints.MapControllerRoute( name: "default", pattern: "{controller=ServerCorePages}/{action=Index}/{id?}");
                }

                if (BackendServer.ServerSettings.ModuleHealthServiceEnabled && !BackendServer.ServerRuntimeData.DebugMode) {
                    endpoints.MapHealthChecks("/HealthResultService", new HealthCheckOptions() {
                        Predicate = p => true,
                        ResultStatusCodes = { [HealthStatus.Healthy] = StatusCodes.Status200OK, [HealthStatus.Unhealthy] = StatusCodes.Status503ServiceUnavailable },
                        ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse,
                        AllowCachingResponses = false,
                    });
                }
            });

            if (BackendServer.ServerSettings.ModuleHealthServiceEnabled && !BackendServer.ServerRuntimeData.DebugMode) {
                app.UseHealthChecks("/HealthResultService", new HealthCheckOptions {
                    Predicate = _ => true,
                    ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse,
                    AllowCachingResponses = false
                });

                app.UseHealthChecksUI(setup => {
                    setup.UIPath = "/ServerHealthService";
                    setup.AsideMenuOpened = true;
                });
            }
        }
    }
}