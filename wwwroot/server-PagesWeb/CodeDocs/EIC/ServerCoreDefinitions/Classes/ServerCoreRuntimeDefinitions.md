[Zpět](../../../)   



* Server Core Definitions and extensions
* for optimal running in One clean code structure

```csharp   
using FubarDev.FtpServer;
using Quartz;

namespace EasyITCenter.ServerCoreStructure {

    /// <summary>
    /// The server runtime data.
    /// </summary>
    public partial class ServerRuntimeData {




        /// <summary>
        /// Gets or Sets Project Root Directory.
        /// </summary>
        public static string ContentRootPath { get; set; } = Path.GetDirectoryName(Environment.CurrentDirectory);


        /// <summary>
        /// Gets or Sets the startup_path.
        /// </summary>
        public static string Startup_path { get; set; } = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

        /// <summary>
        /// Gets or Sets the startup_path.
        /// </summary>
        public static string WebRoot_path { get; set; } = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), ServerConfigSettings.DefaultStaticWebFilesFolder);

        /// <summary>
        /// Gets or Sets the setting_folder.
        /// </summary>
        public static string Setting_folder { get; set; } = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.CommonApplicationData), Assembly.GetEntryAssembly().GetName().FullName.Split(',')[0]);

        /// <summary>
        /// Gets or Sets the configure file.
        /// </summary>
        public static string UserPath { get; set; } = Path.Combine(Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.CommonApplicationData), Assembly.GetEntryAssembly().GetName().FullName.Split(',')[0]), "Users");

        /// <summary>
        /// Gets or Sets the configure file.
        /// </summary>
        public static string ConfigFile { get; set; } = "config.json";

        /// <summary>
        /// Gets or Sets the data path.
        /// </summary>
        public static string DataPath { get; set; } = "Data";

        /// <summary>
        /// Gets or Sets the debug mode.
        /// </summary>
        public static bool DebugMode { get; set; } = "Development" == Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

        /// <summary>
        /// The local db table list.
        /// </summary>
        public static List<object> LocalDBTableList = new();

        /// <summary>
        /// Cancellation Token for Server Remote Control
        /// </summary>
        public static CancellationTokenSource ServerCancelToken = new CancellationTokenSource();

        /// <summary>
        /// Server Starup Args
        /// </summary>
        public static string[] ServerArgs;

        /// <summary>
        /// Server Core Status
        /// </summary>
        public static string ServerCoreStatus = ServerStatuses.Stopped.ToString();

        /// <summary>
        /// Server Restart Request Indicator
        /// </summary>
        public static bool ServerRestartRequest;

        /// <summary>
        /// Server Securited FTP Provider for Remote Control
        /// </summary>
        public static IFtpServerHost? ServerFTPProvider;

        /// <summary>
        /// Server Securited FTP Provider for Remote Control
        /// </summary>
        public static IScheduler? ServerAutoSchedulerProvider;


        /// <summary>
        /// Central WebSocket List for Easy one place Using
        /// </summary>
        public static List<Tuple<WebSocket, WebSocketExtension>> CentralWebSocketList = new();

        /// <summary>
        /// Central List With references on Hested Server Sevices For Acess and Using Hosted
        /// Functionalities for example: Start/Stop Service And More Other sub services for Optimal Hosting
        /// </summary>
        public static ServiceProvider ServerServiceProvider;



        /// <summary>
        /// SercerCore FilesLibrary For Rotator
        /// TODO Clean
        /// </summary>
        public static Dictionary<object,object> FileRotatorRuntineLibrary = new();


        //Generic Complicated Example
        //public static List<Tuple<string, T>>? ServerHostedServicesContollerList = new List<Tuple<string, T>>();
    }
}

```   

