# Úvod   EIC-Dev Pravidla  

EASY IT CENTER Pravidla, návody a řešení Platná pro Projekt EIC


Rady A Návody, jak nasadit řešení na různé OS

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
    
## Vytvoření Linux SLužby EIC serveru a její Ovládání    
    
*Soubory Služeb na Debian jsou ve složce: /lib/systemd/system*    
*Nakopírujte soubor Služby z Data/InstallHelp/ do této složky a upravte*    
*Aktivujte Službu a můžete nastartovat*    
    
* Přehled příkazů služby EIC serveru    
```    
systemctl enable dotnet-TABackend-service.service    
systemctl start dotnet-TABackend-service.service    
systemctl status dotnet-TABackend-service.service    
systemctl stop dotnet-TABackend-service.service    
```    
* Linux přímé spuštění pomocí dotnet dll příkazu    
    
```    
dotnet EasyITCenter.dll    
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
3. Spusťte Instalátor EIC  Serveru    
4. Zkuste spustit EIC z nainstalované složky pomocí Exe Souboru    
pro kontrolu připojení k databázi. Konfigurační soubor připojení k DB najdete v ProgramData/EasyITcenter/config.json    
5. Spusťte Windows Službu EasyITcenter    
    
**Detailní popis nasazení Databáze je popsán v Instalaci na Linux Debian**    
    
---    
    
    
## Instalace EIC serveru na Linux Debian 11x64 Krok za Krokem    
    
Zde je přehled linuxových příkazů krok za krokem    
pro instalaci EIC  na linux    
    
1. Instalace MSSQL krok za krokem    
    
```bash    
    
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
    
## Linux Instalace Nástrojů pro správu serveru    
    
- zde jsou příkazy na instalaci pomocných nástrojů pro správu linuxového serveru    
    
```cs    
    
sudo apt-get install mc           -  Instalace File Manažera    
```    
    
- Instalace Softwarového Firewalu    
    
```bash    
sudo apt install ufw    
sudo ufw allow OpenSSH    
sudo ufw allow 1433/tcp    
sudo ufw enable    
sudo ufw status    
    
```    
    
- Instalace MSSQL Nástrojů sqlcmd, atd    
    
```bash    
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
    
můžete si vyzkoušet připojení z CMD    
```bash    
    
sqlcmd -S localhost -U SA -p    
    
```    
    
    
    
---    
    
## MarkDown Item Template    
```cs    
    
```    
    
---    