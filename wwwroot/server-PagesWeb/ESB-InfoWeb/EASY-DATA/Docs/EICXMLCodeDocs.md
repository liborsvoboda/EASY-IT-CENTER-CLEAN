<a name='assembly'></a>
# Golden

## Contents

- [AuthenticateResponse](#T-Golden-ServerCoreDefinition-AuthenticateResponse 'Golden.ServerCoreDefinition.AuthenticateResponse')
  - [Expiration](#P-Golden-ServerCoreDefinition-AuthenticateResponse-Expiration 'Golden.ServerCoreDefinition.AuthenticateResponse.Expiration')
  - [Id](#P-Golden-ServerCoreDefinition-AuthenticateResponse-Id 'Golden.ServerCoreDefinition.AuthenticateResponse.Id')
  - [Name](#P-Golden-ServerCoreDefinition-AuthenticateResponse-Name 'Golden.ServerCoreDefinition.AuthenticateResponse.Name')
  - [Role](#P-Golden-ServerCoreDefinition-AuthenticateResponse-Role 'Golden.ServerCoreDefinition.AuthenticateResponse.Role')
  - [Surname](#P-Golden-ServerCoreDefinition-AuthenticateResponse-Surname 'Golden.ServerCoreDefinition.AuthenticateResponse.Surname')
  - [Token](#P-Golden-ServerCoreDefinition-AuthenticateResponse-Token 'Golden.ServerCoreDefinition.AuthenticateResponse.Token')
- [BackendServer](#T-Golden-BackendServer 'Golden.BackendServer')
  - [ServerConfigSettings](#F-Golden-BackendServer-ServerConfigSettings 'Golden.BackendServer.ServerConfigSettings')
  - [ServerRuntimeData](#F-Golden-BackendServer-ServerRuntimeData 'Golden.BackendServer.ServerRuntimeData')
  - [BuildWebHost(args)](#M-Golden-BackendServer-BuildWebHost-System-String[]- 'Golden.BackendServer.BuildWebHost(System.String[])')
  - [Main(args)](#M-Golden-BackendServer-Main-System-String[]- 'Golden.BackendServer.Main(System.String[])')
  - [RestartServer()](#M-Golden-BackendServer-RestartServer 'Golden.BackendServer.RestartServer')
  - [ServerStartupDbDataLoading()](#M-Golden-BackendServer-ServerStartupDbDataLoading 'Golden.BackendServer.ServerStartupDbDataLoading')
  - [StartServer()](#M-Golden-BackendServer-StartServer 'Golden.BackendServer.StartServer')
- [CommunicationController](#T-Golden-ServerCoreDefinition-CommunicationController 'Golden.ServerCoreDefinition.CommunicationController')
  - [HttpContext](#P-Golden-ServerCoreDefinition-CommunicationController-HttpContext 'Golden.ServerCoreDefinition.CommunicationController.HttpContext')
  - [CheckAdmin()](#M-Golden-ServerCoreDefinition-CommunicationController-CheckAdmin 'Golden.ServerCoreDefinition.CommunicationController.CheckAdmin')
- [CustomFtpUser](#T-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser 'Golden.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser')
  - [#ctor(name)](#M-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-#ctor-System-String- 'Golden.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser.#ctor(System.String)')
  - [Name](#P-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-Name 'Golden.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser.Name')
  - [IsInGroup()](#M-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-IsInGroup-System-String- 'Golden.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser.IsInGroup(System.String)')
- [CustomString](#T-Golden-ServerCoreDBSettings-CustomString 'Golden.ServerCoreDBSettings.CustomString')
- [DBResult](#T-Golden-ServerCoreDefinition-DBResult 'Golden.ServerCoreDefinition.DBResult')
- [DBResultMessage](#T-Golden-ServerCoreDefinition-DBResultMessage 'Golden.ServerCoreDefinition.DBResultMessage')
  - [ErrorMessage](#P-Golden-ServerCoreDefinition-DBResultMessage-ErrorMessage 'Golden.ServerCoreDefinition.DBResultMessage.ErrorMessage')
  - [InsertedId](#P-Golden-ServerCoreDefinition-DBResultMessage-InsertedId 'Golden.ServerCoreDefinition.DBResultMessage.InsertedId')
  - [RecordCount](#P-Golden-ServerCoreDefinition-DBResultMessage-RecordCount 'Golden.ServerCoreDefinition.DBResultMessage.RecordCount')
  - [Status](#P-Golden-ServerCoreDefinition-DBResultMessage-Status 'Golden.ServerCoreDefinition.DBResultMessage.Status')
- [DBWebApiResponses](#T-Golden-ServerCoreWebPages-DBWebApiResponses 'Golden.ServerCoreWebPages.DBWebApiResponses')
- [DatabaseContextExtensions](#T-Golden-ServerCoreDBSettings-DatabaseContextExtensions 'Golden.ServerCoreDBSettings.DatabaseContextExtensions')
- [EmailVerification](#T-Golden-ServerCoreWebPages-EmailVerification 'Golden.ServerCoreWebPages.EmailVerification')
- [ExpertDocApi](#T-Golden-Controllers-ExpertDocApi 'Golden.Controllers.ExpertDocApi')
  - [GetDocumentationGroupedList(id)](#M-Golden-Controllers-ExpertDocApi-GetDocumentationGroupedList-System-Int32- 'Golden.Controllers.ExpertDocApi.GetDocumentationGroupedList(System.Int32)')
- [GoldenContext](#T-Golden-ServerCoreDBSettings-GoldenContext 'Golden.ServerCoreDBSettings.GoldenContext')
  - [GetApiUserId(httpContext)](#M-Golden-ServerCoreDBSettings-GoldenContext-GetApiUserId-Microsoft-AspNetCore-Http-HttpContext- 'Golden.ServerCoreDBSettings.GoldenContext.GetApiUserId(Microsoft.AspNetCore.Http.HttpContext)')
  - [IsAdmin(httpContext)](#M-Golden-ServerCoreDBSettings-GoldenContext-IsAdmin-Microsoft-AspNetCore-Http-HttpContext- 'Golden.ServerCoreDBSettings.GoldenContext.IsAdmin(Microsoft.AspNetCore.Http.HttpContext)')
- [GoldenSystemAuthenticationApi](#T-Golden-ControllersExtensions-GoldenSystemAuthenticationApi 'Golden.ControllersExtensions.GoldenSystemAuthenticationApi')
  - [Authenticate(username,password)](#M-Golden-ControllersExtensions-GoldenSystemAuthenticationApi-Authenticate-System-String,System-String- 'Golden.ControllersExtensions.GoldenSystemAuthenticationApi.Authenticate(System.String,System.String)')
  - [LifetimeValidator(notBefore,expires,token,params)](#M-Golden-ControllersExtensions-GoldenSystemAuthenticationApi-LifetimeValidator-System-Nullable{System-DateTime},System-Nullable{System-DateTime},Microsoft-IdentityModel-Tokens-SecurityToken,Microsoft-IdentityModel-Tokens-TokenValidationParameters- 'Golden.ControllersExtensions.GoldenSystemAuthenticationApi.LifetimeValidator(System.Nullable{System.DateTime},System.Nullable{System.DateTime},Microsoft.IdentityModel.Tokens.SecurityToken,Microsoft.IdentityModel.Tokens.TokenValidationParameters)')
  - [RefreshUserToken(username,token)](#M-Golden-ControllersExtensions-GoldenSystemAuthenticationApi-RefreshUserToken-System-String,Golden-ServerCoreDefinition-AuthenticateResponse- 'Golden.ControllersExtensions.GoldenSystemAuthenticationApi.RefreshUserToken(System.String,Golden.ServerCoreDefinition.AuthenticateResponse)')
- [GoldenSystemBackendCheckApi](#T-Golden-ControllersExtensions-GoldenSystemBackendCheckApi 'Golden.ControllersExtensions.GoldenSystemBackendCheckApi')
  - [GetBackendCheckApi()](#M-Golden-ControllersExtensions-GoldenSystemBackendCheckApi-GetBackendCheckApi 'Golden.ControllersExtensions.GoldenSystemBackendCheckApi.GetBackendCheckApi')
- [HostedFtpServer](#T-Golden-ServerCoreServers-HostedFtpServer 'Golden.ServerCoreServers.HostedFtpServer')
  - [#ctor(ftpServerHost)](#M-Golden-ServerCoreServers-HostedFtpServer-#ctor-FubarDev-FtpServer-IFtpServerHost- 'Golden.ServerCoreServers.HostedFtpServer.#ctor(FubarDev.FtpServer.IFtpServerHost)')
  - [StartAsync()](#M-Golden-ServerCoreServers-HostedFtpServer-StartAsync-System-Threading-CancellationToken- 'Golden.ServerCoreServers.HostedFtpServer.StartAsync(System.Threading.CancellationToken)')
  - [StopAsync()](#M-Golden-ServerCoreServers-HostedFtpServer-StopAsync-System-Threading-CancellationToken- 'Golden.ServerCoreServers.HostedFtpServer.StopAsync(System.Threading.CancellationToken)')
- [HostedFtpServerMembershipProvider](#T-Golden-ServerCoreServers-HostedFtpServerMembershipProvider 'Golden.ServerCoreServers.HostedFtpServerMembershipProvider')
  - [ValidateUser(username,password)](#M-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-ValidateUser-System-String,System-String- 'Golden.ServerCoreServers.HostedFtpServerMembershipProvider.ValidateUser(System.String,System.String)')
  - [ValidateUserAsync(username,password)](#M-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-ValidateUserAsync-System-String,System-String- 'Golden.ServerCoreServers.HostedFtpServerMembershipProvider.ValidateUserAsync(System.String,System.String)')
- [IdFilter](#T-Golden-ServerCoreDBSettings-IdFilter 'Golden.ServerCoreDBSettings.IdFilter')
- [MailRequest](#T-Golden-ServerCoreDefinition-MailRequest 'Golden.ServerCoreDefinition.MailRequest')
- [NameFilter](#T-Golden-ServerCoreDBSettings-NameFilter 'Golden.ServerCoreDBSettings.NameFilter')
- [OperatingSystem](#T-Golden-ServerCoreDefinition-ServerCoreHelpers-OperatingSystem 'Golden.ServerCoreDefinition.ServerCoreHelpers.OperatingSystem')
- [ProcessClass](#T-Golden-ServerCoreDefinition-ProcessClass 'Golden.ServerCoreDefinition.ProcessClass')
- [RobotsController](#T-Golden-ServerCoreDBSettings-RobotsController 'Golden.ServerCoreDBSettings.RobotsController')
- [ServerConfigSettings](#T-Golden-ServerCoreDefinition-ServerConfigSettings 'Golden.ServerCoreDefinition.ServerConfigSettings')
  - [ConfigApiTokenTimeoutMin](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigApiTokenTimeoutMin 'Golden.ServerCoreDefinition.ServerConfigSettings.ConfigApiTokenTimeoutMin')
  - [ConfigCertificateDomain](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigCertificateDomain 'Golden.ServerCoreDefinition.ServerConfigSettings.ConfigCertificateDomain')
  - [ConfigCertificatePassword](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigCertificatePassword 'Golden.ServerCoreDefinition.ServerConfigSettings.ConfigCertificatePassword')
  - [ConfigCertificatePath](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigCertificatePath 'Golden.ServerCoreDefinition.ServerConfigSettings.ConfigCertificatePath')
  - [ConfigJwtLocalKey](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigJwtLocalKey 'Golden.ServerCoreDefinition.ServerConfigSettings.ConfigJwtLocalKey')
  - [ConfigMaxWebSocketBufferSizeKb](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigMaxWebSocketBufferSizeKb 'Golden.ServerCoreDefinition.ServerConfigSettings.ConfigMaxWebSocketBufferSizeKb')
  - [ConfigServerGetLetsEncrypt](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigServerGetLetsEncrypt 'Golden.ServerCoreDefinition.ServerConfigSettings.ConfigServerGetLetsEncrypt')
  - [ConfigServerStartupOnHttps](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigServerStartupOnHttps 'Golden.ServerCoreDefinition.ServerConfigSettings.ConfigServerStartupOnHttps')
  - [ConfigServerStartupPort](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigServerStartupPort 'Golden.ServerCoreDefinition.ServerConfigSettings.ConfigServerStartupPort')
  - [ConfigWebSocketTimeoutMin](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigWebSocketTimeoutMin 'Golden.ServerCoreDefinition.ServerConfigSettings.ConfigWebSocketTimeoutMin')
  - [DatabaseConnectionString](#P-Golden-ServerCoreDefinition-ServerConfigSettings-DatabaseConnectionString 'Golden.ServerCoreDefinition.ServerConfigSettings.DatabaseConnectionString')
  - [DatabaseInternalCacheTimeoutMin](#P-Golden-ServerCoreDefinition-ServerConfigSettings-DatabaseInternalCacheTimeoutMin 'Golden.ServerCoreDefinition.ServerConfigSettings.DatabaseInternalCacheTimeoutMin')
  - [DatabaseInternalCachingEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-DatabaseInternalCachingEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.DatabaseInternalCachingEnabled')
  - [EmailerSMTPLoginPassword](#P-Golden-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPLoginPassword 'Golden.ServerCoreDefinition.ServerConfigSettings.EmailerSMTPLoginPassword')
  - [EmailerSMTPLoginUsername](#P-Golden-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPLoginUsername 'Golden.ServerCoreDefinition.ServerConfigSettings.EmailerSMTPLoginUsername')
  - [EmailerSMTPPort](#P-Golden-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPPort 'Golden.ServerCoreDefinition.ServerConfigSettings.EmailerSMTPPort')
  - [EmailerSMTPServerAddress](#P-Golden-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPServerAddress 'Golden.ServerCoreDefinition.ServerConfigSettings.EmailerSMTPServerAddress')
  - [EmailerSMTPSslIsEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPSslIsEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.EmailerSMTPSslIsEnabled')
  - [EmailerServiceEmailAddress](#P-Golden-ServerCoreDefinition-ServerConfigSettings-EmailerServiceEmailAddress 'Golden.ServerCoreDefinition.ServerConfigSettings.EmailerServiceEmailAddress')
  - [ModuleDataManagerEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ModuleDataManagerEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ModuleDataManagerEnabled')
  - [ModuleDbDiagramGeneratorEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ModuleDbDiagramGeneratorEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ModuleDbDiagramGeneratorEnabled')
  - [ModuleHealthServiceEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ModuleHealthServiceEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ModuleHealthServiceEnabled')
  - [ModuleHealthServiceRefreshIntervalSec](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ModuleHealthServiceRefreshIntervalSec 'Golden.ServerCoreDefinition.ServerConfigSettings.ModuleHealthServiceRefreshIntervalSec')
  - [ModuleMdDocumentationEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ModuleMdDocumentationEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ModuleMdDocumentationEnabled')
  - [ModuleSwaggerApiDocEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ModuleSwaggerApiDocEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ModuleSwaggerApiDocEnabled')
  - [ServerEnableWebSocketMonitor](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerEnableWebSocketMonitor 'Golden.ServerCoreDefinition.ServerConfigSettings.ServerEnableWebSocketMonitor')
  - [ServerFtpEngineEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerFtpEngineEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ServerFtpEngineEnabled')
  - [ServerFtpSecurityEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerFtpSecurityEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ServerFtpSecurityEnabled')
  - [ServerJsWebPagesEngineEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerJsWebPagesEngineEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ServerJsWebPagesEngineEnabled')
  - [ServerJsWebStartupCommand](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerJsWebStartupCommand 'Golden.ServerCoreDefinition.ServerConfigSettings.ServerJsWebStartupCommand')
  - [ServerMvcWebPagesEngineEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerMvcWebPagesEngineEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ServerMvcWebPagesEngineEnabled')
  - [ServerRazorWebPagesEngineEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerRazorWebPagesEngineEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ServerRazorWebPagesEngineEnabled')
  - [ServerTimeTokenValidationEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerTimeTokenValidationEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ServerTimeTokenValidationEnabled')
  - [ServerWebBrowserEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerWebBrowserEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ServerWebBrowserEnabled')
  - [ServerWebSocketEngineEnabled](#P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerWebSocketEngineEnabled 'Golden.ServerCoreDefinition.ServerConfigSettings.ServerWebSocketEngineEnabled')
  - [SpecialCoreCheckerEmailSenderActive](#P-Golden-ServerCoreDefinition-ServerConfigSettings-SpecialCoreCheckerEmailSenderActive 'Golden.ServerCoreDefinition.ServerConfigSettings.SpecialCoreCheckerEmailSenderActive')
  - [SpecialEnableMassEmail](#P-Golden-ServerCoreDefinition-ServerConfigSettings-SpecialEnableMassEmail 'Golden.ServerCoreDefinition.ServerConfigSettings.SpecialEnableMassEmail')
  - [SpecialServerLanguage](#P-Golden-ServerCoreDefinition-ServerConfigSettings-SpecialServerLanguage 'Golden.ServerCoreDefinition.ServerConfigSettings.SpecialServerLanguage')
  - [SpecialServerServiceName](#P-Golden-ServerCoreDefinition-ServerConfigSettings-SpecialServerServiceName 'Golden.ServerCoreDefinition.ServerConfigSettings.SpecialServerServiceName')
  - [SpecialUseDbLocalAutoupdatedDials](#P-Golden-ServerCoreDefinition-ServerConfigSettings-SpecialUseDbLocalAutoupdatedDials 'Golden.ServerCoreDefinition.ServerConfigSettings.SpecialUseDbLocalAutoupdatedDials')
  - [SpecialUserWebRootPath](#P-Golden-ServerCoreDefinition-ServerConfigSettings-SpecialUserWebRootPath 'Golden.ServerCoreDefinition.ServerConfigSettings.SpecialUserWebRootPath')
- [ServerConfigurationServices](#T-Golden-ServerCoreConfiguration-ServerConfigurationServices 'Golden.ServerCoreConfiguration.ServerConfigurationServices')
  - [ConfigureAuthentication(services)](#M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureAuthentication-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerConfigurationServices.ConfigureAuthentication(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureControllers(services)](#M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureControllers-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerConfigurationServices.ConfigureControllers(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureCookie(services)](#M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureCookie-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerConfigurationServices.ConfigureCookie(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureDatabaseContext(services)](#M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureDatabaseContext-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerConfigurationServices.ConfigureDatabaseContext(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureFTPServer(services)](#M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureFTPServer-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerConfigurationServices.ConfigureFTPServer(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureLetsEncrypt(services)](#M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureLetsEncrypt-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerConfigurationServices.ConfigureLetsEncrypt(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureLogging(services)](#M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureLogging-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerConfigurationServices.ConfigureLogging(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureScopes(services)](#M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureScopes-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerConfigurationServices.ConfigureScopes(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureServerWebPages(services)](#M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureServerWebPages-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerConfigurationServices.ConfigureServerWebPages(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureSingletons(services)](#M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureSingletons-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerConfigurationServices.ConfigureSingletons(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureThirdPartyApi(services)](#M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureThirdPartyApi-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerConfigurationServices.ConfigureThirdPartyApi(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureWebSocketLoggerMonitor(services)](#M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureWebSocketLoggerMonitor-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerConfigurationServices.ConfigureWebSocketLoggerMonitor(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
- [ServerCoreDbOperations](#T-Golden-ServerCoreDefinition-ServerCoreDbOperations 'Golden.ServerCoreDefinition.ServerCoreDbOperations')
  - [DBTranslate(word,language)](#M-Golden-ServerCoreDefinition-ServerCoreDbOperations-DBTranslate-System-String,System-String- 'Golden.ServerCoreDefinition.ServerCoreDbOperations.DBTranslate(System.String,System.String)')
  - [DBTranslateOffline(word,language)](#M-Golden-ServerCoreDefinition-ServerCoreDbOperations-DBTranslateOffline-System-String,System-String- 'Golden.ServerCoreDefinition.ServerCoreDbOperations.DBTranslateOffline(System.String,System.String)')
  - [DBTranslateOnline(word,language)](#M-Golden-ServerCoreDefinition-ServerCoreDbOperations-DBTranslateOnline-System-String,System-String- 'Golden.ServerCoreDefinition.ServerCoreDbOperations.DBTranslateOnline(System.String,System.String)')
  - [LoadStaticDbDials(onlyThis)](#M-Golden-ServerCoreDefinition-ServerCoreDbOperations-LoadStaticDbDials-System-Nullable{Golden-ServerCoreDefinition-ServerLocalDbDials}- 'Golden.ServerCoreDefinition.ServerCoreDbOperations.LoadStaticDbDials(System.Nullable{Golden.ServerCoreDefinition.ServerLocalDbDials})')
  - [WriteVisit(ipAddress,userId,userName)](#M-Golden-ServerCoreDefinition-ServerCoreDbOperations-WriteVisit-System-String,System-Int32,System-String- 'Golden.ServerCoreDefinition.ServerCoreDbOperations.WriteVisit(System.String,System.Int32,System.String)')
  - [WriteWebVisit(ipAddress,userId,userName)](#M-Golden-ServerCoreDefinition-ServerCoreDbOperations-WriteWebVisit-System-String- 'Golden.ServerCoreDefinition.ServerCoreDbOperations.WriteWebVisit(System.String)')
- [ServerCoreExportApi](#T-Golden-ServerCoreDBSettings-ServerCoreExportApi 'Golden.ServerCoreDBSettings.ServerCoreExportApi')
- [ServerCoreFunctions](#T-Golden-ServerCoreDefinition-ServerCoreFunctions 'Golden.ServerCoreDefinition.ServerCoreFunctions')
  - [ByteArrayToFile(fileName,byteArray)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-ByteArrayToFile-System-String,System-Byte[]- 'Golden.ServerCoreDefinition.ServerCoreFunctions.ByteArrayToFile(System.String,System.Byte[])')
  - [CheckDirectory(directory)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-CheckDirectory-System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.CheckDirectory(System.String)')
  - [CheckFile(file)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-CheckFile-System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.CheckFile(System.String)')
  - [ClearFolder(FolderName)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-ClearFolder-System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.ClearFolder(System.String)')
  - [CopyDirectory(directory)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-CopyDirectory-System-String,System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.CopyDirectory(System.String,System.String)')
  - [CopyFile(from,to)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-CopyFile-System-String,System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.CopyFile(System.String,System.String)')
  - [CreateFile(file)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-CreateFile-System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.CreateFile(System.String)')
  - [CreatePath(path)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-CreatePath-System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.CreatePath(System.String)')
  - [FileDetectEncoding(FileName)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-FileDetectEncoding-System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.FileDetectEncoding(System.String)')
  - [FirstCharToLowerCase(str)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-FirstCharToLowerCase-System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.FirstCharToLowerCase(System.String)')
  - [GetByteArrayFrom64Encode(strContent)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-GetByteArrayFrom64Encode-System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.GetByteArrayFrom64Encode(System.String)')
  - [GetSelfSignedCertificate(password)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-GetSelfSignedCertificate-System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.GetSelfSignedCertificate(System.String)')
  - [GetSelfSignedCertificateFromFile()](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-GetSelfSignedCertificateFromFile-System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.GetSelfSignedCertificateFromFile(System.String)')
  - [GetSystemErrMessage(exception,msgCount)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-GetSystemErrMessage-System-Exception,System-Int32- 'Golden.ServerCoreDefinition.ServerCoreFunctions.GetSystemErrMessage(System.Exception,System.Int32)')
  - [GetUserApiErrMessage(exception,msgCount)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-GetUserApiErrMessage-System-Exception,System-Int32- 'Golden.ServerCoreDefinition.ServerCoreFunctions.GetUserApiErrMessage(System.Exception,System.Int32)')
  - [LoadSettings()](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-LoadSettings 'Golden.ServerCoreDefinition.ServerCoreFunctions.LoadSettings')
  - [RandomString(length)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-RandomString-System-Int32- 'Golden.ServerCoreDefinition.ServerCoreFunctions.RandomString(System.Int32)')
  - [ReadFile(fileName)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-ReadFile-System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.ReadFile(System.String)')
  - [RunProcess(processDefinition)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-RunProcess-Golden-ServerCoreDefinition-ProcessClass- 'Golden.ServerCoreDefinition.ServerCoreFunctions.RunProcess(Golden.ServerCoreDefinition.ProcessClass)')
  - [SendEmail(mailRequest,sendImmediately)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-SendEmail-Golden-ServerCoreDefinition-MailRequest,System-Boolean- 'Golden.ServerCoreDefinition.ServerCoreFunctions.SendEmail(Golden.ServerCoreDefinition.MailRequest,System.Boolean)')
  - [SendMassEmail(mailRequests)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-SendMassEmail-System-Collections-Generic-List{Golden-ServerCoreDefinition-MailRequest}- 'Golden.ServerCoreDefinition.ServerCoreFunctions.SendMassEmail(System.Collections.Generic.List{Golden.ServerCoreDefinition.MailRequest})')
  - [UnicodeToUTF8(strFrom)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-UnicodeToUTF8-System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.UnicodeToUTF8(System.String)')
  - [WriteToFile(file,content)](#M-Golden-ServerCoreDefinition-ServerCoreFunctions-WriteToFile-System-String,System-String- 'Golden.ServerCoreDefinition.ServerCoreFunctions.WriteToFile(System.String,System.String)')
- [ServerCoreHelpers](#T-Golden-ServerCoreDefinition-ServerCoreHelpers 'Golden.ServerCoreDefinition.ServerCoreHelpers')
  - [AddSocketConnectionToCentalList(newWebSocket,socketAPIPath)](#M-Golden-ServerCoreDefinition-ServerCoreHelpers-AddSocketConnectionToCentalList-System-Net-WebSockets-WebSocket,System-String- 'Golden.ServerCoreDefinition.ServerCoreHelpers.AddSocketConnectionToCentalList(System.Net.WebSockets.WebSocket,System.String)')
  - [BindList\`\`1(dt)](#M-Golden-ServerCoreDefinition-ServerCoreHelpers-BindList``1-System-Data-DataTable- 'Golden.ServerCoreDefinition.ServerCoreHelpers.BindList``1(System.Data.DataTable)')
  - [CheckTokenValidityFromString(tokenString)](#M-Golden-ServerCoreDefinition-ServerCoreHelpers-CheckTokenValidityFromString-System-String- 'Golden.ServerCoreDefinition.ServerCoreHelpers.CheckTokenValidityFromString(System.String)')
  - [DisposeSocketConnectionsWithTimeOut()](#M-Golden-ServerCoreDefinition-ServerCoreHelpers-DisposeSocketConnectionsWithTimeOut 'Golden.ServerCoreDefinition.ServerCoreHelpers.DisposeSocketConnectionsWithTimeOut')
  - [GetValidationParameters()](#M-Golden-ServerCoreDefinition-ServerCoreHelpers-GetValidationParameters 'Golden.ServerCoreDefinition.ServerCoreHelpers.GetValidationParameters')
  - [IsValidEmail(email)](#M-Golden-ServerCoreDefinition-ServerCoreHelpers-IsValidEmail-System-String- 'Golden.ServerCoreDefinition.ServerCoreHelpers.IsValidEmail(System.String)')
  - [ListenClientWebSocketMessages(webSocket,socketAPIPath)](#M-Golden-ServerCoreDefinition-ServerCoreHelpers-ListenClientWebSocketMessages-System-Net-WebSockets-WebSocket,System-String- 'Golden.ServerCoreDefinition.ServerCoreHelpers.ListenClientWebSocketMessages(System.Net.WebSockets.WebSocket,System.String)')
  - [RemoveWhitespace(input)](#M-Golden-ServerCoreDefinition-ServerCoreHelpers-RemoveWhitespace-System-String- 'Golden.ServerCoreDefinition.ServerCoreHelpers.RemoveWhitespace(System.String)')
  - [SendMessageAndUpdateWebSocketsInSpecificPath(socketAPIPath,message)](#M-Golden-ServerCoreDefinition-ServerCoreHelpers-SendMessageAndUpdateWebSocketsInSpecificPath-System-String,System-String- 'Golden.ServerCoreDefinition.ServerCoreHelpers.SendMessageAndUpdateWebSocketsInSpecificPath(System.String,System.String)')
  - [SendMessageToClientSocket(webSocket,message)](#M-Golden-ServerCoreDefinition-ServerCoreHelpers-SendMessageToClientSocket-System-Net-WebSockets-WebSocket,System-String- 'Golden.ServerCoreDefinition.ServerCoreHelpers.SendMessageToClientSocket(System.Net.WebSockets.WebSocket,System.String)')
- [ServerCoreLoggerWS](#T-Golden-ServerCoreDBSettings-ServerCoreLoggerWS 'Golden.ServerCoreDBSettings.ServerCoreLoggerWS')
  - [Echo(context,webSocket)](#M-Golden-ServerCoreDBSettings-ServerCoreLoggerWS-Echo-Microsoft-AspNetCore-Http-HttpContext,System-Net-WebSockets-WebSocket- 'Golden.ServerCoreDBSettings.ServerCoreLoggerWS.Echo(Microsoft.AspNetCore.Http.HttpContext,System.Net.WebSockets.WebSocket)')
  - [Get()](#M-Golden-ServerCoreDBSettings-ServerCoreLoggerWS-Get 'Golden.ServerCoreDBSettings.ServerCoreLoggerWS.Get')
  - [GetBySocketAPIPath(id)](#M-Golden-ServerCoreDBSettings-ServerCoreLoggerWS-GetBySocketAPIPath-System-String- 'Golden.ServerCoreDBSettings.ServerCoreLoggerWS.GetBySocketAPIPath(System.String)')
- [ServerCoreWebBuilderApi](#T-Golden-ServerCoreDBSettings-ServerCoreWebBuilderApi 'Golden.ServerCoreDBSettings.ServerCoreWebBuilderApi')
  - [GetWebBuilderCodePreview()](#M-Golden-ServerCoreDBSettings-ServerCoreWebBuilderApi-GetWebBuilderCodePreview-System-Int32- 'Golden.ServerCoreDBSettings.ServerCoreWebBuilderApi.GetWebBuilderCodePreview(System.Int32)')
  - [GetWebBuilderMenuPreview(id)](#M-Golden-ServerCoreDBSettings-ServerCoreWebBuilderApi-GetWebBuilderMenuPreview-System-Int32- 'Golden.ServerCoreDBSettings.ServerCoreWebBuilderApi.GetWebBuilderMenuPreview(System.Int32)')
- [ServerCoreWebUserApi](#T-Golden-ServerCoreDBSettings-ServerCoreWebUserApi 'Golden.ServerCoreDBSettings.ServerCoreWebUserApi')
  - [PostSendVerifyCode(email)](#M-Golden-ServerCoreDBSettings-ServerCoreWebUserApi-PostSendVerifyCode-Golden-ServerCoreWebPages-EmailVerification- 'Golden.ServerCoreDBSettings.ServerCoreWebUserApi.PostSendVerifyCode(Golden.ServerCoreWebPages.EmailVerification)')
- [ServerDbDgmlSchemaApi](#T-Golden-ServerCoreDBSettings-ServerDbDgmlSchemaApi 'Golden.ServerCoreDBSettings.ServerDbDgmlSchemaApi')
  - [#ctor(context)](#M-Golden-ServerCoreDBSettings-ServerDbDgmlSchemaApi-#ctor-Golden-ServerCoreDBSettings-GoldenContext- 'Golden.ServerCoreDBSettings.ServerDbDgmlSchemaApi.#ctor(Golden.ServerCoreDBSettings.GoldenContext)')
  - [Get()](#M-Golden-ServerCoreDBSettings-ServerDbDgmlSchemaApi-Get 'Golden.ServerCoreDBSettings.ServerDbDgmlSchemaApi.Get')
- [ServerDocApi](#T-Golden-Controllers-ServerDocApi 'Golden.Controllers.ServerDocApi')
  - [_hostingEnvironment](#F-Golden-Controllers-ServerDocApi-_hostingEnvironment 'Golden.Controllers.ServerDocApi._hostingEnvironment')
  - [GenerateMdBook()](#M-Golden-Controllers-ServerDocApi-GenerateMdBook 'Golden.Controllers.ServerDocApi.GenerateMdBook')
- [ServerEmailerApi](#T-Golden-ServerCoreDBSettings-ServerEmailerApi 'Golden.ServerCoreDBSettings.ServerEmailerApi')
- [ServerEnablingServices](#T-Golden-ServerCoreConfiguration-ServerEnablingServices 'Golden.ServerCoreConfiguration.ServerEnablingServices')
  - [EnableCors()](#M-Golden-ServerCoreConfiguration-ServerEnablingServices-EnableCors-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'Golden.ServerCoreConfiguration.ServerEnablingServices.EnableCors(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableEndpoints()](#M-Golden-ServerCoreConfiguration-ServerEnablingServices-EnableEndpoints-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'Golden.ServerCoreConfiguration.ServerEnablingServices.EnableEndpoints(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableLogging(app,loggerFactory)](#M-Golden-ServerCoreConfiguration-ServerEnablingServices-EnableLogging-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'Golden.ServerCoreConfiguration.ServerEnablingServices.EnableLogging(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableWebSocket(app)](#M-Golden-ServerCoreConfiguration-ServerEnablingServices-EnableWebSocket-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'Golden.ServerCoreConfiguration.ServerEnablingServices.EnableWebSocket(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
- [ServerLocalDbDials](#T-Golden-ServerCoreDefinition-ServerLocalDbDials 'Golden.ServerCoreDefinition.ServerLocalDbDials')
- [ServerModules](#T-Golden-ServerCoreConfiguration-ServerModules 'Golden.ServerCoreConfiguration.ServerModules')
  - [ConfigureCoreAdmin(services)](#M-Golden-ServerCoreConfiguration-ServerModules-ConfigureCoreAdmin-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerModules.ConfigureCoreAdmin(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureDocumentation(services)](#M-Golden-ServerCoreConfiguration-ServerModules-ConfigureDocumentation-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerModules.ConfigureDocumentation(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureHealthCheck(services)](#M-Golden-ServerCoreConfiguration-ServerModules-ConfigureHealthCheck-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerModules.ConfigureHealthCheck(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureSwagger(services)](#M-Golden-ServerCoreConfiguration-ServerModules-ConfigureSwagger-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'Golden.ServerCoreConfiguration.ServerModules.ConfigureSwagger(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
- [ServerModulesEnabling](#T-Golden-ServerCoreConfiguration-ServerModulesEnabling 'Golden.ServerCoreConfiguration.ServerModulesEnabling')
  - [EnableCoreAdmin()](#M-Golden-ServerCoreConfiguration-ServerModulesEnabling-EnableCoreAdmin-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'Golden.ServerCoreConfiguration.ServerModulesEnabling.EnableCoreAdmin(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableDocumentation()](#M-Golden-ServerCoreConfiguration-ServerModulesEnabling-EnableDocumentation-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'Golden.ServerCoreConfiguration.ServerModulesEnabling.EnableDocumentation(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableSwagger()](#M-Golden-ServerCoreConfiguration-ServerModulesEnabling-EnableSwagger-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'Golden.ServerCoreConfiguration.ServerModulesEnabling.EnableSwagger(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
- [ServerProviderHealthCheck](#T-Golden-ServerCoreDefinition-ServerProviderHealthCheck 'Golden.ServerCoreDefinition.ServerProviderHealthCheck')
  - [Microsoft#Extensions#Diagnostics#HealthChecks#IHealthCheck#CheckHealthAsync(context,cancellationToken)](#M-Golden-ServerCoreDefinition-ServerProviderHealthCheck-Microsoft#Extensions#Diagnostics#HealthChecks#IHealthCheck#CheckHealthAsync-Microsoft-Extensions-Diagnostics-HealthChecks-HealthCheckContext,System-Threading-CancellationToken- 'Golden.ServerCoreDefinition.ServerProviderHealthCheck.Microsoft#Extensions#Diagnostics#HealthChecks#IHealthCheck#CheckHealthAsync(Microsoft.Extensions.Diagnostics.HealthChecks.HealthCheckContext,System.Threading.CancellationToken)')
- [ServerRestartApi](#T-Golden-ServerCoreDBSettings-ServerRestartApi 'Golden.ServerCoreDBSettings.ServerRestartApi')
- [ServerRuntimeData](#T-Golden-ServerCoreDefinition-ServerRuntimeData 'Golden.ServerCoreDefinition.ServerRuntimeData')
  - [CentralWebSocketList](#F-Golden-ServerCoreDefinition-ServerRuntimeData-CentralWebSocketList 'Golden.ServerCoreDefinition.ServerRuntimeData.CentralWebSocketList')
  - [LocalDBTableList](#F-Golden-ServerCoreDefinition-ServerRuntimeData-LocalDBTableList 'Golden.ServerCoreDefinition.ServerRuntimeData.LocalDBTableList')
  - [ServerArgs](#F-Golden-ServerCoreDefinition-ServerRuntimeData-ServerArgs 'Golden.ServerCoreDefinition.ServerRuntimeData.ServerArgs')
  - [ServerCancelToken](#F-Golden-ServerCoreDefinition-ServerRuntimeData-ServerCancelToken 'Golden.ServerCoreDefinition.ServerRuntimeData.ServerCancelToken')
  - [ServerCoreStatus](#F-Golden-ServerCoreDefinition-ServerRuntimeData-ServerCoreStatus 'Golden.ServerCoreDefinition.ServerRuntimeData.ServerCoreStatus')
  - [ServerFTPProvider](#F-Golden-ServerCoreDefinition-ServerRuntimeData-ServerFTPProvider 'Golden.ServerCoreDefinition.ServerRuntimeData.ServerFTPProvider')
  - [ServerRestartRequest](#F-Golden-ServerCoreDefinition-ServerRuntimeData-ServerRestartRequest 'Golden.ServerCoreDefinition.ServerRuntimeData.ServerRestartRequest')
  - [ConfigFile](#P-Golden-ServerCoreDefinition-ServerRuntimeData-ConfigFile 'Golden.ServerCoreDefinition.ServerRuntimeData.ConfigFile')
  - [DataPath](#P-Golden-ServerCoreDefinition-ServerRuntimeData-DataPath 'Golden.ServerCoreDefinition.ServerRuntimeData.DataPath')
  - [DebugMode](#P-Golden-ServerCoreDefinition-ServerRuntimeData-DebugMode 'Golden.ServerCoreDefinition.ServerRuntimeData.DebugMode')
  - [Setting_folder](#P-Golden-ServerCoreDefinition-ServerRuntimeData-Setting_folder 'Golden.ServerCoreDefinition.ServerRuntimeData.Setting_folder')
  - [Startup_path](#P-Golden-ServerCoreDefinition-ServerRuntimeData-Startup_path 'Golden.ServerCoreDefinition.ServerRuntimeData.Startup_path')
  - [UserPath](#P-Golden-ServerCoreDefinition-ServerRuntimeData-UserPath 'Golden.ServerCoreDefinition.ServerRuntimeData.UserPath')
- [ServerWebPagesConfigApi](#T-Golden-ServerCoreDBSettings-ServerWebPagesConfigApi 'Golden.ServerCoreDBSettings.ServerWebPagesConfigApi')
  - [Index()](#M-Golden-ServerCoreDBSettings-ServerWebPagesConfigApi-Index 'Golden.ServerCoreDBSettings.ServerWebPagesConfigApi.Index')
- [ServerWebPagesLogin](#T-Golden-ServerCoreWebPages-ServerWebPagesLogin 'Golden.ServerCoreWebPages.ServerWebPagesLogin')
- [ServerWebPagesToken](#T-Golden-ServerCoreWebPages-ServerWebPagesToken 'Golden.ServerCoreWebPages.ServerWebPagesToken')
- [SetReportFilter](#T-Golden-ServerCoreDBSettings-SetReportFilter 'Golden.ServerCoreDBSettings.SetReportFilter')
- [SitemapController](#T-Golden-ServerCoreDBSettings-SitemapController 'Golden.ServerCoreDBSettings.SitemapController')
- [Startup](#T-Golden-Startup 'Golden.Startup')
  - [Configure(app,serverLifetime)](#M-Golden-Startup-Configure-Microsoft-AspNetCore-Builder-IApplicationBuilder,Microsoft-Extensions-Hosting-IHostApplicationLifetime- 'Golden.Startup.Configure(Microsoft.AspNetCore.Builder.IApplicationBuilder,Microsoft.Extensions.Hosting.IHostApplicationLifetime)')
  - [ConfigureServices(services)](#M-Golden-Startup-ConfigureServices-Microsoft-Extensions-DependencyInjection-IServiceCollection- 'Golden.Startup.ConfigureServices(Microsoft.Extensions.DependencyInjection.IServiceCollection)')
- [SystemDocApi](#T-Golden-Controllers-SystemDocApi 'Golden.Controllers.SystemDocApi')
  - [_hostingEnvironment](#F-Golden-Controllers-SystemDocApi-_hostingEnvironment 'Golden.Controllers.SystemDocApi._hostingEnvironment')
  - [GetMdDocumentPreview()](#M-Golden-Controllers-SystemDocApi-GetMdDocumentPreview-System-Int32- 'Golden.Controllers.SystemDocApi.GetMdDocumentPreview(System.Int32)')
  - [GetMdLibraryPreview()](#M-Golden-Controllers-SystemDocApi-GetMdLibraryPreview-System-Int32- 'Golden.Controllers.SystemDocApi.GetMdLibraryPreview(System.Int32)')
- [UserConfig](#T-Golden-ServerCoreWebPages-UserConfig 'Golden.ServerCoreWebPages.UserConfig')
- [WebMessage](#T-Golden-ServerCoreWebPages-WebMessage 'Golden.ServerCoreWebPages.WebMessage')
- [WebRegistration](#T-Golden-ServerCoreWebPages-WebRegistration 'Golden.ServerCoreWebPages.WebRegistration')
- [WebSocketExtension](#T-Golden-ServerCoreDefinition-WebSocketExtension 'Golden.ServerCoreDefinition.WebSocketExtension')
- [WebSocketLogProvider](#T-Golden-ServerCoreDefinition-ServerCoreHelpers-WebSocketLogProvider 'Golden.ServerCoreDefinition.ServerCoreHelpers.WebSocketLogProvider')
- [WebSocketLogger](#T-Golden-ServerCoreDefinition-ServerCoreHelpers-WebSocketLogger 'Golden.ServerCoreDefinition.ServerCoreHelpers.WebSocketLogger')
  - [Log\`\`1(logLevel,eventId,state,exception,formatter)](#M-Golden-ServerCoreDefinition-ServerCoreHelpers-WebSocketLogger-Log``1-Microsoft-Extensions-Logging-LogLevel,Microsoft-Extensions-Logging-EventId,``0,System-Exception,System-Func{``0,System-Exception,System-String}- 'Golden.ServerCoreDefinition.ServerCoreHelpers.WebSocketLogger.Log``1(Microsoft.Extensions.Logging.LogLevel,Microsoft.Extensions.Logging.EventId,``0,System.Exception,System.Func{``0,System.Exception,System.String})')

<a name='T-Golden-ServerCoreDefinition-AuthenticateResponse'></a>
## AuthenticateResponse `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

The authenticate response.

<a name='P-Golden-ServerCoreDefinition-AuthenticateResponse-Expiration'></a>
### Expiration `property`

##### Summary

Gets or Sets the expiration.

<a name='P-Golden-ServerCoreDefinition-AuthenticateResponse-Id'></a>
### Id `property`

##### Summary

Gets or Sets the id.

<a name='P-Golden-ServerCoreDefinition-AuthenticateResponse-Name'></a>
### Name `property`

##### Summary

Gets or Sets the name.

<a name='P-Golden-ServerCoreDefinition-AuthenticateResponse-Role'></a>
### Role `property`

##### Summary

Gets or Sets the role.

<a name='P-Golden-ServerCoreDefinition-AuthenticateResponse-Surname'></a>
### Surname `property`

##### Summary

Gets or Sets the surname.

<a name='P-Golden-ServerCoreDefinition-AuthenticateResponse-Token'></a>
### Token `property`

##### Summary

Gets or Sets the token.

<a name='T-Golden-BackendServer'></a>
## BackendServer `type`

##### Namespace

Golden

##### Summary

Server Main Definition Starting Point Of Project

<a name='F-Golden-BackendServer-ServerConfigSettings'></a>
### ServerConfigSettings `constants`

##### Summary

Startup Server Initialization Server Setting Data

<a name='F-Golden-BackendServer-ServerRuntimeData'></a>
### ServerRuntimeData `constants`

##### Summary

Startup Server Initialization Server Runtime Data

<a name='M-Golden-BackendServer-BuildWebHost-System-String[]-'></a>
### BuildWebHost(args) `method`

##### Summary

Final Preparing Server HostBuilder Definition
Exit 10 Is missing or Format Problem with Configuration File

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | [System.String[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String[] 'System.String[]') |  |

<a name='M-Golden-BackendServer-Main-System-String[]-'></a>
### Main(args) `method`

##### Summary

Server Startup Process

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | [System.String[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String[] 'System.String[]') |  |

<a name='M-Golden-BackendServer-RestartServer'></a>
### RestartServer() `method`

##### Summary

Server Restart Controller

##### Parameters

This method has no parameters.

<a name='M-Golden-BackendServer-ServerStartupDbDataLoading'></a>
### ServerStartupDbDataLoading() `method`

##### Summary

Server Startup DB Data loading for minimize DB Connect TO Frequency Dials Without Changes
Example: LanguageList

##### Parameters

This method has no parameters.

<a name='M-Golden-BackendServer-StartServer'></a>
### StartServer() `method`

##### Summary

Server Start Controller

##### Parameters

This method has no parameters.

<a name='T-Golden-ServerCoreDefinition-CommunicationController'></a>
## CommunicationController `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

Server Communication Extensions for Controlling Data

<a name='P-Golden-ServerCoreDefinition-CommunicationController-HttpContext'></a>
### HttpContext `property`

##### Summary

Server Request Accessory controller

<a name='M-Golden-ServerCoreDefinition-CommunicationController-CheckAdmin'></a>
### CheckAdmin() `method`

##### Summary

Extension for check Admin Role

##### Parameters

This method has no parameters.

<a name='T-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser'></a>
## CustomFtpUser `type`

##### Namespace

Golden.ServerCoreServers.HostedFtpServerMembershipProvider

##### Summary

Custom FTP user implementation

<a name='M-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-#ctor-System-String-'></a>
### #ctor(name) `constructor`

##### Summary

Initializes a new instance of the [CustomFtpUser](#T-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser 'Golden.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser') instance.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The user name |

<a name='P-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-Name'></a>
### Name `property`

##### Summary

*Inherit from parent.*

<a name='M-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-IsInGroup-System-String-'></a>
### IsInGroup() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

<a name='T-Golden-ServerCoreDBSettings-CustomString'></a>
## CustomString `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Custom Definition for Returning string List from Stored Procedures Name is ColumnName from
Stored Procedure Result

<a name='T-Golden-ServerCoreDefinition-DBResult'></a>
## DBResult `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

Database response types definition

<a name='T-Golden-ServerCoreDefinition-DBResultMessage'></a>
## DBResultMessage `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

The DB result message.

<a name='P-Golden-ServerCoreDefinition-DBResultMessage-ErrorMessage'></a>
### ErrorMessage `property`

##### Summary

Gets or Sets the error message.

<a name='P-Golden-ServerCoreDefinition-DBResultMessage-InsertedId'></a>
### InsertedId `property`

##### Summary

Gets or Sets the inserted id.

<a name='P-Golden-ServerCoreDefinition-DBResultMessage-RecordCount'></a>
### RecordCount `property`

##### Summary

Gets or Sets the record count.

<a name='P-Golden-ServerCoreDefinition-DBResultMessage-Status'></a>
### Status `property`

##### Summary

Gets or Sets the status.

<a name='T-Golden-ServerCoreWebPages-DBWebApiResponses'></a>
## DBWebApiResponses `type`

##### Namespace

Golden.ServerCoreWebPages

##### Summary

WebApi Responses

<a name='T-Golden-ServerCoreDBSettings-DatabaseContextExtensions'></a>
## DatabaseContextExtensions `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Database Context Extensions for All Types Procedures For Retun Data in procedure can be
Simple SELECT * XXX and you Create Same Class for returned DataSet

<a name='T-Golden-ServerCoreWebPages-EmailVerification'></a>
## EmailVerification `type`

##### Namespace

Golden.ServerCoreWebPages

##### Summary

WebPages User Verification class

<a name='T-Golden-Controllers-ExpertDocApi'></a>
## ExpertDocApi `type`

##### Namespace

Golden.Controllers

<a name='M-Golden-Controllers-ExpertDocApi-GetDocumentationGroupedList-System-Int32-'></a>
### GetDocumentationGroupedList(id) `method`

##### Summary

ExpertDocManager Group Documentation Request Api

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | The identifier. |

<a name='T-Golden-ServerCoreDBSettings-GoldenContext'></a>
## GoldenContext `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Server Main Database Settings Here is Included ScaffoldContext which is connected via Visual
Studio Tool Here can Be added customization which are not on the server Here is Extended the
Context with Insert News Functionality Customizing and implement Settings for Automatic
Adopted Database Schema for Unlimited Working and Operations For Specifics API schemas

<a name='M-Golden-ServerCoreDBSettings-GoldenContext-GetApiUserId-Microsoft-AspNetCore-Http-HttpContext-'></a>
### GetApiUserId(httpContext) `method`

##### Summary

Return User From API Request if Exist other null

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| httpContext | [Microsoft.AspNetCore.Http.HttpContext](#T-Microsoft-AspNetCore-Http-HttpContext 'Microsoft.AspNetCore.Http.HttpContext') |  |

<a name='M-Golden-ServerCoreDBSettings-GoldenContext-IsAdmin-Microsoft-AspNetCore-Http-HttpContext-'></a>
### IsAdmin(httpContext) `method`

##### Summary

Return User From API Request if Exist other null

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| httpContext | [Microsoft.AspNetCore.Http.HttpContext](#T-Microsoft-AspNetCore-Http-HttpContext 'Microsoft.AspNetCore.Http.HttpContext') |  |

<a name='T-Golden-ControllersExtensions-GoldenSystemAuthenticationApi'></a>
## GoldenSystemAuthenticationApi `type`

##### Namespace

Golden.ControllersExtensions

<a name='M-Golden-ControllersExtensions-GoldenSystemAuthenticationApi-Authenticate-System-String,System-String-'></a>
### Authenticate(username,password) `method`

##### Summary

API Authenticated and Generate Token

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-Golden-ControllersExtensions-GoldenSystemAuthenticationApi-LifetimeValidator-System-Nullable{System-DateTime},System-Nullable{System-DateTime},Microsoft-IdentityModel-Tokens-SecurityToken,Microsoft-IdentityModel-Tokens-TokenValidationParameters-'></a>
### LifetimeValidator(notBefore,expires,token,params) `method`

##### Summary

API Token LifeTime Validator

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| notBefore | [System.Nullable{System.DateTime}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.DateTime}') |  |
| expires | [System.Nullable{System.DateTime}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.DateTime}') |  |
| token | [Microsoft.IdentityModel.Tokens.SecurityToken](#T-Microsoft-IdentityModel-Tokens-SecurityToken 'Microsoft.IdentityModel.Tokens.SecurityToken') |  |
| params | [Microsoft.IdentityModel.Tokens.TokenValidationParameters](#T-Microsoft-IdentityModel-Tokens-TokenValidationParameters 'Microsoft.IdentityModel.Tokens.TokenValidationParameters') |  |

<a name='M-Golden-ControllersExtensions-GoldenSystemAuthenticationApi-RefreshUserToken-System-String,Golden-ServerCoreDefinition-AuthenticateResponse-'></a>
### RefreshUserToken(username,token) `method`

##### Summary

API Refresh User Token

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| token | [Golden.ServerCoreDefinition.AuthenticateResponse](#T-Golden-ServerCoreDefinition-AuthenticateResponse 'Golden.ServerCoreDefinition.AuthenticateResponse') |  |

<a name='T-Golden-ControllersExtensions-GoldenSystemBackendCheckApi'></a>
## GoldenSystemBackendCheckApi `type`

##### Namespace

Golden.ControllersExtensions

##### Summary

Simple Api for Checking Avaiability

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='M-Golden-ControllersExtensions-GoldenSystemBackendCheckApi-GetBackendCheckApi'></a>
### GetBackendCheckApi() `method`

##### Summary

Gets the backend check API.

##### Returns



##### Parameters

This method has no parameters.

<a name='T-Golden-ServerCoreServers-HostedFtpServer'></a>
## HostedFtpServer `type`

##### Namespace

Golden.ServerCoreServers

<a name='M-Golden-ServerCoreServers-HostedFtpServer-#ctor-FubarDev-FtpServer-IFtpServerHost-'></a>
### #ctor(ftpServerHost) `constructor`

##### Summary

Initializes a new instance of the [HostedFtpServer](#T-Golden-ServerCoreServers-HostedFtpServer 'Golden.ServerCoreServers.HostedFtpServer') class.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ftpServerHost | [FubarDev.FtpServer.IFtpServerHost](#T-FubarDev-FtpServer-IFtpServerHost 'FubarDev.FtpServer.IFtpServerHost') | The FTP server host that gets wrapped as a hosted service. |

<a name='M-Golden-ServerCoreServers-HostedFtpServer-StartAsync-System-Threading-CancellationToken-'></a>
### StartAsync() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

<a name='M-Golden-ServerCoreServers-HostedFtpServer-StopAsync-System-Threading-CancellationToken-'></a>
### StopAsync() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

<a name='T-Golden-ServerCoreServers-HostedFtpServerMembershipProvider'></a>
## HostedFtpServerMembershipProvider `type`

##### Namespace

Golden.ServerCoreServers

##### Summary

Custom membership provider for Authentication Validation
Actual is Set by UserName and Password in Database

<a name='M-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-ValidateUser-System-String,System-String-'></a>
### ValidateUser(username,password) `method`

##### Summary

FTP User Validation
Its for Open FTP and User Validation

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The username. |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The password. |

<a name='M-Golden-ServerCoreServers-HostedFtpServerMembershipProvider-ValidateUserAsync-System-String,System-String-'></a>
### ValidateUserAsync(username,password) `method`

##### Summary

FTP User Validation Async
Its for Open FTP and User Validation

##### Returns

The result of the validation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The user name. |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The password. |

<a name='T-Golden-ServerCoreDBSettings-IdFilter'></a>
## IdFilter `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Custom Class Definition for Filtering by record Id

<a name='T-Golden-ServerCoreDefinition-MailRequest'></a>
## MailRequest `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

Class Definition for Server Emailer
In List of this claas you can use Mass Emailer

<a name='T-Golden-ServerCoreDBSettings-NameFilter'></a>
## NameFilter `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Custom Class Definition for Filtering by string

<a name='T-Golden-ServerCoreDefinition-ServerCoreHelpers-OperatingSystem'></a>
## OperatingSystem `type`

##### Namespace

Golden.ServerCoreDefinition.ServerCoreHelpers

##### Summary

Extension For Checking Operation System 
of Server Running

<a name='T-Golden-ServerCoreDefinition-ProcessClass'></a>
## ProcessClass `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

Server Process class for running external prrocesses

<a name='T-Golden-ServerCoreDBSettings-RobotsController'></a>
## RobotsController `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

robots.txt routing

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='T-Golden-ServerCoreDefinition-ServerConfigSettings'></a>
## ServerConfigSettings `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

The server settings.

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigApiTokenTimeoutMin'></a>
### ConfigApiTokenTimeoutMin `property`

##### Summary

Bearer Token Timeout Setting in Minutes. Connection must be Refreshed in Interval After
Timeout connection Must Login Again. It is as needed. You Can Change Key for close All
connections Immediately. Timeout is good for Webpages
Recomended: 15

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigCertificateDomain'></a>
### ConfigCertificateDomain `property`

##### Summary

Its Domain for include to Automatic Generated Certificate For Server running on HTTPS.
Domain is for Your validation Certificate Domain. Can be Changed for commercial.
Domain is Used for Lets Encrypt also
Write with Comma separator
Recommended: 127.0.0.1

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigCertificatePassword'></a>
### ConfigCertificatePassword `property`

##### Summary

Password will be inserted to Server Generated Certificate for HTTPS.
Recommended: empty = Maximal Security Randomly generated 20 chars string

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigCertificatePath'></a>
### ConfigCertificatePath `property`

##### Summary

Certificate file NextFrom'DATA'Path\\Filename.pfx For import External Certificate
Its Path from Data Startup Folder,example "groupware.pfx" is in Data Path
The Password must be inserted in ConfigCertificatePassword Settings
Other for ignore this Setting set empty string ""
This settings has Higest Priority before LesEncrypt enabled

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigJwtLocalKey'></a>
### ConfigJwtLocalKey `property`

##### Summary

Special Functions:Server AutoGenerated encryption Key For Securing Communication On Each
Server Restart All Tokens not will be valid and the Login Reconnect is Requested. Its
AntiHacker Security Rule
Recommended: empty = Maximal Security Randomly generated 40 chars string

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigMaxWebSocketBufferSizeKb'></a>
### ConfigMaxWebSocketBufferSizeKb `property`

##### Summary

Maximum socket message size for control Traffic
Recomended: 10

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigServerGetLetsEncrypt'></a>
### ConfigServerGetLetsEncrypt `property`

##### Summary

Setting for Automatic Obtain Lets Encrypt
more Security Setting Politics.
Recommended: true

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigServerStartupOnHttps'></a>
### ConfigServerStartupOnHttps `property`

##### Summary

Setting for Server URL Services. Logically can run only one Http or Https Server has
more Security Setting Politics.
Recommended: true

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigServerStartupPort'></a>
### ConfigServerStartupPort `property`

##### Summary

Set Server Startup Port on Http/HttpS/WebSocket and for All Engines, Modules, API
Controler and WebPages
Recommended: 5000

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ConfigWebSocketTimeoutMin'></a>
### ConfigWebSocketTimeoutMin `property`

##### Summary

WebSocket Timeout Connection Settings in Minutes. After timeout when not detected any
communication socket is closed Set according to your need
Recommended: 2

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-DatabaseConnectionString'></a>
### DatabaseConnectionString `property`

##### Summary

Server Database Connection string for Full Service of Database
Migration/Api/Check/Unlimited Develop !!!Warning: Check this connection for
Read/Write/Exec is enabled

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-DatabaseInternalCacheTimeoutMin'></a>
### DatabaseInternalCacheTimeoutMin `property`

##### Summary

Time in Minutes for Database Valid Cache Data and Refreshing Duplicit Functionality with
Database Server
Recommended: 30

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-DatabaseInternalCachingEnabled'></a>
### DatabaseInternalCachingEnabled `property`

##### Summary

Enable Disable Entity Framework Internal Cache I recommend turning it off : from Logic,
Duplicit Functionality with Database Server in complex process can generate problems
Recommended: false

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPLoginPassword'></a>
### EmailerSMTPLoginPassword `property`

##### Summary

SMTP Password for Login to External Mail Server Its Necessary for Correct running Server
Internal Core Monitoring

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPLoginUsername'></a>
### EmailerSMTPLoginUsername `property`

##### Summary

SMTP UserName for Login to External Mail Server Its Necessary for Correct running Server
Internal Core Monitoring

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPPort'></a>
### EmailerSMTPPort `property`

##### Summary

SMTP Port for Login to External Mail Server Its Necessary for Correct running Server
Internal Core Monitoring

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPServerAddress'></a>
### EmailerSMTPServerAddress `property`

##### Summary

SMTP Server Address for Login to External Mail Server Its Necessary for Correct running
Server Internal Core Monitoring

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-EmailerSMTPSslIsEnabled'></a>
### EmailerSMTPSslIsEnabled `property`

##### Summary

EmailerSMTPSslIsEnabled SSl Email Protocol for Login to External Mail Server Its
Necessary for Correct running Server Internal Core Monitoring

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-EmailerServiceEmailAddress'></a>
### EmailerServiceEmailAddress `property`

##### Summary

Service email, for info about not available service from HeatchCheck Can be used for
next Develop, automatic checking problems, missing data and all other Its Necessary for
Correct running Server Internal Core Monitoring

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ModuleDataManagerEnabled'></a>
### ModuleDataManagerEnabled `property`

##### Summary

Special Function: AutoGenerated Database DataManager for working with Data Running only
in Debug mode for simple Develop, can be modified. All changes are Reflected after
restart server

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ModuleDbDiagramGeneratorEnabled'></a>
### ModuleDbDiagramGeneratorEnabled `property`

##### Summary

Enable Automatic Database Diagram for Simple show Database structure with All bingings

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ModuleHealthServiceEnabled'></a>
### ModuleHealthServiceEnabled `property`

##### Summary

Special Function: More than 200 Server Statuses Can be monitored by HeathCheckService,
Over Net can Control Other Company Services Also as Central Control Point With Email
Service. For Example: Server/Memory/All DB Types/IP/HDD/Port/Api/NET/Cloud/Environment
Must be run for Metrics AddOn https://learn.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/monitor-app-health

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ModuleHealthServiceRefreshIntervalSec'></a>
### ModuleHealthServiceRefreshIntervalSec `property`

##### Summary

Special Function: More than 200 Server Statuses Can be monitored by HeathCheckService,
Over Net can Control Other Company Services Also as Central Control Point With Email
Service. For Example: Server/Memory/All DB Types/IP/HDD/Port/Api/NET/Cloud/Environment
Must be run for Metrics AddOn !!! run in Release mode for Good Reading of Logs without
HeathChecks Cycling info https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks https://testfully.io/blog/api-health-check-monitoring/

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ModuleMdDocumentationEnabled'></a>
### ModuleMdDocumentationEnabled `property`

##### Summary

Enable Server Structure Documentation for Developers Using RootPath, - Block File
Browsing Is Good for Server with Documentation only Or Use for Show WebPage and Copy
"Only HTML"

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ModuleSwaggerApiDocEnabled'></a>
### ModuleSwaggerApiDocEnabled `property`

##### Summary

Special Function: Server Automatically Generate Full Documentation of API structure AND
Database Model. Plus Included API Interface for Online Testing All API Methods with
Authentication Its Automatic Solution for Third Party cooperation. All changes are
Reflected after restart server

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerEnableWebSocketMonitor'></a>
### ServerEnableWebSocketMonitor `property`

##### Summary

Server support online multi watch Logging
Its Run on Websocket and the Log Messages are
sent for All opened connections for wathing
on Path: ServerCoreMonitor
You can enable Mass Email Api

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerFtpEngineEnabled'></a>
### ServerFtpEngineEnabled `property`

##### Summary

Enable FTP File Server oppened for every connection with full rights

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerFtpSecurityEnabled'></a>
### ServerFtpSecurityEnabled `property`

##### Summary

Enable FTP Security
For access to FTP must be logged

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerJsWebPagesEngineEnabled'></a>
### ServerJsWebPagesEngineEnabled `property`

##### Summary

Enable JS WebPages support engine with Correct Configuration
React, Nodejs, etc..

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerJsWebStartupCommand'></a>
### ServerJsWebStartupCommand `property`

##### Summary

Definition of WebPage Startup npmscript command
React, Nodejs, etc..

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerMvcWebPagesEngineEnabled'></a>
### ServerMvcWebPagesEngineEnabled `property`

##### Summary

Enable Mvc WebPages support engine with Correct Configuration

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerRazorWebPagesEngineEnabled'></a>
### ServerRazorWebPagesEngineEnabled `property`

##### Summary

Enable Razor WebPages support engine with Correct Configuration for Automaping form
folder 'Pages'

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerTimeTokenValidationEnabled'></a>
### ServerTimeTokenValidationEnabled `property`

##### Summary

Enable Disable Bearer Token Timeout Validation Token can be valid EveryTime to using:
Example for machine connection Or is Control last activity

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerWebBrowserEnabled'></a>
### ServerWebBrowserEnabled `property`

##### Summary

Enable WebPages File Browsing from server Url on Server

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-ServerWebSocketEngineEnabled'></a>
### ServerWebSocketEngineEnabled `property`

##### Summary

Enable WebSocket Engine with Default Example Api Controller

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-SpecialCoreCheckerEmailSenderActive'></a>
### SpecialCoreCheckerEmailSenderActive `property`

##### Summary

Activation / Deactivation of Email Sender For Server Core Fails Checker All Catch Write
to SendEmail, In Debug mode is Written in console in Release mode is Sended email (All
incorrect server statuses are monitored) Can be writen to Database - !!! Warning for
infinite Cycling (DB shutdown example)
Recommended: true

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-SpecialEnableMassEmail'></a>
### SpecialEnableMassEmail `property`

##### Summary

Server support mass emailing as Service
You can enable Mass Email Api

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-SpecialServerLanguage'></a>
### SpecialServerLanguage `property`

##### Summary

Server Language for Translating Server internal statuses
Recommended: cz or en - other languages are not implemented

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-SpecialServerServiceName'></a>
### SpecialServerServiceName `property`

##### Summary

Server Service Name automatic figured in All IS/OS/Engines info
Recommended: Golden

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-SpecialUseDbLocalAutoupdatedDials'></a>
### SpecialUseDbLocalAutoupdatedDials `property`

##### Summary

Special Function: Using Selected Tables with AutoRefresh On change as Local DataSets,
For Optimize Traffic. For Example LanguageList - Static table with often reading
Recommended: true - functionality must be implemented in Server Code

<a name='P-Golden-ServerCoreDefinition-ServerConfigSettings-SpecialUserWebRootPath'></a>
### SpecialUserWebRootPath `property`

##### Summary

User Web Root Path for Startup 
and Any missing address Automatic Redirection
Value must start with /
Not need Regex Configuration

<a name='T-Golden-ServerCoreConfiguration-ServerConfigurationServices'></a>
## ServerConfigurationServices `type`

##### Namespace

Golden.ServerCoreConfiguration

##### Summary

Server Core Configuration Settings of Security, Communications, Technologies, Modules Rules,
Rights, Conditions, Formats, Services, Logging, etc..

<a name='M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureAuthentication-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureAuthentication(services) `method`

##### Summary

Server Core: Configure Server Authentication Support

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureControllers-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureControllers(services) `method`

##### Summary

Server Core: Configure Server Controllers
options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = [ValidateNever]
in Class options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore
= [JsonIgnore] in Class

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureCookie-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureCookie(services) `method`

##### Summary

Server Core: Configure Cookie Politics

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureDatabaseContext-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureDatabaseContext(services) `method`

##### Summary

Server Core: Configure Custom Services

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureFTPServer-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureFTPServer(services) `method`

##### Summary

Custom Secure FTP Server

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureLetsEncrypt-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureLetsEncrypt(services) `method`

##### Summary

Server core: Configures LetsEncrypt using.
Certificate will be saved in DataPath

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureLogging-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureLogging(services) `method`

##### Summary

Server Core: Configure Server Logging

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureScopes-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureScopes(services) `method`

##### Summary

Server Core: Configure Custom Core Services

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureServerWebPages-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureServerWebPages(services) `method`

##### Summary

Configures the MVC server pages on Server format "cshtml"

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureSingletons-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureSingletons(services) `method`

##### Summary

Server Core: Configures the singletons.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureThirdPartyApi-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureThirdPartyApi(services) `method`

##### Summary

Server Core: Configure HTTP Client for work with third party API

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-Golden-ServerCoreConfiguration-ServerConfigurationServices-ConfigureWebSocketLoggerMonitor-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureWebSocketLoggerMonitor(services) `method`

##### Summary

Server core: Configures the WebSocket logger monitor.
For multi monitoring and for Example Posibilities

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='T-Golden-ServerCoreDefinition-ServerCoreDbOperations'></a>
## ServerCoreDbOperations `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

All Server Definitions of Database Operation method

<a name='M-Golden-ServerCoreDefinition-ServerCoreDbOperations-DBTranslate-System-String,System-String-'></a>
### DBTranslate(word,language) `method`

##### Summary

Default Operation for Call Translation

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| word | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| language | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-Golden-ServerCoreDefinition-ServerCoreDbOperations-DBTranslateOffline-System-String,System-String-'></a>
### DBTranslateOffline(word,language) `method`

##### Summary

Database LanuageList for Off-line Using Definitions

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| word | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| language | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-Golden-ServerCoreDefinition-ServerCoreDbOperations-DBTranslateOnline-System-String,System-String-'></a>
### DBTranslateOnline(word,language) `method`

##### Summary

Database LanuageList for On-line Using Definitions

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| word | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| language | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-Golden-ServerCoreDefinition-ServerCoreDbOperations-LoadStaticDbDials-System-Nullable{Golden-ServerCoreDefinition-ServerLocalDbDials}-'></a>
### LoadStaticDbDials(onlyThis) `method`

##### Summary

Method for All Server Defined Table for Local Using As Off line AutoUpdated Tables

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| onlyThis | [System.Nullable{Golden.ServerCoreDefinition.ServerLocalDbDials}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{Golden.ServerCoreDefinition.ServerLocalDbDials}') |  |

<a name='M-Golden-ServerCoreDefinition-ServerCoreDbOperations-WriteVisit-System-String,System-Int32,System-String-'></a>
### WriteVisit(ipAddress,userId,userName) `method`

##### Summary

Trigger User Login History

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAddress | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| userId | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |
| userName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-Golden-ServerCoreDefinition-ServerCoreDbOperations-WriteWebVisit-System-String-'></a>
### WriteWebVisit(ipAddress,userId,userName) `method`

##### Summary

Trigger User Login History

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAddress | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='T-Golden-ServerCoreDBSettings-ServerCoreExportApi'></a>
## ServerCoreExportApi `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

[Authorize]
Server Export Services

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='T-Golden-ServerCoreDefinition-ServerCoreFunctions'></a>
## ServerCoreFunctions `type`

##### Namespace

Golden.ServerCoreDefinition

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-ByteArrayToFile-System-String,System-Byte[]-'></a>
### ByteArrayToFile(fileName,byteArray) `method`

##### Summary

Write ByteArray to File

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the file. |
| byteArray | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') | The byte array. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-CheckDirectory-System-String-'></a>
### CheckDirectory(directory) `method`

##### Summary

Checks the directory.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| directory | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The directory. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-CheckFile-System-String-'></a>
### CheckFile(file) `method`

##### Summary

Checks the file.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| file | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The file. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-ClearFolder-System-String-'></a>
### ClearFolder(FolderName) `method`

##### Summary

Full Clear Folder

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| FolderName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the folder. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-CopyDirectory-System-String,System-String-'></a>
### CopyDirectory(directory) `method`

##### Summary

Copy Full directory.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| directory | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The directory. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-CopyFile-System-String,System-String-'></a>
### CopyFile(from,to) `method`

##### Summary

Copies the file.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | From. |
| to | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | To. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-CreateFile-System-String-'></a>
### CreateFile(file) `method`

##### Summary

Prepared Method for Create empty file

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| file | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-CreatePath-System-String-'></a>
### CreatePath(path) `method`

##### Summary

Creates the path recursively.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The path. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-FileDetectEncoding-System-String-'></a>
### FileDetectEncoding(FileName) `method`

##### Summary

Files the detect encoding.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| FileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the file. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-FirstCharToLowerCase-System-String-'></a>
### FirstCharToLowerCase(str) `method`

##### Summary

Change First Character of String

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| str | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The string. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-GetByteArrayFrom64Encode-System-String-'></a>
### GetByteArrayFrom64Encode(strContent) `method`

##### Summary

Separate ByteArray from 64 encode file
For inserted file types

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| strContent | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Content of the string. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-GetSelfSignedCertificate-System-String-'></a>
### GetSelfSignedCertificate(password) `method`

##### Summary

Gets the self signed certificate For API Security HTTPS.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The password. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-GetSelfSignedCertificateFromFile-System-String-'></a>
### GetSelfSignedCertificateFromFile() `method`

##### Summary

Set Imported Certificate from file on Server for Https 
File must has Valid path from Startup Data Path

##### Returns



##### Parameters

This method has no parameters.

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-GetSystemErrMessage-System-Exception,System-Int32-'></a>
### GetSystemErrMessage(exception,msgCount) `method`

##### Summary

Mined-ed Error Message For System Save to Database For Simple Solving Problem

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') |  |
| msgCount | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-GetUserApiErrMessage-System-Exception,System-Int32-'></a>
### GetUserApiErrMessage(exception,msgCount) `method`

##### Summary

Mined-ed Error Message For Answer in API Error Response with detailed info about problem

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') |  |
| msgCount | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-LoadSettings'></a>
### LoadSettings() `method`

##### Summary

Server Local Startup Configuration Its Running as First - Load from Congig.Json After DB
connection Before Server Start Is This configuration Replaced By Data from DB And next
Server Start. Its for situation - Bad Connection Server Start with Configuration from File

##### Parameters

This method has no parameters.

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-RandomString-System-Int32-'></a>
### RandomString(length) `method`

##### Summary

Randoms the string.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| length | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | The length. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-ReadFile-System-String-'></a>
### ReadFile(fileName) `method`

##### Summary

Reads the file.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the file. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-RunProcess-Golden-ServerCoreDefinition-ProcessClass-'></a>
### RunProcess(processDefinition) `method`

##### Summary

Server Function For Running External Processes

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| processDefinition | [Golden.ServerCoreDefinition.ProcessClass](#T-Golden-ServerCoreDefinition-ProcessClass 'Golden.ServerCoreDefinition.ProcessClass') | The process definition. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-SendEmail-Golden-ServerCoreDefinition-MailRequest,System-Boolean-'></a>
### SendEmail(mailRequest,sendImmediately) `method`

##### Summary

System Mailer sending Emails To service email with detected fail for analyze and
corrections on the Way provide better services every time !!! This You can implement
everywhere, !!! In Debug mode is written to Console, in Release will be sent email
Empty Sender And Recipients set email for Service Recipient

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mailRequest | [Golden.ServerCoreDefinition.MailRequest](#T-Golden-ServerCoreDefinition-MailRequest 'Golden.ServerCoreDefinition.MailRequest') |  |
| sendImmediately | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') |  |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-SendMassEmail-System-Collections-Generic-List{Golden-ServerCoreDefinition-MailRequest}-'></a>
### SendMassEmail(mailRequests) `method`

##### Summary

Sends the mass mail.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mailRequests | [System.Collections.Generic.List{Golden.ServerCoreDefinition.MailRequest}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.List 'System.Collections.Generic.List{Golden.ServerCoreDefinition.MailRequest}') | The mail requests. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-UnicodeToUTF8-System-String-'></a>
### UnicodeToUTF8(strFrom) `method`

##### Summary

Unicodes to ut f8.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| strFrom | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The string from. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreFunctions-WriteToFile-System-String,System-String-'></a>
### WriteToFile(file,content) `method`

##### Summary

Write String to File
Used for JsonSaving

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| file | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The file. |
| content | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The content. |

<a name='T-Golden-ServerCoreDefinition-ServerCoreHelpers'></a>
## ServerCoreHelpers `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

System Helpers for EASY working
Here are extension for Database Model, WebSocket

<a name='M-Golden-ServerCoreDefinition-ServerCoreHelpers-AddSocketConnectionToCentalList-System-Net-WebSockets-WebSocket,System-String-'></a>
### AddSocketConnectionToCentalList(newWebSocket,socketAPIPath) `method`

##### Summary

Add WeSocket Connection To Central List

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newWebSocket | [System.Net.WebSockets.WebSocket](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Net.WebSockets.WebSocket 'System.Net.WebSockets.WebSocket') | The new web socket. |
| socketAPIPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The socket path. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreHelpers-BindList``1-System-Data-DataTable-'></a>
### BindList\`\`1(dt) `method`

##### Summary

Extension For Using Custom Defined Tables from Database Procedures
Its used as Database Context Extension as 'CollectionFromSql'
Method in Database Context

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| dt | [System.Data.DataTable](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Data.DataTable 'System.Data.DataTable') | The dt. |

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T |  |

<a name='M-Golden-ServerCoreDefinition-ServerCoreHelpers-CheckTokenValidityFromString-System-String-'></a>
### CheckTokenValidityFromString(tokenString) `method`

##### Summary

Token Validator Extension For Server WebPages

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenString | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The token string. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreHelpers-DisposeSocketConnectionsWithTimeOut'></a>
### DisposeSocketConnectionsWithTimeOut() `method`

##### Summary

!! Global Method for Simple Using WebSockets
WebSocket Disposed - Cleaning monitored Sockets from Central List.
Are Closed and Disposed Only with Timeout or with closed Connection

##### Parameters

This method has no parameters.

<a name='M-Golden-ServerCoreDefinition-ServerCoreHelpers-GetValidationParameters'></a>
### GetValidationParameters() `method`

##### Summary

Server Token Validation Parameters definition
For Api is Used if is ON/Off for WePages is On everyTime

##### Returns



##### Parameters

This method has no parameters.

<a name='M-Golden-ServerCoreDefinition-ServerCoreHelpers-IsValidEmail-System-String-'></a>
### IsValidEmail(email) `method`

##### Summary

Determines whether [is valid email] [the specified email].

##### Returns

`true` if [is valid email] [the specified email]; otherwise, `false`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| email | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The email. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreHelpers-ListenClientWebSocketMessages-System-Net-WebSockets-WebSocket,System-String-'></a>
### ListenClientWebSocketMessages(webSocket,socketAPIPath) `method`

##### Summary

Register Listening Client WebSocket Communication
Ist for Receive messages from Client

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| webSocket | [System.Net.WebSockets.WebSocket](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Net.WebSockets.WebSocket 'System.Net.WebSockets.WebSocket') |  |
| socketAPIPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-Golden-ServerCoreDefinition-ServerCoreHelpers-RemoveWhitespace-System-String-'></a>
### RemoveWhitespace(input) `method`

##### Summary

Removes the whitespace from the String.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| input | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The input. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreHelpers-SendMessageAndUpdateWebSocketsInSpecificPath-System-String,System-String-'></a>
### SendMessageAndUpdateWebSocketsInSpecificPath(socketAPIPath,message) `method`

##### Summary

Sends the message and update web sockets in specific path.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| socketAPIPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The socket API path. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='M-Golden-ServerCoreDefinition-ServerCoreHelpers-SendMessageToClientSocket-System-Net-WebSockets-WebSocket,System-String-'></a>
### SendMessageToClientSocket(webSocket,message) `method`

##### Summary

Sends the message to client WebSocket.
This Is Used by "SendMessageAndUpdateWebSocketsInSpecificPath"
For Update Informaions on All Connections in Same WebSocket Path
Its Solution FOR Teminals, Group Communications, etc.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| webSocket | [System.Net.WebSockets.WebSocket](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Net.WebSockets.WebSocket 'System.Net.WebSockets.WebSocket') | The web socket. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='T-Golden-ServerCoreDBSettings-ServerCoreLoggerWS'></a>
## ServerCoreLoggerWS `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

WEBSocket Template still not used Ideal for Terminal Panels, chat, controlling services

<a name='M-Golden-ServerCoreDBSettings-ServerCoreLoggerWS-Echo-Microsoft-AspNetCore-Http-HttpContext,System-Net-WebSockets-WebSocket-'></a>
### Echo(context,webSocket) `method`

##### Summary

WebSocket Communication Set Examle

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [Microsoft.AspNetCore.Http.HttpContext](#T-Microsoft-AspNetCore-Http-HttpContext 'Microsoft.AspNetCore.Http.HttpContext') | The context. |
| webSocket | [System.Net.WebSockets.WebSocket](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Net.WebSockets.WebSocket 'System.Net.WebSockets.WebSocket') | The web socket. |

<a name='M-Golden-ServerCoreDBSettings-ServerCoreLoggerWS-Get'></a>
### Get() `method`

##### Summary

WebSocket Registration Connection API Example

##### Returns



##### Parameters

This method has no parameters.

<a name='M-Golden-ServerCoreDBSettings-ServerCoreLoggerWS-GetBySocketAPIPath-System-String-'></a>
### GetBySocketAPIPath(id) `method`

##### Summary

Universal WebSocket API Definitions
for Connection Paths and Registering
To Server Central List ow WebSocket Connections

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='T-Golden-ServerCoreDBSettings-ServerCoreWebBuilderApi'></a>
## ServerCoreWebBuilderApi `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Server Root Controller

<a name='M-Golden-ServerCoreDBSettings-ServerCoreWebBuilderApi-GetWebBuilderCodePreview-System-Int32-'></a>
### GetWebBuilderCodePreview() `method`

##### Summary

WebBuilder Code Library Preview Api

##### Returns



##### Parameters

This method has no parameters.

<a name='M-Golden-ServerCoreDBSettings-ServerCoreWebBuilderApi-GetWebBuilderMenuPreview-System-Int32-'></a>
### GetWebBuilderMenuPreview(id) `method`

##### Summary

WebBuilder Menu Preview Api

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | The identifier. |

<a name='T-Golden-ServerCoreDBSettings-ServerCoreWebUserApi'></a>
## ServerCoreWebUserApi `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Server Root Controller

<a name='M-Golden-ServerCoreDBSettings-ServerCoreWebUserApi-PostSendVerifyCode-Golden-ServerCoreWebPages-EmailVerification-'></a>
### PostSendVerifyCode(email) `method`

##### Summary

WebPages Verification Email

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| email | [Golden.ServerCoreWebPages.EmailVerification](#T-Golden-ServerCoreWebPages-EmailVerification 'Golden.ServerCoreWebPages.EmailVerification') | The email. |

<a name='T-Golden-ServerCoreDBSettings-ServerDbDgmlSchemaApi'></a>
## ServerDbDgmlSchemaApi `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Database Schema Diagram Controller

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='M-Golden-ServerCoreDBSettings-ServerDbDgmlSchemaApi-#ctor-Golden-ServerCoreDBSettings-GoldenContext-'></a>
### #ctor(context) `constructor`

##### Summary

Initializes a new instance of the [](#!-DgmlSchemaApi 'DgmlSchemaApi') class.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [Golden.ServerCoreDBSettings.GoldenContext](#T-Golden-ServerCoreDBSettings-GoldenContext 'Golden.ServerCoreDBSettings.GoldenContext') | The context. |

<a name='M-Golden-ServerCoreDBSettings-ServerDbDgmlSchemaApi-Get'></a>
### Get() `method`

##### Summary

Creates a DGML class diagram of most of the entities in the project wher you go to
localhost/dgml See https://github.com/ErikEJ/SqlCeToolbox/wiki/EF-Core-Power-Tools

##### Returns

a DGML class diagram

##### Parameters

This method has no parameters.

<a name='T-Golden-Controllers-ServerDocApi'></a>
## ServerDocApi `type`

##### Namespace

Golden.Controllers

<a name='F-Golden-Controllers-ServerDocApi-_hostingEnvironment'></a>
### _hostingEnvironment `constants`

##### Summary

For wwwroot folder Update 
with detect changes 
and modify static pages

<a name='M-Golden-Controllers-ServerDocApi-GenerateMdBook'></a>
### GenerateMdBook() `method`

##### Summary

Server Inteligent Documentation Generator Api

##### Parameters

This method has no parameters.

<a name='T-Golden-ServerCoreDBSettings-ServerEmailerApi'></a>
## ServerEmailerApi `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Server Email sender Api for logged Communication

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='T-Golden-ServerCoreConfiguration-ServerEnablingServices'></a>
## ServerEnablingServices `type`

##### Namespace

Golden.ServerCoreConfiguration

##### Summary

Server Core Enabling Settings of Security, API Communications, Technologies, Modules,Rules,
Rights, Rules, Rights, Conditions, Cors, Cookies, Formats, Services, Logging, etc..

<a name='M-Golden-ServerCoreConfiguration-ServerEnablingServices-EnableCors-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableCors() `method`

##### Summary

Server Cors Configuration

##### Parameters

This method has no parameters.

<a name='M-Golden-ServerCoreConfiguration-ServerEnablingServices-EnableEndpoints-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableEndpoints() `method`

##### Summary

Server Endpoints Configuration

##### Parameters

This method has no parameters.

<a name='M-Golden-ServerCoreConfiguration-ServerEnablingServices-EnableLogging-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableLogging(app,loggerFactory) `method`

##### Summary

Enable Server Logging in Debug Mode

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| app | [Microsoft.AspNetCore.Builder.IApplicationBuilder@](#T-Microsoft-AspNetCore-Builder-IApplicationBuilder@ 'Microsoft.AspNetCore.Builder.IApplicationBuilder@') |  |

<a name='M-Golden-ServerCoreConfiguration-ServerEnablingServices-EnableWebSocket-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableWebSocket(app) `method`

##### Summary

Server WebSocket Configuration

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| app | [Microsoft.AspNetCore.Builder.IApplicationBuilder@](#T-Microsoft-AspNetCore-Builder-IApplicationBuilder@ 'Microsoft.AspNetCore.Builder.IApplicationBuilder@') |  |

<a name='T-Golden-ServerCoreDefinition-ServerLocalDbDials'></a>
## ServerLocalDbDials `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

Special Functions: Definition of Selected tables for Optimal Using to Data nature Its saves
traffic, increases availability and for Example implemented Language is in Develop Auto Fill
Table when is First Using Its can be used for more Dials

<a name='T-Golden-ServerCoreConfiguration-ServerModules'></a>
## ServerModules `type`

##### Namespace

Golden.ServerCoreConfiguration

##### Summary

Configure Server Ad-dons and Modules

<a name='M-Golden-ServerCoreConfiguration-ServerModules-ConfigureCoreAdmin-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureCoreAdmin(services) `method`

##### Summary

Server Module: Automatic DB Data Manager for work with data directly
services.AddCoreAdmin("Admin"); is Token RoleName

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-Golden-ServerCoreConfiguration-ServerModules-ConfigureDocumentation-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureDocumentation(services) `method`

##### Summary

Server Module: Generted Developer Documentation for Defvelopers Documentation contain
full Server Structure for extremelly simple developing

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-Golden-ServerCoreConfiguration-ServerModules-ConfigureHealthCheck-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureHealthCheck(services) `method`

##### Summary

Server Module: Automatic DB Data Manager for work with data directly
Extreme Posibilities https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-Golden-ServerCoreConfiguration-ServerModules-ConfigureSwagger-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureSwagger(services) `method`

##### Summary

Server Module: Swagger Api Doc Generator And Online Tester Configuration

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='T-Golden-ServerCoreConfiguration-ServerModulesEnabling'></a>
## ServerModulesEnabling `type`

##### Namespace

Golden.ServerCoreConfiguration

##### Summary

Enable Configured Server Ad-dons and Modules

<a name='M-Golden-ServerCoreConfiguration-ServerModulesEnabling-EnableCoreAdmin-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableCoreAdmin() `method`

##### Summary

Server Module: Enable Swagger Api Doc Generator And Online Tester

##### Parameters

This method has no parameters.

<a name='M-Golden-ServerCoreConfiguration-ServerModulesEnabling-EnableDocumentation-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableDocumentation() `method`

##### Summary

Server Module: Enable Generated Developer Documentation

##### Parameters

This method has no parameters.

<a name='M-Golden-ServerCoreConfiguration-ServerModulesEnabling-EnableSwagger-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableSwagger() `method`

##### Summary

Server Module: Enable Swagger Api Doc Generator And Online Tester

##### Parameters

This method has no parameters.

<a name='T-Golden-ServerCoreDefinition-ServerProviderHealthCheck'></a>
## ServerProviderHealthCheck `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

Custom Registering 
Data are on /HealthResultService

##### See Also

- [Microsoft.Extensions.Diagnostics.HealthChecks.IHealthCheck](#T-Microsoft-Extensions-Diagnostics-HealthChecks-IHealthCheck 'Microsoft.Extensions.Diagnostics.HealthChecks.IHealthCheck')

<a name='M-Golden-ServerCoreDefinition-ServerProviderHealthCheck-Microsoft#Extensions#Diagnostics#HealthChecks#IHealthCheck#CheckHealthAsync-Microsoft-Extensions-Diagnostics-HealthChecks-HealthCheckContext,System-Threading-CancellationToken-'></a>
### Microsoft#Extensions#Diagnostics#HealthChecks#IHealthCheck#CheckHealthAsync(context,cancellationToken) `method`

##### Summary

Interface for Registering Custom  Defined Checks on Startup
https://dilanlivera.dev/add-health-checks-in-aspnet-core
https://medium.com/@suman.chatterjee/net-core-web-api-custom-health-check-13c6350b5f0c
https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [Microsoft.Extensions.Diagnostics.HealthChecks.HealthCheckContext](#T-Microsoft-Extensions-Diagnostics-HealthChecks-HealthCheckContext 'Microsoft.Extensions.Diagnostics.HealthChecks.HealthCheckContext') |  |
| cancellationToken | [System.Threading.CancellationToken](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Threading.CancellationToken 'System.Threading.CancellationToken') |  |

<a name='T-Golden-ServerCoreDBSettings-ServerRestartApi'></a>
## ServerRestartApi `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Server Restart Api for Remote Control

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='T-Golden-ServerCoreDefinition-ServerRuntimeData'></a>
## ServerRuntimeData `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

The server runtime data.

<a name='F-Golden-ServerCoreDefinition-ServerRuntimeData-CentralWebSocketList'></a>
### CentralWebSocketList `constants`

##### Summary

Central WebSocket List for Easy one place Using

<a name='F-Golden-ServerCoreDefinition-ServerRuntimeData-LocalDBTableList'></a>
### LocalDBTableList `constants`

##### Summary

The local db table list.

<a name='F-Golden-ServerCoreDefinition-ServerRuntimeData-ServerArgs'></a>
### ServerArgs `constants`

##### Summary

Server Starup Args

<a name='F-Golden-ServerCoreDefinition-ServerRuntimeData-ServerCancelToken'></a>
### ServerCancelToken `constants`

##### Summary

Cancellation Token for Server Remote Control

<a name='F-Golden-ServerCoreDefinition-ServerRuntimeData-ServerCoreStatus'></a>
### ServerCoreStatus `constants`

##### Summary

Server Core Status

<a name='F-Golden-ServerCoreDefinition-ServerRuntimeData-ServerFTPProvider'></a>
### ServerFTPProvider `constants`

##### Summary

Server Securited FTP Provider for Remote Control

<a name='F-Golden-ServerCoreDefinition-ServerRuntimeData-ServerRestartRequest'></a>
### ServerRestartRequest `constants`

##### Summary

Server Restart Request Indicator

<a name='P-Golden-ServerCoreDefinition-ServerRuntimeData-ConfigFile'></a>
### ConfigFile `property`

##### Summary

Gets or Sets the configure file.

<a name='P-Golden-ServerCoreDefinition-ServerRuntimeData-DataPath'></a>
### DataPath `property`

##### Summary

Gets or Sets the data path.

<a name='P-Golden-ServerCoreDefinition-ServerRuntimeData-DebugMode'></a>
### DebugMode `property`

##### Summary

Gets or Sets the debug mode.

<a name='P-Golden-ServerCoreDefinition-ServerRuntimeData-Setting_folder'></a>
### Setting_folder `property`

##### Summary

Gets or Sets the setting_folder.

<a name='P-Golden-ServerCoreDefinition-ServerRuntimeData-Startup_path'></a>
### Startup_path `property`

##### Summary

Gets or Sets the startup_path.

<a name='P-Golden-ServerCoreDefinition-ServerRuntimeData-UserPath'></a>
### UserPath `property`

##### Summary

Gets or Sets the configure file.

<a name='T-Golden-ServerCoreDBSettings-ServerWebPagesConfigApi'></a>
## ServerWebPagesConfigApi `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Server Root Controller 
Used by Server Webpages

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='M-Golden-ServerCoreDBSettings-ServerWebPagesConfigApi-Index'></a>
### Index() `method`

##### Summary

Server Root "/" Redirection to "server" Folder

##### Returns



##### Parameters

This method has no parameters.

<a name='T-Golden-ServerCoreWebPages-ServerWebPagesLogin'></a>
## ServerWebPagesLogin `type`

##### Namespace

Golden.ServerCoreWebPages

##### Summary

Custom Class For Login over Server Web Pages

<a name='T-Golden-ServerCoreWebPages-ServerWebPagesToken'></a>
## ServerWebPagesToken `type`

##### Namespace

Golden.ServerCoreWebPages

##### Summary

Server WebPages Communication Token Definition
for Security content

<a name='T-Golden-ServerCoreDBSettings-SetReportFilter'></a>
## SetReportFilter `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Database Model Extension Definitions Its API Filter, Extended Classes, Translation, etc

<a name='T-Golden-ServerCoreDBSettings-SitemapController'></a>
## SitemapController `type`

##### Namespace

Golden.ServerCoreDBSettings

##### Summary

Sitemap.xml Routing

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='T-Golden-Startup'></a>
## Startup `type`

##### Namespace

Golden

##### Summary

Server Startup Definitions

<a name='M-Golden-Startup-Configure-Microsoft-AspNetCore-Builder-IApplicationBuilder,Microsoft-Extensions-Hosting-IHostApplicationLifetime-'></a>
### Configure(app,serverLifetime) `method`

##### Summary

Server Core: Main Enabling of Server Services, Technologies, Modules, etc..

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| app | [Microsoft.AspNetCore.Builder.IApplicationBuilder](#T-Microsoft-AspNetCore-Builder-IApplicationBuilder 'Microsoft.AspNetCore.Builder.IApplicationBuilder') |  |
| serverLifetime | [Microsoft.Extensions.Hosting.IHostApplicationLifetime](#T-Microsoft-Extensions-Hosting-IHostApplicationLifetime 'Microsoft.Extensions.Hosting.IHostApplicationLifetime') |  |

<a name='M-Golden-Startup-ConfigureServices-Microsoft-Extensions-DependencyInjection-IServiceCollection-'></a>
### ConfigureServices(services) `method`

##### Summary

Server Core: Main Configure of Server Services, Technologies, Modules, etc..

##### Returns

void.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection 'Microsoft.Extensions.DependencyInjection.IServiceCollection') |  |

<a name='T-Golden-Controllers-SystemDocApi'></a>
## SystemDocApi `type`

##### Namespace

Golden.Controllers

<a name='F-Golden-Controllers-SystemDocApi-_hostingEnvironment'></a>
### _hostingEnvironment `constants`

##### Summary

For wwwroot folder Update 
with detect changes 
and modify static pages

<a name='M-Golden-Controllers-SystemDocApi-GetMdDocumentPreview-System-Int32-'></a>
### GetMdDocumentPreview() `method`

##### Summary

Documentation Code Manager Html Preview Api
Startup Viewer

##### Returns



##### Parameters

This method has no parameters.

<a name='M-Golden-Controllers-SystemDocApi-GetMdLibraryPreview-System-Int32-'></a>
### GetMdLibraryPreview() `method`

##### Summary

Documentation Code Manager Html Preview Api
Startup Viewer

##### Returns



##### Parameters

This method has no parameters.

<a name='T-Golden-ServerCoreWebPages-UserConfig'></a>
## UserConfig `type`

##### Namespace

Golden.ServerCoreWebPages

##### Summary

Custom Class For UserConfig over Server Web Pages

<a name='T-Golden-ServerCoreWebPages-WebMessage'></a>
## WebMessage `type`

##### Namespace

Golden.ServerCoreWebPages

##### Summary

Custom WebMessage Class For Server Web Pages

<a name='T-Golden-ServerCoreWebPages-WebRegistration'></a>
## WebRegistration `type`

##### Namespace

Golden.ServerCoreWebPages

##### Summary

WebPages User Registration class

<a name='T-Golden-ServerCoreDefinition-WebSocketExtension'></a>
## WebSocketExtension `type`

##### Namespace

Golden.ServerCoreDefinition

##### Summary

WebSocket Extension Definition For 
Simple Central Control All Connection
By Connection Path and Timeout

<a name='T-Golden-ServerCoreDefinition-ServerCoreHelpers-WebSocketLogProvider'></a>
## WebSocketLogProvider `type`

##### Namespace

Golden.ServerCoreDefinition.ServerCoreHelpers

##### Summary

!!! Implemented
Server Core WebSocket System LogProvider Stream
This Is Special Serice For Remote Monitoring
On More Devices in OneTime

##### See Also

- [Microsoft.Extensions.Logging.ILoggerProvider](#T-Microsoft-Extensions-Logging-ILoggerProvider 'Microsoft.Extensions.Logging.ILoggerProvider')

<a name='T-Golden-ServerCoreDefinition-ServerCoreHelpers-WebSocketLogger'></a>
## WebSocketLogger `type`

##### Namespace

Golden.ServerCoreDefinition.ServerCoreHelpers

##### Summary

Server Core WebSocket System Logger Interface

##### See Also

- [Microsoft.Extensions.Logging.ILogger](#T-Microsoft-Extensions-Logging-ILogger 'Microsoft.Extensions.Logging.ILogger')

<a name='M-Golden-ServerCoreDefinition-ServerCoreHelpers-WebSocketLogger-Log``1-Microsoft-Extensions-Logging-LogLevel,Microsoft-Extensions-Logging-EventId,``0,System-Exception,System-Func{``0,System-Exception,System-String}-'></a>
### Log\`\`1(logLevel,eventId,state,exception,formatter) `method`

##### Summary

Used to log the entry.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| logLevel | [Microsoft.Extensions.Logging.LogLevel](#T-Microsoft-Extensions-Logging-LogLevel 'Microsoft.Extensions.Logging.LogLevel') | An instance of [LogLevel](#T-Microsoft-Extensions-Logging-LogLevel 'Microsoft.Extensions.Logging.LogLevel'). |
| eventId | [Microsoft.Extensions.Logging.EventId](#T-Microsoft-Extensions-Logging-EventId 'Microsoft.Extensions.Logging.EventId') | The event's ID. An instance of [EventId](#T-Microsoft-Extensions-Logging-EventId 'Microsoft.Extensions.Logging.EventId'). |
| state | [\`\`0](#T-``0 '``0') | The event's state. |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The event's exception. An instance of [Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') |
| formatter | [System.Func{\`\`0,System.Exception,System.String}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{``0,System.Exception,System.String}') | A delegate that formats |

##### Generic Types

| Name | Description |
| ---- | ----------- |
| TState |  |
