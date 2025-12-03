using FubarDev.FtpServer;
using FubarDev.FtpServer.AccountManagement;
using FubarDev.FtpServer.FileSystem.DotNet;
using EasyITCenter.Services;
using LettuceEncrypt;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using SimpleMvcSitemap;
using Microsoft.AspNetCore.Mvc.Razor;
using Westwind.AspNetCore.Markdown;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.AspNetCore.Authentication.Facebook;
using Snickler.RSSCore.Extensions;
using Microsoft.AspNetCore.Identity;
using EasyITCenter.Controllers;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Korzh.DbUtils;
using Google.Apis.Translate.v3;
using Microsoft.EntityFrameworkCore;
using Stripe;
using EasyITCenter.ServerCoreStructure;
using EasyITCenter.ServerCoreServers;



namespace EasyITCenter.ServerCoreConfiguration {

    /// <summary>
    /// Server Core Configuration Settings of Security, Communications, Technologies, Modules Rules,
    /// Rights, Conditions, Formats, Services, Logging, etc..
    /// </summary>
    public class ServerConfigurationServices {



        internal static void AutoRegisterClassServices(ref IServiceCollection services) {
            /*
            services.AutoRegisterServices(options =>
            {
                options.Namespaces.Scoped = "Managers";
                options.Provider = new ClassRegistrationProvider();
            });
            */

        }


        /// <summary>
        /// Server Portal Emailing with Template and History
        /// https://github.com/lukencode/FluentEmail
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureUserFluentEmailing(ref IServiceCollection services)
        {
            //if (bool.Parse(DbOperations.GetServerParameterLists("UserFluentEmailingEnabled").Value))
            //{
            //    services.AddFluentEmail(DbOperations.GetServerParameterLists("ConfigManagerEmailAddress").Value).AddRazorRenderer().AddHandlebarsRenderer()
            //    .AddSmtpSender(DbOperations.GetServerParameterLists("EmailerSMTPServerAddress").Value, int.Parse(DbOperations.GetServerParameterLists("EmailerSMTPPort").Value), DbOperations.GetServerParameterLists("EmailerSMTPLoginUsername").Value, DbOperations.GetServerParameterLists("EmailerSMTPLoginPassword").Value);
            //}
        }




        /// <summary>
        /// Configure AutoMinify Js,Css 
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureAutoMinify(ref IServiceCollection services) {
            //if (bool.Parse(DbOperations.GetServerParameterLists("EnableAutoMinify").Value)) {
            //    services.AddWebOptimizer(cfg => {
            //        cfg.MinifyCssFiles(); cfg.MinifyJsFiles();/*cfg.MinifyHtmlFiles();*/
            //    }, option => {  
            //        option.EnableTagHelperBundling = true; 
            //        option.AllowEmptyBundle = true;
            //    });
            //}
        }

        /// <summary>
        /// Custom Secure FTP Server
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureFTPServer(ref IServiceCollection services) {
            if (bool.Parse(DbOperations.GetServerParameterLists("ServerFtpEngineEnabled").Value)) {
                services.AddFtpServer(
                    builder => {
                        if (!bool.Parse(DbOperations.GetServerParameterLists("ServerFtpSecurityEnabled").Value)) { 
                            builder.UseDotNetFileSystem().DisableChecks().UseSingleRoot().EnableAnonymousAuthentication(); } else { builder.UseDotNetFileSystem().DisableChecks().UseRootPerUser(); 
                        }
                    });
                services.Configure<FtpServerOptions>(opt => { opt.ServerAddress = "127.0.0.1"; /*opt.Port*/ });
                services.Configure<DotNetFileSystemOptions>(opt => {
                    opt.RootPath = !bool.Parse(DbOperations.GetServerParameterLists("ServerFtpSecurityEnabled").Value) ? Path.Combine(SrvRuntime.UserPath, "guest") : SrvRuntime.UserPath;
                    opt.AllowNonEmptyDirectoryDelete = true;
                });
                services.AddSingleton<IMembershipProvider, HostedFtpServerMembershipProvider>();
                services.AddHostedService<HostedFtpServer>();

                using (var serviceProvider = services.BuildServiceProvider()) {
                    SrvRuntime.ServerFTPProvider = serviceProvider.GetRequiredService<IFtpServerHost>();
                    SrvRuntime.FTPSrvStatus = true;
                }
            }
        }

        /// <summary>
        /// Server Core: Configure Cookie Politics
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureCookie(ref IServiceCollection services) {
            services.ConfigureApplicationCookie(options => {
                // Cookie settings
                options.Cookie.HttpOnly = true;
                options.ExpireTimeSpan = TimeSpan.FromMinutes(5);
                options.LoginPath = "/SrvAdmin/Account/Login";
                options.AccessDeniedPath = "/SrvAdmin/Account/AccessDenied";
                options.SlidingExpiration = true;
            });
            services.Configure<CookiePolicyOptions>(opt => {
                opt.ConsentCookie.Name = DbOperations.GetServerParameterLists("ConfigCoreServerRegisteredName").Value;
                opt.CheckConsentNeeded = context => false;
                opt.MinimumSameSitePolicy = SameSiteMode.Lax;
                opt.Secure = CookieSecurePolicy.Always;
                opt.ConsentCookie.IsEssential = true;
                opt.HttpOnly = Microsoft.AspNetCore.CookiePolicy.HttpOnlyPolicy.Always;
            });
        }

        /// <summary>
        /// Server Core: Configure Server Controllers
        /// options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = [ValidateNever]
        /// in Class options.Serialize Settings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore
        /// = [JsonIgnore] in Class
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureControllers(ref IServiceCollection services) {
            
            services.AddRouting(options => { options.LowercaseUrls = true;options.LowercaseQueryStrings = true; });

            services.AddControllersWithViews(options => {
                //if (ServerConfigSettings.ConfigServerStartupOnHttps) { options.Filters.Add(new RequireHttpsAttribute()); }
                options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true;
                options.EnableEndpointRouting = true;
            }).AddNewtonsoftJson(options => {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                options.SerializerSettings.ContractResolver = new DefaultContractResolver();
                options.SerializerSettings.Formatting = Formatting.Indented;
            }).AddJsonOptions(x => {
                //x.JsonSerialize Options.PropertyNameCaseInsensitive = true;
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
            if (SrvRuntime.DebugMode) {
                services.AddLogging(builder => {
                    builder.AddConsole().AddDebug().SetMinimumLevel(LogLevel.Information)
                    .AddFilter<ConsoleLoggerProvider>(category: null, level: LogLevel.Information)
                    .AddFilter<DebugLoggerProvider>(category: null, level: LogLevel.Information);
                });
            }
            services.AddHttpLogging(logging => {
                logging.LoggingFields = HttpLoggingFields.All;
                logging.RequestHeaders.Add("sec-ch-ua"); 
                logging.ResponseHeaders.Add("RequestJsonFormatNotCorrectly");
                logging.MediaTypeOptions.AddText("application/javascript");
                logging.RequestBodyLogLimit = logging.ResponseBodyLogLimit = 4096;
            });
        }


        /// <summary>
        /// Configures the MVC server pages on Server format "cshtml"
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureServerWebPages(ref IServiceCollection services) {
            if (bool.Parse(DbOperations.GetServerParameterLists("WebRazorPagesEngineEnabled").Value)) {
                if (bool.Parse(DbOperations.GetServerParameterLists("WebRazorPagesCompileOnRuntime").Value)) {
                    services.AddMvc(options =>
                    {
                        options.CacheProfiles.Add("Default30", new CacheProfile() { Duration = 30 });
                        options.AllowEmptyInputInBodyModelBinding = true;
                    }).AddRazorPagesOptions(opt =>
                    {
                        opt.RootDirectory = "/ServerCorePages";
                    });//.AddRazorRuntimeCompilation();
                }
                else {
                    services.AddMvc(options => {
                        options.CacheProfiles.Add("Default30", new CacheProfile() { Duration = 30 });
                    }).AddRazorPagesOptions(opt => {
                        opt.RootDirectory = "/ServerCorePages";
                        opt.Conventions.AuthorizeFolder("/DefaultWebPages/GlobalLogin");
                    });
                }
            }

            if (bool.Parse(DbOperations.GetServerParameterLists("WebMvcPagesEngineEnabled").Value)) {
                if (bool.Parse(DbOperations.GetServerParameterLists("WebRazorPagesCompileOnRuntime").Value)) {
                    services.AddMvc(options =>
                    {
                        options.EnableEndpointRouting = false;
                        options.AllowEmptyInputInBodyModelBinding = true;
                    });//.AddRazorRuntimeCompilation();
                } else {
                    services.AddMvc(options => {
                        options.EnableEndpointRouting = false;
                        options.AllowEmptyInputInBodyModelBinding = true;
                    });
                }
            }
        }

        /// <summary>
        /// Server core: Configures LetsEncrypt using. Certificate will be saved in DataPath
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureLetsEncrypt(ref IServiceCollection services) {
            if (bool.Parse(DbOperations.GetServerParameterLists("ConfigServerGetLetsEncrypt").Value)) {
                services.AddLettuceEncrypt(option => {
                    List<string> domainList = DbOperations.GetServerParameterLists("ConfigCertificateDomain").Value.Contains(',')
                    ? DbOperations.GetServerParameterLists("ConfigCertificateDomain").Value.Split(',').ToList()
                    : DbOperations.GetServerParameterLists("ConfigCertificateDomain").Value.Split(';').ToList();

                    domainList.ForEach(domain => { if (string.IsNullOrWhiteSpace(domain)) domainList.Remove(domain); });
                    option.DomainNames = domainList.ToArray();
                    option.EmailAddress = DbOperations.GetServerParameterLists("EmailerServiceEmailAddress").Value;
                    option.AcceptTermsOfService = true;
                    option.RenewDaysInAdvance = new TimeSpan(10, 0, 0, 0);
                    option.RenewalCheckPeriod = new TimeSpan(1, 0, 0, 0);
                }).PersistDataToDirectory(new DirectoryInfo(System.IO.Path.Combine(SrvRuntime.StartupPath, SrvRuntime.DataPath)), DbOperations.GetServerParameterLists("ConfigCertificatePassword").Value);
            }
        }


        internal static void ConfigureRssFeed(ref IServiceCollection services) {
            //if (bool.Parse(DbOperations.GetServerParameterLists("WebRSSFeedsEnabled").Value)) { services.AddRSSFeed<SomeRSSProvider>(); }
        }

        /// <summary>
        /// Server core: Configures the WebSocket logger monitor. 
        /// For multi monitoring and for
        /// Example Possibilities
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureWebSocketLoggerMonitor(ref IServiceCollection services) {
            if (bool.Parse(DbOperations.GetServerParameterLists("WebSocketServerMonitorEnabled").Value)) { services.AddSingleton<ILoggerProvider, ServerWebSockeMonitorService>(); }
        }

        /// <summary>
        /// Server Core: Configure Clients for work with third party API
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureThirdPartyApi(ref IServiceCollection services) {
            services.AddHttpClient();
        }




        /// <summary>
        /// Server Core: Configures the Transient.
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureTransient(ref IServiceCollection services) {

        }



        /// <summary>
        /// Server Core: Configures the singletons. 
        /// Its Register Custom Listeners For Actions
        /// </summary>
        /// <param name="services">The services.</param>
        internal static void ConfigureSingletons(ref IServiceCollection services) {
            services.AddSingleton<IHttpContextAccessor, EasyITCenterContextExtension>();
            services.AddSingleton<ISitemapProvider, SitemapProvider>();
            services.AddSingleton<IHealthCheckPublisher, HealthCheckActionService>();
        }

        /// <summary>
        /// Server Core: Configure Custom Core Services
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureScoped(ref IServiceCollection services) {
            services.AddScoped(typeof(IGenericApiServiceAsync<,>), typeof(GenericApiServiceAsync<,>));
            services.AddScoped(typeof(IGenericApiService<,>), typeof(GenericApiService<,>));

            //Stripe    
            StripeConfiguration.ApiKey = "SecretKey";
            services.AddScoped<CustomerService>();
            services.AddScoped<ChargeService>();
            services.AddScoped<TokenService>(); 
            services.AddScoped<IStripeService, StripeService>();

        }

        /// <summary>
        /// Server Core: Configure Hosted Service to Runtime Core For Access to Root Functionalities
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureServerManagement(ref IServiceCollection services) {
            SrvRuntime.SrvServiceProvider = services.BuildServiceProvider();
            SrvRuntime.SrvServices = services;
        }

        /// <summary>
        /// Server Core: Configure Custom Services
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureDatabaseContext(ref IServiceCollection services) {
            //if (SrvRuntime.DebugMode) { services.AddDatabaseDeveloperPageExceptionFilter(); }
            try {
                services.AddDbContext<EasyITCenterContext>(opt => opt.UseSqlServer(DBConn.DatabaseConnectionString).EnableDetailedErrors(true)
                .EnableSensitiveDataLogging(false).UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));

                //WEBHOSTING DB
                // Database File Example
                // services.AddDbContext<WebHostingDbContext>(
                //opt =>opt.UseFileContextDatabase<JSONSerializer, DefaultFileManager>(databaseName: "EICwebHosting", location: Path.Combine(ServerRuntimeData.WebRoot_path, FileOperations.GetLastFolderFromPath(ServerRuntimeData.ServerPrivate_path), "databases", "EICwebHosting.mdf"), password: "EICwebHOSTING"));
                //context.Database.Migrate();

            } catch (Exception ex) { }
        }


        /// <summary>
        /// Server Core: Configure Server Authentication Support
        /// Default Basic/JWT Authentication /Expiration BY 
        /// Main EasyITCenter Database
        /// </summary>
        /// <param name="services"></param>
        internal static void ConfigureDefaultAuthentication(ref IServiceCollection services) {

            services.AddAuthentication(x => {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x => {
                x.BackchannelHttpHandler = new HttpClientHandler { ServerCertificateCustomValidationCallback = delegate { return true; } };
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = CoreOperations.ValidAndGetTokenParameters();
                x.ForwardSignIn = new EasyITCenterContext().ServerModuleAndServiceLists.Where(a => a.IsLoginModule).FirstOrDefault()?.UrlSubPath;
                if (bool.Parse(DbOperations.GetServerParameterLists("ConfigTimeTokenValidationEnabled").Value)) { x.TokenValidationParameters.LifetimeValidator = AuthenticationService.TokenLifetimeValidator; }
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

   

                /*
                services.AddAuthentication().AddGoogle(options => { 
                    //options.ClientId = "";
                    //options.ClientSecret = "";
                }).AddFacebook(options => {
                    //options.ClientId = "";
                    //options.ClientSecret = "";
                    options.AppId = "";
                    options.AppSecret = "";
                }).AddMicrosoftAccount(microsoftOptions => {
                    //microsoftOptions.ClientId = "";
                    //microsoftOptions.ClientSecret = "";
                }).AddTwitter(twitterOptions => {
                    twitterOptions.ConsumerKey = "";
                    twitterOptions.ConsumerSecret = "";
                    twitterOptions.RetrieveUserDetails = true;
                });
                */
     
    }
}