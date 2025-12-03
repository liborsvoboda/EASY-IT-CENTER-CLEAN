# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_STORED_PROCEDURE





CREATE procedure [dbo].[SystemSpGetSystemPageList]
AS
BEGIN 

	--GET ALL TABLES
	SELECT CONCAT(TABLE_NAME, 'Page') as 'TableList'
	FROM INFORMATION_SCHEMA.TABLES
	WHERE table_type = 'BASE TABLE' AND TABLE_NAME NOT LIKE '%SupportList%'

	UNION 

	--GET ALL VIEWS
	SELECT 
	  CONCAT(TABLE_NAME, 'Page') as 'TableList'
	FROM INFORMATION_SCHEMA.VIEWS
	WHERE TABLE_NAME NOT LIKE '%SupportList%'

	UNION 

	--GET ALL Custom Form Page Names

	SELECT [PageName] AS TABLE_NAME
	FROM [dbo].[SystemCustomPageList]
	WHERE Active = 1

END;
