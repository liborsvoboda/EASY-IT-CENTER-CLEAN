# Úvod   ESB - Dokumentace Projektu  

EASY SYSTEM Builder Universální řešení pro extrémně jednoduchou tvorbu libovolného systému.
Primitivní vývoj pomocí pouhých formulářu vám stačí k vytvoření různých typů systémů
Dotykové Systémy, IS systémy, Data management, Sběr Dat, Datové můsty, Ovládání Strojů, Multimediální systémy.
Máze Otázky? neváhejte se nám Ozvat
Zde je Seznam implementovaných Agend Systému. Systém je aktuálně zaměřen na Správu IT, a všeho Okolo.
Je Modifikován tak Aby zvládnul všechny možné typy požadavků. Upravit sio je pro Svá data je otázkou v řádech týdnů, protože
disponuje všemi možnými nástroji pro zpracování každého požadavku.

# Seznam Implementovaných Agend,   
		Zde je Seznam implementovaných Agend Systému. Systém je aktuálně zaměřen na Správu IT, a všeho Okolo.
Je Modifikován tak Aby zvládnul všechny možné typy požadavků. Upravit sio je pro Svá data je otázkou v řádech týdnů, protože
disponuje všemi možnými nástroji pro zpracování každého typu požadavku.

---   
# BasicAgendas         
- Dial  **BasicCurrencyListPage**
*Globální číselník nastavení Druhů měn.
Systém i celé řešení je multi Jazyčný, Multipobočkový což nastavuje rozsah využití na celý svět.
Zde jde Centrální Správa
*
```    - Dial  **BasicUnitListPage**
*Globální Číselník Jednotek Systému. 
Lze Libovolně snadno rozšířit o automatické přepočty, převody, atd*
```    - Dial  **BasicVatListPage**
*Zakladní Agenda nastavení DPH. To je to za co platíte Roční maintanace fe firmách.
V tomto Systému si za stejné peníze koupíte další 20 typů serverů/systémů a řešení
*
```    - Agenda  **BasicImageGalleryListPage**
*Ukázka Agendy Vlastní Multiplikované Galerie Obrázků. Galerií k zaimplementování z Github je celá řada
včetně interaktiní s nepřeberným množstvím editorů, přípravy Tisku / Potisku, atd.
Je možné i zaimplementovat interaktivní galerie v provedení prezentací, videí atd..*
```    - Agenda  **BasicItemListPage**
*Globální sdílená Agenda Položek Systému. Jsou Využity všude kde narazíte na položky, dle typů je můžete od sebe odlišit
Použito v Licenčním Serveru, Modulu Obchodu v Dokladech. Jedná se o Distribuční, Evidenční, managované položky všetně vazeb 
na Jednotky, Měny, Kurzy, Pobočky, Doklady, Přílohy*
```    - View  **BasicAttachmentListPage**
*Globální Prohlížeč Všech typů příloh a dokumentů v Systému.
Můžete online prohlížet , 3D, Office, Videa, Zvuky, Dokumenty PDF, Obrázky a všechny běžně používáné formáty.
z Github Lze Snadno doimplementovat Jakýkoliv Jiný Formát, Např Statistika Auta, výrobní stroje Atd.
*
```    - View  **BasicViewAttachmentListPage**
*Globální Prohlížeč Všech typů příloh a dokumentů v Systému.
Můžete online prohlížet , 3D, Office, Videa, Zvuky, Dokumenty PDF, Obrázky a všechny běžně používáné formáty.
z Github Lze Snadno doimplementovat Jakýkoliv Jiný Formát, Např Statistika Auta, výrobní stroje Atd.
*
```    
---   
# Business         
- Dial  **BusinessExchangeRateListPage**
*Globální Agenda nastavení Menových kurzů pro jednotlivé Měny.
Lze snadno zaimplementovat Script pro Automatickou aktualizaci přímo z DB, serverem, Globální Operací
Manuálním úkonem či Jakkoliv Jinak dle potřeby*
```    - Dial  **BusinessMaturityListPage**
*Číselník Splatností*
```    - Dial  **BusinessNotesListPage**
*Číselník Poznámerk Dokladů*
```    - Dial  **BusinessPaymentMethodListPage**
*Číselník Platebních Metod*
```    - Dial  **BusinessPaymentStatusListPage**
*Číselník Platebních Statusů*
```    - Dial  **BusinessWarehouseListPage**
*Agenda Správy Skladů*
```    - Dial  **SystemDocumentTypeListPage**
*Definice typů dokladů systému a jejich číselných řad. 
Je to globálbí řešení pro všechny typy dokladů pro rozsáhle systémy
Platnost od-do, prefix, pobočka*
```    - Dial  **SystemDocumentAdviceListPage**
*Agenda nastavení Řad Dokladů Systému*
```    - Agenda  **BusinessAddressListPage**
*Číselník Kontaktů Adresář*
```    - Agenda  **BusinessBranchListPage**
*Číselník Poboček*
```    - Agenda  **BusinessCreditNoteListPage**
*Agenda Dobropisů*
```    - Agenda  **BusinessIncomingInvoiceListPage**
*Agenda Příchozí Faktury*
```    - Agenda  **BusinessOutgoingInvoiceListPage**
*Agenda Odchozí Faktury*
```    - Agenda  **BusinessOfferListPage**
*Agenda správy Nabídek*
```    - Agenda  **BusinessIncomingOrderListPage**
*Agenda Příchozí Objednávky*
```    - Agenda  **BusinessOutgoingOrderListPage**
*Agenda Odchozí Objednávky*
```    - Agenda  **BusinessReceiptListPage**
*Agenda pokladních Dokladů*
```    
---   
# DocumentServer         
- Agenda  **DocSrvDocumentationGroupListPage**
*Dokument Server:  Agenda Jednoduché Členění Dokumentace do Skupin Dla témát, logik, Atd*
```    - Agenda  **DocSrvDocumentationListPage**
*Dokument Server:  Agenda Globální Dokumentace MD Formátu pro možnost Generování dalších Libovolných
struktur, webů, Knich, Manuálů, Mediálních Návodů atd...Knihovna vám usnadnuje používání a předefinování šablon pro 
Stylizaci a jednotný Desing. Agenda má Zaimplementován Generátor Verzování, generování FullTextSearch Webu, 
a je připravenou  ještě řada dalších Web nástrojů pro Publikaci Nejruznějšího Typu Dokumentace.*
```    - Agenda  **DocSrvDocumentationCodeLibraryListPage**
*Dokument Server:  Agenda Knihovna kódů Dokumentace MD Formátu pro možnost Generování dalších Libovolných
struktur, webů, Knich, Manuálů, Mediálních Návodů atd...Knihovna vám usnadnuje použvání a předefinování šablon pro 
Stylizaci a jednotný Desing*
```    - Agenda  **DocSrvDocTemplateListPage**
*Souborové šablony a ukázky*
```    - Agenda  **MltTblGenEsbSrvFormPage_MDe**
*Profesionální Editor Dokumentace*
```    
---   
# Examples         
- Agenda  **SupportPage**
*EasyITcenter & EasySYSTEMbuilder
Formulář s Kontaktními Informacemi. Neváhejte se kdykoliv Ozvat, na Cokoliv Zeptat o Cokoliv Požádat.
I velmi složité Záležitosti se dají v tomto prostředí Vytvořit Velmi Snadno. 
*
```    - Agenda  **TemplateWebViewPage**
*Ukázková šablona Jak jednoduše lze vytvořit Agendu*
```    - Agenda  **GraphsPage**
*Systémový Formulář s Ukázkou Nejzákladnějšícho Grafů z Doplnku o více jak 100 typů interaktivních Grafů.
Lze implementovat Spusty dalších doplňků s typy Grafů z Github.
Zde Je implementován Nejednodušší Modul který bude nasazen jako dynamický Controling*
```    - Agenda  **SystemMonitorPage**
*Systémový Formulář s Ukázkou Monitorování HardWare Počítače RAM + CPU.
Je možné monitorovat Online, na pozadí, vzdáleně naprosto Cokoliv
Lze implementovat nespočetné množstí dalších rozšíření z Github*
```    - Agenda  **TemplateSTLPage**
*Systémový Formulář s Ukázkou Nejzákladnějšího Object 3D,Stl, GWG a spusty dalších formátů 3D
Lze implementovat nespočetné množstí Formátů z Github*
```    - Agenda  **TemplateVideoPage**
*Systémový Formulář s Ukázkou Nejzákladnějšího Video přehrávače.
Lze implementovat nespočetné množstí typů přhrávačů z Github*
```    
---   
# LicenseServer         
- Agenda  **LicSrvLicenseAlgorithmListPage**
*Licenční Server: Agenda Správa Licencí, Generátoru licencí a jejich Platností s okamžitou Online funkčností. 
Diky zaimplementovánemu SQL Designeru můžete Generovat a udělovat firmamá Libovolné Licence, Sady Licencí
s mnoha dalšími parametry pro lůzné licenční Logiky. Je tak zaimplementováno Neomezené množství druhů a logik Licencí*
```    - View  **LicSrvLicenseActivationFailListPage**
*Licenční Server: Přehled neúspěných pokusů o Aktivací pomocí neplatně LICENCE.
Zaznamenány jsou všechny údaje Kdo, čím, jakou, kdy, odkud, pro možnost zabězpečení, Ověření,Eliminaci, Blokaci 
nežadoucích pokusů o prolomení Licenčího serveru.*
```    - View  **LicSrvUsedLicenseListPage**
*Přehled Použitých Licencí*
```    
---   
# MessagingModul         
- Dial  **SolutionMessageTypeListPage**
*Nastavení Typů Zpráv Messagingu. Zprávy jsou Tříděny a zpracovánány
dle začlenění a nastavení.  Speciální funkcionality je nutné zaimplementovat.
*
```    - Dial  **SolutionEmailTemplateListPage**
*Správa a nastavení emailových šablon pro všechna použití celého řešení.
*
```    - Agenda  **SolutionMessageModuleListPage**
*Administrace Agend Messaging Modulu, Novinky,
Web Blog, Privátní Zprávy,*
```    - View  **SolutionEmailerHistoryListPage**
*Kompletní Přehled Rozeslaných Emailů. Historie se řídí dle
nastavení Null User v Parametrech Systému*
```    
---   
# Production         
- Agenda  **ProdGuidPartListPage**
*Agenda Vykazování Práce Zaměstanců ve výrobě pro Firmy. 
Agenda Byla naprogramována za 1 týden. Další Krok Je jen Upravit pro Dotykový Panel
Jde oČíselníky Operací, Zamestanců, Středisek, Výkazy práce a Generování + Tisk měsíčních Podkladů 
pro Mzdy, Plnění Norem, Kapacity, Docházku.*
```    - Agenda  **ProdGuidGroupListPage**
*Agenda Vykazování Práce Zaměstanců ve výrobě pro Firmy. 
Agenda Byla naprogramována za 1 týden. Další Krok Je jen Upravit pro Dotykový Panel
Jde oČíselníky Operací, Zamestanců, Středisek, Výkazy práce a Generování + Tisk měsíčních Podkladů 
pro Mzdy, Plnění Norem, Kapacity, Docházku.*
```    - Agenda  **ProdGuidPersonListPage**
*Agenda Vykazování Práce Zaměstanců ve výrobě pro Firmy. 
Agenda Byla naprogramována za 1 týden. Další Krok Je jen Upravit pro Dotykový Panel
Jde oČíselníky Operací, Zamestanců, Středisek, Výkazy práce a Generování + Tisk měsíčních Podkladů 
pro Mzdy, Plnění Norem, Kapacity, Docházku.*
```    - Agenda  **ProdGuidWorkListPage**
*Agenda Vykazování Práce Zaměstanců ve výrobě pro Firmy. 
Agenda Byla naprogramována za 1 týden. Další Krok Je jen Upravit pro Dotykový Panel
Jde o Číselníky Operací, Zamestanců, Středisek, Výkazy práce a Generování + Tisk měsíčních Podkladů 
pro Mzdy, Plnění Norem, Kapacity, Docházku.*
```    - Agenda  **ProdGuidOperationListPage**
*Agenda Vykazování Práce Zaměstanců ve výrobě pro Firmy. 
Agenda Byla naprogramována za 1 týden. Další Krok Je jen Upravit pro Dotykový Panel
Jde o Číselníky Operací, Zamestanců, Středisek, Výkazy práce a Generování + Tisk měsíčních Podkladů 
pro Mzdy, Plnění Norem, Kapacity, Docházku.*
```    
---   
# Provider         
- View  **ProviderGeneratedToolListPage**
*Agenda Poskytovaných Generátorů na internetu*
```    - View  **ProviderAutoGenServerReqListPage**
*Agenda Evidence požadavků Generování Licencí.*
```    - View  **ProviderViewGeneratedToolRatingListPage**
*Hotnocení Nástrojů a Generátorů*
```    - View  **ProviderGeneratedLicenseListPage**
*Agenda Správy generovaných Licencí Licenčního Serveru*
```    
---   
# ServerSettings         
- Dial  **LocSrvWebTmpViewerPage**
*Systémový Formulář. Samostatně je neaktivní
Slouží pro Zobrazení s Webových Šablon.
Je volán Systémem pro otevření Wrbové Šablony*
```    - Dial  **SolutionLanguageListPage**
*Nastavení Jazyku serveru. Server odpovídá na API akce bud validní odpovědí nebo definvanýou odpovědí, která se tak automaticky přeloží pro všechny dotazy - SYSTEM/INTERNET/ANY
Server se vždy Snaží vracet validní Info Odpověd v případfě chyby, která se nepřekládá ale přesně ukáže důvod Chyby, Kde ji najdete v kódu - takže k vývoji stačí už jen umět číst.*
```    - Agenda  **SolutionSchedulerListPage**
*Globální Plánovač Úloh. Ulohy jsou různých typů až po plné automatizování libovolných procxesů. Jwe to vlastně TaskFlow.
Aktuálně jsou zaimplementovány Zpracování SQL, Zasílání Emailu, Vygenerování WebSocket Notifikace, Spuštění příkazu na Serveru
Tím se dají řešit/řídit nejrůznější požadavky*
```    - Agenda  **SolutionFailListPage**
*Celé řešení má zaimplementováno monitorování ze všech typů serverů a systémů. V případě vzniku chyby, jsou zalogovány pro možnost snadné opravy.
Monitorovány jsou všechny stavy i třeba nedostupnost URl, neexistují soubor pro spuštění atd. co nemusejí být chyby. 
Vy tak máte mohutný nástroj Kontroly úplně veškerého dění.*
```    - Agenda  **ServerCorsDefAllowedOriginListPage**
*Definice Pobvolených Origin URL, Domén na Serveru ve Formátu http://domain.com:3000, https://localhost*
```    - Agenda  **SolutionSchedulerProcessListPage**
*SubTabulka Plánovače Úloh.
Slouží Pouze pro sběr Dat.
Nemá Ovládací Formulář*
```    - Agenda  **ServerApiSecurityListPage**
*Nadstavba nad běžně zadanými restrikcemi v kódu programu.
Toto je Novinka, a přebírá veškerou kontrolu nad povolenými přístupy k API Serveru
Sezver kontroluje Každou API a v případě že není uložena je brána jako povolená
*
```    - Agenda  **ServerSettingListPage**
*Agenda Nastavení Serveru EIC. Zde je úplná Správa Serveru nastavení Zabezpečení, Aktivace Modulů, služeb, Serverů,
a všeho co je Součástí Serveru bez vazby na Systém. 
Online lze Zapínat a Vypínat vybrané Služby, nebo pro Aplikaci lze provést okažitý rerstart Serveru.*
```    - Agenda  **SystemTranslationListPage**
*Online překladač tzpráv nastavení popisů systému, serveru, hlášení, zpráv atd..
Pouze Chybové zprávy jsou originální s přesným popisem chyby*
```    - Agenda  **ServerHealthCheckTaskListPage**
*Agenda Nastavení Dohledového Centra.  Zde se nastavuje Monitoring Služeb, SW/ HW/ NET /DB atd. a hlidá se Dostupnost.
V případě Výpadku či poruchy - negativního stavu kontroly, je zaslán email Správci Systému.
*
```    
---   
# SolutionOnlineDevelope         
- Agenda  **WebCodeEditorPage**
*Web Code Editor k Volnému Testování  a vývoji Webových Stránek.
Nemá žádné Vazby, vše je nutné si definovat, ideálně s kódy z Web knihovny
A Tvořit si Vlastní. K dispozici je i Online Náhled Vytvořeného kódu*
```    - Agenda  **UniversalCodeEditorPage**
*Implemetovaný Universální Code Editor pro různé Sytace s nápověhou , zvýrazněním, automatickým dokončením
pro Online správu a Vývoj EASY projektů Online Přímo ze systému. 
*
```    - Agenda  **XamlCodeEditorPage**
*Výchozí XamlCode Editor pro snadnou tvorbu a práci s Formuláři.
Je to součást Systému, Web Verze je zatím ve vývoji.*
```    - Agenda  **MltEicSrvWebAppPage_001**
*Systémový název Formuláře: WebServerViewPage, Funcionalitu Zajišťuje vlastní Web
Zde Implementován: Server Modul Vývoj kódu CSharpEdit s kontrolou Online
Zabezpečení Modulu: Open -  over Internal web API solution*
```    - Agenda  **MltEicSrvWebAppPage_002**
*Modul Vývoj kódu MonacoEdit s kontrolou a InteliSense Online jak ve Webu tak v Systému
Pomocí Těchto nástrojů , šablon a knihoven kódu je vývoj naprostou hračkou pro každé IT Oddělení*
```    - Agenda  **MltEicSrvWebAppPage_003**
*Manuální Kontrola Rozdílů Souborů Projektu*
```    - Agenda  **MltEicSrvWebAppPage_004**
*Run Csharp Code Online*
```    - Agenda  **MltEicSrvWebAppPage_005**
*Web Developer Portal Online s automatickým přihlášením
*
```    
---   
# SystemSettings         
- Dial  **SolutionMixedEnumListPage**
*Centrální Správa všech potřebných mikro číselníků pro dynamické plnění a správu obsahu*
```    - Dial  **SystemIgnoredExceptionListPage**
*Systém, Servwer i Web mohou být plně sledovány na jakýkoliv úkon. v Případě Chyby se každá chyba zapíše do managovaného DB Logu.
Zde je Nastavení Ignorování Sledování jednotlivých druhů chyb, protože ne každá chyba je chybou.
Aby Nebyla agenda spanována určitými nepodstatnými Chybami.  Vy tak máte plnou kontrolu na systémem, Serverem i Webem
a všemi implementovanými moduly, nástorji atd co je součátí tchto 3 systémů - to je CELÝ IT SVĚT.
*
```    - Dial  **SystemMenuListPage**
*Agenda Správy nastavení Zobrazení Menu Systému a jeho položek, nápovědy a práv.
Systém je plně Dynamický takže když pridáte multiplikovanou položku do menu musíte nastavit
kde se zobrazí, komu a co má provést.*
```    - Dial  **SystemGroupMenuListPage**
*Dynamická Agenda Definic Skupin Menu Systému.
Sami si můžete nastavit jak se mají jmenovat co budou obsahovat, 
komu se zobrazí, co Bude spuštěno*
```    - Dial  **SystemSvgIconListPage**
*Systémový Číselník Ikon pro Technologii Metro. Totožná Tehnologie je Nasazena i na webu a je 100% kopatibilní
pro generované panely. Slouží pro generování Systémových  přehledů Nástrojů na Web*
```    - Dial  **SystemCustomPageListPage**
*Agenda Unikátních Formulářů Mediální, Editory, Multifunkční*
```    - Agenda  **SystemReportListPage**
*Agenda definic Tiskových Reportů - které si můžete sami vytvářet pomocí Report Builderu pro Tisk ze Systému.
Rodporovány jsou všechny typy reportů štítky, čárové kódy, grafy, tabulky, přehledy, tiskopisy.
Není nutný žádný další vývoj 
*
```    - Agenda  **SystemReportQueueListPage**
*Agenda definic SQL datazů pro Volání z Reportů - RePORT Builderu pro Tisk ze Systému.
Tento způsob je jednodušší něž zapisovat definici v ReportBuilderu, je interaktivní a při změně nastavení adresy serveru
se Automaticky změní Také.  Tím je Definice Dynamická s implementovaným SQL spuštením Online
Bude Vylepšen O Inteligentní SQL Designer s našeptávačem

*
```    - Agenda  **SolutionUserRoleListPage**
*Uživatelské Role, dle nich jsou omezovány, nebo povoleny, menu systému, 
Přístupy na webu, Jednotlivé služby a moduly sereveru - API*
```    - Agenda  **SolutionUserListPage**
*Správa uživatelů řešení*
```    - View  **SystemLoginHistoryListPage**
*Automatický Pohled přihlašování uživatelů do systému
Implementováno pomocí API TRIGERU pri Přihlašování
*
```    - View  **TemplateListPage**
*Šablona Tvorby Systému. Celý vývoj je tak jednoduchý, že na něj stačí kopírovat a lehce modifikovat šablony ať už Databáze, Serve, Webu nebo Systému
a vy si můžete jednoduše vytvořit Libovolné IT řešení přesně vám na míru. Už neexistuje že něco nejde, Toto řeěšení Umožnuje naprosto vše hned při prvním použití*
```    
---   
# UserAgendas         
- Dial  **ServerToolPanelDefinitionListPage**
*Správa Panelu nástrojů  Obsahuje URL adresy či spustitelné Příkazy
Tak máte možnost z Panelu Otevřít co chcete*
```    - Dial  **ServerToolTypeListPage**
*Agenda správy Typů Nástrojů Řešení. Jsou to skupiny pro pro evidenci a třídění jednotlivých nástrojů řešení*
```    - Dial  **SolutionOperationListPage**
*Definované Operace Řešení, Importy, Exporty, Spouštění procesů, dotazů dávek, Generátory, Web, atd..
*
```    - Dial  **SystemModuleListPage**
*Konfigurátor Nastavení Systémových Modulů
Zde si můžete přidat i vlastní Moduly, Web Stránky, Aplikace
Do Panelu Aplikací. Tak si můžete sjednotit všechny programy 
*
```    - Agenda  **ServerModuleAndServiceListPage**
*Generátor Samostatných Webstránek , které se zobrazí na zadané URL.
Toto řešení Využívá Přednastavené Templaty, které usnadňuje tvorbu stránky
na již jen Vygenerování Datového Přehledu.*
```    - Agenda  **SolutionTaskListPage**
*Agenda Plánovaných úloh Vývoje Řešení.  Ze stavů je automaticky generovaná Dokumentace pomocí Hromadné Úlohy.
Dokumentace se Přepisuje. Pokud Se provadí Update/Upgrade, ideálně otevřít existující hotovou úlohu a a přidat dokumentaci do ní pro přehlednost.
Stavy a Příslušnost se definuje v mikro číselníku.
*
```    - Agenda  **SystemParameterListPage**
*Nastavení Chování Systému, Defaultně Nastaveno dle Uživatele NULL = System Default. 
Toto nastavcení se následně klonuje na každého nového uživatele, který má možnost si nastavení změnit dle potřeby.
V nastavení jsou Spoje mezi Moduly, Funkcionalitami, Vzhledu Systému, Chování Systému, atd. *
```    - Agenda  **SystemOperationListPage**
*Agenda Hromadných nástrojů Serveru, Systému i Webu pro Prováděšní Specifických Operací
BackupDb, Exporty/Importy, Generování, atd.  Lze Libovolně Rozšířit o Libovolné Funkcionality
*
```    - Agenda  **ServerToolPanelListPage**
*Přehled a Zobrazení Implementovaných Modulů Server, Technologií , Webových nástrojů, mimo Externích aplikací a Modulů Systému.
Přehled Dokumentací Řešení, i Dokumentací Implementovaných Technologií a Nástrojů*
```    - Agenda  **ClientSettingsPage**
*Generický Formulář, stejně jako nastavení Serveru. Zde je ještě 1 rozdíl a to nutnosti použití slovníku offline
než naběhne systém, a překlady jsou zpracovávány z globálního slovníku.  Všechny Takové Specifické Formuláře
nezapoměňte nastavit  Xaml Tag="Setting"*
```    - Agenda  **BasicCalendarListPage**
*Zakladní agenda Kalednáře. Můžete si zapisovat Poznamky, a máte celou Historii.
Lze snadno rozšířit o Implementaci z Gitgub Globální Kalendář s napojením na Github, Facebook, Window, Google,
Notifikce, atd...*
```    
---   
# WebHosting         
- Dial  **SolutionStaticFilePathListPage**
*Přehled Adresářových Struktur SubDomén*
```    - Agenda  **SolutionStaticFileListPage**
*Správa Souborů Webových Subdomén*
```    - Agenda  **SolutionWebsiteListPage**
*Webstránky Uživatelů zobrazené na subdoméně*
```    - Agenda  **ServerStaticOrMvcDefPathListPage**
*Agenda správy Procházení Statického Web Obsahu - Zobrazí  web Folder/File Browser pro Browsable položky. 
Dále Se zde nastavuje přidělování Dynamických nástrojů MVC aby přidělení již nebylo přesměrováno dynamickými pravidly. MVC Nástroje, Portál, Mají své unikátní cesty, které ze musí být nastaveny jako dále nepřesměrovatelné. 
Tedy nastavte i pro Statické složky, kde máte jasně daný obsah a chcete je zobrazit  tak jak jsou. 
Pravidla jsou platná pro zadanou cestu a její veškerý obsah (sub složky a soubory).
*
```    - Agenda  **WebConfiguratorListPage**
*Web Konfigurátor.  Agenda Generátorů Částí Webové Stránky, která se spojuje na základě pravidel
do kompletního Webu.  Budoucí Systém i pro Systém Samotný, Dotykové Panely Atd..
Spravováno Editorem s Intligentní Nápovědou.  10GB statických nástrojů je k dispozici 
Bude Použit v novém LIGHT Klonu ESB jako System Designer a Samostatný SYSTÉM/WEB*
```    - Agenda  **WebBannedIpAddressListPage**
*Blokované IP Adresy ze seznamu návštěvníků*
```    - Agenda  **ServerLiveDataMonitorListPage**
*Automaticky aktualizuje složku projektu i Publikovaného webu a dá pokyn k znovunačtení stránky klienta
Využití např u dokumentace nebo tam kde nahráváte data a chcete je následně mít ihned přístupná
bez restartování serveru*
```    - View  **WebVisitIpListPage**
*IP Adresy Návštěvníků WebServeru*
```    
---   
# WebPortal         
- Dial  **WebCodeLibraryListPage**
*Agenda Knihovny  Webových kódů pro řízenou nápovědu a usnadnění implementací různých řešení při Vývoji Webového Portálu či ostatních webových Editorů.
Zde si ukládejte všechny poznatky.  Je plánován Centrální Update ze Serveru.
*
```    - Dial  **WebGroupMenuListPage**
*Agenda správy Členění Menu Web Portálu do Skupin. Zde se Spravují Skupiny do kterých je webové Menu Rozděleno.
Deaktivace Skupiny, zabrání naččtení všech podřízených položek Menu.*
```    - Dial  **WebDocumentationCodeLibraryListPage**
*Není nad to mít stále Opakované kódy při ruce. K tomu Slouží Code Knihovna. Zde máte Rychlá řešení vývoje
a přesné deinice co a jak. pro Vývoj vám pak bude stačit jen skládat segmenty kódu do Libovolné výsledné podoby Systémů Serverů, Webů, Celého IT

*
```    - Dial  **SolutionMottoListPage**
*Agenda Hesel zobrtazujících se při spouštění Systému a ve Web Portálu. může to využít třeba pro informování o změnách, jakkoliv jinak*
```    - Agenda  **WebDocumentationListPage**
*Agenda Webové Dokumentace. Každá stránka Webu zde může mít svůj Návod Co a Jak. Je to jednoduché a efektivní řízení Nápovědy pro celý Web Portal
Snadnější to už ani být nemůže. Vy a všichni ostatní tak máte kompletní návody vždy po ruce
*
```    - Agenda  **WebSettingListPage**
*Dynamická Agenda nastavení WebPortalu Startup Konfigurace
můžete takto přednastavit jakékoliv globální parametry.
Tyto Parametry je pak nutno zaprogramovat do Web Portálu pomocí jednoduché přímé funkce
*
```    - Agenda  **WebMenuListPage**
*Agenda Správy Web Menu Webového Portálu. Zde se nastavuje kód pro zobrazení příslušného webového obsahu pro Jednotliváé položky Menu.*
```    - Agenda  **WebCoreFileListPage**
*Správa souborů jádra Web Serveru*
```    - Agenda  **WebDeveloperNewsListPage**
*Agenda článků Web portálu*
```    - Agenda  **WebGlobalPageBlockListPage**
*Globánlí Html Webu - Kód je Dostupný ve všech stránkách webu*
```    - View  **WebUserSettingListPage**
*Správa nastavení Uživatelů Internetu*
```    - View  **WebMessagesListPage**
*Zprávy na Webovém Portálu*
```    