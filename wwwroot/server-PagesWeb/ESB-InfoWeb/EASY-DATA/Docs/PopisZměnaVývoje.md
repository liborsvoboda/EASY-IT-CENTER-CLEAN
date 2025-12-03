## Projects Legend 
    EB = EASYBuilder 
    ED = Golden
    SD = EASYBuilderDataCenter
    SP = EASYBuilder application
    I  = Install file
    DB = Database

    Each changes IN EB/SP can be deployed to the second program
    Each changes IN ED/SD can be deployed to the second program

Project/Program Install file are for absolute simple Installation with all Dependencies
Documentation And Software for Testing you find on  

[https://groupware-solution.eu/webdav/Marketing/](https://groupware-solution.eu/webdav/Marketing/ "")  
login: marketing/marketing


    ALL Applications Prepared for Simple Installation / Buy in more installation Types - by user friendly Install file and License Server
    
---

### Application Clones FE + BE
    LicenseSrv    -  MultiOS License Server with listen API GET/POST server / generate 
                     Unlimited Static/Dynamic CODES and Client for managing
    PRUVODKY      -  Windows XP+ Implementation Production Guides for Production Companies 
                     For Office / Touch Panels using with unlimited Clients and printing possibilities
    ShoPingER     -  Windows XP+ MultiBranch Offer/Order/Invoice System with multimedia Files 
                     Supported with Unlimited Clients and Printing possibilities
    LicenceShoper -  MultiOS License Server PLUS Windows XP+ MultiBranch Invoice system 
                     [LicenseSrv + ShoPingER]

    
---

### SOLUTION MAIN PARTS
    EASYBuilder  Developing C# WPF Visual Studio Project With MustiVariable Menu Settings, 
     With All DataForm Template types DATAView / DATADetail / With SubDATAview / 
     With SubFullDataDetail / 3D / Document / Video
     for Build ANY Information / Multimedia / Control / Flow / Reporting and More Systems
     FOR NEXT COPY / PASTE DEVELOPMENT IN EXTREMELY LOW PRICE 5000Kč/200EURO - Project LICENSE

    Golden - Universal Secure MultiPlatform MultiDATABASE Backend Server Project 
                     WiTH RESTFULL / WEBSOCKET implementations
         With All Template types for INSERT / UPDATE / DELETE / SELECT / 
         PROCEDURE / SUBFORMDATA and more Other
         With DATABASE , Table Template, Procedure Template, View Template, 
         Backup/Restore and more Examples
         With Tables, Indexes, ForeignKeys in All Standard DB Using 
         FOR NEXT COPY / PASTE DEVELOPMENT IN EXTREMELY LOW PRICE 5000Kč/200EURO - Project LICENSE
    
    FYI Reporting  - FreeWare Full Report Designer and Viewer for Printing All document Types 
                     / Barcodes, EAN, QR, Graphs, SubReport, etc.

    
---

### SW   Date        Version  Speed Development Description by one man Only

    EB/SP/I  1.12.2022   1.5.78.925 Start of Developing steps describing
    EB   1.12.2022    Added Link for FyiReportink 100 Examples to 
                                        Help_Commands
    EB/SP/I  1.12.2022   1.5.78.944 Implemented DB Connection string to settings for All 
                                         Report as param, centralized
    EB/SP  1.12.2022    Implemented new TreeView Menu for much more menu 
                                        items in Menu
    SD/SP  1.12.2022    Implemented CurrencyList, UnitList, AddressList   
                                        ItemList Agendas
    EB/SP  1.12.2022    Implemented Copy menu button for copy Each record in 
                                        listview
    SD   1.12.2022               Describe existing API call to documentation
    EB/SP  2.12.2022    Changed Settings for much more application menu Types   
                                        and implemented new Menu
    EB/SP  2.12.2022 1.5.78.954 Publish new version EASYBuilder installers on 
                                        Google/WebDav/WebSite
    EB/ED/SD/SP 2.12.2022               Publish Development Info on WebSite And Marketing 
    EB/SP       3.12.2022               Repaired filtering on null values
    EB/SP       3.12.2022               Centralized load Report List Control from ApiUrl 
                                        definition List for these addresses
    SD   3.12.2022               Create TemplateList Table

    to          15.12.2022             5 Applications Created IN  14 DAYS WITH 20-40 DB 
                                       tables / Agendas in ONE MAN ONLY 

    
---

2023.07.07   FAST REcapitulation 

Exist Few Tasks For Better Settings Maily for EASY SYSTEM BUILDER (SET Full Automatic Translating for Example)
But Yesterday Will Be Regenerated Older EDC & ESB Clones Over Automatized Solutions.

EDC now MULTI Server (GroupWare Solution) Has Own System Clone As Basic Server Manager - Any Interest of This Solution (its not normal)
Server for Testing With Posible FUNCTIONalities most Than commercial Products I have Problem Find Normal Work as alone Developer

So in Week Will start The EASY-DATA-CENTER 
(Backend API from Start, but now + Media,Multi Web,FTP,Socket,DOCs,Emailing,HealthCheck, etc With Absolute News In WORLD)
example: Remote Monitoring internal logger of Server over WebSocet, Automatic Translation Table Filler by First World Using in System and much more

So News Are In Video, New Full Agenda from DB to System is Finished in 5min - Copy Similar To 5 Hours - Complicated for More Joing Example OCR
for Max 2 Days For Implmenent almost perfect Solution for HTML Editing with Allmost HTML shits and Fails in Format.

Perhaps Severu's Media Backend Generator, which will generate a RESTFUL API with a lot of other benefits,
will awaken interest and I will finally find clients instead of mocking that I can't do IT. 

PS: i Start IT on ATARI 65XE in 1989 and this Year is 33 Years from My First Program Code.

So Recap Solutions By Videos I Found Plan Implement Automatic LetsEncrypt for Server, Gihub Custom Server,
cheap EDC Server Generator, Next Few cheap Generator which i build on this Way, ESB Generator, XAML Form Builder for EASY Build 
System By Clicking on Mouse.

---

### 05.12.23 Globální Změny
> Vznikla první agenda s automaticky překládanými poli
>> Úkol, aktualizovat všechny existující aonliner agendy na automatický překlad
```cs
- Automatický Překlad sbírá pomocí funkce "TranslateFormFields"
všechny Popisky-LAbel typy a Button Tlačítka Typy a překládá je oproti
DB překladovému seznamu 

- Odpadá nutnost vupisovat typy polí
- POZOR toto je možné jen preo ONLINE AGENDY seznam je načítaný ze serveru

- Další Varianta Překladu je pomocí ruční definice popisku z názvu
- použije "fileType" pro překlad
*DBOperations.DBTranslation(lbl_fileType.Name.Split('_')[1])   

nebo přes lokální Slovníky "Languages" pro použití OffLine
* lbl_fileType.Content = Resources["fileType"].ToString()  

- Menu je Celé kromě volby Nastavení Klienta zmeněno na automatický překlad DB slovníku

- Odpadá nutnost kvůli nové online agendě importovat slovníky

- Slovníky lze Generovat z Backendu a Vložit Do projektu Systému pro Offline Použití
- Použité Jazyky CS,EN, neomezená možnost jednoduchého rozšíření Lang Tabulky

```

---