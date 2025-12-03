# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_STORED_PROCEDURE






CREATE procedure [dbo].[SystemSpGetTableList]
AS
BEGIN 

	--GET ALL TABLES
	SELECT TABLE_NAME as 'TableList'
	FROM INFORMATION_SCHEMA.TABLES

	UNION 

	--GET ALL VIEWS
	SELECT 
	  TABLE_NAME as 'TableList'
	FROM INFORMATION_SCHEMA.VIEWS

END;
