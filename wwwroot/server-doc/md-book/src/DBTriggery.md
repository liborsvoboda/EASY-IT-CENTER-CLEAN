# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

Základem je nastavit pevnou a jasnou strukturu a vazby již v databázi

# DB - Export Procedur Řešení,   
Zde najdete procedury, které stanovují pevnou a jasnou strukturu a vazby již v databázi   
### TR TR_SolutionEmailerHistoryList     
			
```sql   
			



CREATE   TRIGGER [dbo].[TR_SolutionEmailerHistoryList] ON [dbo].[SolutionEmailerHistoryList]
FOR INSERT
AS
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDATE
		SET NOCOUNT ON;
	END ELSE
		BEGIN -- INSERT
			EXEC [dbo].[SpAutoCleanEmailer];
		END
END

```    
			
---   
			### TR TR_DocumentationList     
			
```sql   
			CREATE   TRIGGER [dbo].[TR_DocumentationList] ON [dbo].[DocSrvDocumentationList]
FOR INSERT, UPDATE--, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setActive bit;DECLARE @autoVersion int;DECLARE @RecId int;DECLARE @GroupId int;DECLARE @RecName varchar(150);
	DECLARE @autoRemoveOld bit; DECLARE @UserId int;
	

	SET @autoVersion = 0;SET @setActive = 1;SET @autoRemoveOld = 0;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setActive = ins.[Active] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;
		SELECT @UserId = ins.UserId from inserted ins;
		SELECT @GroupId = ins.DocumentationGroupId from inserted ins;
		SELECT @RecName = ins.[Name] from inserted ins;

		--GET AutoRemoveSetting
		SELECT @autoRemoveOld = CAST(CAST(SUBSTRING(ss.[Value],1,10) as varchar(10)) as bit) FROM [dbo].[ServerSettingList] ss WHERE ss.[Key] = 'ServerDocsOldAutoRemoveEnabled';

		IF(@setActive = 1) BEGIN
			UPDATE [dbo].DocSrvDocumentationList SET [Active] = 0 WHERE Id <> @RecId AND [Name] = @RecName AND [DocumentationGroupId] = @GroupId; 		
		END

		--AutoRemove Older versions
		IF(@autoRemoveOld = 1) BEGIN
			DELETE FROM  [dbo].DocSrvDocumentationList WHERE Id <> @RecId AND [Name] = @RecName AND [DocumentationGroupId] = @GroupId; 		
		END

	END ELSE
		BEGIN -- INSERT
			SELECT @setActive = ins.[Active] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;
			SELECT @UserId = ins.UserId from inserted ins;
			SELECT @GroupId = ins.DocumentationGroupId from inserted ins;
			SELECT @RecName = ins.[Name] from inserted ins;

			--GET AutoRemoveSetting
			SELECT @autoRemoveOld = CAST(CAST(SUBSTRING(ss.[Value],1,10) as varchar(10)) as bit) FROM [dbo].[ServerSettingList] ss WHERE ss.[Key] = 'ServerDocsOldAutoRemoveEnabled';

			--AutoVersioning
			SELECT @autoVersion = MAX(d.[AutoVersion]) + 1 FROM [dbo].DocSrvDocumentationList d WHERE d.[Name] = @RecName AND [DocumentationGroupId] = @GroupId;
			IF (@autoVersion = 0 ) BEGIN SET @autoVersion = 1; END
			UPDATE [dbo].DocSrvDocumentationList SET [AutoVersion] = @autoVersion WHERE Id = @RecId AND [DocumentationGroupId] = @GroupId;

			IF(@setActive = 1) BEGIN
				UPDATE [dbo].DocSrvDocumentationList SET [Active] = 0 WHERE Id <> @RecId AND [Name] = @RecName AND [DocumentationGroupId] = @GroupId; 		
			END
			
			--AutoRemove Older versions
			IF(@autoRemoveOld = 1) BEGIN
				DELETE FROM  [dbo].DocSrvDocumentationList WHERE Id <> @RecId AND [Name] = @RecName AND [DocumentationGroupId] = @GroupId; 		
			END
		END
END

```    
			
---   
			### TR TR_BranchList     
			
```sql   
			
CREATE   TRIGGER [dbo].[TR_BranchList] ON [dbo].[BusinessBranchList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setActive bit;DECLARE @RecId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setActive = ins.[Active] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@setActive = 1) BEGIN
			UPDATE [dbo].BusinessBranchList SET [Active] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN -- INSERT
			SELECT @setActive = ins.[Active] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@setActive = 1) BEGIN
				UPDATE [dbo].BusinessBranchList SET [Active] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN --DELETE
	SELECT @setActive = ins.[Active] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@setActive = 1) BEGIN
		UPDATE [dbo].BusinessBranchList SET [Active] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].BusinessBranchList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_ServerModuleAndServiceList     
			
```sql   
			CREATE   TRIGGER [dbo].[TR_ServerModuleAndServiceList] ON [dbo].[ServerModuleAndServiceList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setIsLoginModule bit;DECLARE @RecId int;DECLARE @UrlSubPath VarChar(100);DECLARE @Type VarChar(50);DECLARE @ModulePathExist bit;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SET @ModulePathExist = 0;
		SELECT @setIsLoginModule = ins.[IsLoginModule] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;
		SELECT @UrlSubPath = ins.UrlSubPath from inserted ins;
		SELECT @Type = ins.[InheritedLayoutType] from inserted ins;

		--CheckExisting Only One Allowed HTML Module
		IF (@Type = 'FullHtmlPage' OR @Type = 'HtmlBodyOnly') BEGIN
			SELECT @ModulePathExist = 1 FROM [dbo].[ServerModuleAndServiceList] WHERE UrlSubPath = @UrlSubPath;
			IF (@ModulePathExist = 1) BEGIN
				RAISERROR('Can Be Only One Endpoint for Html Module', 16, 1)  
				ROLLBACK TRANSACTION
				RETURN
			END
		END

		--Changing Login Module Set
		IF(@setIsLoginModule = 1) BEGIN
			UPDATE [dbo].ServerModuleAndServiceList SET [IsLoginModule] = 0 WHERE Id <> @RecId; 
		END
	END ELSE
		BEGIN -- INSERT
			SET @ModulePathExist = 0;
			SELECT @setIsLoginModule = ins.[IsLoginModule] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;
			SELECT @UrlSubPath = ins.UrlSubPath from inserted ins;
			SELECT @Type = ins.[InheritedLayoutType] from inserted ins;

			--CheckExisting Only One Allowed HTML Module
			IF (@Type = 'FullHtmlPage' OR @Type = 'HtmlBodyOnly') BEGIN
				SELECT @ModulePathExist = 1 FROM [dbo].[ServerModuleAndServiceList] WHERE UrlSubPath = @UrlSubPath;
				IF (@ModulePathExist = 1) BEGIN
					RAISERROR('Can Be Only One Endpoint for Html Module', 16, 1)  
					ROLLBACK TRANSACTION
					RETURN
				END
			END

			--Changing Login Module Set
			IF(@setIsLoginModule = 1) BEGIN
				UPDATE [dbo].ServerModuleAndServiceList SET [IsLoginModule] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN --DELETE
	SELECT @setIsLoginModule = ins.[IsLoginModule] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	--Changing Login Module Set
	IF(@setIsLoginModule = 1) BEGIN
		UPDATE [dbo].ServerModuleAndServiceList SET [IsLoginModule] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].ServerModuleAndServiceList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_PaymentMethodList     
			
```sql   
			CREATE   TRIGGER [dbo].[TR_PaymentMethodList] ON [dbo].[BusinessPaymentMethodList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setDefault bit;DECLARE @RecId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setDefault = ins.[Default] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@setDefault = 1) BEGIN
			UPDATE [dbo].BusinessPaymentMethodList SET [Default] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN -- INSERT
			SELECT @setDefault = ins.[Default] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@setDefault = 1) BEGIN
				UPDATE [dbo].BusinessPaymentMethodList SET [Default] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN --DELETE
	SELECT @setDefault = ins.[Default] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@setDefault = 1) BEGIN
		UPDATE [dbo].BusinessPaymentMethodList SET [Default] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].BusinessPaymentMethodList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_ImageGalleryList     
			
```sql   
			



CREATE   TRIGGER [dbo].[TR_ImageGalleryList] ON [dbo].[BasicImageGalleryList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @isPrimary bit;DECLARE @RecId int;DECLARE @HotelId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @isPrimary = ins.[IsPrimary] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@isPrimary = 1) BEGIN
			UPDATE [dbo].BasicImageGalleryList SET [IsPrimary] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN -- INSERT
			SELECT @isPrimary = ins.[IsPrimary] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@isPrimary = 1) BEGIN
				UPDATE [dbo].BasicImageGalleryList SET [IsPrimary] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN --DELETE
	SELECT @isPrimary = ins.[IsPrimary] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@isPrimary = 1) BEGIN
		UPDATE [dbo].BasicImageGalleryList SET [IsPrimary] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].BasicImageGalleryList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_MaturityList     
			
```sql   
			
CREATE   TRIGGER [dbo].[TR_MaturityList] ON [dbo].[BusinessMaturityList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setDefault bit;DECLARE @RecId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setDefault = ins.[Default] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@setDefault = 1) BEGIN
			UPDATE [dbo].BusinessMaturityList SET [Default] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN -- INSERT
			SELECT @setDefault = ins.[Default] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@setDefault = 1) BEGIN
				UPDATE [dbo].BusinessMaturityList SET [Default] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN --DELETE
	SELECT @setDefault = ins.[Default] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@setDefault = 1) BEGIN
		UPDATE [dbo].BusinessMaturityList SET [Default] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].BusinessMaturityList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_UserList     
			
```sql   
			CREATE   TRIGGER [dbo].[TR_UserList] ON dbo.SolutionUserList
FOR INSERT
AS
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @UserId int;

	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE

		SELECT @UserId = ins.Id from inserted ins;

	END ELSE
		BEGIN -- INSERT

			SELECT @UserId = ins.Id from inserted ins;
			
			INSERT INTO [dbo].[SystemParameterList]([UserId],[SystemName],[Value],[Type],[Description])
			SELECT @UserId, pa.[SystemName],pa.[Value],pa.[Type],pa.[Description]
			FROM [dbo].[SystemParameterList] pa
			WHERE pa.UserId IS NULL;

		END
END /* ELSE 
BEGIN --DELETE
	SELECT @setActive = ins.[Active] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;
	SELECT @RecName = ins.[Name] from deleted ins;

	IF(@setActive = 1) BEGIN
		UPDATE [dbo].DocumentationList SET [Active] = 1 
		WHERE Id IN(SELECT TOP (1) MAX(d.Id) FROM [dbo].DocumentationList d WHERE d.Id <> @RecId AND d.[Name] = @RecName)
		;
	END
END
*/

```    
			
---   
			### TR TR_PaymentStatusList     
			
```sql   
			CREATE   TRIGGER [dbo].[TR_PaymentStatusList] ON [dbo].[BusinessPaymentStatusList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setDefault bit;DECLARE @RecId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setDefault = ins.[Default] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@setDefault = 1) BEGIN
			UPDATE [dbo].BusinessPaymentStatusList SET [Default] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN -- INSERT
			SELECT @setDefault = ins.[Default] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@setDefault = 1) BEGIN
				UPDATE [dbo].BusinessPaymentStatusList SET [Default] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN --DELETE
	SELECT @setDefault = ins.[Default] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@setDefault = 1) BEGIN
		UPDATE [dbo].BusinessPaymentStatusList SET [Default] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].BusinessPaymentStatusList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_PaymentStatusListCreditNote     
			
```sql   
			CREATE   TRIGGER [dbo].[TR_PaymentStatusListCreditNote] ON [dbo].[BusinessPaymentStatusList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setCreditNote bit;DECLARE @RecId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setCreditNote = ins.[CreditNote] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@setCreditNote = 1) BEGIN
			UPDATE [dbo].BusinessPaymentStatusList SET [CreditNote] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN -- INSERT
			SELECT @setCreditNote = ins.[CreditNote] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@setCreditNote = 1) BEGIN
				UPDATE [dbo].BusinessPaymentStatusList SET [CreditNote] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN --DELETE
	SELECT @setCreditNote = ins.[CreditNote] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@setCreditNote = 1) BEGIN
		UPDATE [dbo].BusinessPaymentStatusList SET [CreditNote] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].BusinessPaymentStatusList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_PaymentStatusListReceipt     
			
```sql   
			
CREATE   TRIGGER [dbo].[TR_PaymentStatusListReceipt] ON [dbo].[BusinessPaymentStatusList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setReceipt bit;DECLARE @RecId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setReceipt = ins.[Receipt] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@setReceipt = 1) BEGIN
			UPDATE [dbo].BusinessPaymentStatusList SET [Receipt] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN -- INSERT
			SELECT @setReceipt = ins.[Receipt] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@setReceipt = 1) BEGIN
				UPDATE [dbo].BusinessPaymentStatusList SET [Receipt] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN --DELETE
	SELECT @setReceipt = ins.[Receipt] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@setReceipt = 1) BEGIN
		UPDATE [dbo].BusinessPaymentStatusList SET [Receipt] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].BusinessPaymentStatusList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_WebMenuList     
			
```sql   
			

CREATE   TRIGGER [dbo].[TR_WebMenuList] ON [dbo].[WebMenuList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setDefault bit;DECLARE @RecId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setDefault = ins.[Default] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@setDefault = 1) BEGIN
			UPDATE [dbo].WebMenuList SET [Default] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN -- INSERT
			SELECT @setDefault = ins.[Default] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@setDefault = 1) BEGIN
				UPDATE [dbo].WebMenuList SET [Default] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END/* ELSE 
BEGIN --DELETE
	SELECT @setDefault = ins.[Default] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@setDefault = 1) BEGIN
		UPDATE [dbo].WebMenuList SET [Default] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].WebMenuList WHERE Id <> @RecId)
		;
	END
END*/

```    
			
---   
			### TR TR_SystemTranslationList     
			
```sql   
			

CREATE   TRIGGER [dbo].[TR_SystemTranslationList] ON [dbo].[SystemTranslationList]
FOR INSERT
AS
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @UserId int;DECLARE @RecId int;
	DECLARE @AutoFillDictionaries bit;
	DECLARE @SystemName varchar(50);DECLARE @DescriptionCz varchar(500);DECLARE @DescriptionEn varchar(500);
	SET @AutoFillDictionaries = 1;

	SET NOCOUNT ON;
    IF NOT EXISTS (SELECT 0 FROM deleted)
		BEGIN -- INSERT
			
			SELECT @RecId = ins.Id from inserted ins;
			SELECT @UserId = ins.UserId from inserted ins;
			SELECT @SystemName = ins.SystemName from inserted ins;
			SELECT @DescriptionCz = ins.DescriptionCz from inserted ins;
			SELECT @DescriptionEn = ins.DescriptionEn from inserted ins;
			
			--GET AutoFilling Configuration
			SELECT @AutoFillDictionaries = CAST(CAST(SUBSTRING(p.[Value],1,10) as varchar(10)) as bit) FROM [dbo].[SystemParameterList] p WHERE p.[UserId] IS NULL AND p.[SystemName] = 'ServerTranslationAutoFillEnabled';

			IF (@AutoFillDictionaries = 1) BEGIN
				IF(@DescriptionCz IS NULL OR LEN(@DescriptionCz) = 0) BEGIN SET @DescriptionCz = @SystemName; END
				IF(@DescriptionEn IS NULL OR LEN(@DescriptionEn) = 0) BEGIN SET @DescriptionEn = @SystemName; END
				UPDATE dbo.SystemTranslationList SET [DescriptionCz] = @DescriptionCz, [DescriptionEn] = @DescriptionEn WHERE Id = @RecId;
			END
		END
END

```    
			
---   
			### TR TR_VatList     
			
```sql   
			CREATE   TRIGGER [dbo].[TR_VatList] ON [dbo].[BasicVatList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setDefault bit;DECLARE @RecId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setDefault = ins.[Default] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@setDefault = 1) BEGIN
			UPDATE [dbo].BasicVatList SET [Default] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN -- INSERT
			SELECT @setDefault = ins.[Default] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@setDefault = 1) BEGIN
				UPDATE [dbo].BasicVatList SET [Default] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN --DELETE
	SELECT @setDefault = ins.[Default] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@setDefault = 1) BEGIN
		UPDATE [dbo].BasicVatList SET [Default] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].BasicVatList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_WarehouseList     
			
```sql   
			CREATE   TRIGGER [dbo].[TR_WarehouseList] ON [dbo].[BusinessWarehouseList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setDefault bit;DECLARE @RecId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setDefault = ins.[Default] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@setDefault = 1) BEGIN
			UPDATE [dbo].BusinessWarehouseList SET [Default] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN -- INSERT
			SELECT @setDefault = ins.[Default] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@setDefault = 1) BEGIN
				UPDATE [dbo].BusinessWarehouseList SET [Default] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN --DELETE
	SELECT @setDefault = ins.[Default] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@setDefault = 1) BEGIN
		UPDATE [dbo].BusinessWarehouseList SET [Default] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].BusinessWarehouseList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_ReportList     
			
```sql   
			CREATE   TRIGGER [dbo].[TR_ReportList] ON [dbo].[SystemReportList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setDefault bit;DECLARE @RecId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN /* UPDADE */
		SELECT @setDefault = ins.[Default] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@setDefault = 1) BEGIN
			UPDATE [dbo].SystemReportList SET [Default] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN /* INSERT */
			SELECT @setDefault = ins.[Default] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@setDefault = 1) BEGIN
				UPDATE [dbo].SystemReportList SET [Default] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN /* DELETE */
	SELECT @setDefault = ins.[Default] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@setDefault = 1) BEGIN
		UPDATE [dbo].SystemReportList SET [Default] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].SystemReportList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_UnitList     
			
```sql   
			
CREATE   TRIGGER [dbo].[TR_UnitList] ON [dbo].[BasicUnitList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setDefault bit;DECLARE @RecId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setDefault = ins.[Default] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@setDefault = 1) BEGIN
			UPDATE [dbo].BasicUnitList SET [Default] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN -- INSERT
			SELECT @setDefault = ins.[Default] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@setDefault = 1) BEGIN
				UPDATE [dbo].BasicUnitList SET [Default] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN --DELETE
	SELECT @setDefault = ins.[Default] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@setDefault = 1) BEGIN
		UPDATE [dbo].BasicUnitList SET [Default] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].BasicUnitList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_WebDocumentationList     
			
```sql   
			
CREATE   TRIGGER [dbo].[TR_WebDocumentationList] ON [dbo].[WebDocumentationList]
FOR INSERT, UPDATE--, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setActive bit;DECLARE @autoVersion int;DECLARE @RecId int;DECLARE @RecName varchar(150);
	DECLARE @autoRemoveOld bit; DECLARE @UserId int;
	

	SET @autoVersion = 0;SET @setActive = 1;SET @autoRemoveOld = 0;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setActive = ins.[Active] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;
		SELECT @UserId = ins.UserId from inserted ins;
		SELECT @RecName = ins.[Name] from inserted ins;

		--GET AutoRemoveSetting
		SELECT @autoRemoveOld = CAST(CAST(SUBSTRING(p.[Value],1,10) as varchar(10)) as bit) FROM [dbo].[SystemParameterList] p WHERE p.[UserId] = @UserId AND p.[SystemName] = 'WebDocsOldAutoRemoveEnabled';

		IF(@setActive = 1) BEGIN
			UPDATE [dbo].WebDocumentationList SET [Active] = 0 WHERE Id <> @RecId AND [Name] = @RecName; 		
		END

		--AutoRemove Older versions
		IF(@autoRemoveOld = 1) BEGIN
			DELETE FROM  [dbo].WebDocumentationList WHERE Id <> @RecId AND [Name] = @RecName; 		
		END

	END ELSE
		BEGIN -- INSERT
			SELECT @setActive = ins.[Active] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;
			SELECT @UserId = ins.UserId from inserted ins;
			SELECT @RecName = ins.[Name] from inserted ins;

			--GET AutoRemoveSetting
			SELECT @autoRemoveOld = CAST(CAST(SUBSTRING(p.[Value],1,10) as varchar(10)) as bit) FROM [dbo].[SystemParameterList] p WHERE p.[UserId] = @UserId AND p.[SystemName] = 'WebDocsOldAutoRemoveEnabled';

			--AutoVersioning
			SELECT @autoVersion = MAX(d.[AutoVersion]) + 1 FROM [dbo].WebDocumentationList d WHERE d.[Name] = @RecName;
			IF (@autoVersion = 0 ) BEGIN SET @autoVersion = 1; END
			UPDATE [dbo].WebDocumentationList SET [AutoVersion] = @autoVersion WHERE Id = @RecId;

			IF(@setActive = 1) BEGIN
				UPDATE [dbo].WebDocumentationList SET [Active] = 0 WHERE Id <> @RecId AND [Name] = @RecName; 		
			END
			
			--AutoRemove Older versions
			IF(@autoRemoveOld = 1) BEGIN
				DELETE FROM  [dbo].WebDocumentationList WHERE Id <> @RecId AND [Name] = @RecName; 		
			END
		END
END /* ELSE 
BEGIN --DELETE
	SELECT @setActive = ins.[Active] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;
	SELECT @RecName = ins.[Name] from deleted ins;

	IF(@setActive = 1) BEGIN
		UPDATE [dbo].WebDocumentationList SET [Active] = 1 
		WHERE Id IN(SELECT TOP (1) MAX(d.Id) FROM [dbo].WebDocumentationList d WHERE d.Id <> @RecId AND d.[Name] = @RecName)
		;
	END
END
*/

```    
			
---   
			### TR TR_CurrencyList     
			
```sql   
			CREATE   TRIGGER [dbo].[TR_CurrencyList] ON [dbo].[BasicCurrencyList]
FOR INSERT, UPDATE, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setDefault bit;DECLARE @RecId int;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setDefault = ins.[Default] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;

		IF(@setDefault = 1) BEGIN
			UPDATE [dbo].BasicCurrencyList SET [Default] = 0 WHERE Id <> @RecId; 		
		END
	END ELSE
		BEGIN -- INSERT
			SELECT @setDefault = ins.[Default] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;

			IF(@setDefault = 1) BEGIN
				UPDATE [dbo].BasicCurrencyList SET [Default] = 0 WHERE Id <> @RecId; 		
			END
		
		END
END ELSE 
BEGIN --DELETE
	SELECT @setDefault = ins.[Default] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;

	IF(@setDefault = 1) BEGIN
		UPDATE [dbo].BasicCurrencyList SET [Default] = 1  
		WHERE Id IN(SELECT TOP (1) Id FROM [dbo].BasicCurrencyList WHERE Id <> @RecId)
		;
	END
END

```    
			
---   
			### TR TR_ParameterList     
			
```sql   
			CREATE   TRIGGER [dbo].[TR_ParameterList] ON dbo.SystemParameterList
FOR INSERT
AS
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @UserId int;DECLARE @RecId int;DECLARE @SystemName varchar(50);	DECLARE @Value varchar(max);	
	DECLARE @Type varchar(20); DECLARE @Description varchar(MAX);

	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		
		SELECT @UserId = ins.UserId from inserted ins;
		
	END ELSE
		BEGIN -- INSERT

			SELECT @RecId = ins.[Id] from inserted ins;
			SELECT @UserId = ins.[UserId] from inserted ins;
			SELECT @SystemName = ins.[SystemName] from inserted ins;
			SELECT @Type  = ins.[Type] from inserted ins;

			SELECT @Value = CONVERT(varchar(MAX),p.[Value]), @Description = CONVERT(varchar(MAX),p.[Description]) from [dbo].[SystemParameterList] p WHERE p.Id =  @RecId ;
			
			IF (@UserId IS NULL) BEGIN
			
				INSERT INTO [dbo].[SystemParameterList]([UserId],[SystemName],[Value],[Type],[Description])
				SELECT DISTINCT pa.UserId, @SystemName, @Value, @Type, @Description
				FROM [dbo].[SystemParameterList] pa
				WHERE pa.UserId IS NOT NULL;
				
			END
		END
END /* ELSE 
BEGIN --DELETE
	SELECT @UserId = ins.[UserId] from inserted ins;
	SELECT @SystemName = ins.[SystemName] from inserted ins;
	
	IF (@UserId IS NULL) BEGIN
		DELETE FROM [dbo].[SystemParameterList] WHERE [SystemName] = @SystemName;
	END
END*/

```    
			
---   
			