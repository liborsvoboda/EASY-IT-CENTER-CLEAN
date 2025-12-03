### EASY-SYSTEM-Builder & EASY-DATA-Center & Visual Studio Rady    

Pro snadný Vývoj, Pořizování Obtidsků Databáze a automatické Generování DB Modelu
psaní Statických MD Dokumentací, 

si nainstalujte Tyto Doplňky:

```bash
BundlerMinifier      - Minifikace souborů Projektu 
EntityFramework Core Scafolding - Vytvoření Modelu DB v Projektu 1 kliknutím
MarkdownEditor  -  Visual Studio MarkDown Editor
Mermaid              - Visual Studio mermaid editor 
Multi-Language   - Visual Studio MultiLanguage Rozšířená Podpora
Preview-HTML     - Náhled HTML

```

---    

## WINDOWS OS Nápovědy a Tipy    
* Install Backend 'EXE' file as Windows service by SC/InstalUtil/ utility    
* Windows Service utilities and Service control from command Line examples are in 'WinServiceUtilities' folder    
    
    
    
---    
    
    
## Instalace EIC serveru na Windows Krok za Krokem    
    
Je jednoduchá pomocí Exe Instalátoru    
    
1. Nainstalujte si MSSQL Express 2019 a Vyšší    
2. Importujte databázi z EasyITCenter.bak. souboru   
   **Detailní popis nasazení Databáze je popsán v Instalaci na Linux Debian**   
  
3. Spusťte Instalátor EIC  Serveru - vytvoří službu 'EasyITCenter'  
   **je možné že se službu nepodaří spustit, můžete pozastavit instalaci a   
   spustit službu ručně pro zobrazení chyby, pravděpodobně přídstup do DB**   

4. Zkuste spustit EIC z nainstalované složky pomocí Exe Souboru    
   pro kontrolu připojení k databázi.   
   Konfigurační soubor připojení k DB najdete v ProgramData/EasyITcenter/config.json     
   je připravena i možnost user Loginu v connectionstringu v souboru 'config.example.json'   
5. Spusťte Windows Službu EasyITcenter    
    

   
    
---    
    
    
## Linux Instalace EIC MSSQL Databázový Engine     
Aktuálně je Databáze vytvořena na MSSQL Express, Brzy bude zkonována do MYSQL   
Podporovány Jsou všechny Typy Stěžejních Enginů Databází   

    
Zde je přehled linuxových příkazů krok za krokem    
pro instalaci EIC  na linux    
    
1. Instalace MSSQL krok za krokem    
    
```    
    
sudo apt install gnupg2 apt-transport-https wget curl.    
    
wget -q -O- https://packages.microsoft.com/keys/microsoft.asc | \    
    gpg --dearmor | sudo tee /usr/share/keyrings/microsoft.gpg > /dev/null 2>&1    
    
echo "deb [signed-by=/usr/share/keyrings/microsoft.gpg arch=amd64,armhf,arm64] https://packages.microsoft.com/ubuntu/20.04/mssql-server-2019 focal main" | \    
    sudo tee /etc/apt/sources.list.d/mssql-server-2019.list    
    
sudo apt update    
sudo apt install mssql-server    
sudo /opt/mssql/bin/mssql-conf setup    
sudo systemctl is-enabled mssql-server    
sudo systemctl status mssql-server    
```    

**Ovládací příkazy MSSQL serveru**   

```  
sudo systemctl stop mssql-server   
sudo systemctl start mssql-server   
sudo systemctl restart mssql-server   
```   

**Další Rady ohledně konfigurace MSSQL serveru**   
naleznete vwe složce 'Database_support'

    
Nyní se můžete připojit k MSSQL serveru vzdáleně z MSSQL Management Studio    
a naimportovat Databázi ze souboru EasyITCenter.bak    
    
a to takto:    
1. Vytvořte Databázi EasyITCenter    
2. nastavte Recovery model Simple, Collation CZECH_CI_AS    
3. vytvořte MSSQL uživatele easyitcenter s heslem easyitcenter    
4. Nahrajte  EasyITCenter.bak  na server do nějaké složky    
5. Obnovte Databázi EasyITCenter a zvolte EasyITCenter.bak    
6. Smažte uživatele easyitcenter ze SECURITY databáze EasyITCenter    
7. v Programibility/Stored Procedures Spusťte proceduru SpTaskDB_SETRIGHTS    
    znovu se vam přidá a nastavi se všemi právy - READ/WRITE/EXECUTE    
    
HOTOVO  Tím je hotovo nasazení MSSQL a Databáze    
Vyzkoušejte si připojení    
    
    
---    
    

## Vytvoření Linux Služby EIC server a její Ovládání    
    
**Nainstalujte AspNetCore6 Dotnet**    

* seznam příkazů   
```    

wget https://packages.microsoft.com/config/debian/11/packages-microsoft-prod.deb -O packages-microsoft-prod.deb   
sudo dpkg -i packages-microsoft-prod.deb    
rm packages-microsoft-prod.deb   
sudo apt update   
sudo apt install -y apt-transport-https   
sudo apt install dotnet-sdk-6.0   
sudo apt-get install aspnetcore-runtime-6.0    

```   
**HOTOVO** podpora DotNet je nainstalována   

**!!! SMAŽTE SOUBOR:   
- 'EasyITCenter.staticwebassets.runtime.json' ze složky serveru       
- Vytvořte složku Logs v adresáři Serveru dle nastavení služby   
  jak je uvedeno v souboru 'dotnet-EasyITCenter-service.service'   


*Soubory Služeb na Debian jsou ve složce: /lib/systemd/system*    

- Nakopírujte soubor Služby 'dotnet-EasyITCenter-service.service'   
  z Data/InstallHelp/ do této složky a upravte   
- Konfigurační soubor se na linuxu ukládá a načítá ze složky Serveru '/Data/config.json',   
  na Windows je uložen v 'SYSDRIVE:/ProgramData/EasyITCenter/config.json'   

- Aktivujte Službu a můžete nastartovat    
    
* Přehled příkazů služby EIC serveru    
* seznam příkazů:   
```    
systemctl enable dotnet-EasyITCenter-service.service    
systemctl start dotnet-EasyITCenter-service.service    
systemctl status dotnet-EasyITCenter-service.service    
systemctl stop dotnet-EasyITCenter-service.service    
```    
* Linux přímé spuštění pomocí dotnet dll příkazu    
    
```    
dotnet EasyITCenter.dll    
```    

**Statusu Ukočení Aplikace - Chyba**    

- Exit(3)  - Chyba Spuštění Serveru s Výpisem Chyby 
- Exit(5)  - Licence není načtena nebo není platná, Data/license.lic    
- Exit(10) - Nepodařilo se načíst Konfiguraci ze souboru Data/config.json   
- Exit(20) - Nepodařilo se načíst Konfiguraci z Databáze    

---    
    

## Linux Instalace Nástrojů pro správu serveru    
    
- zde jsou příkazy na instalaci pomocných nástrojů pro správu linuxového serveru    
```   
sudo apt-get install mc           -  Instalace File Manažera    
```    
    
- Instalace Softwarového Firewalu    
```    
sudo apt install ufw    
sudo ufw allow OpenSSH    
sudo ufw allow 1433/tcp    
sudo ufw enable    
sudo ufw status    
    
```    
    
- Instalace developer certificate run 'dotnet dev-certs https'. 
To trust the certificate (Windows and macOS only) run 'dotnet dev-certs https --trust'.


- Instalace MSSQL Nástrojů sqlcmd, atd    
```    
echo "deb [signed-by=/usr/share/keyrings/microsoft.gpg arch=amd64,armhf,arm64] https://packages.microsoft.com/ubuntu/20.04/prod focal main" | \    
    sudo tee /etc/apt/sources.list.d/prod.list    
    
sudo apt update    
sudo apt install mssql-tools unixodbc-dev    
ls /opt/mssql-tools/bin    
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc    
    
source ~/.bashrc    
echo $PATH    
    
which sqlcmd    
which bcp    
```    
**HOTOVO**    

---        

## Přihlášení do MSSQL z CMD kontrola nastavení    
Soubor s Connection Stringem najdete ve Složce Data/config.json   

- první se načte configurační soubor   
- následně se připojuje do DB a načítá konfiguraci z tabulky 'ServerSettingList'   

```    
sqlcmd -S localhost -U SA -p    
```    
    
    
---    
    
## MarkDown Item Template    
```cs    
    
```    
    
---    