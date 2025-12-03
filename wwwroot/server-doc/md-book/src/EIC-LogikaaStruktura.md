# Úvod   EIC - Dokumentace Projektu  

EasyITcenter Universální řešení serverů IT světa v  1 Globálním Balíčku
Modulární Server s možností neomezeného a přesto extermně jednoduchého vývoje všemi směry
Ideální Centrální Správa sítí, strojů, IT a všeho co si dovedete prtředstavit.
Máte Otázky? neváhejte nám zavolat
Základní Struktura Projektu


<a name='assembly'></a>    
# EASY-SYSTEM-Builder & EASY-DATA-Center Nápověda pro Visual Studio    
    
---    
    
### Migrace mezi typy databází    
* Nainstalujte SW 'Mysql WorkBench'    
* spustit migrace    
    
Nápověda: https://severalnines.com/blog/how-migrate-mssql-mysql/    
SW: https://dev.mysql.com/downloads/file/?id=517975    
    
---    
    
### Windows Store Stáhnout App Link Generator    
* vložte odkaz na podrobnosti aplikace z internetového obchodu    
* Příklad: [https://apps.microsoft.com/store/detail/xaml-studio/9NTLS214TKMQ](https://apps.microsoft.com/store/detail/xaml-studio/9NTLS214TKMQ "")    
* [https://store.rg-adguard.net/](https://store.rg-adguard.net/ "")    
    
---    
    
### Aplikace pro Windows a nástroje Windows    
* v nabídce Start Windows Kits    
* cmd Obnovit nastavení obchodu    
```    
wsreset.exe    
```    
    
---    
    
    
### Více stovek nástrojů a nápadů Github Soucre se nepoužívá    
* Sto hotových nástrojů je zdarma pro rychlou implementaci    
* Jednoduchá logika kódu s nejlepšími pravidly systémové logiky Minimalizujte potřeby pro implementaci zpráv    
* Příklad: [https://github.com/search?q=wpf+tool&type=repositories](https://github.com/search?q=wpf+tool&type=repositories "")    
* Levné a rychlé zprávy o implementaci Příklad: Vzdálená podpora RDP 1 den, HTML editor pro správu webových stránek: 2 dny    
* Google vyřeší nemožný problém za jeden den    
* Je implementováno jen málo nástrojů, není potřeba další pro 95 % standardních systémů (Příklad FYIRoporting: Kompletní bezplatné tiskové řešení)    
    
    
```    
Příklad otázky: Jak řešíte aktualizaci systému? -    
Odpověď: Snadno podle čísla verze v názvu souboru    
    
PROČ:    
Protože jsou změny implementovány v logické struktuře AUTO    
nebo Pokud ne, bude nutné změnit na AUTO Logika = Poslední ruční přepisování    
Každá každá logika selhala. Toto je skutečný problém 95 % existujících systémů    
    
```    
    
---    
    
### Implementované bezplatné nepoužívané nástroje jsou nejlepším řešením Často se nepoužívá více světových zdrojů    
* Výsledkem jsou implementované nástroje v obou řešeních    
* SNADNÉ DATOVÉ CENTRUM – Více než 100 bezplatných technologií pro vyřešení JAKÉKOLI situace a nepotřebujete další existující levná řešení    
* EASY SYSTEM BUILDER – z implementovaných 50 balíčků se používá pouze 10 s několika částmi možností    
    
Zde je testament: [EASYTools 3rd Free Addons](./EASYTools_3rdFreeAddons.MD)    
    
---    
    
### Podmínka API pro ignorování v Swagger Docs    
    
```cs    
    
[ApiExplorerSettings(IgnoreApi = true)]    
    
```    
    
---    
    
### Popis API pro popis v Swagger Docs    
    
```cs    
    
[SwaggerTag("Šablona API s INSERT/UPDATE/DELETE/SELECT AND FILTERING API")]    
public class TemplateListApi : ControllerBase {    
    
[SwaggerOperation(Summary = "Get All records", Description = "Async standard select record API", OperationId = "Select all records", Tags = new[] { "TemplateListApi" })]    
public async Task<string> GetTemplateList() {    
    
[HttpDelete("/TemplateList/{id}")]    
[Consumes("application/json")]    
[SwaggerOperation(Summary = "Delete Record", Description = "Async standard Delete Record API", OperationId = "Delete Record", Tags = new[] { "TemplateListApi" })]    
public async Task<string> DeleteTemplateList(string id) {    
    
```    
    
---    
    
    
### Šablona položky MarkDown    
```cs    
    
```    
    
---    