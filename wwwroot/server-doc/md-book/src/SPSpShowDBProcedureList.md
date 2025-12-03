# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_STORED_PROCEDURE







CREATE procedure [dbo].[SpShowDBProcedureList]
AS
BEGIN 
	SELECT SO.[type_desc], SO.[name], SM.[definition],SO.create_date,SO.modify_date 
	FROM sys.sql_modules SM INNER JOIN sys.Objects SO ON SM.Object_id = SO.Object_id 
	--WHERE SO.[type_desc] = 'SP'
	ORDER BY SO.[type_desc], SO.[name];
	;
END;

