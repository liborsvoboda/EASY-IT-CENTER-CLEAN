# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_STORED_PROCEDURE






CREATE procedure [dbo].[SpTaskDB_SETRIGHTS]
AS
BEGIN 
	BEGIN TRY CREATE USER [easyitcenter] FOR LOGIN [easyitcenter] END TRY BEGIN CATCH END CATCH;
	BEGIN TRY ALTER ROLE [db_datareader] ADD MEMBER [easyitcenter]; END TRY BEGIN CATCH END CATCH;
	BEGIN TRY ALTER ROLE [db_datawriter] ADD MEMBER [easyitcenter]; END TRY BEGIN CATCH END CATCH;
	BEGIN TRY GRANT EXECUTE TO [easyitcenter]; END TRY BEGIN CATCH END CATCH;
END;

SELECT CONCAT('Read/Write/Exec Rights On Database EasyITCenter was set','') as 'MessageList';