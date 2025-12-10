/*
* Server Core Definitions and extensions
* for optimal running in One clean code structure
*/

namespace EASYDATACenter.ServerCoreDefinition {

    /// <summary>
    /// Database response types definition
    /// </summary>
    public enum DBResult {
        success,
        error
    }

    /// <summary>
    /// The DB result message.
    /// </summary>
    public class DBResultMessage {

        /// <summary>
        /// Gets or Sets the inserted id.
        /// </summary>
        public int InsertedId { get; set; } = 0;

        /// <summary>
        /// Gets or Sets the status.
        /// </summary>
        public string Status { get; set; }

        /// <summary>
        /// Gets or Sets the record count.
        /// </summary>
        public int RecordCount { get; set; }

        /// <summary>
        /// Gets or Sets the error message.
        /// </summary>
        public string ErrorMessage { get; set; }
    }

    /// <summary>
    /// The authenticate response.
    /// </summary>
    public class AuthenticateResponse {

        /// <summary>
        /// Gets or Sets the id.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or Sets the name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets the surname.
        /// </summary>
        public string Surname { get; set; }

        /// <summary>
        /// Gets or Sets the token.
        /// </summary>
        public string Token { get; set; }

        /// <summary>
        /// Gets or Sets the expiration.
        /// </summary>
        public DateTime? Expiration { get; set; }

        /// <summary>
        /// Gets or Sets the role.
        /// </summary>
        public string Role { get; set; }
    }

    /// <summary>
    /// The server settings.
    /// </summary>
    public partial class ServerSettings {

        #region Emailer Service

        /// <summary>
        /// Service email, for info about not available service from HeatchCheck Can be used for
        /// next Develop, automatic checking problems, missing data and all other Its Necessary for
        /// Correct running Server Internal Core Monitoring
        /// </summary>
        public string EmailerServiceEmailAddress { get; set; } = "Libor.Svoboda@GroupWare-Solution.Eu";

        /// <summary>
        /// SMTP Server Address for Login to External Mail Server Its Necessary for Correct running
        /// Server Internal Core Monitoring
        /// </summary>
        public string EmailerSMTPServerAddress { get; set; } = "imap.groupware-solution.eu";

        /// <summary>
        /// SMTP Port for Login to External Mail Server Its Necessary for Correct running Server
        /// Internal Core Monitoring
        /// </summary>
        public int EmailerSMTPPort { get; set; } = 25;

        /// <summary>
        /// EmailerSMTPSslIsEnabled SSl Email Protocol for Login to External Mail Server Its
        /// Necessary for Correct running Server Internal Core Monitoring
        /// </summary>
        public bool EmailerSMTPSslIsEnabled { get; set; } = false;

        /// <summary>
        /// SMTP UserName for Login to External Mail Server Its Necessary for Correct running Server
        /// Internal Core Monitoring
        /// </summary>
        public string EmailerSMTPLoginUsername { get; set; } = "backendsolution@groupware-solution.eu";

        /// <summary>
        /// SMTP Password for Login to External Mail Server Its Necessary for Correct running Server
        /// Internal Core Monitoring
        /// </summary>
        public string EmailerSMTPLoginPassword { get; set; } = "kuK7VzrU@V";

        #endregion Emailer Service

        #region Server Database

        /// <summary>
        /// Server Database Connection string for Full Service of Database
        /// Migration/Api/Check/Unlimited Develop !!!Warning: Check this connection for
        /// Read/Write/Exec is enabled
        /// </summary>
        public string DatabaseConnectionString { get; set; } = "Server=127.0.0.1;Database=EASYDATACenter;Trusted_Connection=True;TrustServerCertificate=True";

        /// <summary>
        /// Enable Disable Entity Framework Internal Cache I recommend turning it off : from Logic,
        /// Duplicit Functionality with Database Server in complex process can generate problems
        /// Recommended: false
        /// </summary>
        public bool DatabaseInternalCachingEnabled { get; set; } = false;

        /// <summary>
        /// Time in Minutes for Database Valid Cache Data and Refreshing Duplicit Functionality with
        /// Database Server
        /// Recommended: 30
        /// </summary>
        public int DatabaseInternalCacheTimeoutMin { get; set; } = 30;

        #endregion Server Database

        #region Server Future Technologies

        /// <summary>
        /// Server Service Name automatic figured in All IS/OS/Engines info
        /// Recommended: EASYDATACenter
        /// </summary>
        public string SpecialServerServiceName { get; set; } = "EASYDATACenter";

        /// <summary>
        /// Activation / Deactivation of Email Sender For Server Core Fails Checker All Catch Write
        /// to SendMail, In Debug mode is Written in console in Release mode is Sended email (All
        /// incorrect server statuses are monitored) Can be writen to Database - !!! Warning for
        /// infinite Cycling (DB shutdown example)
        /// Recommended: true
        /// </summary>
        public bool SpecialCoreCheckerEmailSenderActive { get; set; } = false;

        /// <summary>
        /// Special Function: Using Selected Tables with AutoRefresh On change as Local DataSets,
        /// For Optimize Traffic. For Example LanguageList - Static table with often reading
        /// Recommended: true - functionality must be implemented in Server Code
        /// </summary>
        public bool SpecialUseDbLocalAutoupdatedDials { get; set; } = false;

        #endregion Server Future Technologies

        #region ServerConfiguration

        /// <summary>
        /// Set Server Startup Port on Http/HttpS/WebSocket and for All Engines, Modules, API
        /// Controler and WebPages
        /// Recommended: 5000
        /// </summary>
        public int ConfigServerStartupPort { get; set; } = 5000;

        /// <summary>
        /// WebSocket Timeout Connection Settings in Minutes. After timeout when not detected any
        /// communication socket is closed Set according to your need
        /// Recommended: 2
        /// </summary>
        public double ConfigWebSocketTimeoutMin { get; set; } = 2;

        /// <summary>
        /// Maximum socket message size for control Traffic
        /// Recomended: 10
        /// </summary>
        public int ConfigMaxWebSocketBufferSizeKb { get; set; } = 10;

        /// <summary>
        /// Bearer Token Timeout Setting in Minutes. Connection must be Refreshed in Interval After
        /// Timeout connection Must Login Again. It is as needed. You Can Change Key for close All
        /// connections Immediately. Timeout is good for Webpages
        /// Recomended: 15
        /// </summary>
        public double ConfigApiTokenTimeoutMin { get; set; } = 15;

        /// <summary>
        /// Setting for Server URL Services. Logically can run only one Http or Https Server has
        /// more Security Setting Politics.
        /// Recommended: true
        /// </summary>
        public bool ConfigServerStartupOnHttps { get; set; } = true;

        /// <summary>
        /// Its Domain for include to Automatic Generated Certificate For Server running on HTTPS.
        /// Domain is for Your validation Certificate Domain. Can be Changed for commercial.
        /// Recommended: 127.0.0.1
        /// </summary>
        public string ConfigCertificateDomain { get; set; } = "127.0.0.1";

        /// <summary>
        /// Password will be inserted to Server Generated Certificate for HTTPS.
        /// Recommended: empty = Maximal Security Randomly generated 20 chars string
        /// </summary>
        public string ConfigCertificatePassword { get; set; } = ServerCoreFunctions.RandomString(20);

        /// <summary>
        /// Special Functions:Server AutoGenerated encryption Key For Securing Communication On Each
        /// Server Restart All Tokens not will be valid and the Login Reconnect is Requested. Its
        /// AntiHacker Security Rule
        /// Recommended: empty = Maximal Security Randomly generated 40 chars string
        /// </summary>
        public string ConfigJwtLocalKey { get; set; } = ServerCoreFunctions.RandomString(40);

        /// <summary>
        /// Server Language for Translating Server internal statuses
        /// Recommended: cz or en - other languages are not implemented
        /// </summary>
        public string ConfigServerLanguage { get; set; } = "cz";

        #endregion ServerConfiguration

        #region Server Engines

        /// <summary>
        /// Enable Disable Bearer Token Timeout Validation Token can be valid EveryTime to using:
        /// Example for machine connection Or is Control last activity
        /// </summary>
        public bool ServerTimeTokenValidationEnabled { get; set; } = false;

        /// <summary>
        /// Enable Razor WebPages support engine with Correct Configuration for Automaping form
        /// folder 'Pages'
        /// </summary>
        public bool ServerRazorWebPagesEngineEnabled { get; set; } = true;

        /// <summary>
        /// Enable Mvc WebPages support engine with Correct Configuration
        /// </summary>
        public bool ServerMvcWebPagesEngineEnabled { get; set; } = true;

        /// <summary>
        /// Enable WebSocket Engine with Default Example Api Controller
        /// </summary>
        public bool ServerWebSocketEngineEnabled { get; set; } = true;

        /// <summary>
        /// Enable FTP File Server
        /// </summary>
        public bool ServerFtpEngineEnabled { get; set; } = false;

        /// <summary>
        /// Enable WebPages File Browsing from server Url on Server
        /// </summary>
        public bool ServerWebBrowserEnabled { get; set; } = true;

        #endregion Server Engines

        #region Server Modules

        /// <summary>
        /// Special Function: Server Automatically Generate Full Documentation of API structure AND
        /// Database Model. Plus Included API Interface for Online Testing All API Methods with
        /// Authentication Its Automatic Solution for Third Party cooperation. All changes are
        /// Reflected after restart server
        /// </summary>
        public bool ModuleSwaggerApiDocEnabled { get; set; } = true;

        /// <summary>
        /// Special Function: AutoGenerated Database DataManager for working with Data Running only
        /// in Debug mode for simple Develop, can be modified. All changes are Reflected after
        /// restart server
        /// </summary>
        public bool ModuleDataManagerEnabled { get; set; } = true;

        /// <summary>
        /// Special Function: More than 200 Server Statuses Can be monitored by HeathCheckService,
        /// Over Net can Control Other Company Services Also as Central Control Point With Email
        /// Service. For Example: Server/Memory/All DB Types/IP/HDD/Port/Api/NET/Cloud/Environment
        /// Must be run for Metrics AddOn https://learn.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/monitor-app-health
        /// </summary>
        public bool ModuleHealthServiceEnabled { get; set; } = true;

        /// <summary>
        /// Special Function: More than 200 Server Statuses Can be monitored by HeathCheckService,
        /// Over Net can Control Other Company Services Also as Central Control Point With Email
        /// Service. For Example: Server/Memory/All DB Types/IP/HDD/Port/Api/NET/Cloud/Environment
        /// Must be run for Metrics AddOn !!! run in Release mode for Good Reading of Logs without
        /// HeathChecks Cycling info https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks https://testfully.io/blog/api-health-check-monitoring/
        /// </summary>
        public int ModuleHealthServiceRefreshIntervalSec { get; set; } = 30;

        /// <summary>
        /// Enable Server Structure Documentation for Developers Using RootPath, - Block File
        /// Browsing Is Good for Server with Documentation only Or Use for Show WebPage and Copy
        /// "Only HTML"
        /// </summary>
        public bool ModuleMdDocumentationEnabled { get; set; } = true;

        /// <summary>
        /// Enable Automatic Database Diagram for Simple show Database structure with All bingings
        /// </summary>
        public bool ModuleDbDiagramGeneratorEnabled { get; set; } = true;

        #endregion Server Modules
    }

    /// <summary>
    /// The server runtime data.
    /// </summary>
    public partial class ServerRuntimeData {

        /// <summary>
        /// Gets or Sets the startup_path.
        /// </summary>
        internal string Startup_path { get; set; } = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

        /// <summary>
        /// Gets or Sets the setting_folder.
        /// </summary>
        internal string Setting_folder { get; set; } = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.CommonApplicationData), Assembly.GetEntryAssembly().GetName().FullName.Split(',')[0]);

        /// <summary>
        /// Gets or Sets the configure file.
        /// </summary>
        internal string ConfigFile { get; set; } = "config.json";

        /// <summary>
        /// Gets or Sets the data path.
        /// </summary>
        internal string DataPath { get; set; } = "Data";

        /// <summary>
        /// Gets or Sets the debug mode.
        /// </summary>
        internal bool DebugMode { get; set; } = "Development" == Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

        /// <summary>
        /// The local db table list.
        /// </summary>
        internal List<object> LocalDBTableList = new();

    }

    /// <summary>
    /// Special Functions: Definition of Selected tables for Optimal Using to Data nature Its saves
    /// traffic, increases availability and for Example implemented Language is in Develop Auto Fill
    /// Table when is First Using Its can be used for more Dials
    /// </summary>
    public enum ServerLocalDbDials {
        LanguageList,
    }
}