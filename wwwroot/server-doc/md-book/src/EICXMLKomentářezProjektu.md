# Úvod   EIC - Dokumentace Projektu  

EasyITcenter Universální řešení serverů IT světa v  1 Globálním Balíčku
Modulární Server s možností neomezeného a přesto extermně jednoduchého vývoje všemi směry
Ideální Centrální Správa sítí, strojů, IT a všeho co si dovedete prtředstavit.
Máte Otázky? neváhejte nám zavolat
Veškerý kód je okomentován pro Centrální Použití. To dělá z projektu výborně vyladěný Server
Kde jsou optimalizovány všechny vazby a provedení. Tento způsob tak Nabízí Velice snadný další libovolný Vývoj
již jen s pomocí předchystaných šablon


<a name='assembly'></a>
# EasyITCenter

## Contents

- [AuthenticateResponse](#T-EasyITCenter-DBModel-AuthenticateResponse 'EasyITCenter.DBModel.AuthenticateResponse')
  - [Expiration](#P-EasyITCenter-DBModel-AuthenticateResponse-Expiration 'EasyITCenter.DBModel.AuthenticateResponse.Expiration')
  - [Id](#P-EasyITCenter-DBModel-AuthenticateResponse-Id 'EasyITCenter.DBModel.AuthenticateResponse.Id')
  - [Name](#P-EasyITCenter-DBModel-AuthenticateResponse-Name 'EasyITCenter.DBModel.AuthenticateResponse.Name')
  - [Role](#P-EasyITCenter-DBModel-AuthenticateResponse-Role 'EasyITCenter.DBModel.AuthenticateResponse.Role')
  - [Surname](#P-EasyITCenter-DBModel-AuthenticateResponse-Surname 'EasyITCenter.DBModel.AuthenticateResponse.Surname')
  - [Token](#P-EasyITCenter-DBModel-AuthenticateResponse-Token 'EasyITCenter.DBModel.AuthenticateResponse.Token')
- [AutoGenConnectionString](#T-EasyITCenter-DBModel-AutoGenConnectionString 'EasyITCenter.DBModel.AutoGenConnectionString')
- [AutoGenRequest](#T-EasyITCenter-DBModel-AutoGenRequest 'EasyITCenter.DBModel.AutoGenRequest')
- [AutoScheduledJob](#T-EasyITCenter-ServerCoreStructure-AutoScheduledJob 'EasyITCenter.ServerCoreStructure.AutoScheduledJob')
- [BackendServer](#T-EasyITCenter-BackendServer 'EasyITCenter.BackendServer')
  - [ServerConfigSettings](#F-EasyITCenter-BackendServer-ServerConfigSettings 'EasyITCenter.BackendServer.ServerConfigSettings')
  - [ServerRuntimeData](#F-EasyITCenter-BackendServer-ServerRuntimeData 'EasyITCenter.BackendServer.ServerRuntimeData')
  - [BuildWebHost(args)](#M-EasyITCenter-BackendServer-BuildWebHost-System-String[]- 'EasyITCenter.BackendServer.BuildWebHost(System.String[])')
  - [CheckLicense()](#M-EasyITCenter-BackendServer-CheckLicense 'EasyITCenter.BackendServer.CheckLicense')
  - [LoadConfigurationFromDb()](#M-EasyITCenter-BackendServer-LoadConfigurationFromDb 'EasyITCenter.BackendServer.LoadConfigurationFromDb')
  - [LoadConfigurationFromFile()](#M-EasyITCenter-BackendServer-LoadConfigurationFromFile 'EasyITCenter.BackendServer.LoadConfigurationFromFile')
  - [Main(args)](#M-EasyITCenter-BackendServer-Main-System-String[]- 'EasyITCenter.BackendServer.Main(System.String[])')
  - [RestartServer()](#M-EasyITCenter-BackendServer-RestartServer 'EasyITCenter.BackendServer.RestartServer')
  - [ServerStartupDbDataLoading()](#M-EasyITCenter-BackendServer-ServerStartupDbDataLoading 'EasyITCenter.BackendServer.ServerStartupDbDataLoading')
  - [StartServer()](#M-EasyITCenter-BackendServer-StartServer 'EasyITCenter.BackendServer.StartServer')
- [CarouselImage](#T-EasyITCenter-DBModel-CarouselImage 'EasyITCenter.DBModel.CarouselImage')
- [CarouselVideo](#T-EasyITCenter-DBModel-CarouselVideo 'EasyITCenter.DBModel.CarouselVideo')
- [CommunicationController](#T-EasyITCenter-ServerCoreStructure-CommunicationController 'EasyITCenter.ServerCoreStructure.CommunicationController')
  - [GetUserId()](#M-EasyITCenter-ServerCoreStructure-CommunicationController-GetUserId 'EasyITCenter.ServerCoreStructure.CommunicationController.GetUserId')
  - [GetUserName()](#M-EasyITCenter-ServerCoreStructure-CommunicationController-GetUserName 'EasyITCenter.ServerCoreStructure.CommunicationController.GetUserName')
  - [GetUserRole()](#M-EasyITCenter-ServerCoreStructure-CommunicationController-GetUserRole 'EasyITCenter.ServerCoreStructure.CommunicationController.GetUserRole')
  - [IsAdmin()](#M-EasyITCenter-ServerCoreStructure-CommunicationController-IsAdmin 'EasyITCenter.ServerCoreStructure.CommunicationController.IsAdmin')
  - [IsLogged()](#M-EasyITCenter-ServerCoreStructure-CommunicationController-IsLogged 'EasyITCenter.ServerCoreStructure.CommunicationController.IsLogged')
  - [IsSystemUser()](#M-EasyITCenter-ServerCoreStructure-CommunicationController-IsSystemUser 'EasyITCenter.ServerCoreStructure.CommunicationController.IsSystemUser')
  - [IsWebUser()](#M-EasyITCenter-ServerCoreStructure-CommunicationController-IsWebUser 'EasyITCenter.ServerCoreStructure.CommunicationController.IsWebUser')
- [CoreOperations](#T-EasyITCenter-ServerCoreStructure-CoreOperations 'EasyITCenter.ServerCoreStructure.CoreOperations')
  - [CallGetApiUrl(url)](#M-EasyITCenter-ServerCoreStructure-CoreOperations-CallGetApiUrl-System-String- 'EasyITCenter.ServerCoreStructure.CoreOperations.CallGetApiUrl(System.String)')
  - [CheckTokenValidityFromString(tokenString)](#M-EasyITCenter-ServerCoreStructure-CoreOperations-CheckTokenValidityFromString-System-String- 'EasyITCenter.ServerCoreStructure.CoreOperations.CheckTokenValidityFromString(System.String)')
  - [GetSelfSignedCertificate(password)](#M-EasyITCenter-ServerCoreStructure-CoreOperations-GetSelfSignedCertificate-System-String- 'EasyITCenter.ServerCoreStructure.CoreOperations.GetSelfSignedCertificate(System.String)')
  - [GetSelfSignedCertificateFromFile()](#M-EasyITCenter-ServerCoreStructure-CoreOperations-GetSelfSignedCertificateFromFile-System-String- 'EasyITCenter.ServerCoreStructure.CoreOperations.GetSelfSignedCertificateFromFile(System.String)')
  - [RunSystemProcess(processDefinition)](#M-EasyITCenter-ServerCoreStructure-CoreOperations-RunSystemProcess-EasyITCenter-ServerCoreStructure-ProcessClass- 'EasyITCenter.ServerCoreStructure.CoreOperations.RunSystemProcess(EasyITCenter.ServerCoreStructure.ProcessClass)')
  - [SendEmail(mailRequest,sendImmediately)](#M-EasyITCenter-ServerCoreStructure-CoreOperations-SendEmail-EasyITCenter-ServerCoreStructure-MailRequest,System-Boolean- 'EasyITCenter.ServerCoreStructure.CoreOperations.SendEmail(EasyITCenter.ServerCoreStructure.MailRequest,System.Boolean)')
  - [SendMassEmail(mailRequests)](#M-EasyITCenter-ServerCoreStructure-CoreOperations-SendMassEmail-System-Collections-Generic-List{EasyITCenter-ServerCoreStructure-MailRequest}- 'EasyITCenter.ServerCoreStructure.CoreOperations.SendMassEmail(System.Collections.Generic.List{EasyITCenter.ServerCoreStructure.MailRequest})')
  - [ValidAndGetTokenParameters()](#M-EasyITCenter-ServerCoreStructure-CoreOperations-ValidAndGetTokenParameters 'EasyITCenter.ServerCoreStructure.CoreOperations.ValidAndGetTokenParameters')
- [CustomFtpUser](#T-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser')
  - [#ctor(name)](#M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-#ctor-System-String- 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser.#ctor(System.String)')
  - [Name](#P-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-Name 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser.Name')
  - [IsInGroup()](#M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-IsInGroup-System-String- 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser.IsInGroup(System.String)')
- [CustomString](#T-EasyITCenter-DBModel-CustomString 'EasyITCenter.DBModel.CustomString')
- [DBResult](#T-EasyITCenter-DBModel-DBResult 'EasyITCenter.DBModel.DBResult')
- [DBResultMessage](#T-EasyITCenter-DBModel-DBResultMessage 'EasyITCenter.DBModel.DBResultMessage')
  - [ErrorMessage](#P-EasyITCenter-DBModel-DBResultMessage-ErrorMessage 'EasyITCenter.DBModel.DBResultMessage.ErrorMessage')
  - [InsertedId](#P-EasyITCenter-DBModel-DBResultMessage-InsertedId 'EasyITCenter.DBModel.DBResultMessage.InsertedId')
  - [RecordCount](#P-EasyITCenter-DBModel-DBResultMessage-RecordCount 'EasyITCenter.DBModel.DBResultMessage.RecordCount')
  - [Status](#P-EasyITCenter-DBModel-DBResultMessage-Status 'EasyITCenter.DBModel.DBResultMessage.Status')
- [DBWebApiResponses](#T-EasyITCenter-ServerCoreWebPages-DBWebApiResponses 'EasyITCenter.ServerCoreWebPages.DBWebApiResponses')
- [DataOperations](#T-EasyITCenter-ServerCoreStructure-DataOperations 'EasyITCenter.ServerCoreStructure.DataOperations')
  - [ConvertGenericClassToStandard\`\`1(data)](#M-EasyITCenter-ServerCoreStructure-DataOperations-ConvertGenericClassToStandard``1-``0- 'EasyITCenter.ServerCoreStructure.DataOperations.ConvertGenericClassToStandard``1(``0)')
  - [FirstCharToLowerCase(str)](#M-EasyITCenter-ServerCoreStructure-DataOperations-FirstCharToLowerCase-System-String- 'EasyITCenter.ServerCoreStructure.DataOperations.FirstCharToLowerCase(System.String)')
  - [GetByteArrayFrom64Encode(strContent)](#M-EasyITCenter-ServerCoreStructure-DataOperations-GetByteArrayFrom64Encode-System-String- 'EasyITCenter.ServerCoreStructure.DataOperations.GetByteArrayFrom64Encode(System.String)')
  - [GetSystemErrMessage(exception,msgCount)](#M-EasyITCenter-ServerCoreStructure-DataOperations-GetSystemErrMessage-System-Exception,System-Int32- 'EasyITCenter.ServerCoreStructure.DataOperations.GetSystemErrMessage(System.Exception,System.Int32)')
  - [GetUserApiErrMessage(exception,msgCount)](#M-EasyITCenter-ServerCoreStructure-DataOperations-GetUserApiErrMessage-System-Exception,System-Int32- 'EasyITCenter.ServerCoreStructure.DataOperations.GetUserApiErrMessage(System.Exception,System.Int32)')
  - [IsValidEmail(email)](#M-EasyITCenter-ServerCoreStructure-DataOperations-IsValidEmail-System-String- 'EasyITCenter.ServerCoreStructure.DataOperations.IsValidEmail(System.String)')
  - [MarkDownLineEndSpacesResolve(input)](#M-EasyITCenter-ServerCoreStructure-DataOperations-MarkDownLineEndSpacesResolve-System-String- 'EasyITCenter.ServerCoreStructure.DataOperations.MarkDownLineEndSpacesResolve(System.String)')
  - [RandomString(length)](#M-EasyITCenter-ServerCoreStructure-DataOperations-RandomString-System-Int32- 'EasyITCenter.ServerCoreStructure.DataOperations.RandomString(System.Int32)')
  - [RemoveDiacritism(Text)](#M-EasyITCenter-ServerCoreStructure-DataOperations-RemoveDiacritism-System-String- 'EasyITCenter.ServerCoreStructure.DataOperations.RemoveDiacritism(System.String)')
  - [RemoveWhitespace(input)](#M-EasyITCenter-ServerCoreStructure-DataOperations-RemoveWhitespace-System-String- 'EasyITCenter.ServerCoreStructure.DataOperations.RemoveWhitespace(System.String)')
  - [StringToUTF8(text)](#M-EasyITCenter-ServerCoreStructure-DataOperations-StringToUTF8-System-String- 'EasyITCenter.ServerCoreStructure.DataOperations.StringToUTF8(System.String)')
  - [UnicodeToUTF8(strFrom)](#M-EasyITCenter-ServerCoreStructure-DataOperations-UnicodeToUTF8-System-String- 'EasyITCenter.ServerCoreStructure.DataOperations.UnicodeToUTF8(System.String)')
  - [Utf8toUnicode(utf8String)](#M-EasyITCenter-ServerCoreStructure-DataOperations-Utf8toUnicode-System-String- 'EasyITCenter.ServerCoreStructure.DataOperations.Utf8toUnicode(System.String)')
- [DatabaseContextExtensions](#T-EasyITCenter-ServerCoreDBSettings-DatabaseContextExtensions 'EasyITCenter.ServerCoreDBSettings.DatabaseContextExtensions')
- [DbOperations](#T-EasyITCenter-ServerCoreStructure-DbOperations 'EasyITCenter.ServerCoreStructure.DbOperations')
  - [BindList\`\`1(dt)](#M-EasyITCenter-ServerCoreStructure-DbOperations-BindList``1-System-Data-DataTable- 'EasyITCenter.ServerCoreStructure.DbOperations.BindList``1(System.Data.DataTable)')
  - [CheckServerModuleExists(word,language)](#M-EasyITCenter-ServerCoreStructure-DbOperations-CheckServerModuleExists-System-String- 'EasyITCenter.ServerCoreStructure.DbOperations.CheckServerModuleExists(System.String)')
  - [CheckServerModuleOffline(modulePath)](#M-EasyITCenter-ServerCoreStructure-DbOperations-CheckServerModuleOffline-System-String- 'EasyITCenter.ServerCoreStructure.DbOperations.CheckServerModuleOffline(System.String)')
  - [CheckServerModuleOnline(modulePath)](#M-EasyITCenter-ServerCoreStructure-DbOperations-CheckServerModuleOnline-System-String- 'EasyITCenter.ServerCoreStructure.DbOperations.CheckServerModuleOnline(System.String)')
  - [DBTranslate(word,language)](#M-EasyITCenter-ServerCoreStructure-DbOperations-DBTranslate-System-String,System-String- 'EasyITCenter.ServerCoreStructure.DbOperations.DBTranslate(System.String,System.String)')
  - [DBTranslateOffline(word,language)](#M-EasyITCenter-ServerCoreStructure-DbOperations-DBTranslateOffline-System-String,System-String- 'EasyITCenter.ServerCoreStructure.DbOperations.DBTranslateOffline(System.String,System.String)')
  - [DBTranslateOnline(word,language)](#M-EasyITCenter-ServerCoreStructure-DbOperations-DBTranslateOnline-System-String,System-String- 'EasyITCenter.ServerCoreStructure.DbOperations.DBTranslateOnline(System.String,System.String)')
  - [GetWebGlobalPageBlockLists(modulePath)](#M-EasyITCenter-ServerCoreStructure-DbOperations-GetWebGlobalPageBlockLists-System-String- 'EasyITCenter.ServerCoreStructure.DbOperations.GetWebGlobalPageBlockLists(System.String)')
  - [GetWebGlobalPageBlockListsOnline(modulePath)](#M-EasyITCenter-ServerCoreStructure-DbOperations-GetWebGlobalPageBlockListsOnline-System-String- 'EasyITCenter.ServerCoreStructure.DbOperations.GetWebGlobalPageBlockListsOnline(System.String)')
  - [GetWebPortalJsCssScripts(specType,fileName)](#M-EasyITCenter-ServerCoreStructure-DbOperations-GetWebPortalJsCssScripts-System-String,System-String- 'EasyITCenter.ServerCoreStructure.DbOperations.GetWebPortalJsCssScripts(System.String,System.String)')
  - [GetWebPortalJsCssScriptsOffline(specType,fileName)](#M-EasyITCenter-ServerCoreStructure-DbOperations-GetWebPortalJsCssScriptsOffline-System-String,System-String- 'EasyITCenter.ServerCoreStructure.DbOperations.GetWebPortalJsCssScriptsOffline(System.String,System.String)')
  - [GetWebPortalJsCssScriptsOnline(specType,fileName)](#M-EasyITCenter-ServerCoreStructure-DbOperations-GetWebPortalJsCssScriptsOnline-System-String,System-String- 'EasyITCenter.ServerCoreStructure.DbOperations.GetWebPortalJsCssScriptsOnline(System.String,System.String)')
  - [LoadOrRefreshStaticDbDials(onlyThis)](#M-EasyITCenter-ServerCoreStructure-DbOperations-LoadOrRefreshStaticDbDials-System-Nullable{EasyITCenter-ServerCoreStructure-ServerLocalDbDials}- 'EasyITCenter.ServerCoreStructure.DbOperations.LoadOrRefreshStaticDbDials(System.Nullable{EasyITCenter.ServerCoreStructure.ServerLocalDbDials})')
- [DelegateHealthCheckPublisher](#T-EasyITCenter-ServerCoreStructure-DelegateHealthCheckPublisher 'EasyITCenter.ServerCoreStructure.DelegateHealthCheckPublisher')
- [EasyITCenterAuthenticationApi](#T-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi 'EasyITCenter.ControllersExtensions.EasyITCenterAuthenticationApi')
  - [Authenticate(username,password)](#M-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi-Authenticate-System-String,System-String- 'EasyITCenter.ControllersExtensions.EasyITCenterAuthenticationApi.Authenticate(System.String,System.String)')
  - [LifetimeValidator(notBefore,expires,token,params)](#M-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi-LifetimeValidator-System-Nullable{System-DateTime},System-Nullable{System-DateTime},Microsoft-IdentityModel-Tokens-SecurityToken,Microsoft-IdentityModel-Tokens-TokenValidationParameters- 'EasyITCenter.ControllersExtensions.EasyITCenterAuthenticationApi.LifetimeValidator(System.Nullable{System.DateTime},System.Nullable{System.DateTime},Microsoft.IdentityModel.Tokens.SecurityToken,Microsoft.IdentityModel.Tokens.TokenValidationParameters)')
  - [RefreshUserToken(username,token)](#M-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi-RefreshUserToken-System-String,EasyITCenter-DBModel-AuthenticateResponse- 'EasyITCenter.ControllersExtensions.EasyITCenterAuthenticationApi.RefreshUserToken(System.String,EasyITCenter.DBModel.AuthenticateResponse)')
- [EasyITCenterBackendCheckApi](#T-EasyITCenter-ControllersExtensions-EasyITCenterBackendCheckApi 'EasyITCenter.ControllersExtensions.EasyITCenterBackendCheckApi')
  - [GetBackendCheckApi()](#M-EasyITCenter-ControllersExtensions-EasyITCenterBackendCheckApi-GetBackendCheckApi 'EasyITCenter.ControllersExtensions.EasyITCenterBackendCheckApi.GetBackendCheckApi')
- [EasyITCenterContext](#T-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext 'EasyITCenter.ServerCoreDBSettings.EasyITCenterContext')
- [EasyITCenterStoredProceduresListApi](#T-EasyITCenter-Controllers-EasyITCenterStoredProceduresListApi 'EasyITCenter.Controllers.EasyITCenterStoredProceduresListApi')
  - [GetSystemSpGetTableList()](#M-EasyITCenter-Controllers-EasyITCenterStoredProceduresListApi-GetSystemSpGetTableList 'EasyITCenter.Controllers.EasyITCenterStoredProceduresListApi.GetSystemSpGetTableList')
  - [GetSystemSpGetUserMenuList()](#M-EasyITCenter-Controllers-EasyITCenterStoredProceduresListApi-GetSystemSpGetUserMenuList 'EasyITCenter.Controllers.EasyITCenterStoredProceduresListApi.GetSystemSpGetUserMenuList')
  - [GetSystemTableList()](#M-EasyITCenter-Controllers-EasyITCenterStoredProceduresListApi-GetSystemTableList 'EasyITCenter.Controllers.EasyITCenterStoredProceduresListApi.GetSystemTableList')
- [EmailVerification](#T-EasyITCenter-ServerCoreWebPages-EmailVerification 'EasyITCenter.ServerCoreWebPages.EmailVerification')
- [ExpertDocApi](#T-EasyITCenter-Controllers-ExpertDocApi 'EasyITCenter.Controllers.ExpertDocApi')
  - [GetDocumentationGroupedList(id)](#M-EasyITCenter-Controllers-ExpertDocApi-GetDocumentationGroupedList 'EasyITCenter.Controllers.ExpertDocApi.GetDocumentationGroupedList')
  - [GetDocumentationGroupedList(id)](#M-EasyITCenter-Controllers-ExpertDocApi-GetDocumentationGroupedList-System-Int32- 'EasyITCenter.Controllers.ExpertDocApi.GetDocumentationGroupedList(System.Int32)')
- [FileOperations](#T-EasyITCenter-ServerCoreStructure-FileOperations 'EasyITCenter.ServerCoreStructure.FileOperations')
  - [ByteArrayToFile(fileName,byteArray)](#M-EasyITCenter-ServerCoreStructure-FileOperations-ByteArrayToFile-System-String,System-Byte[]- 'EasyITCenter.ServerCoreStructure.FileOperations.ByteArrayToFile(System.String,System.Byte[])')
  - [CheckDirectory(directory)](#M-EasyITCenter-ServerCoreStructure-FileOperations-CheckDirectory-System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.CheckDirectory(System.String)')
  - [CheckFile(file)](#M-EasyITCenter-ServerCoreStructure-FileOperations-CheckFile-System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.CheckFile(System.String)')
  - [ClearFolder(FolderName)](#M-EasyITCenter-ServerCoreStructure-FileOperations-ClearFolder-System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.ClearFolder(System.String)')
  - [ConvertSystemFilePathFromUrl(webpath)](#M-EasyITCenter-ServerCoreStructure-FileOperations-ConvertSystemFilePathFromUrl-System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.ConvertSystemFilePathFromUrl(System.String)')
  - [CopyDirectory(directory)](#M-EasyITCenter-ServerCoreStructure-FileOperations-CopyDirectory-System-String,System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.CopyDirectory(System.String,System.String)')
  - [CopyFile(from,to)](#M-EasyITCenter-ServerCoreStructure-FileOperations-CopyFile-System-String,System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.CopyFile(System.String,System.String)')
  - [CopyFiles(sourcePath,destinationPath)](#M-EasyITCenter-ServerCoreStructure-FileOperations-CopyFiles-System-String,System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.CopyFiles(System.String,System.String)')
  - [CreateDirectory(directory)](#M-EasyITCenter-ServerCoreStructure-FileOperations-CreateDirectory-System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.CreateDirectory(System.String)')
  - [CreateFile(file)](#M-EasyITCenter-ServerCoreStructure-FileOperations-CreateFile-System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.CreateFile(System.String)')
  - [CreatePath(path)](#M-EasyITCenter-ServerCoreStructure-FileOperations-CreatePath-System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.CreatePath(System.String)')
  - [DeleteDirectory(directory)](#M-EasyITCenter-ServerCoreStructure-FileOperations-DeleteDirectory-System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.DeleteDirectory(System.String)')
  - [DeleteFile(file)](#M-EasyITCenter-ServerCoreStructure-FileOperations-DeleteFile-System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.DeleteFile(System.String)')
  - [FileDetectEncoding(FileName)](#M-EasyITCenter-ServerCoreStructure-FileOperations-FileDetectEncoding-System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.FileDetectEncoding(System.String)')
  - [LoadOrCreateSettings()](#M-EasyITCenter-ServerCoreStructure-FileOperations-LoadOrCreateSettings 'EasyITCenter.ServerCoreStructure.FileOperations.LoadOrCreateSettings')
  - [ReadFile(fileName)](#M-EasyITCenter-ServerCoreStructure-FileOperations-ReadFile-System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.ReadFile(System.String)')
  - [WriteToFile(file,content)](#M-EasyITCenter-ServerCoreStructure-FileOperations-WriteToFile-System-String,System-String- 'EasyITCenter.ServerCoreStructure.FileOperations.WriteToFile(System.String,System.String)')
- [GeneratorMarkDownCode](#T-EasyITCenter-ToolsControllers-GeneratorMarkDownCode 'EasyITCenter.ToolsControllers.GeneratorMarkDownCode')
- [GenericTable](#T-EasyITCenter-DBModel-GenericTable 'EasyITCenter.DBModel.GenericTable')
- [GetOperatingSystemInfo](#T-EasyITCenter-ServerCoreStructure-CoreOperations-GetOperatingSystemInfo 'EasyITCenter.ServerCoreStructure.CoreOperations.GetOperatingSystemInfo')
- [GitAuthenticationService](#T-EasyITCenter-GitServer-Services-GitAuthenticationService 'EasyITCenter.GitServer.Services.GitAuthenticationService')
  - [CheckCredentials(username,password)](#M-EasyITCenter-GitServer-Services-GitAuthenticationService-CheckCredentials-System-String,System-String- 'EasyITCenter.GitServer.Services.GitAuthenticationService.CheckCredentials(System.String,System.String)')
- [HostedFtpServer](#T-EasyITCenter-ServerCoreServers-HostedFtpServer 'EasyITCenter.ServerCoreServers.HostedFtpServer')
  - [#ctor(ftpServerHost)](#M-EasyITCenter-ServerCoreServers-HostedFtpServer-#ctor-FubarDev-FtpServer-IFtpServerHost- 'EasyITCenter.ServerCoreServers.HostedFtpServer.#ctor(FubarDev.FtpServer.IFtpServerHost)')
  - [StartAsync()](#M-EasyITCenter-ServerCoreServers-HostedFtpServer-StartAsync-System-Threading-CancellationToken- 'EasyITCenter.ServerCoreServers.HostedFtpServer.StartAsync(System.Threading.CancellationToken)')
  - [StopAsync()](#M-EasyITCenter-ServerCoreServers-HostedFtpServer-StopAsync-System-Threading-CancellationToken- 'EasyITCenter.ServerCoreServers.HostedFtpServer.StopAsync(System.Threading.CancellationToken)')
- [HostedFtpServerMembershipProvider](#T-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider')
  - [ValidateUser(username,password)](#M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-ValidateUser-System-String,System-String- 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.ValidateUser(System.String,System.String)')
  - [ValidateUserAsync(username,password)](#M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-ValidateUserAsync-System-String,System-String- 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.ValidateUserAsync(System.String,System.String)')
- [IdFilter](#T-EasyITCenter-DBModel-IdFilter 'EasyITCenter.DBModel.IdFilter')
- [IndexModel](#T-ServerCorePages-IndexModel 'ServerCorePages.IndexModel')
  - [GetManagedBodyPartForLayout()](#M-ServerCorePages-IndexModel-GetManagedBodyPartForLayout 'ServerCorePages.IndexModel.GetManagedBodyPartForLayout')
  - [GetManagedCentralCssFiles()](#M-ServerCorePages-IndexModel-GetManagedCentralCssFiles 'ServerCorePages.IndexModel.GetManagedCentralCssFiles')
  - [GetManagedCentralCssLayoutFiles()](#M-ServerCorePages-IndexModel-GetManagedCentralCssLayoutFiles 'ServerCorePages.IndexModel.GetManagedCentralCssLayoutFiles')
  - [GetManagedCentralJsFiles()](#M-ServerCorePages-IndexModel-GetManagedCentralJsFiles 'ServerCorePages.IndexModel.GetManagedCentralJsFiles')
  - [GetManagedCentralJsLayoutFiles()](#M-ServerCorePages-IndexModel-GetManagedCentralJsLayoutFiles 'ServerCorePages.IndexModel.GetManagedCentralJsLayoutFiles')
  - [GetManagedCssFilesForLayout()](#M-ServerCorePages-IndexModel-GetManagedCssFilesForLayout 'ServerCorePages.IndexModel.GetManagedCssFilesForLayout')
  - [GetManagedFooterPartForLayout()](#M-ServerCorePages-IndexModel-GetManagedFooterPartForLayout 'ServerCorePages.IndexModel.GetManagedFooterPartForLayout')
  - [GetManagedGlobalCssFiles()](#M-ServerCorePages-IndexModel-GetManagedGlobalCssFiles 'ServerCorePages.IndexModel.GetManagedGlobalCssFiles')
  - [GetManagedGlobalCssLayoutFiles()](#M-ServerCorePages-IndexModel-GetManagedGlobalCssLayoutFiles 'ServerCorePages.IndexModel.GetManagedGlobalCssLayoutFiles')
  - [GetManagedGlobalJsFiles()](#M-ServerCorePages-IndexModel-GetManagedGlobalJsFiles 'ServerCorePages.IndexModel.GetManagedGlobalJsFiles')
  - [GetManagedGlobalJsLayoutFiles()](#M-ServerCorePages-IndexModel-GetManagedGlobalJsLayoutFiles 'ServerCorePages.IndexModel.GetManagedGlobalJsLayoutFiles')
  - [GetManagedHeaderPostScriptsForLayout()](#M-ServerCorePages-IndexModel-GetManagedHeaderPostScriptsForLayout 'ServerCorePages.IndexModel.GetManagedHeaderPostScriptsForLayout')
  - [GetManagedHeaderPreCssForLayout()](#M-ServerCorePages-IndexModel-GetManagedHeaderPreCssForLayout 'ServerCorePages.IndexModel.GetManagedHeaderPreCssForLayout')
  - [GetManagedHeaderPreScriptsForLayout()](#M-ServerCorePages-IndexModel-GetManagedHeaderPreScriptsForLayout 'ServerCorePages.IndexModel.GetManagedHeaderPreScriptsForLayout')
  - [GetManagedJsFilesForLayout()](#M-ServerCorePages-IndexModel-GetManagedJsFilesForLayout 'ServerCorePages.IndexModel.GetManagedJsFilesForLayout')
  - [GetManagedMultiLangCssFiles()](#M-ServerCorePages-IndexModel-GetManagedMultiLangCssFiles 'ServerCorePages.IndexModel.GetManagedMultiLangCssFiles')
  - [GetManagedMultiLangCssLayoutFiles()](#M-ServerCorePages-IndexModel-GetManagedMultiLangCssLayoutFiles 'ServerCorePages.IndexModel.GetManagedMultiLangCssLayoutFiles')
  - [GetManagedMultiLangJsFiles()](#M-ServerCorePages-IndexModel-GetManagedMultiLangJsFiles 'ServerCorePages.IndexModel.GetManagedMultiLangJsFiles')
  - [GetManagedMultiLangJsLayoutFiles()](#M-ServerCorePages-IndexModel-GetManagedMultiLangJsLayoutFiles 'ServerCorePages.IndexModel.GetManagedMultiLangJsLayoutFiles')
  - [OnGet()](#M-ServerCorePages-IndexModel-OnGet 'ServerCorePages.IndexModel.OnGet')
- [MailRequest](#T-EasyITCenter-ServerCoreStructure-MailRequest 'EasyITCenter.ServerCoreStructure.MailRequest')
- [MessageModuleApi](#T-EasyITCenter-Controllers-MessageModuleApi 'EasyITCenter.Controllers.MessageModuleApi')
  - [GetNewsletterPreview(id)](#M-EasyITCenter-Controllers-MessageModuleApi-GetNewsletterPreview 'EasyITCenter.Controllers.MessageModuleApi.GetNewsletterPreview')
  - [SaveNewsletterPreview()](#M-EasyITCenter-Controllers-MessageModuleApi-SaveNewsletterPreview-System-Object- 'EasyITCenter.Controllers.MessageModuleApi.SaveNewsletterPreview(System.Object)')
- [MimeTypes](#T-EasyITCenter-MimeTypes 'EasyITCenter.MimeTypes')
  - [FallbackMimeType](#P-EasyITCenter-MimeTypes-FallbackMimeType 'EasyITCenter.MimeTypes.FallbackMimeType')
  - [GetMimeType(fileName)](#M-EasyITCenter-MimeTypes-GetMimeType-System-String- 'EasyITCenter.MimeTypes.GetMimeType(System.String)')
  - [GetMimeTypeExtensions(mimeType)](#M-EasyITCenter-MimeTypes-GetMimeTypeExtensions-System-String- 'EasyITCenter.MimeTypes.GetMimeTypeExtensions(System.String)')
  - [TryGetMimeType(fileName,mimeType)](#M-EasyITCenter-MimeTypes-TryGetMimeType-System-String,System-String@- 'EasyITCenter.MimeTypes.TryGetMimeType(System.String,System.String@)')
- [NameFilter](#T-EasyITCenter-DBModel-NameFilter 'EasyITCenter.DBModel.NameFilter')
- [ObservableFileSystemWatcher](#T-DynamicRun-Builder-ObservableFileSystemWatcher 'DynamicRun.Builder.ObservableFileSystemWatcher')
  - [#ctor(watcher)](#M-DynamicRun-Builder-ObservableFileSystemWatcher-#ctor-System-IO-FileSystemWatcher- 'DynamicRun.Builder.ObservableFileSystemWatcher.#ctor(System.IO.FileSystemWatcher)')
  - [#ctor()](#M-DynamicRun-Builder-ObservableFileSystemWatcher-#ctor-System-Action{System-IO-FileSystemWatcher}- 'DynamicRun.Builder.ObservableFileSystemWatcher.#ctor(System.Action{System.IO.FileSystemWatcher})')
- [ProcessClass](#T-EasyITCenter-ServerCoreStructure-ProcessClass 'EasyITCenter.ServerCoreStructure.ProcessClass')
- [RSSLoad](#T-EasyITCenter-ServerCoreDBSettings-RSSLoad 'EasyITCenter.ServerCoreDBSettings.RSSLoad')
  - [GetRssFeed(rssUrl)](#M-EasyITCenter-ServerCoreDBSettings-RSSLoad-GetRssFeed-System-String- 'EasyITCenter.ServerCoreDBSettings.RSSLoad.GetRssFeed(System.String)')
- [RobotsController](#T-EasyITCenter-ServerCoreDBSettings-RobotsController 'EasyITCenter.ServerCoreDBSettings.RobotsController')
- [ServerConfigSettings](#T-EasyITCenter-ServerCoreStructure-ServerConfigSettings 'EasyITCenter.ServerCoreStructure.ServerConfigSettings')
  - [BrowserLinkEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-BrowserLinkEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.BrowserLinkEnabled')
  - [ConfigApiTokenTimeoutMin](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigApiTokenTimeoutMin 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigApiTokenTimeoutMin')
  - [ConfigCertificateDomain](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigCertificateDomain 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigCertificateDomain')
  - [ConfigCertificatePassword](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigCertificatePassword 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigCertificatePassword')
  - [ConfigCertificatePath](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigCertificatePath 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigCertificatePath')
  - [ConfigCoreServerRegisteredName](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigCoreServerRegisteredName 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigCoreServerRegisteredName')
  - [ConfigJwtLocalKey](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigJwtLocalKey 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigJwtLocalKey')
  - [ConfigLogWarnPlusToDbEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigLogWarnPlusToDbEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigLogWarnPlusToDbEnabled')
  - [ConfigManagerEmailAddress](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigManagerEmailAddress 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigManagerEmailAddress')
  - [ConfigServerGetLetsEncrypt](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigServerGetLetsEncrypt 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigServerGetLetsEncrypt')
  - [ConfigServerStartupHTTPAndHTTPS](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigServerStartupHTTPAndHTTPS 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigServerStartupHTTPAndHTTPS')
  - [ConfigServerStartupHttpPort](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigServerStartupHttpPort 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigServerStartupHttpPort')
  - [ConfigServerStartupHttpsPort](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigServerStartupHttpsPort 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigServerStartupHttpsPort')
  - [ConfigServerStartupOnHttps](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigServerStartupOnHttps 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigServerStartupOnHttps')
  - [ConfigTimeTokenValidationEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigTimeTokenValidationEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ConfigTimeTokenValidationEnabled')
  - [DatabaseConnectionString](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-DatabaseConnectionString 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.DatabaseConnectionString')
  - [DatabaseInternalCacheTimeoutMin](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-DatabaseInternalCacheTimeoutMin 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.DatabaseInternalCacheTimeoutMin')
  - [DatabaseInternalCachingEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-DatabaseInternalCachingEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.DatabaseInternalCachingEnabled')
  - [DefaultStaticWebFilesFolder](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-DefaultStaticWebFilesFolder 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.DefaultStaticWebFilesFolder')
  - [EmailerSMTPLoginPassword](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EmailerSMTPLoginPassword 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.EmailerSMTPLoginPassword')
  - [EmailerSMTPLoginUsername](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EmailerSMTPLoginUsername 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.EmailerSMTPLoginUsername')
  - [EmailerSMTPPort](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EmailerSMTPPort 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.EmailerSMTPPort')
  - [EmailerSMTPServerAddress](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EmailerSMTPServerAddress 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.EmailerSMTPServerAddress')
  - [EmailerSMTPSslIsEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EmailerSMTPSslIsEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.EmailerSMTPSslIsEnabled')
  - [EmailerServiceEmailAddress](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EmailerServiceEmailAddress 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.EmailerServiceEmailAddress')
  - [EnableAutoShowMdAsHtml](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EnableAutoShowMdAsHtml 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.EnableAutoShowMdAsHtml')
  - [GitServerEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-GitServerEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.GitServerEnabled')
  - [ModuleAutoSchedulerEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleAutoSchedulerEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleAutoSchedulerEnabled')
  - [ModuleCSharpCodeBuilder](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleCSharpCodeBuilder 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleCSharpCodeBuilder')
  - [ModuleDBEntitySchemaEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleDBEntitySchemaEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleDBEntitySchemaEnabled')
  - [ModuleDBEntitySchemaPath](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleDBEntitySchemaPath 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleDBEntitySchemaPath')
  - [ModuleDbDiagramGeneratorEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleDbDiagramGeneratorEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleDbDiagramGeneratorEnabled')
  - [ModuleHealthServiceEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleHealthServiceEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleHealthServiceEnabled')
  - [ModuleHealthServiceMessageOnChangeOnly](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleHealthServiceMessageOnChangeOnly 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleHealthServiceMessageOnChangeOnly')
  - [ModuleHealthServicePath](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleHealthServicePath 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleHealthServicePath')
  - [ModuleHealthServiceRefreshIntervalSec](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleHealthServiceRefreshIntervalSec 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleHealthServiceRefreshIntervalSec')
  - [ModuleMdDocumentationEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleMdDocumentationEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleMdDocumentationEnabled')
  - [ModuleSwaggerApiDocEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleSwaggerApiDocEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleSwaggerApiDocEnabled')
  - [ModuleSwaggerApiDocPath](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleSwaggerApiDocPath 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleSwaggerApiDocPath')
  - [ModuleWebDataManagerEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleWebDataManagerEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ModuleWebDataManagerEnabled')
  - [RedirectOnPageNotFound](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-RedirectOnPageNotFound 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.RedirectOnPageNotFound')
  - [RedirectPath](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-RedirectPath 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.RedirectPath')
  - [ServerCorsAllowAnyHeader](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerCorsAllowAnyHeader 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServerCorsAllowAnyHeader')
  - [ServerCorsAllowAnyMethod](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerCorsAllowAnyMethod 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServerCorsAllowAnyMethod')
  - [ServerCorsAllowAnyOrigin](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerCorsAllowAnyOrigin 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServerCorsAllowAnyOrigin')
  - [ServerCorsAllowCredentials](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerCorsAllowCredentials 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServerCorsAllowCredentials')
  - [ServerCorsEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerCorsEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServerCorsEnabled')
  - [ServerFtpEngineEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerFtpEngineEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServerFtpEngineEnabled')
  - [ServerFtpSecurityEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerFtpSecurityEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServerFtpSecurityEnabled')
  - [ServerFtpStorageRootPath](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerFtpStorageRootPath 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServerFtpStorageRootPath')
  - [ServerProviderModeEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerProviderModeEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServerProviderModeEnabled')
  - [ServerPublicUrl](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerPublicUrl 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServerPublicUrl')
  - [ServiceCoreCheckerEmailSenderActive](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServiceCoreCheckerEmailSenderActive 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServiceCoreCheckerEmailSenderActive')
  - [ServiceEnableMassEmail](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServiceEnableMassEmail 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServiceEnableMassEmail')
  - [ServiceServerLanguage](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServiceServerLanguage 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServiceServerLanguage')
  - [ServiceUseDbLocalAutoupdatedDials](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServiceUseDbLocalAutoupdatedDials 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.ServiceUseDbLocalAutoupdatedDials')
  - [WebBrowserContentEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebBrowserContentEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebBrowserContentEnabled')
  - [WebLiveDataMonitorEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebLiveDataMonitorEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebLiveDataMonitorEnabled')
  - [WebMvcPagesEngineEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebMvcPagesEngineEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebMvcPagesEngineEnabled')
  - [WebRSSFeedsEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebRSSFeedsEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebRSSFeedsEnabled')
  - [WebRazorPagesCompileOnRuntime](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebRazorPagesCompileOnRuntime 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebRazorPagesCompileOnRuntime')
  - [WebRazorPagesEngineEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebRazorPagesEngineEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebRazorPagesEngineEnabled')
  - [WebRobotTxtFileEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebRobotTxtFileEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebRobotTxtFileEnabled')
  - [WebSitemapFileEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebSitemapFileEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebSitemapFileEnabled')
  - [WebSocketEngineEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebSocketEngineEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebSocketEngineEnabled')
  - [WebSocketGlobalNotifyPath](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebSocketGlobalNotifyPath 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebSocketGlobalNotifyPath')
  - [WebSocketMaxBufferSizeKb](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebSocketMaxBufferSizeKb 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebSocketMaxBufferSizeKb')
  - [WebSocketServerMonitorEnabled](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebSocketServerMonitorEnabled 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebSocketServerMonitorEnabled')
  - [WebSocketTimeoutMin](#P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebSocketTimeoutMin 'EasyITCenter.ServerCoreStructure.ServerConfigSettings.WebSocketTimeoutMin')
- [ServerConfigurationServices](#T-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices')
  - [ConfigureAuthentication(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureAuthentication-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureAuthentication(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureCentralServicesProviders(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureCentralServicesProviders-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureCentralServicesProviders(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureControllers(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureControllers-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureControllers(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureCookie(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureCookie-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureCookie(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureDatabaseContext(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureDatabaseContext-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureDatabaseContext(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureFTPServer(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureFTPServer-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureFTPServer(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureLetsEncrypt(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureLetsEncrypt-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureLetsEncrypt(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureLogging(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureLogging-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureLogging(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureScoped(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureScoped-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureScoped(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureServerWebPages(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureServerWebPages-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureServerWebPages(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureSingletons(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureSingletons-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureSingletons(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureThirdPartyApi(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureThirdPartyApi-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureThirdPartyApi(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureTransient(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureTransient-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureTransient(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureWebSocketLoggerMonitor(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureWebSocketLoggerMonitor-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerConfigurationServices.ConfigureWebSocketLoggerMonitor(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
- [ServerCoreAutoGeneratorApi](#T-EasyITCenter-ControllersExtensions-ServerCoreAutoGeneratorApi 'EasyITCenter.ControllersExtensions.ServerCoreAutoGeneratorApi')
- [ServerCoreAutoScheduler](#T-EasyITCenter-ServerCoreStructure-ServerCoreAutoScheduler 'EasyITCenter.ServerCoreStructure.ServerCoreAutoScheduler')
- [ServerCoreLoggerWS](#T-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS 'EasyITCenter.ServerCoreDBSettings.ServerCoreLoggerWS')
  - [Echo(context,webSocket)](#M-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS-Echo-Microsoft-AspNetCore-Http-HttpContext,System-Net-WebSockets-WebSocket- 'EasyITCenter.ServerCoreDBSettings.ServerCoreLoggerWS.Echo(Microsoft.AspNetCore.Http.HttpContext,System.Net.WebSockets.WebSocket)')
  - [Get()](#M-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS-Get 'EasyITCenter.ServerCoreDBSettings.ServerCoreLoggerWS.Get')
  - [GetBySocketAPIPath(id)](#M-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS-GetBySocketAPIPath-System-String- 'EasyITCenter.ServerCoreDBSettings.ServerCoreLoggerWS.GetBySocketAPIPath(System.String)')
- [ServerCorePostFileRotatorApi](#T-EasyITCenter-ControllersExtensions-ServerCorePostFileRotatorApi 'EasyITCenter.ControllersExtensions.ServerCorePostFileRotatorApi')
  - [GetApiFileRotator(filename)](#M-EasyITCenter-ControllersExtensions-ServerCorePostFileRotatorApi-GetApiFileRotator-System-String- 'EasyITCenter.ControllersExtensions.ServerCorePostFileRotatorApi.GetApiFileRotator(System.String)')
  - [PostApiFileRotator()](#M-EasyITCenter-ControllersExtensions-ServerCorePostFileRotatorApi-PostApiFileRotator-System-Collections-Generic-List{Microsoft-AspNetCore-Http-IFormFile}- 'EasyITCenter.ControllersExtensions.ServerCorePostFileRotatorApi.PostApiFileRotator(System.Collections.Generic.List{Microsoft.AspNetCore.Http.IFormFile})')
  - [PutApiFileRotator()](#M-EasyITCenter-ControllersExtensions-ServerCorePostFileRotatorApi-PutApiFileRotator-System-Collections-Generic-List{Microsoft-AspNetCore-Http-IFormFile}- 'EasyITCenter.ControllersExtensions.ServerCorePostFileRotatorApi.PutApiFileRotator(System.Collections.Generic.List{Microsoft.AspNetCore.Http.IFormFile})')
- [ServerCoreWebHelpers](#T-EasyITCenter-ServerCoreStructure-ServerCoreWebHelpers 'EasyITCenter.ServerCoreStructure.ServerCoreWebHelpers')
  - [AddSocketConnectionToCentralList(newWebSocket,socketAPIPath)](#M-EasyITCenter-ServerCoreStructure-ServerCoreWebHelpers-AddSocketConnectionToCentralList-System-Net-WebSockets-WebSocket,System-String- 'EasyITCenter.ServerCoreStructure.ServerCoreWebHelpers.AddSocketConnectionToCentralList(System.Net.WebSockets.WebSocket,System.String)')
  - [DisposeSocketConnectionsWithTimeOut()](#M-EasyITCenter-ServerCoreStructure-ServerCoreWebHelpers-DisposeSocketConnectionsWithTimeOut 'EasyITCenter.ServerCoreStructure.ServerCoreWebHelpers.DisposeSocketConnectionsWithTimeOut')
  - [ListenClientWebSocketMessages(webSocket,socketAPIPath)](#M-EasyITCenter-ServerCoreStructure-ServerCoreWebHelpers-ListenClientWebSocketMessages-System-Net-WebSockets-WebSocket,System-String- 'EasyITCenter.ServerCoreStructure.ServerCoreWebHelpers.ListenClientWebSocketMessages(System.Net.WebSockets.WebSocket,System.String)')
  - [SendMessageAndUpdateWebSocketsInSpecificPath(socketAPIPath,message)](#M-EasyITCenter-ServerCoreStructure-ServerCoreWebHelpers-SendMessageAndUpdateWebSocketsInSpecificPath-System-String,System-String- 'EasyITCenter.ServerCoreStructure.ServerCoreWebHelpers.SendMessageAndUpdateWebSocketsInSpecificPath(System.String,System.String)')
  - [SendMessageToClientSocket(webSocket,message)](#M-EasyITCenter-ServerCoreStructure-ServerCoreWebHelpers-SendMessageToClientSocket-System-Net-WebSockets-WebSocket,System-String- 'EasyITCenter.ServerCoreStructure.ServerCoreWebHelpers.SendMessageToClientSocket(System.Net.WebSockets.WebSocket,System.String)')
- [ServerCoreWebToolsGenApi](#T-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi 'EasyITCenter.ControllersExtensions.ServerCoreWebToolsGenApi')
  - [GenerateCarouselGallery(imageList)](#M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateCarouselGallery-EasyITCenter-DBModel-UploadGeneratorFiles- 'EasyITCenter.ControllersExtensions.ServerCoreWebToolsGenApi.GenerateCarouselGallery(EasyITCenter.DBModel.UploadGeneratorFiles)')
  - [GenerateCarouselVideoGallery(videoList)](#M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateCarouselVideoGallery-EasyITCenter-DBModel-UploadGeneratorFiles- 'EasyITCenter.ControllersExtensions.ServerCoreWebToolsGenApi.GenerateCarouselVideoGallery(EasyITCenter.DBModel.UploadGeneratorFiles)')
  - [GenerateEasyGallery(imageList)](#M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateEasyGallery-EasyITCenter-DBModel-UploadGeneratorFiles- 'EasyITCenter.ControllersExtensions.ServerCoreWebToolsGenApi.GenerateEasyGallery(EasyITCenter.DBModel.UploadGeneratorFiles)')
  - [GenerateImageBook(imageList)](#M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateImageBook-EasyITCenter-DBModel-UploadGeneratorFiles- 'EasyITCenter.ControllersExtensions.ServerCoreWebToolsGenApi.GenerateImageBook(EasyITCenter.DBModel.UploadGeneratorFiles)')
  - [GenerateMdToMdBook(fileList)](#M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateMdToMdBook-EasyITCenter-DBModel-UploadGeneratorFiles- 'EasyITCenter.ControllersExtensions.ServerCoreWebToolsGenApi.GenerateMdToMdBook(EasyITCenter.DBModel.UploadGeneratorFiles)')
  - [GenerateMedialPresentation(imageList)](#M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateMedialPresentation-EasyITCenter-DBModel-UploadGeneratorFiles- 'EasyITCenter.ControllersExtensions.ServerCoreWebToolsGenApi.GenerateMedialPresentation(EasyITCenter.DBModel.UploadGeneratorFiles)')
  - [GenerateVideoPlayList(videoList)](#M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateVideoPlayList-EasyITCenter-DBModel-UploadGeneratorFiles- 'EasyITCenter.ControllersExtensions.ServerCoreWebToolsGenApi.GenerateVideoPlayList(EasyITCenter.DBModel.UploadGeneratorFiles)')
  - [GenerateXmlToMd(fileList)](#M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateXmlToMd-EasyITCenter-DBModel-UploadGeneratorFiles- 'EasyITCenter.ControllersExtensions.ServerCoreWebToolsGenApi.GenerateXmlToMd(EasyITCenter.DBModel.UploadGeneratorFiles)')
- [ServerDbDgmlSchemaApi](#T-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi 'EasyITCenter.ServerCoreDBSettings.ServerDbDgmlSchemaApi')
  - [#ctor(context)](#M-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi-#ctor-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext- 'EasyITCenter.ServerCoreDBSettings.ServerDbDgmlSchemaApi.#ctor(EasyITCenter.ServerCoreDBSettings.EasyITCenterContext)')
  - [Get()](#M-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi-Get 'EasyITCenter.ServerCoreDBSettings.ServerDbDgmlSchemaApi.Get')
  - [GetDgml()](#M-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi-GetDgml 'EasyITCenter.ServerCoreDBSettings.ServerDbDgmlSchemaApi.GetDgml')
- [ServerDocApi](#T-EasyITCenter-Controllers-ServerDocApi 'EasyITCenter.Controllers.ServerDocApi')
  - [_hostingEnvironment](#F-EasyITCenter-Controllers-ServerDocApi-_hostingEnvironment 'EasyITCenter.Controllers.ServerDocApi._hostingEnvironment')
  - [GenerateMdBook()](#M-EasyITCenter-Controllers-ServerDocApi-GenerateMdBook 'EasyITCenter.Controllers.ServerDocApi.GenerateMdBook')
- [ServerDynamicSqlApi](#T-EasyITCenter-ServerCoreDBSettings-ServerDynamicSqlApi 'EasyITCenter.ServerCoreDBSettings.ServerDynamicSqlApi')
- [ServerEmailerApi](#T-EasyITCenter-ServerCoreDBSettings-ServerEmailerApi 'EasyITCenter.ServerCoreDBSettings.ServerEmailerApi')
- [ServerEnablingServices](#T-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices 'EasyITCenter.ServerCoreConfiguration.ServerEnablingServices')
  - [EnableCors()](#M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableCors-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerEnablingServices.EnableCors(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableEndpoints()](#M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableEndpoints-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerEnablingServices.EnableEndpoints(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableLogging()](#M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableLogging-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerEnablingServices.EnableLogging(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableWebSocket(app)](#M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableWebSocket-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerEnablingServices.EnableWebSocket(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
- [ServerLocalDbDials](#T-EasyITCenter-ServerCoreStructure-ServerLocalDbDials 'EasyITCenter.ServerCoreStructure.ServerLocalDbDials')
- [ServerManagementApi](#T-EasyITCenter-ServerCoreDBSettings-ServerManagementApi 'EasyITCenter.ServerCoreDBSettings.ServerManagementApi')
  - [FtpServerStart()](#M-EasyITCenter-ServerCoreDBSettings-ServerManagementApi-FtpServerStart 'EasyITCenter.ServerCoreDBSettings.ServerManagementApi.FtpServerStart')
  - [FtpServerStop()](#M-EasyITCenter-ServerCoreDBSettings-ServerManagementApi-FtpServerStop 'EasyITCenter.ServerCoreDBSettings.ServerManagementApi.FtpServerStop')
  - [ServerRestart()](#M-EasyITCenter-ServerCoreDBSettings-ServerManagementApi-ServerRestart 'EasyITCenter.ServerCoreDBSettings.ServerManagementApi.ServerRestart')
  - [ServerSchedulerStart()](#M-EasyITCenter-ServerCoreDBSettings-ServerManagementApi-ServerSchedulerStart 'EasyITCenter.ServerCoreDBSettings.ServerManagementApi.ServerSchedulerStart')
- [ServerMarkDownApi](#T-EasyITCenter-ServerCoreDBSettings-ServerMarkDownApi 'EasyITCenter.ServerCoreDBSettings.ServerMarkDownApi')
- [ServerModules](#T-EasyITCenter-ServerCoreConfiguration-ServerModules 'EasyITCenter.ServerCoreConfiguration.ServerModules')
  - [ConfigureDBEntitySchema(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureDBEntitySchema-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerModules.ConfigureDBEntitySchema(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureDocumentation(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureDocumentation-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerModules.ConfigureDocumentation(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureGitServer(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureGitServer-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerModules.ConfigureGitServer(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureHealthCheck(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureHealthCheck-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerModules.ConfigureHealthCheck(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureLiveDataMonitor(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureLiveDataMonitor-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerModules.ConfigureLiveDataMonitor(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureMarkdownAsHtmlFiles(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureMarkdownAsHtmlFiles-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerModules.ConfigureMarkdownAsHtmlFiles(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureScheduler(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureScheduler-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerModules.ConfigureScheduler(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
  - [ConfigureSwagger(services)](#M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureSwagger-Microsoft-Extensions-DependencyInjection-IServiceCollection@- 'EasyITCenter.ServerCoreConfiguration.ServerModules.ConfigureSwagger(Microsoft.Extensions.DependencyInjection.IServiceCollection@)')
- [ServerModulesEnabling](#T-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling 'EasyITCenter.ServerCoreConfiguration.ServerModulesEnabling')
  - [EnableDBEntitySchema()](#M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableDBEntitySchema-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerModulesEnabling.EnableDBEntitySchema(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableDocumentation()](#M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableDocumentation-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerModulesEnabling.EnableDocumentation(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableLiveDataMonitor()](#M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableLiveDataMonitor-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerModulesEnabling.EnableLiveDataMonitor(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableMarkdownAsHtmlFiles(app)](#M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableMarkdownAsHtmlFiles-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerModulesEnabling.EnableMarkdownAsHtmlFiles(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
  - [EnableSwagger()](#M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableSwagger-Microsoft-AspNetCore-Builder-IApplicationBuilder@- 'EasyITCenter.ServerCoreConfiguration.ServerModulesEnabling.EnableSwagger(Microsoft.AspNetCore.Builder.IApplicationBuilder@)')
- [ServerOpenGraphApi](#T-EasyITCenter-ServerCoreDBSettings-ServerOpenGraphApi 'EasyITCenter.ServerCoreDBSettings.ServerOpenGraphApi')
  - [GetFromUrl(request)](#M-EasyITCenter-ServerCoreDBSettings-ServerOpenGraphApi-GetFromUrl-EasyITCenter-DBModel-WebUrlRequest- 'EasyITCenter.ServerCoreDBSettings.ServerOpenGraphApi.GetFromUrl(EasyITCenter.DBModel.WebUrlRequest)')
- [ServerRssFeedApi](#T-EasyITCenter-ServerCoreDBSettings-ServerRssFeedApi 'EasyITCenter.ServerCoreDBSettings.ServerRssFeedApi')
- [ServerRuntimeData](#T-EasyITCenter-ServerCoreStructure-ServerRuntimeData 'EasyITCenter.ServerCoreStructure.ServerRuntimeData')
  - [CentralWebSocketList](#F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-CentralWebSocketList 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.CentralWebSocketList')
  - [FileRotatorRuntineLibrary](#F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-FileRotatorRuntineLibrary 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.FileRotatorRuntineLibrary')
  - [LocalDBTableList](#F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-LocalDBTableList 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.LocalDBTableList')
  - [ServerArgs](#F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerArgs 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.ServerArgs')
  - [ServerAutoSchedulerProvider](#F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerAutoSchedulerProvider 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.ServerAutoSchedulerProvider')
  - [ServerCancelToken](#F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerCancelToken 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.ServerCancelToken')
  - [ServerCoreStatus](#F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerCoreStatus 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.ServerCoreStatus')
  - [ServerFTPProvider](#F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerFTPProvider 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.ServerFTPProvider')
  - [ServerRestartRequest](#F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerRestartRequest 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.ServerRestartRequest')
  - [ServerServiceProvider](#F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerServiceProvider 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.ServerServiceProvider')
  - [ConfigFile](#P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ConfigFile 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.ConfigFile')
  - [ContentRootPath](#P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ContentRootPath 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.ContentRootPath')
  - [DataPath](#P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-DataPath 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.DataPath')
  - [DebugMode](#P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-DebugMode 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.DebugMode')
  - [Setting_folder](#P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-Setting_folder 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.Setting_folder')
  - [Startup_path](#P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-Startup_path 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.Startup_path')
  - [UserPath](#P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-UserPath 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.UserPath')
  - [WebRoot_path](#P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-WebRoot_path 'EasyITCenter.ServerCoreStructure.ServerRuntimeData.WebRoot_path')
- [ServerStatuses](#T-EasyITCenter-ServerCoreStructure-ServerStatuses 'EasyITCenter.ServerCoreStructure.ServerStatuses')
- [ServerSystemControlApi](#T-EasyITCenter-ServerCoreDBSettings-ServerSystemControlApi 'EasyITCenter.ServerCoreDBSettings.ServerSystemControlApi')
- [ServerToolsMinifierApi](#T-EasyITCenter-ControllersExtensions-ServerToolsMinifierApi 'EasyITCenter.ControllersExtensions.ServerToolsMinifierApi')
  - [MinifyAndReturn(filelist)](#M-EasyITCenter-ControllersExtensions-ServerToolsMinifierApi-MinifyAndReturn-EasyITCenter-ServerCoreWebPages-WebFileList- 'EasyITCenter.ControllersExtensions.ServerToolsMinifierApi.MinifyAndReturn(EasyITCenter.ServerCoreWebPages.WebFileList)')
  - [MinifyAndSaveMinToPath(filelist)](#M-EasyITCenter-ControllersExtensions-ServerToolsMinifierApi-MinifyAndSaveMinToPath-EasyITCenter-ServerCoreWebPages-WebFileList- 'EasyITCenter.ControllersExtensions.ServerToolsMinifierApi.MinifyAndSaveMinToPath(EasyITCenter.ServerCoreWebPages.WebFileList)')
- [ServerWebPagesExportApi](#T-EasyITCenter-ServerCoreDBSettings-ServerWebPagesExportApi 'EasyITCenter.ServerCoreDBSettings.ServerWebPagesExportApi')
  - [ExportMinimalStaticWebPages()](#M-EasyITCenter-ServerCoreDBSettings-ServerWebPagesExportApi-ExportMinimalStaticWebPages 'EasyITCenter.ServerCoreDBSettings.ServerWebPagesExportApi.ExportMinimalStaticWebPages')
  - [ExportXamlCz()](#M-EasyITCenter-ServerCoreDBSettings-ServerWebPagesExportApi-ExportXamlCz 'EasyITCenter.ServerCoreDBSettings.ServerWebPagesExportApi.ExportXamlCz')
  - [ExportXamlEn()](#M-EasyITCenter-ServerCoreDBSettings-ServerWebPagesExportApi-ExportXamlEn 'EasyITCenter.ServerCoreDBSettings.ServerWebPagesExportApi.ExportXamlEn')
- [ServerWebPagesLogin](#T-EasyITCenter-ServerCoreWebPages-ServerWebPagesLogin 'EasyITCenter.ServerCoreWebPages.ServerWebPagesLogin')
- [ServerWebPagesToken](#T-EasyITCenter-ServerCoreWebPages-ServerWebPagesToken 'EasyITCenter.ServerCoreWebPages.ServerWebPagesToken')
- [ServerWebProviderGetOnlyApi](#T-EasyITCenter-ServerCoreDBSettings-ServerWebProviderGetOnlyApi 'EasyITCenter.ServerCoreDBSettings.ServerWebProviderGetOnlyApi')
  - [GetManagedCssJsScriptList()](#M-EasyITCenter-ServerCoreDBSettings-ServerWebProviderGetOnlyApi-GetManagedCssJsScriptList 'EasyITCenter.ServerCoreDBSettings.ServerWebProviderGetOnlyApi.GetManagedCssJsScriptList')
  - [GetSolutionToolList()](#M-EasyITCenter-ServerCoreDBSettings-ServerWebProviderGetOnlyApi-GetSolutionToolList 'EasyITCenter.ServerCoreDBSettings.ServerWebProviderGetOnlyApi.GetSolutionToolList')
  - [GetTemplateWebMenuList()](#M-EasyITCenter-ServerCoreDBSettings-ServerWebProviderGetOnlyApi-GetTemplateWebMenuList 'EasyITCenter.ServerCoreDBSettings.ServerWebProviderGetOnlyApi.GetTemplateWebMenuList')
- [ServerWebsiteStaticFilesApi](#T-UploadFilesServer-Controllers-ServerWebsiteStaticFilesApi 'UploadFilesServer.Controllers.ServerWebsiteStaticFilesApi')
  - [GetFiles(request)](#M-UploadFilesServer-Controllers-ServerWebsiteStaticFilesApi-GetFiles-EasyITCenter-DBModel-StaticFilesRequest- 'UploadFilesServer.Controllers.ServerWebsiteStaticFilesApi.GetFiles(EasyITCenter.DBModel.StaticFilesRequest)')
- [SetReportFilter](#T-EasyITCenter-DBModel-SetReportFilter 'EasyITCenter.DBModel.SetReportFilter')
- [SitemapController](#T-EasyITCenter-ServerCoreDBSettings-SitemapController 'EasyITCenter.ServerCoreDBSettings.SitemapController')
- [SoftwareTriggers](#T-EasyITCenter-ControllersExtensions-SoftwareTriggers 'EasyITCenter.ControllersExtensions.SoftwareTriggers')
  - [WriteVisit(ipAddress,userId,userName)](#M-EasyITCenter-ControllersExtensions-SoftwareTriggers-WriteVisit-System-String,System-Int32,System-String- 'EasyITCenter.ControllersExtensions.SoftwareTriggers.WriteVisit(System.String,System.Int32,System.String)')
  - [WriteWebVisit(ipAddress)](#M-EasyITCenter-ControllersExtensions-SoftwareTriggers-WriteWebVisit-System-String- 'EasyITCenter.ControllersExtensions.SoftwareTriggers.WriteWebVisit(System.String)')
- [SomeRSSProvider](#T-EasyITCenter-ServerCoreDBSettings-SomeRSSProvider 'EasyITCenter.ServerCoreDBSettings.SomeRSSProvider')
- [Startup](#T-EasyITCenter-Startup 'EasyITCenter.Startup')
  - [Configure(app,serverLifetime)](#M-EasyITCenter-Startup-Configure-Microsoft-AspNetCore-Builder-IApplicationBuilder,Microsoft-Extensions-Hosting-IHostApplicationLifetime- 'EasyITCenter.Startup.Configure(Microsoft.AspNetCore.Builder.IApplicationBuilder,Microsoft.Extensions.Hosting.IHostApplicationLifetime)')
  - [ConfigureServices(services)](#M-EasyITCenter-Startup-ConfigureServices-Microsoft-Extensions-DependencyInjection-IServiceCollection- 'EasyITCenter.Startup.ConfigureServices(Microsoft.Extensions.DependencyInjection.IServiceCollection)')
  - [ServerOnStarted()](#M-EasyITCenter-Startup-ServerOnStarted 'EasyITCenter.Startup.ServerOnStarted')
- [StdAuthGenericProviderApi\`3](#T-EasyITCenter-ServerCoreDBSettings-StdAuthGenericProviderApi`3 'EasyITCenter.ServerCoreDBSettings.StdAuthGenericProviderApi`3')
- [StdFreeGenericProviderApi\`3](#T-EasyITCenter-ServerCoreDBSettings-StdFreeGenericProviderApi`3 'EasyITCenter.ServerCoreDBSettings.StdFreeGenericProviderApi`3')
- [SystemBuilderOnlinePreviewApi](#T-EasyITCenter-ServerCoreDBSettings-SystemBuilderOnlinePreviewApi 'EasyITCenter.ServerCoreDBSettings.SystemBuilderOnlinePreviewApi')
  - [GetWebBuilderCodePreview()](#M-EasyITCenter-ServerCoreDBSettings-SystemBuilderOnlinePreviewApi-GetWebBuilderCodePreview-System-Int32- 'EasyITCenter.ServerCoreDBSettings.SystemBuilderOnlinePreviewApi.GetWebBuilderCodePreview(System.Int32)')
  - [GetWebBuilderGlobalBodyBlockPreview(id)](#M-EasyITCenter-ServerCoreDBSettings-SystemBuilderOnlinePreviewApi-GetWebBuilderGlobalBodyBlockPreview-System-Int32- 'EasyITCenter.ServerCoreDBSettings.SystemBuilderOnlinePreviewApi.GetWebBuilderGlobalBodyBlockPreview(System.Int32)')
  - [GetWebBuilderMenuPreview(id)](#M-EasyITCenter-ServerCoreDBSettings-SystemBuilderOnlinePreviewApi-GetWebBuilderMenuPreview-System-Int32- 'EasyITCenter.ServerCoreDBSettings.SystemBuilderOnlinePreviewApi.GetWebBuilderMenuPreview(System.Int32)')
- [SystemOperationMessage](#T-EasyITCenter-DBModel-SystemOperationMessage 'EasyITCenter.DBModel.SystemOperationMessage')
- [SystemStdAuthGenericProviderApi\`3](#T-EasyITCenter-ServerCoreDBSettings-SystemStdAuthGenericProviderApi`3 'EasyITCenter.ServerCoreDBSettings.SystemStdAuthGenericProviderApi`3')
- [SystemStdFreeGenericProviderApi\`3](#T-EasyITCenter-ServerCoreDBSettings-SystemStdFreeGenericProviderApi`3 'EasyITCenter.ServerCoreDBSettings.SystemStdFreeGenericProviderApi`3')
- [SystemWebDocApi](#T-EasyITCenter-Controllers-SystemWebDocApi 'EasyITCenter.Controllers.SystemWebDocApi')
  - [_hostingEnvironment](#F-EasyITCenter-Controllers-SystemWebDocApi-_hostingEnvironment 'EasyITCenter.Controllers.SystemWebDocApi._hostingEnvironment')
  - [GetMdDocumentPreview()](#M-EasyITCenter-Controllers-SystemWebDocApi-GetMdDocumentPreview-System-Int32- 'EasyITCenter.Controllers.SystemWebDocApi.GetMdDocumentPreview(System.Int32)')
  - [GetMdLibraryPreview()](#M-EasyITCenter-Controllers-SystemWebDocApi-GetMdLibraryPreview-System-Int32- 'EasyITCenter.Controllers.SystemWebDocApi.GetMdLibraryPreview(System.Int32)')
- [UploadFileData](#T-EasyITCenter-DBModel-UploadFileData 'EasyITCenter.DBModel.UploadFileData')
- [UploadGeneratorFiles](#T-EasyITCenter-DBModel-UploadGeneratorFiles 'EasyITCenter.DBModel.UploadGeneratorFiles')
- [UserConfig](#T-EasyITCenter-ServerCoreWebPages-UserConfig 'EasyITCenter.ServerCoreWebPages.UserConfig')
- [WebMessage](#T-EasyITCenter-ServerCoreWebPages-WebMessage 'EasyITCenter.ServerCoreWebPages.WebMessage')
- [WebPagesAdminGroupMenuListApi](#T-EasyITCenter-Controllers-WebPagesAdminGroupMenuListApi 'EasyITCenter.Controllers.WebPagesAdminGroupMenuListApi')
  - [DeleteWebGroupMenuList(id)](#M-EasyITCenter-Controllers-WebPagesAdminGroupMenuListApi-DeleteWebGroupMenuList-System-String- 'EasyITCenter.Controllers.WebPagesAdminGroupMenuListApi.DeleteWebGroupMenuList(System.String)')
  - [InsertOrUpdateGroupWebMenuList(record)](#M-EasyITCenter-Controllers-WebPagesAdminGroupMenuListApi-InsertOrUpdateGroupWebMenuList-EasyITCenter-ServerCoreWebPages-WebSettingList1- 'EasyITCenter.Controllers.WebPagesAdminGroupMenuListApi.InsertOrUpdateGroupWebMenuList(EasyITCenter.ServerCoreWebPages.WebSettingList1)')
- [WebPagesMessagesListApi](#T-EasyITCenter-Controllers-WebPagesMessagesListApi 'EasyITCenter.Controllers.WebPagesMessagesListApi')
  - [GetWebPageMessagesList()](#M-EasyITCenter-Controllers-WebPagesMessagesListApi-GetWebPageMessagesList 'EasyITCenter.Controllers.WebPagesMessagesListApi.GetWebPageMessagesList')
  - [InsertWebPageMessagesList(webdata)](#M-EasyITCenter-Controllers-WebPagesMessagesListApi-InsertWebPageMessagesList-EasyITCenter-ServerCoreWebPages-WebMessage- 'EasyITCenter.Controllers.WebPagesMessagesListApi.InsertWebPageMessagesList(EasyITCenter.ServerCoreWebPages.WebMessage)')
- [WebPagesSystemDataGetOnlyApi](#T-EasyITCenter-ServerCoreDBSettings-WebPagesSystemDataGetOnlyApi 'EasyITCenter.ServerCoreDBSettings.WebPagesSystemDataGetOnlyApi')
  - [GetDeveloperNewsList(rec)](#M-EasyITCenter-ServerCoreDBSettings-WebPagesSystemDataGetOnlyApi-GetDeveloperNewsList 'EasyITCenter.ServerCoreDBSettings.WebPagesSystemDataGetOnlyApi.GetDeveloperNewsList')
  - [GetMottoList()](#M-EasyITCenter-ServerCoreDBSettings-WebPagesSystemDataGetOnlyApi-GetMottoList 'EasyITCenter.ServerCoreDBSettings.WebPagesSystemDataGetOnlyApi.GetMottoList')
- [WebPagesSystemToolsApi](#T-EasyITCenter-ServerCoreDBSettings-WebPagesSystemToolsApi 'EasyITCenter.ServerCoreDBSettings.WebPagesSystemToolsApi')
  - [SaveNewMinifiedFile(rec)](#M-EasyITCenter-ServerCoreDBSettings-WebPagesSystemToolsApi-SaveNewMinifiedFile-EasyITCenter-ServerCoreWebPages-MinifiedFile- 'EasyITCenter.ServerCoreDBSettings.WebPagesSystemToolsApi.SaveNewMinifiedFile(EasyITCenter.ServerCoreWebPages.MinifiedFile)')
- [WebPagesUserApi](#T-EasyITCenter-ServerCoreDBSettings-WebPagesUserApi 'EasyITCenter.ServerCoreDBSettings.WebPagesUserApi')
  - [PostSendVerifyCode(email)](#M-EasyITCenter-ServerCoreDBSettings-WebPagesUserApi-PostSendVerifyCode-EasyITCenter-ServerCoreWebPages-EmailVerification- 'EasyITCenter.ServerCoreDBSettings.WebPagesUserApi.PostSendVerifyCode(EasyITCenter.ServerCoreWebPages.EmailVerification)')
- [WebRegistration](#T-EasyITCenter-ServerCoreWebPages-WebRegistration 'EasyITCenter.ServerCoreWebPages.WebRegistration')
- [WebSocketExtension](#T-EasyITCenter-ServerCoreStructure-WebSocketExtension 'EasyITCenter.ServerCoreStructure.WebSocketExtension')
- [WebSocketLogProvider](#T-EasyITCenter-ServerCoreStructure-WebSocketLogProvider 'EasyITCenter.ServerCoreStructure.WebSocketLogProvider')
- [WebSocketLogger](#T-EasyITCenter-ServerCoreStructure-WebSocketLogger 'EasyITCenter.ServerCoreStructure.WebSocketLogger')
  - [Log\`\`1(logLevel,eventId,state,exception,formatter)](#M-EasyITCenter-ServerCoreStructure-WebSocketLogger-Log``1-Microsoft-Extensions-Logging-LogLevel,Microsoft-Extensions-Logging-EventId,``0,System-Exception,System-Func{``0,System-Exception,System-String}- 'EasyITCenter.ServerCoreStructure.WebSocketLogger.Log``1(Microsoft.Extensions.Logging.LogLevel,Microsoft.Extensions.Logging.EventId,``0,System.Exception,System.Func{``0,System.Exception,System.String})')
- [WebToolsOperations](#T-EasyITCenter-ServerCoreStructure-WebToolsOperations 'EasyITCenter.ServerCoreStructure.WebToolsOperations')
  - [DeleteWebSourceFile(hostingEnvironment,record)](#M-EasyITCenter-ServerCoreStructure-WebToolsOperations-DeleteWebSourceFile-Microsoft-AspNetCore-Hosting-IHostingEnvironment@,EasyITCenter-DBModel-WebCoreFileList@- 'EasyITCenter.ServerCoreStructure.WebToolsOperations.DeleteWebSourceFile(Microsoft.AspNetCore.Hosting.IHostingEnvironment@,EasyITCenter.DBModel.WebCoreFileList@)')
  - [SaveWebSourceFile(hostingEnvironment,record)](#M-EasyITCenter-ServerCoreStructure-WebToolsOperations-SaveWebSourceFile-Microsoft-AspNetCore-Hosting-IHostingEnvironment@,EasyITCenter-DBModel-WebCoreFileList@- 'EasyITCenter.ServerCoreStructure.WebToolsOperations.SaveWebSourceFile(Microsoft.AspNetCore.Hosting.IHostingEnvironment@,EasyITCenter.DBModel.WebCoreFileList@)')
- [WorkFlowContext](#T-EasyITCenter-ServerCoreDBSettings-WorkFlowContext 'EasyITCenter.ServerCoreDBSettings.WorkFlowContext')
- [WorkflowContextExtensions](#T-EasyITCenter-ServerCoreDBSettings-WorkflowContextExtensions 'EasyITCenter.ServerCoreDBSettings.WorkflowContextExtensions')

<a name='T-EasyITCenter-DBModel-AuthenticateResponse'></a>
## AuthenticateResponse `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

The authenticate response.

<a name='P-EasyITCenter-DBModel-AuthenticateResponse-Expiration'></a>
### Expiration `property`

##### Summary

Gets or Sets the expiration.

<a name='P-EasyITCenter-DBModel-AuthenticateResponse-Id'></a>
### Id `property`

##### Summary

Gets or Sets the id.

<a name='P-EasyITCenter-DBModel-AuthenticateResponse-Name'></a>
### Name `property`

##### Summary

Gets or Sets the name.

<a name='P-EasyITCenter-DBModel-AuthenticateResponse-Role'></a>
### Role `property`

##### Summary

Gets or Sets the role.

<a name='P-EasyITCenter-DBModel-AuthenticateResponse-Surname'></a>
### Surname `property`

##### Summary

Gets or Sets the surname.

<a name='P-EasyITCenter-DBModel-AuthenticateResponse-Token'></a>
### Token `property`

##### Summary

Gets or Sets the token.

<a name='T-EasyITCenter-DBModel-AutoGenConnectionString'></a>
## AutoGenConnectionString `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Custom Class For Check ConnectionString

<a name='T-EasyITCenter-DBModel-AutoGenRequest'></a>
## AutoGenRequest `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Custom Class For Server Generator Request Monitoring

<a name='T-EasyITCenter-ServerCoreStructure-AutoScheduledJob'></a>
## AutoScheduledJob `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

Autoscheduler Process Scheduled Task 
definitions

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [T:EasyITCenter.ServerCoreStructure.AutoScheduledJob](#T-T-EasyITCenter-ServerCoreStructure-AutoScheduledJob 'T:EasyITCenter.ServerCoreStructure.AutoScheduledJob') |  |

<a name='T-EasyITCenter-BackendServer'></a>
## BackendServer `type`

##### Namespace

EasyITCenter

##### Summary

Server Main Definition Starting Point Of Project

<a name='F-EasyITCenter-BackendServer-ServerConfigSettings'></a>
### ServerConfigSettings `constants`

##### Summary

Startup Server Initialization Server Setting Data

<a name='F-EasyITCenter-BackendServer-ServerRuntimeData'></a>
### ServerRuntimeData `constants`

##### Summary

Startup Server Initialization Server Runtime Data

<a name='M-EasyITCenter-BackendServer-BuildWebHost-System-String[]-'></a>
### BuildWebHost(args) `method`

##### Summary

Final Preparing Server HostBuilder Definition Exit 10 Is missing or Format Problem with
Configuration File

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | [System.String[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String[] 'System.String[]') |  |

<a name='M-EasyITCenter-BackendServer-CheckLicense'></a>
### CheckLicense() `method`

##### Summary

Checking Valid License on StartUp

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-BackendServer-LoadConfigurationFromDb'></a>
### LoadConfigurationFromDb() `method`

##### Summary

Server Core: Load Configuration From Database First Must be From File With DB
Connection, Others File Settings than DBconnection is Optional

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-BackendServer-LoadConfigurationFromFile'></a>
### LoadConfigurationFromFile() `method`

##### Summary

Server Core: Load Configuration From Config File In Startup Folder/Data/config.json

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-BackendServer-Main-System-String[]-'></a>
### Main(args) `method`

##### Summary

Server Startup Process

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | [System.String[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String[] 'System.String[]') |  |

<a name='M-EasyITCenter-BackendServer-RestartServer'></a>
### RestartServer() `method`

##### Summary

Server Restart Controller

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-BackendServer-ServerStartupDbDataLoading'></a>
### ServerStartupDbDataLoading() `method`

##### Summary

Server Startup DB Data loading for minimize DB Connect TO Frequency Dials Without
Changes With Full Auto Filling Non Exist Records
Example: LanguageList

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-BackendServer-StartServer'></a>
### StartServer() `method`

##### Summary

Server Start Controller

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-DBModel-CarouselImage'></a>
## CarouselImage `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Generator Carousel Image Class

<a name='T-EasyITCenter-DBModel-CarouselVideo'></a>
## CarouselVideo `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Generator Carousel Video Class

<a name='T-EasyITCenter-ServerCoreStructure-CommunicationController'></a>
## CommunicationController `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

Server Communication Extensions for Controlling Data Implmented FullUserTokenData For More
Info Modify Auth Claims And Add Get Info Here

<a name='M-EasyITCenter-ServerCoreStructure-CommunicationController-GetUserId'></a>
### GetUserId() `method`

##### Summary

Get UserId

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreStructure-CommunicationController-GetUserName'></a>
### GetUserName() `method`

##### Summary

Get UserName

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreStructure-CommunicationController-GetUserRole'></a>
### GetUserRole() `method`

##### Summary

Get UserRole

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreStructure-CommunicationController-IsAdmin'></a>
### IsAdmin() `method`

##### Summary

Extension for check Admin Role

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreStructure-CommunicationController-IsLogged'></a>
### IsLogged() `method`

##### Summary

Check HTTP if is the Request Logged

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreStructure-CommunicationController-IsSystemUser'></a>
### IsSystemUser() `method`

##### Summary

Extension for check user Role

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreStructure-CommunicationController-IsWebUser'></a>
### IsWebUser() `method`

##### Summary

Extension for check webuser Role

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreStructure-CoreOperations'></a>
## CoreOperations `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

Specific Server Core Operations Library

<a name='M-EasyITCenter-ServerCoreStructure-CoreOperations-CallGetApiUrl-System-String-'></a>
### CallGetApiUrl(url) `method`

##### Summary

Calls the GET API URL with string Response

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| url | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The URL. |

<a name='M-EasyITCenter-ServerCoreStructure-CoreOperations-CheckTokenValidityFromString-System-String-'></a>
### CheckTokenValidityFromString(tokenString) `method`

##### Summary

Token Validator Extension For Server WebPages

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenString | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The token string. |

<a name='M-EasyITCenter-ServerCoreStructure-CoreOperations-GetSelfSignedCertificate-System-String-'></a>
### GetSelfSignedCertificate(password) `method`

##### Summary

Gets the self signed certificate For API Security HTTPS.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The password. |

<a name='M-EasyITCenter-ServerCoreStructure-CoreOperations-GetSelfSignedCertificateFromFile-System-String-'></a>
### GetSelfSignedCertificateFromFile() `method`

##### Summary

Set Imported Certificate from file on Server for Https File must has Valid path from
Startup Data Path

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreStructure-CoreOperations-RunSystemProcess-EasyITCenter-ServerCoreStructure-ProcessClass-'></a>
### RunSystemProcess(processDefinition) `method`

##### Summary

Server Function For Running External Processes

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| processDefinition | [EasyITCenter.ServerCoreStructure.ProcessClass](#T-EasyITCenter-ServerCoreStructure-ProcessClass 'EasyITCenter.ServerCoreStructure.ProcessClass') | The process definition. |

<a name='M-EasyITCenter-ServerCoreStructure-CoreOperations-SendEmail-EasyITCenter-ServerCoreStructure-MailRequest,System-Boolean-'></a>
### SendEmail(mailRequest,sendImmediately) `method`

##### Summary

System Mailer sending Emails To service email with detected fail for analyze and
corrections on the Way provide better services every time !!! This You can implement
everywhere, !!! In Debug mode is written to Console, in Release will be sent email Empty
Sender And Recipients set email for Service Recipient

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mailRequest | [EasyITCenter.ServerCoreStructure.MailRequest](#T-EasyITCenter-ServerCoreStructure-MailRequest 'EasyITCenter.ServerCoreStructure.MailRequest') |  |
| sendImmediately | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') |  |

<a name='M-EasyITCenter-ServerCoreStructure-CoreOperations-SendMassEmail-System-Collections-Generic-List{EasyITCenter-ServerCoreStructure-MailRequest}-'></a>
### SendMassEmail(mailRequests) `method`

##### Summary

Sends the mass mail.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mailRequests | [System.Collections.Generic.List{EasyITCenter.ServerCoreStructure.MailRequest}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.List 'System.Collections.Generic.List{EasyITCenter.ServerCoreStructure.MailRequest}') | The mail requests. |

<a name='M-EasyITCenter-ServerCoreStructure-CoreOperations-ValidAndGetTokenParameters'></a>
### ValidAndGetTokenParameters() `method`

##### Summary

Server Token Validation Parameters definition For Api is Used if is ON/Off for Api is On everyTime

##### Returns



##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser'></a>
## CustomFtpUser `type`

##### Namespace

EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider

##### Summary

Custom FTP user implementation

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-#ctor-System-String-'></a>
### #ctor(name) `constructor`

##### Summary

Initializes a new instance of the [CustomFtpUser](#T-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser 'EasyITCenter.ServerCoreServers.HostedFtpServerMembershipProvider.CustomFtpUser') instance.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The user name |

<a name='P-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-Name'></a>
### Name `property`

##### Summary

*Inherit from parent.*

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-CustomFtpUser-IsInGroup-System-String-'></a>
### IsInGroup() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-DBModel-CustomString'></a>
## CustomString `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Custom Definition for Returning string List from Stored Procedures Name is ColumnName from
Stored Procedure Result

<a name='T-EasyITCenter-DBModel-DBResult'></a>
## DBResult `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Database response types definition

<a name='T-EasyITCenter-DBModel-DBResultMessage'></a>
## DBResultMessage `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

The DB result message.

<a name='P-EasyITCenter-DBModel-DBResultMessage-ErrorMessage'></a>
### ErrorMessage `property`

##### Summary

Gets or Sets the error message.

<a name='P-EasyITCenter-DBModel-DBResultMessage-InsertedId'></a>
### InsertedId `property`

##### Summary

Gets or Sets the inserted id.

<a name='P-EasyITCenter-DBModel-DBResultMessage-RecordCount'></a>
### RecordCount `property`

##### Summary

Gets or Sets the record count.

<a name='P-EasyITCenter-DBModel-DBResultMessage-Status'></a>
### Status `property`

##### Summary

Gets or Sets the status.

<a name='T-EasyITCenter-ServerCoreWebPages-DBWebApiResponses'></a>
## DBWebApiResponses `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

WebApi Responses

<a name='T-EasyITCenter-ServerCoreStructure-DataOperations'></a>
## DataOperations `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

Data Formating and similar Operations Library

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-ConvertGenericClassToStandard``1-``0-'></a>
### ConvertGenericClassToStandard\`\`1(data) `method`

##### Summary

Convert Generic Tabla To Standard Table For Use Standard System Fields

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | [\`\`0](#T-``0 '``0') |  |

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T |  |

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-FirstCharToLowerCase-System-String-'></a>
### FirstCharToLowerCase(str) `method`

##### Summary

Change First Character of String

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| str | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The string. |

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-GetByteArrayFrom64Encode-System-String-'></a>
### GetByteArrayFrom64Encode(strContent) `method`

##### Summary

Separate ByteArray from 64 encode file For inserted file types

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| strContent | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Content of the string. |

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-GetSystemErrMessage-System-Exception,System-Int32-'></a>
### GetSystemErrMessage(exception,msgCount) `method`

##### Summary

Mined-ed Error Message For System Save to Database For Simple Solving Problem

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') |  |
| msgCount | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-GetUserApiErrMessage-System-Exception,System-Int32-'></a>
### GetUserApiErrMessage(exception,msgCount) `method`

##### Summary

Mined-ed Error Message For Answer in API Error Response with detailed info about problem

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| exception | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') |  |
| msgCount | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-IsValidEmail-System-String-'></a>
### IsValidEmail(email) `method`

##### Summary

Determines whether [is valid email] [the specified email].

##### Returns

`true` if [is valid email] [the specified email]; otherwise, `false`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| email | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The email. |

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-MarkDownLineEndSpacesResolve-System-String-'></a>
### MarkDownLineEndSpacesResolve(input) `method`

##### Summary

MarkDown Global Resolve End Spaces Characters On Insert/Update API CALS of Managing

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| input | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The input. |

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-RandomString-System-Int32-'></a>
### RandomString(length) `method`

##### Summary

Randoms the string.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| length | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | The length. |

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-RemoveDiacritism-System-String-'></a>
### RemoveDiacritism(Text) `method`

##### Summary

Remove Diactritics

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Text | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-RemoveWhitespace-System-String-'></a>
### RemoveWhitespace(input) `method`

##### Summary

Removes the whitespace from the String.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| input | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The input. |

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-StringToUTF8-System-String-'></a>
### StringToUTF8(text) `method`

##### Summary

Convert String to UTF8

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| text | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-UnicodeToUTF8-System-String-'></a>
### UnicodeToUTF8(strFrom) `method`

##### Summary

Unicodes to ut f8.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| strFrom | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The string from. |

<a name='M-EasyITCenter-ServerCoreStructure-DataOperations-Utf8toUnicode-System-String-'></a>
### Utf8toUnicode(utf8String) `method`

##### Summary

Convert UTF8 to UNICODE

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| utf8String | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='T-EasyITCenter-ServerCoreDBSettings-DatabaseContextExtensions'></a>
## DatabaseContextExtensions `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Database Context Extensions for All Types Procedures For Retun Data in procedure can be
Simple SELECT * XXX and you Create Same Class for returned DataSet

<a name='T-EasyITCenter-ServerCoreStructure-DbOperations'></a>
## DbOperations `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

All Server Definitions of Database Operation method

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-BindList``1-System-Data-DataTable-'></a>
### BindList\`\`1(dt) `method`

##### Summary

Extension For Using Custom Defined Tables from Database Procedures Its used as Database
Context Extension as 'CollectionFromSql' Method in Database Context

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| dt | [System.Data.DataTable](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Data.DataTable 'System.Data.DataTable') | The dt. |

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T |  |

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-CheckServerModuleExists-System-String-'></a>
### CheckServerModuleExists(word,language) `method`

##### Summary

Default Operation for Call CHEckModuleExist

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| word | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-CheckServerModuleOffline-System-String-'></a>
### CheckServerModuleOffline(modulePath) `method`

##### Summary

Get Check ServerModule from OneTime Load Server List

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| modulePath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-CheckServerModuleOnline-System-String-'></a>
### CheckServerModuleOnline(modulePath) `method`

##### Summary

Get Check ServerModule from DB

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| modulePath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-DBTranslate-System-String,System-String-'></a>
### DBTranslate(word,language) `method`

##### Summary

Default Operation for Call Translation

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| word | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| language | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-DBTranslateOffline-System-String,System-String-'></a>
### DBTranslateOffline(word,language) `method`

##### Summary

Database LanuageList for Off-line Using Definitions

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| word | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| language | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-DBTranslateOnline-System-String,System-String-'></a>
### DBTranslateOnline(word,language) `method`

##### Summary

Database LanuageList for On-line Using Definitions

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| word | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| language | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-GetWebGlobalPageBlockLists-System-String-'></a>
### GetWebGlobalPageBlockLists(modulePath) `method`

##### Summary

Default Operation For Generate Web Portal

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| modulePath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-GetWebGlobalPageBlockListsOnline-System-String-'></a>
### GetWebGlobalPageBlockListsOnline(modulePath) `method`

##### Summary

Get Check ServerModule from DB

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| modulePath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-GetWebPortalJsCssScripts-System-String,System-String-'></a>
### GetWebPortalJsCssScripts(specType,fileName) `method`

##### Summary

Default Operation For Working Wihth 
Portal Scripts From Local Tables.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| specType | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| fileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-GetWebPortalJsCssScriptsOffline-System-String,System-String-'></a>
### GetWebPortalJsCssScriptsOffline(specType,fileName) `method`

##### Summary

Default Operation For Working Wihth 
Portal Scripts From Local Tables Offline

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| specType | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| fileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-GetWebPortalJsCssScriptsOnline-System-String,System-String-'></a>
### GetWebPortalJsCssScriptsOnline(specType,fileName) `method`

##### Summary

Default Operation For Working Wihth 
Portal Scripts From Local Tables. Online

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| specType | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| fileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-DbOperations-LoadOrRefreshStaticDbDials-System-Nullable{EasyITCenter-ServerCoreStructure-ServerLocalDbDials}-'></a>
### LoadOrRefreshStaticDbDials(onlyThis) `method`

##### Summary

Method for All Server Defined Table for Local Using As Off line AutoUpdated Tables

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| onlyThis | [System.Nullable{EasyITCenter.ServerCoreStructure.ServerLocalDbDials}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{EasyITCenter.ServerCoreStructure.ServerLocalDbDials}') |  |

<a name='T-EasyITCenter-ServerCoreStructure-DelegateHealthCheckPublisher'></a>
## DelegateHealthCheckPublisher `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

HeathCheck Handler For Sending Information About Fails

<a name='T-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi'></a>
## EasyITCenterAuthenticationApi `type`

##### Namespace

EasyITCenter.ControllersExtensions

<a name='M-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi-Authenticate-System-String,System-String-'></a>
### Authenticate(username,password) `method`

##### Summary

API Authenticated and Generate Token

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi-LifetimeValidator-System-Nullable{System-DateTime},System-Nullable{System-DateTime},Microsoft-IdentityModel-Tokens-SecurityToken,Microsoft-IdentityModel-Tokens-TokenValidationParameters-'></a>
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

<a name='M-EasyITCenter-ControllersExtensions-EasyITCenterAuthenticationApi-RefreshUserToken-System-String,EasyITCenter-DBModel-AuthenticateResponse-'></a>
### RefreshUserToken(username,token) `method`

##### Summary

API Refresh User Token

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| token | [EasyITCenter.DBModel.AuthenticateResponse](#T-EasyITCenter-DBModel-AuthenticateResponse 'EasyITCenter.DBModel.AuthenticateResponse') |  |

<a name='T-EasyITCenter-ControllersExtensions-EasyITCenterBackendCheckApi'></a>
## EasyITCenterBackendCheckApi `type`

##### Namespace

EasyITCenter.ControllersExtensions

##### Summary

Simple Api for Checking Avaiability

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='M-EasyITCenter-ControllersExtensions-EasyITCenterBackendCheckApi-GetBackendCheckApi'></a>
### GetBackendCheckApi() `method`

##### Summary

Gets the backend check API.

##### Returns



##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext'></a>
## EasyITCenterContext `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Main Database Settings Here is Included ScaffoldContext which is connected via Visual
Studio Tool Here can Be added customization which are not on the server Here is Extended the
Context with Insert News Functionality Customizing and implement Settings for Automatic
Adopted Database Schema for Unlimited Working and Operations For Specifics API schemas

<a name='T-EasyITCenter-Controllers-EasyITCenterStoredProceduresListApi'></a>
## EasyITCenterStoredProceduresListApi `type`

##### Namespace

EasyITCenter.Controllers

##### Summary

StoredSpocedures Central Library With Return Dynamic DataList

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='M-EasyITCenter-Controllers-EasyITCenterStoredProceduresListApi-GetSystemSpGetTableList'></a>
### GetSystemSpGetTableList() `method`

##### Summary

Gets Table List for Reporting

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Controllers-EasyITCenterStoredProceduresListApi-GetSystemSpGetUserMenuList'></a>
### GetSystemSpGetUserMenuList() `method`

##### Summary

Api For Logged User with Menu Datalist

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Controllers-EasyITCenterStoredProceduresListApi-GetSystemTableList'></a>
### GetSystemTableList() `method`

##### Summary

Gets Form Agendas Pages List For System Menu Definition.

##### Returns



##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreWebPages-EmailVerification'></a>
## EmailVerification `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

WebPages User Verification class

<a name='T-EasyITCenter-Controllers-ExpertDocApi'></a>
## ExpertDocApi `type`

##### Namespace

EasyITCenter.Controllers

<a name='M-EasyITCenter-Controllers-ExpertDocApi-GetDocumentationGroupedList'></a>
### GetDocumentationGroupedList(id) `method`

##### Summary

ExpertDocManager Group Documentation Request Api

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [M:EasyITCenter.Controllers.ExpertDocApi.GetDocumentationGroupedList](#T-M-EasyITCenter-Controllers-ExpertDocApi-GetDocumentationGroupedList 'M:EasyITCenter.Controllers.ExpertDocApi.GetDocumentationGroupedList') | The identifier. |

<a name='M-EasyITCenter-Controllers-ExpertDocApi-GetDocumentationGroupedList-System-Int32-'></a>
### GetDocumentationGroupedList(id) `method`

##### Summary

ExpertDocManager Group Documentation Request Api

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | The identifier. |

<a name='T-EasyITCenter-ServerCoreStructure-FileOperations'></a>
## FileOperations `type`

##### Namespace

EasyITCenter.ServerCoreStructure

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-ByteArrayToFile-System-String,System-Byte[]-'></a>
### ByteArrayToFile(fileName,byteArray) `method`

##### Summary

Write ByteArray to File

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the file. |
| byteArray | [System.Byte[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Byte[] 'System.Byte[]') | The byte array. |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-CheckDirectory-System-String-'></a>
### CheckDirectory(directory) `method`

##### Summary

Checks the directory.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| directory | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The directory. |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-CheckFile-System-String-'></a>
### CheckFile(file) `method`

##### Summary

Checks the file.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| file | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The file. |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-ClearFolder-System-String-'></a>
### ClearFolder(FolderName) `method`

##### Summary

Full Clear Folder

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| FolderName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the folder. |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-ConvertSystemFilePathFromUrl-System-String-'></a>
### ConvertSystemFilePathFromUrl(webpath) `method`

##### Summary

Return Full File path to the operating system default
slashes.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| webpath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-CopyDirectory-System-String,System-String-'></a>
### CopyDirectory(directory) `method`

##### Summary

Copy Full directory.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| directory | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The directory. |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-CopyFile-System-String,System-String-'></a>
### CopyFile(from,to) `method`

##### Summary

/

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | From. |
| to | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | To. |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-CopyFiles-System-String,System-String-'></a>
### CopyFiles(sourcePath,destinationPath) `method`

##### Summary

Prepared Method for Files Copy

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sourcePath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| destinationPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-CreateDirectory-System-String-'></a>
### CreateDirectory(directory) `method`

##### Summary

Creates the directory.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| directory | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The directory. |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-CreateFile-System-String-'></a>
### CreateFile(file) `method`

##### Summary

Prepared Method for Create empty file

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| file | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-CreatePath-System-String-'></a>
### CreatePath(path) `method`

##### Summary

Creates the path recursively.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The System.IO.Path. |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-DeleteDirectory-System-String-'></a>
### DeleteDirectory(directory) `method`

##### Summary

Deletes the directory.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| directory | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The directory. |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-DeleteFile-System-String-'></a>
### DeleteFile(file) `method`

##### Summary

Deletes the file.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| file | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The file. |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-FileDetectEncoding-System-String-'></a>
### FileDetectEncoding(FileName) `method`

##### Summary

Prepared Method for Get Information of File encoding UTF8,WIN1250,etc

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| FileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-LoadOrCreateSettings'></a>
### LoadOrCreateSettings() `method`

##### Summary

Server Local Startup Configuration Its Running as First - Load from Congig.Json After DB
connection Before Server Start Is This configuration Replaced By Data from DB And next
Server Start. Its for situation - Bad Connection Server Start with Configuration from File

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-ReadFile-System-String-'></a>
### ReadFile(fileName) `method`

##### Summary

Reads the file.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the file. |

<a name='M-EasyITCenter-ServerCoreStructure-FileOperations-WriteToFile-System-String,System-String-'></a>
### WriteToFile(file,content) `method`

##### Summary

Write String to File Used for JsonSaving

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| file | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The file. |
| content | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The content. |

<a name='T-EasyITCenter-ToolsControllers-GeneratorMarkDownCode'></a>
## GeneratorMarkDownCode `type`

##### Namespace

EasyITCenter.ToolsControllers

##### Summary

Server Tool Generation Markdown Documentation From Project Codes
in Advanced Document Format
https://github.com/punker76/MarkdownSnippets/tree/main/docs

<a name='T-EasyITCenter-DBModel-GenericTable'></a>
## GenericTable `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Generic Table Snadard Fileds Public Class For Get Informations By System

<a name='T-EasyITCenter-ServerCoreStructure-CoreOperations-GetOperatingSystemInfo'></a>
## GetOperatingSystemInfo `type`

##### Namespace

EasyITCenter.ServerCoreStructure.CoreOperations

##### Summary

Extension For Checking Operation System of Server Running

<a name='T-EasyITCenter-GitServer-Services-GitAuthenticationService'></a>
## GitAuthenticationService `type`

##### Namespace

EasyITCenter.GitServer.Services

##### Summary

Static class for handling git authentication

<a name='M-EasyITCenter-GitServer-Services-GitAuthenticationService-CheckCredentials-System-String,System-String-'></a>
### CheckCredentials(username,password) `method`

##### Summary

Checks if credentials are valid.

##### Returns

`true` if authentication was successful, otherwise `false`.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The username |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The corresponding password |

<a name='T-EasyITCenter-ServerCoreServers-HostedFtpServer'></a>
## HostedFtpServer `type`

##### Namespace

EasyITCenter.ServerCoreServers

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServer-#ctor-FubarDev-FtpServer-IFtpServerHost-'></a>
### #ctor(ftpServerHost) `constructor`

##### Summary

Initializes a new instance of the [HostedFtpServer](#T-EasyITCenter-ServerCoreServers-HostedFtpServer 'EasyITCenter.ServerCoreServers.HostedFtpServer') class.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ftpServerHost | [FubarDev.FtpServer.IFtpServerHost](#T-FubarDev-FtpServer-IFtpServerHost 'FubarDev.FtpServer.IFtpServerHost') | The FTP server host that gets wrapped as a hosted service. |

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServer-StartAsync-System-Threading-CancellationToken-'></a>
### StartAsync() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServer-StopAsync-System-Threading-CancellationToken-'></a>
### StopAsync() `method`

##### Summary

*Inherit from parent.*

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider'></a>
## HostedFtpServerMembershipProvider `type`

##### Namespace

EasyITCenter.ServerCoreServers

##### Summary

Custom membership provider for Authentication Validation Actual is Set by UserName and
Password in Database

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-ValidateUser-System-String,System-String-'></a>
### ValidateUser(username,password) `method`

##### Summary

FTP User Validation Its for Open FTP and User Validation

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The username. |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The password. |

<a name='M-EasyITCenter-ServerCoreServers-HostedFtpServerMembershipProvider-ValidateUserAsync-System-String,System-String-'></a>
### ValidateUserAsync(username,password) `method`

##### Summary

FTP User Validation Async Its for Open FTP and User Validation

##### Returns

The result of the validation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| username | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The user name. |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The password. |

<a name='T-EasyITCenter-DBModel-IdFilter'></a>
## IdFilter `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Custom Class Definition for Filtering by record Id

<a name='T-ServerCorePages-IndexModel'></a>
## IndexModel `type`

##### Namespace

ServerCorePages

##### Summary

Default Page for Every Web Request Here are defined
Main Pages Sections THIs Page Is Alone For

<a name='M-ServerCorePages-IndexModel-GetManagedBodyPartForLayout'></a>
### GetManagedBodyPartForLayout() `method`

##### Summary

Get Allowed Global Body HTML Code Its HTML Content Computed by Guest/webuser/admin
Rights From DB Table WebGlobalBodyBlockList

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedCentralCssFiles'></a>
### GetManagedCentralCssFiles() `method`

##### Summary

Central CSS Library Files List

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedCentralCssLayoutFiles'></a>
### GetManagedCentralCssLayoutFiles() `method`

##### Summary

Central CSS Stylisation Template Controler

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedCentralJsFiles'></a>
### GetManagedCentralJsFiles() `method`

##### Summary

Central JS Library Files List

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedCentralJsLayoutFiles'></a>
### GetManagedCentralJsLayoutFiles() `method`

##### Summary

Central JS Library Files Template Controler

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedCssFilesForLayout'></a>
### GetManagedCssFilesForLayout() `method`

##### Summary

Generation Css Script Section In Server Pages

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedFooterPartForLayout'></a>
### GetManagedFooterPartForLayout() `method`

##### Summary

Get Allowed Global Footer HTML Code Its HTML Content Computed by Guest/webuser/admin
Rights From DB Table WebGlobalBodyBlockList

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedGlobalCssFiles'></a>
### GetManagedGlobalCssFiles() `method`

##### Summary

Global CSS Library Files List

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedGlobalCssLayoutFiles'></a>
### GetManagedGlobalCssLayoutFiles() `method`

##### Summary

Global CSS Stylisation Template Controler

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedGlobalJsFiles'></a>
### GetManagedGlobalJsFiles() `method`

##### Summary

Global JS Library Files List

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedGlobalJsLayoutFiles'></a>
### GetManagedGlobalJsLayoutFiles() `method`

##### Summary

Global JS Library Files Template Controler

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedHeaderPostScriptsForLayout'></a>
### GetManagedHeaderPostScriptsForLayout() `method`

##### Summary

Gets HeaderPostScripts the managed header pre CSS for layout.

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedHeaderPreCssForLayout'></a>
### GetManagedHeaderPreCssForLayout() `method`

##### Summary

Gets HeaderPreCss the managed header pre CSS for layout.

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedHeaderPreScriptsForLayout'></a>
### GetManagedHeaderPreScriptsForLayout() `method`

##### Summary

Gets HeaderPreCss the managed header pre CSS for layout.

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedJsFilesForLayout'></a>
### GetManagedJsFilesForLayout() `method`

##### Summary

Generation JS Script Section In Server Pages

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedMultiLangCssFiles'></a>
### GetManagedMultiLangCssFiles() `method`

##### Summary

MultiLang CSS Library Files List

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedMultiLangCssLayoutFiles'></a>
### GetManagedMultiLangCssLayoutFiles() `method`

##### Summary

MultiLang CSS Stylisation Template Controler

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedMultiLangJsFiles'></a>
### GetManagedMultiLangJsFiles() `method`

##### Summary

MultiLang JS Library Files List

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-GetManagedMultiLangJsLayoutFiles'></a>
### GetManagedMultiLangJsLayoutFiles() `method`

##### Summary

MultiLang JS Library Files Template Controler

##### Returns



##### Parameters

This method has no parameters.

<a name='M-ServerCorePages-IndexModel-OnGet'></a>
### OnGet() `method`

##### Summary

Checking Cookie TOKEN FROM Metro for User/UserRole checking on Server Side This Is Use
For User Checking In Razor/MVC Server Web Pages This is Use For User Role and his Rights
If is Logged Checking Has Loaded User Claims with Full Token Info

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreStructure-MailRequest'></a>
## MailRequest `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

Class Definition for Server Emailer In List of this claas you can use Mass Emailer

<a name='T-EasyITCenter-Controllers-MessageModuleApi'></a>
## MessageModuleApi `type`

##### Namespace

EasyITCenter.Controllers

<a name='M-EasyITCenter-Controllers-MessageModuleApi-GetNewsletterPreview'></a>
### GetNewsletterPreview(id) `method`

##### Summary

Message Module NewsLetter Preview API
Redirect todsaved Index.html after POST save

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [M:EasyITCenter.Controllers.MessageModuleApi.GetNewsletterPreview](#T-M-EasyITCenter-Controllers-MessageModuleApi-GetNewsletterPreview 'M:EasyITCenter.Controllers.MessageModuleApi.GetNewsletterPreview') |  |

<a name='M-EasyITCenter-Controllers-MessageModuleApi-SaveNewsletterPreview-System-Object-'></a>
### SaveNewsletterPreview() `method`

##### Summary

Message Module NewsLetter Preview API
Saving To index.html

##### Returns



##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-MimeTypes'></a>
## MimeTypes `type`

##### Namespace

EasyITCenter

##### Summary

Provides utilities for mapping file names and extensions to MIME-types.

<a name='P-EasyITCenter-MimeTypes-FallbackMimeType'></a>
### FallbackMimeType `property`

##### Summary

The fallback MIME-type. Defaults to `application/octet-stream`.

<a name='M-EasyITCenter-MimeTypes-GetMimeType-System-String-'></a>
### GetMimeType(fileName) `method`

##### Summary

Gets the MIME-type for the given file name,
or [FallbackMimeType](#P-EasyITCenter-MimeTypes-FallbackMimeType 'EasyITCenter.MimeTypes.FallbackMimeType') if a mapping doesn't exist.

##### Returns

The MIME-type for the given file name.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the file. |

<a name='M-EasyITCenter-MimeTypes-GetMimeTypeExtensions-System-String-'></a>
### GetMimeTypeExtensions(mimeType) `method`

##### Summary

Attempts to fetch all available file extensions for a MIME-type.

##### Returns

All available extensions for the given MIME-type

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mimeType | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the MIME-type |

<a name='M-EasyITCenter-MimeTypes-TryGetMimeType-System-String,System-String@-'></a>
### TryGetMimeType(fileName,mimeType) `method`

##### Summary

Tries to get the MIME-type for the given file name.

##### Returns

`true` if a MIME-type was found, `false` otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fileName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the file. |
| mimeType | [System.String@](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String@ 'System.String@') | The MIME-type for the given file name. |

<a name='T-EasyITCenter-DBModel-NameFilter'></a>
## NameFilter `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Custom Class Definition for Filtering by string

<a name='T-DynamicRun-Builder-ObservableFileSystemWatcher'></a>
## ObservableFileSystemWatcher `type`

##### Namespace

DynamicRun.Builder

##### Summary

This is a wrapper around a file system watcher to use the Rx framework instead of event handlers to handle
    notifications of file system changes.

<a name='M-DynamicRun-Builder-ObservableFileSystemWatcher-#ctor-System-IO-FileSystemWatcher-'></a>
### #ctor(watcher) `constructor`

##### Summary

Pass an existing FileSystemWatcher instance, this is just for the case where it's not possible to only pass the
    configuration, be aware that disposing this wrapper will dispose the FileSystemWatcher instance too.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| watcher | [System.IO.FileSystemWatcher](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.IO.FileSystemWatcher 'System.IO.FileSystemWatcher') |  |

<a name='M-DynamicRun-Builder-ObservableFileSystemWatcher-#ctor-System-Action{System-IO-FileSystemWatcher}-'></a>
### #ctor() `constructor`

##### Summary

Pass a function to configure the FileSystemWatcher as desired, this constructor will manage creating and applying
    the configuration.

##### Parameters

This constructor has no parameters.

<a name='T-EasyITCenter-ServerCoreStructure-ProcessClass'></a>
## ProcessClass `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

Server Process class for running external prrocesses

<a name='T-EasyITCenter-ServerCoreDBSettings-RSSLoad'></a>
## RSSLoad `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

<a name='M-EasyITCenter-ServerCoreDBSettings-RSSLoad-GetRssFeed-System-String-'></a>
### GetRssFeed(rssUrl) `method`

##### Summary

Load RSS Feed

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| rssUrl | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='T-EasyITCenter-ServerCoreDBSettings-RobotsController'></a>
## RobotsController `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

robots.txt routing

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='T-EasyITCenter-ServerCoreStructure-ServerConfigSettings'></a>
## ServerConfigSettings `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

The server settings.

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-BrowserLinkEnabled'></a>
### BrowserLinkEnabled `property`

##### Summary

Okamžitý Rerresh při vytvoření 
jakékoliv změny na Webu, Pomůcka vývoje

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigApiTokenTimeoutMin'></a>
### ConfigApiTokenTimeoutMin `property`

##### Summary

Bearer Token Timeout Setting in Minutes. Connection must be Refreshed in Interval After
Timeout connection Must Login Again. It is as needed. You Can Change Key for close All
connections Immediately. Timeout is good for Webpages
Recomended: 15

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigCertificateDomain'></a>
### ConfigCertificateDomain `property`

##### Summary

Its Domain for include to Automatic Generated Certificate For Server running on HTTPS.
Domain is for Your validation Certificate Domain. Can be Changed for commercial. Domain
is Used for Lets Encrypt also Write with Comma separator
Recommended: 127.0.0.1

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigCertificatePassword'></a>
### ConfigCertificatePassword `property`

##### Summary

Password will be inserted to Server Generated Certificate for HTTPS.
Recommended: empty = Maximal Security Randomly generated 20 chars string

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigCertificatePath'></a>
### ConfigCertificatePath `property`

##### Summary

Certificate file NextFrom'DATA'Path\\Filename.pfx For import External Certificate Its
Path from Data Startup Folder,example "groupware.pfx" is in Data Path The Password must
be inserted in ConfigCertificatePassword Settings Other for ignore this Setting set
empty string "" This settings has Higest Priority before LesEncrypt enabled

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigCoreServerRegisteredName'></a>
### ConfigCoreServerRegisteredName `property`

##### Summary

Server Service Name automatic figured in All IS/OS/Engines info
Recommended: EASY-IT-CENTER

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigJwtLocalKey'></a>
### ConfigJwtLocalKey `property`

##### Summary

Special Functions:Server AutoGenerated encryption Key For Securing Communication On Each
Server Restart All Tokens not will be valid and the Login Reconnect is Requested. Its
AntiHacker Security Rule
Recommended: empty = Maximal Security Randomly generated 40 chars string

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigLogWarnPlusToDbEnabled'></a>
### ConfigLogWarnPlusToDbEnabled `property`

##### Summary

Enable Logging Server Warn and Errors To Database

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigManagerEmailAddress'></a>
### ConfigManagerEmailAddress `property`

##### Summary

Emailová adresa do obchodních kontaktů

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigServerGetLetsEncrypt'></a>
### ConfigServerGetLetsEncrypt `property`

##### Summary

Setting for Automatic Obtain Lets Encrypt more Security Setting Politics.
Recommended: true

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigServerStartupHTTPAndHTTPS'></a>
### ConfigServerStartupHTTPAndHTTPS `property`

##### Summary

Startup Server On HTTP and HTTPS on Defined Port 
Aktivuje Provoz na protokolech HTTP i HTTPS současně, 
pro definici HTTP jej nastavte na zapnuto a dále dle nastaveni pro HTTPS

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigServerStartupHttpPort'></a>
### ConfigServerStartupHttpPort `property`

##### Summary

Set Server Startup Port on Http/HttpS/WebSocket and for All Engines, Modules, API
Controler and WebPages
Recommended: 5000

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigServerStartupHttpsPort'></a>
### ConfigServerStartupHttpsPort `property`

##### Summary

Set Server Startup  HTTPS Port on Http/HttpS/WebSocket and for All Engines, Modules, API
Controler and WebPages
Recommended: 5001

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigServerStartupOnHttps'></a>
### ConfigServerStartupOnHttps `property`

##### Summary

Setting for Server URL Services. Logically can run only one Http or Https Server has
more Security Setting Politics.
Recommended: true

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ConfigTimeTokenValidationEnabled'></a>
### ConfigTimeTokenValidationEnabled `property`

##### Summary

Enable Disable Bearer Token Timeout Validation Token can be valid EveryTime to using:
Example for machine connection Or is Control last activity

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-DatabaseConnectionString'></a>
### DatabaseConnectionString `property`

##### Summary

Server Database Connection string for Full Service of Database
Migration/Api/Check/Unlimited Develop !!!Warning: Check this connection for
Read/Write/Exec is enabled In Config File Must Be Only This Paramneter

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-DatabaseInternalCacheTimeoutMin'></a>
### DatabaseInternalCacheTimeoutMin `property`

##### Summary

Time in Minutes for Database Valid Cache Data and Refreshing Duplicit Functionality with
Database Server
Recommended: 30

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-DatabaseInternalCachingEnabled'></a>
### DatabaseInternalCachingEnabled `property`

##### Summary

Enable Disable Entity Framework Internal Cache I recommend turning it off : from Logic,
Duplicit Functionality with Database Server in complex process can generate problems
Recommended: false

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-DefaultStaticWebFilesFolder'></a>
### DefaultStaticWebFilesFolder `property`

##### Summary

Root Složka pro Statické soubory Webu

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EmailerSMTPLoginPassword'></a>
### EmailerSMTPLoginPassword `property`

##### Summary

SMTP Password for Login to External Mail Server Its Necessary for Correct running Server
Internal Core Monitoring

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EmailerSMTPLoginUsername'></a>
### EmailerSMTPLoginUsername `property`

##### Summary

SMTP UserName for Login to External Mail Server Its Necessary for Correct running Server
Internal Core Monitoring

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EmailerSMTPPort'></a>
### EmailerSMTPPort `property`

##### Summary

SMTP Port for Login to External Mail Server Its Necessary for Correct running Server
Internal Core Monitoring

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EmailerSMTPServerAddress'></a>
### EmailerSMTPServerAddress `property`

##### Summary

SMTP Server Address for Login to External Mail Server Its Necessary for Correct running
Server Internal Core Monitoring

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EmailerSMTPSslIsEnabled'></a>
### EmailerSMTPSslIsEnabled `property`

##### Summary

EmailerSMTPSslIsEnabled SSl Email Protocol for Login to External Mail Server Its
Necessary for Correct running Server Internal Core Monitoring

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EmailerServiceEmailAddress'></a>
### EmailerServiceEmailAddress `property`

##### Summary

Service email, for info about not available service from HeatchCheck Can be used for
next Develop, automatic checking problems, missing data and all other Its Necessary for
Correct running Server Internal Core Monitoring

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-EnableAutoShowMdAsHtml'></a>
### EnableAutoShowMdAsHtml `property`

##### Summary

Zapíná/Vypína Automatické zobrazení MD souboru jako HTML
v rozsahu celého Web Serveru

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-GitServerEnabled'></a>
### GitServerEnabled `property`

##### Summary

Zapíná Vypíná privátní Git Server

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleAutoSchedulerEnabled'></a>
### ModuleAutoSchedulerEnabled `property`

##### Summary

Server Scheduler Module for Automatization Tasks

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleCSharpCodeBuilder'></a>
### ModuleCSharpCodeBuilder `property`

##### Summary

Online Správa Projektu Serveru a vývoj

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleDBEntitySchemaEnabled'></a>
### ModuleDBEntitySchemaEnabled `property`

##### Summary

Modul Zobrazení DB Entitity Schema

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleDBEntitySchemaPath'></a>
### ModuleDBEntitySchemaPath `property`

##### Summary

Cestana které se Schema Zobrazí,
default: /DBEntitySchema

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleDbDiagramGeneratorEnabled'></a>
### ModuleDbDiagramGeneratorEnabled `property`

##### Summary

Enable Automatic Database Diagram for Simple show Database structure with All bingings

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleHealthServiceEnabled'></a>
### ModuleHealthServiceEnabled `property`

##### Summary

Special Function: More than 200 Server Statuses Can be monitored by HeathCheckService,
Over Net can Control Other Company Services Also as Central Control Point With Email
Service. For Example: Server/Memory/All DB Types/IP/HDD/Port/Api/NET/Cloud/Environment
Must be run for Metrics AddOn https://learn.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/monitor-app-health

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleHealthServiceMessageOnChangeOnly'></a>
### ModuleHealthServiceMessageOnChangeOnly `property`

##### Summary

Zaznamenávat Logování/zaslání zprávy pouze při změně z OK->FAIL, jinak bude
zaznamenáno v každém cyklu

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleHealthServicePath'></a>
### ModuleHealthServicePath `property`

##### Summary

Api URL cesta Serveru na které bude Dohledové centrum k dispozici

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleHealthServiceRefreshIntervalSec'></a>
### ModuleHealthServiceRefreshIntervalSec `property`

##### Summary

Special Function: More than 200 Server Statuses Can be monitored by HeathCheckService,
Over Net can Control Other Company Services Also as Central Control Point With Email
Service. For Example: Server/Memory/All DB Types/IP/HDD/Port/Api/NET/Cloud/Environment
Must be run for Metrics AddOn !!! run in Release mode for Good Reading of Logs without
HeathChecks Cycling info https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks https://testfully.io/blog/api-health-check-monitoring/

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleMdDocumentationEnabled'></a>
### ModuleMdDocumentationEnabled `property`

##### Summary

Enable Server Structure Documentation for Developers Using RootPath, - Block File
Browsing Is Good for Server with Documentation only Or Use for Show WebPage and Copy
"Only HTML"

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleSwaggerApiDocEnabled'></a>
### ModuleSwaggerApiDocEnabled `property`

##### Summary

Special Function: Server Automatically Generate Full Documentation of API structure AND
Database Model. Plus Included API Interface for Online Testing All API Methods with
Authentication Its Automatic Solution for Third Party cooperation. All changes are
Reflected after restart server

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleSwaggerApiDocPath'></a>
### ModuleSwaggerApiDocPath `property`

##### Summary

Api URL cesta Serveru na které bude API Dokumentace a Testovací rozhraní k dispozici

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ModuleWebDataManagerEnabled'></a>
### ModuleWebDataManagerEnabled `property`

##### Summary

Module: AutoGenerated Database DataManager for working with Data Running only in Debug
mode for simple Develop, can be modified. All changes are Reflected after restart server

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-RedirectOnPageNotFound'></a>
### RedirectOnPageNotFound `property`

##### Summary

Aktivuje Presmerovani na Zadanou cestu
v případě Stránka nenalezena

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-RedirectPath'></a>
### RedirectPath `property`

##### Summary

Cesta na kterou se přesměruje Webová Stránka 
v případě 404 stránka nenalezena. 
Je také nastavena jako Výchozí Stránka

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerCorsAllowAnyHeader'></a>
### ServerCorsAllowAnyHeader `property`

##### Summary

CORS Hlavčky HTTP Requestů příchozích na server WEB + API, Povolit jakýkoliv Header

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerCorsAllowAnyMethod'></a>
### ServerCorsAllowAnyMethod `property`

##### Summary

CORS Hlavčky HTTP Requestů příchozích na server WEB + API, Povolit jakoukoliv Metodu

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerCorsAllowAnyOrigin'></a>
### ServerCorsAllowAnyOrigin `property`

##### Summary

CORS Hlavčky HTTP Requestů příchozích na server WEB + API, Povolit jakýkoli původ

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerCorsAllowCredentials'></a>
### ServerCorsAllowCredentials `property`

##### Summary

CORS Hlavčky HTTP Requestů příchozích na server WEB + API , Povolit jakékoliv Pověření - Autorizaci

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerCorsEnabled'></a>
### ServerCorsEnabled `property`

##### Summary

Server Filtrování Dle CORS Zapnuto

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerFtpEngineEnabled'></a>
### ServerFtpEngineEnabled `property`

##### Summary

Enable FTP File Server oppened for every connection with full rights

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerFtpSecurityEnabled'></a>
### ServerFtpSecurityEnabled `property`

##### Summary

Enable FTP Security For access to FTP must be logged

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerFtpStorageRootPath'></a>
### ServerFtpStorageRootPath `property`

##### Summary

FTP Server Storage Path Definition It Will be under wwwroot for Posibility Share Data or
For WebAccess/Browser Over WebPortal

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerProviderModeEnabled'></a>
### ServerProviderModeEnabled `property`

##### Summary

Enabling Provider APIs More Informations are Published on WepPages Are Published Core
Informations With Full Solutions Info/Tools/Codes/Etc Published

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServerPublicUrl'></a>
### ServerPublicUrl `property`

##### Summary

Veřejná URL adresa serveru použita v modulech

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServiceCoreCheckerEmailSenderActive'></a>
### ServiceCoreCheckerEmailSenderActive `property`

##### Summary

Activation / Deactivation of Email Sender For Server Core Fails Checker All Catch Write
to SendEmail, In Debug mode is Written in console in Release mode is Sended email (All
incorrect server statuses are monitored) Can be writen to Database - !!! Warning for
infinite Cycling (DB shutdown example)
Recommended: true

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServiceEnableMassEmail'></a>
### ServiceEnableMassEmail `property`

##### Summary

Server support mass emailing as Service You can enable Mass Email Api

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServiceServerLanguage'></a>
### ServiceServerLanguage `property`

##### Summary

Server Language for Translating Server internal statuses
Recommended: cz or en - other languages are not implemented

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-ServiceUseDbLocalAutoupdatedDials'></a>
### ServiceUseDbLocalAutoupdatedDials `property`

##### Summary

Special Function: Using Selected Tables with AutoRefresh On change as Local DataSets,
For Optimize Traffic. For Example LanguageList - Static table with often reading
Recommended: true - functionality must be implemented in Server Code

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebBrowserContentEnabled'></a>
### WebBrowserContentEnabled `property`

##### Summary

Enable WebPages File Browsing from server Url on Server

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebLiveDataMonitorEnabled'></a>
### WebLiveDataMonitorEnabled `property`

##### Summary

Enable Server Static Folder Monitor for Data Changes And immediatelly update all Api,
Endpoints, Client Browser

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebMvcPagesEngineEnabled'></a>
### WebMvcPagesEngineEnabled `property`

##### Summary

Enable Mvc WebPages support engine with Correct Configuration

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebRSSFeedsEnabled'></a>
### WebRSSFeedsEnabled `property`

##### Summary

Zapnout Generování RSS fédů z položek, novinek

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebRazorPagesCompileOnRuntime'></a>
### WebRazorPagesCompileOnRuntime `property`

##### Summary

Provádí kompilaci Za běhu Serveru. Tzn.. Podporuje Vkládání Stránek Externě

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebRazorPagesEngineEnabled'></a>
### WebRazorPagesEngineEnabled `property`

##### Summary

Enable Razor WebPages support engine with Correct Configuration for Automaping from
folder 'ServerCorePages'

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebRobotTxtFileEnabled'></a>
### WebRobotTxtFileEnabled `property`

##### Summary

zapnout zobrazení souboru Robot.txt, obsah se bere z nastavení Portálu

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebSitemapFileEnabled'></a>
### WebSitemapFileEnabled `property`

##### Summary

Generovaný Soubor Sitemap z Menu Portálu

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebSocketEngineEnabled'></a>
### WebSocketEngineEnabled `property`

##### Summary

Enable WebSocket Engine with Default Example Api Controller

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebSocketGlobalNotifyPath'></a>
### WebSocketGlobalNotifyPath `property`

##### Summary

TODO planned
WebPortal Global Notify Path on WebSocket for sending messages from scheduler
With Create Command Library, can be Generated Web Objects on Message Incoming Action

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebSocketMaxBufferSizeKb'></a>
### WebSocketMaxBufferSizeKb `property`

##### Summary

Maximum socket message size for control Traffic
Recomended: 10

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebSocketServerMonitorEnabled'></a>
### WebSocketServerMonitorEnabled `property`

##### Summary

Server support online multi watch Logging Its Run on Websocket and the Log Messages are
sent for All opened connections for wathing on Path: ServerCoreMonitor You can enable
Mass Email Api

<a name='P-EasyITCenter-ServerCoreStructure-ServerConfigSettings-WebSocketTimeoutMin'></a>
### WebSocketTimeoutMin `property`

##### Summary

WebSocket Timeout Connection Settings in Minutes. After timeout when not detected any
communication socket is closed Set according to your need
Recommended: 2

<a name='T-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices'></a>
## ServerConfigurationServices `type`

##### Namespace

EasyITCenter.ServerCoreConfiguration

##### Summary

Server Core Configuration Settings of Security, Communications, Technologies, Modules Rules,
Rights, Conditions, Formats, Services, Logging, etc..

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureAuthentication-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureAuthentication(services) `method`

##### Summary

Server Core: Configure Server Authentication Support

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureCentralServicesProviders-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureCentralServicesProviders(services) `method`

##### Summary

Server Core: Configure Hosted Service to Runtime Core For Access to Root Functionalities

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureControllers-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
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

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureCookie-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureCookie(services) `method`

##### Summary

Server Core: Configure Cookie Politics

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureDatabaseContext-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureDatabaseContext(services) `method`

##### Summary

Server Core: Configure Custom Services

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureFTPServer-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureFTPServer(services) `method`

##### Summary

Custom Secure FTP Server

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureLetsEncrypt-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureLetsEncrypt(services) `method`

##### Summary

Server core: Configures LetsEncrypt using. Certificate will be saved in DataPath

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureLogging-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureLogging(services) `method`

##### Summary

Server Core: Configure Server Logging

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureScoped-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureScoped(services) `method`

##### Summary

Server Core: Configure Custom Core Services

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureServerWebPages-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureServerWebPages(services) `method`

##### Summary

Configures the MVC server pages on Server format "cshtml"

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureSingletons-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureSingletons(services) `method`

##### Summary

Server Core: Configures the singletons. Its Register Custom Listeners For Actions

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureThirdPartyApi-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureThirdPartyApi(services) `method`

##### Summary

Server Core: Configure HTTP Client for work with third party API

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureTransient-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureTransient(services) `method`

##### Summary

Server Core: Configures the Transient.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerConfigurationServices-ConfigureWebSocketLoggerMonitor-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureWebSocketLoggerMonitor(services) `method`

##### Summary

Server core: Configures the WebSocket logger monitor. For multi monitoring and for
Example Posibilities

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='T-EasyITCenter-ControllersExtensions-ServerCoreAutoGeneratorApi'></a>
## ServerCoreAutoGeneratorApi `type`

##### Namespace

EasyITCenter.ControllersExtensions

##### Summary

Server Auto Cloner Controller

<a name='T-EasyITCenter-ServerCoreStructure-ServerCoreAutoScheduler'></a>
## ServerCoreAutoScheduler `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

Server AutoSchedule Planner

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS'></a>
## ServerCoreLoggerWS `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

WEBSocket Template still not used Ideal for Terminal Panels, chat, controlling services

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS-Echo-Microsoft-AspNetCore-Http-HttpContext,System-Net-WebSockets-WebSocket-'></a>
### Echo(context,webSocket) `method`

##### Summary

WebSocket Communication Set Examle

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [Microsoft.AspNetCore.Http.HttpContext](#T-Microsoft-AspNetCore-Http-HttpContext 'Microsoft.AspNetCore.Http.HttpContext') | The context. |
| webSocket | [System.Net.WebSockets.WebSocket](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Net.WebSockets.WebSocket 'System.Net.WebSockets.WebSocket') | The web socket. |

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS-Get'></a>
### Get() `method`

##### Summary

WebSocket Registration Connection API Example

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerCoreLoggerWS-GetBySocketAPIPath-System-String-'></a>
### GetBySocketAPIPath(id) `method`

##### Summary

Universal WebSocket API Definitions for Connection Paths and Registering To Server
Central List ow WebSocket Connections

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='T-EasyITCenter-ControllersExtensions-ServerCorePostFileRotatorApi'></a>
## ServerCorePostFileRotatorApi `type`

##### Namespace

EasyITCenter.ControllersExtensions

##### Summary

Server Root Controller

<a name='M-EasyITCenter-ControllersExtensions-ServerCorePostFileRotatorApi-GetApiFileRotator-System-String-'></a>
### GetApiFileRotator(filename) `method`

##### Summary

WebApi ContentTool SubmitRotator

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| filename | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ControllersExtensions-ServerCorePostFileRotatorApi-PostApiFileRotator-System-Collections-Generic-List{Microsoft-AspNetCore-Http-IFormFile}-'></a>
### PostApiFileRotator() `method`

##### Summary

WebApi ConentTool WebBuilder File Responser

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ControllersExtensions-ServerCorePostFileRotatorApi-PutApiFileRotator-System-Collections-Generic-List{Microsoft-AspNetCore-Http-IFormFile}-'></a>
### PutApiFileRotator() `method`

##### Summary

WebApi ConentTool WebBuilder File Responser

##### Returns



##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreStructure-ServerCoreWebHelpers'></a>
## ServerCoreWebHelpers `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

Server Web Helpers for EASY working Here are extension for Database Model, WebSocket

<a name='M-EasyITCenter-ServerCoreStructure-ServerCoreWebHelpers-AddSocketConnectionToCentralList-System-Net-WebSockets-WebSocket,System-String-'></a>
### AddSocketConnectionToCentralList(newWebSocket,socketAPIPath) `method`

##### Summary

Add WeSocket Connection To Central List

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newWebSocket | [System.Net.WebSockets.WebSocket](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Net.WebSockets.WebSocket 'System.Net.WebSockets.WebSocket') | The new web socket. |
| socketAPIPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The socket path. |

<a name='M-EasyITCenter-ServerCoreStructure-ServerCoreWebHelpers-DisposeSocketConnectionsWithTimeOut'></a>
### DisposeSocketConnectionsWithTimeOut() `method`

##### Summary

!! Global Method for Simple Using WebSockets WebSocket Disposed - Cleaning monitored
Sockets from Central List. Are Closed and Disposed Only with Timeout or with closed Connection

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreStructure-ServerCoreWebHelpers-ListenClientWebSocketMessages-System-Net-WebSockets-WebSocket,System-String-'></a>
### ListenClientWebSocketMessages(webSocket,socketAPIPath) `method`

##### Summary

Register Listening Client WebSocket Communication Ist for Receive messages from Client

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| webSocket | [System.Net.WebSockets.WebSocket](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Net.WebSockets.WebSocket 'System.Net.WebSockets.WebSocket') |  |
| socketAPIPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ServerCoreStructure-ServerCoreWebHelpers-SendMessageAndUpdateWebSocketsInSpecificPath-System-String,System-String-'></a>
### SendMessageAndUpdateWebSocketsInSpecificPath(socketAPIPath,message) `method`

##### Summary

Sends the message and update web sockets in specific path.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| socketAPIPath | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The socket API path. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='M-EasyITCenter-ServerCoreStructure-ServerCoreWebHelpers-SendMessageToClientSocket-System-Net-WebSockets-WebSocket,System-String-'></a>
### SendMessageToClientSocket(webSocket,message) `method`

##### Summary

Sends the message to client WebSocket. This Is Used by
"SendMessageAndUpdateWebSocketsInSpecificPath" For Update Informaions on All Connections
in Same WebSocket Path Its Solution FOR Teminals, Group Communications, etc.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| webSocket | [System.Net.WebSockets.WebSocket](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Net.WebSockets.WebSocket 'System.Net.WebSockets.WebSocket') | The web socket. |
| message | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The message. |

<a name='T-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi'></a>
## ServerCoreWebToolsGenApi `type`

##### Namespace

EasyITCenter.ControllersExtensions

##### Summary

Server Root Controller

<a name='M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateCarouselGallery-EasyITCenter-DBModel-UploadGeneratorFiles-'></a>
### GenerateCarouselGallery(imageList) `method`

##### Summary

Image Carousel Generator

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| imageList | [EasyITCenter.DBModel.UploadGeneratorFiles](#T-EasyITCenter-DBModel-UploadGeneratorFiles 'EasyITCenter.DBModel.UploadGeneratorFiles') | The image list. |

<a name='M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateCarouselVideoGallery-EasyITCenter-DBModel-UploadGeneratorFiles-'></a>
### GenerateCarouselVideoGallery(videoList) `method`

##### Summary

Video Carousel Generator

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| videoList | [EasyITCenter.DBModel.UploadGeneratorFiles](#T-EasyITCenter-DBModel-UploadGeneratorFiles 'EasyITCenter.DBModel.UploadGeneratorFiles') | The image list. |

<a name='M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateEasyGallery-EasyITCenter-DBModel-UploadGeneratorFiles-'></a>
### GenerateEasyGallery(imageList) `method`

##### Summary

Easy Image Gallery Generator

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| imageList | [EasyITCenter.DBModel.UploadGeneratorFiles](#T-EasyITCenter-DBModel-UploadGeneratorFiles 'EasyITCenter.DBModel.UploadGeneratorFiles') | The image list. |

<a name='M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateImageBook-EasyITCenter-DBModel-UploadGeneratorFiles-'></a>
### GenerateImageBook(imageList) `method`

##### Summary

ImageBook Generator

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| imageList | [EasyITCenter.DBModel.UploadGeneratorFiles](#T-EasyITCenter-DBModel-UploadGeneratorFiles 'EasyITCenter.DBModel.UploadGeneratorFiles') | The image list. |

<a name='M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateMdToMdBook-EasyITCenter-DBModel-UploadGeneratorFiles-'></a>
### GenerateMdToMdBook(fileList) `method`

##### Summary

MdToMdBook Generator

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fileList | [EasyITCenter.DBModel.UploadGeneratorFiles](#T-EasyITCenter-DBModel-UploadGeneratorFiles 'EasyITCenter.DBModel.UploadGeneratorFiles') | The image list. |

<a name='M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateMedialPresentation-EasyITCenter-DBModel-UploadGeneratorFiles-'></a>
### GenerateMedialPresentation(imageList) `method`

##### Summary

MedialPresentation from Images Generator

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| imageList | [EasyITCenter.DBModel.UploadGeneratorFiles](#T-EasyITCenter-DBModel-UploadGeneratorFiles 'EasyITCenter.DBModel.UploadGeneratorFiles') | The image list. |

<a name='M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateVideoPlayList-EasyITCenter-DBModel-UploadGeneratorFiles-'></a>
### GenerateVideoPlayList(videoList) `method`

##### Summary

Video Player + PlayList Generator

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| videoList | [EasyITCenter.DBModel.UploadGeneratorFiles](#T-EasyITCenter-DBModel-UploadGeneratorFiles 'EasyITCenter.DBModel.UploadGeneratorFiles') | The image list. |

<a name='M-EasyITCenter-ControllersExtensions-ServerCoreWebToolsGenApi-GenerateXmlToMd-EasyITCenter-DBModel-UploadGeneratorFiles-'></a>
### GenerateXmlToMd(fileList) `method`

##### Summary

XmlToMD Generator

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fileList | [EasyITCenter.DBModel.UploadGeneratorFiles](#T-EasyITCenter-DBModel-UploadGeneratorFiles 'EasyITCenter.DBModel.UploadGeneratorFiles') | The image list. |

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi'></a>
## ServerDbDgmlSchemaApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Database Schema Diagram Controller

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi-#ctor-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext-'></a>
### #ctor(context) `constructor`

##### Summary

Initializes a new instance of the [](#!-DgmlSchemaApi 'DgmlSchemaApi') class.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [EasyITCenter.ServerCoreDBSettings.EasyITCenterContext](#T-EasyITCenter-ServerCoreDBSettings-EasyITCenterContext 'EasyITCenter.ServerCoreDBSettings.EasyITCenterContext') | The context. |

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi-Get'></a>
### Get() `method`

##### Summary

Get Full DataBase SQL Script

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerDbDgmlSchemaApi-GetDgml'></a>
### GetDgml() `method`

##### Summary

Creates a DGML class diagram of most of the entities in the project wher you go to
localhost/dgml See https://github.com/ErikEJ/SqlCeToolbox/wiki/EF-Core-Power-Tools

##### Returns

a DGML class diagram

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-Controllers-ServerDocApi'></a>
## ServerDocApi `type`

##### Namespace

EasyITCenter.Controllers

<a name='F-EasyITCenter-Controllers-ServerDocApi-_hostingEnvironment'></a>
### _hostingEnvironment `constants`

##### Summary

For wwwroot folder Update with detect changes and modify static pages

<a name='M-EasyITCenter-Controllers-ServerDocApi-GenerateMdBook'></a>
### GenerateMdBook() `method`

##### Summary

Server Inteligent Documentation Generator Api StratupPath is WebFolder On Development is
need WebRootPath WegbRootPath is Development Folder

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerDynamicSqlApi'></a>
## ServerDynamicSqlApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Restart Api for Remote Control

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerEmailerApi'></a>
## ServerEmailerApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Email sender Api for logged Communication

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='T-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices'></a>
## ServerEnablingServices `type`

##### Namespace

EasyITCenter.ServerCoreConfiguration

##### Summary

Server Core Enabling Settings of Security, API Communications, Technologies, Modules,Rules,
Rights, Rules, Rights, Conditions, Cors, Cookies, Formats, Services, Logging, etc..

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableCors-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableCors() `method`

##### Summary

Server Cors Configuration

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableEndpoints-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableEndpoints() `method`

##### Summary

Server Endpoints Configuration

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableLogging-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableLogging() `method`

##### Summary

Enable Server Logging in Debug Mode

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerEnablingServices-EnableWebSocket-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableWebSocket(app) `method`

##### Summary

Server WebSocket Configuration

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| app | [Microsoft.AspNetCore.Builder.IApplicationBuilder@](#T-Microsoft-AspNetCore-Builder-IApplicationBuilder@ 'Microsoft.AspNetCore.Builder.IApplicationBuilder@') |  |

<a name='T-EasyITCenter-ServerCoreStructure-ServerLocalDbDials'></a>
## ServerLocalDbDials `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

Special Functions: Definition of Selected tables for Optimal Using to Data nature Its saves
traffic, increases availability and for Example implemented Language is in Develop Auto Fill
Table when is First Using Its can be used for more Dials

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerManagementApi'></a>
## ServerManagementApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Restart Api for Remote Control

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerManagementApi-FtpServerStart'></a>
### FtpServerStart() `method`

##### Summary

FtpServerStart Api

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerManagementApi-FtpServerStop'></a>
### FtpServerStop() `method`

##### Summary

FtpServerStop Api

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerManagementApi-ServerRestart'></a>
### ServerRestart() `method`

##### Summary

Core Server Restart Control Api

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerManagementApi-ServerSchedulerStart'></a>
### ServerSchedulerStart() `method`

##### Summary

AutoScheduler Server Controls

##### Returns



##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerMarkDownApi'></a>
## ServerMarkDownApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Database Schema Diagram Controller

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='T-EasyITCenter-ServerCoreConfiguration-ServerModules'></a>
## ServerModules `type`

##### Namespace

EasyITCenter.ServerCoreConfiguration

##### Summary

Configure Server Ad-dons and Modules

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureDBEntitySchema-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureDBEntitySchema(services) `method`

##### Summary

Module Entity Schema Design Generator

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureDocumentation-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureDocumentation(services) `method`

##### Summary

Server Module: Generted Developer Documentation for Defvelopers Documentation contain
full Server Structure for extremelly simple developing

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureGitServer-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureGitServer(services) `method`

##### Summary

Server Module: GitServer Startup Configuration

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureHealthCheck-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureHealthCheck(services) `method`

##### Summary

Server Module: Automatic DB Data Manager for work with data directly Extreme
Posibilities https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureLiveDataMonitor-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureLiveDataMonitor(services) `method`

##### Summary

Server Module: Generted Developer Documentation for Defvelopers Documentation contain
full Server Structure for extremelly simple developing

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureMarkdownAsHtmlFiles-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureMarkdownAsHtmlFiles(services) `method`

##### Summary

Server Module: Configure Automatic MDtoHtml Files Show in WebPages

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureScheduler-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureScheduler(services) `method`

##### Summary

Server Module: Configures the Scheduler Module.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') | The services. |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModules-ConfigureSwagger-Microsoft-Extensions-DependencyInjection-IServiceCollection@-'></a>
### ConfigureSwagger(services) `method`

##### Summary

Server Module: Swagger Api Doc Generator And Online Tester Configuration

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection@](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection@ 'Microsoft.Extensions.DependencyInjection.IServiceCollection@') |  |

<a name='T-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling'></a>
## ServerModulesEnabling `type`

##### Namespace

EasyITCenter.ServerCoreConfiguration

##### Summary

Enable Configured Server Ad-dons and Modules

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableDBEntitySchema-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableDBEntitySchema() `method`

##### Summary

Server Module: Enable DBEntitySchema Web Page

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableDocumentation-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableDocumentation() `method`

##### Summary

Server Module: Enable Generated Developer Documentation

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableLiveDataMonitor-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableLiveDataMonitor() `method`

##### Summary

Server Module: Enable Live Data Monitor

##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableMarkdownAsHtmlFiles-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableMarkdownAsHtmlFiles(app) `method`

##### Summary

Server Module: Enable Automatic MDtoHtml Files Show in WebPages

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| app | [Microsoft.AspNetCore.Builder.IApplicationBuilder@](#T-Microsoft-AspNetCore-Builder-IApplicationBuilder@ 'Microsoft.AspNetCore.Builder.IApplicationBuilder@') |  |

<a name='M-EasyITCenter-ServerCoreConfiguration-ServerModulesEnabling-EnableSwagger-Microsoft-AspNetCore-Builder-IApplicationBuilder@-'></a>
### EnableSwagger() `method`

##### Summary

Server Module: Enable Swagger Api Doc Generator And Online Tester

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerOpenGraphApi'></a>
## ServerOpenGraphApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Email sender Api for logged Communication

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerOpenGraphApi-GetFromUrl-EasyITCenter-DBModel-WebUrlRequest-'></a>
### GetFromUrl(request) `method`

##### Summary

Documentation https://ogp.me/
Tool For Extend Loaded Html By Add Custom Metadata by Format OpenGraph
TODO Implement Inserting Metadata or How To Use
Its Description Content as Metadata for Facebokk etc

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| request | [EasyITCenter.DBModel.WebUrlRequest](#T-EasyITCenter-DBModel-WebUrlRequest 'EasyITCenter.DBModel.WebUrlRequest') |  |

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerRssFeedApi'></a>
## ServerRssFeedApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Restart Api for Remote Control

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='T-EasyITCenter-ServerCoreStructure-ServerRuntimeData'></a>
## ServerRuntimeData `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

The server runtime data.

<a name='F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-CentralWebSocketList'></a>
### CentralWebSocketList `constants`

##### Summary

Central WebSocket List for Easy one place Using

<a name='F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-FileRotatorRuntineLibrary'></a>
### FileRotatorRuntineLibrary `constants`

##### Summary

SercerCore FilesLibrary For Rotator
TODO Clean

<a name='F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-LocalDBTableList'></a>
### LocalDBTableList `constants`

##### Summary

The local db table list.

<a name='F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerArgs'></a>
### ServerArgs `constants`

##### Summary

Server Starup Args

<a name='F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerAutoSchedulerProvider'></a>
### ServerAutoSchedulerProvider `constants`

##### Summary

Server Securited FTP Provider for Remote Control

<a name='F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerCancelToken'></a>
### ServerCancelToken `constants`

##### Summary

Cancellation Token for Server Remote Control

<a name='F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerCoreStatus'></a>
### ServerCoreStatus `constants`

##### Summary

Server Core Status

<a name='F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerFTPProvider'></a>
### ServerFTPProvider `constants`

##### Summary

Server Securited FTP Provider for Remote Control

<a name='F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerRestartRequest'></a>
### ServerRestartRequest `constants`

##### Summary

Server Restart Request Indicator

<a name='F-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ServerServiceProvider'></a>
### ServerServiceProvider `constants`

##### Summary

Central List With references on Hested Server Sevices For Acess and Using Hosted
Functionalities for example: Start/Stop Service And More Other sub services for Optimal Hosting

<a name='P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ConfigFile'></a>
### ConfigFile `property`

##### Summary

Gets or Sets the configure file.

<a name='P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-ContentRootPath'></a>
### ContentRootPath `property`

##### Summary

Gets or Sets Project Root Directory.

<a name='P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-DataPath'></a>
### DataPath `property`

##### Summary

Gets or Sets the data path.

<a name='P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-DebugMode'></a>
### DebugMode `property`

##### Summary

Gets or Sets the debug mode.

<a name='P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-Setting_folder'></a>
### Setting_folder `property`

##### Summary

Gets or Sets the setting_folder.

<a name='P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-Startup_path'></a>
### Startup_path `property`

##### Summary

Gets or Sets the startup_path.

<a name='P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-UserPath'></a>
### UserPath `property`

##### Summary

Gets or Sets the configure file.

<a name='P-EasyITCenter-ServerCoreStructure-ServerRuntimeData-WebRoot_path'></a>
### WebRoot_path `property`

##### Summary

Gets or Sets the startup_path.

<a name='T-EasyITCenter-ServerCoreStructure-ServerStatuses'></a>
## ServerStatuses `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

Server and Hosted Services Runtime Statusses

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerSystemControlApi'></a>
## ServerSystemControlApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Database Schema Diagram Controller

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='T-EasyITCenter-ControllersExtensions-ServerToolsMinifierApi'></a>
## ServerToolsMinifierApi `type`

##### Namespace

EasyITCenter.ControllersExtensions

##### Summary

Server Root Controller

<a name='M-EasyITCenter-ControllersExtensions-ServerToolsMinifierApi-MinifyAndReturn-EasyITCenter-ServerCoreWebPages-WebFileList-'></a>
### MinifyAndReturn(filelist) `method`

##### Summary

Minify FileList and Return Back Without Rename

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| filelist | [EasyITCenter.ServerCoreWebPages.WebFileList](#T-EasyITCenter-ServerCoreWebPages-WebFileList 'EasyITCenter.ServerCoreWebPages.WebFileList') |  |

<a name='M-EasyITCenter-ControllersExtensions-ServerToolsMinifierApi-MinifyAndSaveMinToPath-EasyITCenter-ServerCoreWebPages-WebFileList-'></a>
### MinifyAndSaveMinToPath(filelist) `method`

##### Summary

Minifi FileList And Save As Minify to FilePath

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| filelist | [EasyITCenter.ServerCoreWebPages.WebFileList](#T-EasyITCenter-ServerCoreWebPages-WebFileList 'EasyITCenter.ServerCoreWebPages.WebFileList') |  |

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerWebPagesExportApi'></a>
## ServerWebPagesExportApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerWebPagesExportApi-ExportMinimalStaticWebPages'></a>
### ExportMinimalStaticWebPages() `method`

##### Summary

Minimal Export of Page for Running
on every Web servers Without Needs anythink

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerWebPagesExportApi-ExportXamlCz'></a>
### ExportXamlCz() `method`

##### Summary

Update Translation Table By All Tables and Field Names For Export Offline Language
Dictionary CZ for System

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerWebPagesExportApi-ExportXamlEn'></a>
### ExportXamlEn() `method`

##### Summary

Update Translation Table By All Tables and Field Names For Export Offline Language
Dictionary EN for System

##### Returns



##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreWebPages-ServerWebPagesLogin'></a>
## ServerWebPagesLogin `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

Custom Class For Login over Server Web Pages

<a name='T-EasyITCenter-ServerCoreWebPages-ServerWebPagesToken'></a>
## ServerWebPagesToken `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

Server WebPages Communication Token Definition for Security content And Load Allowed Content

<a name='T-EasyITCenter-ServerCoreDBSettings-ServerWebProviderGetOnlyApi'></a>
## ServerWebProviderGetOnlyApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Root Controller

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerWebProviderGetOnlyApi-GetManagedCssJsScriptList'></a>
### GetManagedCssJsScriptList() `method`

##### Summary

Provider: For Show EASY Script Codes on WebPages

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerWebProviderGetOnlyApi-GetSolutionToolList'></a>
### GetSolutionToolList() `method`

##### Summary

Provider Its for Show Tools on WebPages

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDBSettings-ServerWebProviderGetOnlyApi-GetTemplateWebMenuList'></a>
### GetTemplateWebMenuList() `method`

##### Summary

Provider: For Show EASY Menu Codes on WebPages

##### Returns



##### Parameters

This method has no parameters.

<a name='T-UploadFilesServer-Controllers-ServerWebsiteStaticFilesApi'></a>
## ServerWebsiteStaticFilesApi `type`

##### Namespace

UploadFilesServer.Controllers

<a name='M-UploadFilesServer-Controllers-ServerWebsiteStaticFilesApi-GetFiles-EasyITCenter-DBModel-StaticFilesRequest-'></a>
### GetFiles(request) `method`

##### Summary

WebStatic Files for Website and Path
Get Full Folder Info

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| request | [EasyITCenter.DBModel.StaticFilesRequest](#T-EasyITCenter-DBModel-StaticFilesRequest 'EasyITCenter.DBModel.StaticFilesRequest') |  |

<a name='T-EasyITCenter-DBModel-SetReportFilter'></a>
## SetReportFilter `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Database Model Extension Definitions Its API Filter, Extended Classes, Translation, etc

<a name='T-EasyITCenter-ServerCoreDBSettings-SitemapController'></a>
## SitemapController `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Sitemap.xml Routing

##### See Also

- [Microsoft.AspNetCore.Mvc.Controller](#T-Microsoft-AspNetCore-Mvc-Controller 'Microsoft.AspNetCore.Mvc.Controller')

<a name='T-EasyITCenter-ControllersExtensions-SoftwareTriggers'></a>
## SoftwareTriggers `type`

##### Namespace

EasyITCenter.ControllersExtensions

##### Summary

Softwasre Triggers For Web and System Login/Visit History View

<a name='M-EasyITCenter-ControllersExtensions-SoftwareTriggers-WriteVisit-System-String,System-Int32,System-String-'></a>
### WriteVisit(ipAddress,userId,userName) `method`

##### Summary

Trigger User Login History

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAddress | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |
| userId | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') |  |
| userName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='M-EasyITCenter-ControllersExtensions-SoftwareTriggers-WriteWebVisit-System-String-'></a>
### WriteWebVisit(ipAddress) `method`

##### Summary

Trigger Web IP Hosts History List

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ipAddress | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='T-EasyITCenter-ServerCoreDBSettings-SomeRSSProvider'></a>
## SomeRSSProvider `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

RSS Provider

<a name='T-EasyITCenter-Startup'></a>
## Startup `type`

##### Namespace

EasyITCenter

##### Summary

Server Startup Definitions

<a name='M-EasyITCenter-Startup-Configure-Microsoft-AspNetCore-Builder-IApplicationBuilder,Microsoft-Extensions-Hosting-IHostApplicationLifetime-'></a>
### Configure(app,serverLifetime) `method`

##### Summary

Server Core: Main Enabling of Server Services, Technologies, Modules, etc..

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| app | [Microsoft.AspNetCore.Builder.IApplicationBuilder](#T-Microsoft-AspNetCore-Builder-IApplicationBuilder 'Microsoft.AspNetCore.Builder.IApplicationBuilder') |  |
| serverLifetime | [Microsoft.Extensions.Hosting.IHostApplicationLifetime](#T-Microsoft-Extensions-Hosting-IHostApplicationLifetime 'Microsoft.Extensions.Hosting.IHostApplicationLifetime') |  |

<a name='M-EasyITCenter-Startup-ConfigureServices-Microsoft-Extensions-DependencyInjection-IServiceCollection-'></a>
### ConfigureServices(services) `method`

##### Summary

Server Core: Main Configure of Server Services, Technologies, Modules, etc..

##### Returns

void.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| services | [Microsoft.Extensions.DependencyInjection.IServiceCollection](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection 'Microsoft.Extensions.DependencyInjection.IServiceCollection') |  |

<a name='M-EasyITCenter-Startup-ServerOnStarted'></a>
### ServerOnStarted() `method`

##### Summary

Server Core Enabling Disabling Hosted Services

##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreDBSettings-StdAuthGenericProviderApi`3'></a>
## StdAuthGenericProviderApi\`3 `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Restart Api for Remote Control

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='T-EasyITCenter-ServerCoreDBSettings-StdFreeGenericProviderApi`3'></a>
## StdFreeGenericProviderApi\`3 `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server Restart Api for Remote Control

##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='T-EasyITCenter-ServerCoreDBSettings-SystemBuilderOnlinePreviewApi'></a>
## SystemBuilderOnlinePreviewApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

<a name='M-EasyITCenter-ServerCoreDBSettings-SystemBuilderOnlinePreviewApi-GetWebBuilderCodePreview-System-Int32-'></a>
### GetWebBuilderCodePreview() `method`

##### Summary

SYSTEM WebBuilder Code Library Preview Api

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-ServerCoreDBSettings-SystemBuilderOnlinePreviewApi-GetWebBuilderGlobalBodyBlockPreview-System-Int32-'></a>
### GetWebBuilderGlobalBodyBlockPreview(id) `method`

##### Summary

SYSTEM WebBUilder Global Page Body Block Preview API

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | The identifier. |

<a name='M-EasyITCenter-ServerCoreDBSettings-SystemBuilderOnlinePreviewApi-GetWebBuilderMenuPreview-System-Int32-'></a>
### GetWebBuilderMenuPreview(id) `method`

##### Summary

SYSTEM WebBuilder Menu Preview Api

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | The identifier. |

<a name='T-EasyITCenter-DBModel-SystemOperationMessage'></a>
## SystemOperationMessage `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Custom Definition for Returning List with One Record from Operation Stored Procedures

<a name='T-EasyITCenter-ServerCoreDBSettings-SystemStdAuthGenericProviderApi`3'></a>
## SystemStdAuthGenericProviderApi\`3 `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary



##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='T-EasyITCenter-ServerCoreDBSettings-SystemStdFreeGenericProviderApi`3'></a>
## SystemStdFreeGenericProviderApi\`3 `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary



##### See Also

- [Microsoft.AspNetCore.Mvc.ControllerBase](#T-Microsoft-AspNetCore-Mvc-ControllerBase 'Microsoft.AspNetCore.Mvc.ControllerBase')

<a name='T-EasyITCenter-Controllers-SystemWebDocApi'></a>
## SystemWebDocApi `type`

##### Namespace

EasyITCenter.Controllers

<a name='F-EasyITCenter-Controllers-SystemWebDocApi-_hostingEnvironment'></a>
### _hostingEnvironment `constants`

##### Summary

For Webroot folder Update with detect changes and modify static pages

<a name='M-EasyITCenter-Controllers-SystemWebDocApi-GetMdDocumentPreview-System-Int32-'></a>
### GetMdDocumentPreview() `method`

##### Summary

Documentation Code Manager Html Preview Api Startup Viewer

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Controllers-SystemWebDocApi-GetMdLibraryPreview-System-Int32-'></a>
### GetMdLibraryPreview() `method`

##### Summary

Documentation Code Manager Html Preview Api Startup Viewer

##### Returns



##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-DBModel-UploadFileData'></a>
## UploadFileData `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Generator File Class structure

<a name='T-EasyITCenter-DBModel-UploadGeneratorFiles'></a>
## UploadGeneratorFiles `type`

##### Namespace

EasyITCenter.DBModel

##### Summary

Generator Uploading files for Generators

<a name='T-EasyITCenter-ServerCoreWebPages-UserConfig'></a>
## UserConfig `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

Custom Class For UserConfig over Server Web Pages

<a name='T-EasyITCenter-ServerCoreWebPages-WebMessage'></a>
## WebMessage `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

Custom WebMessage Class For Server Web Pages

<a name='T-EasyITCenter-Controllers-WebPagesAdminGroupMenuListApi'></a>
## WebPagesAdminGroupMenuListApi `type`

##### Namespace

EasyITCenter.Controllers

<a name='M-EasyITCenter-Controllers-WebPagesAdminGroupMenuListApi-DeleteWebGroupMenuList-System-String-'></a>
### DeleteWebGroupMenuList(id) `method`

##### Summary

WebAdmin API

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The identifier. |

<a name='M-EasyITCenter-Controllers-WebPagesAdminGroupMenuListApi-InsertOrUpdateGroupWebMenuList-EasyITCenter-ServerCoreWebPages-WebSettingList1-'></a>
### InsertOrUpdateGroupWebMenuList(record) `method`

##### Summary

WebAdmin API

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| record | [EasyITCenter.ServerCoreWebPages.WebSettingList1](#T-EasyITCenter-ServerCoreWebPages-WebSettingList1 'EasyITCenter.ServerCoreWebPages.WebSettingList1') | The record. |

<a name='T-EasyITCenter-Controllers-WebPagesMessagesListApi'></a>
## WebPagesMessagesListApi `type`

##### Namespace

EasyITCenter.Controllers

<a name='M-EasyITCenter-Controllers-WebPagesMessagesListApi-GetWebPageMessagesList'></a>
### GetWebPageMessagesList() `method`

##### Summary

Gets the web page messages list.

##### Returns



##### Parameters

This method has no parameters.

<a name='M-EasyITCenter-Controllers-WebPagesMessagesListApi-InsertWebPageMessagesList-EasyITCenter-ServerCoreWebPages-WebMessage-'></a>
### InsertWebPageMessagesList(webdata) `method`

##### Summary

Inserts the web page messages list.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| webdata | [EasyITCenter.ServerCoreWebPages.WebMessage](#T-EasyITCenter-ServerCoreWebPages-WebMessage 'EasyITCenter.ServerCoreWebPages.WebMessage') | The webdata. |

<a name='T-EasyITCenter-ServerCoreDBSettings-WebPagesSystemDataGetOnlyApi'></a>
## WebPagesSystemDataGetOnlyApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Server WebPages Controller

<a name='M-EasyITCenter-ServerCoreDBSettings-WebPagesSystemDataGetOnlyApi-GetDeveloperNewsList'></a>
### GetDeveloperNewsList(rec) `method`

##### Summary

Web Developer News Info Api

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| rec | [M:EasyITCenter.ServerCoreDBSettings.WebPagesSystemDataGetOnlyApi.GetDeveloperNewsList](#T-M-EasyITCenter-ServerCoreDBSettings-WebPagesSystemDataGetOnlyApi-GetDeveloperNewsList 'M:EasyITCenter.ServerCoreDBSettings.WebPagesSystemDataGetOnlyApi.GetDeveloperNewsList') | The record. |

<a name='M-EasyITCenter-ServerCoreDBSettings-WebPagesSystemDataGetOnlyApi-GetMottoList'></a>
### GetMottoList() `method`

##### Summary

MottoList API for Web Portal

##### Returns



##### Parameters

This method has no parameters.

<a name='T-EasyITCenter-ServerCoreDBSettings-WebPagesSystemToolsApi'></a>
## WebPagesSystemToolsApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

<a name='M-EasyITCenter-ServerCoreDBSettings-WebPagesSystemToolsApi-SaveNewMinifiedFile-EasyITCenter-ServerCoreWebPages-MinifiedFile-'></a>
### SaveNewMinifiedFile(rec) `method`

##### Summary

Saving Minified File API Allowed Only In Savig Time Api 
Is Hidden Its Called Back From external minifier Tool

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| rec | [EasyITCenter.ServerCoreWebPages.MinifiedFile](#T-EasyITCenter-ServerCoreWebPages-MinifiedFile 'EasyITCenter.ServerCoreWebPages.MinifiedFile') | The record. |

<a name='T-EasyITCenter-ServerCoreDBSettings-WebPagesUserApi'></a>
## WebPagesUserApi `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

<a name='M-EasyITCenter-ServerCoreDBSettings-WebPagesUserApi-PostSendVerifyCode-EasyITCenter-ServerCoreWebPages-EmailVerification-'></a>
### PostSendVerifyCode(email) `method`

##### Summary

WebPages Verification Email

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| email | [EasyITCenter.ServerCoreWebPages.EmailVerification](#T-EasyITCenter-ServerCoreWebPages-EmailVerification 'EasyITCenter.ServerCoreWebPages.EmailVerification') | The email. |

<a name='T-EasyITCenter-ServerCoreWebPages-WebRegistration'></a>
## WebRegistration `type`

##### Namespace

EasyITCenter.ServerCoreWebPages

##### Summary

WebPages User Registration class

<a name='T-EasyITCenter-ServerCoreStructure-WebSocketExtension'></a>
## WebSocketExtension `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

WebSocket Extension Definition For Simple Central Control All Connection By Connection Path
and Timeout

<a name='T-EasyITCenter-ServerCoreStructure-WebSocketLogProvider'></a>
## WebSocketLogProvider `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

!!! Implemented Server Core WebSocket System LogProvider Stream This Is Special Serice For
Remote Monitoring On More Devices in OneTime

##### See Also

- [Microsoft.Extensions.Logging.ILoggerProvider](#T-Microsoft-Extensions-Logging-ILoggerProvider 'Microsoft.Extensions.Logging.ILoggerProvider')

<a name='T-EasyITCenter-ServerCoreStructure-WebSocketLogger'></a>
## WebSocketLogger `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

Server Core WebSocket System Logger Interface

##### See Also

- [Microsoft.Extensions.Logging.ILogger](#T-Microsoft-Extensions-Logging-ILogger 'Microsoft.Extensions.Logging.ILogger')

<a name='M-EasyITCenter-ServerCoreStructure-WebSocketLogger-Log``1-Microsoft-Extensions-Logging-LogLevel,Microsoft-Extensions-Logging-EventId,``0,System-Exception,System-Func{``0,System-Exception,System-String}-'></a>
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

<a name='T-EasyITCenter-ServerCoreStructure-WebToolsOperations'></a>
## WebToolsOperations `type`

##### Namespace

EasyITCenter.ServerCoreStructure

##### Summary

Server Web Helpers for EASY working Here are extension for Database Model, WebSocket

<a name='M-EasyITCenter-ServerCoreStructure-WebToolsOperations-DeleteWebSourceFile-Microsoft-AspNetCore-Hosting-IHostingEnvironment@,EasyITCenter-DBModel-WebCoreFileList@-'></a>
### DeleteWebSourceFile(hostingEnvironment,record) `method`

##### Summary

Delete Managed Web Source Files from Dev and Startup Folders Delete Minified and Full Script

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hostingEnvironment | [Microsoft.AspNetCore.Hosting.IHostingEnvironment@](#T-Microsoft-AspNetCore-Hosting-IHostingEnvironment@ 'Microsoft.AspNetCore.Hosting.IHostingEnvironment@') | The hosting environment. |
| record | [EasyITCenter.DBModel.WebCoreFileList@](#T-EasyITCenter-DBModel-WebCoreFileList@ 'EasyITCenter.DBModel.WebCoreFileList@') | The record. |

<a name='M-EasyITCenter-ServerCoreStructure-WebToolsOperations-SaveWebSourceFile-Microsoft-AspNetCore-Hosting-IHostingEnvironment@,EasyITCenter-DBModel-WebCoreFileList@-'></a>
### SaveWebSourceFile(hostingEnvironment,record) `method`

##### Summary

Saving Modified Managed Web Source Files to Dev and Startup Folders Used For JS,CSS Files

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| hostingEnvironment | [Microsoft.AspNetCore.Hosting.IHostingEnvironment@](#T-Microsoft-AspNetCore-Hosting-IHostingEnvironment@ 'Microsoft.AspNetCore.Hosting.IHostingEnvironment@') | The hosting environment. |
| record | [EasyITCenter.DBModel.WebCoreFileList@](#T-EasyITCenter-DBModel-WebCoreFileList@ 'EasyITCenter.DBModel.WebCoreFileList@') | The record. |

<a name='T-EasyITCenter-ServerCoreDBSettings-WorkFlowContext'></a>
## WorkFlowContext `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

TODO  Inherit DB Context with 
Table Prefix

<a name='T-EasyITCenter-ServerCoreDBSettings-WorkflowContextExtensions'></a>
## WorkflowContextExtensions `type`

##### Namespace

EasyITCenter.ServerCoreDBSettings

##### Summary

Database Context Extensions for All Types Procedures For Retun Data in procedure can be
Simple SELECT * XXX and you Create Same Class for returned DataSet
