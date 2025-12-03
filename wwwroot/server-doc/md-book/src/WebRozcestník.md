# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

Seznam a popisy automatických funkcinalit a pravidel, nakteých stojí bezobslužnost spousty
jinak nutných úkonů při vývoji. Tyto pravidla zajišťují Velmi snadný a rychlý vývoj

#### Členění Webu EIC Serveru    
    
*Pro myšlení, vývoj nástrojů a práci s nimi hodné 21. století*    
    
**Podívejte se čerstvě Vydaný Dokumentační Portal komlpet v Češtině.**    
    
Díky implementovanému AUTO překladači se už nestane že něčemu neporozumíte.    
Protože Správné porozumění je nejčastější Kámen Úrazu u tolik Trpících Dokumentací.    
Psát Dokumentaci je totiž horší než vývoj.    
    
1. [Dokument Portal ANY LANG](https://KlikneteZde.Cz/EIC&ESBdocs/CodeDocs "Portál Dokumentace s Ukázkami připravených Nástrojů")    
    
2. [MS System Builder Online na Webu](https://KlikneteZde.Cz:8000 "MS System Builder Online")    
    
3. [Web Portal tvořený již nyní Editorem v Systému](https://KlikneteZde.Cz/Portal "Web Portal tvořený již nyní Editorem v Systému")    
    
4. [Fultextová Dokumentace EIC&ESB Projektů](https://KlikneteZde.Cz/server-doc/md-book/book/)    
    
5. [Prohlížeč Projektů EIC&ESB Online](https://KlikneteZde.Cz/EiC&ESBCodeBrowser/index/index.html)    
    
Věřím, že budete mít zajímavou podívanou co se dá nachystat ve volném čase v 1 Měsíci.    
    
----    
    
### Plánované Implementace Řešení EIC&ESB    
    
1) SYSTEM udělat setting limit dataview 500,    
Ne pro číselníky , vyžádá si úpravu all api Get nepovinný lastcount,    
    
2) SYSTEM V datové přidat radek s inputy a multiselect Combo zobrazených dat pro filtraci v nastaveni pridat zobrazit filtry    
    
3) SYSTEM udělat panel utility    
Ping, opět ports, terminál, cmd, srv cmd, SQL, JS,HTML, CSS, MD, C# pro rychlé testy funkčnosti, HTML+JS+CSS pro generátory + select framework pro auto definici knihoven a stylu,    
Přehled runtime settings, tables, v nastaveni pridat on/off utility    
    
4)SERVER backendcheck bude nastavovat user is online, a system vytvořit chat s uzivately.    
    
5) SYSTEM udělat left float panel poznamky    
    
6)SYSTEM  AGENGA WEBSOCKET ENDPOINT    
Aby si mohli implementovat cokoliv na webu a přidat systémový CHAT,    
    
6b) add bod 10) FILES + k files udělat agendu user Static files s možností nastavit sdílení, verzovani = files flow + přidat do agend  selekci souboru tento zdroj = USER FILE STORE    
    
7) SYSTEM SEHNAT LEPSI kalkulačku    
    
8) SYSTEM nastavit tooltip description i pro listbox    
    
9) SYSTEM log přidat enum Task/Log a mazat jen logy    
    
10) SYSTEM dodělat static files a přidat typy: framework, subdomain, userfiles, eicproject, eiclibrary, esbproject, esblibrary ,JSlibrary, CSSlibrary    
SystemSharedStore,WebTool,WebObject, WebPage,    
Typy budou agenda s nastavením verzovani, autocleanu or move do storehistory. Nesmí tam být 2x    
    
ATD.... + automaticky verzovat soubory při uložení. BUDE TO GLOBALNI FILE STORE    
+ Centrální správa static files, zapínání verzovani pro typy, auto mazání old verzi, přesun old verzi do té lokální DB jako STOREHISTORYLOG s hromadnou operaci cleanu se zvoleným typem    
    
11) dodělat github    
    
12)SYSTEM Generické Agendy Pro Uživatele bude vycházet z Dynamic API přes Universální Formulář    
    
14) Zprovoznit ExperDoc Editor a Viewer Pro Doc Server, potazmo pridat pravo zapisovat externistun    
    
15) Vytvořit Generátor dokumentace z Descriptions jako hromadnou operaci    
    
16) Vytvořit Globální Přepis Description a popisovaču slovo za slovo    
    
* Routingem muzu treba image nebo html file nebo cokoliv poslat do takoveho layoutu ktery v sobe bude mit editor a nacte si dany soubor sam    
  a tak muzu udelat staticky html editor pro subdomain file    
    
* Přidat Novou Agengu: HTML Generátory: Ya v knihovně nachystat generování různých typů HTML    
bude i nástroj při tvorbě Statických webů, prezentačních stránek, statických stránek,    
Přehledů, dokumentace, partnerská příprava dat    
    
* vytvořit remote konzoli na server pro moznost instalace a stravy online ze systemu    
    
* dodělat dynamicke API z SQL    
* dodělat vyhledávání ve všech DB dokumentacích pro Editory - Search Panel    
* Udělat sloučený Export vybraných knihoven jako StartuUp Script CSS    
* Vytvořit agendu Nastavení k Docs, styly s uploadem, linky    
* Vytvořit agendu napoveda kodu s vlastnimi castmi kodu - codecompletention    
    
* VYTvořit Gendu Generování Dokumentace MD    
* Vytvořit Agendu Generátory pro Web Portal a stranku skladat i z Generátorů    
* Prenest Sablony Html Souboru z Razor do Agendy pro uplnou spravu    
  + zrusit agendu includovane scripty so sablon, - budou si udrzovat sablony    
  + takto: vytvořit agendu nastroju a k nim templaty v ni budou i editory a nastroje    
  + Kazdy Layout bude mit svoji Page a to bude plate i pro portaly    
  + PS: portalum dat index znacku a dovolit jich neomezene    
  A k nim Sablony Stranek a tak pujde delat nastroje s Menu Atd, vazba musi byt zapsana v nich    
  Ukladat je stejne jako portal scripty jsou potreba pro build serveru = dynamicke programovani    
* TODO slozky upravit na browsable, allowedOpen in browser, must be authorized Nova agenda    
++++++++    
    
    
8) Galerie - Typ Video/Audio/Image/Other - vztahuje se k IMPORT/EXPORT    
    
vytvořit nový panel Funkcionality - Typ Export/Import/Operace    
1)udelat volani autorefresh DB->DOC    
    
2a)Napsat dokumentaci že přepisuje přímo pro Live debuging    
2b)import scriptů ze souborů do DB / export scriptů z DB so souborů    
    
3)  změnit názvy scriptů podle toho co dělají   a vše co se vztahuje k dané funkcionalitě napsat v 1 scriptu    
nebude se to muset hledat a bude to na 1 místě SUPER    
    
 - i translation atd vše nasázet do globalscriptů    
a k tomu udělat nastavení info typu - Global / Only Page /    
a druhý typ Anonymous / ROLE    
    
a udělat jak je v systému seznam API adres a  ten bude sám měnit volání Anonymou/Auth podle toho jestli je přihlášený    
    
NEWS    
Nástoje Webu / nastavení Guest/ROLE a dle hoto se načtou - nějaká ikonka na webu    
admin nástroje   -  přesunout logger    
Guest nástroje -    
a k tomu udělat nástroj zobrazení Dat ve Storage s možností smazat    
a do toho nástoje udělat přizazené ID a obsah html stránky načíst do něj    
- třeba mu udělat vlastní čast SCRIPT a něm si sám nastaví cokoliv    
= a přesunout tam vševchny statické tooly    
+ SYSTEM Info Panel - IKONA  ve footeru    
    
0) Aktualizovat local DB  Dev News    
    
4) při načtení webset uložit Datum načtení a vytvořit nový parameter jak často Refrešovat    
ne neřeší když je to uloženo    
    
Data bude chtít vymyslet s životností něco jako definice dat    
    
5)  udělat třídu co doplní ikonu COPY a PRINT    
    
6)  Ke scriptům udělat možnost zadání názvu nástroje a podle toho natahovat CSS a JS    
udělat něco jako INIT a ten zkontroluje jestli je načtený popř ho načte    
    
    
NáPAD udelat MikroWeby + NODEJS.RUN něco jako vlastní builder a exportit WEBY    
    
    
    
7) Vytvořit a publikovat úkolovník NEWS - přidat typ - Úkoly/ChangeLog/News/Reklama    
    
8) Admin nástroj Importovat Css / Js    
    
VEDE TO K vygenerování INDEX.html s exoportem všeho a spuštění NODE.JS a jede celý web    
    
NEXT IDEA  Analyzer Obsahu a vytahat všechny dole do knihovny pro Web tool    
následno okno HTML + okno SCRIPT + STYLE ať si každý udělá stránku a vyexportuje ji    
    
NEXT IDEA  správnost kódu vždy končit středníkem = Analyzer LET,const,VAR a vygeneruje okno proměných stránky    
kotrola, zda již někde neexistuje    
    
== Generátor multifunkčích Webů s možností si ho celý poskládat z nástrojů    
    
9) Dát V Systému Settings - zda MultiInstance ENABLE/DISABLE    
    
11)  VYMYSLET Export Group/Menu SYSTEM do Dokumentace + Popisy s automatickou grafikou členění a rozklikem pro web    
a takto to pak přidat jako bod na stránku panelů ve skupině IS/MS SYSTEM    
    
12) vymyslet automatické přidání parametru výška řádku systému a automaticky přidat nastavení do kódu    
jinak tento parametr, nebo seznam parametrů by mohl být definovn v menu a daný form už by jen poslouchal a plně dynamicky    
nastaví něco[object with name] - parametrem    
(začít tvořit SYSTEM Generator)    
    
13) jednou provždy opravit TimeStamp Timestamp na TimeStamp    
    
14)  we webmenu přidat zda po stránce načíst jen HTML part nebo Celý Obsah    
    
15) dodělat unikatní cesty ke sciptum bez js/css složky kvůli nástrojům co maji bordel i z IS při uložení    
    
16) každý script by měl mít části guest/webuser/admin/provider aby se načítaly jen ty správné    
    
17) přenést css z Layoutu    
    
18) opravit volání API z web Editorů a editor přenést do WebAdmina  -    
    
19) Udělat zálohování scriptů/ Import Složky    
    
20) SYSTEM pro enumy udělat tabulku kde skupina BUDE jen text - takto to půjde spravovat    
 jedna tabulka pro všechny enumy    
    
21) minifikace bude operace nebo ať ti to udělá sám    
22) dodelat ukladani minify saving je odstaveny SaveNewMinifiedFile    
    
23) SYSTEM sjednotit APP konfiguraci jako na Backendu    
    
24] SYSTEM v nekterych setrecord - Chybi TRY chatch    
    
    
25) scafolging přesunout do prázdného projektu [bude z něho regenetate Projekt] - řeší RYCHLOST    
    
26 REACT DESKTOP dobry na pouziti v generatoru    
https://react-beautiful-dnd.netlify.app/?path=/story/board--scrollable-columns    
netřeba, již zahrnuto v Technologii Metro4    
    
27) přidat do stránek OpenDocView jak je na Nomadu    
    
28) zapnout možnost otevřít 1 okno vícekrát, rozdělit do více instancí    
28a) TODO Nastavení Globálních Stylů    
    
29) zapnout možnost rozdělit systém na více instancí    
    
30) designer JS+CSS taky udělat s výběrem jako u knihovny a překlik    
31) dodělat vyhledávání ve scriptech    
    
32) prezentační knihovna Funkcionality    
33) prezentační knihovna Knihovny    
34) prezentační knihovna Služby    
35) prezentační knihovna Statické Nástroje a Generátory    
36) registrovat více controlerů (teĎ mám default) a na základě toho udělat více webů? Třeba i s překrytím stejné URL?    
    
37) do scheduleru přidat scripty + startcommand [procesy ukladat do runtimelistu]    
38) nová agenda Multi Web server (react,php,electron,atd..) => obsah jako StaticWeby    
 - start command, install command, build command, možná list commandů k zadání    
    - certifikát do složky server/cert + script na generování pro LIN/WIN, AUTO zahrnout subdomény    
39) nová agenda controling - dynamické SQL + předpřipravené GrafFormy pro vlastní definice pohledů    
40) nová agenda TableBuilder - Rozšíření DB + vygenerování kódu API    
41) StaticWeby jako upload folder/file s Adr strukturou a náhledem souborů(Webview - pict,video,audio/Editor JS,CSS,html)    
42) StaticWeb i MultiWebServer by mohly mít direct Clon z Githubu    
43) Prověřit Generic GraphQL - jestli má ještě nějaký přínos - DATASET Dynamic Builder pro Controling/Grafy    
44) Zaimplementovat SSH    
45) dát SSH a FTP do plánovaných úloh    
    
    
46) zbývá dokumentace vyhledávače pro editory    
47) webdocKnihovna není nasazená na webu    
48) dodelat sitemapu    
49) static files, chybi form a navazane data    
50] v systému řešení tooltipů, vyzobat všechny descriptiony k záznamům, nadřazených skupin atd, a osnovou je vyskládat, a vlevo nahoře pridat ikonu INFO    
51) udělat agendu emaillogger    
52) udělat 1x SP pro čištění zadaných tabulek    
53) Převzít hotel HTML messaging, přidat changelog, group-users-blog,Task Request-Blog,Rss-News,Web-Socket Messaging, Web-Socket Blog    
54) licence pro web    
55) stahovani předloh stranek v html completu: https://www.creative-tim.com/ tyto pak stačí zeditovat a jede se    
56) vytvořit osobní parametry uživatele - dynamický formulář zde si vybere zasílat zprávy atd, paramtry zadá správce v nové agendě s typem parametru - mixed enum + copy dynam param form, funkce link, email  web atd - hosting    
57) vytvořit layout s překladačem a modulům dát možnost volby layoutu - až po celé HTML - musí to jít, povinnost ma pouze renderBody    
58) provider ke kazde subdomene website moznost zalozit localDB co je nachystany    
59) SystemOperation, pridat inputtype [none,int,bit,table,json,etc.], inputdefinition[name,tablestructure], a kdyz bude zobrazit generic popup pro vyplneni - pro operace se vstupy atd    
60) docstemplates, pridat higlighttype,filetype [.exe atd] a zobrazovat v highlight okne se stazenim    
61] pro portal, zalozit agendy web backroundvideoList + option zvuku, mp3list    
62] sourcebrowser - zkusit zaimplementovat plugin a generovat browser jako soucast backendu    
63] kompletní dokumentace a zobrazeni mermaidů, pro Server, System, DB, WEB static tools, webFunctions Library-API-behavior-object atd, s popisi , rozložením, atd..    
64) zkusit doplnit "Docs" o highlight, mermaid    
65) System Vytvořit Datagrid Context menu - obshlahnout ze swap Builder    
 E:\Projekty\MyGitHub\FreeProjects\LocalDB-MSSQL-IS-System-Generator    
    
66) implementovat github do serveru jako server službu    
67) Nabídnout moje projekty githubu včetně předchopzí verze System generatoru SwapBuilder    
68) přidat chystané novinky a vkládat tam github projekty    
69) changelogh zaimplementované    
70) vytvořit tabulku s datum meno, popis, soubor - a do té se budou ukladat změny, bud tam nahraji celou změnu    
nebo to bude dělat nějaký triger, a tak budu mít hotovou agengu chaglelogu i s generováním pro web    
    
71) Zmenit správu šablon na dynamickou přes agendu, tak jich bude moci být neomezeně    
72] v port8lu tvorba webu udelat knihovnu s onlineukazkami    
------------------------------------------------------------------------------------------------------    
PROVIDING    
1) dodelat static files a projekty budou ve static files se kopirovat z GLOBAL do určitých složek    
   a k tomu bude přidán index a zakouppené administrace, pohledy, dokumentace,    
2) vytvorit zobrazeni struktur serverDbDiagram projekt a jejich rozpadů logiky    
3) pridat pole globalversion, customversion, solution(licsrv,docsrv,) a vytvořit, migration procedure    
   která vyzobe rozdili, uloyi script do DB, povysi verze, upozorni na custom, tzn jeste migracni tabulky    
4) vytvorit rozpis struktury databáze a editor s volbou tabulek, s funkcí přidat nové pole  - celá migracni logika rizena ze systému    
   musi vzniknoout rizeni rozvoje databáze    
5) sjednotit template files a pridat typ, skupinu,    
6) sehnat sql convert to jiných typu sql    
7) zaimplementovat sourcebrowser do serveru aby zobrazoval web    
8) zkusit zaimplementovat astnetstatic pro export webu jako staticky i s daty a vyexportovat soucasny portal    
9) vytvořit generator infotouchapp(možno i maui verzi pro mobily) se zobrazením jednoduchých html stránek s group/menu strukturou    
   plus sipky tam/zpet menu = resení pro infopanely viz radnice panel    
10) system dodat fultext search do knihoven kódů se skrytím položek, kde nebyl nalezen    
11) dodat do všech/vybraných tabulek description - bude sloužit jako fast help pro systém i generování webu    
12) vyzkoušet konverzi xaml->html a system prenest na html    
13] opravit načítání portálu a scriptu do server localtable ulevi DB    
14] prestehovat github a docs do podslozky PROVIDER    
15] add xaml web to netcore    
16] azure server pro muj portal bude potřeba z duvodu provider funkcí, které jsou bat atd    
    
17) web popsat jako static Technology - s možností vyseparovat libovolnou funkcionalitu    
18) Dodelat WebScrapScript a zaradit do nove agendy servers a takto se budou tvorit node, react atd, servery    
19) LayerJS Zoom umi nahledy html stranek a zoomove je otevre    
20) vytvořit Server agendu Process Task s možností on Startup a zapínáním a vypínáním online    
21) scripty portalu dat do lokalni tabulky - snizi pocet dotazu na DB    
22) SYSTEM Přenastavit seznam IT Nástroje a Manuály - Vypublikovat na Web v Novem Desktopu    
    
    
    
    
    
---    
    
### MarkDown Item Template    
```cs    
    
```    
    
---    
    
    