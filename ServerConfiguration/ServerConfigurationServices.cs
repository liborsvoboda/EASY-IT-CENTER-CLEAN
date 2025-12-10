using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

/*
 * Server Core Configuration Part
 */
namespace EASYDATACenter.ServerConfiguration {

    /// <summary>
    /// Server Core Configuration Settings of Security, Communications, Technologies, Modules Rules,
    /// Rights, Conditions, Formats, Services, Logging, etc..
    /// </summary>
    public class ServerCoreConfiguration {

        /// <summary>
        /// Server Core: Configure Cookie Politics
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureCookie(ref IServiceCollection services) {
            services.Configure<CookiePolicyOptions>(options => {
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });
        }

        /// <summary>
        /// Server Core: Configure Server Controllers
        /// options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = [ValidateNever]
        /// in Class options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore
        /// = [JsonIgnore] in Class
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureControllers(ref IServiceCollection services) {
            services.AddRouting(options => options.LowercaseUrls = true);

            services.AddControllersWithViews(options => {
                options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true;
            }).AddNewtonsoftJson(options => {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                options.SerializerSettings.ContractResolver = new DefaultContractResolver();
                options.SerializerSettings.Formatting = Formatting.Indented;
            }).AddJsonOptions(x => {
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                x.JsonSerializerOptions.WriteIndented = true;
                x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
                x.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
            });
        }

        /// <summary>
        /// Server Core: Configure Server Logging
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureLogging(ref IServiceCollection services) {
            if (BackendServer.ServerRuntimeData.DebugMode) {
                services.AddLogging(builder => {
                    builder.AddConsole().AddDebug()
                    .AddFilter<ConsoleLoggerProvider>(category: null, level: LogLevel.Debug)
                    .AddFilter<DebugLoggerProvider>(category: null, level: LogLevel.Debug);
                });
            }
            services.AddHttpLogging(logging => {
                logging.LoggingFields = HttpLoggingFields.All;
                logging.RequestHeaders.Add("sec-ch-ua"); logging.ResponseHeaders.Add("RequestJsonFormatNotCorrectly");
                logging.MediaTypeOptions.AddText("application/javascript");
                logging.RequestBodyLogLimit = logging.ResponseBodyLogLimit = 4096;
            });
        }

        /// <summary>
        /// Server Core: Configure Server Authentication Support
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureAuthentication(ref IServiceCollection services) {
            services.AddAuthentication(x => {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x => {
                x.BackchannelHttpHandler = new HttpClientHandler { ServerCertificateCustomValidationCallback = delegate { return true; } };
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(BackendServer.ServerSettings.ConfigJwtLocalKey)),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = BackendServer.ServerSettings.ServerTimeTokenValidationEnabled,
                    ClockSkew = TimeSpan.FromMinutes(BackendServer.ServerSettings.ConfigApiTokenTimeoutMin),
                };
                if (BackendServer.ServerSettings.ServerTimeTokenValidationEnabled) { x.TokenValidationParameters.LifetimeValidator = AuthenticationApi.LifetimeValidator; }

                x.Events = new JwtBearerEvents {
                    OnAuthenticationFailed = context => {
                        if (context.Exception.GetType() == typeof(SecurityTokenExpiredException)) {
                            context.Response.Headers.Add("IS-TOKEN-EXPIRED", "true");
                        }
                        return Task.CompletedTask;
                    }
                };
            });
        }

        /// <summary>
        /// Configures the MVC server pages.
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureServerWebPages(ref IServiceCollection services) {
            if (BackendServer.ServerSettings.ServerRazorWebPagesEngineEnabled) {
                services.AddMvc().AddRazorPagesOptions(opt => {
                    opt.RootDirectory = "/ServerCorePages";
                });
                //services.AddRazorPages(); 
            }

            if (BackendServer.ServerSettings.ServerMvcWebPagesEngineEnabled) {
                services.AddMvc(options => {
                    options.EnableEndpointRouting = false;
                    options.AllowEmptyInputInBodyModelBinding = true;
                });
            }
        }

        /// <summary>
        /// Server Core: Configure HTTP Client for work with third party API
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureThirdPartyApi(ref IServiceCollection services) {
            //services.AddHttpClient();
        }

        /// <summary>
        /// Server Core: Configure Custom Core Services
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureScopes(ref IServiceCollection services) {
            //services.AddScoped<IUserService, UserService>();
        }

        /// <summary>
        /// Server Core: Configure Custom Services
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureDatabaseContext(ref IServiceCollection services) {
            if (BackendServer.ServerRuntimeData.DebugMode) {
                services.AddDatabaseDeveloperPageExceptionFilter();
            }
            services.AddDbContext<EASYDATACenterContext>(opt => opt.UseSqlServer(BackendServer.ServerSettings.DatabaseConnectionString));
        }
    }
}