# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_STORED_PROCEDURE






CREATE PROCEDURE [dbo].[SpAutoCleanEmailer]
AS

BEGIN
	DECLARE @AutoCleanEmailer int;
	SET NOCOUNT ON;

	--GET AutoCleanEmailer Configuration
	SELECT @AutoCleanEmailer = CAST(CAST(SUBSTRING(p.[Value],1,10) as varchar(10)) as int) FROM [dbo].[SystemParameterList] p WHERE p.[UserId] IS NULL AND p.[SystemName] = 'EmailerAutoCleanDayInterval';

	IF(@AutoCleanEmailer > 0) BEGIN
		DELETE FROM [dbo].[SolutionEmailerHistoryList] WHERE [TimeStamp] < DATEADD(DAY, -@AutoCleanEmailer, CAST(CURRENT_TIMESTAMP AS DATETIME));
	END
END
