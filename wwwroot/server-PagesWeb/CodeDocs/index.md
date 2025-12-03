# Kód Jádra **EasyITcenter** a **EasySYSTEMbuilder**
TOTO JE DOKUMENTACE JÁDRA SERVER EIC a SYSTÉMU ESB = Duo které jinde Nenajdete

Zde je Kód Projektu EasyITcenter a EasySYSTEMbuilder   
Struktury, Logiky a Rozložení pro pochopení snadnosti vývoje  

**Aktuální verzi [EasyITcenter](http://KlikneteZde.cz) můžete vidět online.**  
**MS Systém Online můžete vidět Online [EasyITSystemCenter](http://KlikneteZde.cz:8000)**   
**Další informace o projektech EIC a ESB naleynete v menu Tohoto Portálu**   
**Generovaný Web Portál Systémem si můžete prohlédnout [EasyITSystemCenter](http://KlikneteZde.cz/Portal)**   

---   

[TOC]   

# Dokumentace **EasyITcenter** to je Groupware 
**EASY-IT-CENTER [EIC] Multi Server** je NETCORE6 C# Visual Studio Projekt zaměřený na 
extrémně snadný a rychlý vývoj Backend API serveru pomocí připravených Šablon Formulářů.
Má Zaimplemenotváno Spousty modolů a funkcionalit pro jalékoliv UT použití již nyní bez nutnosti dalšího Vývoje.
Jekompatibilní se všemi typy Operačních Systémů, Všemi Typy Databází.
Umožnuje Multiplikované Použití: tzn. pro každý účel lze z jedné Instance řídit Neomezeně Databází, služeb ATD.
Má Implementovány různé druhy serverů pro centralizaci IT do 1 řešení. Chybějící budou doimplementovány [vlastní mail server]
Je chystán ONLINE vývoj s možností okamžit akutalizace, customizace, sdílení AGEND s celým světem, bezstarostným vývojem
kontrolovaným portálem. 

#### Implementovaný Multi Web Server s Funcionalitou   
Portál je Implementovaný na FrameWorku Metro4 pro snadný vývoj libovolné aplikace
online přímo z editoru či Systému ESB. Není nutný žádný Build, Veškeré použité technologie
nástroje jsou čistě statické. Lze je tedy bez problému spustit na libovolné web Serveru
a IHNED fungují. Na tom stojí LOGIKA řešení. Stačí vám pouze HTML,CSS,JS a dokážete vše

**Web Server Slouží k provozu** z úložiště DB,souborové,ftp
- 1x Generovaného Web Portál: s možností přenosu do Statické Stránky pro tvorbu dalšího portálu
- s Neomezeným počtem další statických webů, stránek, aplikací, Dashbordů, Galeríí, Dokumentací a všeho co si jen dokážete představit...
s jednoduchým vývojem z editorů, Visual Studia, Systému ESB, Web Portálu, Notepadu, čeho chcete..
bez jakéhokoliv buildování a nasazování na server, to již provádíte přímo pouhou editací souborů...
- Vývojem App,Stránek,atd.. z Module Editoru

**pro vývoj pouhým editorem máte připraveno ihned k použití:**
- original Dokumentace Použitých technologii ve **VŠECH JAZYCÍCH**  
do posledního DETAILU: **nyní již pochopíte všechny možnosti celých řešení**

- Globální Knihovna kódů pro snadný vývoj kopírováním šablon,již obsahuje veškeré příklady nutné pro vývoj
- XX Html Editory pro editace a tvorbu Stránek Online, k implementaci atd..
- XX Code Editory pro komplexní vývoj Webu z Editoru, Vývoj všech typů Webových Aplikací
- Database Editory SQLite pro možnost samostatného webu s interní DB
- Inteligentní Online Code Editory s InteliSense
- XX Statické UI Frameworky pro Tvorbu Webů,Portálů,Intranetů,Aplikací v různých designech
- XX Statické UI DashBordy  pro Tvorbu Webů,Portálů,Intranetů,Aplikací v různých designech
- X Statické Generátory Dokumentací
- Static Filemanager , Soubory jsou řešeny přes API
- XX Statické Grafické nástroje Galerie,Animace,HighLight,Mermaid,Diagramy,Background Player,Video Galerie,...
- XX Statické Prohlížeče nejrůznějších formátů souborů, Panorama, Office, 3D, Grafy, XML, PDF, MD,..
- XX Další Knihovny Stylů CSS pro dodatečné implemetace Animací, Objektů, Celků, Webů
- XX Javascript Knihovny pro implementaci všemožných funkcionalit do portálu
- XX šablony aplikací: Vue,React,Next, a všechny ostatní.. cca 50 typů
- XX Generátory statických webových stránek - Celých webových stránek nebo jen listů webových stránek
  technoligií Drag&Drop

s možností si přidávat pouhým zkopírováním Cokoliv dalšího z Github a internetu


## Kódová Struktura Projektu EIC

* Řešení EIC je dokonale rozčleněno do přehledných definic a použití pro dalí jednoduchý vývoj čehokoliv.
* Vychází z Globální Logiky vše musí být jen 1x a provázat celý systém tak aby toto správně používal.
* Tzn. když někde něco nastavíte bude to platné a nestane se že se to někde neprojeví. 
* Systém tedy ani nemá žádný zbytečný kód navíc, duplicitní, nebo jiné běžné chyby.

1. Třídy, jsou definice použitých datových typů, které jsou použity jako proměnné hodnoty celého řešení
Ty jsou rozděleny podle významu do následujících definic:  
[Definice Nastavení Jádra Serveru](/EIC/ServerCoreDefinitions/Classes/ServerConfigurationDefinitions)   
[Definice Komunikací Jádra Serveru](/EIC/ServerCoreDefinitions/Classes/ServerCoreClassesDefinitions)   
[Runtime Definice Jádra Serveru](/EIC/ServerCoreDefinitions/Classes/ServerCoreRuntimeDefinitions)   
[WebSocket Definice](/EIC/ServerCoreDefinitions/Classes/WebSocketClassesDefinitions)   

a nechtěné nutné bordely externích modulů:   
[Definice modulu SiteMap](/EIC/ServerCoreDefinitions/Classes/ServerCoreWebSitemapClasses)   

---

2. Interfaces,je definice různých typů modulů, řešení a jejich funkcionalit v řešení   
Ty jsou rozděleny podle významu do následujících Funkcionalit:  
[AutoScheduler](/EIC/ServerCoreDefinitions/Interfaces/AutoScheduledTasksDefs)   
[NET,DB,SW,HW,Service,atd.. Monitoring](/EIC/ServerCoreDefinitions/Interfaces/HealthCheckNotifycationsDefs)   
[Rozšíření API Auth Info pro Databáze](/EIC/ServerCoreDefinitions/Interfaces/HttpRequestsFullUserInfoDefs)   
[Static SubDomain Websites](/EIC/ServerCoreDefinitions/Interfaces/WebsitesStaticFileDbProvider)   
[WebSocket Server Monitor](/EIC/ServerCoreDefinitions/Interfaces/AutoScheduledTasksDefs)   

---

# Ostatní funkcionality serveru jsou API    
Jsou již samostatné API tzn: API = Nějaké ŘEŠENÍ např: Hromadné Odeslání Emailu, uložení Faktury   

a takto si můžete přidávat co chcete. Vždy má vlastní 1xDefinicu, TZN. nikdy nic jiného se nedá pokazit.   
I to je v systému zjednodušeno na pouhou Registraci Tabulky - Já to nepoužívám, často mi chyběla Definice pro kontrolu
než jsem si vpoměl že je jen zaregistrována, protože registace jseou společné. pro men je Čistější Existující Definice.

To znamená naprostou čistotu a přehlednost kódu    
Bežný Vývoj API k DB se vyvýjí jen pouhým zkopírováním a přejmenováním Tabulky RESTFULL Šablony
Speciální Funkcionality si pak musíte do této šablony Zaimplementovat: např: Odeslání SMS po uložení záznamu   

* Zde je ukázka nového API pouhou Registrací Tabulky:   
[Registrace API s Autorizací](/EIC/Database/StdAuthGenericProviderApi)  
[Registrace otevřené API](/EIC/Database/StdFreeGenericProviderApi)  

Takto snadno lze vyvíjet libovolný API server který potřebujete pro každý systém, internet, aplikaci  

--- 

3. Databáze, Komunikace s libovolnou DB se nastavuje pomocí Šablon. Na systémy, Apikace, Web, Nadstavby   
stačí 1 Šablona REST FULL zajištující vše: INSERT,UPDATE,DELETE,SELECT-ALL,SELECT-ID,SELECT-FILTER   
i tak jsou nachystány další šablony pro FULL DB využití PROCEDURY,MULTI-SAVE,SUBFORMS,IMAGES,FILES.
Zde je jejich Přehled:

[Šablona pro SP proceduru s návratem Generické Tabulky](/EIC/APITemplates/TemplateAnySProcedureDataListApi)  
[Šablona pro SP proceduru s návratem Jediné Hodnoty](/EIC/APITemplates/TemplateAnySProcedureFieldApi)  
[Šablona Implementace Autorizace Baasic/JWT](/EIC/APITemplates/TemplateAuthApi)  
[Šabona API Publikace Obrázků/Souborů](/EIC/APITemplates/TemplateImageApi)  
[RestFull Šablona API sta49 na v 95% Požadavků](/EIC/APITemplates/TemplateListApi)  
[Šablona Ukládání Seznamu Dat](/EIC/APITemplates/TemplateRangeApi)  
[Šablona pro ukládání se Sub Položkami](/EIC/APITemplates/TemplateSubRangeListApi)  

----

4. A Nyní Nám zbývá Internet Byť se zdá jak je rozsáhlý , vše je jíz nachystáno až až.
I tak je stále co vyvíjet. V řešení Byly odbourány technlogie buildování, takže nyní jsou 
Tvorba a úpravy na webu prováděny přímo z editoru. Nejjednodušší je Typu editace v MS Wordu.
To je Například Novinky na aktuálním portálu. Ke všemu se dají velmi snadno vytvořit nádherné generátory.

Nicméne zde je ukázka CsHTML souborů Razor/MVC, které již neslouží jako soubory kódu,
ale jako zpostředkující šablony Datové Toky a Učité Datové Segmenty kódů. Tím se Dostal Portál
na úrovceň Jediné Webové Stránky proněnující se v cokoliv vás napadne. Chová se tedy jako by byla poskladaná
Ajaxovými částmi.

A Zde Zmíněné Layouty a Multi Endopinty Pro Moduly a Specifické Soubory:

[Čistá Šablona pro Libovolný Obsah Dokumentu](/EIC/ServerCorePages/Shared/CleanLayout)  
[Šablona pro integrovaný Github Server](/EIC/ServerCorePages/Shared/GithubLayout)  
[Šablona pro Integrovaný MarkDown Viewer](/EIC/ServerCorePages/Shared/MarkDownLayout)  
[Šablona pro Metro4 Stránky](/EIC/ServerCorePages/Shared/MetroLayout)  
[Šablona pro Moduláž Dokumentů Multijazyčná](/EIC/ServerCorePages/Shared/MultiLangLayout)  
[Šablona pro Moduláž Dokumentů Více Modulární](/EIC/ServerCorePages/Shared/CentralLayout)  
[Šablona pro další jiné Typy Modulací](/EIC/ServerCorePages/Shared/GlobalLayout)  

Modulacemi je myšleno, že se má načíst stránka, ale v systému existuje 1 nebo více modulů: HTML/JS/CSS
který odpovídá Čestě Dotazu, tak Dojde k jeho připojení do Obsahu, například Automatický Překladač
pro Statické Stránky. TZN. včechny robrazené stránky se dopní překladačem a ten je přeloží bez práec
do detekovaného zajyku Browseru což můžete Vidět na Tomto dokument portále. A takto můžete dělat Cokoliv

A Zde Kondové Body Ztn. Pevné Body, Kde každý může být jinak modulovaný a řízený,
Nyní stačí zatím 3 pro WEb Portal, Statické Stránky, Různé Dokumenty A Moduly.


[Globální Výchozí Endpoint](/EIC/ServerCorePages/Index)  
[Integrovaný Web DB Manažer](/EIC/ServerCorePages/EasyData)   
[Integrovaný MarkDown Převodník na Html](/EIC/ServerCorePages/Markdown)   
[Neaktivní, bude Upraven pro Monitoring](/EIC/ServerCorePages/Error)    

A to je celé Jádro přes 20 Serverů, 1000+ Objektů pro WEby
v Řešení Multi Sever, Multi System, Multi web, Multi Lang, NoBuilD,EASY Code, EASY Dev, EASY IT

a Ji6 Brzy V7voj Projekt; P59mo Online na CHystaném Web PORTÁLU a vším CO dané Projekty Umožnují  

----    

 
# Dokumentace **EasySYSTEMbuilder** to je GroupWare
Krátký Úvod pro seznámení s Projektem Easy SYSTEM buider a jeho významu a přínosem pro celý svět.

**Aktuální verzi [EasySYSTEMBuilder](http://KlikneteZde.cz:8000) můžete vyzkoušet online.**  
**Další informace o projektech EIC a ESB na Portálu [KlikneteZde.cz](http://KlikneteZde.cz)**

## **Co je EasySYSTEMbuilder?**
**EASY-SYSTEM-BUILDER [ESB]** je C# WPF Visual Studio Projekt zaměřený na 
extrémně snadný a rychlý vývoj JAKÉHOKOLI SYSTÉMU pomocí připravených Šablon Formulářů.

ESB je tak Univerzální SYSTÉMOVÁ ŠABLONA pro další vývoj pouze pomocí grafických Formulářů
a brzy již v Grafickém Studiu, kde se vám FORMULÁŘ i sám Vygeneruje
na základě struktury Dat dané Tabulky [Faktury,seznam adres] a vy jen doladíte.

Systémové šablony jsou stále stejné a vy tedy nemusíte nic než nastavit správně nová políčka.
Vše ostatní je součástí šablony, která obsahuje Obsluhující funkcionality.

**Systém jako takový není totiž Nic jiného než Seznam Formulářů s rozdílnými Daty**.
A přesně takto je postaven **EasySYSTEMbuilder**. 

Dokonale nastavené Jádro systému, spravuje vše další potřebné k plnohodnotnému chodu.
Systém disponuje všemi běžnými funkcionalitami, **Tiskem**, **správou** ,**MultiJazyčností,** **MultiMedia**, **3D**, i jako **Centrální Klient více Serverů najednou** tedy více systémů a mnohem Více. 

Tento Systém je plně kompatibilní s každým možným typem Systému.
Ať už **Informační, Dotykový, Nadstavba, Controling, Reporting, Monitor Hardware, Dotykové Kiosky,
Plánovací či Řidící či Monitorovací Terminály a Systémy, Výrobní Terminály** 
a již Bzy i jako **Ovladací Panely výrobních Strojů SIEMENS**.

A to Zdaleka není jedniná Výhoda. Jen na [Github.com](https://github.com/search?q=C%23%20WPF&type=repositories) máte stovku ne-li 
Tisíce téměř hotových nástrojů, funkcionalit, editorů, prohlížečů, designů, příkladů, nápadů řešení,
která vás posunou Vpřed. 

---

## Kódová Struktura Projektu ESB

 Vy budete Sice Pouze Vytvářet Formuláře ,Tak zašnu šablonami. Následně představím zase podobnou Strukturu
Jádra, protže takové rozložení se ukázalo jako naprosto správné a vše v něm má své jasně dané místo

Šablony jsou Dvojího dhuru: Unikátní jako Editory, provádějící různé operace, např stříhání videa a náročné Operace.
A pak ty Obyčejné Jako Informační systém, růůzné Datové Systémy, Dotykové Panely, Informační Panely atd.
Systém již obsahuje přes 100 formulářů z toho je více než 80% systémových, tedy Kopy/Vložit úprava políček.

1. **Zde je Pák ukázek Unikátnívh Formulářů:**   

[Multi Šablona s cca 10 grafy Form](/ESB/ESBTemplates/MultiMedia/GraphsPage_xaml)  
[Multi Šablona s cca 10 grafy Funkce](/ESB/ESBTemplates/MultiMedia/GraphsPage_xaml_cs)   

[Prohlížeč Multi Typů Formátů Dokumentů Form](/ESB/ESBTemplates/MultiMedia/TemplateDocumentViewPage_xaml)  
[Prohlížeč Multi Typů Formátů Dokumentů Funkce](/ESB/ESBTemplates/MultiMedia/TemplateDocumentViewPage_xaml_cs)   

[Přehrávač Videí Form](/ESB/ESBTemplates/MultiMedia/TemplateVideoPage_xaml)  
[Přehrávač Videí Funkce](/ESB/ESBTemplates/MultiMedia/TemplateVideoPage_xaml_cs)   

[Prohlížeč 3D Formátů Form](/ESB/ESBTemplates/MultiMedia/TemplateSTLPage_xaml)  
[Prohlížeč 3D Formátů Funkce](/ESB/ESBTemplates/MultiMedia/TemplateSTLPage_xaml_cs)   

[Web Prohlížeč Form](/ESB/ESBTemplates/MultiMedia/TemplateWebViewPage_xaml)    
[Web Prohlížeč Funkce](/ESB/ESBTemplates/MultiMedia/TemplateWebViewPage_xaml_cs)   

2. **a Zde Systémové Formuláře:**  
všimněte si že Fnkční soubor, je skoro vždy stejný - protože se pořád dělá to samé   

[Šablona Data Pohledu a Editace Form](/ESB/ESBTemplates/System/TemplateClassListAutoDBTranslationPage_xaml)    
[Šablona Data Pohledu a Editace  Funkce](/ESB/ESBTemplates/System/TemplateClassListAutoDBTranslationPage_xaml_cs)   

[Šablona Data Pohledu Form](/ESB/ESBTemplates/System/TemplateClassListAutoDBTranslationViewPage_xaml)    
[Šablona Data Pohledu Funkce](/ESB/ESBTemplates/System/TemplateClassListAutoDBTranslationViewPage_xaml_cs)   

[Šablona Data Pohledu a Editace s Podičem Form](/ESB/ESBTemplates/System/TemplateClassListAutoDBTranslationWithParentPage_xaml)    
[Šablona Data Pohledu a Editace s Podičem Funkce](/ESB/ESBTemplates/System/TemplateClassListAutoDBTranslationWithParentPage_xaml_cs)   

[Šablona Data Pohledu a Editace Form](/ESB/ESBTemplates/System/TemplateClassListAutoDBTranslationPage_xaml)    
[Šablona Data Pohledu a Editace  Funkce](/ESB/ESBTemplates/System/TemplateClassListAutoDBTranslationPage_xaml_cs)   

[Šablona Data Pohledu a Editace s Celým Rodič Form + Form](/ESB/ESBTemplates/System/TemplateClassListAutoDBTranslationWithSubPage_xaml_cs)    
[Šablona Data Pohledu a Editace s Celým Rodič Form + Funkce](/ESB/ESBTemplates/System/TemplateClassListAutoDBTranslationWithSubPage_xaml_cs)   

[Šablona Data Pohledu s Celým Rodičem Form](/ESB/ESBTemplates/System/TemplateClassListAutoDBTranslationWithSubViewPage_xaml)    
[Šablona Data Pohledu s Celým Rodičem Funkce](/ESB/ESBTemplates/System/TemplateClassListAutoDBTranslationWithSubViewPage_xaml_cs)   


A tím jsme Vyčerpali Předbolby pro 90% Všech Systémů na Celé Planetě

3. **Nyní Komunikační Modul**   
Stačí 1 Definice pro RESTFULL s číselníkem API volání a je HOTOVO
je potřeba přidávat jen nová api do seznamu.

[Číselník API Endpointů](/ESB/ApiModule/APIClasses)    
[Definice API Funkcí](/ESB/ApiModule/ApiFunctions)   

Tyto 2 Definice zajišŤují kopletní Komunikaci Celého Systému.


4. **Datové Definice Jadra Systému, které je již hotové**   
Datové Definice jádra a Modulů, Doplňků

[DDatasety Systému](/ESB/GlobalClasses/ESB/GlobalClasses_cs)    
[Číselníky Systému - Bude přesunuto do DB](/ESB/GlobalClasses/GlobalEnumSetDefinitions_cs)   
[Unikatní Kolekce - Galerie](/ESB/GlobalClasses/PhotoCollectionClasses_cs)   
[Dynamickla Kolekce](/ESB/GlobalClasses/ConcurrentObservableList_cs)

Tyto Datové Definice stačí pro provoz Systému o více jak 100 Agendách

5. **Generátory**   
Lze Implemetovat nespočet Generátorů Zde jsou zatím první z nich,
a jsou plně kompatibilní s Webovou Technologií METRO a zobrazují se tedy i na Webu 

[Generátor Ikon](/ESB/GlobalGenerators/IconMaker_cs)  
[Generator Obrázků](/ESB/GlobalGenerators/ImageElementGenerator_cs)   


5. **Systémové Funkcionality - Operace**   
Stajně jako u Projektu Serveru jsou zde rozloženy Funkcionality podle povahy.  
Dobře se s nimi pracuje, a hned je jasné kde je hledat.   

[Komunikační Operace](/ESB/GlobalOperations/CommOperations_cs)  
[Datové Operace](/ESB/GlobalOperations/DataOperations_cs)  
[Databázové Operace](/ESB/GlobalOperations/DBOperations_cs)  
[Formulářové Operace](/ESB/GlobalOperations/FormOperations_cs)  
[Souborové Operace](/ESB/GlobalOperations/FileOperations_cs)  
[Matematické Operace](/ESB/GlobalOperations/MathTypeOperations_cs)  
[Media Operace](/ESB/GlobalOperations/MediaOperations_cs)  
[Systémové Operace](/ESB/GlobalOperations/SystemOperations_cs)  
[Operace Modulů](/ESB/GlobalOperations/ToolsOperations_cs)  

Když si je prohlédnete zjistíte že jich není moc, zato dohromady
dokážou zajistit Tvorbu či provedení Čehokoliv. 
A to je cílem řešení.


6. **Globální Styly - Vzhledy Polí a Formulářů**   
Je Definováno pomocí pár Gobálních Stylů. I když Systém Aktuáln nabízí Více jak 500 různých 
Datových polí a Objektů, Aktuálně jich využívá cca 30 a to včetně Médií.
Je to totiž proto, že Multimediální Povaha Celého Systému Dokáže pracovat s Desítkami
Typů Objektů pomocí jednihé Objektu. A tím se vše neskutečně zjednodušilo.


[Doplňující Definice Vlastích Polí](/ESB/GlobalStylesLibrary/ObjectDefinitionsLibrary/CustomObjectDefaultKeySetStyles_xaml)  
[Globální Definice Metro Stylu](/ESB/GlobalStylesLibrary/ObjectDefinitionsLibrary/MetroObjectDefaultStyles_xaml)  
[Standartní Definice](/ESB/GlobalStylesLibrary/ObjectDefinitionsLibrary/StandardObjectDefaultStyles_xaml)  

programátorské definice Stylů:
[Kombinování Stylů](/ESB/GlobalStylesLibrary/GlobalUsingStyleExtensions_cs)  
[Styly pro programovou Aplikaci](/ESB/GlobalStylesLibrary/GlobalProgramaticStyleDefinitions_cs)  

a ještě styly Externích Nástrojů:
[MarkDown Styly](/ESB/GlobalStylesLibrary/Tools/Markdown/MarkdownStylesLibrary_xaml)  
[Knihovna Stylů pro Moduly a Nástroje](/ESB/GlobalStylesLibrary/Tools/ToolsStylesLibrary_xaml)  

Toto stačí Pro jednotný a přitom bohatý Vzhled Celého Systémů.
Chcete přece aby systém vypadal stejně sa ne každy formulář jinak :)



7. **Jazyky Systému**   
Systém je multijazyčný. Nyní s Automatickou správou systému - tzn. vše nové se uloží do databáze
s výchozím nastavením názvu a pověřená Osoba až uvidí název při otevření fomuláře 
otevře slovník a název přepíše pro všechny jazyky. Tím je zajišťen Kompletní Překlad Systému.
Navíc Tentýž slovník následně používá i Server. Slovníky se jen vyexportují ze serveru 
do Systému i pro možnost Offline použití - můžete pracovat i když nejede Server.
Ono se to pak dodatečně Uloží :)

[Český Slovník](/ESB/Languages/StringResources_cs-CZ_xaml)  
[Anglický Slovník](/ESB/Languages/StringResources_xaml)  

A to je Celá Struktura Systému.

8. **SYSTÉMOVÉ JÁDRO Centrální BOD systému**
A Zde si můžete prohlédnout jak Vypadá Jádro systému, které vše Ovladá z 1 Bodu.
Zde se spojují všechny formuláře, moduly, Data, Dotazy a Výsledky, a řídí se jejich zpracování

[Centrální Formulář](/ESB/SystemWindow_xaml)  
[Centrální Systém](/ESB/SystemWindow_xaml_cs)  


A to je vše. Je to Jednoduché a Pokud Vám to nepřipadá rád pro vás Cokoliv Vyvinu.
Vy ani vše znát nemusíte, k vývoji stačí Šablony - již do týdne trochu šikovný ITčkář dodá 
první agendy. A Pak to půjde Samo až z toho bude mít zábavu. Nevěříte? 
Vyzkoušejte Možnosti a Uvidíte sami. Plná Verze s Editací vbez Možnosti Vývoje je v sekci Ke Stažení

Svoboda Libor
33 Vývoje shrnuto v EIC a ESB projektech










