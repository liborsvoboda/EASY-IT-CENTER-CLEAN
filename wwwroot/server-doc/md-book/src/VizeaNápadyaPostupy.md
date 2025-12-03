# Úvod   EIC&ESB-Globální IT Řešení na míru  

EasyITcenter & EasySYSTEMbuiler - Globální Řešení vašeho IT
Obecné Informace o Struktuře, vazbách a možnostech tohoto Unikátního Globálnho Řešení
Celé oblasti IT až na malinké vyjímky.

Zde budu průběžně zapisovat nápady

# Rozcestník IT Universální Řešení  EIC & ESB    
Celé IT v Jednom Řešení pro Váš Bussines, Firmu,    
    
- [Systém,IS,  Administrace, Vývoj, Editace k vidění Online](https://kliknetezde.cz:8000)    
- [30 denní Plná Verze Ke Stažení](/Downloads)    
    
    
- [Stručný Úvod EIC & ESB](/EIC&ESBDocs/SolutionFastInfo/index.html)    
- [Vývojářská Dokumentace EIC & ESB](/EIC&ESBDocs/CodeDocs/index)    
- [Průvodce kódem EIC & ESB](/EIC&ESBCodeBrowser/index/index.html)    
- [Server Info EIC](/EIC&ESBDocs/EIC-InfoWeb/index.html)    
- [Systém Info ESB](/EIC&ESBDocs/ESB-InfoWeb/index.html)    
- [Členění EIC](/EIC&ESBDocs/EIC-XmlWeb/index.html)    
- [Členění ESB](/EIC&ESBDocs/ESB-XmlWeb/index.html)    
- [Galerie EIC](/EIC&ESBDocs/EIC-Gallery/index.html)    
- [Galerie ESB](/EIC&ESBDocs/ESB-Gallery/index.html)    
- [Generická Nápověda](/EIC&ESBDocs/ITHelpIdeasDoc/index.html)    
- [Web Portal z Editoru](/Portal)    
    
---    
    
# ESB - SYSTEM DESIGNER - TOUCH SYSTEMS - WEB    
Generátor - WebKonfigurátor - Vytvoření LIGHT Klonu    
    
**PředObjednávky NA EasySYSTEMbuilder LIGHT za POUHÝCH 10000KČ**    
Dodání Do 1 Měsíce.    
    
Chystá se Nový LIGHT KLON EasySYSTEMbuilderu    
pro účely:    
- Samostatný ANY SYSTEM Designer/APP    
- Dotykové TouchPaNely    
- Provoz Dynamického WebServeru    
    
- Řeší Vytváření Systémů: WebView v App    
- Řeší Vytváření Webů    
- Řeší Vytváření TouchPanelů    
- Z ESB udělat Light Klienta pro TOTO Řešení    
    
Logika:    
- Vytvořit Tabulku Webové Objekty    
info URL    
seznam ostatních objektu v pořadí    
Jak se pospojují do výsledné Stránky    
    
1 Tabulka na celé řešení:    
- ID AutoIncrement    
- Primární Ano/Ne = Startovací Stránka    
  bude zobrazena na dotykovém panelu    
- ServerUrl Adresa kde se spustí    
  je nepovinná pro ID co jsou jen Objekty    
- Požadována Autentifikace ROLE - Ano/Anonymous    
  Když Ano - Přesměrovat+Kam nebo Přeskočit    
- Html Content (HTML,JS,CSS) - každá část má své potřebné    
- Seznam ID následných: umožňuje dynamickou naváznost    
- Aktivní    
- UserId    
- Timestamp    
    
Web Zázemí: Interní Web Server Systému    
- Metro4    
- 1000+ k Dispozici Knihovny Statických Nástrojů    
- JQuery    
- SQLite DB s Editorem    
- AutoTranslator    
    
Prvni musí být Matice Web Stránky, Ostatní Objekty se    
dohrají JQuery objekt.html('')    
    
Vytvořit Zobrazení Schematu Provedení    
    
----------------------------------------    
    
udelat agendu generatory - tim myslim vygenerovat galerii, dokumentaci atd na ceste v administraci    
    
    
----    
    
    
    
### LOW/NO/FULL code EXTREMELY EASY TO DEVELOP ANY SYSTEM    
<sup>**For thinking, the development of tools and work with them worthy in the 21st century**</sup>    
    
### The development of FRONTEND as an entire IS system as you do not know it - only 3 choices are enough    
    
     Logic - everything in the database is a LIST (list of invoices)    
-> This may or may not have a DETAIL (list of items)    
|| OR it needs to be just settings, i.e. Detail (program settings, video processing, etc.)    
    
And the result can be a system that SAP or anyone else can only dream of.    
Almost like tennis, you can publish one table after another, and by evening you have a small system.    
    
### DEFINITION OF 3 layer SYSTEM and necessary components    
> Database - place for DATA    
> Backend Server - A service that securely conveys data to applications    
> Frontend/User Application - A nice application to easily work with data    
> Print support - creation and printing of any reports    
    
### START in 1 day you will start your new system in three steps    
    
    
---    
    
### Development in Golden UNIVERS RESTFULL/SOCKET BACKEND SERVER in three user steps    
    
* Create any database Table. Use the TemplateList Template    
        and just insert your boxes into it. Remember Indexes, Foreign Keys, or look at already existing tables or consult with me. It IS for a few minutes    
    
* You export the tables as a model using the prepared CMD command to the BACKEND project    
    [ EntityFramework 6 ] command: Scaffold-DbContext "Server=IP;Database=DB;User ID=USER;Password=PW;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir DBModel    
    done - the entire database is defined in the Backend server    
    
    
* From existing calls, e.g. UserList, copy and rename the new API call for the new table [GET,POST,PUT,PATCH,DELETE]    
    COPY file -> PASTE file -> Rename to new API for example: /skladList and Build&Run    
    Done, the API Server is WAITING at http://vaseip/skladList for your call and deployment at the client, in the company, anywhere    
    
    
---    
    
### Development in EASYBuilder Modern WINDOWS XP+ thin application or system in three user steps    
    
* You copy the table definition from the model created in the BACKEND project to the FRONTEND project    
    COPY Class from BE Model -> PASTE into FE application -> add new APIURL    
    
* Select the template you want, there are primarily 3 -> rename it, edit the form and connect it to the MAINMENU    
    so you set the WHERE to search, COPY/PASTE boxes, write Translation in the dictionary and copy the connection to the MAINMENU    
    done - the result is a new form with complete user control    
    
* Build&Run - you check the work one after the other, because typos are part of us, aren't they    
    the full logging option slaps you in detail where the error is or HURRY GOES    
    Done, the Application is WAITING for your work or deployment at the client, in the company, anywhere    
    
    
---    
    
### evelopment of Press Reports in FYIREPORTING    
    
* You simply copy the existing DATALIST/DETAIL report and open it in the editor    
    Rename to the new name of your table.    
    
* You edit your SQL SELECT and Test it, the parameters are already set ID/SEARCH/CONNECT    
    Ideally in MSSQLMS or HEIDYSQL or something and debug it there. Remember everything is just a LIST or Detail.    
    done - and you have the correct data that you just arrange for printing in the form.    
    
* And you import into the system in the REPORTING list menu, where you set the required link to APIURL/SEARCH/ID    
    Done, the press kit is WAITING for your work or deployment at the client, in the company, anywhere    
    
    
**END OF KNOWLEDGE REQUIRED FOR SYSTEM DEVELOPMENT**    
    
---    
    
### Basic listing of almost unlimited skill application    
* Prepared with common agendas    
* Operation possible on WINDOWS XP, 7, 8, 10, 11    
* C# WFP, XAML, Drag&Drop technology    
* Complete management of any Agenda (Table) RESTORE/NEW/EDIT/COPY/DELETE    
* Automatically generated list data view.    
* Easy preparation of the form according to prepared templates and ready made agendas    
* more than 100 types of input fields    
* Search in content in the data list    
* also optimized for TOUCH TERMINALS for MANUFACTURING or BUSINESS, SELF*SERVICE environments    
* own printing system with direct printing support    
* Almost unlimited development possibilities with the possibility of own involvement    
* Support for controlling operating systems    
* thousands of already free tools on GitHub    
* connection to any third*party services    
* support for all known protocols EMAIL, IMAP, HTTPS, FTP, SSH, SMTP, TELNET    
* command line support, JavaScript, Telnet    
* Option to connect to 3*party systems, IS and OS systems    
* Support multimedia, hardware, 3D, devices, RFID readers, QR, BAR, EAN, VIDEO, SOUND, MS OFFICE, PDF, XPS, RTF, etc.    
* development of any customized system from 20,000 CZK. System already prepared as a template for any more than just IS SYSTEM    
* the possibility of creating any INFORMATION OR CONTROL, MONITORING, REPORTING system, and so on    
---    
### EASYTOOLS IMPLEMENTED ADD-ONS    
* AddOns for touch panels, controls, data types, forms, media, documents, 3D,    
* They are completely free to download (including every license pack)    
* Open Source community to include more than 1000 tools in the system by community    
    
---    
    
### BUILT SYSTEMS IN 14 DAYS    
1. **LicenseSrv**    
MultiOS license server with listening API GET/POST server / generation of unlimited static/dynamic CODES and management client    
1. **GUIDES** Windows XP+ Implementation Production Guides for Production Companies For office / touch panels with unlimited clients and printing options    
1. **ShoPingER** Windows XP+ MultiBranch Quotation/Order/Invoicing System with multimedia files supported by unlimited clients and printing capabilities    
1. **LicenceShoper** MultiOS License Server PLUS Windows XP+ MultiBranch Billing System [LicenseSrv + ShoPingER]    
    
    
---    
### SOLUTION - WHERE TO FIND COMPLETE INFORMATION    
All documentation, license, case study, price list, media, developer information, help, manuals, technology information, installation, images, videos, downloads, etc. can be found here or:    
    
---    
### PROJECT IMPLEMENTATION CASE STUDY PROJECTS USING IDEAS    
<sup>**For thinking, the development of tools and work with them worthy in the 21st century**</sup>    
* The first use of this solution was a big change in a manufacturing company For 1000 workers, but it was only four days work for the IT department    
* Implementation of production guides as a task for 4 days CZ In Case Studies    
* Creation of the Billing System as a replacement for the system with discontinued support.    
* Creation of the ShoPingER Invoicing System with a large overlap in 14 days]    
* All Windows Applications are available to try online in the Application ShowRoom [https://KlikneteZde.Cz](https://KlikneteZde.Cz "")    
    
---    
    
### Golden - Backend Server Development Plan    
    
- Create Backend Server Generator    
- Create Full Customer Support with Project Managements    
    
---    
    
### EASYBuilder - WPF Fronted System Builder Development Plan    
    
- Publish XAML Generator Graphical Tool with Templates Support    
- implement Global Context menu for all DataLists with Count of API record request setting,    
  Properties of Datalist, DataRequest,DataList Controller    
- Convert WPF System to WebApplication for Windows/Linux with all graphics and possibilities    
- Create SYSTEM Generator    
- Create Metro4 Full compatible WEB SYSTEM Variant    
- Implement FastReport Tool (Replace FYI Reporting)    
    
---    
    
### Recommended Practices    
    
Using References of Variables or Classes - Maximum Saving Memory Performance    
- For All processes which is modified by One Person in One Time - Typical System Using    
    
In simple explanation and absolut ideally working with Data - Maximum Clean Code    
Data flow modify one Variable or Class on Way Over More Sequenced Methods    
    
- From API List Logic You working only With Primary API Dataset and few sets of Dials    
- For standard Using its best way For Maximum clean code without Exeption    
    
Is calculating that you Have Full or Extended Dataset for API everytime    
 - Point For Data loading  "'SetRecord' Method" - load data from model to Dataset Variable    
 - Some Operations where you can change data values    
 - Point For Recapitulate full Dataset and Save    
 -    
    
---    
    
### EasyITcenter & EasySYSTEMbuilder VÝVOJOVÝ PLÁN    
!!!Unikátní Investiční Příležitost, či Unikátní Globální IT Řešení pro VAŠI FIRMU!!!    
9.1.2024 nasazeny Aktuální verze na Domácím PC na vesnici k vyzkoušení    
**CO BUDE FINÁLNÍ?**    
 - ONLINE GENERÁTOR MultiServeru + BackendAPI + Dynamic API    
 - ONLINE GENERÁTOR MS SYSTÉMŮ DLE STRUKTURY DB    
 - BUILDER PRO TOUCHPANELY, BUSINESS PANELY, ANY SYSTEM    
 - WEB PORTAL s MULTI WEB SERVERS - cokoliv z GITU (React,Php,Electron,Vite,Gulp,..)    
 - SUBDOMAIN WEBSITES - dá se říct skoro JEDNODOMÉNOVÝ HOSTING    
 - MULTI IT SERVERS & SOLUTIONS, již nyní s velkým počtem Unikátních Funkcionalit    
    
--------------------------------------------------------------------    
VÝHLED 2024    
-----------------------------    
LÉTO 2024 -    
ONLINE GENERÁTORY  - API,MS FORM, WEBFORM(z DB json),    
ONLINE Správa klientských Projektů,Build Projektů, Nasazení Změn, Refactor, Stažení Instalátorů    
    
-----------------------------    
    
ZIMA  2024 -  Průmysl - Implementace Siemens, TouchPanel Builder    
    
--------------------------------------------------------------------    
    