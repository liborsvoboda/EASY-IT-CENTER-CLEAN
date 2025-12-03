using Microsoft.AspNetCore.Identity;

namespace EasyITCenter.ServerCoreStructure {

    /// <summary>
    /// Database Connection string
    /// </summary>
    public partial class DBConn {
        /// <summary>
        /// Server Database Connection string for Full Service of Database
        /// Migration/Api/Check/Unlimited Develop !!!Warning: Check this connection for
        /// Read/Write/Exec is enabled In Config File Must Be Only This Paramneter
        /// </summary>
        public static string DatabaseConnectionString { get; set; } = string.Empty;

        /// <summary>
        /// Enable Disable Entity Framework Internal Cache I recommend turning it off : from Logic,
        /// Duplicit Functionality with Database Server in complex process can generate problems
        /// Recommended: false
        /// </summary>
        public static bool DatabaseInternalCachingEnabled { get; set; } = false;

        /// <summary>
        /// Time in Minutes for Database Valid Cache Data and Refreshing Duplicit Functionality with
        /// Database Server
        /// Recommended: 30
        /// </summary>
        public static int DatabaseInternalCacheTimeoutMin { get; set; } = 30;


        /// <summary>
        /// Enable Disable Database Migration Process on Starrtup
        /// 
        /// </summary>
        public static bool DatabaseMigrationEnabled { get; set; } = false;

        /// <summary>
        /// Enable Logging Server Warn and Errors To Database
        /// </summary>
        public static bool DatabaseLogWarnToDbEnabled { get; set; } = true;
    }









}