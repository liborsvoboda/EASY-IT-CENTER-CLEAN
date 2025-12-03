# FIRST TODO LIST

* puppeter sharp netcore scraping
* https://github.com/libgit2/libgit2sharp/tree/master implementace komunikace s gitem
* prikazy muzu provadet i po socketu

* https://nugetmusthaves.com/Tag/roslyn?page=7 TADY TO PROHLEDAT MORE SUPOER KNIHOVEN

netcore project builder
https://github.com/xoofx/Broslyn/blob/master/src/Broslyn/CSharpCompilationCapture.cs
http://scriptcs.net/ spousteni scriptu instalace

living je generovani dokumentace s UML diagramy
OmniSharp http server https://github.com/OmniSharp/omnisharp-roslyn
https://github.com/dotnet-script/dotnet-script
Westwind.Scripting https://nugetmusthaves.com/Package/Westwind.Scripting

OmniSharp.MSBuild https://nugetmusthaves.com/Package/OmniSharp.MSBuild
dotnet-script https://github.com/dotnet-script/dotnet-script
NUnit Migrator https://github.com/wachulski/nunit-migrator

https://github.com/dotMorten/DotNetOMDGenerator Generator HTML diagramu 
https://github.com/wiltaylor/EasyRoslynScript

užitečné JS k postavení čehokoli naprosto stačí 110 repos webviewer apps
https://github.com/orgs/PDFTron/repositories?type=all&page=3

* servicestack  publikace služeb, management klientů  řešení, a začít dělat služby
https://github.com/ServiceStack/ServiceStack
1 seznam měst atd udělat druhou DB kde budou 
https://docs.servicestack.net/templates/
https://docs.servicestack.net/


# Nezdokumentované Poznámky

netcore generator
https://github.com/maca88/AsyncGenerator/tree/master/Source/AsyncGenerator.Core




Server=127.0.0.1;Database=Golden;Trusted_Connection=True;TrustServerCertificate=True
"Server=127.0.0.1,1433;Database=Golden;User Id=Golden;Password=Golden;TrustServerCertificate=True"

scafolging
https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio-code#scaffold-a-controller
https://www.learnentityframeworkcore.com/walkthroughs/existing-database
https://www.mattmillican.com/posts/aspnetcore-controller-scaffolding/
https://www.entityframeworktutorial.net/efcore/create-model-for-existing-database-in-ef-core.aspx

nastavení příkazu scafold
https://www.educative.io/courses/entity-framework-core-for-data-access-and-relational-mapping/scaffolding-a-model-from-a-database-schema
https://debug.to/6390/how-to-create-c-classes-from-sql-database-schema-in-mvc-using-scaffolding


Online HELP https://metroui.org.ua/m4q-about.html

Github studnice od stvoritele
https://github.com/olton?tab=repositories
+vue https://codepen.io/olton/pen/zWomRo

https://dev.to/paulasantamaria/document-your-javascript-code-with-jsdoc-2fbf
https://github.com/jsdoc
https://github.com/metalsmith/metalsmith/tree/master
https://github.com/metalsmith
https://github.com/orgs/vue-styleguidist/repositories?type=all
https://github.com/vue-styleguidist/vue-styleguidist
https://mokkapps.de/blog/document-and-test-vue-3-components-with-storybook
https://github.com/vue-styleguidist/vue-styleguidist/tree/dev/packages/vue-styleguidist
javascriptdokumentace i online dokumentace

gitlab repos
https://docs.gitlab.com/

MS návod
https://www.c-sharpcorner.com/article/exporting-comments-in-visual-studio/


další kroky

HealthCheckRegistration

CORS

cookie

httpclient for automatic download data

------------------------------
using metro objects

call
onclick="Metro.infobox.open('#EDCinfoBox');"

create by script
Metro.infobox.create(html_content, "info");
-------------------------------------------------------------------------------------------

cshtml use data from model
 value="@Model.webPagesLogin.Username"


-------------------------------------------------------------------------------------------
cookie help
https://www.npmjs.com/package/js-cookie?activeTab=code
------------------------------------------------------------------------------------------
ASPNET MVC Jquery

Načtení dat se udělá tak že v souboru cshtl.cs 
si načtu všechny potřebné hodnoty do proměnné a tu pak jedoduše zobrazím přes model 

ukázka
public ServerWebPagesLogin webPagesLogin = new ServerWebPagesLogin() { Username = "test" };
 <input id="passwordId" type="password" data-role="input" data-prepend="<span class='mif-key'>" value="@Model.webPagesLogin.Password"

   ------------------------------------------------------------------------------------------

  odesální dat jquery
  $.post("/CheckLogin", { Username: $("#usernameId").val(), Password: $("#passwordId").val() }, function (data) { console.log(data); });
  ---------------------------------------------------------------------------------------------
  ajx with basic auth 


  JSON Messaging
            var def = $.ajax({
                global: false, type: "POST", url: "/WebUser/UpdateRegistration", dataType: 'json',
                contentType: 'application/json',
                headers: { "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null) },
                data: JSON.stringify({ EmailAddress: $("#usernameId").val(), FirstName: $("#firstnameId").val(),
                    LastName: $("#lastnameId").val(), Password: $("#passwordId").val(), Language: WebPagesLanguage
                })
            }).fail(function (data) {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Update Profile Failed", "Alert", { cls: "alert" }); notify.reset();
                hidePageLoading();
            }).done(function (data) {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Update Profile Success", "Info", { cls: "success" }); notify.reset();
                hidePageLoading();
            });



            var def = $.ajax({
                global: false, type: "POST", url: "/EasyITCenterAuthentication", dataType: 'json',
                headers: { "Authorization": "Basic " + btoa($("#usernameId").val() + ":" + $("#passwordId").val()) },
                data: JSON.stringify({ Files: dataset })
            });
            global: false, type: "GET", url: "//WebUser/GetWebUser/" + WebPagesLanguage, dataType: 'json',
            headers: { "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null) }

            var def = $.ajax({
                global: false, type: "POST", url: "/EasyITCenterAuthentication", dataType: 'json',
                headers: { "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null) },
                data: JSON.stringify({ EmailAddress: $("#usernameId").val(), FirstName: $("#firstnameId").val(),
                    LastName: $("#lastnameId").val(), Password: $("#passwordId").val(), Language: WebPagesLanguage
                })
            });
----------------------------------------------------------------------------------------------------------

RAZOR TO javascript

<script type="text/javascript">
    var i = parseInt('@Model.i');
</script>
Or you can try with below given options.

Option 1:

var myVar = '@Model.MyVar';
var name = '@Model.Name';
Option 2:

var myVar ='@Html.Raw(Model.MyVar)';
var name = '@Html.Raw(Model.Name)';

<script type="text/javascript">
    var myArray = JSON.parse('@Json.Serialize(@Model.MyList)');
    var myVar = '@Model.MyVar';
</script>

<script>
    var myList = @Json.Serialize(Model.MyList);
</script>



boolean check  if (!Boolean(@logged.ToString().ToLower())) console.log("hi");
---------------------------------------------------------------------------------------------------------

call get function

 $.get("data/" + v).then(function (response) {
     console.log(response);
     var select = $("#select1").data("select");
     select.data(v.indexOf("json") === -1 ? response : JSON.parse(response));
 });

 ukazky
 http://cidccentreest.fr/Metro/docs/templates/login.asp

 typescript + netcore
 https://korzh.com/blog/typescript-webpack-aspnetcore
 https://korzh.com/blog/add-extra-user-claims-aspnet-core-webapp  Identity

 const message = 'Hello world!';
        console.log(message);

        action='@Url.Action("Login", "Cliente")'



        function pushMessage(t){
            var mes = 'Info|Implement independently';
            $.Notify({
                caption: mes.split("|")[0],
                content: mes.split("|")[1],
                type: t
            });
        }

        link
         <a asp-page="./Index">Back to List</a>

          <input asp-for="Movie.Price" class="form-control" />


          $.post("ServerCorePages/Login", $("#loginform").serialize(), function (data) { });

          $.ajax({
    url: 'someUrl',
    type: 'POST',
    dataType: "json",
    contentType: 'application/json',
    data: JSON.stringify(myData)
});  
---------------------------------------------------
Cookie Only Api token for NETCORE Identity
Cookies.set('ApiToken', n);


Metro.storage.getItem('ApiToken', null);

------------------------------------------------

var def = $.ajax({
    global: false, type: "POST", url: "/Generators/GenerateMdToMdBook", dataType: 'json',
    headers: {
        'Content-type': 'application/json',
        "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null)
    },
    data: JSON.stringify({ Files: dataset })
});


$.ajax({ url: '/EasyITCenterUserWebConfigList/WebUser', dataType: 'json',
    type: "GET",
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
    },
    success: function (data) {
        console.log(JSON.stringify(data));
        Metro.storage.setItem('UserData', JSON.stringify(data));
        hidePageLoading();
    },
    error: function (error) {
        var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
        notify.create("Downloading User Data Failed", "Alert", { cls: "alert" }); notify.reset();
        hidePageLoading();
    }
});

-------------------------------------------------

https://github.com/KorzhCom/EasyData?utm_source=blog&utm_medium=content&utm_campaign=kblog_banner

metro4 generic data manager
-------------------------------------------------
backgeround video support image mask , sound 

https://github.com/pupunzi/jquery.mb.YTPlayer/wiki
The URL of the page containing the video
videoURL: ‘https://www.youtube.com/watch?v=V2rifmjZuKQ’.
The short URL available from the YouTube share panel
videoURL: ‘http://youtu.be/V2rifmjZuKQ’.
The video ID
videoURL: ‘V2rifmjZuKQ’.

-------------------------------------------------

 async function startup() {
      let result1 = await f1(...);
      let result2 = await f2(...);
      let result3 = await f3(...);
 }

 startup().then(finalResult => {
    // all async operation done here with finalResult
 }).catch(err => {
    // error starting up
 });

 ------------------------------------------------


  app.Map("/de",
    userApp =>
    {
        userApp.UseSpaStaticFiles(new StaticFileOptions
                                  {
                                      FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "de"))
                                  });
        userApp.UseSpa(spa =>
        {
            spa.Options.DefaultPage = new PathString("/de/index.html");

            if (app.Environment.IsDevelopment())
                spa.UseProxyToSpaDevelopmentServer("http://localhost:4000");
        });
    });
app.Map("/en",
    userApp =>
    {
        userApp.UseSpaStaticFiles(new StaticFileOptions
                                  {
                                      FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "en"))
                                  });
        userApp.UseSpa(spa =>
        {
            spa.Options.DefaultPage = new PathString("/en/index.html");

            if (app.Environment.IsDevelopment())
                spa.UseProxyToSpaDevelopmentServer("http://localhost:4001");
        });
    });

app.UseWhen(context => !context.Request.Path.StartsWithSegments("/api"), appBuilder =>
{
    appBuilder.Use((Func<HttpContext, Func<Task>, Task>)((context, _) =>
                                                            {
                                                                context.Response.Redirect("/de");
                                                                return Task.CompletedTask;
                                                            }));
});

app.Run();


---------------------------

controler online 
https://stackoverflow.com/questions/46156649/asp-net-core-register-controller-at-runtime

https://github.com/quartz-scheduler/quartz/blob/main/docs/examples/Example1.md#Example1-RunningtheExample
návod

https://github.com/dotnet/AspNetCore.Docs/tree/main

https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/write?view=aspnetcore-8.0

webBuilder.UseUrls("http://*:5000;http://localhost:5001;https://hostname:5002");

https://learn.microsoft.com/en-us/aspnet/core/fundamentals/host/generic-host?view=aspnetcore-5.0
https://github.com/dotnet/runtime/tree/main/src/libraries/System.Management/src/System/Management
https://github.com/aspnet


https://github.com/dotnet/AspNetCore.Docs/blob/main/aspnetcore/fundamentals/tools/dotnet-aspnet-codegenerator.md
https://github.com/aspnet/samples/blob/main/samples/aspnetcore/blazor/InputLargeTextArea/SampleServerApp/Program.cs
https://github.com/aspnet/JavaScriptServices


node, angurar js examlpes
https://github.com/aspnet/JavaScriptServices/tree/master/samples/misc

URL Rewrite service
https://github.com/aspnet/BasicMiddleware/blob/master/samples/RewriteSample/Startup.cs

Razor portal
https://github.com/aspnet/Razor/tree/master/src

https://github.com/orgs/microsoft/repositories?type=all
microsoft mannej tooly

monacoeditor
https://microsoft.github.io/monaco-editor/docs.html#modules/editor.html

mopnascoeditor
https://code.visualstudio.com/docs/editor/editingevolved

graphgq sandbox generator schema
https://github.com/dotansimha/graphql-code-generator-issue-sandbox-template/tree/master


práce se soubory bez node.js
https://copyprogramming.com/howto/write-to-json-file-without-node-js

dodelat restarty sluzeb FTP , quartz atd

https://github.com/graphql-dotnet/server

HOSTING
http://supervisord.org/installing.html#creating-a-configuration-file
https://webmin.com/download/
https://ajenti.org/
https://relaxedcoder.com/blog/tutorial-easy-deploy-of-net-core-to-linux-on-linode/

SIMPLE HOSTING https://github.com/PureKrome/SimpleHosting
spa hosting https://github.com/NetLah/spaservices-hosting

RESOUCRCE AMANAGER hosting více aplikací
https://github.com/Prastiwar/ResourceManager/blob/main/docs/sampleresources.png



Pages Generator
https://learn.microsoft.com/en-us/aspnet/core/fundamentals/tools/dotnet-aspnet-codegenerator?view=aspnetcore-8.0

https://github.com/HamedFathi/workflow-core/tree/master
Glob8ln9 programov8n9 


BOREC má milion super projektu
https://github.com/HamedFathi?tab=repositories


subdomeny
https://github.com/mariuszkerl/AspNetCoreSubdomain
https://copyprogramming.com/howto/how-do-i-get-the-current-subdomain-within-net-core-middleware

generic API
https://medium.com/@ajays871/generic-rest-controller-and-generic-entity-framework-implementation-in-asp-net-core-application-a91b18507b55


mail server
https://github.com/linsmod/DataSmart.MailServer/tree/master


Hostování vlastní definice hostovaného webserveru NOvý server na nových portech
https://github.com/aspnet/Hosting/blob/release/2.1/samples/GenericWebHost/WebHostService.cs
https://github.com/aspnet/Hosting/blob/release/2.1/src/Microsoft.AspNetCore.TestHost/TestServer.cs

generický server adefinice serveru by byly v databázy: takto by šlo nadefinovat server a spustit na novém portu
https://github.com/aspnet/Hosting/blob/release/2.1/samples/GenericHostSample/ProgramFullControl.cs

nasadit to jako addhostedservice
https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/windows-service?view=aspnetcore-8.0&tabs=visual-studio



hostingy budu musete nastavit jako kontrolery [Route("api/[controller]")]
https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks/blob/master/samples/HealthChecks.Sample/Controllers/ValuesController.cs
tim je od sebe odlisim a mazu jim pak dat genericke sluzy a dalsi moznosti jako api atd

implementace hostovani webu i s dbkontextem a pridat tam generickou request/response 
tak timto REQ/REP ovladnu cele genericke API   oni to tam uy maji https://github.com/relay-dev/web/blob/master/src/Web/Extensions/HttpRequestExtensions.cs
https://github.com/relay-dev/web

genericka inmemory databáze
https://github.com/relay-dev/web/blob/master/src/Web.Testing/Unit/InMemoryDbContextTest.cs

https://github.com/relay-dev/fluent-commander
Dynamická API včetně SQL či Entit


tady je kompletní řešení hostování aplikace - dalšího serveru i s pluginy a wším jako multiprovidwer hosting
https://github.com/relay-dev/core/tree/master
projít si jeho git má tam další doplnky

správa procesu serveru nebo hostovanych aplikaci v konzoli
https://github.com/relay-dev/processor/tree/master

JE TU CELY HOSTING JEN BEZ WEB ROZHRANI  
-  A TADY  JE TO JESTE VICE CELE  https://github.com/dotnetcore/Util/tree/master
s generatory, podporou riznych WWW, sablonama, razor,planovac,imige,file,db all, +microservisy,health app,ui

generátor projektu jako mam ja https://github.com/dotnetcore/SmartCode/tree/master  + smartcode-cli ma byt web klient


MAJI VSECHNO https://github.com/dotnetcore

generátor nebo compilátor kodu celého reseni 
https://github.com/protocolbuffers/protobuf/tree/main

https://github.com/protocolbuffers/protobuf-javascript
https://github.com/protocolbuffers/protobuf/tree/main

vypaga to na vygenerovani modularnioho systemu s tim ze clovek dela adendy v celem rozsahu tzn  vice tabulek provazanych to priradi
a tooto rerzeni vygeneruje projekt - cely system

Protocol Buffers (a.k.a., protobuf) are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data.
celeho systemu, ktery to vygeneruje i s RAZOR PAGES

zobrazeni dat 
https://github.com/SkyAPM/SkyAPM-dotnet/tree/main
https://github.com/SkyAPM/SkyAPM-netcore-hosting-startup/tree/master


https://github.com/orgs/Xabaril/repositories?type=all
maji toho vic v repository

server tokenu 
https://github.com/Xabaril/JWTSimpleServer


https://github.com/Xabaril/BeatPulse
samostatny Check Server

https://www.nuget.org/packages/Microsoft.ApplicationInsights.AspNetCore
monitoring in netcore

json collection - zpusob jak tvorit cokoliv
https://github.com/collection-json

sentry - maji toho vic
hosting zalozeny na javascruptu s podporou vsechz typu jazyku
sentry maji knihovnu na sledovani javascriptu a monitoruje i takove chyby
MAJI TEMPLATY VZHLEDU


Dokumentace microsoftu
https://github.com/orgs/MicrosoftDocs/repositories?type=all&page=2

github microsoftu
https://github.com/microsoft


WPF napoveda
https://learn.microsoft.com/en-us/windows/communitytoolkit/controls/wpf-winforms/windowsxamlhost
https://github.com/microsoft/Xaml-Islands-Samples/tree/master/Samples/Managed/SampleLibraryCS
https://github.com/dotnet
https://learn.microsoft.com/en-us/dotnet/?view=windowsdesktop-8.0
https://github.com/aspnet
https://github.com/orgs/getsentry/repositories?type=all
https://github.com/MicrosoftDocs
https://github.com/microsoft
https://learn.microsoft.com/cs-cz/windows/apps/windows-app-sdk/wpf-plus-winappsdk
https://github.com/dotnetcore
https://github.com/microsoftarchive/msdn-code-gallery-microsoft/tree/master/OneCodeTeam



zadat do systému vyhledávače
https://www.codeproject.com/
github
https://learn.microsoft.com/cs-cz/search


ALL WPF FHOSTING TYPES INFO EXAMPLES
https://learn.microsoft.com/en-us/dotnet/desktop/wpf/advanced/walkthrough-hosting-a-wpf-composite-control-in-windows-forms?view=netframeworkdesktop-4.8&redirectedfrom=MSDN


watson web server jednoduchz webserver


dotnet tool
https://learn.microsoft.com/en-us/dotnet/navigate/tools-diagnostics/

sourceBrowser generator
https://sourcebrowser.azurewebsites.net/#HtmlGenerator/Configuration.cs


PIVOT
https://github.com/nicolaskruchten/pivottable/wiki/UI-Tutorial


public static void RunMigration(this DbContext context, DbMigration migration)
    {
        var prop = migration.GetType().GetProperty("Operations", BindingFlags.NonPublic | BindingFlags.Instance);
        if (prop != null)
        {
            IEnumerable<MigrationOperation> operations = prop.GetValue(migration) as IEnumerable<MigrationOperation>;
            var generator = new SqlServerMigrationSqlGenerator();
            var statements = generator.Generate(operations, "2008");
            foreach (MigrationStatement item in statements)
                context.Database.ExecuteSqlCommand(item.Sql);
        }
    }



    super dokuemntace finalni verye
    https://github.com/sphinx-doc/sphinx


    DIAGRAM ENGINE
    https://gojs.net/latest/samples/treeView.html
    https://drawsql.app/templates/voyager
    https://gojs.net/latest/samples/entityRelationship.html
    interaktivni apkz ke stazeni  VSECHNO schedulery,desktopy,diagamy, grafy, clanky,admini

    https://madewithvuejs.com/?page=2
    https://docs.deskree.com/javascript-sdk/#installation

    BY stacilo
    https://dbdiagram.io/d


    NEKONECNE APLIKACE A SERVERY pro sdileni : https://drawsql.app/


    WPF MEGA TOOLS REPOSITORY
    https://github.com/punker76?tab=repositories

    HandyControl
    https://handyorg.github.io/handycontrol/basic_xaml/
    globalní způsob generování XAML a další nové prvky WPF

    WPF DEVELOPING ADVANCEDHELP INFO
    https://www.codeproject.com/Articles/5324971/Deep-Dive-into-WPF-Layouting-and-Rendering

    MaterialDesign  Další WPF prvky
    https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit


    Příkazy pro spustění Server Tools
    python -m SimpleHTTPServer <port> 

    borec s řešeními pro generování blogů dokumentací 
    https://github.com/alhassy


    Návody na vše možné spousta Server nástrojů
    https://jonlabelle.com/snippets   JS,server,DB, extens, modules, node, html, convert, google, git, scripts, generators, ,a milion dalšího


    PHP framework pro netcore - podpora PHP web serveru
    CodeIgniter

    generic netcore host service
    https://jonlabelle.com/snippets/view/csharp/aspnet-async-generic-host-example


    MSSQL manage server script
    https://jonlabelle.com/snippets/view/sql/sql-server-maintenance-solution

    prevodnik dat z clasy do clasy na základě pojmenovaných polí
    https://jonlabelle.com/snippets/view/csharp/simple-model-mapper

    Přímá editace webu 
    document.designMode = 'on'
    document.designMode = 'off'


    JAVASCRIPT řízení vazeb knihoven, a pluginů
    https://jonlabelle.com/snippets/view/javascript/micropluginjs-a-lightweight-plug-in-system


    MSSQL zalození tabulky i s daty do databáze
    https://jonlabelle.com/snippets/view/csharp/bulk-insert-generic-list-into-sql-server


    Pandoc   a universal document converter
    https://pandoc.org/

    Simple C# Open Port Network Scanner
    https://jonlabelle.com/snippets/view/csharp/simple-c-open-port-network-scanner


    stylizační knihovna jako bootstrap
    https://jonlabelle.com/snippets/view/css/css-utilities


    Local Remote Get Network Statistics function
    https://jonlabelle.com/snippets/view/powershell/get-network-statistics


    SQL Server data merge builder script.
    https://jonlabelle.com/snippets/view/sql/data-merge-builder

    Async HTTP Server and Client  vhodné pro TEMP servery , tvorba samostatných web serverů
    https://jonlabelle.com/snippets/view/csharp/async-http-server-and-client


    Download Web Page Async - vyzkoušet zda stahuje JS stránky - scraping
    https://jonlabelle.com/snippets/view/csharp/download-web-page-async


    SQL Server Security Audit Report - hotový script, přidat do operací
    https://jonlabelle.com/snippets/view/sql/sql-server-security-audit-report


    7 Essential JavaScript Functions - pro správný vývoj JS funkcí - přidat do global knihovny
    https://jonlabelle.com/snippets/view/javascript/7-essential-javascript-functions


    Ajaxify an HTML 4 Site - funkce, která udělá, že stránka se načítá po jednotlivých kouscích
    https://jonlabelle.com/snippets/view/javascript/ajaxify-an-html-4-site


    Simple node.js static file server. script
    https://jonlabelle.com/snippets/view/javascript/node-static-file-server


    číselník licencí ke stažení
    https://opensource.org/licenses



NODE Version Manager  first install nvm
nvm list available     - list of all available versions
nvm install lts        - install latest LTS
nvm install 18.19.1    - install specific version
nvm use lts
nvm use 18.19.1
nvm on  - activate nvm


NODE NVM, JAVASCRIPT TOOLS
https://github.com/coreybutler?tab=repositories


electon App
https://github.com/1111mp/nvm-desktop/releases


800x WPF Tools
https://github.com/punker76?page=4&tab=repositories

Cheatcheats - knihovny, návody
https://github.com/alhassy?tab=repositories


Doc řešení 
JSDoc3, JSDoc, DocStrap, MarkdownSnippets, PanDoc, dotnet try
docFX
https://dotnet.github.io/docfx/docs/markdown.html?tabs=linux%2Cdotnet





generovana dokumentace se vším i API
https://dotnet.github.io/docfx/docs/config.html
https://github.com/dotnet/docfx?tab=readme-ov-file#getting-started

JSDoc pro scripty


generator 120typu snipetu
https://github.com/AdrianWilczynski/VSCodeSnippetGenerator/tree/master
popis
https://marketplace.visualstudio.com/items?itemName=adrianwilczynski.asp-net-core-snippet-pack



Layout a midleware zobrazeni všech md souborů  automaticky jako HTML pomoci nadefinovaneho layoutu
https://www.codemag.com/article/1811071/Marking-up-the-Web-with-ASP.NET-Core-and-Markdown



a dotnettry ma online c# proces
https://github.com/dotnet/try
https://github.com/dotnet/try-samples/tree/main  umi to strasne moc

generace dokumentace
https://wyam.io/api/wyam.docs/



NETCORE SUPER EASY HELP 
https://www.learnrazorpages.com/miscellaneous/scaffolding

NETCORE FULL NW VERSION HELP , TOOLS, SAMPLEPS, serverz atd
https://github.com/dotnet/aspnetcore/blob/dffe9abf6b6b009e183e808459e65770c9210a52/src/Middleware/StaticFiles/src/StaticFileMiddleware.cs

Netcore WebFramework
https://htmx.org/examples/ + https://hyperscript.org/ a další  i s debugerem, modal atd

netcore rady jak se dal posunout 
https://learn.microsoft.com/en-us/archive/msdn-magazine/2013/october/asp-net-getting-started-with-the-katana-project#moving-to-self-host


ukazka jak nahodit neomezene serveru
https://github.com/dotnet/aspnetcore/blob/dffe9abf6b6b009e183e808459e65770c9210a52/src/DefaultBuilder/samples/SampleApp/Program.cs


WinJS WinCSS nove fameworky pro apky do storu
https://learn.microsoft.com/en-us/previous-versions/windows/apps/hh465453(v=win.10)?redirectedfrom=MSDN
win App i web App  -    doislova webove metro


necoredoc
https://github.com/dotnet/AspNetCore.Docs/blob/main/aspnetcore/fundamentals/host/hosted-services.md


scafoldgenerator
https://learn.microsoft.com/en-us/aspnet/core/fundamentals/tools/dotnet-aspnet-codegenerator?view=aspnetcore-5.0


globální řešení stránkování
https://learn.microsoft.com/en-us/aspnet/core/data/ef-rp/sort-filter-page?view=aspnetcore-5.0#add-paging

netcore webhost
https://github.com/dotnet/aspnetcore/blob/v6.0.1/src/DefaultBuilder/src/WebHost.cs


netcore partmanager neni aktivni umi zobrazovat controlery treba, je to ke sdileni a managementu mezi moduly
https://www.vb-net.com/AspNet-DocAndSamples-2017/aspnetcore/mvc/advanced/app-parts.htm
https://github.com/dotnet/AspNetCore.Docs/blob/main/aspnetcore/mvc/advanced/app-parts.md


Facebook Google 
https://aspnetcore.readthedocs.io/en/stable/security/authentication/sociallogins.html


Další užasný porstál s nápady
https://edi.wang/category/server-and-tools

Docs Buillder
https://docusaurus.io/docs/creating-pages


ten markdown prohlížeč co měbere
https://www.codemag.com/article/1811071/Marking-up-the-Web-with-ASP.NET-Core-and-Markdown

404 redirect Solved
https://bauchart.be/2017/10/01/custom-404-pages-in-asp-net-core-for-routes-and-static-files/


WPF vyvoj C#
CDS.CSharpScripting

TIMTO GENEROVAT DOKUMENTACI PROJEKTU JEDNODUCHE-OBSAHLE-MA TEMPPLATY-VSE, PLUGINY, SUPER
docFX je dokumentace a peknz navod jak na to umi i svager ,komentare z projektu
https://code-maze.com/docfx-generating-source-code-documentation/
https://dotnet.github.io/docfx/
https://dotnet.github.io/docfx/extensions/templates.html
https://xxred.gitee.io/docfx/api/Microsoft.DocAsCode.html - dobry popis



spusty napadu co vylepsit
https://github.com/CodeMazeBlog/CodeMazeGuides/tree/main


Generování Dokumentace příkazy
dotnet tool update -g docfx

docfx init
docfx .\docfx.json --serve
docfx build .\docfx.json --serve
docfx build .\docfx.json -t myTemlateFolder --serve
https://dotnet.github.io/docfx/docs/template.html?tabs=modern uprava template
Template used: (default or statictoc or contain custom template)
https://dotnet.github.io/docfx/tutorial/howto_create_custom_template.html
https://dotnet.github.io/docfx/docs/api-page.html#block-elements
https://xxred.gitee.io/docfx/tutorial/incrementalbuild/intro_incremental_build.html
https://xxred.gitee.io/docfx/tutorial/walkthrough/walkthrough_create_a_docfx_project.html


included http://milbay.com.au/Files/MetroDocs/one-page-example.html
http://milbay.com.au/Files/MetroDocs/sidebar.html
https://metroui.org.ua/v2/#google_vignette
Metroui 3
https://metroui.org.ua/keypad.html
https://metroui.org.ua/v3/windows.html
https://metroui.org.ua/v2/examples.html

avalonia on web

https://play.avaloniaui.net/

https://docs.avaloniaui.net/docs/basics/


monaco
https://github.com/serdarciplak/BlazorMonaco/blob/master/SampleApp/Pages/DiffEditor.razor
https://github.com/autostep/AutoStep.Editor/tree/develop

reactive app netcore
https://dotnetify.net/core/reactive


googlepress umi delat strankz
webgitnet


xamarin xaml in netcore
https://montemagno.com/building-a-xaml-xamarin-forms-asp-net-website/

TXTextControl.TextControl.ASP.SDK
https://www.textcontrol.com/blog/2024/03/14/building-an-asp-net-core-backend-application-to-host-the-document-editor-and-document-viewer/
dotNetify-Elements  reactive netcore
https://github.com/dsuryd/dotNetify-Elements/tree/master
https://dotnetify.net/core/reactive

videokonference
https://github.com/aelassas/wexflow

implement Easy Scraping Functionality API 
https://www.scrapingbee.com/blog/web-scraping-csharp/#making-an-http-request-to-a-web-page-in-c


305 repos naadsenec https://github.com/madskristensen

-----------
web boostrapblazor
https://github.com/dotnetcore/BootstrapBlazor/tree/main


docfx netcore funkce
https://dotnet.github.io/docfx/
await Docfx.Docset.Build("docfx.json");

služby netcore: analyza kou, clienti, benchmark, build, atd
https://dotnetfoundation.org/projects/current-projects

koznoh.dbutil for DB operations
is Installed


Vygeneruje z MD souboru dokumetaci zaimplementovat do projektu
ITGlobal.MarkDocs

projit 185repos - nevidel jsem
https://github.com/pouyakary  +  https://github.com/zesty-io/manager-ui  272 repos

111 repos https://github.com/luochang212  

