# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_SCALAR_FUNCTION

Create FUNCTION fnGetFileName
(
    @fullpath nvarchar(1024)
) 
RETURNS nvarchar(1024)
AS
BEGIN
    IF(CHARINDEX('\', @fullpath) > 0)
       SELECT @fullpath = RIGHT(@fullpath, CHARINDEX('\', REVERSE(@fullpath)) -1)
       RETURN @fullpath
END