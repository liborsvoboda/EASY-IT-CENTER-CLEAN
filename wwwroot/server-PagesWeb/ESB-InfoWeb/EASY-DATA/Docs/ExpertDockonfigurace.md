# Použití konfigurací
v aplikaci je jednoduchý soubor config/config.js
Zde nastavíte jeden ze 3 režimů použití

```cs
  Editor běží ve 3 režimech
  - Samostatný editor - přímé stažení souboru z URL/Editoru. Statické lázně. Need Run from SecuritedWeb - Cors
  - filesEditor - Manager Přímé načítání souborů ze složky "data", nastavená v config - Správa dokumentace s ručně přepisovanými exportovanými soubory
  - apiManager - Správa dokumentů Api ze serveru s automatickým verzováním,

```

---


### Používání moderních funkcí a nápadů

- Expertní editor pro správu každého typu Markdown Documentation
- Rozšířeno pro multimédia pomocí grafů, struktur atd. pro neomezené jednoduché použití
- Můžete definovat vlastní výchozí šablonu
- Můžete exportovat Html, Pdf soubor s libovolným jazykem
- pouze jeden jazykový soubor Mardown pro automatický online překlad / export do VŠECH jazyků
- Lze použít offline, pouze tlanslating v režimu offline není k dispozici
- Automatické verzování souborů Otevřít okamžitě zapsat všechny změny každým uživatelem
- Automatický překlad může vytvořit Universal Web pro Doc Viewer. Pro publikování potřebujete pouze Kopírovat na webový server
- Automatický vícejazyčný export PDF a HTML. MD je v jednom jazyce – automatický překlad nepotřebuje více jazyků
- Pouze režim Api automaticky aktualizuje zdrojové soubory (přístupné z DB), ostatní režimy musíte exportovat a nahradit ručně
- Může být použit pro dokumentaci procesů, toků, projektů, vývoje všeho,
- Snadný způsob aktualizace požadovaných novinek ze strany klientů
- S Generated Summary.md bude PŘEVEDEN NA DOKUMENTÁCI s fulltextovým vyhledáváním a publikován jako webové stránky
- Spuštění jako samostatná aplikace,
- Veškerá podpora OS
- Spustit kliknutím na index.hml -- Statické stránky, webové stránky, PC aplikace
- Celý kód je k dispozici pro nákup a neomezený vývoj

```cs

```
---

### SNADNÉ konfigurace

- Lze spustit kliknutím na index.html Statické stránky přímo jako EASY Media Editor
- Samostatná konfigurace je pro správu/zobrazení uložených souborů
- Configuration Api je pro správu/zobrazování souborů Api s automatickým verzováním
- definice konfigurační třídy { Name,AutoVersion,Description,TimeStamp}
-!!! Vyberte jednu z možností nastavení!!! Spustit pouze první nastavenou variantu !!!

> Varianta FilesEditor
```csharp
// výchozí []
// příklad ['test.md','test1.md']
let ConfigFiles = ['helpFullEn.md','help_en.md','MerMaid.md'];
```

> Varianta Api Documentation Manager
```csharp
nech ConfigApiServer = {
     BasicAuthLoginName: 'tester',
     BasicAuthLoginPassword: 'tester',
     ServerApiAddress: 'http:127.0.0.1:5000'
}
```
> Samostatná varianta editoru Offine/Online/StaticSpa/RunByClick
```csharp
// jeho jediné Načtení souboru MarkDown z adresy URL pro úpravy a export
// Cors potřebuje spustit Https
// výchozí null
// příklad "https://some.com/makdown.md"
let ConfigUrlMdFile = "https://kliknetezde.cz:5000/tools/EDC_ESB_InteliHelp/src/README.md";
```

### Další konfigurace

```csharp
// Výchozí soubor šablony ze složky "config".
let ConfigDefaultTemplate = "defaultTemplate.md";

// Automatický export souboru při uložení do paměti
let ConfigExportFileOnSaving = true;
//Povolit vytvoření nového dokumentu (API - úplný proces, vytvoření správce souborů)
let ConfigEnableCreateNewDoc = true;
// Systémová zpráva Zobrazit čas
let ConfigSystemMessageShowTime = 5;

//Je potřeba pro vícenásobný export
let ConfigMermaidConvertOnExport = true;

//TODO se nepoužívá
let ConfigSelectedLanguages = ['cs','en','de','fr'];

// Čas přípravy na vícenásobný export
nech ConfigWaitingTimeInterval = 10;

// Povolení automatického překladu při spuštění
nech ConfigAutoMultiTranslateEnabled = true;

// Návrat do jazyka po vícenásobném překladu
let ConfigReturnToLanguage = 'en';
```

---
### Použití vývojáře

```cs
//zobrazit původní nápovědu
$("#Mavon")[0].__vue__.s_help = pravda

//ovládání panelu nástrojů mavon
$("#Mavon")[0].__vue__.$root.toolbar.save = false

//Konfigurace webového serveru
https://www.npmjs.com/package/http-server

```

---