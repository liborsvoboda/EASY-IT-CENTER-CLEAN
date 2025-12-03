## Typy Globálních Operací/Funkcí

> Datové Operace 
> DB Operace
> Souborové Operace
> Hardwarové Operace
> Matematické Operace
> Mediální Operace
> Systémové Operace

---

## IMPLEMENTED TOOLS
 
---

### 05.12.23 Automatický Překlad Fpopisů Formuláře
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


