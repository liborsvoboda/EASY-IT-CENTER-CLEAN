# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_STORED_PROCEDURE


CREATE procedure [dbo].[SpOperationRunSqlScript](@sqlScript varchar(MAX))
AS
BEGIN 
	DECLARE @result VARCHAR(MAX) = '';

	BEGIN TRY 
		EXEC (@sqlScript);
	END TRY
	BEGIN CATCH SELECT @result = CONCAT('Error No: ',ERROR_NUMBER(),CHAR(13)+CHAR(10), ERROR_MESSAGE()); END CATCH;

	PRINT @result;
END;
