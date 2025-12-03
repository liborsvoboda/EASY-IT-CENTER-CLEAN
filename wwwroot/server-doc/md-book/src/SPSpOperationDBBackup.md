# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_STORED_PROCEDURE



CREATE procedure [dbo].[SpOperationDBBackup]
AS
BEGIN 
	DECLARE @dbName as varchar(255) = DB_NAME();
	DECLARE @fileName as varchar(1024) = CONCAT('C:\Database\',@dbName,'_',FORMAT(GETDATE(),'yyyyMMdd'),'.bak');

	DBCC SHRINKFILE (2, 1); BACKUP DATABASE @dbName TO DISK = @fileName;
	DBCC SHRINKFILE (2, 1); BACKUP DATABASE @dbName TO DISK = @fileName;
END;


--PATH ON LINUX:  '/var/backups/DBbackup/hotels.bak'