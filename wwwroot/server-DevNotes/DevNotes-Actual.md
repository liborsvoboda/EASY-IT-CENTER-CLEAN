using var playwright = await Playwright.CreateAsync();
await using var browser = await playwright.Chromium.LaunchAsync();
var page = await browser.NewPageAsync();
await page.GoToAsync("http://www.bing.com");
await page.ScreenshotAsync(path: outputFile);

https://github.com/hardkoded/playwright-sharp

https://github.com/hardkoded/puppeteer-sharp

muzu cist weby,stahovat, zkladat do ruznych formatu, 
vynenerovat kody a aratit vlastni html i spostet vlastni scripty

conectovat socet voalt API , vnitrni funkce server a cokoliv
viz: https://github.com/hardkoded/puppeteer-sharp



https://github.com/dotnet/SyndicationFeedReaderWriter/tree/main
RSS
Microsoft.SyndicationFeed.ReaderWriter

Must Prepare as AddonModule

SimpleSslServer - SSL server
OpenSonos - media server





# NodeJS Installators
npm -g install gulp gulp-cli
npm -g install bower
npm install -g pip
npm install -g pnpm
npm install -g electron
python -m pip install --upgrade pip


pluginy pridavat s cestou path 
tridy projektu definovat v pluginech
publikovat nuget server
publikovat nodejsadmin plugin




https://learn.microsoft.com/cs-cz/samples/browse/?expanded=dotnet&terms=aspire
https://learn.microsoft.com/cs-cz/dotnet/aspire/fundamentals/networking-overview
https://dotnetfoundation.org/projects/current-projects
https://dotnetfiddle.net/#&togetherjs=gKJ0FEehUt
https://learn.microsoft.com/cs-cz/aspnet/core/?view=aspnetcore-8.0
https://www.nuget.org/packages/Docker.DotNet/
https://www.nuget.org/
https://bitbucket.org/DimaStefantsov/unidecodesharpfork/src/master/
https://docs.github.com/en/rest?apiVersion=2022-11-28

https://learn.microsoft.com/cs-cz/sql/?view=sql-server-ver16
https://learn.microsoft.com/en-us/dotnet/core/extensions/windows-service-with-installer?tabs=wix
https://dotnet.microsoft.com/zh-cn/apps/cloud
https://learn.microsoft.com/en-us/dotnet/core/install/windows#net-installer


ekko-lightbox.NuGet
Metro4
NuGet\Install-Package LocalStorage -Version 2.1.0
NuGet\Install-Package Grpc.AspNetCore -Version 2.66.0
NuGet\Install-Package Microsoft.EntityFrameworkCore.Tools -Version 8.0.10
https://www.nuget.org/packages/MiniWord
PM> install-package PocoClassGenerator
LINQPad
NuGet\Install-Package CoAPnet -Version 1.2.0
NuGet\Install-Package HTTPnet -Version 2.1.0
UnidecodeSharpFork
NuGet\Install-Package Microsoft.OpenApi.Readers -Version 1.6.22
dotnet add package Octokit
dotnet add package Octokit.Reactive
using Storage.Net;
using Storage.Net.Blobs;
using System.IO;
using System.Text;
Rnwood.Smtp4dev
Rnwood.SmtpServer
JsonSchema.Net
JsonSchema.Net.Generation
MailKit
MimeKit	
Python.NET
docfx
AjaxControlToolkit
AspNet.ScriptManager.jQuery.3.3.1
Jquery
SC.Shared.Library
SharpZipLib
WebGrease
Modernizr.2.6.2
bootstrap.3.0.0
Antlr.3.4.1.9004
Respond.1.2.0
Microsoft.CodeDom.Providers.DotNetCompilerPlatform
MailChimp.NET
NHunspell

public static IHostApplicationBuilder AddDefaultHealthChecks(this IHostApplicationBuilder builder)
{
    builder.Services.AddRequestTimeouts(
        configure: static timeouts =>
            timeouts.AddPolicy("HealthChecks", TimeSpan.FromSeconds(5)));

    builder.Services.AddOutputCache(
        configureOptions: static caching =>
            caching.AddPolicy("HealthChecks",
            build: static policy => policy.Expire(TimeSpan.FromSeconds(10))));

    builder.Services.AddHealthChecks()
        // Add a default liveness check to ensure app is responsive
        .AddCheck("self", () => HealthCheckResult.Healthy(), ["live"]);

    return builder;
}



https://learn.microsoft.com/cs-cz/dotnet/aspire/fundamentals/health-checks




public static class SongLyricsMiddlewareExtensions
{
    public static IApplicationBuilder UseSongLyrics(this IApplicationBuilder builder)
      => builder.UseMiddleware<SongLyricsMiddleware>();
}

 "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=HealthChecksSample;Trusted_Connection=True;MultipleActiveResultSets=true;ConnectRetryCount=0"
  },
  
          app.MapHealthChecks("/healthz")
            .RequireHost("*:5001")
            .RequireAuthorization();
			
	        provider.Mappings[".wasm"] = "application/wasm";
        provider.Mappings[".cjs"] = "text/javascript";
        provider.Mappings[".mjs"] = "text/javascript";		
		
		
CertificateManager
app.MapSwagger().RequireAuthorization();

                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseKestrel()
                // .UseHttpSys()
                .UseIISIntegration()
				
	 private OpenApiDocumentService _documentService;			
				
		 services.AddDirectoryBrowser();
        services.AddResponseCompression();
		app.UseResponseCompression();
		app.UseFileServer(new FileServerOptions
        {
            EnableDirectoryBrowsing = true
        });

<!--         <script>
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-7589447-2']);
            _gaq.push(['_trackPageview']);
            _gaq.push(['_setDomainName', 'json-generator.com']);
            (function() {
                var ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            }
            )();
        </script> -->
		



        [HttpGet("api/applicationstats")]
        public object GetApplicationStats()
        {
            // Seriously?
            //var desc = System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription;

            var rt = typeof(string)
                .GetTypeInfo()
                .Assembly
                .GetCustomAttribute<AssemblyFileVersionAttribute>();
            var v = new Version(rt.Version);

            var entryAss = Assembly.GetEntryAssembly();
            var vname = Assembly.GetEntryAssembly()?.GetCustomAttribute<TargetFrameworkAttribute>()?.FrameworkName;


            var stats = new
            {
                OsPlatform = System.Runtime.InteropServices.RuntimeInformation.OSDescription,
                DotnetCoreVersion = vname,
            };


            return stats;
        }
		
		
		
		   services.AddRazorPages();
            services.AddServerSideBlazor();
            services.AddSingleton<WeatherForecastService>();
            services.AddScoped<IEmpService, EmpService>();
            services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
			
			
			
			    public class WeatherForecastService
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public Task<WeatherForecast[]> GetForecastAsync(DateTime startDate)
        {
            var rng = new Random();
            return Task.FromResult(Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = startDate.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            }).ToArray());
        }
    }
			
			
			
public String Translate(String word)  
      {  
          var toLanguage = "en";//English  
          var fromLanguage = "ar";//Deutsch  
          var url = $"https://translate.googleapis.com/translate_a/single?client=gtx&sl={fromLanguage}&tl={toLanguage}&dt=t&q={HttpUtility.UrlEncode(word)}";  
          var webClient = new WebClient  
          {  
              Encoding = System.Text.Encoding.UTF8  
          };  
          var result = webClient.DownloadString(url);  
          try  
          {  
              result = result.Substring(4, result.IndexOf("\"", 4, StringComparison.Ordinal) - 4);  
              return result;  
          }  
          catch  
          {  
              return "Error";  
          }  			
		  
		  




kontaktni informace otevrit mapy

  
DataTables.

  n uget


js cloud file manager
https://github.com/coderaiser?tab=repositories


FluffySpoon.Publisher.NodeJs

TypeScript.ContractGenerator

https://github.com/skbkontur/TypeScript.ContractGenerator

dotnet tool usage
Install tool with command:

dotnet tool install -g SkbKontur.TypeScript.ContractGenerator.Cli

Use tool with command:

dotnet ts-gen --assembly ./Api/bin/Api.dll --outputDir ./src/Api

dotnet tool also supports Roslyn:

dotnet ts-gen --directory ./Api;./Core --assembly ./External/Dependency.dll --outputDir ./src/Api

 ElectronNET.CLI --version 11.5.1

fastmail


PRODUCT PORTAL APPS
https://portal.productboard.com/pb/1-productboard-portal/tabs/7-under-consideration

https://dotnet.microsoft.com/zh-cn/apps/cloud

WEBVIEW2
https://learn.microsoft.com/cs-cz/microsoft-edge/webview2/

POPIS component 
https://learn.microsoft.com/cs-cz/microsoft-edge/webview2/concepts/overview-features-apis?tabs=dotnetcsharp#hostweb-object-sharing

Webview2 Javascript
https://learn.microsoft.com/cs-cz/microsoft-edge/devtools-guide-chromium/javascript/overrides

DB + Files
https://learn.microsoft.com/cs-cz/microsoft-edge/progressive-web-apps-chromium/how-to/offline

openFileButton.addEventListener("click", async () => {
  const fileHandles = await window.showOpenFilePicker();
});
https://developer.mozilla.org/zh-CN/docs/Web/API/StorageManager/getDirectory

UNO projects
https://platform.uno/docs/articles/external/uno.samples/doc/samples.html


BLAZOR  APPS
https://learn.microsoft.com/cs-cz/aspnet/core/blazor/javascript-interoperability/?view=aspnetcore-8.0&WT.mc_id=dotnet-35129-website

BLAZOR WPF
https://learn.microsoft.com/cs-cz/aspnet/core/blazor/hybrid/?view=aspnetcore-8.0

CODEGENERATOR
https://learn.microsoft.com/cs-cz/aspnet/core/fundamentals/tools/dotnet-aspnet-codegenerator?view=aspnetcore-8.0

nuget PARTS
https://learn.microsoft.com/cs-cz/aspnet/core/blazor/host-and-deploy/webassembly-deployment-layout?view=aspnetcore-8.0

METRO
https://github.com/MahApps/MahApps.Metro
https://github.com/orgs/MahApps/repositories
https://github.com/MahApps/MahApps.Metro/wiki/Quick-Start

metro extension

          services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<IProductService, ProductService>();

AvalonControlLibrary

Peertopeer stream  80 done projects
https://github.com/feross/simple-peer/tree/master

dotnet add package JsonFlatFileDataStore


https://learn.microsoft.com/en-us/dotnet/core/tools/global-tools

dotnet add package Microsoft.EntityFrameworkCore
dotnet remove package Microsoft.EntityFrameworkCore

 dotnet tool search 
 dotnet workload list 
dotnet tool list
dotnet tool install dotnetsay --tool-path c:\dotnet-tools
dotnet tool uninstall --global <packagename>

XML Generate
https://learn.microsoft.com/en-us/dotnet/core/additional-tools/xml-serializer-generator

https://github.com/dotnet/interactive/blob/main/src/Microsoft.DotNet.Interactive.CSharpProject/Markdown/HtmlExtensions.cs
dotnet.interactive  caN open dotnet downloaded builded project run my dll. project

Create OWN AweSome

FULL HELP Generic CLASS
https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.add?view=net-8.0

- nadefinovat Metody Pro Generickou Třídu  

- Vytvořit spouštění kódu ze stringu  s natazenim assemlby

printerService  + custom PDF/Image with Save to Server 

SQL Nexus  - 

Report SQL Statuses  https://github.com/microsoft/SqlNexus?tab=readme-ov-file
https://github.com/microsoft/SqlNexus/wiki/Installation
- Open Windows SW from Web by commands
- Check If Installed / Use Install / Open Download
https://github.com/microsoft/SqlNexus/wiki/Installation


SQL Reporting Services
SQL ExelServices 


# Interested News Extensions    

[AutoRest](https://github.com/doesitscript/autorest/tree/master)    
[MultiFormats](https://github.com/multiformats)   
[Workers](https://learn.microsoft.com/en-us/samples/dotnet/samples/csharp-workers-fundamentals/)
[generic](https://learn.microsoft.com/en-us/dotnet/standard/collections/when-to-use-generic-collections)



[net cmd services](https://learn.microsoft.com/en-us/dotnet/framework/tools/ildasm-exe-il-disassembler)



PUBLIKOVAT GENERATORY DATA TO NECO - JAKO VOLNE/NECO DOSTUPNE SLUZBY  

- GRafy / schemata - i z projektu / metody / classy a vsechno 
- s prominutim PAK TO MA KURVA NEKDO CHAPAT
- 

---    

# WANTYOU Solution OS IMAGE builder For Download


Download Windows/Linux Image With Selected Software



# Aspire Central Hosting

[podman Manager](https://podman.io/docs/installation#windows)      
[Podman Docs](https://docs.podman.io/)    
[Podman Docs Api](https://docs.podman.io/en/latest/)
[Podman Downloads](https://podman-desktop.io/downloads/windows)   
[Pogman Github 119REPOS](https://github.com/containers/podman/tree/main)    
[Docker Desktop](https://docs.docker.com/desktop/use-desktop/)
[Docker Docs](https://docs.docker.com/docker-hub/)
[Docker Github](https://github.com/orgs/docker/repositories)    


Manage containers, pods, and images, Terminal, ToolBOx, Websites, WebView  with Podman.    
Seamlessly work with containers and Kubernetes from your local environment.  

+ Docker Template Apps NET/NODEJS

[Aspire START](https://learn.microsoft.com/cs-cz/dotnet/aspire/)
[Aspire WebPages](https://learn.microsoft.com/cs-cz/dotnet/aspire/fundamentals/app-host-overview?tabs=docker)    
[Author Pages](https://learn.microsoft.com/cs-cz/dotnet/aspire/fundamentals/setup-tooling?tabs=windows&pivots=visual-studio#install-net-aspire)






# exe/linux tools help Scanner
for Use as Plugin To Solution With --help/? Result for Get Data 
and extend Possibilities



# GitHub Profiles With Super Ideas for Implement


[doesitscript](https://github.com/doesitscript?tab=repositories)   
[brigadecore](https://github.com/orgs/brigadecore/repositories)    


---   

# Project Managers   

Complete Solutions For Server/Managers/Admin/etc of Projects Creator/Builds/Publish


[brigade](https://github.com/brigadecore/brigade-sdk-for-js/tree/main)    
[Pestres](https://pester.dev/docs/quick-start)     
[octopus](https://octopus.com/docs)     
[Hygieia](https://github.com/doesitscript/Hygieia/tree/master)    
[autorest](https://github.com/doesitscript/autorest/tree/master)      
[OneGet](https://github.com/OneGet/oneget/tree/master)    
[anypackage](https://github.com/orgs/anypackage/repositories)     
[SignService](https://github.com/doesitscript/SignService/tree/master)     


---        

# DotNet Standalone Generators

[NUnit-HTML-Report-Generator](https://github.com/doesitscript/NUnit-HTML-Report-Generator/tree/master)    



---      

# Super OpenSource WinApps      

[AnyStorageManager](https://github.com/reactiveui/Camelotia)       
[Project Builder](https://github.com/Protobuild/Protobuild.Manager/tree/master)     



---      

# More Available WIN/Web/Lin Frameworks / Ui     


[ReactiveUi](https://github.com/reactiveui)       

---      


# Provider Servers

[Private NugetSrv](https://learn.microsoft.com/en-us/powershell/gallery/how-to/working-with-local-psrepositories?view=powershellget-3.x#creating-a-nugetserver-repository)     
[More Project Servers](https://learn.microsoft.com/en-us/windows/win32/debug/symbol-servers-and-internet-firewalls)     


# Core Services 

TODO 

- Služba návrhu opravy textu najít Dostupné slovníky


---   

# Worpress Integration

TODO
[Use This](https://localwp.com/)