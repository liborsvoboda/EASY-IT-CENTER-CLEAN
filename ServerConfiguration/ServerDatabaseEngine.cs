using System.Data;

/*
 * Server Core Configuration Part
 */

namespace EASYDATACenter.ServerConfiguration {

    /// <summary>
    /// Server Main Database Settings Here is Included ScaffoldContext which is connected via Visual
    /// Studio Tool Here can Be added customization which are not on the server Here is Extended the
    /// Context with Insert News Functionality Customizing and implement Settings for Automatic
    /// Adopted Database Schema for Unlimited Working and Operations For Specifics API schemas
    /// </summary>
    public partial class EASYDATACenterContext : ScaffoldContext {

        public EASYDATACenterContext() {
        }

        public EASYDATACenterContext(DbContextOptions<ScaffoldContext> options)
            : base(options) {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            if (!optionsBuilder.IsConfigured) {
                optionsBuilder.ConfigureLoggingCacheTime(TimeSpan.FromMinutes(BackendServer.ServerSettings.DatabaseInternalCacheTimeoutMin));
                optionsBuilder.EnableServiceProviderCaching(BackendServer.ServerSettings.DatabaseInternalCachingEnabled);

                optionsBuilder.UseSqlServer(BackendServer.ServerSettings.DatabaseConnectionString,
                      x => x.MigrationsHistoryTable("MigrationsHistory", "dbo"));

                if (BackendServer.ServerRuntimeData.DebugMode) {
                    optionsBuilder.UseLoggerFactory(LoggerFactory.Create(builder => { builder.AddConsole(); }))
                        .LogTo(message => Debug.WriteLine(message)).LogTo(Console.WriteLine);
                };
            }
        }

        /// <summary>
        /// Return User From API Request if Exist other null
        /// </summary>
        /// <param name="httpContext"></param>
        /// <returns></returns>
        public int? GetApiUser(HttpContext? httpContext) {
            int? requestUserId = null;
            try {
                requestUserId = (httpContext != null && httpContext.User != null)
                    ? int.Parse(httpContext.User.Claims.FirstOrDefault(c => c.Type == System.Security.Claims.ClaimTypes.PrimarySid).Value)
                    : null;
            } catch { }
            return requestUserId;
        }
    }

    /// <summary>
    /// Database Context Extensions for All Types Procedures For Retun Data in procedure can be
    /// Simple SELECT * XXX and you Create Same Class for returned DataSet
    /// </summary>
    public static class DatabaseContextExtensions {

        public static List<T> CollectionFromSql<T>(this EASYDATACenterContext dbContext, string sql) where T : class, new() {
            using var cmd = dbContext.Database.GetDbConnection().CreateCommand();
            cmd.CommandText = sql;
            if (cmd.Connection.State != ConnectionState.Open)
                cmd.Connection.Open();
            try {
                List<T> results = null;
                DataTable table = new DataTable();
                table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                table.Load(cmd.ExecuteReader());
                results = SystemHelpers.BindList<T>(table).ToList();

                return results;
            } catch (Exception Ex) { ServerCoreFunctions.SendMail(ServerCoreFunctions.GetSystemErrMessage(Ex)); } finally { cmd.Connection.Close(); }
            return new List<T>();
        }
    }
}