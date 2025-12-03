# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_STORED_PROCEDURE






CREATE procedure [dbo].[SpOperationFailListClean]
AS
BEGIN 
	TRUNCATE TABLE [dbo].[SolutionFailList];
	SELECT 'Solution Fails was Cleaned' as 'MessageList';
END;
