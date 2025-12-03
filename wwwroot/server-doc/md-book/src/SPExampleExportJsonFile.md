# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_STORED_PROCEDURE



CREATE PROCEDURE [dbo].[ExampleExportJsonFile](@Json varchar(MAX) OUTPUT)
AS
BEGIN
   ---DECLARE @json VARCHAR (4000);
   SET NOCOUNT ON

   SET @Json = (SELECT [Key],[Value] FROM ServerSettingList FOR JSON PATH);-- '{"DatabaseConnectionString":""';

  /*
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

	SET NOCOUNT OFF

	--SELECT * FROM OpenJson(@Json);
	
END
