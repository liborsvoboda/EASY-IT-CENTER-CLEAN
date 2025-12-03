# Úvod   ESB - Dokumentace Projektu  

EASY SYSTEM Builder Universální řešení pro extrémně jednoduchou tvorbu libovolného systému.
Primitivní vývoj pomocí pouhých formulářu vám stačí k vytvoření různých typů systémů
Dotykové Systémy, IS systémy, Data management, Sběr Dat, Datové můsty, Ovládání Strojů, Multimediální systémy.
Máze Otázky? neváhejte se nám Ozvat
Mikročíselník vzniknul jako úspora tabulek pro Výběry z malinkých seznamů. Tyto Seznamy
jsou ale implementované funkcionality, Systému i Serveru to z něho Dělá naprosto mimořádnou Agendu. Zde je Vypsán jeho
Obsah.

# Mikročíselníky unikátních Funcionalit,   
		Mikročíselník vzniknul jako úsporatabulek pro Výběry z malinkých seznamů. Tyto Seznamy
jsou ale implementované funkcionality, Systému i Serveru to z něho Dělá naprosto mimořádnou Agendu. Zde je Vypsán jeho
Obsah.

---   
# CodeTypes         
  **Csharp**
*Skupina Typu Kódu CSharp Projektu ESB*
  **Html**
*Skupina Typu Kódu Html*
  **JavaScript**
*Skupina Typu Kódu JavaScript*
  **Css**
*Skupina Typu Kódu Styly Css*
  **Xaml**
*Skupina Typu Kódu Xaml*
  **MSSQL**
*Skupina Typu Kódu MSSQL*
  **CsHtml**
*Skupina Typu Kódu Razor/MVC CsHtml*

---   
# JsCssTypesDefinition         
  **Css**
*Definuje Styly vložené do 'style' tagu
Slouží Pro Správu scriptů Web Portálu*
  **MinCss**
*Definuje Minifikované Styly vložené do 'style' tagu
Slouží Pro Správu scriptů Web Portálu*
  **Js**
*Definuje Javascripty vložené do 'script' tagu
Slouží Pro Správu scriptů Web Portálu*
  **MinJs**
*Definuje Minifikované Javascripty vložené do 'script' tagu
Slouží Pro Správu scriptů Web Portálu*
  **JsFiles**
*Definuje seznam Javascriptů vložených do 'head' tagu
Slouží Pro Správu scriptů Web Portálu*
  **CssFiles**
*Definuje seznam Stylů vložených do 'head' tagu
Slouží Pro Správu scriptů Web Portálu*

---   
# LogMonitor         
  **System**
*Logování Chyb Systému na pozadí
do Administrace*
  **Server**
*Logování Chyb Serveru na pozadí
do Administrace*
  **WebPortal**
*Logování Chyb Web Portálu na pozadí
do Administrace*

---   
# ModulePageTypes         
  **HtmlBodyOnly**
*Pouze Body Část, Head je definovaný Metro+Cookie. Připojení se nastaví načtením html z objektu "WebPageHTMLContent" a vložit na začátek. a Máte Modal Okno.  může existovat pouze 1 pro zvolenou URL*
  **FullHtmlPage**
*Modul s vlastní Plnou  podporou Vytvoření  Úplné Webové HTML Stránky. 
Máte Tedy možnost Vytvořit Cokoliv jako Nativní Webovou stránku. 
Scripty a Styly budou nainjektovány z managovaných FullPage JS a CSS. Vaše 
Stránka musí obsahovat sekci váš Obsah bude vložen do 'body' a JS + CSS budou  v sekci 'head', může existovat pouze 1 pro zvolenou URL*
  **EndpointInjection**
*Definuje Modul, který se připojí k libovolné stránce Serveru na základě přesné shody volané API , Formát Html je FullHtmlType s Header and Body částí pro injektaci Header na konec a Body na Začátek dané stránky, Pro Zvolenou URL může být více stejných URL, připojí se všechny dle vybraného pravidla OnStart,Match,StartWith*
  **StartPathInjection**
*Definuje Modul Který se připojí k libovolné stránce Serveru, která bude začínat nastavenou URL, Formát Html je FullHtmlType s Header and Body částí pro injektaci Header na konec a Body na Začátek dané stránky, Pro Zvolenou URL může být více stejných URL, připojí se všechny dle vybraného pravidla OnStart,Match,StartWith*
  **IsInPathInjection**
*Definuje Modul Který se připojí k libovolné stránce Serveru, která bude osahovat nastavenou URL, Formát Html je FullHtmlType s Header and Body částí pro injektaci Header na konec a Body na Začátek dané stránky, Pro Zvolenou URL může být více stejných URL, připojí se všechny dle vybraného pravidla OnStart,Match,StartWith*

---   
# OperationResultTypes         
  **File**
*JSON Struktura Která je obsažena v odpovědi MessigeList*
  **message**
*Tabulka se sloupcem MessageList a 1 záznamem*

---   
# OperationTypes         
  **DB_SP_GET_Operace**
*ServerAPI Určená pro Spouštění DB Procedur 
Přednastaveno: /EasyITCenterStoredProceduresList
Definuje se: "DatabaseServices/SpProcedure/Message/{procedureName}"
nebo DatabaseServices/SpProcedure/Json/{procedureName}*
  **API_GET_Request**
*Volání Server API typu GET
Definuje se celá GET API Serveru, např : 
/ServerApi/DatabaseServices/SpGetSystemPageList*
  **API_POST_Request**
*Databázová Stored Procedura Operace*

---   
# ServerApiTypes         
  **ServerStdApi**
*Standardní Programově Definovaná Server Api s vlastním Pevným Typem Obsahu.
APi Zde Nenastavené Jsou Otevřené Pro Anonymous Dotazy *

---   
# ServerConfig         
  **Config**
*Základní Konfigurace Serveru*
  **Database**
*Konfigurace připojení k DB serveru*
  **Emailer**
*Konfigurace Emailingu*
  **Module**
*Konfigurace Rozšiřujících Modulů Serveru*
  **Server**
*Konfigurace Dalších Serverů Řešení*
  **Web**
*Konfigurace Webových Enginů a Serveru*
  **WebSocket**
*Konfigurace Server WebSocketu *
  **ServersControl**
*Správa Služeb a Serverů*
  **Services**
*Služby Serveru*
  **SubServers**
*Základní Konfigurace Serveru Skupina: SubServery*

---   
# ServerLanguages         
  **cz**
*Jazyk odpovědí serveru z backendu: Česky
*
  **en**
*Jazyk odpovědí serveru z backendu: Anglicky
*

---   
# SchedulerDial         
  **email**
*Automatický Email Sender
Povinný: email,data,  email: seznam adres oddělený středníkem
Oblast Data musí být JSON pole se sekcemi 
 {"subject":"","content":""}
ten bude následně zaslaný na seznam email adres, Odesílatel Servisní email adresa Serveru*
  **command**
*Automatické spuštění příkazu
Povinný: data
Oblast Data obsahuje LIN/WIN spustitelný příkaz*
  **sqlquery**
*Automatické spuštění MSSQL
Povinný: data
Oblast Data obsahuje validní SQL bez návratových dat
Provádí se jako EXEC data*
  **websocketnotify**
*Automatické spuštění MSSQL
Povinný: data
Oblast Data obsahuje data zaslaná na WebSocket Skupiny dle konfigurace serveru
parametr: WebGlobalSocketNotifyPath*
  **sqlwebsocketnotify**
*Automatické spuštění MSSQL s návratem dat pro WebSocket zprávu 
Povinný: data - Spouštění jako EXEC data
Oblast Data obsahuje SQL příkaz s návratem dat zaslaných 
do WebSocket Skupiny dle konfigurace serveru, parametr: WebGlobalSocketNotifyPath*
  **sqlemail**
*Automatický Email Sender s návratový daty z SQL
Povinný: email,data : email: seznam adres oddělený středníkem
Oblast Data musí obsahovat SQL příkaz vracející JSON se sekcemi 
 {"subject":"","content":""}
ten bude následně zaslaný na seznam email adres, Odesílatel Servisní email adresa Serveru*

---   
# SolutionTargetType         
  **EasyITcenter**
*Nastavení příslušnosti úlohy k řešení: EasyITcenter*
  **EasySYSTEMbuilder**
*Nastavení příslušnosti úlohy k řešení: EasySYSTEMbuilder*
  **WebPortal**
*Nastavení příslušnosti úlohy k řešení: WebPortal*
  **StaticWebStore**
*Nastavení příslušnosti úlohy k řešení: StaticWebStore*
  **DocServer**
*Nastavení příslušnosti úlohy k řešení: DocServer*
  **GitServer**
*Nastavení příslušnosti úlohy k řešení: GitServer*
  **Provider**
*Nastavení příslušnosti úlohy k řešení: Provider*
  **EIC&ESB**
*Nastavení příslušnosti úlohy k řešení:  Řešení EIC&ESB*
  **WebServer**
*Nastavení příslušnosti úlohy k řešení: WebServer = WebPortal i WebStatic*
  **Database**
*Nastavení příslušnosti úlohy k řešení: Database*

---   
# SystemAgendaTypes         
  **MtlTblGenEsbSrvFormPage**
*Definuje Použití Multiplikačního Formuláře pro určeného pro SPA Aplikace Systémového Webserveru
Formulář je Je generován na úrovni Systému a Využívá Systémové Funkcionality Formulářové Agendy - Vyhledávání, DataPřehled, Tisk,...
SysUrl Určuje spouštění z Lokálního Systémového WebServeru ve složce AddOn/WebData
PageName je MtlTblGenEsbSrvFormPage_UniIdentificator    např: MtlTblEsbGlbSrvFormPage_Tasky*
  **DefinedSystemFormPage**
*Definuje Použití Systémového Formuláře/Agendy. Je to normální Definovaná Agenda se Svojí Page Třídou.
Jedná se o běžné Jednoúčelové xxxxPage Agendy*
  **MltEicSrvWebAppPage**
*Definuje Použití Systémového Multiplikačního Formuláře/Agendy, 
která je určena pouze pro Zobrazení EIC Serverové Url Adresy. 
Agenda je Typu Setting a její Obsah je plně v kompetenci Serveru.
Multiplikační formuláře musí končit identifikátorem příklad: MltEicSrvWebAppPage_ident*

---   
# SystemModules         
  **WebModule**
*Systémové moduly založené na Technologii Statických Web Stránek.
Technologie je Totožná pro celé Řešení  SERVER  + SYSTEM + PORTAL
Tento Typ je univerzální a najlepší volbou pro usnadnění všeho
*
  **AppModule**
*Systémové moduly založené na různých technologiích s různou podporou OS.
Primálně určeno pro použítí v Systému, v některých případech lze upravit pro WEB*
  **SystemTool**
*Integrované Nástroje Systému pro Samostatné Použití. 
Nástroje jsou založeny na Technologii WPF a kompatibilních.
Fungují jako rozšiřující Součást jádra Systému
*

---   
# TaskStatusType         
  **Waiting**
*Nastavení Statusu Úlohy: Waiting*
  **Processing**
*Nastavení Statusu Úlohy: Processing*
  **Done**
*Nastavení Statusu Úlohy: Done*
  **Upgrading**
*Nastavení Statusu Úlohy: Upgrading*

---   
# TimeIntervalDial         
  **second**
*Nastavení časového intervalu pro Plánovač Úloh: Vteřina*
  **minute**
*Nastavení časového intervalu pro Plánovač Úloh: Minuta*
  **day**
*Nastavení časového intervalu pro Plánovač Úloh: Den*
  **hour**
*Nastavení časového intervalu pro Plánovač Úloh: Hodina*

---   
# WebLayoutTypes         
  **MultiLangLayout**
*Šablona pro nástroje serveru i moduly atd.. má implementované jádro Metro4 +JQuery, a JS + CSS knihovny
a aktivní natívní globální prvky jako Automatický překlad s impementovaným panelem atd...
Tato CSHTML šablona upravitelná pouze z projektu.  JS a CSS se zpravují v CSS JS administraci
Soubory: multi-lang-layout.css a multi-lang-layout.js*
  **CentralLayout**
*Šablona je v kompletní správě  JS a CSS administrace WEB Portálu.
má implementované jádro Metro4 +JQuery, a JS + CSS knihovny  z administzrace JS CSS
Veškeré nastavené Scripty a Styly v administraci jsou obsaženy. 
Pro tvorbu Centrálních knihoven. 
Path ./metro/layout/css/ a ./metro/layout/js/
*
  **GlobalLayout**
*Šablona je v kompletní správě  JS a CSS administrace WEB Portálu.
má implementované jádro Metro4 +JQuery, a JS + CSS knihovny  z administzrace JS CSS
Veškeré nastavené Scripty a Styly v administraci jsou obsaženy. 
Pro tvorbu Globálních knihoven. 
Path ./metro/layout/css/ a ./metro/layout/js/*
  **MetroLayout**
*Šablona pro nástroje serveru. má implementované pouze jádro JQuery a Metro4.Odkazuje na Centrální souborové Uloziste Metro. Je to Žákladní Šablona.*
