# Dynamic Router Controller
    [HttpGet("{id}")]
    public string Get(int id)

# Managing SubProjects 

> [Installing nugets](https://learn.microsoft.com/en-us/dotnet/core/tools/dependencies)    

> [Installing Global Tools](https://learn.microsoft.com/en-us/dotnet/core/tools/global-tools)    
````     
dotnet tool install dotnetsay --tool-path c:\dotnet-tools    
dotnet tool install dotnetsay --tool-path ~/bin    

```` 

> [Installing Local Tools](https://learn.microsoft.com/en-us/dotnet/core/tools/global-tools)    
````     
dotnet new tool-manifest     
dotnet tool install dotnetsay   

```` 

> [Installing WCF Services](https://learn.microsoft.com/en-us/dotnet/core/additional-tools/dotnet-svcutil-guide?tabs=dotnetsvcutil2x)    

> [Installing WIN/LIN Certificate](https://learn.microsoft.com/en-us/dotnet/core/additional-tools/self-signed-certificates-guide)

> [Host Application Builder](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.hostapplicationbuilder.services?view=net-8.0)   

> [Building projects](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/configuration-files)     

> [OpenTelemetry AspireDashboard](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/observability-otlp-example)    



# Extreme More App Templates

[Dev Docs How To Work on Razor](https://sharpscript.net/docs/script-plugins)


# Pridavani spravy vice aplikací
https://docs.servicestack.net/app-tasks#example

  
   

[NetFrameworkCoreTemplates Repo](https://github.com/orgs/NetCoreTemplates/repositories)
[NetFrameworkCoreTemplates Templates](https://github.com/NetFrameworkCoreTemplates)

[Sharp-Apps Repo](https://github.com/sharp-apps)   
[Sharp-Apps Pages](https://sharpscript.net/sharp-apps/)   

[ServiceStack Download](https://servicestack.net/start?Mix=autocrudgen%2Copenapi3%2Cef-sqlite)
[ServiceStack Repo](https://github.com/ServiceStack/dotnet-app/tree/master)
[ServiceStack Docs](https://docs.servicestack.net/self-hosting) 
[Client Apps](https://apps.servicestack.net)

[ServiceStack Apps](https://stackoverflow.com/questions/15862634/in-what-order-are-the-servicestack-examples-supposed-to-be-grokked/15869816#15869816)
[ServiceStack Pages](https://servicestack.net/)
[ServiceStack AppHost](https://github.com/ServiceStack/ServiceStack.Examples/tree/master/src/StarterTemplates/WinServiceAppHost)
[Gistlyn Repos](https://github.com/gistlyn?tab=repositories)    
[Gistlyn ServiceStack](https://github.com/gistlyn/ServiceStack)   
[Davidfowl 255repos](https://github.com/davidfowl?page=2&tab=repositories)
[ServiceStack AppCentrum](https://techstacks.io/tech/csharp/)


# SQL Online Programing Solution 
[UI Docs](https://api.locode.dev/modules/shared.html#AdminStore)  
[SQL Solution](https://github.com/wwwlicious/ServiceStack.OrmLite)
[Admin UI](https://github.com/ServiceStackApps/RedisAdminUI)


# Doplnky 
[MoreProfiles 43Repos](https://github.com/wwwlicious?tab=repositories)


# StackApis   

[ServiceStackApps](https://github.com/ServiceStackApps/StackApis)


# LoC WCF Signal WCF OWIN ...
[AutoFaQ Repo](https://github.com/autofac)
[AutoFaq Extension](https://autofac.readthedocs.io/en/latest/integration/aspnetcore.html)
[AutoFaq Docs](https://autofac.readthedocs.io/en/latest/)
[AutoFaq DualStart](https://autofac.readthedocs.io/en/latest/integration/aspnetcore.html#configuration-method-naming-conventions)
[AutoFaq RootDocs](https://autofac.readthedocs.io/en/latest/configuration/index.html)
[AutoFaq 38 Repos](https://github.com/orgs/autofac/repositories)
[AutoFaq Examples](https://github.com/autofac/Examples/tree/master/src/MultitenantExample.WcfService)   



# Sharp Apps 
[12 Repos](https://github.com/orgs/sharp-apps/repositories)



# RestFull AppTemplates For Generate API Project
[NetcoreApps 65 Repos](https://github.com/orgs/NetCoreApps/repositories)
[Just Generate](https://github.com/NetCoreApps/SharpData)
[SharpData Docs](https://sharpscript.net/sharp-apps/sharpdata)    



# SpringFrameWork Net
[WebPages](https://springframework.net/)     
[Github Repo](https://github.com/spring-projects/spring-net)
[20 Templates](https://github.com/spring-projects/spring-net/blob/main/website/src/pages/examples.md)


# Probot Auto API + Docs Octokit Full GIT DbContext 
**52 Repos**    
 
 [Github Repos](https://github.com/orgs/probot/repositories)

 Extreme Easy AutoAPI     

 For Creating GitHuApps    

````    
export default (app) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.onAny(async (context) => {
    context.log.info({ event: context.name, action: context.payload.action });
  });

  app.onError(async (error) => {
    app.log.error(error);
  });
};

````
 
Typescript API Documentation   

[Probot Docs](https://probot.github.io/docs/)
[Probot Repo](https://github.com/probot/probot)



# OpenSource For Use    
[GithubApp](https://github.com/marketplace)




# Další Frameworky k Použití

https://github.com/NancyFx/Nancy.Bootstrappers.Unity

https://github.com/kephas-software


app open studio  --ignore-ssl-errors