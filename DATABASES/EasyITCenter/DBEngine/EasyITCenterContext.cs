using EasyITCenter.ServerCoreStructure;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Data.Common;


namespace EasyITCenter.Controllers {

    /// <summary>
    /// Server Main Database Settings Here is Included ScaffoldContext which is connected via Visual
    /// Studio Tool Here can Be added customization which are not on the server Here is Extended the
    /// Context with Insert News Functionality Customizing and implement Settings for Automatic
    /// Adopted Database Schema for Unlimited Working and Operations For Specifics API schemas
    /// https://www.codeproject.com/Articles/5321286/Executing-Raw-SQL-Queries-using-Entity-Framework-C
    /// </summary>
    public partial class EasyITCenterContext : ScaffoldContext {
        private static ILogger<EasyITCenterContext> _logger;

        public EasyITCenterContext(ILogger<EasyITCenterContext> logger) => _logger = logger;

        public EasyITCenterContext() {}

        public EasyITCenterContext(DbContextOptions<ScaffoldContext> options)
            : base(options) {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            if (!optionsBuilder.IsConfigured) {
                optionsBuilder.ConfigureLoggingCacheTime(TimeSpan.FromMinutes(DBConn.DatabaseInternalCacheTimeoutMin));
                optionsBuilder.EnableServiceProviderCaching(DBConn.DatabaseInternalCachingEnabled);
                optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
                optionsBuilder.EnableSensitiveDataLogging(false); //everytime must be disabled other problem on release

                optionsBuilder.UseSqlServer(DBConn.DatabaseConnectionString,
                      x => x.MigrationsHistoryTable("MigrationsHistoryList", "dbo"));

                if (SrvRuntime.DebugMode) {
                    optionsBuilder.UseLoggerFactory(LoggerFactory.Create(builder => {
                        builder.AddEventLog().AddConsole();
                    }
                    )).LogTo(message => { Debug.WriteLine(message); }).LogTo(Console.WriteLine);
                }
                else if (DBConn.DatabaseLogWarnToDbEnabled) {
                    optionsBuilder.UseLoggerFactory(LoggerFactory.Create(builder => {
                        builder.SetMinimumLevel(LogLevel.Warning).AddEventLog();
                    })).EnableSensitiveDataLogging(false).LogTo(message => {
                        SolutionFailList SolutionFailList = new SolutionFailList() 
                        { UserId = null, InheritedLogMonitorType = "PrimaryServer", Message = message, LogLevel = null, UserName = null };
                        new EasyITCenterContext().SolutionFailLists.Add(SolutionFailList).Context.SaveChanges();
                    }, LogLevel.Warning);
                }
            }
        }
    }

    /// <summary>
    /// Database Context Extensions for All Types Procedures For Retun Data in procedure can be
    /// Simple SELECT * XXX and you Create Same Class for returned DataSet
    /// </summary>
    public static class DatabaseContextExtensions {



        public static void RunTransaction(EasyITCenterContext dbContext, Func<IDbContextTransaction, bool> act) {
            if (dbContext != null && act != null) {
                var executionStrategy = dbContext.Database.CreateExecutionStrategy();

                executionStrategy.Execute(() => {

                    using var ret = dbContext.Database.BeginTransaction();
                    if (ret != null) {

                        try {
                            if (act.Invoke(ret)) {
                                ret.Commit();
                            }
                        } catch (Exception e) {
                            ret.Rollback();
                            throw new Exception("Error during transaction, rolling back");
                        }

                    } else {
                        throw new Exception("Error while starting transaction");
                    }

                });
            }
        }



        /// <summary>
        /// Trigger User Login History
        /// </summary>
        /// <param name="ipAddress"></param>
        /// <param name="userId">   </param>
        /// <param name="userName"> </param>
        public static async void WriteVisit(string ipAddress, int userId, string? userName) {
            // Save new visit
            if (!string.IsNullOrWhiteSpace(userName))
            {
                SystemLoginHistoryList record = new() { IpAddress = ipAddress, UserId = userId, UserName = userName, TimeStamp = DateTimeOffset.Now.DateTime };
                EntityEntry<SystemLoginHistoryList>? result = new EasyITCenterContext().SystemLoginHistoryLists.Add(record);
                await result.Context.SaveChangesAsync();
            }
        }


        /// <summary>
        /// Trigger Web IP Hosts History List
        /// TODO MOVE to app.use AS Agenda Definition 
        /// </summary>
        /// <param name="ipAddress"></param>
        public static async void WriteWebVisit(string ipAddress) {
            // Save new visit
            WebVisitIpList record = new() { WebHostIp = ipAddress, TimeStamp = DateTimeOffset.Now.DateTime };
            EntityEntry<WebVisitIpList>? result = new EasyITCenterContext().WebVisitIpLists.Add(record);
            await result.Context.SaveChangesAsync();
        }


        public static string CreateDbScript(EasyITCenterContext context) {
            return context.Database.GenerateCreateScript();
        }



        public static List<object>? EasyITCenterCollectionFromSql(this EasyITCenterContext EasyITCenterContext, Type type, string sql) {
            using var cmd = EasyITCenterContext.Database.GetDbConnection().CreateCommand();
            cmd.CommandText = sql;
            if (cmd.Connection?.State != ConnectionState.Open)
                cmd.Connection?.Open();
            try {
                List<object>? results = new List<object>();
                DataTable table = new DataTable();
                table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                table.Load(cmd.ExecuteReader());
                results = DataOperations.ConvertTableToClassListByType(table, type).ToList(); 
                //(table.AsDataView());

                return results;
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); } finally { cmd.Connection?.Close(); }
            return null;
        }


        public static List<T> GetListOf<T>(this EasyITCenterContext EasyITCenterContext, string sql) where T : class, new() {
            using var cmd = EasyITCenterContext.Database.GetDbConnection().CreateCommand();
            cmd.CommandText = sql;
            if (cmd.Connection?.State != ConnectionState.Open)
                cmd.Connection?.Open();
            try {
                List<T> results = null;
                DataTable table = new DataTable();
                table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                table.Load(cmd.ExecuteReader());
                results = DataOperations.GenericConvertTableToClassList<T>(table).ToList();

                return results;
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); } finally { cmd.Connection?.Close(); }
            return new List<T>();
        }

        public static IQueryable? Set(this EasyITCenterContext context, Type T) {
            MethodInfo? method = typeof(EasyITCenterContext).GetMethod(nameof(EasyITCenterContext.Set), BindingFlags.Public | BindingFlags.Instance);
            method = method?.MakeGenericMethod(T);
            return method?.Invoke(context, null) as IQueryable;
        }

        public static IQueryable<T>? Set<T>(this EasyITCenterContext context) {
            MethodInfo? method = typeof(EasyITCenterContext).GetMethod(nameof(EasyITCenterContext.Set), BindingFlags.Public | BindingFlags.Instance);
            method = method?.MakeGenericMethod(typeof(T));
            return method?.Invoke(context, null) as IQueryable<T>;
        }


        public static object? GetDbSet(EasyITCenterContext db, Type T) {
            MethodInfo? method = typeof(EasyITCenterContext).GetMethod(nameof(EasyITCenterContext.Set), BindingFlags.Public | BindingFlags.Instance);
            method = method?.MakeGenericMethod(T);
            return method?.Invoke(Set(db, T), null);
        }


        public static object GetDbSet<T>(EasyITCenterContext db) where T : class {
           return db.Set<T>() as object;
        }

        public static DbTransaction? GetDbTransaction(this EasyITCenterContext source) {
            return (source.Database.BeginTransaction() as IInfrastructure<DbTransaction>)?.Instance;
        }

        public static object? ExecuteScalar(this EasyITCenterContext context,
        string sql, List<DbParameter> parameters = null,
        CommandType commandType = CommandType.Text,
        int? commandTimeOutInSeconds = null) {
            Object? value;
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
               
                    if (cmd.Connection?.State != ConnectionState.Open) {
                    cmd.Connection?.Open();
                    }
                    cmd.CommandText = sql;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }
                    value = cmd.ExecuteScalar();
                    cmd.Connection?.Close();
                }
                return value;

            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); }
            return new object();
        }


        public async static Task<object?> ExecuteScalarAsync(this EasyITCenterContext context, string sql, List<DbParameter>? parameters = null, CommandType commandType = CommandType.Text, int? commandTimeOutInSeconds = null) {
            Object? value;
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {

                    if (cmd.Connection?.State != ConnectionState.Open) {
                        await cmd.Connection?.OpenAsync();
                    }
                    cmd.CommandText = sql;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) { cmd.CommandTimeout = (int)commandTimeOutInSeconds; }
                    if (parameters != null) { cmd.Parameters.AddRange(parameters.ToArray()); }
                    value = await cmd.ExecuteScalarAsync();
                    cmd.Connection?.Close();
                }
                return value;

            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); }
            return new object();
        }


        public static int ExecuteNonQuery(this EasyITCenterContext context, string command, List<DbParameter>? parameters = null, CommandType commandType = CommandType.Text, int? commandTimeOutInSeconds = null) {
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
                    if (cmd.Connection?.State != ConnectionState.Open) {
                        cmd.Connection?.Open();
                    }
                    var currentTransaction = context.Database.CurrentTransaction;
                    if (currentTransaction != null) {
                        cmd.Transaction = currentTransaction.GetDbTransaction();
                    }
                    cmd.CommandText = command;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }
                    int value = cmd.ExecuteNonQuery();
                    //cmd.Connection?.Close();
                    return value;
                }
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); }
            return new int();
        }

        public async static Task<int> ExecuteNonQueryAsync(this EasyITCenterContext context, string command, List<DbParameter>? parameters = null, CommandType commandType = CommandType.Text, int? commandTimeOutInSeconds = null) {
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
                    if (cmd.Connection?.State != ConnectionState.Open) {
                        await cmd.Connection?.OpenAsync();
                    }
                    var currentTransaction = context.Database.CurrentTransaction;
                    if (currentTransaction != null) {
                        cmd.Transaction = currentTransaction.GetDbTransaction();
                    }
                    cmd.CommandText = command;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }
                    int value = await cmd.ExecuteNonQueryAsync();
                    //cmd.Connection?.Close();
                    return value;
                }
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); }
            return new int();
        }


        public static DataTable ExecuteReader(this EasyITCenterContext context, string command, List<DbParameter>? parameters = null, CommandType commandType = CommandType.Text, int? commandTimeOutInSeconds = null) {
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
                    if (cmd.Connection?.State != ConnectionState.Open) {
                        cmd.Connection?.Open();
                    }
                    var currentTransaction = context.Database.CurrentTransaction;
                    if (currentTransaction != null) {
                        cmd.Transaction = currentTransaction.GetDbTransaction();
                    }
                    cmd.CommandText = command;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) { cmd.Parameters.AddRange(parameters.ToArray()); }

                    DataTable? table = new DataTable();
                    table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                    table.Load(cmd.ExecuteReader());
                    table = (table.DefaultView.Table?.AsDataView()?.Table );

                    cmd.Connection?.Close();
                    return table;
                  }
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); }
            return null;
        }


        public async static Task<DataTable> ExecuteReaderAsync(this EasyITCenterContext context, string command, List<DbParameter>? parameters = null, CommandType commandType = CommandType.Text, int? commandTimeOutInSeconds = null) {
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
                    if (cmd.Connection?.State != ConnectionState.Open) {
                        await cmd.Connection?.OpenAsync();
                    }
                    var currentTransaction = context.Database.CurrentTransaction;
                    if (currentTransaction != null) {
                        cmd.Transaction = currentTransaction.GetDbTransaction();
                    }
                    cmd.CommandText = command;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) { cmd.Parameters.AddRange(parameters.ToArray()); }

                    DataTable? table = new DataTable();
                    table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                    table.Load(await cmd.ExecuteReaderAsync());
                    table = (table.DefaultView.Table?.AsDataView()?.Table);

                    cmd.Connection?.Close();
                    return table;
                }
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); }
            return null;
        }


        public static IQueryable<TSource> FromSqlRaw<TSource>(this EasyITCenterContext db, string sql, params object[] parameters) where TSource : class {
            var item = db.Set<TSource>().FromSqlRaw(sql, parameters);
            return item;
        }

    }
}