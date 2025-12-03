# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_STORED_PROCEDURE

CREATE PROCEDURE [dbo].[SpImportSvgIcon] (
     @IconName NVARCHAR (100)
   , @ImageFullPath NVARCHAR (1000)
   )
AS
BEGIN
   DECLARE @tsql NVARCHAR (2000);
   SET NOCOUNT ON

   SET @tsql = 'INSERT INTO SystemSvgIconList ([Name],[UserId], [SvgIconPath]) ' +
               ' SELECT ' + '''' + @IconName + '''' + ',1, * ' + 
               'FROM Openrowset( Bulk ' + '''' + @ImageFullPath + '''' + ', Single_Blob) as img'
   EXEC (@tsql)
   SET NOCOUNT OFF
END
