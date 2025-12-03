# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_STORED_PROCEDURE


CREATE PROCEDURE [dbo].[SpOperationExportConfigFile]--(@Json varchar(MAX) OUTPUT)
AS
BEGIN
   DECLARE @Json VARCHAR (4000);

   SET @Json = (SELECT [Key],[Value] FROM ServerSettingList FOR JSON PATH);

  /*
  SET @Json = '{"DatabaseConnectionString":""';

  SELECT 
	@Json += CASE 	
		WHEN [Type] = 'bit' AND LOWER(ss.[Value]) = 'false' THEN CONCAT(',"', ss.[Key],'":False' )
		WHEN [Type] = 'bit' AND LOWER(ss.[Value]) = 'true' THEN CONCAT(',"', ss.[Key],'":True')
		WHEN [Type] = 'int' THEN CONCAT(',"', ss.[Key],'":', ss.[Value])
		ELSE CONCAT(',"', ss.[Key],'":"', ss.[Value],'"')
		END 
	FROM ServerSettingList AS ss;
	*/
	--SET @Json += '''';

	SELECT [Value] FROM OpenJson(@Json);
	
END
