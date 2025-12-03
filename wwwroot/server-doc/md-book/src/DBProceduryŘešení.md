# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

Vytvořené procedury pro automatizaci, Hromadné Operace, Správu DB

# DB - Export Procedur Řešení,   
Zde procedury pro automatizaci, Hromadné Operace, Správu DB    
### SP SpTaskDB_CLONE     

```sql   
			
-- Procedure For Clone Database To NEW DATABASE With Create New User If username+Pw is Inserted
-- IF Usename OR password are null the User Is Cerated With Same name AND password as DATABASE



CREATE procedure [dbo].[DB_CLONE](@SourceDbName varchar(255), @NewDbName varchar(255),@Rewrite bit = false, @userName varchar(255) = NULL, @password varchar(255) = NULL)
AS
BEGIN 
	SET NOCOUNT ON;
	
	-- CREATE C:\Database Folder
	BEGIN TRY EXEC xp_cmdshell 'MD C:\Database'; END TRY
	BEGIN CATCH SELECT ERROR_NUMBER() AS ErrorNumber ,ERROR_MESSAGE() AS ErrorMessage; END CATCH;
	
	--CHECK AND SET USERNAME AND PASSWORD
	IF ( ISNULL(@userName,1) = 1 OR ISNULL(@password,1) = 1) BEGIN
		SET @userName = @NewDbName;
		SET @password = @NewDbName;
	END

	--DELETE DATABASE IF EXIST IN REWRITE MODE
	IF (@Rewrite = 1 AND DB_ID(@NewDbName) IS NOT NULL) BEGIN
		BEGIN TRY EXEC('DROP DATABASE ' + @NewDbName +';') END TRY BEGIN CATCH END CATCH;
	END


	--BACKUP SOURCE DATABASE
	DECLARE @backupfile as varchar(1024) = CONCAT('C:\Database\','_',@SourceDbName,'.bak');
	DECLARE @NewDBfileName as varchar(1024) = CONCAT('C:\Database\',@NewDbName,'.mdf');
	DECLARE @NewDBLogfileName as varchar(1024) = CONCAT('C:\Database\',@NewDbName,'_log','.ldf');
	DECLARE @OldDBLogName as varchar(1024) = CONCAT(@SourceDbName,'_log');
	DECLARE @NewDBLogName as varchar(1024) = CONCAT(@NewDbName,'_log');


	BEGIN TRY DBCC SHRINKFILE (2, 1) END TRY BEGIN CATCH END CATCH;
	BACKUP DATABASE @SourceDbName TO DISK = @backupfile;
	BEGIN TRY DBCC SHRINKFILE (2, 1) END TRY BEGIN CATCH END CATCH;
	BACKUP DATABASE @SourceDbName TO DISK = @backupfile;


	--CREATE NEW DFATABASE
	RESTORE DATABASE @NewDbName FROM DISK = @backupfile 
	WITH MOVE @SourceDbName TO @NewDBfileName,
	MOVE @OldDBLogName TO @NewDBLogfileName, 
	FILE = 2,RECOVERY,  REPLACE,  STATS = 10;
	EXEC('ALTER DATABASE ' + @NewDbName + ' SET MULTI_USER');

	--SET RIGHT LOGICAL FILE NAME
	BEGIN TRY EXEC('USE ' + @NewDbName +'; ALTER DATABASE ' + @NewDbName + ' MODIFY FILE (NAME= ' + @SourceDbName +' , NEWNAME= ' +@NewDbName +') ') END TRY BEGIN CATCH END CATCH;
	BEGIN TRY EXEC('USE ' + @NewDbName +'; ALTER DATABASE ' + @NewDbName + ' MODIFY FILE (NAME= ' + @OldDBLogName +' , NEWNAME= ' +@NewDBLogName +') ') END TRY BEGIN CATCH END CATCH;


	-- REMOVE Username For REINSERTING
	BEGIN TRY EXEC('USE ' + @NewDbName + '; DROP USER IF EXISTS '+ @userName) END TRY BEGIN CATCH END CATCH;

	--CREATE NEW USER IF NOT EXIST
	BEGIN TRY
	EXEC('USE ' + @NewDbName + '; CREATE LOGIN ' + @username + ' WITH PASSWORD = ''' + @password + ''', DEFAULT_DATABASE=[master], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF')
	--CREATE LOGIN @userName WITH PASSWORD = @password, DEFAULT_DATABASE=[master], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF;
	END TRY 
	BEGIN CATCH SELECT ERROR_NUMBER() AS ErrorNumber ,ERROR_MESSAGE() AS ErrorMessage; END CATCH;

    --SET RIGHTS FOR USER
	BEGIN TRY EXEC('USE ' + @NewDbName + '; CREATE USER ' + @userName +' FOR LOGIN ' + @userName) END TRY BEGIN CATCH END CATCH;
	BEGIN TRY EXEC('USE ' + @NewDbName + '; ALTER ROLE [db_datareader] ADD MEMBER ' + @userName) END TRY BEGIN CATCH END CATCH;
	BEGIN TRY EXEC('USE ' + @NewDbName + '; ALTER ROLE [db_datawriter] ADD MEMBER ' + @userName) END TRY BEGIN CATCH END CATCH;
	BEGIN TRY EXEC('USE ' + @NewDbName + '; GRANT EXECUTE TO ' + @userName) END TRY BEGIN CATCH END CATCH;

END;

```    
			
---   
			### SP SpOperationExportConfigFile     

```sql   
			
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

```    
			
---   
			### SP SpAutoCleanEmailer     

```sql   
			




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

```    
			
---   
			### SP _SpOperationTodoCheckRolesIntegrity     

```sql   
			


-- PROCEDURE CREATE Check Roles Integrity In Access Definitions
-- Can Be Damaged By Remove Role
CREATE procedure [dbo].[_SpOperationTodoCheckRolesIntegrity]
AS
BEGIN 
	DECLARE @Error VarChar(MAX);
	
	--DO PROCESS
	BEGIN TRY  
		
		SELECT 1;

		-- PROCESS COMPLETED
		SELECT 'Process Completed' as 'MessageList';
	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('ProcessIdentifier',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);

		-- PROCESS ERROR
		SELECT @Error as 'MessageList';
	END CATCH


END;

```    
			
---   
			### SP SpImportTemplateDocFilesFromFolder     

```sql   
			
CREATE PROCEDURE [dbo].[SpImportTemplateDocFilesFromFolder] (
	 @FolderPath NVARCHAR (2048)
   )
AS
BEGIN
   DECLARE @tsql NVARCHAR (4000);DECLARE @Filename varchar(250);DECLARE @GroupId int;DECLARE @Sequence int;DECLARE @Description varchar(250);

   DECLARE @FilePathList TABLE (RowNum int IDENTITY (1, 1) Primary key NOT NULL,SubDirectory nvarchar(255), Depth smallint, FileFlag bit);
   DECLARE @RowCnt int; SET @RowCnt = 0;
   SET NOCOUNT ON

   SET @GroupId = 9;
   SET @Sequence = 1000;
   SET @Description = 'IMPORTED FILE';

   --CLEAN RECORDS WITH SAME DESCRIPTION
   --DELETE FROM [dbo].[DocSrvDocTemplateList] WHERE CONVERT(varchar(MAX),[Description]) IN ('IMPORTED FILE');

   INSERT INTO @FilePathList (SubDirectory, Depth, FileFlag) EXEC xp_dirtree @FolderPath, 0, 1;

   
   WHILE @RowCnt <= (SELECT COUNT([RowNum]) FROM @FilePathList)
	BEGIN
		SET @RowCnt = @RowCnt + 1;
		SELECT @Filename = SubDirectory FROM @FilePathList WHERE [RowNum] = @RowCnt;
		
		   SET @tsql = 'INSERT INTO DocSrvDocTemplateList ([GroupId],[Sequence],[Name],[Description],[UserId],[Template]) ' +
               ' SELECT 9,1000,' + '''' + @Filename + '''' + ',' + '''' + @Description + '''' + ',1, * ' + 
               'FROM Openrowset( Bulk ' + '''' + CONCAT(@FolderPath,'\',@Filename) + '''' + ', Single_Blob) as img';
		   EXEC (@tsql);
		   --PRINT (@tsql);
	END
	
   /* EXAMPLE FOR IMPORT ONLY ONE FILE
	  SET @tsql = 'INSERT INTO DocSrvDocTemplateList ([GroupId],[Sequence],[Name],[Description],[UserId], [Template]) ' +
               ' SELECT ' + '''' + @GroupId + '''' + ','+ '''' + @Sequence + '''' + ',' + '''' + @Filename + '''' + ',' + '''' + @Description + '''' + ',1, * ' + 
               'FROM Openrowset( Bulk ' + '''' + @TemplateFullPath + '''' + ', Single_Blob) as img'
      EXEC (@tsql)
   */

   SET NOCOUNT OFF
END


```    
			
---   
			### SP SpTaskDB_BACKUP     

```sql   
			

CREATE procedure [dbo].[SpTaskDB_BACKUP]
AS
BEGIN 
	DECLARE @dbName as varchar(255) = DB_NAME();
	DECLARE @fileName as varchar(1024) = CONCAT('C:\Database\',@dbName,'_',FORMAT(GETDATE(),'yyyyMMdd_hhmmss'),'.bak');

	BEGIN TRY DROP USER [easyitcenter] END TRY BEGIN CATCH END CATCH;
	--DBCC SHRINKFILE (2, 1);
	BACKUP DATABASE @dbName TO DISK = @fileName;
	--DBCC SHRINKFILE (2, 1); 
	BACKUP DATABASE @dbName TO DISK = @fileName;

	BEGIN TRY CREATE USER [easyitcenter] FOR LOGIN [easyitcenter] END TRY BEGIN CATCH END CATCH;
	BEGIN TRY ALTER ROLE [db_datareader] ADD MEMBER [easyitcenter]; END TRY BEGIN CATCH END CATCH;
	BEGIN TRY ALTER ROLE [db_datawriter] ADD MEMBER [easyitcenter]; END TRY BEGIN CATCH END CATCH;
	BEGIN TRY GRANT EXECUTE TO [easyitcenter]; END TRY BEGIN CATCH END CATCH;
	
	
	--PATH ON LINUX:  '/var/backups/DBbackup/hotels.bak'
	SELECT CONCAT('Database Was Backuped to ','C:\Database\',@dbName,'_',FORMAT(GETDATE(),'yyyyMMdd_hhmmss'),'.bak') as 'MessageList';
END;

```    
			
---   
			### SP SpTaskDB_SETRIGHTS     

```sql   
			




CREATE procedure [dbo].[SpTaskDB_SETRIGHTS]
AS
BEGIN 
	BEGIN TRY CREATE USER [easyitcenter] FOR LOGIN [easyitcenter] END TRY BEGIN CATCH END CATCH;
	BEGIN TRY ALTER ROLE [db_datareader] ADD MEMBER [easyitcenter]; END TRY BEGIN CATCH END CATCH;
	BEGIN TRY ALTER ROLE [db_datawriter] ADD MEMBER [easyitcenter]; END TRY BEGIN CATCH END CATCH;
	BEGIN TRY GRANT EXECUTE TO [easyitcenter]; END TRY BEGIN CATCH END CATCH;
END;

SELECT CONCAT('Read/Write/Exec Rights On Database EasyITCenter was set','') as 'MessageList';
```    
			
---   
			### SP SpProvider_ExportSqlScript     

```sql   
			


-- Its Procedure From Provider To Customer
-- @TargetLinkedDb  must be In Format: 95.183.52.33 or 95.183.52.33,1433 or SNRJDI\SLAMANAGEMENT

CREATE procedure [dbo].[SpProvider_ExportSqlScript](@TableName varchar(255)
)
AS
BEGIN 
	DECLARE @SqlScript as VARCHAR(MAX) ='';

	DECLARE @TableDefinitionList TABLE (RowNum int IDENTITY (1, 1) Primary key NOT NULL, [Template] text NULL);
	INSERT INTO @TableDefinitionList([Template]) EXEC sp_GetDDL @TableName;
	SELECT @SqlScript = [Template] FROM @TableDefinitionList WHERE RowNum = 1;

	SET @SqlScript = REPLACE(@SqlScript,'','''');
	SET @SqlScript = REPLACE(@SqlScript,' GO','');






END;


	SELECT @SqlScript as 'MessageList';

```    
			
---   
			### SP SpOperationFailListClean     

```sql   
			




CREATE procedure [dbo].[SpOperationFailListClean]
AS
BEGIN 
	TRUNCATE TABLE [dbo].[SolutionFailList];
	SELECT 'Solution Fails was Cleaned' as 'MessageList';
END;

```    
			
---   
			### SP SystemSpGetSystemPageList     

```sql   
			



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

```    
			
---   
			### SP sp_GetDDL     

```sql   
			--#################################################################################################
-- Real World DBA Toolkit Version 2019-08-01 Lowell Izaguirre lowell@stormrage.com
--#################################################################################################
-- USAGE: exec sp_GetDDL GMACT
--   or   exec sp_GetDDL 'bob.example'
--   or   exec sp_GetDDL '[schemaname].[tablename]'
--   or   exec sp_GetDDL #temp
--#################################################################################################
-- copyright 2004-2018 by Lowell Izaguirre scripts*at*stormrage.com all rights reserved.
--developer utility function added by Lowell, used in SQL Server Management Studio 
-- http://www.stormrage.com/SQLStuff/sp_GetDDL_Latest.txt
--Purpose: Script Any Table, Temp Table or Object(Procedure Function Synonym View Table Trigger)
--#################################################################################################
-- see the thread here for lots of details: http://www.sqlservercentral.com/Forums/Topic751783-566-7.aspx
-- You can use this however you like...this script is not rocket science, but it took a bit of work to create.
-- the only thing that I ask
-- is that if you adapt my procedure or make it better, to simply send me a copy of it,
-- so I can learn from the things you've enhanced.The feedback you give will be what makes
-- it worthwhile to me, and will be fed back to the SQL community.
-- add this to your toolbox of helpful scripts.
--#################################################################################################
--
-- V300  uses String concatination and sys.tables instead of a cursor
-- V301  enhanced 07/31/2009 to include extended properties definitions
-- V302  fixes an issue where the schema is created , ie 'bob', but no user named 'bob' owns the schema, so the table is not found
-- V303  fixes an issue where all rules are appearing, instead of jsut the rule related to a column
-- V304  testing whether vbCrLf is better than just CHAR(13), some formatting cleanup with GO statements
--       also fixed an issue with the conversion from syscolumns to sys.columns, max-length is only field we need, not [precision]
-- V305  user feedback helped me find that the type_name function should call user_type_id instead of system_type_id
--       also fixed issue where identity definition missing from numeric/decimal definition
-- V306  fixes the computed columns definition that got broken/removed somehow in V300
--       also formatting when decimal is not an identity
-- V307  fixes bug identified by David Griffiths-491597 from SSC where the  @TABLE_ID
--       is reselected, but without it's schema  , potentially selecting the wrong table
--       also fixed is the missing size definition for varbinary, also found by David Griffith
-- V308  abtracted all SQLs to use Table Alaises
--       added logic to script a temp table.
--       added warning about possibly not being marked as system object.
-- V309  added logic based on feedback from Vincent Wylenzek @SSC to return the definition from sys.sql_modules for
--       any object like procedure/view/function/trigger, and not just a table. 
--       note previously, if you pointed sp_GetDDL at a view, it returned the view definition as a table...
--       now it will return the view definition instead.
-- V309a returns multi row recordset, one line per record 
-- V310a fixed the commented out code related to collation identified by moadh.bs @SSC
--       changed the DEFAULT definitions to not include the default name.
-- V310b Added PERSISTED to calculated columns where applicable
-- V310b fixed COLLATE statement for temp tables
-- V310c fixed NVARCHAR size misreported as doubled.
-- V311  fixed issue where indexes did not identify if the column was ASC or DESC found by nikus @ SSC
-- V311a fixed issue where indexes did not identify if the index was CLUSTERED or NONCLUSTERED found by nikus @ SSC 02/22/2013
-- V312  got rid of all upper casing, and allowing all scripts to generate the exact object names in cases of case sensitive databases.
--       now using the case sensitive name of the table passed: so of you did 'exec sp_GetDDL invoicedocs , it might return the script for InvoiceDocs, as that is how it is spelled in sys.objects.
--       added if exists(drop table/procedure/function) statement to the scripting automatically.
--       toggled the commented out code to list any default constraints by name, hopefully to be more accurate..
--       formatting of index statements to be multi line for better readability
--V314   03/30/2015
--       did i mention this scripts out temp tables too? sp_GetDDL #tmp
--       scripts any object:table,#temptable procedure, function, view or trigger
--       added ability to script synonyms
--       moved logic for REAL datatype to fix error when scripting real columns
--       added OmaCoders suggestion to script column extended properties as well.
--       added matt_slack suggestion to script schemaname as part of index portion of script.
--       minor script cleanup to use QUOTENAME insead of concatenating square brackets.
--       changed compatibility to 2008 and above only, now filtered idnexes with WHERE statmeents script correctly
--       foreign key tables and columns  in script now quotenamed to account for spaces in names; previously an error for Applciation ID instead of [Application ID]
--V315   Fixes Aliases and column names that prevented Case Sensitive collations from working.
--       Adds code if the procedure scripted is a system object
--       index scripts featuring filtered indexes is now included
--       index scripts now include filegroup name and compression settings
--       foreign key casecade delete/update settings now included as identified by Alberto aserio@SSC)
--       Fixes related to scripting extended events  as identified by Alberto aserio@SSC)
--V316   Fixes Identified 07/27/2016 by mlm( m.martinelli@SSC)
--       Added logic  resolving error when custom data type are defined using name greather than 16 char.
--       Added handling for data types: binary, datetime2, datetimeoffset, time
--       Added Set Based logic for Handling Fixed FOREIGN KEYS handling when one foreign key is define on more then one field
--       Added SPARSE column property
--V317   Fixes Identified 03/30/2017 by Lowell
--       Scripting of Foreign key column(s) are now quotenamed
--       Scripting column store indexes was broken, now fixed for column store indexes
--V318   Fixes Identified 02/14/2018 by Lowell
--       Scripting of with collation added/required for scripting SharePoint/ReportServer , or databases with non standard collations
--       Scripting enhanced to definitively handle case sensitive collations as well.
--V319   Adding logic for Temporal Tables, to grab their auto nistory tables
--       first attempt for partitioned tables, to get the columns correctly on the partition scheme
-- DROP PROCEDURE [dbo].[sp_GetDDL]
--#############################################################################
--if you are going to put this in MASTER, and want it to be able to query
--each database's sys.indexes, you MUST mark it as a system procedure:
--EXECUTE sp_ms_marksystemobject 'sp_GetDDL'
--#############################################################################
CREATE PROCEDURE [dbo].[sp_GetDDL]
  @TBL                VARCHAR(255)
AS
BEGIN
  SET NOCOUNT ON;
  DECLARE     @TBLNAME                VARCHAR(200),
              @SCHEMANAME             VARCHAR(255),
              @STRINGLEN              INT,
              @TABLE_ID               INT,
              @FINALSQL               VARCHAR(MAX),
              @CONSTRAINTSQLS         VARCHAR(MAX),
              @CHECKCONSTSQLS         VARCHAR(MAX),
              @RULESCONSTSQLS         VARCHAR(MAX),
              @FKSQLS                 VARCHAR(MAX),
              @TRIGGERSTATEMENT       VARCHAR(MAX),
              @EXTENDEDPROPERTIES     VARCHAR(MAX),
              @INDEXSQLS              VARCHAR(MAX),
              @MARKSYSTEMOBJECT       VARCHAR(MAX),
              @vbCrLf                 CHAR(2),
              @ISSYSTEMOBJECT         INT,
              @PROCNAME               VARCHAR(256),
              @input                  VARCHAR(MAX),
              @ObjectTypeFound        VARCHAR(255),
              @ObjectDataTypeLen      INT,
              --V3.20 additions
              @WithStatement          VARCHAR(MAX),
              @FileGroupStatement     VARCHAR(MAX),
              @PartitioningStatement  VARCHAR(MAX),
              @TemporalStatement      VARCHAR(MAX);
--##############################################################################
-- INITIALIZE
--##############################################################################
  SET @input = '';
  --new code: determine whether this proc is marked as a system proc with sp_ms_marksystemobject,
  --which flips the is_ms_shipped bit in sys.objects
    SELECT @ISSYSTEMOBJECT = ISNULL([is_ms_shipped],0),@PROCNAME = ISNULL([name],'sp_GetDDL') FROM [sys].[objects] WHERE [object_id] = @@PROCID;
  IF @ISSYSTEMOBJECT IS NULL 
    SELECT @ISSYSTEMOBJECT = ISNULL([is_ms_shipped],0),@PROCNAME = ISNULL([name],'sp_GetDDL') FROM [master].[sys].[objects] WHERE [object_id] = @@PROCID;
  IF @ISSYSTEMOBJECT IS NULL 
    SET @ISSYSTEMOBJECT = 0;  
  IF @PROCNAME IS NULL
    SET @PROCNAME = 'sp_GetDDL';
  --SET @TBL =  '[DBO].[WHATEVER1]'
  --does the tablename contain a schema?
  SET @vbCrLf =  CHAR(10);
  SELECT @SCHEMANAME = ISNULL(PARSENAME(@TBL,2),'dbo') ,
         @TBLNAME    = PARSENAME(@TBL,1);
  SELECT
    @TBLNAME    = [objz].[name],
    @TABLE_ID   = [objz].[object_id]
  FROM [sys].[objects] AS [objz]
  WHERE [objz].[type]          IN ('S','U')
    AND [objz].[name]          <>  'dtproperties'
    AND [objz].[name]           =  @TBLNAME
    AND [objz].[schema_id] =  SCHEMA_ID(@SCHEMANAME) ;
 SELECT @ObjectDataTypeLen = MAX(LEN([name])) FROM [sys].[types];
--##############################################################################
-- Check If TEMP TableName is Valid
--##############################################################################
  IF LEFT(@TBLNAME,1) = '#'  COLLATE SQL_Latin1_General_CP1_CI_AS
    BEGIN
      PRINT '--TEMP TABLE  ' + QUOTENAME(@TBLNAME) + '  FOUND';
      IF OBJECT_ID('tempdb..' + QUOTENAME(@TBLNAME)) IS NOT NULL
        BEGIN
          PRINT '--GOIN TO TEMP PROCESSING';
          GOTO TEMPPROCESS;
        END;
    END;
  ELSE
    BEGIN
      PRINT '--Non-Temp Table, ' + QUOTENAME(@TBLNAME) + ' continue Processing';
    END;
--##############################################################################
-- Check If TableName is Valid
--##############################################################################
  IF ISNULL(@TABLE_ID,0) = 0
    BEGIN
      --V309 code: see if it is an object and not a table.
      SELECT
        @TBLNAME    = [objz].[name],
        @TABLE_ID   = [objz].[object_id],
        @ObjectTypeFound = [objz].[type_desc]
      FROM [sys].[objects] AS [objz]
      --WHERE [type_desc]     IN('SQL_STORED_PROCEDURE','VIEW','SQL_TRIGGER','AGGREGATE_FUNCTION','SQL_INLINE_TABLE_VALUED_FUNCTION','SQL_TABLE_VALUED_FUNCTION','SQL_SCALAR_FUNCTION','SYNONYMN')
      WHERE [objz].[type]          IN ('P','V','TR','AF','IF','FN','TF','SN')
        AND [objz].[name]          <>  'dtproperties'
        AND [objz].[name]           =  @TBLNAME
        AND [objz].[schema_id] =  SCHEMA_ID(@SCHEMANAME) ;
      IF ISNULL(@TABLE_ID,0) <> 0  
        BEGIN
          --adding a drop statement.
          --adding a sp_ms_marksystemobject if needed
          SELECT @MARKSYSTEMOBJECT = CASE 
                                       WHEN [objz].[is_ms_shipped] = 1 
                                       THEN '
GO
--#################################################################################################
--Mark as a system object
EXECUTE sp_ms_marksystemobject  ''' + QUOTENAME(@SCHEMANAME) +'.' + QUOTENAME(@TBLNAME) + '''
--#################################################################################################
' 
                                       ELSE '
GO
' 
                                     END 
          FROM [sys].[objects] AS [objz] 
          WHERE [objz].[object_id] = @TABLE_ID;
          --adding a drop statement.
          IF @ObjectTypeFound = 'SYNONYM'  COLLATE SQL_Latin1_General_CP1_CI_AS
            BEGIN
               SELECT @FINALSQL = 
                'IF EXISTS(SELECT * FROM sys.synonyms WHERE name = ''' 
                                + [name] 
                                + ''''
                                + ' AND base_object_name <> ''' + [base_object_name] + ''')'
                                + @vbCrLf
                                + '  DROP SYNONYM ' + QUOTENAME([name]) + ''
                                + @vbCrLf
                                +'GO'
                                + @vbCrLf
                                +'IF NOT EXISTS(SELECT * FROM sys.synonyms WHERE name = ''' 
                                + [name] 
                                + ''')'
                                + @vbCrLf
                                + 'CREATE SYNONYM ' + QUOTENAME([name]) + ' FOR ' + [base_object_name] +';'
                                FROM [sys].[synonyms]
                                WHERE  [name]   =  @TBLNAME
                                AND [schema_id] =  SCHEMA_ID(@SCHEMANAME);
            END;
          ELSE
            BEGIN
          SELECT @FINALSQL = 
          'IF OBJECT_ID(''' + QUOTENAME(@SCHEMANAME) + '.' + QUOTENAME(@TBLNAME) + ''') IS NOT NULL ' + @vbCrLf
          + 'DROP ' + CASE 
                        WHEN [objz].[type] IN ('P')
                        THEN ' PROCEDURE '
                        WHEN [objz].[type] IN ('V')
                        THEN ' VIEW      '
                        WHEN [objz].[type] IN ('TR')
                        THEN ' TRIGGER   '
                        ELSE ' FUNCTION  '
                      END 
                      + QUOTENAME(@SCHEMANAME) + '.' + QUOTENAME(@TBLNAME) + ' ' + @vbCrLf + 'GO' + @vbCrLf
          + [def].[definition] + @MARKSYSTEMOBJECT
          FROM [sys].[objects] AS [objz] 
            INNER JOIN [sys].[sql_modules] AS [def]
              ON [objz].[object_id] = [def].[object_id]
          WHERE [objz].[type]          IN ('P','V','TR','AF','IF','FN','TF')
            AND [objz].[name]          <>  'dtproperties'
            AND [objz].[name]           =  @TBLNAME
            AND [objz].[schema_id] =  SCHEMA_ID(@SCHEMANAME) ;
            END;
          SET @input = @FINALSQL;  
          
        SELECT @input AS [Item];
         RETURN;
        END;
      ELSE
        BEGIN
        SET @FINALSQL = 'Object ' + QUOTENAME(@SCHEMANAME) + '.' + QUOTENAME(@TBLNAME) + ' does not exist in Database ' + QUOTENAME(DB_NAME())   + ' '  
                      + CASE 
                          WHEN @ISSYSTEMOBJECT = 0 THEN @vbCrLf + ' (also note that ' + @PROCNAME + ' is not marked as a system proc and cross db access to sys.tables will fail.)'
                          ELSE ''
                        END;
      IF LEFT(@TBLNAME,1) = '#' 
        SET @FINALSQL = @FINALSQL + ' OR in The tempdb database.';
      SELECT @FINALSQL AS [Item];
      RETURN 0;
        END;  
      
    END;
--##############################################################################
-- Valid Table, Continue Processing
--##############################################################################
--Is this a SYSTEM versioned TABLE?
SELECT @FINALSQL = 
     CASE 
       WHEN [tabz].[history_table_id] IS NULL 
       THEN '' 
       ELSE 'ALTER TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id]) ) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ' SET (SYSTEM_VERSIONING = OFF);' + @vbCrLf
            +  'IF OBJECT_ID(''' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[history_table_id]) ) + '.' + QUOTENAME(OBJECT_NAME([tabz].[history_table_id])) + ''') IS NOT NULL ' + @vbCrLf
              + 'DROP TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[history_table_id])) + '.' + QUOTENAME(OBJECT_NAME([tabz].[history_table_id])) + ' ' + @vbCrLf + 'GO' + @vbCrLf
       END
    + 'IF OBJECT_ID(''' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id]) ) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ''') IS NOT NULL ' + @vbCrLf
              + 'DROP TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id])) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ' ' + @vbCrLf + 'GO' + @vbCrLf
              + 'CREATE TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id])) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ' ( '
    FROM [sys].[tables] [tabz] WHERE [tabz].[object_id] = @TABLE_ID
    PRINT @FINALSQL
  --removed invalid code here which potentially selected wrong table--thanks David Grifiths @SSC!
  SELECT
    @STRINGLEN = MAX(LEN([colz].[name])) + 1
  FROM [sys].[objects] AS [objz]
    INNER JOIN [sys].[columns] AS [colz]
      ON  [objz].[object_id] = [colz].[object_id]
      AND [objz].[object_id] = @TABLE_ID;
--##############################################################################
--Get the columns, their definitions and defaults.
--##############################################################################
  SELECT
    @FINALSQL = @FINALSQL
    + CASE
        WHEN [colz].[is_computed] = 1
        THEN @vbCrLf
             + QUOTENAME([colz].[name])
             + ' '
             + SPACE(@STRINGLEN - LEN([colz].[name]))
             + 'AS ' + ISNULL([CALC].[definition],'')
             + CASE 
                 WHEN [CALC].[is_persisted] = 1 
                 THEN ' PERSISTED'
                 ELSE ''
               END
        ELSE @vbCrLf
             + QUOTENAME([colz].[name])
             + ' '
             + SPACE(@STRINGLEN - LEN([colz].[name]))
             + UPPER(TYPE_NAME([colz].[user_type_id]))
             + CASE
-- data types with precision and scale  IE DECIMAL(18,3), NUMERIC(10,2)
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('decimal','numeric')
               THEN '('
                    + CONVERT(VARCHAR,[colz].[precision])
                    + ','
                    + CONVERT(VARCHAR,[colz].[scale])
                    + ') '
                    + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[precision])
                    + ','
                    + CONVERT(VARCHAR,[colz].[scale])))
                    + SPACE(7)
                    + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                    + CASE
                        WHEN COLUMNPROPERTY ( @TABLE_ID , [colz].[name] , 'IsIdentity' ) = 0
                        THEN ''
                        ELSE ' IDENTITY('
                               + CONVERT(VARCHAR,ISNULL(IDENT_SEED(@TBLNAME),1) )
                               + ','
                               + CONVERT(VARCHAR,ISNULL(IDENT_INCR(@TBLNAME),1) )
                               + ')'
                        END
                    + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                    + CASE
                        WHEN [colz].[is_nullable] = 0
                        THEN ' NOT NULL'
                        ELSE '     NULL'
                      END
-- data types with scale  IE datetime2(7),TIME(7)
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('datetime2','datetimeoffset','time')
               THEN CASE 
                      WHEN [colz].[scale] < 7 THEN
                      '('
                      + CONVERT(VARCHAR,[colz].[scale])
                      + ') '
                    ELSE 
                      '    '
                    END
                    + SPACE(4)
                    + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                    + '        '
                    + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                    + CASE [colz].[generated_always_type]
                        WHEN 0 THEN ''
                        WHEN 1 THEN ' GENERATED ALWAYS AS ROW START'
                        WHEN 2 THEN ' GENERATED ALWAYS AS ROW END'
                        ELSE ''
                      END 
                    + CASE WHEN [colz].[is_hidden] = 1 THEN ' HIDDEN' ELSE '' END
                    + CASE
                        WHEN [colz].[is_nullable] = 0
                        THEN ' NOT NULL'
                        ELSE '     NULL'
                      END
--data types with no/precision/scale,IE  FLOAT
               WHEN  TYPE_NAME([colz].[user_type_id]) IN ('float') --,'real')
               THEN
               --addition: if 53, no need to specifically say (53), otherwise display it
                    CASE
                      WHEN [colz].[precision] = 53
                      THEN SPACE(11 - LEN(CONVERT(VARCHAR,[colz].[precision])))
                           + SPACE(7)
                           + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                      ELSE '('
                           + CONVERT(VARCHAR,[colz].[precision])
                           + ') '
                           + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[precision])))
                           + SPACE(7) + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                      END
--data type with max_length		ie CHAR (44), VARCHAR(40), BINARY(5000),
--##############################################################################
-- COLLATE STATEMENTS
-- personally i do not like collation statements,
-- but included here to make it easy on those who do
--##############################################################################
               WHEN  TYPE_NAME([colz].[user_type_id]) IN ('char','varchar','binary','varbinary')
               THEN CASE
                      WHEN  [colz].[max_length] = -1
                      THEN  '(max)'
                            + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[max_length])))
                            + SPACE(7) + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                            ----collate to comment out when not desired
                            --+ CASE
                            --    WHEN COLS.collation_name IS NULL
                            --    THEN ''
                            --    ELSE ' COLLATE ' + COLS.collation_name
                            --  END
                            + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                            + CASE
                                WHEN [colz].[is_nullable] = 0
                                THEN ' NOT NULL'
                                ELSE '     NULL'
                              END
                      ELSE '('
                           + CONVERT(VARCHAR,[colz].[max_length])
                           + ') '
                           + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[max_length])))
                           + SPACE(7) + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           ----collate to comment out when not desired
                           --+ CASE
                           --     WHEN COLS.collation_name IS NULL
                           --     THEN ''
                           --     ELSE ' COLLATE ' + COLS.collation_name
                           --   END
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                    END
--data type with max_length ( BUT DOUBLED) ie NCHAR(33), NVARCHAR(40)
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('nchar','nvarchar')
               THEN CASE
                      WHEN  [colz].[max_length] = -1
                      THEN '(max)'
                           + SPACE(5 - LEN(CONVERT(VARCHAR,([colz].[max_length] / 2))))
                           + SPACE(7)
                           + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           ----collate to comment out when not desired
                           --+ CASE
                           --     WHEN COLS.collation_name IS NULL
                           --     THEN ''
                           --     ELSE ' COLLATE ' + COLS.collation_name
                           --   END
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN  ' NOT NULL'
                               ELSE '     NULL'
                             END
                      ELSE '('
                           + CONVERT(VARCHAR,([colz].[max_length] / 2))
                           + ') '
                           + SPACE(6 - LEN(CONVERT(VARCHAR,([colz].[max_length] / 2))))
                           + SPACE(7)
                           + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           ----collate to comment out when not desired
                           --+ CASE
                           --     WHEN COLS.collation_name IS NULL
                           --     THEN ''
                           --     ELSE ' COLLATE ' + COLS.collation_name
                           --   END
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                    END
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('datetime','money','text','image','real')
               THEN SPACE(18 - LEN(TYPE_NAME([colz].[user_type_id])))
                    + '              '
                    + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                    + CASE
                        WHEN [colz].[is_nullable] = 0
                        THEN ' NOT NULL'
                        ELSE '     NULL'
                      END
--  other data type 	IE INT, DATETIME, MONEY, CUSTOM DATA TYPE,...
               ELSE SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                            + CASE
                                WHEN COLUMNPROPERTY ( @TABLE_ID , [colz].[name] , 'IsIdentity' ) = 0
                                THEN '              '
                                ELSE ' IDENTITY('
                                     + CONVERT(VARCHAR,ISNULL(IDENT_SEED(@TBLNAME),1) )
                                     + ','
                                     + CONVERT(VARCHAR,ISNULL(IDENT_INCR(@TBLNAME),1) )
                                     + ')'
                              END
                            + SPACE(2)
                            + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                            + CASE
                                WHEN [colz].[is_nullable] = 0
                                THEN ' NOT NULL'
                                ELSE '     NULL'
                              END
               END
             + CASE
                 WHEN [colz].[default_object_id] = 0
                 THEN ''
                 --ELSE ' DEFAULT '  + ISNULL(def.[definition] ,'')
                 --optional section in case NAMED default constraints are needed:
                 ELSE '  CONSTRAINT ' + QUOTENAME([DEF].[name]) + ' DEFAULT ' + ISNULL([DEF].[definition] ,'')
                        --i thought it needed to be handled differently! NOT!
               END  --CASE cdefault
      END --iscomputed
    + ','
    FROM [sys].[columns] AS [colz]
      LEFT OUTER JOIN  [sys].[default_constraints]  AS [DEF]
        ON [colz].[default_object_id] = [DEF].[object_id]
      LEFT OUTER JOIN [sys].[computed_columns] AS [CALC]
         ON  [colz].[object_id] = [CALC].[object_id]
         AND [colz].[column_id] = [CALC].[column_id]
    WHERE [colz].[object_id]=@TABLE_ID
    ORDER BY [colz].[column_id];
--##############################################################################
--used for formatting the rest of the constraints:
--##############################################################################
  SELECT
    @STRINGLEN = MAX(LEN([objz].[name])) + 1
  FROM [sys].[objects] AS [objz];
--##############################################################################
--PK/Unique Constraints and Indexes, using the 2005/08 INCLUDE syntax
--##############################################################################
  DECLARE @Results  TABLE (
                    [SCHEMA_ID]             INT,
                    [SCHEMA_NAME]           VARCHAR(255),
                    [OBJECT_ID]             INT,
                    [OBJECT_NAME]           VARCHAR(255),
                    [index_id]              INT,
                    [index_name]            VARCHAR(255),
                    [ROWS]                  BIGINT,
                    [SizeMB]                DECIMAL(19,3),
                    [IndexDepth]            INT,
                    [TYPE]                  INT,
                    [type_desc]             VARCHAR(30),
                    [fill_factor]           INT,
                    [is_unique]             INT,
                    [is_primary_key]        INT ,
                    [is_unique_constraint]  INT,
                    [index_columns_key]     VARCHAR(MAX),
                    [index_columns_include] VARCHAR(MAX),
                    [has_filter] BIT ,
                    [filter_definition] VARCHAR(MAX),
                    [currentFilegroupName]  VARCHAR(128),
                    [CurrentCompression]    VARCHAR(128));
  INSERT INTO @Results
    SELECT
      [SCH].[schema_id], [SCH].[name] AS [SCHEMA_NAME],
      [objz].[object_id], [objz].[name] AS [OBJECT_NAME],
      [IDX].[index_id], ISNULL([IDX].[name], '---') AS [index_name],
      [partitions].[ROWS], [partitions].[SizeMB], INDEXPROPERTY([objz].[object_id], [IDX].[name], 'IndexDepth') AS [IndexDepth],
      [IDX].[type], [IDX].[type_desc], [IDX].[fill_factor],
      [IDX].[is_unique], [IDX].[is_primary_key], [IDX].[is_unique_constraint],
      ISNULL([Index_Columns].[index_columns_key], '---') AS [index_columns_key],
      ISNULL([Index_Columns].[index_columns_include], '---') AS [index_columns_include],
      [IDX].[has_filter],
      [IDX].[filter_definition],
      [filz].[name],
      ISNULL([p].[data_compression_desc],'')
    FROM [sys].[objects] AS [objz]
      INNER JOIN [sys].[schemas] AS [SCH] ON [objz].[schema_id]=[SCH].[schema_id]
      INNER JOIN [sys].[indexes] AS [IDX] ON [objz].[object_id]=[IDX].[object_id]
      INNER JOIN [sys].[filegroups] AS [filz] ON [IDX].[data_space_id] = [filz].[data_space_id]
      INNER JOIN [sys].[partitions] AS [p]     ON  [IDX].[object_id] =  [p].[object_id]  AND [IDX].[index_id] = [p].[index_id]
      INNER JOIN (
                  SELECT
                    [statz].[object_id], [statz].[index_id], SUM([statz].[row_count]) AS [ROWS],
                    CONVERT(NUMERIC(19,3), CONVERT(NUMERIC(19,3), SUM([statz].[in_row_reserved_page_count]+[statz].[lob_reserved_page_count]+[statz].[row_overflow_reserved_page_count]))/CONVERT(NUMERIC(19,3), 128)) AS [SizeMB]
                  FROM [sys].[dm_db_partition_stats] AS [statz]
                  GROUP BY [statz].[object_id], [statz].[index_id]
                 ) AS [partitions] 
        ON  [IDX].[object_id]=[partitions].[object_id] 
        AND [IDX].[index_id]=[partitions].[index_id]
    CROSS APPLY (
                 SELECT
                   LEFT([Index_Columns].[index_columns_key], LEN([Index_Columns].[index_columns_key])-1) AS [index_columns_key],
                  LEFT([Index_Columns].[index_columns_include], LEN([Index_Columns].[index_columns_include])-1) AS [index_columns_include]
                 FROM
                      (
                       SELECT
                              (
                              SELECT QUOTENAME([colz].[name]) + CASE WHEN [IXCOLS].[is_descending_key] = 0 THEN ' asc' ELSE ' desc' END + ',' + ' '
                               FROM [sys].[index_columns] AS [IXCOLS]
                                 INNER JOIN [sys].[columns] AS [colz]
                                   ON  [IXCOLS].[column_id]   = [colz].[column_id]
                                   AND [IXCOLS].[object_id] = [colz].[object_id]
                               WHERE [IXCOLS].[is_included_column] = 0
                                 AND [IDX].[object_id] = [IXCOLS].[object_id] 
                                 AND [IDX].[index_id] = [IXCOLS].[index_id]
                               ORDER BY [IXCOLS].[key_ordinal]
                               FOR XML PATH('')
                              ) AS [index_columns_key],
                             (
                             SELECT QUOTENAME([colz].[name]) + ',' + ' '
                              FROM [sys].[index_columns] AS [IXCOLS]
                                INNER JOIN [sys].[columns] AS [colz]
                                  ON  [IXCOLS].[column_id]   = [colz].[column_id]
                                  AND [IXCOLS].[object_id] = [colz].[object_id]
                              WHERE [IXCOLS].[is_included_column] = 1
                                AND [IDX].[object_id] = [IXCOLS].[object_id] 
                                AND [IDX].[index_id] = [IXCOLS].[index_id]
                              ORDER BY [IXCOLS].[index_column_id]
                              FOR XML PATH('')
                             ) AS [index_columns_include]
                      ) AS [Index_Columns]
                ) AS [Index_Columns]
    WHERE [SCH].[name]  LIKE CASE 
                                     WHEN @SCHEMANAME = ''   COLLATE SQL_Latin1_General_CP1_CI_AS
                                     THEN [SCH].[name] 
                                     ELSE @SCHEMANAME 
                                   END
    AND [objz].[name] LIKE CASE 
                                  WHEN @TBLNAME = ''   COLLATE SQL_Latin1_General_CP1_CI_AS 
                                  THEN [objz].[name] 
                                  ELSE @TBLNAME 
                                END
    ORDER BY 
      [SCH].[name], 
      [objz].[name], 
      [IDX].[name];
--@Results table has both PK,s Uniques and indexes in thme...pull them out for adding to funal results:
  SET @CONSTRAINTSQLS = '';
  SET @INDEXSQLS      = '';
  SET @TemporalStatement = '';
  SET @WithStatement = '';
--##############################################################################
  -- Temporal tables
--##############################################################################
  SELECT @TemporalStatement =  ISNULL(@vbCrLf + 'PERIOD FOR SYSTEM_TIME ('
  + MAX(CASE WHEN [colz].[generated_always_type] = 1 THEN [colz].[name] ELSE '' END)
  +','
 + MAX(CASE WHEN [colz].[generated_always_type] = 2 THEN [colz].[name] ELSE '' END)
  +'),','') ,
  @WithStatement = ISNULL(' SYSTEM_VERSIONING = ON (HISTORY_TABLE=' + QUOTENAME(OBJECT_SCHEMA_NAME([objz].[history_table_id])) + '.' + QUOTENAME(OBJECT_NAME([objz].[history_table_id])) + '),' ,'')
  FROM [sys].[tables] [objz]
  INNER JOIN [sys].[columns] [colz] 
  ON [objz].[object_id] = [colz].[object_id]
  WHERE [colz].[object_id] = @TABLE_ID 
  AND [colz].[generated_always_type] > 0
  GROUP BY [colz].[object_id],[objz].[history_table_id]
--##############################################################################
-- memory optimized
--##############################################################################
SELECT @WithStatement  = @WithStatement + ISNULL('MEMORY_OPTIMIZED=ON, DURABILITY=' + [objz].[durability_desc] + ',','') 
FROM [sys].[tables] [objz]
WHERE [objz].[is_memory_optimized] =1
AND [objz].[object_id] = @TABLE_ID 
--##############################################################################
--constraints
--column store indexes are different: the "include" columns for normal indexes as scripted above are the columnstores indexed columns
--add a CASE for that situation.
--##############################################################################
  SELECT @CONSTRAINTSQLS = @CONSTRAINTSQLS 
         + CASE
             WHEN [is_primary_key] = 1 OR [is_unique] = 1
             THEN @vbCrLf
                  + 'CONSTRAINT   '  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME([index_name]) + ' '
                  + CASE  
                      WHEN [is_primary_key] = 1 
                      THEN ' PRIMARY KEY ' 
                      ELSE CASE  
                             WHEN [is_unique] = 1     
                             THEN ' UNIQUE      '      
                             ELSE '' 
                           END 
                    END
                  + [type_desc] 
                  + CASE 
                      WHEN [type_desc]='NONCLUSTERED' 
                      THEN '' 
                      ELSE '   ' 
                    END
                  + ' (' + [index_columns_key] + ')'
                  + CASE 
                      WHEN [index_columns_include] <> '---' 
                      THEN ' INCLUDE (' + [index_columns_include] + ')' 
                      ELSE '' 
                    END
                  + CASE
                      WHEN [has_filter] = 1 
                      THEN ' ' + [filter_definition]
                      ELSE ' '
                    END
                  + CASE WHEN [fill_factor] <> 0 OR [CurrentCompression] <> 'NONE'
                  THEN ' WITH (' + CASE
                                    WHEN [fill_factor] <> 0 
                                    THEN 'FILLFACTOR = ' + CONVERT(VARCHAR(30),[fill_factor]) 
                                    ELSE '' 
                                  END
                                + CASE
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression] <> 'NONE' THEN ',DATA_COMPRESSION = ' + [CurrentCompression] + ' '
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression]  = 'NONE' THEN ''
                                    WHEN [fill_factor]  = 0  AND [CurrentCompression] <> 'NONE' THEN 'DATA_COMPRESSION = ' + [CurrentCompression] + ' '
                                    ELSE '' 
                                  END
                                  + ')'
                  ELSE '' 
                  END 
                      
             ELSE ''
           END + ','
  FROM @Results
  WHERE [type_desc] != 'HEAP'
    AND [is_primary_key] = 1 
    OR  [is_unique] = 1
  ORDER BY 
    [is_primary_key] DESC,
    [is_unique] DESC;
    --
--##############################################################################
--indexes
--##############################################################################
  SELECT @INDEXSQLS = @INDEXSQLS 
         + CASE
             WHEN [is_primary_key] = 0 OR [is_unique] = 0
             THEN @vbCrLf
                  + 'CREATE '  COLLATE SQL_Latin1_General_CP1_CI_AS + [type_desc] + ' INDEX '  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME([index_name]) + ' '
                  + @vbCrLf
                  + '   ON '   COLLATE SQL_Latin1_General_CP1_CI_AS
                  + QUOTENAME([SCHEMA_NAME]) + '.' + QUOTENAME([OBJECT_NAME])
                  + CASE 
                        WHEN [CurrentCompression] = 'COLUMNSTORE'  COLLATE SQL_Latin1_General_CP1_CI_AS
                        THEN ' (' + [index_columns_include] + ')' 
                        ELSE ' (' + [index_columns_key] + ')'
                    END
                  + CASE 
                      WHEN [CurrentCompression] = 'COLUMNSTORE'  COLLATE SQL_Latin1_General_CP1_CI_AS
                      THEN ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                      ELSE
                        CASE
                     WHEN [index_columns_include] <> '---' 
                     THEN @vbCrLf + '   INCLUDE ('  COLLATE SQL_Latin1_General_CP1_CI_AS + [index_columns_include] + ')'   COLLATE SQL_Latin1_General_CP1_CI_AS
                     ELSE ''   COLLATE SQL_Latin1_General_CP1_CI_AS
                   END
                    END
                  --2008 filtered indexes syntax
                  + CASE 
                      WHEN [has_filter] = 1 
                      THEN @vbCrLf + '   WHERE '  COLLATE SQL_Latin1_General_CP1_CI_AS + [filter_definition]
                      ELSE ''
                    END
                  + CASE WHEN [fill_factor] <> 0 OR [CurrentCompression] <> 'NONE'  COLLATE SQL_Latin1_General_CP1_CI_AS
                  THEN ' WITH ('  COLLATE SQL_Latin1_General_CP1_CI_AS + CASE
                                    WHEN [fill_factor] <> 0 
                                    THEN 'FILLFACTOR = '  COLLATE SQL_Latin1_General_CP1_CI_AS + CONVERT(VARCHAR(30),[fill_factor]) 
                                    ELSE '' 
                                  END
                                + CASE
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression] <> 'NONE' THEN ',DATA_COMPRESSION = ' + [CurrentCompression]+' '
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression]  = 'NONE' THEN ''
                                    WHEN [fill_factor]  = 0  AND [CurrentCompression] <> 'NONE' THEN 'DATA_COMPRESSION = ' + [CurrentCompression]+' '
                                    ELSE '' 
                                  END
                                  + ')'
                  ELSE '' 
                  END 
           END
  FROM @Results
  WHERE [type_desc] != 'HEAP'
    AND [is_primary_key] = 0 
    AND [is_unique] = 0
  ORDER BY 
    [is_primary_key] DESC,
    [is_unique] DESC;
  IF @INDEXSQLS <> ''  COLLATE SQL_Latin1_General_CP1_CI_AS
    SET @INDEXSQLS = @vbCrLf + 'GO'  COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf + @INDEXSQLS;
--##############################################################################
--CHECK Constraints
--##############################################################################
  SET @CHECKCONSTSQLS = ''  COLLATE SQL_Latin1_General_CP1_CI_AS;
  SELECT
    @CHECKCONSTSQLS = @CHECKCONSTSQLS
    + @vbCrLf
    + ISNULL('CONSTRAINT   ' + QUOTENAME([objz].[name]) + ' '
    + SPACE(@STRINGLEN - LEN([objz].[name]))
    + ' CHECK ' + ISNULL([CHECKS].[definition],'')
    + ',','')
  FROM [sys].[objects] AS [objz]
    INNER JOIN [sys].[check_constraints] AS [CHECKS] ON [objz].[object_id] = [CHECKS].[object_id]
  WHERE [objz].[type] = 'C'
    AND [objz].[parent_object_id] = @TABLE_ID;
--##############################################################################
--FOREIGN KEYS
--##############################################################################
  SET @FKSQLS = '' ;
    SELECT
    @FKSQLS=@FKSQLS
    + @vbCrLf + [MyAlias].[Command] FROM
(
SELECT
  DISTINCT
  --FK must be added AFTER the PK/unique constraints are added back.
  850 AS [ExecutionOrder],
  'CONSTRAINT ' 
  + QUOTENAME([conz].[name]) 
  + ' FOREIGN KEY (' 
  + [ChildCollection].[ChildColumns] 
  + ') REFERENCES ' 
  + QUOTENAME(SCHEMA_NAME([conz].[schema_id])) 
  + '.' 
  + QUOTENAME(OBJECT_NAME([conz].[referenced_object_id])) 
  + ' (' + [ParentCollection].[ParentColumns] 
  + ') ' 
  +  CASE [conz].[update_referential_action]
                                        WHEN 0 THEN '' --' ON UPDATE NO ACTION '
                                        WHEN 1 THEN ' ON UPDATE CASCADE '
                                        WHEN 2 THEN ' ON UPDATE SET NULL '
                                        ELSE ' ON UPDATE SET DEFAULT '
                                    END
                  + CASE [conz].[delete_referential_action]
                                        WHEN 0 THEN '' --' ON DELETE NO ACTION '
                                        WHEN 1 THEN ' ON DELETE CASCADE '
                                        WHEN 2 THEN ' ON DELETE SET NULL '
                                        ELSE ' ON DELETE SET DEFAULT '
                                    END
                  + CASE [conz].[is_not_for_replication]
                        WHEN 1 THEN ' NOT FOR REPLICATION '
                        ELSE ''
                    END
  + ',' AS [Command]
FROM   [sys].[foreign_keys] AS [conz]
       INNER JOIN [sys].[foreign_key_columns] AS [colz]
         ON [conz].[object_id] = [colz].[constraint_object_id]
      
       INNER JOIN (--gets my child tables column names   
SELECT
 [conz].[name],
 --technically, FK's can contain up to 16 columns, but real life is often a single column. coding here is for all columns
 [ChildColumns] = STUFF((SELECT 
                         ',' + QUOTENAME([REFZ].[name])
                       FROM   [sys].[foreign_key_columns] AS [fkcolz]
                              INNER JOIN [sys].[columns] AS [REFZ]
                                ON [fkcolz].[parent_object_id] = [REFZ].[object_id]
                                   AND [fkcolz].[parent_column_id] = [REFZ].[column_id]
                       WHERE [fkcolz].[parent_object_id] = [conz].[parent_object_id]
                           AND [fkcolz].[constraint_object_id] = [conz].[object_id]
                         ORDER  BY
                        [fkcolz].[constraint_column_id]
                      FOR XML PATH(''), TYPE).[value]('.','varchar(max)'),1,1,'')
FROM   [sys].[foreign_keys] AS [conz]
      INNER JOIN [sys].[foreign_key_columns] AS [colz]
        ON [conz].[object_id] = [colz].[constraint_object_id]
        WHERE [conz].[parent_object_id]= @TABLE_ID
GROUP  BY
[conz].[name],
[conz].[parent_object_id],--- without GROUP BY multiple rows are returned
 [conz].[object_id]
    ) AS [ChildCollection]
         ON [conz].[name] = [ChildCollection].[name]
       INNER JOIN (--gets the parent tables column names for the FK reference
                  SELECT
                     [conz].[name],
                     [ParentColumns] = STUFF((SELECT
                                              ',' + [REFZ].[name]
                                            FROM   [sys].[foreign_key_columns] AS [fkcolz]
                                                   INNER JOIN [sys].[columns] AS [REFZ]
                                                     ON [fkcolz].[referenced_object_id] = [REFZ].[object_id]
                                                        AND [fkcolz].[referenced_column_id] = [REFZ].[column_id]
                                            WHERE  [fkcolz].[referenced_object_id] = [conz].[referenced_object_id]
                                              AND [fkcolz].[constraint_object_id] = [conz].[object_id]
                                            ORDER BY [fkcolz].[constraint_column_id]
                                            FOR XML PATH(''), TYPE).[value]('.','varchar(max)'),1,1,'')
                   FROM   [sys].[foreign_keys] AS [conz]
                          INNER JOIN [sys].[foreign_key_columns] AS [colz]
                            ON [conz].[object_id] = [colz].[constraint_object_id]
                           -- AND colz.parent_column_id 
                   GROUP  BY
                    [conz].[name],
                    [conz].[referenced_object_id],--- without GROUP BY multiple rows are returned
                    [conz].[object_id]
                  ) AS [ParentCollection]
         ON [conz].[name] = [ParentCollection].[name]
)AS [MyAlias];
--##############################################################################
--RULES
--##############################################################################
  SET @RULESCONSTSQLS = '';
  SELECT
    @RULESCONSTSQLS = @RULESCONSTSQLS
    + ISNULL(
             @vbCrLf
             + 'if not exists(SELECT [name] FROM sys.objects WHERE TYPE=''R'' AND schema_id = ' COLLATE SQL_Latin1_General_CP1_CI_AS + CONVERT(VARCHAR(30),[objz].[schema_id]) + ' AND [name] = '''  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME(OBJECT_NAME([colz].[rule_object_id])) + ''')'  COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf
             + [MODS].[definition]  + @vbCrLf + 'GO' COLLATE SQL_Latin1_General_CP1_CI_AS +  @vbCrLf
             + 'EXEC sp_binderule  ' + QUOTENAME([objz].[name]) + ', ''' + QUOTENAME(OBJECT_NAME([colz].[object_id])) + '.' + QUOTENAME([colz].[name]) + ''''  COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf + 'GO'  COLLATE SQL_Latin1_General_CP1_CI_AS ,'')
  FROM [sys].[columns] [colz] 
    INNER JOIN [sys].[objects] [objz]
      ON [objz].[object_id] = [colz].[object_id]
    INNER JOIN [sys].[sql_modules] AS [MODS]
      ON [colz].[rule_object_id] = [MODS].[object_id]
  WHERE [colz].[rule_object_id] <> 0
    AND [colz].[object_id] = @TABLE_ID;
--##############################################################################
--TRIGGERS
--##############################################################################
  SET @TRIGGERSTATEMENT = '';
  SELECT
    @TRIGGERSTATEMENT = @TRIGGERSTATEMENT +  @vbCrLf + [MODS].[definition] + @vbCrLf + 'GO'
  FROM [sys].[sql_modules] AS [MODS]
  WHERE [MODS].[object_id] IN(SELECT
                         [objz].[object_id]
                       FROM [sys].[objects] AS [objz]
                       WHERE [objz].[type] = 'TR'
                       AND [objz].[parent_object_id] = @TABLE_ID);
  IF @TRIGGERSTATEMENT <> ''  COLLATE SQL_Latin1_General_CP1_CI_AS
    SET @TRIGGERSTATEMENT = @vbCrLf + 'GO'  COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf + @TRIGGERSTATEMENT;
--##############################################################################
--NEW SECTION QUERY ALL EXTENDED PROPERTIES
--##############################################################################
  SET @EXTENDEDPROPERTIES = '';
  SELECT  @EXTENDEDPROPERTIES =
          @EXTENDEDPROPERTIES + @vbCrLf +
         'EXEC sys.sp_addextendedproperty
          @name = N'''  COLLATE SQL_Latin1_General_CP1_CI_AS + [name] + ''', @value = N'''  COLLATE SQL_Latin1_General_CP1_CI_AS + REPLACE(CONVERT(VARCHAR(MAX),[value]),'''','''''') + ''',
          @level0type = N''SCHEMA'', @level0name = '  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME(@SCHEMANAME) + ',
          @level1type = N''TABLE'', @level1name = '  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME(@TBLNAME) + ';'
 --SELECT objtype, objname, name, value
  FROM [sys].[fn_listextendedproperty] (NULL, 'schema', @SCHEMANAME, 'table', @TBLNAME, NULL, NULL);
  --OMacoder suggestion for column extended properties http://www.sqlservercentral.com/Forums/FindPost1651606.aspx
   ;WITH [obj] AS (
	SELECT [split].[a].[value]('.', 'VARCHAR(20)') AS [name]
	FROM ( 
		SELECT CAST ('<M>' + REPLACE('column,constraint,index,trigger,parameter', ',', '</M><M>') + '</M>' AS XML) AS [data] 
		) AS [A] 
		CROSS APPLY [data].[nodes] ('/M') AS [split]([a])
	)
  SELECT 
  @EXTENDEDPROPERTIES =
		 @EXTENDEDPROPERTIES + @vbCrLf + @vbCrLf +
         'EXEC sys.sp_addextendedproperty
         @name = N''' COLLATE SQL_Latin1_General_CP1_CI_AS
         + [lep].[name] 
         + ''', @value = N''' COLLATE SQL_Latin1_General_CP1_CI_AS
         + REPLACE(CONVERT(VARCHAR(MAX),[lep].[value]),'''','''''') + ''',
         @level0type = N''SCHEMA'', @level0name = ' COLLATE SQL_Latin1_General_CP1_CI_AS
         + QUOTENAME(@SCHEMANAME) 
         + ',
         @level1type = N''TABLE'', @level1name = ' COLLATE SQL_Latin1_General_CP1_CI_AS
         + QUOTENAME(@TBLNAME) 
         + ',
         @level2type = N''' COLLATE SQL_Latin1_General_CP1_CI_AS
         + UPPER([obj].[name])  
         + ''', @level2name = ' COLLATE SQL_Latin1_General_CP1_CI_AS
         + QUOTENAME([lep].[objname]) + ';' COLLATE SQL_Latin1_General_CP1_CI_AS
  --SELECT objtype, objname, name, value
  FROM [obj] 
	CROSS APPLY [sys].[fn_listextendedproperty] (NULL, 'schema', @SCHEMANAME, 'table', @TBLNAME, [obj].[name], NULL) AS [lep];  
  
  IF @EXTENDEDPROPERTIES <> '' COLLATE SQL_Latin1_General_CP1_CI_AS
    SET @EXTENDEDPROPERTIES = @vbCrLf + 'GO' COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf + @EXTENDEDPROPERTIES;
--##############################################################################
--FINAL CLEANUP AND PRESENTATION
--##############################################################################
--at this point, there is a trailing comma, or it blank
--WITH statment has a trailing comma

IF @WithStatement > '' 
  SET @WithStatement='WITH (' + SUBSTRING(@WithStatement,1,LEN(@WithStatement) -1)  + ')'
  SELECT
    @FINALSQL = @FINALSQL
                + @TemporalStatement
                + @CONSTRAINTSQLS
                + @CHECKCONSTSQLS
                + @FKSQLS;
--note that this trims the trailing comma from the end of the statements
  SET @FINALSQL = SUBSTRING(@FINALSQL,1,LEN(@FINALSQL) -1) ;
  SET @FINALSQL = @FINALSQL + ')' COLLATE SQL_Latin1_General_CP1_CI_AS +  @vbCrLf + @WithStatement COLLATE SQL_Latin1_General_CP1_CI_AS +  @vbCrLf ;
  SET @input = @vbCrLf
       + @FINALSQL
       + @INDEXSQLS
       + @RULESCONSTSQLS
       + @TRIGGERSTATEMENT
       + @EXTENDEDPROPERTIES;
  SELECT @input AS [Item];
  RETURN 0;     
--##############################################################################
-- END Normal Table Processing
--############################################################################## 
    
--simple, primitive version to get the results of a TEMP table from the TEMP db.  
--##############################################################################
-- NEW Temp Table Logic
--##############################################################################     
TEMPPROCESS:
  SELECT @TABLE_ID = OBJECT_ID('tempdb..' COLLATE SQL_Latin1_General_CP1_CI_AS + @TBLNAME);
--##############################################################################
-- Valid temp Table, Continue Processing
--##############################################################################
SELECT @FINALSQL = 
     CASE 
       WHEN [tabz].[history_table_id] IS NULL 
       THEN '' 
       ELSE 'ALTER TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id]) ) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ' SET (SYSTEM_VERSIONING = OFF);' + @vbCrLf
            +  'IF OBJECT_ID(''' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[history_table_id]) ) + '.' + QUOTENAME(OBJECT_NAME([tabz].[history_table_id])) + ''') IS NOT NULL ' + @vbCrLf
              + 'DROP TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[history_table_id])) + '.' + QUOTENAME(OBJECT_NAME([tabz].[history_table_id])) + ' ' + @vbCrLf + 'GO' + @vbCrLf
       END
    + 'IF OBJECT_ID(''' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id]) ) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ''') IS NOT NULL ' + @vbCrLf
              + 'DROP TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id])) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ' ' + @vbCrLf + 'GO' + @vbCrLf
              + 'CREATE TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id])) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ' ( '
FROM [sys].[tables] [tabz] WHERE [tabz].[object_id] = OBJECT_ID(@TABLE_ID)
  --removed invalid code here which potentially selected wrong table--thansk David Grifiths @SSC!
SELECT 
    @STRINGLEN = MAX(LEN([colz].[name])) + 1
  FROM [tempdb].[sys].[objects] AS [objz]
    INNER JOIN [tempdb].[sys].[columns] AS [colz]
      ON  [objz].[object_id] = [colz].[object_id]
      AND [objz].[object_id] = @TABLE_ID;
--##############################################################################
--Get the hash index definitions for memory optimized tables, if any.
--##############################################################################

--##############################################################################
--Get the columns, their definitions and defaults.
--##############################################################################
  SELECT
    @FINALSQL = @FINALSQL
    + CASE
        WHEN [colz].[is_computed] = 1
        THEN @vbCrLf
             + QUOTENAME([colz].[name])
             + ' '
             + SPACE(@STRINGLEN - LEN([colz].[name]))
             + 'AS ' + ISNULL([CALC].[definition],'')
              + CASE 
                 WHEN [CALC].[is_persisted] = 1 
                 THEN ' PERSISTED'
                 ELSE ''
               END
        ELSE @vbCrLf
             + QUOTENAME([colz].[name])
             + ' '
             + SPACE(@STRINGLEN - LEN([colz].[name]))
             + UPPER(TYPE_NAME([colz].[user_type_id]))
             + CASE
-- data types with precision and scale  IE DECIMAL(18,3), NUMERIC(10,2)
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('decimal','numeric')
               THEN '('
                    + CONVERT(VARCHAR,[colz].[precision])
                    + ','
                    + CONVERT(VARCHAR,[colz].[scale])
                    + ') '
                    + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[precision])
                    + ','
                    + CONVERT(VARCHAR,[colz].[scale])))
                    + SPACE(7)
                    + SPACE(16 - LEN(TYPE_NAME([colz].[user_type_id])))
                    + CASE
                        WHEN [colz].[is_identity] = 1
                        THEN ' IDENTITY(1,1)'
                        ELSE ''
                        ----WHEN COLUMNPROPERTY ( @TABLE_ID , COLS.[name] , 'IsIdentity' ) = 1
                        ----THEN ' IDENTITY('
                        ----       + CONVERT(VARCHAR,ISNULL(IDENT_SEED('tempdb..' + @TBLNAME),1) )
                        ----       + ','
                        ----       + CONVERT(VARCHAR,ISNULL(IDENT_INCR('tempdb..' + @TBLNAME),1) )
                        ----       + ')'
                        ----ELSE ''
                        END
                    + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                    + CASE
                        WHEN [colz].[is_nullable] = 0
                        THEN ' NOT NULL'
                        ELSE '     NULL'
                      END
-- data types with scale  IE datetime2(7),TIME(7)
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('datetime2','datetimeoffset','time')
               THEN CASE 
                      WHEN [colz].[scale] < 7 THEN
                      '('
                      + CONVERT(VARCHAR,[colz].[scale])
                      + ') '
                    ELSE 
                      '    '
                    END
                    + SPACE(4)
                    + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                    + '        '
                    + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                    + CASE [colz].[generated_always_type]
                        WHEN 0 THEN ''
                        WHEN 1 THEN ' GENERATED ALWAYS AS ROW START'
                        WHEN 2 THEN ' GENERATED ALWAYS AS ROW END'
                        ELSE ''
                      END 
                    + CASE WHEN [colz].[is_hidden] = 1 THEN ' HIDDEN' ELSE '' END
                    + CASE
                        WHEN [colz].[is_nullable] = 0
                        THEN ' NOT NULL'
                        ELSE '     NULL'
                      END
--data types with no/precision/scale,IE  FLOAT
               WHEN  TYPE_NAME([colz].[user_type_id]) IN ('float') --,'real')
               THEN
               --addition: if 53, no need to specifically say (53), otherwise display it
                    CASE
                      WHEN [colz].[precision] = 53
                      THEN SPACE(11 - LEN(CONVERT(VARCHAR,[colz].[precision])))
                           + SPACE(7)
                           + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                      ELSE '('
                           + CONVERT(VARCHAR,[colz].[precision])
                           + ') '
                           + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[precision])))
                           + SPACE(7) + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                      END
--ie VARCHAR(40)
--##############################################################################
-- COLLATE STATEMENTS in tempdb!
-- personally i do not like collation statements,
-- but included here to make it easy on those who do
--##############################################################################
               WHEN  TYPE_NAME([colz].[user_type_id]) IN ('char','varchar','binary','varbinary')
               THEN CASE
                      WHEN  [colz].[max_length] = -1
                      THEN  '(max)'
                            + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[max_length])))
                            + SPACE(7) + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                            ----collate to comment out when not desired
                            --+ CASE
                            --    WHEN COLS.collation_name IS NULL
                            --    THEN ''
                            --    ELSE ' COLLATE ' + COLS.collation_name
                            --  END
                            + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                            + CASE
                                WHEN [colz].[is_nullable] = 0
                                THEN ' NOT NULL'
                                ELSE '     NULL'
                              END
                      ELSE '('
                           + CONVERT(VARCHAR,[colz].[max_length])
                           + ') '
                           + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[max_length])))
                           + SPACE(7) + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           ----collate to comment out when not desired
                           --+ CASE
                           --     WHEN COLS.collation_name IS NULL
                           --     THEN ''
                           --     ELSE ' COLLATE ' + COLS.collation_name
                           --   END
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                    END
--data type with max_length ( BUT DOUBLED) ie NCHAR(33), NVARCHAR(40)
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('nchar','nvarchar')
               THEN CASE
                      WHEN  [colz].[max_length] = -1
                      THEN '(max)'
                           + SPACE(5 - LEN(CONVERT(VARCHAR,([colz].[max_length] / 2))))
                           + SPACE(7)
                           + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           -- --collate to comment out when not desired
                           --+ CASE
                           --     WHEN COLS.collation_name IS NULL
                           --     THEN ''
                           --     ELSE ' COLLATE ' + COLS.collation_name
                           --   END
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN  ' NOT NULL'
                               ELSE '     NULL'
                             END
                      ELSE '('
                           + CONVERT(VARCHAR,([colz].[max_length] / 2))
                           + ') '
                           + SPACE(6 - LEN(CONVERT(VARCHAR,([colz].[max_length] / 2))))
                           + SPACE(7)
                           + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           -- --collate to comment out when not desired
                           --+ CASE
                           --     WHEN COLS.collation_name IS NULL
                           --     THEN ''
                           --     ELSE ' COLLATE ' + COLS.collation_name
                           --   END
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                    END
--  other data type 	IE INT, DATETIME, MONEY, CUSTOM DATA TYPE,...
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('datetime','money','text','image','real')
               THEN SPACE(18 - LEN(TYPE_NAME([colz].[user_type_id])))
                    + '              '
                    + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                    + CASE
                        WHEN [colz].[is_nullable] = 0
                        THEN ' NOT NULL'
                        ELSE '     NULL'
                      END
--IE INT
               ELSE SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                            + CASE
                                WHEN [colz].[is_identity] = 1
                                THEN ' IDENTITY(1,1)'
                                ELSE '              '
                                ----WHEN COLUMNPROPERTY ( @TABLE_ID , COLS.[name] , 'IsIdentity' ) = 1
                                ----THEN ' IDENTITY('
                                ----     + CONVERT(VARCHAR,ISNULL(IDENT_SEED('tempdb..' + @TBLNAME),1) )
                                ----     + ','
                                ----     + CONVERT(VARCHAR,ISNULL(IDENT_INCR('tempdb..' + @TBLNAME),1) )
                                ----     + ')'
                                ----ELSE '              '
                              END
                            + SPACE(2)
                            + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                            + CASE
                                WHEN [colz].[is_nullable] = 0
                                THEN ' NOT NULL'
                                ELSE '     NULL'
                              END
               END
             + CASE
                 WHEN [colz].[default_object_id] = 0
                 THEN ''
                 ELSE ' DEFAULT '  + ISNULL([DEF].[definition] ,'')
                 --optional section in case NAMED default cosntraints are needed:
                 --ELSE ' CONSTRAINT [' + DEF.name + '] DEFAULT '+ REPLACE(REPLACE(ISNULL(DEF.[definition] ,''),'((','('),'))',')')
                        --i thought it needed to be handled differently! NOT!
               END  --CASE cdefault
      END --iscomputed
    + ','
    FROM [tempdb].[sys].[columns] AS [colz]
      LEFT OUTER JOIN  [tempdb].[sys].[default_constraints]  AS [DEF]
        ON [colz].[default_object_id] = [DEF].[object_id]
      LEFT OUTER JOIN [tempdb].[sys].[computed_columns] AS [CALC]
         ON  [colz].[object_id] = [CALC].[object_id]
         AND [colz].[column_id] = [CALC].[column_id]
    WHERE [colz].[object_id]=@TABLE_ID
    ORDER BY [colz].[column_id];
--##############################################################################
--used for formatting the rest of the constraints:
--##############################################################################
  SELECT
    @STRINGLEN = MAX(LEN([objz].[name])) + 1
  FROM [tempdb].[sys].[objects] AS [objz];
--##############################################################################
--PK/Unique Constraints and Indexes, using the 2005/08 INCLUDE syntax
--##############################################################################
  DECLARE @Results2  TABLE (
                    [SCHEMA_ID]             INT,
                    [SCHEMA_NAME]           VARCHAR(255),
                    [OBJECT_ID]             INT,
                    [OBJECT_NAME]           VARCHAR(255),
                    [index_id]              INT,
                    [index_name]            VARCHAR(255),
                    [ROWS]                  BIGINT,
                    [SizeMB]                DECIMAL(19,3),
                    [IndexDepth]            INT,
                    [TYPE]                  INT,
                    [type_desc]             VARCHAR(30),
                    [fill_factor]           INT,
                    [is_unique]             INT,
                    [is_primary_key]        INT ,
                    [is_unique_constraint]  INT,
                    [index_columns_key]     VARCHAR(MAX),
                    [index_columns_include] VARCHAR(MAX),
                    [has_filter] BIT ,
                    [filter_definition] VARCHAR(MAX),
                    [currentFilegroupName]  VARCHAR(128),
                    [CurrentCompression]    VARCHAR(128));
  INSERT INTO @Results2
    SELECT
      [SCH].[schema_id], [SCH].[name] AS [SCHEMA_NAME],
      [objz].[object_id], [objz].[name] AS [OBJECT_NAME],
      [IDX].[index_id], ISNULL([IDX].[name], '---') AS [index_name],
      [partitions].[ROWS], [partitions].[SizeMB], INDEXPROPERTY([objz].[object_id], [IDX].[name], 'IndexDepth') AS [IndexDepth],
      [IDX].[type], [IDX].[type_desc], [IDX].[fill_factor],
      [IDX].[is_unique], [IDX].[is_primary_key], [IDX].[is_unique_constraint],
      ISNULL([Index_Columns].[index_columns_key], '---') AS [index_columns_key],
      ISNULL([Index_Columns].[index_columns_include], '---') AS [index_columns_include],
      [IDX].[has_filter],
      [IDX].[filter_definition],
      [filz].[name],
      ISNULL([p].[data_compression_desc],'')
    FROM [tempdb].[sys].[objects] AS [objz]
      INNER JOIN [tempdb].[sys].[schemas] AS [SCH] ON [objz].[schema_id]=[SCH].[schema_id]
      INNER JOIN [tempdb].[sys].[indexes] AS [IDX] ON [objz].[object_id]=[IDX].[object_id]
      INNER JOIN [sys].[filegroups] AS [filz] ON [IDX].[data_space_id] = [filz].[data_space_id]
      INNER JOIN [sys].[partitions] AS [p]     ON  [IDX].[object_id] =  [p].[object_id]  AND [IDX].[index_id] = [p].[index_id]
      INNER JOIN (
                  SELECT
                    [statz].[object_id], [statz].[index_id], SUM([statz].[row_count]) AS [ROWS],
                    CONVERT(NUMERIC(19,3), CONVERT(NUMERIC(19,3), SUM([statz].[in_row_reserved_page_count]+[statz].[lob_reserved_page_count]+[statz].[row_overflow_reserved_page_count]))/CONVERT(NUMERIC(19,3), 128)) AS [SizeMB]
                  FROM [tempdb].[sys].[dm_db_partition_stats] AS [statz]
                  GROUP BY [statz].[object_id], [statz].[index_id]
                 ) AS [partitions] 
        ON  [IDX].[object_id]=[partitions].[object_id] 
        AND [IDX].[index_id]=[partitions].[index_id]
    CROSS APPLY (
                 SELECT
                   LEFT([Index_Columns].[index_columns_key], LEN([Index_Columns].[index_columns_key])-1) AS [index_columns_key],
                  LEFT([Index_Columns].[index_columns_include], LEN([Index_Columns].[index_columns_include])-1) AS [index_columns_include]
                 FROM
                      (
                       SELECT
                              (
                              SELECT QUOTENAME([colz].[name]) + CASE WHEN [IXCOLS].[is_descending_key] = 0 THEN ' asc' ELSE ' desc' END + ',' + ' '
                               FROM [tempdb].[sys].[index_columns] AS [IXCOLS]
                                 INNER JOIN [tempdb].[sys].[columns] AS [colz]
                                   ON  [IXCOLS].[column_id]   = [colz].[column_id]
                                   AND [IXCOLS].[object_id] = [colz].[object_id]
                               WHERE [IXCOLS].[is_included_column] = 0
                                 AND [IDX].[object_id] = [IXCOLS].[object_id] 
                                 AND [IDX].[index_id] = [IXCOLS].[index_id]
                               ORDER BY [IXCOLS].[key_ordinal]
                               FOR XML PATH('')
                              ) AS [index_columns_key],
                             (
                             SELECT QUOTENAME([colz].[name]) + ',' + ' '
                              FROM [tempdb].[sys].[index_columns] AS [IXCOLS]
                                INNER JOIN [tempdb].[sys].[columns] AS [colz]
                                  ON  [IXCOLS].[column_id]   = [colz].[column_id]
                                  AND [IXCOLS].[object_id] = [colz].[object_id]
                              WHERE [IXCOLS].[is_included_column] = 1
                                AND [IDX].[object_id] = [IXCOLS].[object_id] 
                                AND [IDX].[index_id] = [IXCOLS].[index_id]
                              ORDER BY [IXCOLS].[index_column_id]
                              FOR XML PATH('')
                             ) AS [index_columns_include]
                      ) AS [Index_Columns]
                ) AS [Index_Columns]
    WHERE [SCH].[name]  LIKE CASE 
                                     WHEN @SCHEMANAME = '' COLLATE SQL_Latin1_General_CP1_CI_AS
                                     THEN [SCH].[name] 
                                     ELSE @SCHEMANAME 
                                   END
    AND [objz].[name] LIKE CASE 
                                  WHEN @TBLNAME = ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                                  THEN [objz].[name] 
                                  ELSE @TBLNAME 
                                END
    ORDER BY 
      [SCH].[name], 
      [objz].[name], 
      [IDX].[name];
--@Results2 table has both PK,s Uniques and indexes in thme...pull them out for adding to funal results:
  SET @CONSTRAINTSQLS = '' COLLATE SQL_Latin1_General_CP1_CI_AS;
  SET @INDEXSQLS      = '' COLLATE SQL_Latin1_General_CP1_CI_AS;
--##############################################################################
--constraints
--##############################################################################
  SELECT @CONSTRAINTSQLS = @CONSTRAINTSQLS 
         + CASE
             WHEN [is_primary_key] = 1 OR [is_unique] = 1
             THEN @vbCrLf
                  + 'CONSTRAINT   '  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME([index_name]) + ' '
                  + SPACE(@STRINGLEN - LEN([index_name]))
                  + CASE  
                      WHEN [is_primary_key] = 1 
                      THEN ' PRIMARY KEY '  COLLATE SQL_Latin1_General_CP1_CI_AS
                      ELSE CASE  
                             WHEN [is_unique] = 1     
                             THEN ' UNIQUE      '     COLLATE SQL_Latin1_General_CP1_CI_AS  
                             ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                           END 
                    END
                  + [type_desc] 
                  + CASE 
                      WHEN [type_desc]='NONCLUSTERED' 
                      THEN ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                      ELSE '   ' 
                    END
                  + ' (' + [index_columns_key] + ')'
                  + CASE 
                      WHEN [index_columns_include] <> '---' 
                      THEN ' INCLUDE (' + [index_columns_include] + ')' 
                      ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                    END
                  + CASE
                      WHEN [has_filter] = 1 
                      THEN ' ' + [filter_definition]
                      ELSE ' '
                    END
                  + CASE WHEN [fill_factor] <> 0 OR [CurrentCompression] <> 'NONE'
                  THEN ' WITH (' + CASE
                                    WHEN [fill_factor] <> 0 
                                    THEN 'FILLFACTOR = ' + CONVERT(VARCHAR(30),[fill_factor]) 
                                    ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                                  END
                                + CASE
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression] <> 'NONE' THEN ',DATA_COMPRESSION = ' + [CurrentCompression] + ' '
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression]  = 'NONE' THEN ''
                                    WHEN [fill_factor]  = 0  AND [CurrentCompression] <> 'NONE' THEN 'DATA_COMPRESSION = ' + [CurrentCompression] + ' '
                                    ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                                  END
                                  + ')'
                  ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                  END 
             ELSE '' COLLATE SQL_Latin1_General_CP1_CI_AS
           END + ','
  FROM @Results2
  WHERE [type_desc] != 'HEAP'
    AND [is_primary_key] = 1 
    OR  [is_unique] = 1
  ORDER BY 
    [is_primary_key] DESC,
    [is_unique] DESC;
--##############################################################################
--indexes
--##############################################################################
  SELECT @INDEXSQLS = @INDEXSQLS 
         + CASE
             WHEN [is_primary_key] = 0 OR [is_unique] = 0
             THEN @vbCrLf
                  + 'CREATE '  COLLATE SQL_Latin1_General_CP1_CI_AS + [type_desc] + ' INDEX '  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME([index_name]) + ' ' COLLATE SQL_Latin1_General_CP1_CI_AS
                  + @vbCrLf
                  + '   ON '  COLLATE SQL_Latin1_General_CP1_CI_AS
                  + QUOTENAME([SCHEMA_NAME]) + '.' + QUOTENAME([OBJECT_NAME])
                  + CASE 
                        WHEN [CurrentCompression] = 'COLUMNSTORE'  COLLATE SQL_Latin1_General_CP1_CI_AS
                        THEN ' ('  COLLATE SQL_Latin1_General_CP1_CI_AS+ [index_columns_include] + ')'  COLLATE SQL_Latin1_General_CP1_CI_AS
                        ELSE ' ('  COLLATE SQL_Latin1_General_CP1_CI_AS+ [index_columns_key] + ')' COLLATE SQL_Latin1_General_CP1_CI_AS
                    END
                  + CASE 
                      WHEN [CurrentCompression] = 'COLUMNSTORE'  COLLATE SQL_Latin1_General_CP1_CI_AS
                      THEN ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                      ELSE
                        CASE
                     WHEN [index_columns_include] <> '---' 
                     THEN @vbCrLf + '   INCLUDE ('  COLLATE SQL_Latin1_General_CP1_CI_AS + [index_columns_include] + ')'  COLLATE SQL_Latin1_General_CP1_CI_AS 
                     ELSE ''   COLLATE SQL_Latin1_General_CP1_CI_AS
                   END
                    END
                  --2008 filtered indexes syntax
                  + CASE 
                      WHEN [has_filter] = 1 
                      THEN @vbCrLf + '   WHERE '  COLLATE SQL_Latin1_General_CP1_CI_AS + [filter_definition]
                      ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                    END
                  + CASE WHEN [fill_factor] <> 0 OR [CurrentCompression] <> 'NONE'  COLLATE SQL_Latin1_General_CP1_CI_AS
                  THEN ' WITH ('  COLLATE SQL_Latin1_General_CP1_CI_AS + CASE
                                    WHEN [fill_factor] <> 0 
                                    THEN 'FILLFACTOR = '  COLLATE SQL_Latin1_General_CP1_CI_AS + CONVERT(VARCHAR(30),[fill_factor]) 
                                    ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                                  END
                                + CASE
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression] <> 'NONE'  COLLATE SQL_Latin1_General_CP1_CI_AS THEN ',DATA_COMPRESSION = ' COLLATE SQL_Latin1_General_CP1_CI_AS + [CurrentCompression] + ' '
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression]  = 'NONE'  COLLATE SQL_Latin1_General_CP1_CI_AS THEN ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                                    WHEN [fill_factor]  = 0  AND [CurrentCompression] <> 'NONE'  COLLATE SQL_Latin1_General_CP1_CI_AS THEN 'DATA_COMPRESSION = '  COLLATE SQL_Latin1_General_CP1_CI_AS+ [CurrentCompression] + ' '
                                    ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                                  END
                                  + ')' COLLATE SQL_Latin1_General_CP1_CI_AS
                  ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                  END 
           END
  FROM @Results2
  WHERE [type_desc] != 'HEAP'
    AND [is_primary_key] = 0 
    AND [is_unique] = 0
  ORDER BY 
    [is_primary_key] DESC,
    [is_unique] DESC;
  IF @INDEXSQLS <> '' COLLATE SQL_Latin1_General_CP1_CI_AS
    SET @INDEXSQLS = @vbCrLf + 'GO'  COLLATE SQL_Latin1_General_CP1_CI_AS+ @vbCrLf + @INDEXSQLS;
--##############################################################################
--CHECK Constraints
--##############################################################################
  SET @CHECKCONSTSQLS = '';
  SELECT
    @CHECKCONSTSQLS = @CHECKCONSTSQLS
    + @vbCrLf
    + ISNULL('CONSTRAINT   ' + QUOTENAME([objz].[name]) + ' '
    + SPACE(@STRINGLEN - LEN([objz].[name]))
    + ' CHECK ' + ISNULL([CHECKS].[definition],'')
    + ',','')
  FROM [tempdb].[sys].[objects] AS [objz]
    INNER JOIN [tempdb].[sys].[check_constraints] AS [CHECKS] ON [objz].[object_id] = [CHECKS].[object_id]
  WHERE [objz].[type] = 'C'
    AND [objz].[parent_object_id] = @TABLE_ID;
--##############################################################################
--FOREIGN KEYS
--##############################################################################
  SET @FKSQLS = '' ;
    SELECT
    @FKSQLS=@FKSQLS
    + @vbCrLf + [MyAlias].[Command] FROM
(
SELECT
  DISTINCT
  --FK must be added AFTER the PK/unique constraints are added back.
  850 AS [ExecutionOrder],
  'CONSTRAINT ' 
  + QUOTENAME([conz].[name]) 
  + ' FOREIGN KEY (' 
  + [ChildCollection].[ChildColumns] 
  + ') REFERENCES ' 
  + QUOTENAME(SCHEMA_NAME([conz].[schema_id])) 
  + '.' 
  + QUOTENAME(OBJECT_NAME([conz].[referenced_object_id])) 
  + ' (' + [ParentCollection].[ParentColumns] 
  + ') ' 
   +  CASE [conz].[update_referential_action]
                                        WHEN 0 THEN '' --' ON UPDATE NO ACTION '
                                        WHEN 1 THEN ' ON UPDATE CASCADE '
                                        WHEN 2 THEN ' ON UPDATE SET NULL '
                                        ELSE ' ON UPDATE SET DEFAULT '
                                    END
                  + CASE [conz].[delete_referential_action]
                                        WHEN 0 THEN '' --' ON DELETE NO ACTION '
                                        WHEN 1 THEN ' ON DELETE CASCADE '
                                        WHEN 2 THEN ' ON DELETE SET NULL '
                                        ELSE ' ON DELETE SET DEFAULT '
                                    END
                  + CASE [conz].[is_not_for_replication]
                        WHEN 1 THEN ' NOT FOR REPLICATION '
                        ELSE ''
                    END
  + ',' AS [Command]
FROM   [sys].[foreign_keys] AS [conz]
       INNER JOIN [sys].[foreign_key_columns] AS [colz]
         ON [conz].[object_id] = [colz].[constraint_object_id]
      
       INNER JOIN (--gets my child tables column names   
SELECT
 [conz].[name],
 --technically, FK's can contain up to 16 columns, but real life is often a single column. coding here is for all columns
 [ChildColumns] = STUFF((SELECT 
                         ',' + QUOTENAME([REFZ].[name])
                       FROM   [sys].[foreign_key_columns] AS [fkcolz]
                              INNER JOIN [sys].[columns] AS [REFZ]
                                ON [fkcolz].[parent_object_id] = [REFZ].[object_id]
                                   AND [fkcolz].[parent_column_id] = [REFZ].[column_id]
                       WHERE [fkcolz].[parent_object_id] = [conz].[parent_object_id]
                           AND [fkcolz].[constraint_object_id] = [conz].[object_id]
                         ORDER  BY
                        [fkcolz].[constraint_column_id]
                       FOR XML PATH(''), TYPE).[value]('.','varchar(max)'),1,1,'')
FROM   [sys].[foreign_keys] AS [conz]
      INNER JOIN [sys].[foreign_key_columns] AS [colz]
        ON [conz].[object_id] = [colz].[constraint_object_id]
 WHERE [conz].[parent_object_id]= @TABLE_ID
GROUP  BY
[conz].[name],
[conz].[parent_object_id],--- without GROUP BY multiple rows are returned
 [conz].[object_id]
    ) AS [ChildCollection]
         ON [conz].[name] = [ChildCollection].[name]
       INNER JOIN (--gets the parent tables column names for the FK reference
                  SELECT
                     [conz].[name],
                     [ParentColumns] = STUFF((SELECT
                                              ',' + [REFZ].[name]
                                            FROM   [sys].[foreign_key_columns] AS [fkcolz]
                                                   INNER JOIN [sys].[columns] AS [REFZ]
                                                     ON [fkcolz].[referenced_object_id] = [REFZ].[object_id]
                                                        AND [fkcolz].[referenced_column_id] = [REFZ].[column_id]
                                            WHERE  [fkcolz].[referenced_object_id] = [conz].[referenced_object_id]
                                              AND [fkcolz].[constraint_object_id] = [conz].[object_id]
                                            ORDER BY [fkcolz].[constraint_column_id]
                                            FOR XML PATH(''), TYPE).[value]('.','varchar(max)'),1,1,'')
                   FROM   [sys].[foreign_keys] AS [conz]
                          INNER JOIN [sys].[foreign_key_columns] AS [colz]
                            ON [conz].[object_id] = [colz].[constraint_object_id]
                           -- AND colz.parent_column_id 
                   GROUP  BY
                    [conz].[name],
                    [conz].[referenced_object_id],--- without GROUP BY multiple rows are returned
                    [conz].[object_id]
                  ) AS [ParentCollection]
         ON [conz].[name] = [ParentCollection].[name]
)AS [MyAlias];
--##############################################################################
--RULES
--##############################################################################
  SET @RULESCONSTSQLS = ''  COLLATE SQL_Latin1_General_CP1_CI_AS;
  SELECT
    @RULESCONSTSQLS = @RULESCONSTSQLS
    + ISNULL(
             @vbCrLf
             + 'if not exists(SELECT [name] FROM tempdb.sys.objects WHERE TYPE=''R'' AND schema_id = '  COLLATE SQL_Latin1_General_CP1_CI_AS 
             + CONVERT(VARCHAR(30),[objz].[schema_id]) 
             + ' AND [name] = '''  COLLATE SQL_Latin1_General_CP1_CI_AS
             + QUOTENAME(OBJECT_NAME([colz].[rule_object_id])) 
             + ''')'  COLLATE SQL_Latin1_General_CP1_CI_AS
             + @vbCrLf
             + [MODS].[definition]  + @vbCrLf 
             + 'GO'  COLLATE SQL_Latin1_General_CP1_CI_AS +  @vbCrLf
             + 'EXEC sp_binderule  '  COLLATE SQL_Latin1_General_CP1_CI_AS
             + QUOTENAME([objz].[name]) 
             + ', '''  COLLATE SQL_Latin1_General_CP1_CI_AS 
             + QUOTENAME(OBJECT_NAME([colz].[object_id])) 
             + '.'  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME([colz].[name]) 
             + ''''  COLLATE SQL_Latin1_General_CP1_CI_AS
             + @vbCrLf 
             + 'GO' ,''  COLLATE SQL_Latin1_General_CP1_CI_AS)
  FROM [tempdb].[sys].[columns] [colz] 
    INNER JOIN [tempdb].[sys].[objects] [objz]
      ON [objz].[object_id] = [colz].[object_id]
    INNER JOIN [tempdb].[sys].[sql_modules] AS [MODS]
      ON [colz].[rule_object_id] = [MODS].[object_id]
  WHERE [colz].[rule_object_id] <> 0
    AND [colz].[object_id] = @TABLE_ID;
--##############################################################################
--TRIGGERS
--##############################################################################
  SET @TRIGGERSTATEMENT = '';
  SELECT
    @TRIGGERSTATEMENT = @TRIGGERSTATEMENT +  @vbCrLf + [MODS].[definition] + @vbCrLf + 'GO'
  FROM [tempdb].[sys].[sql_modules] AS [MODS]
  WHERE [MODS].[object_id] IN(SELECT
                         [objz].[object_id]
                       FROM [tempdb].[sys].[objects] AS [objz]
                       WHERE [objz].[type] = 'TR'
                       AND [objz].[parent_object_id] = @TABLE_ID);
  IF @TRIGGERSTATEMENT <> ''  COLLATE SQL_Latin1_General_CP1_CI_AS
    SET @TRIGGERSTATEMENT = @vbCrLf + 'GO'  COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf + @TRIGGERSTATEMENT;
--##############################################################################
--NEW SECTION QUERY ALL EXTENDED PROPERTIES
--##############################################################################
  SET @EXTENDEDPROPERTIES = ''  COLLATE SQL_Latin1_General_CP1_CI_AS;
  SELECT  @EXTENDEDPROPERTIES =
          @EXTENDEDPROPERTIES + @vbCrLf +
         'EXEC tempdb.sys.sp_addextendedproperty
          @name = N'''  COLLATE SQL_Latin1_General_CP1_CI_AS
          + [name] 
          + ''', @value = N'''  COLLATE SQL_Latin1_General_CP1_CI_AS
          + REPLACE(CONVERT(VARCHAR(MAX),[value]),'''','''''') + ''',
          @level0type = N''SCHEMA'', @level0name = '  COLLATE SQL_Latin1_General_CP1_CI_AS
          + QUOTENAME(@SCHEMANAME + ',
          @level1type = N''TABLE'', @level1name = ['  COLLATE SQL_Latin1_General_CP1_CI_AS
          + @TBLNAME) 
          + '];' COLLATE SQL_Latin1_General_CP1_CI_AS
 --SELECT objtype, objname, name, value
  FROM [sys].[fn_listextendedproperty] (NULL, 'schema', @SCHEMANAME, 'table', @TBLNAME, NULL, NULL);
  --OMacoder suggestion for column extended properties http://www.sqlservercentral.com/Forums/FindPost1651606.aspx
  SELECT @EXTENDEDPROPERTIES =
         @EXTENDEDPROPERTIES + @vbCrLf +
         'EXEC sys.sp_addextendedproperty
         @name = N'''  COLLATE SQL_Latin1_General_CP1_CI_AS
         + [name] 
         + ''', @value = N'''  COLLATE SQL_Latin1_General_CP1_CI_AS
         + REPLACE(CONVERT(VARCHAR(MAX),[value]),'''','''''') 
         + ''',
         @level0type = N''SCHEMA'', @level0name = '  COLLATE SQL_Latin1_General_CP1_CI_AS
         + QUOTENAME(@SCHEMANAME) + ',
         @level1type = N''TABLE'', @level1name = '  COLLATE SQL_Latin1_General_CP1_CI_AS
         + QUOTENAME(@TBLNAME) + ',
         @level2type = N''COLUMN'', @level2name = '  COLLATE SQL_Latin1_General_CP1_CI_AS
         + QUOTENAME([objname]) + ';' COLLATE SQL_Latin1_General_CP1_CI_AS
  --SELECT objtype, objname, name, value
  FROM [sys].[fn_listextendedproperty] (NULL, 'schema', @SCHEMANAME, 'table', @TBLNAME, 'column', NULL);
  IF @EXTENDEDPROPERTIES <> '' COLLATE SQL_Latin1_General_CP1_CI_AS
    SET @EXTENDEDPROPERTIES = @vbCrLf + 'GO' COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf + @EXTENDEDPROPERTIES;
--##############################################################################
--FINAL CLEANUP AND PRESENTATION
--##############################################################################
--at this point, there is a trailing comma, or it blank
  SELECT
    @FINALSQL = @FINALSQL
                + @CONSTRAINTSQLS
                + @CHECKCONSTSQLS
                + @FKSQLS;
--note that this trims the trailing comma from the end of the statements
  SET @FINALSQL = SUBSTRING(@FINALSQL,1,LEN(@FINALSQL) -1) ;
  SET @FINALSQL = @FINALSQL + ')'  COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf ;
  SET @input = @vbCrLf
       + @FINALSQL
       + @INDEXSQLS
       + @RULESCONSTSQLS
       + @TRIGGERSTATEMENT
       + @EXTENDEDPROPERTIES;
  SELECT @input AS [Item];
         
  RETURN 0;     
END; --PROC

```    
			
---   
			### SP DB_HELP_ExtensionTableDefExport     

```sql   
			




CREATE procedure [dbo].[DB_INFO_ExtensionTableDefExport]
AS
BEGIN 
	
	PRINT 'UNCOMMENT AND EXECUTE FOR RUNNING PROCEDURE SpAutoUpdateTemplateDoc'
	/*
	
	USE [master];
GO
IF OBJECT_ID('[dbo].[sp_GetDDL]') IS NOT NULL 
DROP  PROCEDURE [dbo].[sp_GetDDL]; 
GO
--#################################################################################################
-- Real World DBA Toolkit Version 2019-08-01 Lowell Izaguirre lowell@stormrage.com
--#################################################################################################
-- USAGE: exec sp_GetDDL GMACT
--   or   exec sp_GetDDL 'bob.example'
--   or   exec sp_GetDDL '[schemaname].[tablename]'
--   or   exec sp_GetDDL #temp
--#################################################################################################
-- copyright 2004-2018 by Lowell Izaguirre scripts*at*stormrage.com all rights reserved.
--developer utility function added by Lowell, used in SQL Server Management Studio 
-- http://www.stormrage.com/SQLStuff/sp_GetDDL_Latest.txt
--Purpose: Script Any Table, Temp Table or Object(Procedure Function Synonym View Table Trigger)
--#################################################################################################
-- see the thread here for lots of details: http://www.sqlservercentral.com/Forums/Topic751783-566-7.aspx
-- You can use this however you like...this script is not rocket science, but it took a bit of work to create.
-- the only thing that I ask
-- is that if you adapt my procedure or make it better, to simply send me a copy of it,
-- so I can learn from the things you've enhanced.The feedback you give will be what makes
-- it worthwhile to me, and will be fed back to the SQL community.
-- add this to your toolbox of helpful scripts.
--#################################################################################################
--
-- V300  uses String concatination and sys.tables instead of a cursor
-- V301  enhanced 07/31/2009 to include extended properties definitions
-- V302  fixes an issue where the schema is created , ie 'bob', but no user named 'bob' owns the schema, so the table is not found
-- V303  fixes an issue where all rules are appearing, instead of jsut the rule related to a column
-- V304  testing whether vbCrLf is better than just CHAR(13), some formatting cleanup with GO statements
--       also fixed an issue with the conversion from syscolumns to sys.columns, max-length is only field we need, not [precision]
-- V305  user feedback helped me find that the type_name function should call user_type_id instead of system_type_id
--       also fixed issue where identity definition missing from numeric/decimal definition
-- V306  fixes the computed columns definition that got broken/removed somehow in V300
--       also formatting when decimal is not an identity
-- V307  fixes bug identified by David Griffiths-491597 from SSC where the  @TABLE_ID
--       is reselected, but without it's schema  , potentially selecting the wrong table
--       also fixed is the missing size definition for varbinary, also found by David Griffith
-- V308  abtracted all SQLs to use Table Alaises
--       added logic to script a temp table.
--       added warning about possibly not being marked as system object.
-- V309  added logic based on feedback from Vincent Wylenzek @SSC to return the definition from sys.sql_modules for
--       any object like procedure/view/function/trigger, and not just a table. 
--       note previously, if you pointed sp_GetDDL at a view, it returned the view definition as a table...
--       now it will return the view definition instead.
-- V309a returns multi row recordset, one line per record 
-- V310a fixed the commented out code related to collation identified by moadh.bs @SSC
--       changed the DEFAULT definitions to not include the default name.
-- V310b Added PERSISTED to calculated columns where applicable
-- V310b fixed COLLATE statement for temp tables
-- V310c fixed NVARCHAR size misreported as doubled.
-- V311  fixed issue where indexes did not identify if the column was ASC or DESC found by nikus @ SSC
-- V311a fixed issue where indexes did not identify if the index was CLUSTERED or NONCLUSTERED found by nikus @ SSC 02/22/2013
-- V312  got rid of all upper casing, and allowing all scripts to generate the exact object names in cases of case sensitive databases.
--       now using the case sensitive name of the table passed: so of you did 'exec sp_GetDDL invoicedocs , it might return the script for InvoiceDocs, as that is how it is spelled in sys.objects.
--       added if exists(drop table/procedure/function) statement to the scripting automatically.
--       toggled the commented out code to list any default constraints by name, hopefully to be more accurate..
--       formatting of index statements to be multi line for better readability
--V314   03/30/2015
--       did i mention this scripts out temp tables too? sp_GetDDL #tmp
--       scripts any object:table,#temptable procedure, function, view or trigger
--       added ability to script synonyms
--       moved logic for REAL datatype to fix error when scripting real columns
--       added OmaCoders suggestion to script column extended properties as well.
--       added matt_slack suggestion to script schemaname as part of index portion of script.
--       minor script cleanup to use QUOTENAME insead of concatenating square brackets.
--       changed compatibility to 2008 and above only, now filtered idnexes with WHERE statmeents script correctly
--       foreign key tables and columns  in script now quotenamed to account for spaces in names; previously an error for Applciation ID instead of [Application ID]
--V315   Fixes Aliases and column names that prevented Case Sensitive collations from working.
--       Adds code if the procedure scripted is a system object
--       index scripts featuring filtered indexes is now included
--       index scripts now include filegroup name and compression settings
--       foreign key casecade delete/update settings now included as identified by Alberto aserio@SSC)
--       Fixes related to scripting extended events  as identified by Alberto aserio@SSC)
--V316   Fixes Identified 07/27/2016 by mlm( m.martinelli@SSC)
--       Added logic  resolving error when custom data type are defined using name greather than 16 char.
--       Added handling for data types: binary, datetime2, datetimeoffset, time
--       Added Set Based logic for Handling Fixed FOREIGN KEYS handling when one foreign key is define on more then one field
--       Added SPARSE column property
--V317   Fixes Identified 03/30/2017 by Lowell
--       Scripting of Foreign key column(s) are now quotenamed
--       Scripting column store indexes was broken, now fixed for column store indexes
--V318   Fixes Identified 02/14/2018 by Lowell
--       Scripting of with collation added/required for scripting SharePoint/ReportServer , or databases with non standard collations
--       Scripting enhanced to definitively handle case sensitive collations as well.
--V319   Adding logic for Temporal Tables, to grab their auto nistory tables
--       first attempt for partitioned tables, to get the columns correctly on the partition scheme
-- DROP PROCEDURE [dbo].[sp_GetDDL]
--#############################################################################
--if you are going to put this in MASTER, and want it to be able to query
--each database's sys.indexes, you MUST mark it as a system procedure:
--EXECUTE sp_ms_marksystemobject 'sp_GetDDL'
--#############################################################################
CREATE PROCEDURE [dbo].[sp_GetDDL]
  @TBL                VARCHAR(255)
AS
BEGIN
  SET NOCOUNT ON;
  DECLARE     @TBLNAME                VARCHAR(200),
              @SCHEMANAME             VARCHAR(255),
              @STRINGLEN              INT,
              @TABLE_ID               INT,
              @FINALSQL               VARCHAR(MAX),
              @CONSTRAINTSQLS         VARCHAR(MAX),
              @CHECKCONSTSQLS         VARCHAR(MAX),
              @RULESCONSTSQLS         VARCHAR(MAX),
              @FKSQLS                 VARCHAR(MAX),
              @TRIGGERSTATEMENT       VARCHAR(MAX),
              @EXTENDEDPROPERTIES     VARCHAR(MAX),
              @INDEXSQLS              VARCHAR(MAX),
              @MARKSYSTEMOBJECT       VARCHAR(MAX),
              @vbCrLf                 CHAR(2),
              @ISSYSTEMOBJECT         INT,
              @PROCNAME               VARCHAR(256),
              @input                  VARCHAR(MAX),
              @ObjectTypeFound        VARCHAR(255),
              @ObjectDataTypeLen      INT,
              --V3.20 additions
              @WithStatement          VARCHAR(MAX),
              @FileGroupStatement     VARCHAR(MAX),
              @PartitioningStatement  VARCHAR(MAX),
              @TemporalStatement      VARCHAR(MAX);
--##############################################################################
-- INITIALIZE
--##############################################################################
  SET @input = '';
  --new code: determine whether this proc is marked as a system proc with sp_ms_marksystemobject,
  --which flips the is_ms_shipped bit in sys.objects
    SELECT @ISSYSTEMOBJECT = ISNULL([is_ms_shipped],0),@PROCNAME = ISNULL([name],'sp_GetDDL') FROM [sys].[objects] WHERE [object_id] = @@PROCID;
  IF @ISSYSTEMOBJECT IS NULL 
    SELECT @ISSYSTEMOBJECT = ISNULL([is_ms_shipped],0),@PROCNAME = ISNULL([name],'sp_GetDDL') FROM [master].[sys].[objects] WHERE [object_id] = @@PROCID;
  IF @ISSYSTEMOBJECT IS NULL 
    SET @ISSYSTEMOBJECT = 0;  
  IF @PROCNAME IS NULL
    SET @PROCNAME = 'sp_GetDDL';
  --SET @TBL =  '[DBO].[WHATEVER1]'
  --does the tablename contain a schema?
  SET @vbCrLf =  CHAR(10);
  SELECT @SCHEMANAME = ISNULL(PARSENAME(@TBL,2),'dbo') ,
         @TBLNAME    = PARSENAME(@TBL,1);
  SELECT
    @TBLNAME    = [objz].[name],
    @TABLE_ID   = [objz].[object_id]
  FROM [sys].[objects] AS [objz]
  WHERE [objz].[type]          IN ('S','U')
    AND [objz].[name]          <>  'dtproperties'
    AND [objz].[name]           =  @TBLNAME
    AND [objz].[schema_id] =  SCHEMA_ID(@SCHEMANAME) ;
 SELECT @ObjectDataTypeLen = MAX(LEN([name])) FROM [sys].[types];
--##############################################################################
-- Check If TEMP TableName is Valid
--##############################################################################
  IF LEFT(@TBLNAME,1) = '#'  COLLATE SQL_Latin1_General_CP1_CI_AS
    BEGIN
      PRINT '--TEMP TABLE  ' + QUOTENAME(@TBLNAME) + '  FOUND';
      IF OBJECT_ID('tempdb..' + QUOTENAME(@TBLNAME)) IS NOT NULL
        BEGIN
          PRINT '--GOIN TO TEMP PROCESSING';
          GOTO TEMPPROCESS;
        END;
    END;
  ELSE
    BEGIN
      PRINT '--Non-Temp Table, ' + QUOTENAME(@TBLNAME) + ' continue Processing';
    END;
--##############################################################################
-- Check If TableName is Valid
--##############################################################################
  IF ISNULL(@TABLE_ID,0) = 0
    BEGIN
      --V309 code: see if it is an object and not a table.
      SELECT
        @TBLNAME    = [objz].[name],
        @TABLE_ID   = [objz].[object_id],
        @ObjectTypeFound = [objz].[type_desc]
      FROM [sys].[objects] AS [objz]
      --WHERE [type_desc]     IN('SQL_STORED_PROCEDURE','VIEW','SQL_TRIGGER','AGGREGATE_FUNCTION','SQL_INLINE_TABLE_VALUED_FUNCTION','SQL_TABLE_VALUED_FUNCTION','SQL_SCALAR_FUNCTION','SYNONYMN')
      WHERE [objz].[type]          IN ('P','V','TR','AF','IF','FN','TF','SN')
        AND [objz].[name]          <>  'dtproperties'
        AND [objz].[name]           =  @TBLNAME
        AND [objz].[schema_id] =  SCHEMA_ID(@SCHEMANAME) ;
      IF ISNULL(@TABLE_ID,0) <> 0  
        BEGIN
          --adding a drop statement.
          --adding a sp_ms_marksystemobject if needed
          SELECT @MARKSYSTEMOBJECT = CASE 
                                       WHEN [objz].[is_ms_shipped] = 1 
                                       THEN '
GO
--#################################################################################################
--Mark as a system object
EXECUTE sp_ms_marksystemobject  ''' + QUOTENAME(@SCHEMANAME) +'.' + QUOTENAME(@TBLNAME) + '''
--#################################################################################################
' 
                                       ELSE '
GO
' 
                                     END 
          FROM [sys].[objects] AS [objz] 
          WHERE [objz].[object_id] = @TABLE_ID;
          --adding a drop statement.
          IF @ObjectTypeFound = 'SYNONYM'  COLLATE SQL_Latin1_General_CP1_CI_AS
            BEGIN
               SELECT @FINALSQL = 
                'IF EXISTS(SELECT * FROM sys.synonyms WHERE name = ''' 
                                + [name] 
                                + ''''
                                + ' AND base_object_name <> ''' + [base_object_name] + ''')'
                                + @vbCrLf
                                + '  DROP SYNONYM ' + QUOTENAME([name]) + ''
                                + @vbCrLf
                                +'GO'
                                + @vbCrLf
                                +'IF NOT EXISTS(SELECT * FROM sys.synonyms WHERE name = ''' 
                                + [name] 
                                + ''')'
                                + @vbCrLf
                                + 'CREATE SYNONYM ' + QUOTENAME([name]) + ' FOR ' + [base_object_name] +';'
                                FROM [sys].[synonyms]
                                WHERE  [name]   =  @TBLNAME
                                AND [schema_id] =  SCHEMA_ID(@SCHEMANAME);
            END;
          ELSE
            BEGIN
          SELECT @FINALSQL = 
          'IF OBJECT_ID(''' + QUOTENAME(@SCHEMANAME) + '.' + QUOTENAME(@TBLNAME) + ''') IS NOT NULL ' + @vbCrLf
          + 'DROP ' + CASE 
                        WHEN [objz].[type] IN ('P')
                        THEN ' PROCEDURE '
                        WHEN [objz].[type] IN ('V')
                        THEN ' VIEW      '
                        WHEN [objz].[type] IN ('TR')
                        THEN ' TRIGGER   '
                        ELSE ' FUNCTION  '
                      END 
                      + QUOTENAME(@SCHEMANAME) + '.' + QUOTENAME(@TBLNAME) + ' ' + @vbCrLf + 'GO' + @vbCrLf
          + [def].[definition] + @MARKSYSTEMOBJECT
          FROM [sys].[objects] AS [objz] 
            INNER JOIN [sys].[sql_modules] AS [def]
              ON [objz].[object_id] = [def].[object_id]
          WHERE [objz].[type]          IN ('P','V','TR','AF','IF','FN','TF')
            AND [objz].[name]          <>  'dtproperties'
            AND [objz].[name]           =  @TBLNAME
            AND [objz].[schema_id] =  SCHEMA_ID(@SCHEMANAME) ;
            END;
          SET @input = @FINALSQL;  
          
        SELECT @input AS [Item];
         RETURN;
        END;
      ELSE
        BEGIN
        SET @FINALSQL = 'Object ' + QUOTENAME(@SCHEMANAME) + '.' + QUOTENAME(@TBLNAME) + ' does not exist in Database ' + QUOTENAME(DB_NAME())   + ' '  
                      + CASE 
                          WHEN @ISSYSTEMOBJECT = 0 THEN @vbCrLf + ' (also note that ' + @PROCNAME + ' is not marked as a system proc and cross db access to sys.tables will fail.)'
                          ELSE ''
                        END;
      IF LEFT(@TBLNAME,1) = '#' 
        SET @FINALSQL = @FINALSQL + ' OR in The tempdb database.';
      SELECT @FINALSQL AS [Item];
      RETURN 0;
        END;  
      
    END;
--##############################################################################
-- Valid Table, Continue Processing
--##############################################################################
--Is this a SYSTEM versioned TABLE?
SELECT @FINALSQL = 
     CASE 
       WHEN [tabz].[history_table_id] IS NULL 
       THEN '' 
       ELSE 'ALTER TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id]) ) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ' SET (SYSTEM_VERSIONING = OFF);' + @vbCrLf
            +  'IF OBJECT_ID(''' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[history_table_id]) ) + '.' + QUOTENAME(OBJECT_NAME([tabz].[history_table_id])) + ''') IS NOT NULL ' + @vbCrLf
              + 'DROP TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[history_table_id])) + '.' + QUOTENAME(OBJECT_NAME([tabz].[history_table_id])) + ' ' + @vbCrLf + 'GO' + @vbCrLf
       END
    + 'IF OBJECT_ID(''' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id]) ) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ''') IS NOT NULL ' + @vbCrLf
              + 'DROP TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id])) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ' ' + @vbCrLf + 'GO' + @vbCrLf
              + 'CREATE TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id])) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ' ( '
    FROM [sys].[tables] [tabz] WHERE [tabz].[object_id] = @TABLE_ID
    PRINT @FINALSQL
  --removed invalid code here which potentially selected wrong table--thanks David Grifiths @SSC!
  SELECT
    @STRINGLEN = MAX(LEN([colz].[name])) + 1
  FROM [sys].[objects] AS [objz]
    INNER JOIN [sys].[columns] AS [colz]
      ON  [objz].[object_id] = [colz].[object_id]
      AND [objz].[object_id] = @TABLE_ID;
--##############################################################################
--Get the columns, their definitions and defaults.
--##############################################################################
  SELECT
    @FINALSQL = @FINALSQL
    + CASE
        WHEN [colz].[is_computed] = 1
        THEN @vbCrLf
             + QUOTENAME([colz].[name])
             + ' '
             + SPACE(@STRINGLEN - LEN([colz].[name]))
             + 'AS ' + ISNULL([CALC].[definition],'')
             + CASE 
                 WHEN [CALC].[is_persisted] = 1 
                 THEN ' PERSISTED'
                 ELSE ''
               END
        ELSE @vbCrLf
             + QUOTENAME([colz].[name])
             + ' '
             + SPACE(@STRINGLEN - LEN([colz].[name]))
             + UPPER(TYPE_NAME([colz].[user_type_id]))
             + CASE
-- data types with precision and scale  IE DECIMAL(18,3), NUMERIC(10,2)
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('decimal','numeric')
               THEN '('
                    + CONVERT(VARCHAR,[colz].[precision])
                    + ','
                    + CONVERT(VARCHAR,[colz].[scale])
                    + ') '
                    + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[precision])
                    + ','
                    + CONVERT(VARCHAR,[colz].[scale])))
                    + SPACE(7)
                    + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                    + CASE
                        WHEN COLUMNPROPERTY ( @TABLE_ID , [colz].[name] , 'IsIdentity' ) = 0
                        THEN ''
                        ELSE ' IDENTITY('
                               + CONVERT(VARCHAR,ISNULL(IDENT_SEED(@TBLNAME),1) )
                               + ','
                               + CONVERT(VARCHAR,ISNULL(IDENT_INCR(@TBLNAME),1) )
                               + ')'
                        END
                    + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                    + CASE
                        WHEN [colz].[is_nullable] = 0
                        THEN ' NOT NULL'
                        ELSE '     NULL'
                      END
-- data types with scale  IE datetime2(7),TIME(7)
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('datetime2','datetimeoffset','time')
               THEN CASE 
                      WHEN [colz].[scale] < 7 THEN
                      '('
                      + CONVERT(VARCHAR,[colz].[scale])
                      + ') '
                    ELSE 
                      '    '
                    END
                    + SPACE(4)
                    + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                    + '        '
                    + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                    + CASE [colz].[generated_always_type]
                        WHEN 0 THEN ''
                        WHEN 1 THEN ' GENERATED ALWAYS AS ROW START'
                        WHEN 2 THEN ' GENERATED ALWAYS AS ROW END'
                        ELSE ''
                      END 
                    + CASE WHEN [colz].[is_hidden] = 1 THEN ' HIDDEN' ELSE '' END
                    + CASE
                        WHEN [colz].[is_nullable] = 0
                        THEN ' NOT NULL'
                        ELSE '     NULL'
                      END
--data types with no/precision/scale,IE  FLOAT
               WHEN  TYPE_NAME([colz].[user_type_id]) IN ('float') --,'real')
               THEN
               --addition: if 53, no need to specifically say (53), otherwise display it
                    CASE
                      WHEN [colz].[precision] = 53
                      THEN SPACE(11 - LEN(CONVERT(VARCHAR,[colz].[precision])))
                           + SPACE(7)
                           + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                      ELSE '('
                           + CONVERT(VARCHAR,[colz].[precision])
                           + ') '
                           + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[precision])))
                           + SPACE(7) + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                      END
--data type with max_length		ie CHAR (44), VARCHAR(40), BINARY(5000),
--##############################################################################
-- COLLATE STATEMENTS
-- personally i do not like collation statements,
-- but included here to make it easy on those who do
--##############################################################################
               WHEN  TYPE_NAME([colz].[user_type_id]) IN ('char','varchar','binary','varbinary')
               THEN CASE
                      WHEN  [colz].[max_length] = -1
                      THEN  '(max)'
                            + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[max_length])))
                            + SPACE(7) + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                            ----collate to comment out when not desired
                            --+ CASE
                            --    WHEN COLS.collation_name IS NULL
                            --    THEN ''
                            --    ELSE ' COLLATE ' + COLS.collation_name
                            --  END
                            + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                            + CASE
                                WHEN [colz].[is_nullable] = 0
                                THEN ' NOT NULL'
                                ELSE '     NULL'
                              END
                      ELSE '('
                           + CONVERT(VARCHAR,[colz].[max_length])
                           + ') '
                           + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[max_length])))
                           + SPACE(7) + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           ----collate to comment out when not desired
                           --+ CASE
                           --     WHEN COLS.collation_name IS NULL
                           --     THEN ''
                           --     ELSE ' COLLATE ' + COLS.collation_name
                           --   END
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                    END
--data type with max_length ( BUT DOUBLED) ie NCHAR(33), NVARCHAR(40)
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('nchar','nvarchar')
               THEN CASE
                      WHEN  [colz].[max_length] = -1
                      THEN '(max)'
                           + SPACE(5 - LEN(CONVERT(VARCHAR,([colz].[max_length] / 2))))
                           + SPACE(7)
                           + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           ----collate to comment out when not desired
                           --+ CASE
                           --     WHEN COLS.collation_name IS NULL
                           --     THEN ''
                           --     ELSE ' COLLATE ' + COLS.collation_name
                           --   END
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN  ' NOT NULL'
                               ELSE '     NULL'
                             END
                      ELSE '('
                           + CONVERT(VARCHAR,([colz].[max_length] / 2))
                           + ') '
                           + SPACE(6 - LEN(CONVERT(VARCHAR,([colz].[max_length] / 2))))
                           + SPACE(7)
                           + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           ----collate to comment out when not desired
                           --+ CASE
                           --     WHEN COLS.collation_name IS NULL
                           --     THEN ''
                           --     ELSE ' COLLATE ' + COLS.collation_name
                           --   END
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                    END
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('datetime','money','text','image','real')
               THEN SPACE(18 - LEN(TYPE_NAME([colz].[user_type_id])))
                    + '              '
                    + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                    + CASE
                        WHEN [colz].[is_nullable] = 0
                        THEN ' NOT NULL'
                        ELSE '     NULL'
                      END
--  other data type 	IE INT, DATETIME, MONEY, CUSTOM DATA TYPE,...
               ELSE SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                            + CASE
                                WHEN COLUMNPROPERTY ( @TABLE_ID , [colz].[name] , 'IsIdentity' ) = 0
                                THEN '              '
                                ELSE ' IDENTITY('
                                     + CONVERT(VARCHAR,ISNULL(IDENT_SEED(@TBLNAME),1) )
                                     + ','
                                     + CONVERT(VARCHAR,ISNULL(IDENT_INCR(@TBLNAME),1) )
                                     + ')'
                              END
                            + SPACE(2)
                            + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                            + CASE
                                WHEN [colz].[is_nullable] = 0
                                THEN ' NOT NULL'
                                ELSE '     NULL'
                              END
               END
             + CASE
                 WHEN [colz].[default_object_id] = 0
                 THEN ''
                 --ELSE ' DEFAULT '  + ISNULL(def.[definition] ,'')
                 --optional section in case NAMED default constraints are needed:
                 ELSE '  CONSTRAINT ' + QUOTENAME([DEF].[name]) + ' DEFAULT ' + ISNULL([DEF].[definition] ,'')
                        --i thought it needed to be handled differently! NOT!
               END  --CASE cdefault
      END --iscomputed
    + ','
    FROM [sys].[columns] AS [colz]
      LEFT OUTER JOIN  [sys].[default_constraints]  AS [DEF]
        ON [colz].[default_object_id] = [DEF].[object_id]
      LEFT OUTER JOIN [sys].[computed_columns] AS [CALC]
         ON  [colz].[object_id] = [CALC].[object_id]
         AND [colz].[column_id] = [CALC].[column_id]
    WHERE [colz].[object_id]=@TABLE_ID
    ORDER BY [colz].[column_id];
--##############################################################################
--used for formatting the rest of the constraints:
--##############################################################################
  SELECT
    @STRINGLEN = MAX(LEN([objz].[name])) + 1
  FROM [sys].[objects] AS [objz];
--##############################################################################
--PK/Unique Constraints and Indexes, using the 2005/08 INCLUDE syntax
--##############################################################################
  DECLARE @Results  TABLE (
                    [SCHEMA_ID]             INT,
                    [SCHEMA_NAME]           VARCHAR(255),
                    [OBJECT_ID]             INT,
                    [OBJECT_NAME]           VARCHAR(255),
                    [index_id]              INT,
                    [index_name]            VARCHAR(255),
                    [ROWS]                  BIGINT,
                    [SizeMB]                DECIMAL(19,3),
                    [IndexDepth]            INT,
                    [TYPE]                  INT,
                    [type_desc]             VARCHAR(30),
                    [fill_factor]           INT,
                    [is_unique]             INT,
                    [is_primary_key]        INT ,
                    [is_unique_constraint]  INT,
                    [index_columns_key]     VARCHAR(MAX),
                    [index_columns_include] VARCHAR(MAX),
                    [has_filter] BIT ,
                    [filter_definition] VARCHAR(MAX),
                    [currentFilegroupName]  VARCHAR(128),
                    [CurrentCompression]    VARCHAR(128));
  INSERT INTO @Results
    SELECT
      [SCH].[schema_id], [SCH].[name] AS [SCHEMA_NAME],
      [objz].[object_id], [objz].[name] AS [OBJECT_NAME],
      [IDX].[index_id], ISNULL([IDX].[name], '---') AS [index_name],
      [partitions].[ROWS], [partitions].[SizeMB], INDEXPROPERTY([objz].[object_id], [IDX].[name], 'IndexDepth') AS [IndexDepth],
      [IDX].[type], [IDX].[type_desc], [IDX].[fill_factor],
      [IDX].[is_unique], [IDX].[is_primary_key], [IDX].[is_unique_constraint],
      ISNULL([Index_Columns].[index_columns_key], '---') AS [index_columns_key],
      ISNULL([Index_Columns].[index_columns_include], '---') AS [index_columns_include],
      [IDX].[has_filter],
      [IDX].[filter_definition],
      [filz].[name],
      ISNULL([p].[data_compression_desc],'')
    FROM [sys].[objects] AS [objz]
      INNER JOIN [sys].[schemas] AS [SCH] ON [objz].[schema_id]=[SCH].[schema_id]
      INNER JOIN [sys].[indexes] AS [IDX] ON [objz].[object_id]=[IDX].[object_id]
      INNER JOIN [sys].[filegroups] AS [filz] ON [IDX].[data_space_id] = [filz].[data_space_id]
      INNER JOIN [sys].[partitions] AS [p]     ON  [IDX].[object_id] =  [p].[object_id]  AND [IDX].[index_id] = [p].[index_id]
      INNER JOIN (
                  SELECT
                    [statz].[object_id], [statz].[index_id], SUM([statz].[row_count]) AS [ROWS],
                    CONVERT(NUMERIC(19,3), CONVERT(NUMERIC(19,3), SUM([statz].[in_row_reserved_page_count]+[statz].[lob_reserved_page_count]+[statz].[row_overflow_reserved_page_count]))/CONVERT(NUMERIC(19,3), 128)) AS [SizeMB]
                  FROM [sys].[dm_db_partition_stats] AS [statz]
                  GROUP BY [statz].[object_id], [statz].[index_id]
                 ) AS [partitions] 
        ON  [IDX].[object_id]=[partitions].[object_id] 
        AND [IDX].[index_id]=[partitions].[index_id]
    CROSS APPLY (
                 SELECT
                   LEFT([Index_Columns].[index_columns_key], LEN([Index_Columns].[index_columns_key])-1) AS [index_columns_key],
                  LEFT([Index_Columns].[index_columns_include], LEN([Index_Columns].[index_columns_include])-1) AS [index_columns_include]
                 FROM
                      (
                       SELECT
                              (
                              SELECT QUOTENAME([colz].[name]) + CASE WHEN [IXCOLS].[is_descending_key] = 0 THEN ' asc' ELSE ' desc' END + ',' + ' '
                               FROM [sys].[index_columns] AS [IXCOLS]
                                 INNER JOIN [sys].[columns] AS [colz]
                                   ON  [IXCOLS].[column_id]   = [colz].[column_id]
                                   AND [IXCOLS].[object_id] = [colz].[object_id]
                               WHERE [IXCOLS].[is_included_column] = 0
                                 AND [IDX].[object_id] = [IXCOLS].[object_id] 
                                 AND [IDX].[index_id] = [IXCOLS].[index_id]
                               ORDER BY [IXCOLS].[key_ordinal]
                               FOR XML PATH('')
                              ) AS [index_columns_key],
                             (
                             SELECT QUOTENAME([colz].[name]) + ',' + ' '
                              FROM [sys].[index_columns] AS [IXCOLS]
                                INNER JOIN [sys].[columns] AS [colz]
                                  ON  [IXCOLS].[column_id]   = [colz].[column_id]
                                  AND [IXCOLS].[object_id] = [colz].[object_id]
                              WHERE [IXCOLS].[is_included_column] = 1
                                AND [IDX].[object_id] = [IXCOLS].[object_id] 
                                AND [IDX].[index_id] = [IXCOLS].[index_id]
                              ORDER BY [IXCOLS].[index_column_id]
                              FOR XML PATH('')
                             ) AS [index_columns_include]
                      ) AS [Index_Columns]
                ) AS [Index_Columns]
    WHERE [SCH].[name]  LIKE CASE 
                                     WHEN @SCHEMANAME = ''   COLLATE SQL_Latin1_General_CP1_CI_AS
                                     THEN [SCH].[name] 
                                     ELSE @SCHEMANAME 
                                   END
    AND [objz].[name] LIKE CASE 
                                  WHEN @TBLNAME = ''   COLLATE SQL_Latin1_General_CP1_CI_AS 
                                  THEN [objz].[name] 
                                  ELSE @TBLNAME 
                                END
    ORDER BY 
      [SCH].[name], 
      [objz].[name], 
      [IDX].[name];
--@Results table has both PK,s Uniques and indexes in thme...pull them out for adding to funal results:
  SET @CONSTRAINTSQLS = '';
  SET @INDEXSQLS      = '';
  SET @TemporalStatement = '';
  SET @WithStatement = '';
--##############################################################################
  -- Temporal tables
--##############################################################################
  SELECT @TemporalStatement =  ISNULL(@vbCrLf + 'PERIOD FOR SYSTEM_TIME ('
  + MAX(CASE WHEN [colz].[generated_always_type] = 1 THEN [colz].[name] ELSE '' END)
  +','
 + MAX(CASE WHEN [colz].[generated_always_type] = 2 THEN [colz].[name] ELSE '' END)
  +'),','') ,
  @WithStatement = ISNULL(' SYSTEM_VERSIONING = ON (HISTORY_TABLE=' + QUOTENAME(OBJECT_SCHEMA_NAME([objz].[history_table_id])) + '.' + QUOTENAME(OBJECT_NAME([objz].[history_table_id])) + '),' ,'')
  FROM [sys].[tables] [objz]
  INNER JOIN [sys].[columns] [colz] 
  ON [objz].[object_id] = [colz].[object_id]
  WHERE [colz].[object_id] = @TABLE_ID 
  AND [colz].[generated_always_type] > 0
  GROUP BY [colz].[object_id],[objz].[history_table_id]
--##############################################################################
-- memory optimized
--##############################################################################
SELECT @WithStatement  = @WithStatement + ISNULL('MEMORY_OPTIMIZED=ON, DURABILITY=' + [objz].[durability_desc] + ',','') 
FROM [sys].[tables] [objz]
WHERE [objz].[is_memory_optimized] =1
AND [objz].[object_id] = @TABLE_ID 
--##############################################################################
--constraints
--column store indexes are different: the "include" columns for normal indexes as scripted above are the columnstores indexed columns
--add a CASE for that situation.
--##############################################################################
  SELECT @CONSTRAINTSQLS = @CONSTRAINTSQLS 
         + CASE
             WHEN [is_primary_key] = 1 OR [is_unique] = 1
             THEN @vbCrLf
                  + 'CONSTRAINT   '  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME([index_name]) + ' '
                  + CASE  
                      WHEN [is_primary_key] = 1 
                      THEN ' PRIMARY KEY ' 
                      ELSE CASE  
                             WHEN [is_unique] = 1     
                             THEN ' UNIQUE      '      
                             ELSE '' 
                           END 
                    END
                  + [type_desc] 
                  + CASE 
                      WHEN [type_desc]='NONCLUSTERED' 
                      THEN '' 
                      ELSE '   ' 
                    END
                  + ' (' + [index_columns_key] + ')'
                  + CASE 
                      WHEN [index_columns_include] <> '---' 
                      THEN ' INCLUDE (' + [index_columns_include] + ')' 
                      ELSE '' 
                    END
                  + CASE
                      WHEN [has_filter] = 1 
                      THEN ' ' + [filter_definition]
                      ELSE ' '
                    END
                  + CASE WHEN [fill_factor] <> 0 OR [CurrentCompression] <> 'NONE'
                  THEN ' WITH (' + CASE
                                    WHEN [fill_factor] <> 0 
                                    THEN 'FILLFACTOR = ' + CONVERT(VARCHAR(30),[fill_factor]) 
                                    ELSE '' 
                                  END
                                + CASE
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression] <> 'NONE' THEN ',DATA_COMPRESSION = ' + [CurrentCompression] + ' '
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression]  = 'NONE' THEN ''
                                    WHEN [fill_factor]  = 0  AND [CurrentCompression] <> 'NONE' THEN 'DATA_COMPRESSION = ' + [CurrentCompression] + ' '
                                    ELSE '' 
                                  END
                                  + ')'
                  ELSE '' 
                  END 
                      
             ELSE ''
           END + ','
  FROM @Results
  WHERE [type_desc] != 'HEAP'
    AND [is_primary_key] = 1 
    OR  [is_unique] = 1
  ORDER BY 
    [is_primary_key] DESC,
    [is_unique] DESC;
    --
--##############################################################################
--indexes
--##############################################################################
  SELECT @INDEXSQLS = @INDEXSQLS 
         + CASE
             WHEN [is_primary_key] = 0 OR [is_unique] = 0
             THEN @vbCrLf
                  + 'CREATE '  COLLATE SQL_Latin1_General_CP1_CI_AS + [type_desc] + ' INDEX '  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME([index_name]) + ' '
                  + @vbCrLf
                  + '   ON '   COLLATE SQL_Latin1_General_CP1_CI_AS
                  + QUOTENAME([SCHEMA_NAME]) + '.' + QUOTENAME([OBJECT_NAME])
                  + CASE 
                        WHEN [CurrentCompression] = 'COLUMNSTORE'  COLLATE SQL_Latin1_General_CP1_CI_AS
                        THEN ' (' + [index_columns_include] + ')' 
                        ELSE ' (' + [index_columns_key] + ')'
                    END
                  + CASE 
                      WHEN [CurrentCompression] = 'COLUMNSTORE'  COLLATE SQL_Latin1_General_CP1_CI_AS
                      THEN ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                      ELSE
                        CASE
                     WHEN [index_columns_include] <> '---' 
                     THEN @vbCrLf + '   INCLUDE ('  COLLATE SQL_Latin1_General_CP1_CI_AS + [index_columns_include] + ')'   COLLATE SQL_Latin1_General_CP1_CI_AS
                     ELSE ''   COLLATE SQL_Latin1_General_CP1_CI_AS
                   END
                    END
                  --2008 filtered indexes syntax
                  + CASE 
                      WHEN [has_filter] = 1 
                      THEN @vbCrLf + '   WHERE '  COLLATE SQL_Latin1_General_CP1_CI_AS + [filter_definition]
                      ELSE ''
                    END
                  + CASE WHEN [fill_factor] <> 0 OR [CurrentCompression] <> 'NONE'  COLLATE SQL_Latin1_General_CP1_CI_AS
                  THEN ' WITH ('  COLLATE SQL_Latin1_General_CP1_CI_AS + CASE
                                    WHEN [fill_factor] <> 0 
                                    THEN 'FILLFACTOR = '  COLLATE SQL_Latin1_General_CP1_CI_AS + CONVERT(VARCHAR(30),[fill_factor]) 
                                    ELSE '' 
                                  END
                                + CASE
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression] <> 'NONE' THEN ',DATA_COMPRESSION = ' + [CurrentCompression]+' '
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression]  = 'NONE' THEN ''
                                    WHEN [fill_factor]  = 0  AND [CurrentCompression] <> 'NONE' THEN 'DATA_COMPRESSION = ' + [CurrentCompression]+' '
                                    ELSE '' 
                                  END
                                  + ')'
                  ELSE '' 
                  END 
           END
  FROM @Results
  WHERE [type_desc] != 'HEAP'
    AND [is_primary_key] = 0 
    AND [is_unique] = 0
  ORDER BY 
    [is_primary_key] DESC,
    [is_unique] DESC;
  IF @INDEXSQLS <> ''  COLLATE SQL_Latin1_General_CP1_CI_AS
    SET @INDEXSQLS = @vbCrLf + 'GO'  COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf + @INDEXSQLS;
--##############################################################################
--CHECK Constraints
--##############################################################################
  SET @CHECKCONSTSQLS = ''  COLLATE SQL_Latin1_General_CP1_CI_AS;
  SELECT
    @CHECKCONSTSQLS = @CHECKCONSTSQLS
    + @vbCrLf
    + ISNULL('CONSTRAINT   ' + QUOTENAME([objz].[name]) + ' '
    + SPACE(@STRINGLEN - LEN([objz].[name]))
    + ' CHECK ' + ISNULL([CHECKS].[definition],'')
    + ',','')
  FROM [sys].[objects] AS [objz]
    INNER JOIN [sys].[check_constraints] AS [CHECKS] ON [objz].[object_id] = [CHECKS].[object_id]
  WHERE [objz].[type] = 'C'
    AND [objz].[parent_object_id] = @TABLE_ID;
--##############################################################################
--FOREIGN KEYS
--##############################################################################
  SET @FKSQLS = '' ;
    SELECT
    @FKSQLS=@FKSQLS
    + @vbCrLf + [MyAlias].[Command] FROM
(
SELECT
  DISTINCT
  --FK must be added AFTER the PK/unique constraints are added back.
  850 AS [ExecutionOrder],
  'CONSTRAINT ' 
  + QUOTENAME([conz].[name]) 
  + ' FOREIGN KEY (' 
  + [ChildCollection].[ChildColumns] 
  + ') REFERENCES ' 
  + QUOTENAME(SCHEMA_NAME([conz].[schema_id])) 
  + '.' 
  + QUOTENAME(OBJECT_NAME([conz].[referenced_object_id])) 
  + ' (' + [ParentCollection].[ParentColumns] 
  + ') ' 
  +  CASE [conz].[update_referential_action]
                                        WHEN 0 THEN '' --' ON UPDATE NO ACTION '
                                        WHEN 1 THEN ' ON UPDATE CASCADE '
                                        WHEN 2 THEN ' ON UPDATE SET NULL '
                                        ELSE ' ON UPDATE SET DEFAULT '
                                    END
                  + CASE [conz].[delete_referential_action]
                                        WHEN 0 THEN '' --' ON DELETE NO ACTION '
                                        WHEN 1 THEN ' ON DELETE CASCADE '
                                        WHEN 2 THEN ' ON DELETE SET NULL '
                                        ELSE ' ON DELETE SET DEFAULT '
                                    END
                  + CASE [conz].[is_not_for_replication]
                        WHEN 1 THEN ' NOT FOR REPLICATION '
                        ELSE ''
                    END
  + ',' AS [Command]
FROM   [sys].[foreign_keys] AS [conz]
       INNER JOIN [sys].[foreign_key_columns] AS [colz]
         ON [conz].[object_id] = [colz].[constraint_object_id]
      
       INNER JOIN (--gets my child tables column names   
SELECT
 [conz].[name],
 --technically, FK's can contain up to 16 columns, but real life is often a single column. coding here is for all columns
 [ChildColumns] = STUFF((SELECT 
                         ',' + QUOTENAME([REFZ].[name])
                       FROM   [sys].[foreign_key_columns] AS [fkcolz]
                              INNER JOIN [sys].[columns] AS [REFZ]
                                ON [fkcolz].[parent_object_id] = [REFZ].[object_id]
                                   AND [fkcolz].[parent_column_id] = [REFZ].[column_id]
                       WHERE [fkcolz].[parent_object_id] = [conz].[parent_object_id]
                           AND [fkcolz].[constraint_object_id] = [conz].[object_id]
                         ORDER  BY
                        [fkcolz].[constraint_column_id]
                      FOR XML PATH(''), TYPE).[value]('.','varchar(max)'),1,1,'')
FROM   [sys].[foreign_keys] AS [conz]
      INNER JOIN [sys].[foreign_key_columns] AS [colz]
        ON [conz].[object_id] = [colz].[constraint_object_id]
        WHERE [conz].[parent_object_id]= @TABLE_ID
GROUP  BY
[conz].[name],
[conz].[parent_object_id],--- without GROUP BY multiple rows are returned
 [conz].[object_id]
    ) AS [ChildCollection]
         ON [conz].[name] = [ChildCollection].[name]
       INNER JOIN (--gets the parent tables column names for the FK reference
                  SELECT
                     [conz].[name],
                     [ParentColumns] = STUFF((SELECT
                                              ',' + [REFZ].[name]
                                            FROM   [sys].[foreign_key_columns] AS [fkcolz]
                                                   INNER JOIN [sys].[columns] AS [REFZ]
                                                     ON [fkcolz].[referenced_object_id] = [REFZ].[object_id]
                                                        AND [fkcolz].[referenced_column_id] = [REFZ].[column_id]
                                            WHERE  [fkcolz].[referenced_object_id] = [conz].[referenced_object_id]
                                              AND [fkcolz].[constraint_object_id] = [conz].[object_id]
                                            ORDER BY [fkcolz].[constraint_column_id]
                                            FOR XML PATH(''), TYPE).[value]('.','varchar(max)'),1,1,'')
                   FROM   [sys].[foreign_keys] AS [conz]
                          INNER JOIN [sys].[foreign_key_columns] AS [colz]
                            ON [conz].[object_id] = [colz].[constraint_object_id]
                           -- AND colz.parent_column_id 
                   GROUP  BY
                    [conz].[name],
                    [conz].[referenced_object_id],--- without GROUP BY multiple rows are returned
                    [conz].[object_id]
                  ) AS [ParentCollection]
         ON [conz].[name] = [ParentCollection].[name]
)AS [MyAlias];
--##############################################################################
--RULES
--##############################################################################
  SET @RULESCONSTSQLS = '';
  SELECT
    @RULESCONSTSQLS = @RULESCONSTSQLS
    + ISNULL(
             @vbCrLf
             + 'if not exists(SELECT [name] FROM sys.objects WHERE TYPE=''R'' AND schema_id = ' COLLATE SQL_Latin1_General_CP1_CI_AS + CONVERT(VARCHAR(30),[objz].[schema_id]) + ' AND [name] = '''  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME(OBJECT_NAME([colz].[rule_object_id])) + ''')'  COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf
             + [MODS].[definition]  + @vbCrLf + 'GO' COLLATE SQL_Latin1_General_CP1_CI_AS +  @vbCrLf
             + 'EXEC sp_binderule  ' + QUOTENAME([objz].[name]) + ', ''' + QUOTENAME(OBJECT_NAME([colz].[object_id])) + '.' + QUOTENAME([colz].[name]) + ''''  COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf + 'GO'  COLLATE SQL_Latin1_General_CP1_CI_AS ,'')
  FROM [sys].[columns] [colz] 
    INNER JOIN [sys].[objects] [objz]
      ON [objz].[object_id] = [colz].[object_id]
    INNER JOIN [sys].[sql_modules] AS [MODS]
      ON [colz].[rule_object_id] = [MODS].[object_id]
  WHERE [colz].[rule_object_id] <> 0
    AND [colz].[object_id] = @TABLE_ID;
--##############################################################################
--TRIGGERS
--##############################################################################
  SET @TRIGGERSTATEMENT = '';
  SELECT
    @TRIGGERSTATEMENT = @TRIGGERSTATEMENT +  @vbCrLf + [MODS].[definition] + @vbCrLf + 'GO'
  FROM [sys].[sql_modules] AS [MODS]
  WHERE [MODS].[object_id] IN(SELECT
                         [objz].[object_id]
                       FROM [sys].[objects] AS [objz]
                       WHERE [objz].[type] = 'TR'
                       AND [objz].[parent_object_id] = @TABLE_ID);
  IF @TRIGGERSTATEMENT <> ''  COLLATE SQL_Latin1_General_CP1_CI_AS
    SET @TRIGGERSTATEMENT = @vbCrLf + 'GO'  COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf + @TRIGGERSTATEMENT;
--##############################################################################
--NEW SECTION QUERY ALL EXTENDED PROPERTIES
--##############################################################################
  SET @EXTENDEDPROPERTIES = '';
  SELECT  @EXTENDEDPROPERTIES =
          @EXTENDEDPROPERTIES + @vbCrLf +
         'EXEC sys.sp_addextendedproperty
          @name = N'''  COLLATE SQL_Latin1_General_CP1_CI_AS + [name] + ''', @value = N'''  COLLATE SQL_Latin1_General_CP1_CI_AS + REPLACE(CONVERT(VARCHAR(MAX),[value]),'''','''''') + ''',
          @level0type = N''SCHEMA'', @level0name = '  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME(@SCHEMANAME) + ',
          @level1type = N''TABLE'', @level1name = '  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME(@TBLNAME) + ';'
 --SELECT objtype, objname, name, value
  FROM [sys].[fn_listextendedproperty] (NULL, 'schema', @SCHEMANAME, 'table', @TBLNAME, NULL, NULL);
  --OMacoder suggestion for column extended properties http://www.sqlservercentral.com/Forums/FindPost1651606.aspx
   ;WITH [obj] AS (
	SELECT [split].[a].[value]('.', 'VARCHAR(20)') AS [name]
	FROM ( 
		SELECT CAST ('<M>' + REPLACE('column,constraint,index,trigger,parameter', ',', '</M><M>') + '</M>' AS XML) AS [data] 
		) AS [A] 
		CROSS APPLY [data].[nodes] ('/M') AS [split]([a])
	)
  SELECT 
  @EXTENDEDPROPERTIES =
		 @EXTENDEDPROPERTIES + @vbCrLf + @vbCrLf +
         'EXEC sys.sp_addextendedproperty
         @name = N''' COLLATE SQL_Latin1_General_CP1_CI_AS
         + [lep].[name] 
         + ''', @value = N''' COLLATE SQL_Latin1_General_CP1_CI_AS
         + REPLACE(CONVERT(VARCHAR(MAX),[lep].[value]),'''','''''') + ''',
         @level0type = N''SCHEMA'', @level0name = ' COLLATE SQL_Latin1_General_CP1_CI_AS
         + QUOTENAME(@SCHEMANAME) 
         + ',
         @level1type = N''TABLE'', @level1name = ' COLLATE SQL_Latin1_General_CP1_CI_AS
         + QUOTENAME(@TBLNAME) 
         + ',
         @level2type = N''' COLLATE SQL_Latin1_General_CP1_CI_AS
         + UPPER([obj].[name])  
         + ''', @level2name = ' COLLATE SQL_Latin1_General_CP1_CI_AS
         + QUOTENAME([lep].[objname]) + ';' COLLATE SQL_Latin1_General_CP1_CI_AS
  --SELECT objtype, objname, name, value
  FROM [obj] 
	CROSS APPLY [sys].[fn_listextendedproperty] (NULL, 'schema', @SCHEMANAME, 'table', @TBLNAME, [obj].[name], NULL) AS [lep];  
  
  IF @EXTENDEDPROPERTIES <> '' COLLATE SQL_Latin1_General_CP1_CI_AS
    SET @EXTENDEDPROPERTIES = @vbCrLf + 'GO' COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf + @EXTENDEDPROPERTIES;
--##############################################################################
--FINAL CLEANUP AND PRESENTATION
--##############################################################################
--at this point, there is a trailing comma, or it blank
--WITH statment has a trailing comma

IF @WithStatement > '' 
  SET @WithStatement='WITH (' + SUBSTRING(@WithStatement,1,LEN(@WithStatement) -1)  + ')'
  SELECT
    @FINALSQL = @FINALSQL
                + @TemporalStatement
                + @CONSTRAINTSQLS
                + @CHECKCONSTSQLS
                + @FKSQLS;
--note that this trims the trailing comma from the end of the statements
  SET @FINALSQL = SUBSTRING(@FINALSQL,1,LEN(@FINALSQL) -1) ;
  SET @FINALSQL = @FINALSQL + ')' COLLATE SQL_Latin1_General_CP1_CI_AS +  @vbCrLf + @WithStatement COLLATE SQL_Latin1_General_CP1_CI_AS +  @vbCrLf ;
  SET @input = @vbCrLf
       + @FINALSQL
       + @INDEXSQLS
       + @RULESCONSTSQLS
       + @TRIGGERSTATEMENT
       + @EXTENDEDPROPERTIES;
  SELECT @input AS [Item];
  RETURN 0;     
--##############################################################################
-- END Normal Table Processing
--############################################################################## 
    
--simple, primitive version to get the results of a TEMP table from the TEMP db.  
--##############################################################################
-- NEW Temp Table Logic
--##############################################################################     
TEMPPROCESS:
  SELECT @TABLE_ID = OBJECT_ID('tempdb..' COLLATE SQL_Latin1_General_CP1_CI_AS + @TBLNAME);
--##############################################################################
-- Valid temp Table, Continue Processing
--##############################################################################
SELECT @FINALSQL = 
     CASE 
       WHEN [tabz].[history_table_id] IS NULL 
       THEN '' 
       ELSE 'ALTER TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id]) ) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ' SET (SYSTEM_VERSIONING = OFF);' + @vbCrLf
            +  'IF OBJECT_ID(''' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[history_table_id]) ) + '.' + QUOTENAME(OBJECT_NAME([tabz].[history_table_id])) + ''') IS NOT NULL ' + @vbCrLf
              + 'DROP TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[history_table_id])) + '.' + QUOTENAME(OBJECT_NAME([tabz].[history_table_id])) + ' ' + @vbCrLf + 'GO' + @vbCrLf
       END
    + 'IF OBJECT_ID(''' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id]) ) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ''') IS NOT NULL ' + @vbCrLf
              + 'DROP TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id])) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ' ' + @vbCrLf + 'GO' + @vbCrLf
              + 'CREATE TABLE ' + QUOTENAME(OBJECT_SCHEMA_NAME([tabz].[object_id])) + '.' + QUOTENAME(OBJECT_NAME([tabz].[object_id])) + ' ( '
FROM [sys].[tables] [tabz] WHERE [tabz].[object_id] = OBJECT_ID(@TABLE_ID)
  --removed invalid code here which potentially selected wrong table--thansk David Grifiths @SSC!
SELECT 
    @STRINGLEN = MAX(LEN([colz].[name])) + 1
  FROM [tempdb].[sys].[objects] AS [objz]
    INNER JOIN [tempdb].[sys].[columns] AS [colz]
      ON  [objz].[object_id] = [colz].[object_id]
      AND [objz].[object_id] = @TABLE_ID;
--##############################################################################
--Get the hash index definitions for memory optimized tables, if any.
--##############################################################################

--##############################################################################
--Get the columns, their definitions and defaults.
--##############################################################################
  SELECT
    @FINALSQL = @FINALSQL
    + CASE
        WHEN [colz].[is_computed] = 1
        THEN @vbCrLf
             + QUOTENAME([colz].[name])
             + ' '
             + SPACE(@STRINGLEN - LEN([colz].[name]))
             + 'AS ' + ISNULL([CALC].[definition],'')
              + CASE 
                 WHEN [CALC].[is_persisted] = 1 
                 THEN ' PERSISTED'
                 ELSE ''
               END
        ELSE @vbCrLf
             + QUOTENAME([colz].[name])
             + ' '
             + SPACE(@STRINGLEN - LEN([colz].[name]))
             + UPPER(TYPE_NAME([colz].[user_type_id]))
             + CASE
-- data types with precision and scale  IE DECIMAL(18,3), NUMERIC(10,2)
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('decimal','numeric')
               THEN '('
                    + CONVERT(VARCHAR,[colz].[precision])
                    + ','
                    + CONVERT(VARCHAR,[colz].[scale])
                    + ') '
                    + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[precision])
                    + ','
                    + CONVERT(VARCHAR,[colz].[scale])))
                    + SPACE(7)
                    + SPACE(16 - LEN(TYPE_NAME([colz].[user_type_id])))
                    + CASE
                        WHEN [colz].[is_identity] = 1
                        THEN ' IDENTITY(1,1)'
                        ELSE ''
                        ----WHEN COLUMNPROPERTY ( @TABLE_ID , COLS.[name] , 'IsIdentity' ) = 1
                        ----THEN ' IDENTITY('
                        ----       + CONVERT(VARCHAR,ISNULL(IDENT_SEED('tempdb..' + @TBLNAME),1) )
                        ----       + ','
                        ----       + CONVERT(VARCHAR,ISNULL(IDENT_INCR('tempdb..' + @TBLNAME),1) )
                        ----       + ')'
                        ----ELSE ''
                        END
                    + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                    + CASE
                        WHEN [colz].[is_nullable] = 0
                        THEN ' NOT NULL'
                        ELSE '     NULL'
                      END
-- data types with scale  IE datetime2(7),TIME(7)
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('datetime2','datetimeoffset','time')
               THEN CASE 
                      WHEN [colz].[scale] < 7 THEN
                      '('
                      + CONVERT(VARCHAR,[colz].[scale])
                      + ') '
                    ELSE 
                      '    '
                    END
                    + SPACE(4)
                    + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                    + '        '
                    + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                    + CASE [colz].[generated_always_type]
                        WHEN 0 THEN ''
                        WHEN 1 THEN ' GENERATED ALWAYS AS ROW START'
                        WHEN 2 THEN ' GENERATED ALWAYS AS ROW END'
                        ELSE ''
                      END 
                    + CASE WHEN [colz].[is_hidden] = 1 THEN ' HIDDEN' ELSE '' END
                    + CASE
                        WHEN [colz].[is_nullable] = 0
                        THEN ' NOT NULL'
                        ELSE '     NULL'
                      END
--data types with no/precision/scale,IE  FLOAT
               WHEN  TYPE_NAME([colz].[user_type_id]) IN ('float') --,'real')
               THEN
               --addition: if 53, no need to specifically say (53), otherwise display it
                    CASE
                      WHEN [colz].[precision] = 53
                      THEN SPACE(11 - LEN(CONVERT(VARCHAR,[colz].[precision])))
                           + SPACE(7)
                           + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                      ELSE '('
                           + CONVERT(VARCHAR,[colz].[precision])
                           + ') '
                           + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[precision])))
                           + SPACE(7) + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                      END
--ie VARCHAR(40)
--##############################################################################
-- COLLATE STATEMENTS in tempdb!
-- personally i do not like collation statements,
-- but included here to make it easy on those who do
--##############################################################################
               WHEN  TYPE_NAME([colz].[user_type_id]) IN ('char','varchar','binary','varbinary')
               THEN CASE
                      WHEN  [colz].[max_length] = -1
                      THEN  '(max)'
                            + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[max_length])))
                            + SPACE(7) + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                            ----collate to comment out when not desired
                            --+ CASE
                            --    WHEN COLS.collation_name IS NULL
                            --    THEN ''
                            --    ELSE ' COLLATE ' + COLS.collation_name
                            --  END
                            + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                            + CASE
                                WHEN [colz].[is_nullable] = 0
                                THEN ' NOT NULL'
                                ELSE '     NULL'
                              END
                      ELSE '('
                           + CONVERT(VARCHAR,[colz].[max_length])
                           + ') '
                           + SPACE(6 - LEN(CONVERT(VARCHAR,[colz].[max_length])))
                           + SPACE(7) + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           ----collate to comment out when not desired
                           --+ CASE
                           --     WHEN COLS.collation_name IS NULL
                           --     THEN ''
                           --     ELSE ' COLLATE ' + COLS.collation_name
                           --   END
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                    END
--data type with max_length ( BUT DOUBLED) ie NCHAR(33), NVARCHAR(40)
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('nchar','nvarchar')
               THEN CASE
                      WHEN  [colz].[max_length] = -1
                      THEN '(max)'
                           + SPACE(5 - LEN(CONVERT(VARCHAR,([colz].[max_length] / 2))))
                           + SPACE(7)
                           + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           -- --collate to comment out when not desired
                           --+ CASE
                           --     WHEN COLS.collation_name IS NULL
                           --     THEN ''
                           --     ELSE ' COLLATE ' + COLS.collation_name
                           --   END
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN  ' NOT NULL'
                               ELSE '     NULL'
                             END
                      ELSE '('
                           + CONVERT(VARCHAR,([colz].[max_length] / 2))
                           + ') '
                           + SPACE(6 - LEN(CONVERT(VARCHAR,([colz].[max_length] / 2))))
                           + SPACE(7)
                           + SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                           -- --collate to comment out when not desired
                           --+ CASE
                           --     WHEN COLS.collation_name IS NULL
                           --     THEN ''
                           --     ELSE ' COLLATE ' + COLS.collation_name
                           --   END
                           + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                           + CASE
                               WHEN [colz].[is_nullable] = 0
                               THEN ' NOT NULL'
                               ELSE '     NULL'
                             END
                    END
--  other data type 	IE INT, DATETIME, MONEY, CUSTOM DATA TYPE,...
               WHEN TYPE_NAME([colz].[user_type_id]) IN ('datetime','money','text','image','real')
               THEN SPACE(18 - LEN(TYPE_NAME([colz].[user_type_id])))
                    + '              '
                    + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                    + CASE
                        WHEN [colz].[is_nullable] = 0
                        THEN ' NOT NULL'
                        ELSE '     NULL'
                      END
--IE INT
               ELSE SPACE(@ObjectDataTypeLen - LEN(TYPE_NAME([colz].[user_type_id])))
                            + CASE
                                WHEN [colz].[is_identity] = 1
                                THEN ' IDENTITY(1,1)'
                                ELSE '              '
                                ----WHEN COLUMNPROPERTY ( @TABLE_ID , COLS.[name] , 'IsIdentity' ) = 1
                                ----THEN ' IDENTITY('
                                ----     + CONVERT(VARCHAR,ISNULL(IDENT_SEED('tempdb..' + @TBLNAME),1) )
                                ----     + ','
                                ----     + CONVERT(VARCHAR,ISNULL(IDENT_INCR('tempdb..' + @TBLNAME),1) )
                                ----     + ')'
                                ----ELSE '              '
                              END
                            + SPACE(2)
                            + CASE  WHEN [colz].[is_sparse] = 1 THEN ' sparse' ELSE '       ' END
                            + CASE
                                WHEN [colz].[is_nullable] = 0
                                THEN ' NOT NULL'
                                ELSE '     NULL'
                              END
               END
             + CASE
                 WHEN [colz].[default_object_id] = 0
                 THEN ''
                 ELSE ' DEFAULT '  + ISNULL([DEF].[definition] ,'')
                 --optional section in case NAMED default cosntraints are needed:
                 --ELSE ' CONSTRAINT [' + DEF.name + '] DEFAULT '+ REPLACE(REPLACE(ISNULL(DEF.[definition] ,''),'((','('),'))',')')
                        --i thought it needed to be handled differently! NOT!
               END  --CASE cdefault
      END --iscomputed
    + ','
    FROM [tempdb].[sys].[columns] AS [colz]
      LEFT OUTER JOIN  [tempdb].[sys].[default_constraints]  AS [DEF]
        ON [colz].[default_object_id] = [DEF].[object_id]
      LEFT OUTER JOIN [tempdb].[sys].[computed_columns] AS [CALC]
         ON  [colz].[object_id] = [CALC].[object_id]
         AND [colz].[column_id] = [CALC].[column_id]
    WHERE [colz].[object_id]=@TABLE_ID
    ORDER BY [colz].[column_id];
--##############################################################################
--used for formatting the rest of the constraints:
--##############################################################################
  SELECT
    @STRINGLEN = MAX(LEN([objz].[name])) + 1
  FROM [tempdb].[sys].[objects] AS [objz];
--##############################################################################
--PK/Unique Constraints and Indexes, using the 2005/08 INCLUDE syntax
--##############################################################################
  DECLARE @Results2  TABLE (
                    [SCHEMA_ID]             INT,
                    [SCHEMA_NAME]           VARCHAR(255),
                    [OBJECT_ID]             INT,
                    [OBJECT_NAME]           VARCHAR(255),
                    [index_id]              INT,
                    [index_name]            VARCHAR(255),
                    [ROWS]                  BIGINT,
                    [SizeMB]                DECIMAL(19,3),
                    [IndexDepth]            INT,
                    [TYPE]                  INT,
                    [type_desc]             VARCHAR(30),
                    [fill_factor]           INT,
                    [is_unique]             INT,
                    [is_primary_key]        INT ,
                    [is_unique_constraint]  INT,
                    [index_columns_key]     VARCHAR(MAX),
                    [index_columns_include] VARCHAR(MAX),
                    [has_filter] BIT ,
                    [filter_definition] VARCHAR(MAX),
                    [currentFilegroupName]  VARCHAR(128),
                    [CurrentCompression]    VARCHAR(128));
  INSERT INTO @Results2
    SELECT
      [SCH].[schema_id], [SCH].[name] AS [SCHEMA_NAME],
      [objz].[object_id], [objz].[name] AS [OBJECT_NAME],
      [IDX].[index_id], ISNULL([IDX].[name], '---') AS [index_name],
      [partitions].[ROWS], [partitions].[SizeMB], INDEXPROPERTY([objz].[object_id], [IDX].[name], 'IndexDepth') AS [IndexDepth],
      [IDX].[type], [IDX].[type_desc], [IDX].[fill_factor],
      [IDX].[is_unique], [IDX].[is_primary_key], [IDX].[is_unique_constraint],
      ISNULL([Index_Columns].[index_columns_key], '---') AS [index_columns_key],
      ISNULL([Index_Columns].[index_columns_include], '---') AS [index_columns_include],
      [IDX].[has_filter],
      [IDX].[filter_definition],
      [filz].[name],
      ISNULL([p].[data_compression_desc],'')
    FROM [tempdb].[sys].[objects] AS [objz]
      INNER JOIN [tempdb].[sys].[schemas] AS [SCH] ON [objz].[schema_id]=[SCH].[schema_id]
      INNER JOIN [tempdb].[sys].[indexes] AS [IDX] ON [objz].[object_id]=[IDX].[object_id]
      INNER JOIN [sys].[filegroups] AS [filz] ON [IDX].[data_space_id] = [filz].[data_space_id]
      INNER JOIN [sys].[partitions] AS [p]     ON  [IDX].[object_id] =  [p].[object_id]  AND [IDX].[index_id] = [p].[index_id]
      INNER JOIN (
                  SELECT
                    [statz].[object_id], [statz].[index_id], SUM([statz].[row_count]) AS [ROWS],
                    CONVERT(NUMERIC(19,3), CONVERT(NUMERIC(19,3), SUM([statz].[in_row_reserved_page_count]+[statz].[lob_reserved_page_count]+[statz].[row_overflow_reserved_page_count]))/CONVERT(NUMERIC(19,3), 128)) AS [SizeMB]
                  FROM [tempdb].[sys].[dm_db_partition_stats] AS [statz]
                  GROUP BY [statz].[object_id], [statz].[index_id]
                 ) AS [partitions] 
        ON  [IDX].[object_id]=[partitions].[object_id] 
        AND [IDX].[index_id]=[partitions].[index_id]
    CROSS APPLY (
                 SELECT
                   LEFT([Index_Columns].[index_columns_key], LEN([Index_Columns].[index_columns_key])-1) AS [index_columns_key],
                  LEFT([Index_Columns].[index_columns_include], LEN([Index_Columns].[index_columns_include])-1) AS [index_columns_include]
                 FROM
                      (
                       SELECT
                              (
                              SELECT QUOTENAME([colz].[name]) + CASE WHEN [IXCOLS].[is_descending_key] = 0 THEN ' asc' ELSE ' desc' END + ',' + ' '
                               FROM [tempdb].[sys].[index_columns] AS [IXCOLS]
                                 INNER JOIN [tempdb].[sys].[columns] AS [colz]
                                   ON  [IXCOLS].[column_id]   = [colz].[column_id]
                                   AND [IXCOLS].[object_id] = [colz].[object_id]
                               WHERE [IXCOLS].[is_included_column] = 0
                                 AND [IDX].[object_id] = [IXCOLS].[object_id] 
                                 AND [IDX].[index_id] = [IXCOLS].[index_id]
                               ORDER BY [IXCOLS].[key_ordinal]
                               FOR XML PATH('')
                              ) AS [index_columns_key],
                             (
                             SELECT QUOTENAME([colz].[name]) + ',' + ' '
                              FROM [tempdb].[sys].[index_columns] AS [IXCOLS]
                                INNER JOIN [tempdb].[sys].[columns] AS [colz]
                                  ON  [IXCOLS].[column_id]   = [colz].[column_id]
                                  AND [IXCOLS].[object_id] = [colz].[object_id]
                              WHERE [IXCOLS].[is_included_column] = 1
                                AND [IDX].[object_id] = [IXCOLS].[object_id] 
                                AND [IDX].[index_id] = [IXCOLS].[index_id]
                              ORDER BY [IXCOLS].[index_column_id]
                              FOR XML PATH('')
                             ) AS [index_columns_include]
                      ) AS [Index_Columns]
                ) AS [Index_Columns]
    WHERE [SCH].[name]  LIKE CASE 
                                     WHEN @SCHEMANAME = '' COLLATE SQL_Latin1_General_CP1_CI_AS
                                     THEN [SCH].[name] 
                                     ELSE @SCHEMANAME 
                                   END
    AND [objz].[name] LIKE CASE 
                                  WHEN @TBLNAME = ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                                  THEN [objz].[name] 
                                  ELSE @TBLNAME 
                                END
    ORDER BY 
      [SCH].[name], 
      [objz].[name], 
      [IDX].[name];
--@Results2 table has both PK,s Uniques and indexes in thme...pull them out for adding to funal results:
  SET @CONSTRAINTSQLS = '' COLLATE SQL_Latin1_General_CP1_CI_AS;
  SET @INDEXSQLS      = '' COLLATE SQL_Latin1_General_CP1_CI_AS;
--##############################################################################
--constraints
--##############################################################################
  SELECT @CONSTRAINTSQLS = @CONSTRAINTSQLS 
         + CASE
             WHEN [is_primary_key] = 1 OR [is_unique] = 1
             THEN @vbCrLf
                  + 'CONSTRAINT   '  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME([index_name]) + ' '
                  + SPACE(@STRINGLEN - LEN([index_name]))
                  + CASE  
                      WHEN [is_primary_key] = 1 
                      THEN ' PRIMARY KEY '  COLLATE SQL_Latin1_General_CP1_CI_AS
                      ELSE CASE  
                             WHEN [is_unique] = 1     
                             THEN ' UNIQUE      '     COLLATE SQL_Latin1_General_CP1_CI_AS  
                             ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                           END 
                    END
                  + [type_desc] 
                  + CASE 
                      WHEN [type_desc]='NONCLUSTERED' 
                      THEN ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                      ELSE '   ' 
                    END
                  + ' (' + [index_columns_key] + ')'
                  + CASE 
                      WHEN [index_columns_include] <> '---' 
                      THEN ' INCLUDE (' + [index_columns_include] + ')' 
                      ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                    END
                  + CASE
                      WHEN [has_filter] = 1 
                      THEN ' ' + [filter_definition]
                      ELSE ' '
                    END
                  + CASE WHEN [fill_factor] <> 0 OR [CurrentCompression] <> 'NONE'
                  THEN ' WITH (' + CASE
                                    WHEN [fill_factor] <> 0 
                                    THEN 'FILLFACTOR = ' + CONVERT(VARCHAR(30),[fill_factor]) 
                                    ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                                  END
                                + CASE
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression] <> 'NONE' THEN ',DATA_COMPRESSION = ' + [CurrentCompression] + ' '
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression]  = 'NONE' THEN ''
                                    WHEN [fill_factor]  = 0  AND [CurrentCompression] <> 'NONE' THEN 'DATA_COMPRESSION = ' + [CurrentCompression] + ' '
                                    ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                                  END
                                  + ')'
                  ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                  END 
             ELSE '' COLLATE SQL_Latin1_General_CP1_CI_AS
           END + ','
  FROM @Results2
  WHERE [type_desc] != 'HEAP'
    AND [is_primary_key] = 1 
    OR  [is_unique] = 1
  ORDER BY 
    [is_primary_key] DESC,
    [is_unique] DESC;
--##############################################################################
--indexes
--##############################################################################
  SELECT @INDEXSQLS = @INDEXSQLS 
         + CASE
             WHEN [is_primary_key] = 0 OR [is_unique] = 0
             THEN @vbCrLf
                  + 'CREATE '  COLLATE SQL_Latin1_General_CP1_CI_AS + [type_desc] + ' INDEX '  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME([index_name]) + ' ' COLLATE SQL_Latin1_General_CP1_CI_AS
                  + @vbCrLf
                  + '   ON '  COLLATE SQL_Latin1_General_CP1_CI_AS
                  + QUOTENAME([SCHEMA_NAME]) + '.' + QUOTENAME([OBJECT_NAME])
                  + CASE 
                        WHEN [CurrentCompression] = 'COLUMNSTORE'  COLLATE SQL_Latin1_General_CP1_CI_AS
                        THEN ' ('  COLLATE SQL_Latin1_General_CP1_CI_AS+ [index_columns_include] + ')'  COLLATE SQL_Latin1_General_CP1_CI_AS
                        ELSE ' ('  COLLATE SQL_Latin1_General_CP1_CI_AS+ [index_columns_key] + ')' COLLATE SQL_Latin1_General_CP1_CI_AS
                    END
                  + CASE 
                      WHEN [CurrentCompression] = 'COLUMNSTORE'  COLLATE SQL_Latin1_General_CP1_CI_AS
                      THEN ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                      ELSE
                        CASE
                     WHEN [index_columns_include] <> '---' 
                     THEN @vbCrLf + '   INCLUDE ('  COLLATE SQL_Latin1_General_CP1_CI_AS + [index_columns_include] + ')'  COLLATE SQL_Latin1_General_CP1_CI_AS 
                     ELSE ''   COLLATE SQL_Latin1_General_CP1_CI_AS
                   END
                    END
                  --2008 filtered indexes syntax
                  + CASE 
                      WHEN [has_filter] = 1 
                      THEN @vbCrLf + '   WHERE '  COLLATE SQL_Latin1_General_CP1_CI_AS + [filter_definition]
                      ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                    END
                  + CASE WHEN [fill_factor] <> 0 OR [CurrentCompression] <> 'NONE'  COLLATE SQL_Latin1_General_CP1_CI_AS
                  THEN ' WITH ('  COLLATE SQL_Latin1_General_CP1_CI_AS + CASE
                                    WHEN [fill_factor] <> 0 
                                    THEN 'FILLFACTOR = '  COLLATE SQL_Latin1_General_CP1_CI_AS + CONVERT(VARCHAR(30),[fill_factor]) 
                                    ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                                  END
                                + CASE
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression] <> 'NONE'  COLLATE SQL_Latin1_General_CP1_CI_AS THEN ',DATA_COMPRESSION = ' COLLATE SQL_Latin1_General_CP1_CI_AS + [CurrentCompression] + ' '
                                    WHEN [fill_factor] <> 0  AND [CurrentCompression]  = 'NONE'  COLLATE SQL_Latin1_General_CP1_CI_AS THEN ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                                    WHEN [fill_factor]  = 0  AND [CurrentCompression] <> 'NONE'  COLLATE SQL_Latin1_General_CP1_CI_AS THEN 'DATA_COMPRESSION = '  COLLATE SQL_Latin1_General_CP1_CI_AS+ [CurrentCompression] + ' '
                                    ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                                  END
                                  + ')' COLLATE SQL_Latin1_General_CP1_CI_AS
                  ELSE ''  COLLATE SQL_Latin1_General_CP1_CI_AS
                  END 
           END
  FROM @Results2
  WHERE [type_desc] != 'HEAP'
    AND [is_primary_key] = 0 
    AND [is_unique] = 0
  ORDER BY 
    [is_primary_key] DESC,
    [is_unique] DESC;
  IF @INDEXSQLS <> '' COLLATE SQL_Latin1_General_CP1_CI_AS
    SET @INDEXSQLS = @vbCrLf + 'GO'  COLLATE SQL_Latin1_General_CP1_CI_AS+ @vbCrLf + @INDEXSQLS;
--##############################################################################
--CHECK Constraints
--##############################################################################
  SET @CHECKCONSTSQLS = '';
  SELECT
    @CHECKCONSTSQLS = @CHECKCONSTSQLS
    + @vbCrLf
    + ISNULL('CONSTRAINT   ' + QUOTENAME([objz].[name]) + ' '
    + SPACE(@STRINGLEN - LEN([objz].[name]))
    + ' CHECK ' + ISNULL([CHECKS].[definition],'')
    + ',','')
  FROM [tempdb].[sys].[objects] AS [objz]
    INNER JOIN [tempdb].[sys].[check_constraints] AS [CHECKS] ON [objz].[object_id] = [CHECKS].[object_id]
  WHERE [objz].[type] = 'C'
    AND [objz].[parent_object_id] = @TABLE_ID;
--##############################################################################
--FOREIGN KEYS
--##############################################################################
  SET @FKSQLS = '' ;
    SELECT
    @FKSQLS=@FKSQLS
    + @vbCrLf + [MyAlias].[Command] FROM
(
SELECT
  DISTINCT
  --FK must be added AFTER the PK/unique constraints are added back.
  850 AS [ExecutionOrder],
  'CONSTRAINT ' 
  + QUOTENAME([conz].[name]) 
  + ' FOREIGN KEY (' 
  + [ChildCollection].[ChildColumns] 
  + ') REFERENCES ' 
  + QUOTENAME(SCHEMA_NAME([conz].[schema_id])) 
  + '.' 
  + QUOTENAME(OBJECT_NAME([conz].[referenced_object_id])) 
  + ' (' + [ParentCollection].[ParentColumns] 
  + ') ' 
   +  CASE [conz].[update_referential_action]
                                        WHEN 0 THEN '' --' ON UPDATE NO ACTION '
                                        WHEN 1 THEN ' ON UPDATE CASCADE '
                                        WHEN 2 THEN ' ON UPDATE SET NULL '
                                        ELSE ' ON UPDATE SET DEFAULT '
                                    END
                  + CASE [conz].[delete_referential_action]
                                        WHEN 0 THEN '' --' ON DELETE NO ACTION '
                                        WHEN 1 THEN ' ON DELETE CASCADE '
                                        WHEN 2 THEN ' ON DELETE SET NULL '
                                        ELSE ' ON DELETE SET DEFAULT '
                                    END
                  + CASE [conz].[is_not_for_replication]
                        WHEN 1 THEN ' NOT FOR REPLICATION '
                        ELSE ''
                    END
  + ',' AS [Command]
FROM   [sys].[foreign_keys] AS [conz]
       INNER JOIN [sys].[foreign_key_columns] AS [colz]
         ON [conz].[object_id] = [colz].[constraint_object_id]
      
       INNER JOIN (--gets my child tables column names   
SELECT
 [conz].[name],
 --technically, FK's can contain up to 16 columns, but real life is often a single column. coding here is for all columns
 [ChildColumns] = STUFF((SELECT 
                         ',' + QUOTENAME([REFZ].[name])
                       FROM   [sys].[foreign_key_columns] AS [fkcolz]
                              INNER JOIN [sys].[columns] AS [REFZ]
                                ON [fkcolz].[parent_object_id] = [REFZ].[object_id]
                                   AND [fkcolz].[parent_column_id] = [REFZ].[column_id]
                       WHERE [fkcolz].[parent_object_id] = [conz].[parent_object_id]
                           AND [fkcolz].[constraint_object_id] = [conz].[object_id]
                         ORDER  BY
                        [fkcolz].[constraint_column_id]
                       FOR XML PATH(''), TYPE).[value]('.','varchar(max)'),1,1,'')
FROM   [sys].[foreign_keys] AS [conz]
      INNER JOIN [sys].[foreign_key_columns] AS [colz]
        ON [conz].[object_id] = [colz].[constraint_object_id]
 WHERE [conz].[parent_object_id]= @TABLE_ID
GROUP  BY
[conz].[name],
[conz].[parent_object_id],--- without GROUP BY multiple rows are returned
 [conz].[object_id]
    ) AS [ChildCollection]
         ON [conz].[name] = [ChildCollection].[name]
       INNER JOIN (--gets the parent tables column names for the FK reference
                  SELECT
                     [conz].[name],
                     [ParentColumns] = STUFF((SELECT
                                              ',' + [REFZ].[name]
                                            FROM   [sys].[foreign_key_columns] AS [fkcolz]
                                                   INNER JOIN [sys].[columns] AS [REFZ]
                                                     ON [fkcolz].[referenced_object_id] = [REFZ].[object_id]
                                                        AND [fkcolz].[referenced_column_id] = [REFZ].[column_id]
                                            WHERE  [fkcolz].[referenced_object_id] = [conz].[referenced_object_id]
                                              AND [fkcolz].[constraint_object_id] = [conz].[object_id]
                                            ORDER BY [fkcolz].[constraint_column_id]
                                            FOR XML PATH(''), TYPE).[value]('.','varchar(max)'),1,1,'')
                   FROM   [sys].[foreign_keys] AS [conz]
                          INNER JOIN [sys].[foreign_key_columns] AS [colz]
                            ON [conz].[object_id] = [colz].[constraint_object_id]
                           -- AND colz.parent_column_id 
                   GROUP  BY
                    [conz].[name],
                    [conz].[referenced_object_id],--- without GROUP BY multiple rows are returned
                    [conz].[object_id]
                  ) AS [ParentCollection]
         ON [conz].[name] = [ParentCollection].[name]
)AS [MyAlias];
--##############################################################################
--RULES
--##############################################################################
  SET @RULESCONSTSQLS = ''  COLLATE SQL_Latin1_General_CP1_CI_AS;
  SELECT
    @RULESCONSTSQLS = @RULESCONSTSQLS
    + ISNULL(
             @vbCrLf
             + 'if not exists(SELECT [name] FROM tempdb.sys.objects WHERE TYPE=''R'' AND schema_id = '  COLLATE SQL_Latin1_General_CP1_CI_AS 
             + CONVERT(VARCHAR(30),[objz].[schema_id]) 
             + ' AND [name] = '''  COLLATE SQL_Latin1_General_CP1_CI_AS
             + QUOTENAME(OBJECT_NAME([colz].[rule_object_id])) 
             + ''')'  COLLATE SQL_Latin1_General_CP1_CI_AS
             + @vbCrLf
             + [MODS].[definition]  + @vbCrLf 
             + 'GO'  COLLATE SQL_Latin1_General_CP1_CI_AS +  @vbCrLf
             + 'EXEC sp_binderule  '  COLLATE SQL_Latin1_General_CP1_CI_AS
             + QUOTENAME([objz].[name]) 
             + ', '''  COLLATE SQL_Latin1_General_CP1_CI_AS 
             + QUOTENAME(OBJECT_NAME([colz].[object_id])) 
             + '.'  COLLATE SQL_Latin1_General_CP1_CI_AS + QUOTENAME([colz].[name]) 
             + ''''  COLLATE SQL_Latin1_General_CP1_CI_AS
             + @vbCrLf 
             + 'GO' ,''  COLLATE SQL_Latin1_General_CP1_CI_AS)
  FROM [tempdb].[sys].[columns] [colz] 
    INNER JOIN [tempdb].[sys].[objects] [objz]
      ON [objz].[object_id] = [colz].[object_id]
    INNER JOIN [tempdb].[sys].[sql_modules] AS [MODS]
      ON [colz].[rule_object_id] = [MODS].[object_id]
  WHERE [colz].[rule_object_id] <> 0
    AND [colz].[object_id] = @TABLE_ID;
--##############################################################################
--TRIGGERS
--##############################################################################
  SET @TRIGGERSTATEMENT = '';
  SELECT
    @TRIGGERSTATEMENT = @TRIGGERSTATEMENT +  @vbCrLf + [MODS].[definition] + @vbCrLf + 'GO'
  FROM [tempdb].[sys].[sql_modules] AS [MODS]
  WHERE [MODS].[object_id] IN(SELECT
                         [objz].[object_id]
                       FROM [tempdb].[sys].[objects] AS [objz]
                       WHERE [objz].[type] = 'TR'
                       AND [objz].[parent_object_id] = @TABLE_ID);
  IF @TRIGGERSTATEMENT <> ''  COLLATE SQL_Latin1_General_CP1_CI_AS
    SET @TRIGGERSTATEMENT = @vbCrLf + 'GO'  COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf + @TRIGGERSTATEMENT;
--##############################################################################
--NEW SECTION QUERY ALL EXTENDED PROPERTIES
--##############################################################################
  SET @EXTENDEDPROPERTIES = ''  COLLATE SQL_Latin1_General_CP1_CI_AS;
  SELECT  @EXTENDEDPROPERTIES =
          @EXTENDEDPROPERTIES + @vbCrLf +
         'EXEC tempdb.sys.sp_addextendedproperty
          @name = N'''  COLLATE SQL_Latin1_General_CP1_CI_AS
          + [name] 
          + ''', @value = N'''  COLLATE SQL_Latin1_General_CP1_CI_AS
          + REPLACE(CONVERT(VARCHAR(MAX),[value]),'''','''''') + ''',
          @level0type = N''SCHEMA'', @level0name = '  COLLATE SQL_Latin1_General_CP1_CI_AS
          + QUOTENAME(@SCHEMANAME + ',
          @level1type = N''TABLE'', @level1name = ['  COLLATE SQL_Latin1_General_CP1_CI_AS
          + @TBLNAME) 
          + '];' COLLATE SQL_Latin1_General_CP1_CI_AS
 --SELECT objtype, objname, name, value
  FROM [sys].[fn_listextendedproperty] (NULL, 'schema', @SCHEMANAME, 'table', @TBLNAME, NULL, NULL);
  --OMacoder suggestion for column extended properties http://www.sqlservercentral.com/Forums/FindPost1651606.aspx
  SELECT @EXTENDEDPROPERTIES =
         @EXTENDEDPROPERTIES + @vbCrLf +
         'EXEC sys.sp_addextendedproperty
         @name = N'''  COLLATE SQL_Latin1_General_CP1_CI_AS
         + [name] 
         + ''', @value = N'''  COLLATE SQL_Latin1_General_CP1_CI_AS
         + REPLACE(CONVERT(VARCHAR(MAX),[value]),'''','''''') 
         + ''',
         @level0type = N''SCHEMA'', @level0name = '  COLLATE SQL_Latin1_General_CP1_CI_AS
         + QUOTENAME(@SCHEMANAME) + ',
         @level1type = N''TABLE'', @level1name = '  COLLATE SQL_Latin1_General_CP1_CI_AS
         + QUOTENAME(@TBLNAME) + ',
         @level2type = N''COLUMN'', @level2name = '  COLLATE SQL_Latin1_General_CP1_CI_AS
         + QUOTENAME([objname]) + ';' COLLATE SQL_Latin1_General_CP1_CI_AS
  --SELECT objtype, objname, name, value
  FROM [sys].[fn_listextendedproperty] (NULL, 'schema', @SCHEMANAME, 'table', @TBLNAME, 'column', NULL);
  IF @EXTENDEDPROPERTIES <> '' COLLATE SQL_Latin1_General_CP1_CI_AS
    SET @EXTENDEDPROPERTIES = @vbCrLf + 'GO' COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf + @EXTENDEDPROPERTIES;
--##############################################################################
--FINAL CLEANUP AND PRESENTATION
--##############################################################################
--at this point, there is a trailing comma, or it blank
  SELECT
    @FINALSQL = @FINALSQL
                + @CONSTRAINTSQLS
                + @CHECKCONSTSQLS
                + @FKSQLS;
--note that this trims the trailing comma from the end of the statements
  SET @FINALSQL = SUBSTRING(@FINALSQL,1,LEN(@FINALSQL) -1) ;
  SET @FINALSQL = @FINALSQL + ')'  COLLATE SQL_Latin1_General_CP1_CI_AS + @vbCrLf ;
  SET @input = @vbCrLf
       + @FINALSQL
       + @INDEXSQLS
       + @RULESCONSTSQLS
       + @TRIGGERSTATEMENT
       + @EXTENDEDPROPERTIES;
  SELECT @input AS [Item];
         
  RETURN 0;     
END; --PROC
GO
--#################################################################################################
--Mark as a system object
EXECUTE [sys].[sp_MS_marksystemobject] 'sp_GetDDL';
GRANT EXECUTE ON [dbo].[sp_GetDDL] TO PUBLIC;
--#################################################################################################
GO
	
	*/
END;

```    
			
---   
			### SP SpOperationDBBackup     

```sql   
			

CREATE procedure [dbo].[SpOperationDBBackup]
AS
BEGIN 
	DECLARE @dbName as varchar(255) = DB_NAME();
	DECLARE @fileName as varchar(1024) = CONCAT('C:\Database\',@dbName,'_',FORMAT(GETDATE(),'yyyyMMdd'),'.bak');

	DBCC SHRINKFILE (2, 1); BACKUP DATABASE @dbName TO DISK = @fileName;
	DBCC SHRINKFILE (2, 1); BACKUP DATABASE @dbName TO DISK = @fileName;
END;


--PATH ON LINUX:  '/var/backups/DBbackup/hotels.bak'
```    
			
---   
			### SP SpOperationAutoUpdateDbTemplateDoc     

```sql   
			
CREATE procedure [dbo].[SpOperationAutoUpdateDbTemplateDoc] --(@result varchar(255) OUTPUT) --string otput
AS
BEGIN 

	-- TYPES P=SQL_STORED_PROCEDURE, TR=TRIGGER, IF=FUNCTION, V=VIEW

	--CLEAN OLD DEFINITIONS
	DELETE FROM [dbo].[DocSrvDocTemplateList] WHERE CONVERT(varchar(MAX),[Description]) IN ('SQL_STORED_PROCEDURE','SQL_TRIGGER','VIEW','SQL_INLINE_TABLE_VALUED_FUNCTION','SQL_SCALAR_FUNCTION');
	DELETE FROM [dbo].[DocSrvDocTemplateList] WHERE CONVERT(varchar(MAX),[Description]) IN ('TABLE');

	--INSERT ALL OTHER DEFINITIONS
	INSERT INTO [dbo].[DocSrvDocTemplateList] ([GroupId],[InheritedCodeType],[Sequence],[Name],[Description],[Template],[UserId])
	SELECT 8,'MSSQL',2000, 
		CASE SO.[type] COLLATE DATABASE_DEFAULT
		 WHEN 'P' THEN CONCAT('SP ',SO.[name] COLLATE DATABASE_DEFAULT)
		 WHEN 'TR' THEN CONCAT('TR ',SO.[name] COLLATE DATABASE_DEFAULT)
		 WHEN 'IF' THEN CONCAT('FN ',SO.[name] COLLATE DATABASE_DEFAULT)
		 WHEN 'V' THEN CONCAT('VIEW ',SO.[name] COLLATE DATABASE_DEFAULT)
		 ELSE  CONCAT(SO.[type],SO.[name] COLLATE DATABASE_DEFAULT)
		 END AS [Name],
	SO.[type_desc] COLLATE DATABASE_DEFAULT, SM.[definition] COLLATE DATABASE_DEFAULT,1
	FROM sys.sql_modules SM INNER JOIN sys.Objects SO ON SM.Object_id = SO.Object_id ;


	-- INSERTING TABLE DEFINITIONS PART
	DECLARE @RowCnt int; SET @RowCnt = 0;
	DECLARE @TableName NVarChar(250);DECLARE @TableDefinition NVarChar(MAX);
	DECLARE @TableList TABLE (RowNum int IDENTITY (1, 1) Primary key NOT NULL,[TableName] nvarchar(250) NOT NULL);
	DECLARE @TableDefinitionList TABLE (RowNum int IDENTITY (1, 1) Primary key NOT NULL, [Template] text NULL);

	INSERT INTO @TableList ([TableName]) EXEC [dbo].SystemSpGetTableList;
	
	WHILE @RowCnt <= (SELECT COUNT([RowNum]) FROM @tableList)
	BEGIN
		SET @RowCnt = @RowCnt + 1;
		SELECT @TableName = [TableName] FROM @TableList WHERE [RowNum] = @RowCnt;

		INSERT INTO @TableDefinitionList([Template]) EXEC sp_GetDDL @TableName;
	END
	
	--INSERT TABLE DEFINITIONS
	INSERT INTO [dbo].[DocSrvDocTemplateList] ([GroupId],[InheritedCodeType],[Sequence],[Name],[Description],[Template],[UserId])
	SELECT 8,'MSSQL',1000,CONCAT('TBL ',tl.[TableName]),'TABLE',tdl.[Template],1 FROM @TableList tl LEFT JOIN @TableDefinitionList tdl ON tl.RowNum = tdl.RowNum;

	SELECT 'Update Templates in Doc Completed' as 'MessageList';
END;

```    
			
---   
			### SP SystemSpGetTableList     

```sql   
			




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

```    
			
---   
			### SP DB_HELP_INFO     

```sql   
			



CREATE procedure [dbo].[DB_HELP_INFO](@itemId int, @count int, @userId int)
AS
BEGIN 
	SET NOCOUNT ON;
	BEGIN TRAN
		BEGIN TRY

		--GET ALL INFO AOUT TABLES
		--sp_help '[dbo].[BusinessBranchList]'

		--REPAIR Id blocked by FOREIGN Key
		--DELETE FROM [GLOBAL].[dbo].[AddressList]
		--DBCC CHECKIDENT ([AddressList], RESEED, 0)

		--INSERT first ID
		--INSERT INTO AddressList(AddressType, CompanyName, ContactName, Street, City, PostCode, Phone, Email, BankAccount, Ico, Dic, UserId, Active)
		--VALUES ('all', 'KlikneteZde.Cz', 'Libor Svoboda', 'Žlutava 173', 'Žlutava', '763 61', '00420 724986873', '', '', '', '', 1, 1)
		--INSERT INTO AddressList(AddressType, CompanyName, ContactName, Street, City, PostCode, Phone, Email, BankAccount, Ico, Dic, UserId, Active)
		--VALUES        ('all', 'GroupWare-Solution.Eu', 'Libor Svoboda', 'Žlutava 173', 'Žlutava', '763 61', '00420 724986873', '', '', '', '', 1, 1)
		
		-- CLONE TABLE with DATA WITHOUT KEYS AND INDEXES
		--SELECT * INTO [GLOBAL].[dbo].[ItemList] FROM [SHOPINGER].[dbo].[ItemList]

		--COPY DATA FTOM TABLE TO ANOTHER TABLE
		--INSERT INTO [dbo].[ServerDynamicApiSecurityList] (
		--[InheritedApiType], [Name], [Description], [UrlSubPath], [AllowedRoles],
		--[RestrictedAccess], [RedirectPathOnError], [Active], [UserId]
		--) SELECT 
		--[InheritedPageType],
		--[Name],[Description],[UrlSubPath],[AllowedRoles],[RestrictedAccess],[RedirectPathOnError],[Active],[UserId]
		--DELETE FROM [dbo].[ServerModuleAndServiceList] 
		--Where InheritedPageType = 'ServerApi'


		--CLONE TABLE
		--DBCC CLONEDATABASE (source_database_name, target_database_name)[WITH [NO_STATISTICS][,NO_QUERYSTORE]] 

		----BACKUP
		--USE[SHOPINGER]
		--DROP USER [shopinger];
		--DBCC SHRINKFILE (SHOPINGER_log, 1);
		--BACKUP DATABASE [SHOPINGER] TO DISK = N'C:\Database\SHOPINGER.bak'
		--DBCC SHRINKFILE (SHOPINGER_log, 1);
		--BACKUP DATABASE [SHOPINGER] TO DISK = N'C:\Database\SHOPINGER.bak'
		--GO

		--USE [SHOPINGER]
		--BEGIN TRY CREATE USER [shopinger] FOR LOGIN [shopinger] END TRY BEGIN CATCH END CATCH;
		--BEGIN TRY ALTER ROLE [db_datareader] ADD MEMBER [shopinger]; END TRY BEGIN CATCH END CATCH;


		----RESTORE TO NEW FILES
		--ALTER DATABASE [SHOPINGER] SET SINGLE_USER WITH ROLLBACK IMMEDIATE
		--RESTORE DATABASE [SHOPINGER] FROM DISK = N'C:\Database\SHOPINGER.bak' 
		--WITH MOVE N'SHOPINGER' TO N'C:\Database\SHOPINGER.mdf',  
		--     MOVE N'SHOPINGER_log' TO N'C:\Database\SHOPINGER_log.ldf', FILE = 2,
		--RECOVERY,  REPLACE,  STATS = 10;
		--ALTER DATABASE [SHOPINGER] SET MULTI_USER;

		--COPY DATA FROM TABLE TO TABLE
		--INSERT INTO newTable
		--SELECT * FROM oldTable

		-- Shadow Copy original table to create new with data NEW: ProdGuidGroupList   , original :GroupList
		--SELECT * INTO [EASYDATACenter].[dbo].[ProdGuidGroupList1] FROM [VYKONY].dbo.GroupList

		COMMIT TRANSACTION
        END TRY
        BEGIN CATCH
              ROLLBACK TRANSACTION
        END CATCH
END;

```    
			
---   
			### SP SpOperationFillTranslationTableList     

```sql   
			



CREATE procedure [dbo].[SpOperationFillTranslationTableList]
AS
BEGIN 

DECLARE @tableList TABLE (RowID int not null identity(1,1) primary key,[TableName] nvarchar(250) NOT NULL);
DECLARE @columnList TABLE ([ColumnName] nvarchar(250) NOT NULL);
DECLARE @resultList TABLE ([SystemName] nvarchar(50) NOT NULL);

	--GET ALL TABLES
	INSERT INTO @tableList ([TableName])
	SELECT TABLE_NAME as 'TableList'
	FROM INFORMATION_SCHEMA.TABLES
	WHERE table_type = 'BASE TABLE'

	UNION 

	--GET ALL VIEWS
	SELECT 
	  TABLE_NAME as 'TableList'
	FROM INFORMATION_SCHEMA.VIEWS;

	--START Save For Result
	INSERT INTO @resultList ( [SystemName])
	SELECT LOWER(LEFT(T1.[TableName],1))+SUBSTRING(T1.[TableName],2,LEN(T1.[TableName])) FROM @tableList T1
	where NOT EXISTS (SELECT 1 FROM [dbo].[SystemTranslationList] T2 where T2.[SystemName] = T1.TableName);
	--END Save For Result

	INSERT INTO [dbo].[SystemTranslationList] ( [SystemName],[UserId])
	SELECT LOWER(LEFT(T1.[TableName],1))+SUBSTRING(T1.[TableName],2,LEN(T1.[TableName])),1 FROM @tableList T1
	where NOT EXISTS (SELECT 1 FROM [dbo].[SystemTranslationList] T2 where T2.[SystemName] = T1.TableName);

	declare @i int;declare @max int;
	select @i = min(RowID) from @tableList;
	select @max = max(RowID) from @tableList;
	DECLARE @columnName varchar(255);
	
	WHILE @i <= @max BEGIN

		SELECT @columnName = [TableName] FROM @tableList where RowID = @i;

		INSERT INTO @columnList ([ColumnName])
		SELECT COLUMN_NAME
		FROM INFORMATION_SCHEMA.COLUMNS T1
		WHERE TABLE_NAME = @columnName;

		SET @i = @i + 1
	END

	--START Save For Result
	INSERT INTO @resultList ( [SystemName])
	SELECT DISTINCT LOWER(LEFT(T1.[ColumnName],1))+SUBSTRING(T1.[ColumnName],2,LEN(T1.[ColumnName])) FROM @columnList T1
	WHERE NOT EXISTS (SELECT 1 FROM [dbo].[SystemTranslationList] T2 WHERE T2.[SystemName] = T1.[ColumnName]);
	--END Save For Result

	INSERT INTO [dbo].[SystemTranslationList] ( [SystemName],[UserId])
	SELECT DISTINCT LOWER(LEFT(T1.[ColumnName],1))+SUBSTRING(T1.[ColumnName],2,LEN(T1.[ColumnName])),1 FROM @columnList T1
	WHERE NOT EXISTS (SELECT 1 FROM [dbo].[SystemTranslationList] T2 WHERE T2.[SystemName] = T1.[ColumnName]);

	--Copy Translation from xxxListPage to xxxList
	UPDATE TargetTbl
	SET
		TargetTbl.DescriptionCz = SourceTbl.DescriptionCz,
		TargetTbl.DescriptionEn = SourceTbl.DescriptionEn
	FROM
		[dbo].[SystemTranslationList] AS TargetTbl
		INNER JOIN [dbo].[SystemTranslationList] AS SourceTbl
			ON SourceTbl.SystemName = CONCAT(TargetTbl.SystemName,'Page')
	WHERE
		LEN(TargetTbl.DescriptionCz) = 0 AND
		SourceTbl.SystemName LIKE '%ListPage'

	--Return List Of New Translation Words
	--SELECT * FROM @resultList;
	SELECT 'Update TranslationList From DB Schema is Completed' as 'MessageList';
END;

```    
			
---   
			### SP SpShowDBProcedureList     

```sql   
			





CREATE procedure [dbo].[SpShowDBProcedureList]
AS
BEGIN 
	SELECT SO.[type_desc], SO.[name], SM.[definition],SO.create_date,SO.modify_date 
	FROM sys.sql_modules SM INNER JOIN sys.Objects SO ON SM.Object_id = SO.Object_id 
	--WHERE SO.[type_desc] = 'SP'
	ORDER BY SO.[type_desc], SO.[name];
	;
END;


```    
			
---   
			### SP SpImportSvgIcon     

```sql   
			CREATE PROCEDURE [dbo].[SpImportSvgIcon] (
     @IconName NVARCHAR (100)
   , @ImageFullPath NVARCHAR (1000)
   )
AS
BEGIN
   DECLARE @tsql NVARCHAR (2000);
   SET NOCOUNT ON

   SET @tsql = 'INSERT INTO SystemSvgIconList ([Name],[UserId], [SvgIconPath]) ' +
               ' SELECT ' + '''' + @IconName + '''' + ',1, * ' + 
               'FROM Openrowset( Bulk ' + '''' + @ImageFullPath + '''' + ', Single_Blob) as img'
   EXEC (@tsql)
   SET NOCOUNT OFF
END

```    
			
---   
			### SP SpProvider_SendSqlScript     

```sql   
			

-- Its Procedure From Provider To Customer
-- @TargetLinkedDb  must be In Format: 95.183.52.33 or 95.183.52.33,1433 or SNRJDI\SLAMANAGEMENT

CREATE procedure [dbo].[SpProvider_SendSqlScript](@TargetIp varchar(255),@TargetDBName varchar(255),
@UserName varchar(255),@Password varchar(255),@TableName varchar(255)
)
AS
BEGIN 
	DECLARE @result as varchar(max);SET @result = 'Distribution SQLScript: ' + CHAR(13)+CHAR(10);
	DECLARE @stepNo as int = 0;DECLARE @SqlScript as VARCHAR(MAX) ='';

	

	SET @result +=CAST(@stepNo AS VARCHAR(10)) + ' Start Setting Linked Server' + CHAR(13)+CHAR(10);
	BEGIN TRY 
		BEGIN TRY EXEC sp_addlinkedserver @server = @TargetIp, @srvproduct=N'SQL Server'; END TRY BEGIN CATCH END CATCH;
		--EXEC sp_addlinkedserver @server = @TargetIp, @srvproduct=N'SQL Server', @provider=N'SQLNCLI';
		
		EXEC master.dbo.sp_addlinkedsrvlogin @rmtsrvname = @TargetIp, @locallogin=N'easyitcenter', @useself=N'True', @rmtuser=NULL, @rmtpassword=NULL;
		EXEC master.dbo.sp_addlinkedsrvlogin @rmtsrvname = @TargetIp, @locallogin = NULL , @useself = N'False', @rmtuser = N'sa', @rmtpassword = N'Hotel2023+'
		SET @result +=CAST(@stepNo AS VARCHAR(10))  + ' Setting Linked Server OK' + CHAR(13)+CHAR(10);
	END TRY
	BEGIN CATCH SELECT @result += CONCAT(CAST(@stepNo AS VARCHAR(10)) + ' Error No: ',ERROR_NUMBER(),' = Process Jumped',CHAR(13)+CHAR(10), ERROR_MESSAGE(),CHAR(13)+CHAR(10)+CHAR(13)+CHAR(10)); END CATCH;
	SET @stepNo += 10;





	SET @result += CAST(@stepNo AS VARCHAR(10)) + ' Start Preparing Script' + CHAR(13)+CHAR(10);
	BEGIN TRY 
		DECLARE @TableDefinitionList TABLE (RowNum int IDENTITY (1, 1) Primary key NOT NULL, [Template] text NULL);
		INSERT INTO @TableDefinitionList([Template]) EXEC sp_GetDDL @TableName;
		SELECT @SqlScript = [Template] FROM @TableDefinitionList WHERE RowNum = 1;

			SET @SqlScript = REPLACE(@SqlScript,'','''');
			SET @SqlScript = REPLACE(@SqlScript,' GO','');

		SET @result += CAST(@stepNo AS VARCHAR(10))  + '  Preparing Script OK' + CHAR(13)+CHAR(10);
	END TRY
	BEGIN CATCH SELECT @result += CONCAT(CAST(@stepNo AS VARCHAR(10)) + ' Error No: ',ERROR_NUMBER(),' = Process Jumped',CHAR(13)+CHAR(10), ERROR_MESSAGE(),CHAR(13)+CHAR(10)+CHAR(13)+CHAR(10)); END CATCH;
	SET @stepNo += 10;








	SET @result +=CAST(@stepNo AS VARCHAR(10)) + ' Start Executing Script' + CHAR(13)+CHAR(10);
	BEGIN TRY 
		DECLARE @TablePart AS VARCHAR(MAX) ='';
		DECLARE @TriggerPart AS VARCHAR(MAX) ='';

		PRINT @SqlScript;
		SELECT @TablePart = SUBSTRING(@SqlScript,0,CHARINDEX('TRIGGER',@SqlScript,0)), @TriggerPart = SUBSTRING(@SqlScript,CHARINDEX('TRIGGER',@SqlScript,0)+1,LEN(@SqlScript));
		EXEC (@TablePart);
		EXEC (@TriggerPart);

		SET @result +=CAST(@stepNo AS VARCHAR(10)) + ' Executing Script OK' + CHAR(13)+CHAR(10);
	END TRY
	BEGIN CATCH SELECT @result += CONCAT(CAST(@stepNo AS VARCHAR(10)) + ' Error No: ',ERROR_NUMBER(),' = Process Jumped',CHAR(13)+CHAR(10), ERROR_MESSAGE(),CHAR(13)+CHAR(10)+CHAR(13)+CHAR(10)); END CATCH;
	SET @stepNo += 10;



	SET @result +=CAST(@stepNo AS VARCHAR(10)) + ' Process Done' + CHAR(13)+CHAR(10);
	SELECT @result as 'MessageList';
END;


PRINT CONCAT('SQL Distribution Script Result: ', CHAR(13)+CHAR(10),@result);-- as 'MessageList';

```    
			
---   
			### SP SpOperationRunSqlScript     

```sql   
			
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

```    
			
---   
			### SP SpOperationAutoGenDescToDocs     

```sql   
			

CREATE procedure [dbo].[SpOperationAutoGenDescToDocs]
AS
BEGIN 
	DECLARE @Error VarChar(MAX);
	DECLARE @RazorPortal VarChar(MAX);
	DECLARE @PreparedNewsList VarChar(MAX); DECLARE @ProcessingTaskList VarChar(MAX); DECLARE @ChangeLogList VarChar(MAX);

	DECLARE @GroupId Int;DECLARE @Name VarChar(50);DECLARE @Description VarChar(Max);DECLARE @Template VarChar(Max);

	DECLARE @PrewTargetType VarChar(150);DECLARE @TargetType VarChar(150); DECLARE @StatusType VarChar(150);  DECLARE @Value VarChar(150); 
	DECLARE @Request VarChar(MAX); DECLARE @Documentation VarChar(MAX); DECLARE @Image VarBinary(Max);
	
	--Generate RazorPortalAutoDoc
	BEGIN TRY  
		DECLARE db_cursor1 CURSOR LOCAL FOR SELECT dtl.[GroupId],dtl.[Name],dtl.[Description],dtl.[Template] FROM [dbo].[DocSrvDocTemplateList] dtl WHERE dtl.Name LIKE '%cshtml%'
		
		SET @RazorPortal = char(13) + '# Úplný kód MVC Razor Portálu CSHTML,   ' + char(13) + char(13) + 's JS,Metro4, nutný Build,Vývoj 1 Měsíc, nyní se již nepoužívá   ' + char(13) + char(13) + char(13);
		OPEN db_cursor1;
		FETCH NEXT FROM db_cursor1 INTO @GroupId, @Name, @Description, @Template;
		
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			SET @RazorPortal += '### ' + @Name + '     
' + char(13) + char(13) + '
```http   
			' + char(13) + @Template + char(13) + '
```    
			' + char(13) + '
---   
			' + char(13)  + char(13);

			FETCH NEXT FROM db_cursor1 INTO @GroupId, @Name, @Description, @Template;
		END;
		CLOSE db_cursor1;
		DEALLOCATE db_cursor1;

		--SAVE RazorPortalAutoDoc
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(@GroupId,'Zrušený MVC Web Portal CsHtml','Je možné Vytěžit Generátory kódu a Objekty Metro4',100,@RazorPortal,@RazorPortal,1,1,1);

	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('RazorPortalAutoDoc',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH;


	--Generate XamlAutoDoc
	BEGIN TRY  
		DECLARE db_cursor2 CURSOR LOCAL FOR SELECT dtl.[GroupId],dtl.[Name],dtl.[Description],dtl.[Template] FROM [dbo].[DocSrvDocTemplateList] dtl WHERE dtl.Name LIKE '%XAML%'
		
		SET @RazorPortal = char(13) + '# ESB -WPF XAML Šablony,   
' + char(13) + char(13) + '
Standardní I mediální šablony pro Vývoj Systému   ' + char(13) + char(13) + char(13);
		OPEN db_cursor2;
		FETCH NEXT FROM db_cursor2 INTO @GroupId, @Name, @Description, @Template;
		
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			SET @RazorPortal += '### ' + @Name + '     
			' + char(13) + char(13) + '
```xml   
			' + char(13) + @Template + char(13) + '
```    
			' + char(13) + '
---   
			' + char(13)  + char(13);

			FETCH NEXT FROM db_cursor2 INTO @GroupId, @Name, @Description, @Template;
		END;
		CLOSE db_cursor2;
		DEALLOCATE db_cursor2;

		--SAVE XAMLTemplatesAutoDoc
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(@GroupId,'XAML Šablony Systému','Těchto pár Šablon Stačí na tvorbu Multimediálního Systému',300,@RazorPortal,@RazorPortal,1,1,1);

	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('XAMLTemplatesAutoDoc',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH;

	--Generate C#APIAutoDoc
	BEGIN TRY  
		DECLARE db_cursor3 CURSOR LOCAL FOR SELECT dtl.[GroupId],dtl.[Name],dtl.[Description],dtl.[Template] FROM [dbo].[DocSrvDocTemplateList] dtl WHERE dtl.Name LIKE '%C# API%'
		
		SET @RazorPortal = char(13) + '# EIC- C# API Šablony,   
' + char(13) + char(13) + 'Standardní C# API pro Vývoj Babkend APi Služeb   
' + char(13) + char(13) + char(13);
		OPEN db_cursor3;
		FETCH NEXT FROM db_cursor3 INTO @GroupId, @Name, @Description, @Template;
		
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			SET @RazorPortal += '### ' + @Name + '     
' + char(13) + char(13) + '
```csharp   
			' + char(13) + @Template + char(13) + '
```    
			' + char(13) + '
---   
			' + char(13)  + char(13);

			FETCH NEXT FROM db_cursor3 INTO @GroupId, @Name, @Description, @Template;
		END;
		CLOSE db_cursor3;
		DEALLOCATE db_cursor3;

		--SAVE C#APITemplatesAutoDoc
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(@GroupId,'API Šablony Systému','Těchto pár Šablon Stačí na tvorbu Libovolného Backend Serveru',300,@RazorPortal,@RazorPortal,1,1,1);

	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('APITemplatesAutoDoc',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH;

	--Generate DBTablesAutoDoc
	BEGIN TRY  
		DECLARE db_cursor4 CURSOR LOCAL FOR SELECT dtl.[GroupId],dtl.[Name],dtl.[Description],dtl.[Template] FROM [dbo].[DocSrvDocTemplateList] dtl WHERE dtl.[Description] LIKE 'TABLE';
		
		SET @RazorPortal = char(13) + '# DB - Export Tabulek Řešení,   
' + char(13) + char(13) + 'Zde najdete Všechny Tabulky Řešení, Struktura má Centrální Logiku, která zamezuje vzniku chyb    
' + char(13) + char(13) + char(13);
		OPEN db_cursor4;
		FETCH NEXT FROM db_cursor4 INTO @GroupId, @Name, @Description, @Template;
		
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			SET @RazorPortal += '### ' + @Name + '     
' + char(13) + '
```sql   
			' + char(13) + @Template + char(13) + '
```    
			' + char(13) + '
---   
			' + char(13)  + char(13);

			FETCH NEXT FROM db_cursor4 INTO @GroupId, @Name, @Description, @Template;
		END;
		CLOSE db_cursor4;
		DEALLOCATE db_cursor4;

		--SAVE DBTablesAutoDoc
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(@GroupId,'DB Tabulky Řešení','Struktura Tabulek te stále Téměř totožná, Pár Pravidel stačí k vytvoření dokonalého Systému',100,@RazorPortal,@RazorPortal,1,1,1);

	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('DBTablesAutoDoc',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH;

	--Generate DBProceduresAutoDoc
	BEGIN TRY  
		DECLARE db_cursor5 CURSOR LOCAL FOR SELECT dtl.[GroupId],dtl.[Name],dtl.[Description],dtl.[Template] FROM [dbo].[DocSrvDocTemplateList] dtl WHERE dtl.[Description] LIKE 'SQL_STORED_PROCEDURE';
		
		SET @RazorPortal = char(13) + '# DB - Export Procedur Řešení,   
' + char(13) + char(13) + 'Zde procedury pro automatizaci, Hromadné Operace, Správu DB    
' + char(13) + char(13) + char(13);
		OPEN db_cursor5;
		FETCH NEXT FROM db_cursor5 INTO @GroupId, @Name, @Description, @Template;
		
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			SET @RazorPortal += '### ' + @Name + '     
' + char(13) + '
```sql   
			' + char(13) + @Template + char(13) + '
```    
			' + char(13) + '
---   
			' + char(13)  + char(13);

			FETCH NEXT FROM db_cursor5 INTO @GroupId, @Name, @Description, @Template;
		END;
		CLOSE db_cursor5;
		DEALLOCATE db_cursor5;

		--SAVE DBProceduresAutoDoc
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(@GroupId,'DB Procedury Řešení','Vytvořené procedury pro automatizaci, Hromadné Operace, Správu DB',200,@RazorPortal,@RazorPortal,1,1,1);

	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('DBProceduresAutoDoc',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH;


	
	--Generate DBTriggersAutoDoc
	BEGIN TRY  
		DECLARE db_cursor6 CURSOR LOCAL FOR SELECT dtl.[GroupId],dtl.[Name],dtl.[Description],dtl.[Template] FROM [dbo].[DocSrvDocTemplateList] dtl WHERE dtl.[Description] LIKE 'SQL_TRIGGER';
		
		SET @RazorPortal = char(13) + '# DB - Export Procedur Řešení,   
' + char(13) + 'Zde najdete procedury, které stanovují pevnou a jasnou strukturu a vazby již v databázi   
' + char(13) + char(13) + char(13);
		OPEN db_cursor6;
		FETCH NEXT FROM db_cursor6 INTO @GroupId, @Name, @Description, @Template;
		
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			SET @RazorPortal += '### ' + @Name + '     
			' + char(13) + char(13) + '
```sql   
			' + char(13) + @Template + char(13) + '
```    
			' + char(13) + '
---   
			' + char(13);

			FETCH NEXT FROM db_cursor6 INTO @GroupId, @Name, @Description, @Template;
		END;
		CLOSE db_cursor6;
		DEALLOCATE db_cursor6;

		--SAVE DBTriggersAutoDoc
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(@GroupId,'DB Triggery','Základem je nastavit pevnou a jasnou strukturu a vazby již v databázi',300,@RazorPortal,@RazorPortal,1,1,1);

	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('DBTriggersAutoDoc',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH;

	--Generate DBViewAutoDoc
	BEGIN TRY  
		DECLARE db_cursor7 CURSOR LOCAL FOR SELECT dtl.[GroupId],dtl.[Name],dtl.[Description],dtl.[Template] FROM [dbo].[DocSrvDocTemplateList] dtl WHERE dtl.[Description] LIKE 'VIEW' 
		OR dtl.[Description] LIKE 'SQL_SCALAR_FUNCTION' OR dtl.[Description] LIKE 'SQL_INLINE_TABLE_VALUED_FUNCTION';
		
		SET @RazorPortal = char(13) + '# DB - Export Views a Funkcí Řešení,   
' + char(13) + 'Zde najdete složené Datapohledy a Funkce   
' + char(13) ;
		OPEN db_cursor7;
		FETCH NEXT FROM db_cursor7 INTO @GroupId, @Name, @Description, @Template;
		
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			SET @RazorPortal += '### ' + @Name + '     
			' + char(13) + '
```sql   ' + char(13) + @Template  + char(13) + '
```    ' + char(13) + '
---   
			' + char(13)  + char(13);

			FETCH NEXT FROM db_cursor7 INTO @GroupId, @Name, @Description, @Template;
		END;
		CLOSE db_cursor7;
		DEALLOCATE db_cursor7;

		--SAVE DBViewsAutoDoc
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(@GroupId,'DB View a Funkce','Složené Datapohledy a Funkce',400,@RazorPortal,@RazorPortal,1,1,1);

	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('DBViewsAutoDoc',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH;


	--END OF EXPORT TEMPLATES

	--START EXPORT PREPARED NEWS / CHANGELOG 

	--Generate Prepared News, Processing, ChangeLog
	BEGIN TRY  
		DECLARE db_cursor8 CURSOR LOCAL FOR SELECT stl.[InheritedTargetType],stl2.DescriptionCz,stl.[Message], stl.[Documentation], stl.[Image]
		FROM [dbo].[SolutionTaskList] stl,  [dbo].[SystemTranslationList] stl2
		WHERE stl.[InheritedStatusType]  = stl2.SystemName AND stl.[InheritedStatusType] = 'Waiting'
		ORDER BY stl.[InheritedTargetType];
		--	CASE stl.[InheritedStatusType] 
		--	WHEN 'Done' THEN 1
		--	WHEN 'Upgrading' THEN 2
		--	WHEN 'Processing' THEN 2	
		--	WHEN 'Waiting' THEN 3
		--	ELSE 4
		--	END ASC,
		
		--	stl.[TimeStamp];
	

		SET @PreparedNewsList = char(13) + '# Připravované Novinky,   
		' + char(13) + char(13) + 'Zde je seznam dalších chystaných funkcionalit, které posouvá vývoj.   
		To Hlavní Je přípravaWeb Portálu ONLINE s Vývojem kódu Mnanagovaným Centrálním Řešením.   
		to Nabízí Vždy aktializace po ruce Obosměrné rozšiřování Projektů a Centralizaci Agend.   
		Tím z tohoto řešení Bude Nejlevnější IT šeření Tak Rozsáhlého Charakteru.    
		' + char(13) + char(13) + char(13);

		OPEN db_cursor8  
		FETCH NEXT FROM db_cursor8 INTO @TargetType, @StatusType, @Request, @Documentation ,@Image
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			
			IF(@PrewTargetType <> @TargetType) BEGIN
			SET @PreparedNewsList += '
---    ' + char(13) + '### ' + @TargetType + '     
			' + char(13);
			END
			
			SET @PreparedNewsList +='1. ' + @Request + char(13);
			
			SET @PrewTargetType = @TargetType;
			FETCH NEXT FROM db_cursor8 INTO @TargetType, @StatusType, @Request, @Documentation ,@Image
		END;
		CLOSE db_cursor8;
		DEALLOCATE db_cursor8;


		--SAVE Prepared News
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(7,'Připravované Novinky','Seznam nejprioritnějších Rozšíření Systému. Ty budou zaimlemetovány během 6 měsíců
		protože se tomu můžu věnovat jen ve volném čase. Nejen Itéčkáři v naší zemi se místo vzdělávání soustředí jak pěníze čerpat
		místo tvořit přidanými hodnotami své činnosti. Připraveno je jíž přes více jak 500 vylepšení. Stačí stahovat z Github.
		',30,@PreparedNewsList,@PreparedNewsList,1,1,1);


	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('PreparedNews',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH


		--Generate Processing, ChangeLog
	BEGIN TRY  
		DECLARE db_cursor9 CURSOR LOCAL FOR SELECT stl.[InheritedTargetType],stl2.DescriptionCz,stl.[Message], stl.[Documentation], stl.[Image]
		FROM [dbo].[SolutionTaskList] stl,  [dbo].[SystemTranslationList] stl2
		WHERE stl.[InheritedStatusType]  = stl2.SystemName AND stl.[InheritedStatusType] <> 'Waiting'
		ORDER BY stl.[InheritedStatusType], stl.[InheritedTargetType];


		SET @PreparedNewsList = char(13) + '# Zpracovávané a zpracované Funkcionality,   
		' + char(13) + char(13) + 'Zde je vypsána ani setina toho co vše Dané projekty Umí.    
Myslím že chystaný vývoj Online z Webu a Editorů mluví za vše. Tak neplýtvejte financemi na    
čas zaměstanců či jiná řešení A Vyzkoušejte 30 denní verzu zdarma.     
		' + char(13) + char(13) + char(13);

		OPEN db_cursor9  
		FETCH NEXT FROM db_cursor9 INTO @TargetType, @StatusType, @Request, @Documentation ,@Image
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			
			IF(@PrewTargetType <> @TargetType) BEGIN
				SET @PreparedNewsList += char(13) + '### ' + @TargetType + '     
' + char(13);
			END
			
			SET @PreparedNewsList +='**' + @StatusType + '**
' + '1. ' + @Request + char(13) + '- ' + @Documentation  + char(13) + char(13) + '
---   
' + char(13);
			
			SET @PrewTargetType = @TargetType;
			FETCH NEXT FROM db_cursor9 INTO @TargetType, @StatusType, @Request, @Documentation ,@Image
		END;
		CLOSE db_cursor9;
		DEALLOCATE db_cursor9;


		--SAVE Changelog
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(7,'Zpracováváné A ChangeLog','Changelog jsem začal prat teprve ted. Každý úsek který vidíte, je výsledkem 2dnů práce macimálně.    
Pro představu co vše se dá zvládnout. Vyzkoušejte nebo požádejte o instalaci u vás ve firměš či doma a zkuste     
vyzkoušet vo vše dané řešení nabízí. ',800,@PreparedNewsList,@PreparedNewsList,1,1,1);


	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('Changelog',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH


	
	--GenerateServerConfig
	BEGIN TRY  
		DECLARE db_cursor11 CURSOR LOCAL FOR SELECT sl.InheritedGroupName,sl.[Key],sl.[Description]
		FROM [dbo].[ServerSettingList] sl
		ORDER BY sl.InheritedGroupName;


		SET @PreparedNewsList = char(13) + '# Základní Konfigurace Serveru,   
		' + char(13) + char(13) + 'Zde je Aktuální základní konfigurace serveru.Jsou do ní vytažené jen ty nejstěžejnější   
nastavení, protože k dispozici sich je stonásobně víckrát. 
To Vyplývá z počtu přes 100 nasazených technologií v 1 řešení parfekně vyladěných pro dokonalou práci.
' + char(13);

		OPEN db_cursor11  
		FETCH NEXT FROM db_cursor11 INTO @TargetType, @StatusType, @Documentation
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			
			IF(@PrewTargetType <> @TargetType) BEGIN
				SET @PreparedNewsList += + char(13) + '
---   
' + char(13) + '# ' + @TargetType + '         
' + char(13);
			END
			
			SET @PreparedNewsList +='**' + @StatusType + '**
' + char(13) + '- ' + @Documentation  + char(13) + char(13);
			
			SET @PrewTargetType = @TargetType;
			FETCH NEXT FROM db_cursor11 INTO @TargetType, @StatusType,@Documentation
		END;
		CLOSE db_cursor11;
		DEALLOCATE db_cursor11;


		--SAVE GenerateServerConfig
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(2,'Základní Konfigurace Serveru','Zde je Výčet Konfigurace serveru a popis co dané volby Dělají a znamenají. 
Když si je namalujete do pavouka zjistíte že to výkrývá téměř celé IT.',30,@PreparedNewsList,@PreparedNewsList,1,1,1);


	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('GenerateServerConfig',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH


		
	--GenerateAgendasList
	BEGIN TRY  
		DECLARE db_cursor12 CURSOR LOCAL FOR SELECT sg.SystemName,sm.MenuType,sm.FormPageName, sm.[Description]
		FROM [dbo].[SystemMenuList] sm, [dbo].[SystemGroupMenuList] sg
		WHERE sg.Id = sm.GroupId
		ORDER BY sg.SystemName, CASE sm.MenuType
			WHEN 'Dial' THEN 1
			WHEN 'Agenda' THEN 2
			ELSE 3
			END;


		SET @PreparedNewsList = char(13) + '# Seznam Implementovaných Agend,   
		' + char(13) + char(13) + 'Zde je Seznam implementovaných Agend Systému. Systém je aktuálně zaměřen na Správu IT, a všeho Okolo.
Je Modifikován tak Aby zvládnul všechny možné typy požadavků. Upravit sio je pro Svá data je otázkou v řádech týdnů, protože
disponuje všemi možnými nástroji pro zpracování každého typu požadavku.
' + char(13);

		OPEN db_cursor12  
		FETCH NEXT FROM db_cursor12 INTO @TargetType, @StatusType,@Value, @Documentation
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			
			IF(@PrewTargetType <> @TargetType) BEGIN
				SET @PreparedNewsList += + char(13) + '
---   
' + char(13) + '# ' + @TargetType + '         
' + char(13);
			END
			
			SET @PreparedNewsList +='- ' + @StatusType + '  **' + @Value + '**
' + char(13) + '*' + @Documentation  + '*' + char(13) + '
```    ' + char(13);
			
			SET @PrewTargetType = @TargetType;
			FETCH NEXT FROM db_cursor12 INTO @TargetType, @StatusType,@Value, @Documentation
		END;
		CLOSE db_cursor12;
		DEALLOCATE db_cursor12;


		--SAVE GenerateAgendasList
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(1,' Seznam Implementovaných Agend','Zde je Seznam implementovaných Agend Systému. Systém je aktuálně zaměřen na Správu IT, a všeho Okolo.
Je Modifikován tak Aby zvládnul všechny možné typy požadavků. Upravit sio je pro Svá data je otázkou v řádech týdnů, protože
disponuje všemi možnými nástroji pro zpracování každého požadavku.',30,@PreparedNewsList,@PreparedNewsList,1,1,1);


	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('GenerateAgendasList',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH



		--GenerateSystemModules
	BEGIN TRY  
		DECLARE db_cursor13 CURSOR LOCAL FOR SELECT sm.ModuleType, sm.[Name], sm.[Description]
		FROM [dbo].[SystemModuleList] sm
		ORDER BY sm.ModuleType;


		SET @PreparedNewsList = char(13) + '# Seznam ukázkových Modulů Systému,   
		' + char(13) + char(13) + 'Do Systému lze připojit libovolný Software, Libovolná Web Aplikace, či Libovolné Rozšíření,Framework atd.
To z něho Dělá naprostý Unikát. Webové Aplikace se tváří jako část Systému, Aplikace se ovírají Externě ale máte vše po ruce.
a Github nabízí Tisíce hotových řešení. Nestačí že Systém sám je už Systém Generátor a generuje Nové Agendy Skoro sám, ještě lze
připojit naprosto cokoliv. Systém má totiž v sobě na pozadí vlastní Web Server.
' + char(13);

		OPEN db_cursor13  
		FETCH NEXT FROM db_cursor13 INTO @TargetType, @StatusType, @Documentation
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			
			IF(@PrewTargetType <> @TargetType) BEGIN
				SET @PreparedNewsList += + char(13) + '
---   
' + char(13) + '# ' + @TargetType + '         
' + char(13);
			END
			
			SET @PreparedNewsList +='  **' + @StatusType + '**
' + char(13) + '*' + @Documentation  + '*' + char(13) + '
' + char(13);
			
			SET @PrewTargetType = @TargetType;
			FETCH NEXT FROM db_cursor13 INTO @TargetType, @StatusType, @Documentation
		END;
		CLOSE db_cursor13;
		DEALLOCATE db_cursor13;


		--SAVE GenerateSystemModules
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(1,'Seznam ukázkových Modulů Systému','Do Systému lze připojit libovolný Software, Libovolná Web Aplikace, či Libovolné Rozšíření,Framework atd.
To z něho Dělá naprostý Unikát. Webové Aplikace se tváří jako část Systému, Aplikace se ovírají Externě ale máte vše po ruce.
a Github nabízí Tisíce hotových řešení. Nestačí že Systém sám je už Systém Generátor a generuje Nové Agendy Skoro sám, ještě lze
připojit naprosto cokoliv. Systém má totiž v sobě na pozadí vlastní Web Server.',40,@PreparedNewsList,@PreparedNewsList,1,1,1);


	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('GenerateSystemModules',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH


			--GenerateServerModules
	BEGIN TRY  
		DECLARE db_cursor14 CURSOR LOCAL FOR SELECT sm.[InheritedPageType], sm.[Name], sm.[Description]
		FROM [dbo].[ServerModuleAndServiceList] sm
		ORDER BY sm.[InheritedPageType];


		SET @PreparedNewsList = char(13) + '# Seznam Implementovaných Modulů Serveru,   
		' + char(13) + char(13) + 'Do serveru lze zaimplementovat téměř neomezeně funkcionalit. Sám jich už má přehršel.
Je tu ale nová Dynamická agenda kde se nastavují přístupy k zaimplementovaným modulům, nebo je možné tvořit vlastní webové moduly
jako jednostánkové weby pro určitý Účel. ke snadnosti slouží knihovny kódů pomocí kterých tyto moduly můžete doslova Generovat
' + char(13);

		OPEN db_cursor14  
		FETCH NEXT FROM db_cursor14 INTO @TargetType, @StatusType, @Documentation
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			
			IF(@PrewTargetType <> @TargetType) BEGIN
				SET @PreparedNewsList += + char(13) + '
---   
' + char(13) + '# ' + @TargetType + '         
' + char(13);
			END
			
			SET @PreparedNewsList +='  **' + @StatusType + '**
' + char(13) + '*' + @Documentation  + '*' + char(13) + '
' + char(13);
			
			SET @PrewTargetType = @TargetType;
			FETCH NEXT FROM db_cursor14 INTO @TargetType, @StatusType, @Documentation
		END;
		CLOSE db_cursor14;
		DEALLOCATE db_cursor14;


		--SAVE GenerateServerModules
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(2,'Seznam Impl. Modulů Serveru','Do serveru lze zaimplementovat téměř neomezeně funkcionalit. Sám jich už má přehršel.
Je tu ale nová Dynamická agenda kde se nastavují přístupy k zaimplementovaným modulům, nebo je možné tvořit vlastní webové moduly
jako jednostánkové weby pro určitý Účel. ke snadnosti slouží knihovny kódů pomocí kterých tyto moduly můžete doslova Generovat',40,@PreparedNewsList,@PreparedNewsList,1,1,1);


	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('GenerateServerModules',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);
	END CATCH


	--GenerateMicroDials
	BEGIN TRY  
		DECLARE db_cursor15 CURSOR LOCAL FOR SELECT sm.ItemsGroup, sm.[Name], sm.[Description]
		FROM [dbo].[SolutionMixedEnumList] sm
		ORDER BY sm.ItemsGroup;


		SET @PreparedNewsList = char(13) + '# Mikročíselníky unikátních Funcionalit,   
		' + char(13) + char(13) + 'Mikročíselník vzniknul jako úsporatabulek pro Výběry z malinkých seznamů. Tyto Seznamy
jsou ale implementované funkcionality, Systému i Serveru to z něho Dělá naprosto mimořádnou Agendu. Zde je Vypsán jeho
Obsah.
' + char(13);

		OPEN db_cursor15  
		FETCH NEXT FROM db_cursor15 INTO @TargetType, @StatusType, @Documentation
		WHILE @@FETCH_STATUS = 0  
		BEGIN 
			
			IF(@PrewTargetType <> @TargetType) BEGIN
				SET @PreparedNewsList += + char(13) + '
---   
' + char(13) + '# ' + @TargetType + '         
' + char(13);
			END
			
			SET @PreparedNewsList +='  **' + @StatusType + '**
' + char(13) + '*' + @Documentation  + '*' + char(13) + '
' + char(13);
			
			SET @PrewTargetType = @TargetType;
			FETCH NEXT FROM db_cursor15 INTO @TargetType, @StatusType, @Documentation
		END;
		CLOSE db_cursor15;
		DEALLOCATE db_cursor15;


		--SAVE GenerateMicroDials
		INSERT INTO [dbo].[DocSrvDocumentationList] ([DocumentationGroupId],[Name], [Description],[Sequence],[MdContent],[HtmlContent],[UserId],[Active],[AutoVersion])
		VALUES(1,'Mikročíselníky unikátní Funkce','Mikročíselník vzniknul jako úspora tabulek pro Výběry z malinkých seznamů. Tyto Seznamy
jsou ale implementované funkcionality, Systému i Serveru to z něho Dělá naprosto mimořádnou Agendu. Zde je Vypsán jeho
Obsah.',70,@PreparedNewsList,@PreparedNewsList,1,1,1);

	SELECT 'Generate AutoDocs From Descriptions Completed' as 'MessageList';

	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('GenerateMicroDials',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);

		SELECT @Error as 'MessageList';
	END CATCH


END;

```    
			
---   
			### SP _SpOperationTemplate     

```sql   
			

-- PROCEDURE TEMPLATE WITH LOGGING TO DATABASE FAILLIST
CREATE procedure [dbo].[SpOperationTemplate]
AS
BEGIN 
	DECLARE @Error VarChar(MAX);
	
	--DO PROCESS
	BEGIN TRY  
		
		SELECT 1;

		-- PROCESS COMPLETED
		SELECT 'Process Completed' as 'MessageList';
	END TRY  
	BEGIN CATCH  
		SELECT @Error = CONCAT('ProcessIdentifier',' ,ErrNo:',CAST(ERROR_NUMBER() AS VARCHAR),' ,Message:',ERROR_MESSAGE()); 
		INSERT INTO [dbo].[SolutionFailList] ([Source],[Message]) VALUES('Database', @Error);

		-- PROCESS ERROR
		SELECT @Error as 'MessageList';
	END CATCH


END;

```    
			
---   
			### SP ExampleExportJsonFile     

```sql   
			

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

```    
			
---   
			### SP ReportDataset     

```sql   
			CREATE PROCEDURE [dbo].[ReportDataset]
@TableName varchar(50) = null,
@Sequence int = 0
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

-- Intended for use with param-ed reports.
-- To be called from various My-FyiReporting reports
--   - Various reports with their own layouts are called from VB app after setting Queue with usp_ReportQueue_Push()
--     each report then just contains : 

-- SET FMTONLY OFF;
-- EXEC usp_ReportQueue_Pop @TableName='SomeTablename', @Sequence='10'
-- 

DECLARE @ID int;
DECLARE @NAME varchar(50);
DECLARE @SQL nvarchar(MAX);
DECLARE @FILTER nvarchar(MAX);
DECLARE @SEARCH varchar(50);
DECLARE @SEARCHCOLUMNLIST nvarchar(MAX);
DECLARE @SEARCHFILTERIGNORE bit;
DECLARE @RECID varchar(50);
DECLARE @RECIDFILTERIGNORE bit;

DECLARE @SEPARATEDCOLUMNS nvarchar(MAX);


SELECT Top 1 
  @ID=[Id], 
  @NAME=[Name], 
  @SQL=[Sql], 
  @FILTER=[Filter], 
  @SEARCH=[Search], 
  @SEARCHCOLUMNLIST=[SearchColumnList],
  @SEARCHFILTERIGNORE=[SearchFilterIgnore],
  @RECID=[RecId],
  @RECIDFILTERIGNORE=[RecIdFilterIgnore]
FROM SystemReportQueueList WHERE [TableName]=@TableName AND [Sequence] = @Sequence; 

--PRERARE RECID
IF (@RECID = 0 OR (@RECIDFILTERIGNORE = 1 AND @FILTER <> '1=1')) BEGIN 
	SET @RECID = ''
END ELSE BEGIN
	SET @RECID = CONCAT(' AND Id=',@RECID);
END

--PRERARE SEARCH
IF (@SEARCH = '' OR (@SEARCHFILTERIGNORE = 1 AND @FILTER <> '1=1')) BEGIN
	SET @SEPARATEDCOLUMNS =  '1=1';
END ELSE BEGIN
	SELECT @SEPARATEDCOLUMNS = STRING_AGG (CONCAT(value,' LIKE ',char(39),'%',@SEARCH,'%',char(39)), ' OR ') FROM STRING_SPLIT (@SEARCHCOLUMNLIST, ',');  
END

	SET @SQL = CONCAT(@SQL,' WHERE 1=1 AND (', @FILTER,') AND (', @SEPARATEDCOLUMNS,') ',@RECID); 
	--PRINT @SQL; --FOR Debuging
	EXECUTE sp_executesql @SQL;
END
```    
			
---   
			### SP SystemSpGetUserMenuList     

```sql   
			



CREATE procedure [dbo].[SystemSpGetUserMenuList](@userRole varchar(50))
AS
BEGIN 

	SELECT sml.*, sgl.SystemName as GroupName
	FROM [dbo].[SystemMenuList] sml,[dbo].[SystemGroupMenuList] sgl
	WHERE (sml.[AccessRole] LIKE CONCAT(@userRole,',%') OR sml.[AccessRole] LIKE CONCAT('%,',@userRole,',%'))
	AND sgl.Id = sml.GroupId AND sml.Active = 1 AND sgl.Active = 1
	AND sml.NotShowInMenu = 0
	ORDER BY sml.GroupId ASC

END;

```    
			
---   
			### SP LicSrvSpCheckUnlockKey     

```sql   
			


CREATE procedure [dbo].[LicSrvSpCheckUnlockKey](@unlockCode varchar(50),@partNumber varchar(50),@ipAddress varchar(50),@allowed bit output)
AS
BEGIN 
	SET NOCOUNT ON;
	-- ALGORITHM EXAMPLE
	-- SELECT CONCAT(CAST((YEAR(GETDATE()) * MONTH(GETDATE()) * DAY(GETDATE())) as varchar(100)),'-SOMETEXT-',CAST(YEAR(GETDATE()) as varchar(4)));


			DECLARE @countValidUnlockKeys INT = 0;DECLARE @counter INT = 0;SET @allowed = 0;

			--LOAD VALIDS AUTO SQL UNLOCKCODES FOR partNumber
			DECLARE @SQLUNLOCK TABLE (Iid int identity(1,1),[Id] int not null, [Name] Varchar(30) not null, [Algorithm] varchar(MAX) not null,[AddressId] int not null,[ItemId] int not null,[LimitActive] bit not null, [ActivationLimit] int null,[UsedCount] int not null)
				INSERT into @SQLUNLOCK SELECT l.Id,l.[Name],l.[Algorithm],l.[AddressId],l.[ItemId],l.[LimitActive],l.[ActivationLimit],l.[UsedCount] FROM [dbo].[LicSrvLicenseAlgorithmList] l,[dbo].[BasicItemList] i WHERE l.[Active] = 1 AND l.ItemId = i.Id
				AND i.[PartNumber] = @partNumber AND i.[Active] = 1 AND ([ValidFrom] IS NULL OR [ValidFrom] < GETDATE()) AND ([ValidTo] IS NULL OR [ValidTo] > GETDATE()) 

				SELECT @countValidUnlockKeys = COUNT([Iid]) FROM @SQLUNLOCK;
				DECLARE @Id int;DECLARE @Name varchar(30);DECLARE @Algorithm nvarchar(MAX);DECLARE @AddressId int;DECLARE @ItemId int;DECLARE @LimitActive int;DECLARE @ActivationLimit int;DECLARE @UsedCount int;
				DECLARE @UNLOCKKEY as varchar(MAX);

			-- CHECKING ALL VALID UNLOCKKEY GENERATORS 
			WHILE @counter < @countValidUnlockKeys BEGIN
				SELECT @Id=[Id],@Name=[Name],@Algorithm=[Algorithm],@AddressId=[AddressId],@ItemId=[ItemId],@Name=[Name],@LimitActive=[LimitActive],@ActivationLimit=[ActivationLimit],@UsedCount=[UsedCount] FROM @SQLUNLOCK WHERE Iid=@counter+1;
				SET @Algorithm= REPLACE(@Algorithm, 'char(39)', '');
				declare @t table(result varchar(max)); insert into @t exec (@Algorithm);SELECT @UNLOCKKEY = result FROM @t;
				IF (@UNLOCKKEY = @unlockCode) BEGIN
					
					IF (@LimitActive = 1 AND @UsedCount + 1 = @ActivationLimit) BEGIN --LAST ACTIVATION
						UPDATE [dbo].[LicSrvLicenseAlgorithmList] SET [UsedCount] = [UsedCount] + 1, Active = 0 WHERE [Id] = @Id;SET @allowed = 1;
					END ELSE IF (@LimitActive = 1 AND @UsedCount + 1 >= @ActivationLimit) BEGIN --WRONG USER DATA
						UPDATE [dbo].[LicSrvLicenseAlgorithmList] SET [Active] = 0  WHERE [Id] = @Id;SET @allowed = 0;
					END ELSE IF (@LimitActive = 1 AND @UsedCount + 1 < @ActivationLimit) BEGIN --USED LICENSE
						UPDATE [dbo].[LicSrvLicenseAlgorithmList] SET [UsedCount] = [UsedCount] + 1 WHERE [Id] = @Id;SET @allowed = 1;
					END ELSE IF (@LimitActive = 0) BEGIN --USED LICENSE
						UPDATE [dbo].[LicSrvLicenseAlgorithmList] SET [UsedCount] = [UsedCount] + 1 WHERE [Id] = @Id;SET @allowed = 1;
					END

					GOTO CHECKDONE;

				END
			   SET @counter += 1;
			END;

CHECKDONE:
		-- GENERATE LICENCE OR WRITE FAILED TRYING
		IF (@allowed = 0) BEGIN
			INSERT INTO [dbo].[LicSrvLicenseActivationFailList] ([IpAddress],[UnlockCode],[PartNumber])
			VALUES (@ipAddress,@unlockCode,@partNumber);
		END ELSE IF (@allowed = 1) BEGIN
			INSERT INTO [dbo].[LicSrvUsedLicenseList] ([IpAddress],[UnlockCode],[AlgorithmName],[PartNumber],[License],[ActivateDate],[AddressId],[ItemId])
			VALUES (@ipAddress,@unlockCode,@Name,@partNumber,NEWID(),GETDATE(),@AddressId,@ItemId);
	END

	RETURN;
END;

```    
			
---   
			