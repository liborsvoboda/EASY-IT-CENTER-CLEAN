[assembly: AssemblyVersion("2.0.*")]

namespace EASYDATACenter {

    /// <summary>
    /// Server Main Definition Starting Point Of Project
    /// </summary>
    public class BackendServer {
        private static ServerSettings serverSettings = new();
        private static readonly ServerRuntimeData serverRuntimeData = new();

        /// <summary>
        /// Startup Server Initialization Server Setting Data
        /// </summary>
        public static readonly ServerSettings ServerSettings = serverSettings;

        /// <summary>
        /// Startup Server Initialization Server Runtime Data
        /// </summary>
        public static readonly ServerRuntimeData ServerRuntimeData = serverRuntimeData;

        /// <summary>
        /// Server Startup Process
        /// </summary>
        /// <param name="args"></param>
        public static void Main(string[] args) {
            //Startup Loading, HDD structure Init
            ServerCoreFunctions.LoadSettings();

            try {
                var hostBuilder = BuildWebHost(args);
                hostBuilder.UseWindowsService(options => {
                    options.ServiceName = ServerSettings.SpecialServerServiceName;
                });

                //Load StartupDBdata
                if (ServerSettings.SpecialUseDbLocalAutoupdatedDials) ServerStartupDbDataLoading();

                //Start Server
                hostBuilder.Build().Run();
            } catch (Exception Ex) { ServerCoreFunctions.SendMail(ServerCoreFunctions.GetSystemErrMessage(Ex)); }
        }

        /// <summary>
        /// Final Preparing Server HostBuilder Definition
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
        public static IHostBuilder BuildWebHost(string[] args) {
            //Load Configuration File/DB
            try {
                string json = File.ReadAllText(Path.Combine(ServerRuntimeData.Setting_folder, ServerRuntimeData.ConfigFile), ServerCoreFunctions.FileDetectEncoding(Path.Combine(ServerRuntimeData.Setting_folder, ServerRuntimeData.ConfigFile)));
                serverSettings = JsonSerializer.Deserialize<ServerSettings>(json);

                List<ServerSetting> ConfigData = new EASYDATACenterContext().ServerSettings.ToList();
                foreach (PropertyInfo property in ServerSettings.GetType().GetProperties()) {
                    if (ConfigData.FirstOrDefault(a => a.Key == property.Name) != null)
                        property.SetValue(ServerSettings, Convert.ChangeType(ConfigData.First(a => a.Key == property.Name).Value, property.PropertyType), null);
                }
            } catch (Exception ex) {
                ServerCoreFunctions.SendMail(ServerCoreFunctions.GetSystemErrMessage(ex));
                Environment.Exit(10);
            }

            return Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder => {
                if (ServerSettings.ConfigServerStartupOnHttps) {
                    webBuilder.ConfigureKestrel(options => {
                        options.ListenAnyIP(ServerSettings.ConfigServerStartupPort, opt => {
                            opt.Protocols = HttpProtocols.Http1AndHttp2;
                            opt.KestrelServerOptions.AllowAlternateSchemes = true;
                            opt.UseHttps(ServerCoreFunctions.GetSelfSignedCertificate(ServerSettings.ConfigCertificatePassword), httpsOptions => {
                                httpsOptions.AllowAnyClientCertificate();
                                httpsOptions.ClientCertificateMode = ClientCertificateMode.NoCertificate;
                                httpsOptions.SslProtocols = System.Security.Authentication.SslProtocols.Tls12 | System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls | System.Security.Authentication.SslProtocols.Ssl2 | System.Security.Authentication.SslProtocols.Ssl3;
                            });
                            //opt.UseConnectionLogging();
                        });
                    });
                }

                webBuilder.UseStartup<Startup>();
                webBuilder.UseUrls(ServerSettings.ConfigServerStartupOnHttps ? $"https://*:{ServerSettings.ConfigServerStartupPort}" : $"http://*:{ServerSettings.ConfigServerStartupPort}");
            });
        }

        /// <summary>
        /// Server Startup DB Data loading for minimize DB Connect TO Frequency Dials Without Changes
        /// Example: LanguageList
        /// </summary>
        private static void ServerStartupDbDataLoading() {
            ServerCoreDbOperations.LoadStaticDbDials();
        }
    }
}