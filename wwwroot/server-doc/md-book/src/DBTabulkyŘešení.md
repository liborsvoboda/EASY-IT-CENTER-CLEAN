# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

Struktura Tabulek te stále Téměř totožná, Pár Pravidel stačí k vytvoření dokonalého Systému

# DB - Export Tabulek Řešení,   
Zde najdete Všechny Tabulky Řešení, Struktura má Centrální Logiku, která zamezuje vzniku chyb    
### TBL BasicAttachmentList     

```sql   
			
 IF OBJECT_ID('[dbo].[BasicAttachmentList]') IS NOT NULL 
 DROP TABLE [dbo].[BasicAttachmentList] 
 GO
 CREATE TABLE [dbo].[BasicAttachmentList] ( 
 [Id]          INT              IDENTITY(1,1)          NOT NULL,
 [ParentId]    INT                                     NOT NULL,
 [ParentType]  VARCHAR(20)                             NOT NULL,
 [FileName]    VARCHAR(150)                            NOT NULL,
 [Attachment]  VARBINARY(max)                          NOT NULL,
 [UserId]      INT                                     NOT NULL,
 [TimeStamp]   DATETIME2                               NOT NULL  CONSTRAINT [DF_AttachmentList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_AttachmentList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [UX_AttachmentList]  UNIQUE      NONCLUSTERED ([ParentId] asc, [FileName] asc) ,
 CONSTRAINT [FK_AttachmentList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_AttachmentList] 
    ON [dbo].[BasicAttachmentList] ([ParentId] asc, [ParentType] asc)
```    
			
---   
			### TBL BasicCalendarList     

```sql   
			
 IF OBJECT_ID('[dbo].[BasicCalendarList]') IS NOT NULL 
 DROP TABLE [dbo].[BasicCalendarList] 
 GO
 CREATE TABLE [dbo].[BasicCalendarList] ( 
 [UserId]     INT                                     NOT NULL,
 [Date]       DATE                                    NOT NULL,
 [Notes]      VARCHAR(1024)                               NULL,
 [TimeStamp]  DATETIME2                               NOT NULL  CONSTRAINT [DF_Calendar_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_Calendar]  PRIMARY KEY CLUSTERED    ([UserId] asc, [Date] asc) ,
 CONSTRAINT [FK_Calendar_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id)  ON UPDATE CASCADE  ON DELETE CASCADE )
 
 
```    
			
---   
			### TBL BasicCurrencyList     

```sql   
			
 IF OBJECT_ID('[dbo].[BasicCurrencyList]') IS NOT NULL 
 DROP TABLE [dbo].[BasicCurrencyList] 
 GO
 CREATE TABLE [dbo].[BasicCurrencyList] ( 
 [Id]            INT              IDENTITY(1,1)          NOT NULL,
 [Name]          VARCHAR(5)                              NOT NULL,
 [ExchangeRate]  NUMERIC(10,2)                           NOT NULL  CONSTRAINT [DF_CurrencyList_ExchangeRate] DEFAULT ((1)),
 [Fixed]         BIT                                     NOT NULL  CONSTRAINT [DF_CurrencyList_Fixed] DEFAULT ((1)),
 [Description]   TEXT                                        NULL,
 [UserId]        INT                                     NOT NULL,
 [Active]        BIT                                     NOT NULL  CONSTRAINT [DF_CurrencyList_Active] DEFAULT ((1)),
 [TimeStamp]     DATETIME2                               NOT NULL  CONSTRAINT [DF_CurrencyList_TimeStamp] DEFAULT (getdate()),
 [Default]       BIT                                     NOT NULL  CONSTRAINT [DF_CurrencyList_Default] DEFAULT ((0)),
 CONSTRAINT   [PK_CurrencyList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_CurrencyList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
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

 GO
```    
			
---   
			### TBL BasicImageGalleryList     

```sql   
			
 IF OBJECT_ID('[dbo].[BasicImageGalleryList]') IS NOT NULL 
 DROP TABLE [dbo].[BasicImageGalleryList] 
 GO
 CREATE TABLE [dbo].[BasicImageGalleryList] ( 
 [Id]          INT              IDENTITY(1,1)          NOT NULL,
 [IsPrimary]   BIT                                     NOT NULL,
 [FileName]    VARCHAR(150)                            NOT NULL,
 [Attachment]  VARBINARY(max)                          NOT NULL,
 [UserId]      INT                                     NOT NULL,
 [TimeStamp]   DATETIME2                               NOT NULL  CONSTRAINT [DF_ImageGalleryList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ImageGalleryList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [UX_ImageGalleryList]  UNIQUE      NONCLUSTERED ([FileName] asc) ,
 CONSTRAINT [FK_ImageGalleryList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 



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

 GO
```    
			
---   
			### TBL BasicItemList     

```sql   
			
 IF OBJECT_ID('[dbo].[BasicItemList]') IS NOT NULL 
 DROP TABLE [dbo].[BasicItemList] 
 GO
 CREATE TABLE [dbo].[BasicItemList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [PartNumber]   VARCHAR(50)                             NOT NULL,
 [Name]         VARCHAR(150)                            NOT NULL,
 [Description]  TEXT                                        NULL,
 [Unit]         VARCHAR(10)                             NOT NULL,
 [Price]        NUMERIC(10,2)                           NOT NULL,
 [VatId]        INT                                     NOT NULL,
 [CurrencyId]   INT                                     NOT NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_ItemList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_ItemList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ItemList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ItemList]  UNIQUE      NONCLUSTERED ([PartNumber] asc) ,
 CONSTRAINT [FK_ItemList_CurrencyList] FOREIGN KEY ([CurrencyId]) REFERENCES [dbo].[BasicCurrencyList] (Id) ,
 CONSTRAINT [FK_ItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [dbo].[BasicUnitList] (Name) ,
 CONSTRAINT [FK_ItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) ,
 CONSTRAINT [FK_ItemList_VatList] FOREIGN KEY ([VatId]) REFERENCES [dbo].[BasicVatList] (Id) )
 
 
```    
			
---   
			### TBL BasicUnitList     

```sql   
			
 IF OBJECT_ID('[dbo].[BasicUnitList]') IS NOT NULL 
 DROP TABLE [dbo].[BasicUnitList] 
 GO
 CREATE TABLE [dbo].[BasicUnitList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(10)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_UnitList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_UnitList_TimeStamp] DEFAULT (getdate()),
 [Default]      BIT                                     NOT NULL  CONSTRAINT [DF_UnitList_Default] DEFAULT ((0)),
 CONSTRAINT   [PK_UnitList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_UnitList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_UnitList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 
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

 GO
```    
			
---   
			### TBL BasicVatList     

```sql   
			
 IF OBJECT_ID('[dbo].[BasicVatList]') IS NOT NULL 
 DROP TABLE [dbo].[BasicVatList] 
 GO
 CREATE TABLE [dbo].[BasicVatList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(20)                             NOT NULL,
 [Value]        NUMERIC(10,2)                           NOT NULL,
 [Default]      BIT                                     NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_VatList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_VatList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_VatList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_VatList]  UNIQUE      NONCLUSTERED ([Value] asc, [Active] asc) ,
 CONSTRAINT [FK_VatList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
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

 GO
```    
			
---   
			### TBL BasicViewAttachmentList     

```sql   
			IF OBJECT_ID('[dbo].[BasicViewAttachmentList]') IS NOT NULL 
 DROP  VIEW      [dbo].[BasicViewAttachmentList] 
 GO
 CREATE VIEW dbo.BasicViewAttachmentList
AS
SELECT        TOP (100) PERCENT AL.Id, AL.FileName, IL.PartNumber, AL.TimeStamp
FROM            dbo.BasicAttachmentList AS AL LEFT OUTER JOIN
                         dbo.BasicItemList AS IL ON AL.ParentId = IL.Id AND AL.ParentType = 'ITEM'
ORDER BY AL.FileName

GO

```    
			
---   
			### TBL BusinessAddressList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessAddressList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessAddressList] 
 GO
 CREATE TABLE [dbo].[BusinessAddressList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [AddressType]  VARCHAR(20)                             NOT NULL,
 [CompanyName]  VARCHAR(150)                            NOT NULL,
 [ContactName]  VARCHAR(150)                                NULL,
 [Street]       VARCHAR(150)                            NOT NULL,
 [City]         VARCHAR(150)                            NOT NULL,
 [PostCode]     VARCHAR(20)                             NOT NULL,
 [Phone]        VARCHAR(20)                             NOT NULL,
 [Email]        VARCHAR(150)                                NULL,
 [BankAccount]  VARCHAR(150)                                NULL,
 [Ico]          VARCHAR(20)                                 NULL,
 [Dic]          VARCHAR(20)                                 NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_AddressList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_AddressList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_AddressList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_AddressList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_AddressList] 
    ON [dbo].[BusinessAddressList] ([AddressType] asc)
```    
			
---   
			### TBL BusinessBranchList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessBranchList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessBranchList] 
 GO
 CREATE TABLE [dbo].[BusinessBranchList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [CompanyName]  VARCHAR(150)                            NOT NULL,
 [ContactName]  VARCHAR(150)                                NULL,
 [Street]       VARCHAR(150)                            NOT NULL,
 [City]         VARCHAR(150)                            NOT NULL,
 [PostCode]     VARCHAR(20)                             NOT NULL,
 [Phone]        VARCHAR(20)                             NOT NULL,
 [Email]        VARCHAR(150)                                NULL,
 [BankAccount]  VARCHAR(150)                                NULL,
 [Ico]          VARCHAR(20)                                 NULL,
 [Dic]          VARCHAR(20)                                 NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_BranchList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_BranchList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_BranchList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_BranchList]  UNIQUE      NONCLUSTERED ([CompanyName] asc) ,
 CONSTRAINT [FK_BranchList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 
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

 GO
 GO
 
 EXEC sys.sp_addextendedproperty
          @name = N'MS_Description', @value = N'',
          @level0type = N'SCHEMA', @level0name = [dbo],
          @level1type = N'TABLE', @level1name = [BusinessBranchList];
```    
			
---   
			### TBL BusinessCreditNoteList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessCreditNoteList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessCreditNoteList] 
 GO
 CREATE TABLE [dbo].[BusinessCreditNoteList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [Supplier]           VARCHAR(512)                            NOT NULL,
 [Customer]           VARCHAR(512)                            NOT NULL,
 [IssueDate]          DATETIME2                               NOT NULL,
 [InvoiceNumber]      VARCHAR(20)                                 NULL,
 [Storned]            BIT                                     NOT NULL,
 [TotalCurrencyId]    INT                                     NOT NULL,
 [Description]        TEXT                                        NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_CreditNoteList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_CreditNoteList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_CreditNoteList]  UNIQUE      NONCLUSTERED ([DocumentNumber] asc) ,
 CONSTRAINT [FK_CreditNoteList_CurrencyList] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [dbo].[BasicCurrencyList] (Id) ,
 CONSTRAINT [FK_CreditNoteList_OutgoingInvoiceList] FOREIGN KEY ([InvoiceNumber]) REFERENCES [dbo].[BusinessOutgoingInvoiceList] (DocumentNumber) ,
 CONSTRAINT [FK_CreditNoteList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL BusinessCreditNoteSupportList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessCreditNoteSupportList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessCreditNoteSupportList] 
 GO
 CREATE TABLE [dbo].[BusinessCreditNoteSupportList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [PartNumber]         VARCHAR(50)                                 NULL,
 [Name]               VARCHAR(150)                            NOT NULL,
 [Unit]               VARCHAR(10)                             NOT NULL,
 [PcsPrice]           NUMERIC(10,2)                           NOT NULL,
 [Count]              NUMERIC(10,2)                           NOT NULL,
 [TotalPrice]         NUMERIC(10,2)                           NOT NULL,
 [Vat]                NUMERIC(10,2)                           NOT NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_CreditNoteItemList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_CreditNoteItemList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_CreditNoteItemList_CreditNoteList] FOREIGN KEY ([DocumentNumber]) REFERENCES [dbo].[BusinessCreditNoteList] (DocumentNumber)  ON DELETE CASCADE ,
 CONSTRAINT [FK_CreditNoteItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [dbo].[BasicUnitList] (Name) ,
 CONSTRAINT [FK_CreditNoteItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL BusinessExchangeRateList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessExchangeRateList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessExchangeRateList] 
 GO
 CREATE TABLE [dbo].[BusinessExchangeRateList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [CurrencyId]   INT                                     NOT NULL,
 [Value]        DECIMAL(10,2)                           NOT NULL,
 [ValidFrom]    DATE                                        NULL,
 [ValidTo]      DATE                                        NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_CourseList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_CourseList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_CourseList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_CourseList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) ,
 CONSTRAINT [FK_ExchangeRateList_CurrencyList] FOREIGN KEY ([CurrencyId]) REFERENCES [dbo].[BasicCurrencyList] (Id) )
 
 
```    
			
---   
			### TBL BusinessIncomingInvoiceList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessIncomingInvoiceList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessIncomingInvoiceList] 
 GO
 CREATE TABLE [dbo].[BusinessIncomingInvoiceList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [Supplier]           VARCHAR(512)                            NOT NULL,
 [Customer]           VARCHAR(512)                            NOT NULL,
 [IssueDate]          DATETIME2                               NOT NULL,
 [TaxDate]            DATETIME2                               NOT NULL,
 [MaturityDate]       DATETIME2                               NOT NULL,
 [PaymentMethodId]    INT                                     NOT NULL,
 [MaturityId]         INT                                     NOT NULL,
 [OrderNumber]        VARCHAR(50)                                 NULL,
 [Storned]            BIT                                     NOT NULL,
 [PaymentStatusId]    INT                                     NOT NULL,
 [TotalCurrencyId]    INT                                     NOT NULL,
 [Description]        TEXT                                        NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_IncomingInvoiceList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_IncomingInvoiceList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_IncomingInvoiceList]  UNIQUE      NONCLUSTERED ([DocumentNumber] asc) ,
 CONSTRAINT [FK_IncomingInvoiceList_CurrencyList] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [dbo].[BasicCurrencyList] (Id) ,
 CONSTRAINT [FK_IncomingInvoiceList_MaturityList] FOREIGN KEY ([MaturityId]) REFERENCES [dbo].[BusinessMaturityList] (Id) ,
 CONSTRAINT [FK_IncomingInvoiceList_PaymentMethodList] FOREIGN KEY ([PaymentMethodId]) REFERENCES [dbo].[BusinessPaymentMethodList] (Id) ,
 CONSTRAINT [FK_IncomingInvoiceList_PaymentStatusList] FOREIGN KEY ([PaymentStatusId]) REFERENCES [dbo].[BusinessPaymentStatusList] (Id) ,
 CONSTRAINT [FK_IncomingInvoiceList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL BusinessIncomingInvoiceSupportList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessIncomingInvoiceSupportList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessIncomingInvoiceSupportList] 
 GO
 CREATE TABLE [dbo].[BusinessIncomingInvoiceSupportList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [PartNumber]         VARCHAR(50)                                 NULL,
 [Name]               VARCHAR(150)                            NOT NULL,
 [Unit]               VARCHAR(10)                             NOT NULL,
 [PcsPrice]           NUMERIC(10,2)                           NOT NULL,
 [Count]              NUMERIC(10,2)                           NOT NULL,
 [TotalPrice]         NUMERIC(10,2)                           NOT NULL,
 [Vat]                NUMERIC(10,2)                           NOT NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_IncomingInvoiceItemList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_IncomingInvoiceItemList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_IncomingInvoiceItemList_IncomingInvoiceList] FOREIGN KEY ([DocumentNumber]) REFERENCES [dbo].[BusinessIncomingInvoiceList] (DocumentNumber)  ON DELETE CASCADE ,
 CONSTRAINT [FK_IncomingInvoiceItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [dbo].[BasicUnitList] (Name) ,
 CONSTRAINT [FK_IncomingInvoiceItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_IncomingInvoiceItemList] 
    ON [dbo].[BusinessIncomingInvoiceSupportList] ([DocumentNumber] asc)
```    
			
---   
			### TBL BusinessIncomingOrderList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessIncomingOrderList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessIncomingOrderList] 
 GO
 CREATE TABLE [dbo].[BusinessIncomingOrderList] ( 
 [Id]                   INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]       VARCHAR(20)                             NOT NULL,
 [Supplier]             VARCHAR(512)                            NOT NULL,
 [Customer]             VARCHAR(512)                            NOT NULL,
 [Storned]              BIT                                     NOT NULL,
 [TotalCurrencyId]      INT                                     NOT NULL,
 [Description]          TEXT                                        NULL,
 [CustomerOrderNumber]  VARCHAR(50)                                 NULL,
 [TotalPriceWithVat]    NUMERIC(10,2)                           NOT NULL,
 [UserId]               INT                                     NOT NULL,
 [TimeStamp]            DATETIME2                               NOT NULL  CONSTRAINT [DF_IncomingOrderList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_IncomingOrderList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_IncomingOrderList]  UNIQUE      NONCLUSTERED ([DocumentNumber] asc) ,
 CONSTRAINT [FK_IncomingOrderList_CurrencyList] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [dbo].[BasicCurrencyList] (Id) ,
 CONSTRAINT [FK_IncomingOrderList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_IncomingOrderList_Supplier] 
    ON [dbo].[BusinessIncomingOrderList] ([Supplier] asc)
```    
			
---   
			### TBL BusinessIncomingOrderSupportList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessIncomingOrderSupportList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessIncomingOrderSupportList] 
 GO
 CREATE TABLE [dbo].[BusinessIncomingOrderSupportList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [PartNumber]         VARCHAR(50)                                 NULL,
 [Name]               VARCHAR(150)                            NOT NULL,
 [Unit]               VARCHAR(10)                             NOT NULL,
 [PcsPrice]           NUMERIC(10,2)                           NOT NULL,
 [Count]              NUMERIC(10,2)                           NOT NULL,
 [TotalPrice]         NUMERIC(10,2)                           NOT NULL,
 [Vat]                NUMERIC(10,2)                           NOT NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_IncomingOrderItemList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_IncomingOrderItemList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_IncomingOrderItemList_IncomingOrderList] FOREIGN KEY ([DocumentNumber]) REFERENCES [dbo].[BusinessIncomingOrderList] (DocumentNumber)  ON DELETE CASCADE ,
 CONSTRAINT [FK_IncomingOrderItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [dbo].[BasicUnitList] (Name) ,
 CONSTRAINT [FK_IncomingOrderItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_IncomingOrderItemList] 
    ON [dbo].[BusinessIncomingOrderSupportList] ([DocumentNumber] asc)
```    
			
---   
			### TBL BusinessMaturityList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessMaturityList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessMaturityList] 
 GO
 CREATE TABLE [dbo].[BusinessMaturityList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(50)                             NOT NULL,
 [Value]        INT                                     NOT NULL,
 [Default]      BIT                                     NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_MaturityList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_MaturityList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_MaturityList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_MaturityList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_MaturityList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 
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

 GO
```    
			
---   
			### TBL BusinessNotesList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessNotesList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessNotesList] 
 GO
 CREATE TABLE [dbo].[BusinessNotesList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(50)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_NotesList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_NotesList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_NotesList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_NotesList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_NotesList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL BusinessOfferList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessOfferList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessOfferList] 
 GO
 CREATE TABLE [dbo].[BusinessOfferList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [Supplier]           VARCHAR(512)                            NOT NULL,
 [Customer]           VARCHAR(512)                            NOT NULL,
 [OfferValidity]      INT                                     NOT NULL,
 [Storned]            BIT                                     NOT NULL,
 [TotalCurrencyId]    INT                                     NOT NULL,
 [Description]        TEXT                                        NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_OfferList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_OfferList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_OfferList]  UNIQUE      NONCLUSTERED ([DocumentNumber] asc) ,
 CONSTRAINT [FK_OfferList_CurrencyList1] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [dbo].[BasicCurrencyList] (Id) ,
 CONSTRAINT [FK_OfferList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_OfferList_Customer] 
    ON [dbo].[BusinessOfferList] ([Customer] asc)
```    
			
---   
			### TBL BusinessOfferSupportList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessOfferSupportList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessOfferSupportList] 
 GO
 CREATE TABLE [dbo].[BusinessOfferSupportList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [PartNumber]         VARCHAR(50)                                 NULL,
 [Name]               VARCHAR(150)                            NOT NULL,
 [Unit]               VARCHAR(10)                             NOT NULL,
 [PcsPrice]           NUMERIC(10,2)                           NOT NULL,
 [Count]              NUMERIC(10,2)                           NOT NULL,
 [TotalPrice]         NUMERIC(10,2)                           NOT NULL,
 [Vat]                NUMERIC(10,2)                           NOT NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_OfferItemList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_OfferItemList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_OfferItemList_OfferList] FOREIGN KEY ([DocumentNumber]) REFERENCES [dbo].[BusinessOfferList] (DocumentNumber)  ON DELETE CASCADE ,
 CONSTRAINT [FK_OfferItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_OfferItemList] 
    ON [dbo].[BusinessOfferSupportList] ([DocumentNumber] asc)
```    
			
---   
			### TBL BusinessOutgoingInvoiceList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessOutgoingInvoiceList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessOutgoingInvoiceList] 
 GO
 CREATE TABLE [dbo].[BusinessOutgoingInvoiceList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [Supplier]           VARCHAR(512)                            NOT NULL,
 [Customer]           VARCHAR(512)                            NOT NULL,
 [IssueDate]          DATETIME2                               NOT NULL,
 [TaxDate]            DATETIME2                               NOT NULL,
 [MaturityDate]       DATETIME2                               NOT NULL,
 [PaymentMethodId]    INT                                     NOT NULL,
 [MaturityId]         INT                                     NOT NULL,
 [OrderNumber]        VARCHAR(50)                                 NULL,
 [Storned]            BIT                                     NOT NULL,
 [PaymentStatusId]    INT                                     NOT NULL,
 [TotalCurrencyId]    INT                                     NOT NULL,
 [Description]        TEXT                                        NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [ReceiptId]          INT                                         NULL,
 [CreditNoteId]       INT                                         NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_OutgoingInvoiceList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_OutgoingInvoiceList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_OutgoingInvoiceList]  UNIQUE      NONCLUSTERED ([DocumentNumber] asc) ,
 CONSTRAINT [FK_OutgoingInvoiceList_CreditNoteList] FOREIGN KEY ([CreditNoteId]) REFERENCES [dbo].[BusinessCreditNoteList] (Id)  ON DELETE SET NULL ,
 CONSTRAINT [FK_OutgoingInvoiceList_CurrencyList] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [dbo].[BasicCurrencyList] (Id) ,
 CONSTRAINT [FK_OutgoingInvoiceList_MaturityList] FOREIGN KEY ([MaturityId]) REFERENCES [dbo].[BusinessMaturityList] (Id) ,
 CONSTRAINT [FK_OutgoingInvoiceList_PaymentMethodList] FOREIGN KEY ([PaymentMethodId]) REFERENCES [dbo].[BusinessPaymentMethodList] (Id) ,
 CONSTRAINT [FK_OutgoingInvoiceList_PaymentStatusList] FOREIGN KEY ([PaymentStatusId]) REFERENCES [dbo].[BusinessPaymentStatusList] (Id) ,
 CONSTRAINT [FK_OutgoingInvoiceList_ReceiptList] FOREIGN KEY ([ReceiptId]) REFERENCES [dbo].[BusinessReceiptList] (Id)  ON DELETE SET NULL ,
 CONSTRAINT [FK_OutgoingInvoiceList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_OutgoingInvoiceList_Customer] 
    ON [dbo].[BusinessOutgoingInvoiceList] ([Customer] asc)
```    
			
---   
			### TBL BusinessOutgoingInvoiceSupportList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessOutgoingInvoiceSupportList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessOutgoingInvoiceSupportList] 
 GO
 CREATE TABLE [dbo].[BusinessOutgoingInvoiceSupportList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [PartNumber]         VARCHAR(50)                                 NULL,
 [Name]               VARCHAR(150)                            NOT NULL,
 [Unit]               VARCHAR(10)                             NOT NULL,
 [PcsPrice]           NUMERIC(10,2)                           NOT NULL,
 [Count]              NUMERIC(10,2)                           NOT NULL,
 [TotalPrice]         NUMERIC(10,2)                           NOT NULL,
 [Vat]                NUMERIC(10,2)                           NOT NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_OutgoingInvoiceItemList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_OutgoingInvoiceItemList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_OutgoingInvoiceItemList_OutgoingInvoiceList] FOREIGN KEY ([DocumentNumber]) REFERENCES [dbo].[BusinessOutgoingInvoiceList] (DocumentNumber)  ON DELETE CASCADE ,
 CONSTRAINT [FK_OutgoingInvoiceItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [dbo].[BasicUnitList] (Name) ,
 CONSTRAINT [FK_OutgoingInvoiceItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_OutgoingInvoiceItemList] 
    ON [dbo].[BusinessOutgoingInvoiceSupportList] ([DocumentNumber] asc)
```    
			
---   
			### TBL BusinessOutgoingOrderList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessOutgoingOrderList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessOutgoingOrderList] 
 GO
 CREATE TABLE [dbo].[BusinessOutgoingOrderList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [Customer]           VARCHAR(512)                            NOT NULL,
 [Supplier]           VARCHAR(512)                            NOT NULL,
 [Storned]            BIT                                     NOT NULL,
 [TotalCurrencyId]    INT                                     NOT NULL,
 [Description]        TEXT                                        NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_OutgoingOrderList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_OutgoingOrderList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_OutgoingOrderList]  UNIQUE      NONCLUSTERED ([DocumentNumber] asc) ,
 CONSTRAINT [FK_OutgoingOrderList_CurrencyList] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [dbo].[BasicCurrencyList] (Id) ,
 CONSTRAINT [FK_OutgoingOrderList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_OutgoingOrderList_Supplier] 
    ON [dbo].[BusinessOutgoingOrderList] ([Supplier] asc)
```    
			
---   
			### TBL BusinessOutgoingOrderSupportList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessOutgoingOrderSupportList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessOutgoingOrderSupportList] 
 GO
 CREATE TABLE [dbo].[BusinessOutgoingOrderSupportList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [PartNumber]         VARCHAR(50)                                 NULL,
 [Name]               VARCHAR(150)                            NOT NULL,
 [Unit]               VARCHAR(10)                             NOT NULL,
 [PcsPrice]           NUMERIC(10,2)                           NOT NULL,
 [Count]              NUMERIC(10,2)                           NOT NULL,
 [TotalPrice]         NUMERIC(10,2)                           NOT NULL,
 [Vat]                NUMERIC(10,2)                           NOT NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_OutgoingOrderItemList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_OutgoingOrderItemList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_OutgoingOrderItemList_OutgoingOrderList] FOREIGN KEY ([DocumentNumber]) REFERENCES [dbo].[BusinessOutgoingOrderList] (DocumentNumber)  ON DELETE CASCADE ,
 CONSTRAINT [FK_OutgoingOrderItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [dbo].[BasicUnitList] (Name) ,
 CONSTRAINT [FK_OutgoingOrderItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_OutgoingOrderItemList] 
    ON [dbo].[BusinessOutgoingOrderSupportList] ([DocumentNumber] asc)
```    
			
---   
			### TBL BusinessPaymentMethodList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessPaymentMethodList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessPaymentMethodList] 
 GO
 CREATE TABLE [dbo].[BusinessPaymentMethodList] ( 
 [Id]                    INT              IDENTITY(1,1)          NOT NULL,
 [Name]                  VARCHAR(20)                             NOT NULL,
 [Default]               BIT                                     NOT NULL,
 [Description]           TEXT                                        NULL,
 [AutoGenerateReceipt]   BIT                                     NOT NULL  CONSTRAINT [DF_PaymentMethodList_AutoGenerateReceipt] DEFAULT ((0)),
 [AllowGenerateReceipt]  BIT                                     NOT NULL  CONSTRAINT [DF_PaymentMethodList_AllowGenerateReceipt] DEFAULT ((0)),
 [UserId]                INT                                     NOT NULL,
 [Active]                BIT                                     NOT NULL  CONSTRAINT [DF_PaymentMethodList_Active] DEFAULT ((1)),
 [TimeStamp]             DATETIME2                               NOT NULL  CONSTRAINT [DF_PaymentMethodList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_PaymentMethodList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_PaymentMethodList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_PaymentMethodList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
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

 GO
```    
			
---   
			### TBL BusinessPaymentStatusList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessPaymentStatusList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessPaymentStatusList] 
 GO
 CREATE TABLE [dbo].[BusinessPaymentStatusList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(50)                             NOT NULL,
 [Default]      BIT                                     NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_PaymentStatusList_Active] DEFAULT ((1)),
 [Receipt]      BIT                                     NOT NULL  CONSTRAINT [DF_PaymentStatusList_Receipt] DEFAULT ((0)),
 [CreditNote]   BIT                                     NOT NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_PaymentStatusList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_PaymentStatusList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_PaymentStatusList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_PaymentStatusList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
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

 GO
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

 GO
 
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

 GO
```    
			
---   
			### TBL BusinessReceiptList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessReceiptList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessReceiptList] 
 GO
 CREATE TABLE [dbo].[BusinessReceiptList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [InvoiceNumber]      VARCHAR(20)                                 NULL,
 [Supplier]           VARCHAR(512)                            NOT NULL,
 [Customer]           VARCHAR(512)                            NOT NULL,
 [IssueDate]          DATETIME2                               NOT NULL,
 [Storned]            BIT                                     NOT NULL,
 [TotalCurrencyId]    INT                                     NOT NULL,
 [Description]        TEXT                                        NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_ReceiptList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ReceiptList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ReceiptList]  UNIQUE      NONCLUSTERED ([DocumentNumber] asc) ,
 CONSTRAINT [FK_ReceiptList_CurrencyList] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [dbo].[BasicCurrencyList] (Id) ,
 CONSTRAINT [FK_ReceiptList_OutgoingInvoiceList] FOREIGN KEY ([InvoiceNumber]) REFERENCES [dbo].[BusinessOutgoingInvoiceList] (DocumentNumber)  ON DELETE SET NULL ,
 CONSTRAINT [FK_ReceiptList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL BusinessReceiptSupportList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessReceiptSupportList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessReceiptSupportList] 
 GO
 CREATE TABLE [dbo].[BusinessReceiptSupportList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [DocumentNumber]     VARCHAR(20)                             NOT NULL,
 [PartNumber]         VARCHAR(50)                                 NULL,
 [Name]               VARCHAR(150)                            NOT NULL,
 [Unit]               VARCHAR(10)                             NOT NULL,
 [PcsPrice]           NUMERIC(10,2)                           NOT NULL,
 [Count]              NUMERIC(10,2)                           NOT NULL,
 [TotalPrice]         NUMERIC(10,2)                           NOT NULL,
 [Vat]                NUMERIC(10,2)                           NOT NULL,
 [TotalPriceWithVat]  NUMERIC(10,2)                           NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_ReceiptItemList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ReceiptItemList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_ReceiptItemList_ReceiptList] FOREIGN KEY ([DocumentNumber]) REFERENCES [dbo].[BusinessReceiptList] (DocumentNumber)  ON DELETE CASCADE ,
 CONSTRAINT [FK_ReceiptItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [dbo].[BasicUnitList] (Name) ,
 CONSTRAINT [FK_ReceiptItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL BusinessWarehouseList     

```sql   
			
 IF OBJECT_ID('[dbo].[BusinessWarehouseList]') IS NOT NULL 
 DROP TABLE [dbo].[BusinessWarehouseList] 
 GO
 CREATE TABLE [dbo].[BusinessWarehouseList] ( 
 [Id]                   INT              IDENTITY(1,1)          NOT NULL,
 [Name]                 VARCHAR(50)                             NOT NULL,
 [Description]          TEXT                                        NULL,
 [UserId]               INT                                     NOT NULL,
 [AllowNegativeStatus]  BIT                                     NOT NULL,
 [Default]              BIT                                     NOT NULL,
 [LockedByStockTaking]  BIT                                     NOT NULL  CONSTRAINT [DF_WarehouseList_IsLocked] DEFAULT ((0)),
 [LastStockTaking]      DATETIME2                               NOT NULL  CONSTRAINT [DF_WarehouseList_LastStockTaking] DEFAULT (getdate()),
 [Active]               BIT                                     NOT NULL  CONSTRAINT [DF_WarehouseList_Active] DEFAULT ((1)),
 [TimeStamp]            DATETIME2                               NOT NULL  CONSTRAINT [DF_WarehouseList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WarehouseList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WarehouseList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_WarehouseList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
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

 GO
```    
			
---   
			### TBL DocSrvDocTemplateList     

```sql   
			
 IF OBJECT_ID('[dbo].[DocSrvDocTemplateList]') IS NOT NULL 
 DROP TABLE [dbo].[DocSrvDocTemplateList] 
 GO
 CREATE TABLE [dbo].[DocSrvDocTemplateList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [InheritedCodeType]  VARCHAR(50)                             NOT NULL,
 [GroupId]            INT                                     NOT NULL,
 [Sequence]           INT                                     NOT NULL,
 [Name]               VARCHAR(50)                             NOT NULL,
 [Description]        TEXT                                        NULL,
 [Template]           VARCHAR(max)                                NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_DocSrvDocTemplateList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_DocSrvDocTemplateList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_DocSrvDocTemplateList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_DocSrvDocTemplateList_DocSrvDocumentationGroupList] FOREIGN KEY ([GroupId]) REFERENCES [dbo].[DocSrvDocumentationGroupList] (Id) ,
 CONSTRAINT [FK_DocSrvDocTemplateList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL DocSrvDocumentationCodeLibraryList     

```sql   
			
 IF OBJECT_ID('[dbo].[DocSrvDocumentationCodeLibraryList]') IS NOT NULL 
 DROP TABLE [dbo].[DocSrvDocumentationCodeLibraryList] 
 GO
 CREATE TABLE [dbo].[DocSrvDocumentationCodeLibraryList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(50)                             NOT NULL,
 [Description]  VARCHAR(2096)                               NULL,
 [MdContent]    TEXT                                    NOT NULL,
 [HtmlContent]  TEXT                                    NOT NULL,
 [UserId]       INT                                     NOT NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_DocumentationCodeLibraryList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_DocumentationCodeLibraryList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_DocumentationCodeLibraryList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_DocumentationCodeLibraryList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL DocSrvDocumentationGroupList     

```sql   
			
 IF OBJECT_ID('[dbo].[DocSrvDocumentationGroupList]') IS NOT NULL 
 DROP TABLE [dbo].[DocSrvDocumentationGroupList] 
 GO
 CREATE TABLE [dbo].[DocSrvDocumentationGroupList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(50)                             NOT NULL,
 [Sequence]     INT                                     NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_DocumentationGroupList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_DocumentationGroupList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_DocumentationGroupList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_DocumentationGroupList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_DocumentationGroupList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL DocSrvDocumentationList     

```sql   
			
 IF OBJECT_ID('[dbo].[DocSrvDocumentationList]') IS NOT NULL 
 DROP TABLE [dbo].[DocSrvDocumentationList] 
 GO
 CREATE TABLE [dbo].[DocSrvDocumentationList] ( 
 [Id]                    INT              IDENTITY(1,1)          NOT NULL,
 [DocumentationGroupId]  INT                                     NOT NULL,
 [Name]                  VARCHAR(150)                            NOT NULL,
 [Sequence]              INT                                     NOT NULL,
 [Description]           TEXT                                        NULL,
 [MdContent]             TEXT                                    NOT NULL,
 [HtmlContent]           TEXT                                    NOT NULL,
 [UserId]                INT                                     NOT NULL,
 [Active]                BIT                                     NOT NULL  CONSTRAINT [DF_DocumentationList_Active] DEFAULT ((1)),
 [AutoVersion]           INT                                     NOT NULL,
 [TimeStamp]             DATETIME2                               NOT NULL  CONSTRAINT [DF_DocumentationList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_DocumentationList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_DocumentationList]  UNIQUE      NONCLUSTERED ([Name] asc, [DocumentationGroupId] asc, [AutoVersion] asc, [TimeStamp] asc) ,
 CONSTRAINT [FK_DocumentationList_DocumentationGroupList] FOREIGN KEY ([DocumentationGroupId]) REFERENCES [dbo].[DocSrvDocumentationGroupList] (Id) ,
 CONSTRAINT [FK_DocumentationList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
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

 GO
```    
			
---   
			### TBL GithubSrvAuthLogList     

```sql   
			
 IF OBJECT_ID('[dbo].[GithubSrvAuthLogList]') IS NOT NULL 
 DROP TABLE [dbo].[GithubSrvAuthLogList] 
 GO
 CREATE TABLE [dbo].[GithubSrvAuthLogList] ( 
 [Id]         INT              IDENTITY(1,1)          NOT NULL,
 [IssueDate]  DATETIME2                               NOT NULL,
 [Expires]    DATETIME2                               NOT NULL,
 [IssueIp]    NVARCHAR(max)                               NULL,
 [LastIp]     NVARCHAR(max)                               NULL,
 [IsValid]    BIT                                     NOT NULL,
 [UserId]     INT                                     NOT NULL,
 [TimeStamp]  DATETIME2                               NOT NULL  CONSTRAINT [DF_GithubSrvAuthLogList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_GithubSrvAuthLogList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_GithubSrvAuthLogList_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id)  ON DELETE CASCADE )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_GithubSrvAuthLogList_UserId] 
    ON [dbo].[GithubSrvAuthLogList] ([UserId] asc)
```    
			
---   
			### TBL GithubSrvRepositoryList     

```sql   
			
 IF OBJECT_ID('[dbo].[GithubSrvRepositoryList]') IS NOT NULL 
 DROP TABLE [dbo].[GithubSrvRepositoryList] 
 GO
 CREATE TABLE [dbo].[GithubSrvRepositoryList] ( 
 [Id]             INT              IDENTITY(1,1)          NOT NULL,
 [UserId]         INT                                     NOT NULL,
 [UserName]       VARCHAR(150)                                NULL,
 [Name]           VARCHAR(150)                                NULL,
 [Description]    TEXT                                        NULL,
 [DefaultBranch]  VARCHAR(1024)                               NULL,
 [NumIssues]      INT                                     NOT NULL,
 [NumOpenIssues]  INT                                     NOT NULL,
 [NumPulls]       INT                                     NOT NULL,
 [NumOpenPulls]   INT                                     NOT NULL,
 [CreationDate]   DATETIME2                               NOT NULL,
 [IsPrivate]      BIT                                     NOT NULL,
 [IsMirror]       BIT                                     NOT NULL,
 [Size]           BIGINT                                  NOT NULL,
 [UpdateTime]     DATETIME2                               NOT NULL,
 [TimeStamp]      DATETIME2                               NOT NULL  CONSTRAINT [DF_GithubSrvRepositoryList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_GithubSrvRepositoryList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_GithubSrvRepositoryList_SolutionUserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL GithubSrvSshKeyList     

```sql   
			
 IF OBJECT_ID('[dbo].[GithubSrvSshKeyList]') IS NOT NULL 
 DROP TABLE [dbo].[GithubSrvSshKeyList] 
 GO
 CREATE TABLE [dbo].[GithubSrvSshKeyList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [UserId]       INT                                     NOT NULL,
 [KeyType]      NVARCHAR(max)                               NULL,
 [Fingerprint]  NVARCHAR(max)                               NULL,
 [PublicKey]    NVARCHAR(max)                               NULL,
 [ImportData]   DATETIME2                               NOT NULL,
 [LastUse]      DATETIME2                               NOT NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_GithubSrvSshKeyList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_GithubSrvSshKeyList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_GithubSrvSshKeyList_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id)  ON DELETE CASCADE )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_GithubSrvSshKeyList_UserId] 
    ON [dbo].[GithubSrvSshKeyList] ([UserId] asc)
```    
			
---   
			### TBL GithubSrvTeamList     

```sql   
			
 IF OBJECT_ID('[dbo].[GithubSrvTeamList]') IS NOT NULL 
 DROP TABLE [dbo].[GithubSrvTeamList] 
 GO
 CREATE TABLE [dbo].[GithubSrvTeamList] ( 
 [Id]            INT              IDENTITY(1,1)          NOT NULL,
 [Name]          VARCHAR(150)                                NULL,
 [Description]   TEXT                                        NULL,
 [CreationDate]  DATETIME2                               NOT NULL,
 [TimeStamp]     DATETIME2                               NOT NULL  CONSTRAINT [DF_GithubSrvTeamList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_GithubSrvTeamList]  PRIMARY KEY CLUSTERED    ([Id] asc) )
 
 
```    
			
---   
			### TBL GithubSrvTeamRepositoryRoleList     

```sql   
			
 IF OBJECT_ID('[dbo].[GithubSrvTeamRepositoryRoleList]') IS NOT NULL 
 DROP TABLE [dbo].[GithubSrvTeamRepositoryRoleList] 
 GO
 CREATE TABLE [dbo].[GithubSrvTeamRepositoryRoleList] ( 
 [Id]            INT              IDENTITY(1,1)          NOT NULL,
 [TeamId]        INT                                     NOT NULL,
 [RepositoryId]  INT                                     NOT NULL,
 [AllowRead]     BIT                                     NOT NULL,
 [AllowWrite]    BIT                                     NOT NULL,
 [TimeStamp]     DATETIME2                               NOT NULL  CONSTRAINT [DF_GithubSrvTeamRepositoryRoleList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_GithubSrvTeamRepositoryRoleList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_GithubSrvTeamRepositoryRoleList]  UNIQUE      NONCLUSTERED ([TeamId] asc, [RepositoryId] asc) ,
 CONSTRAINT [FK_GithubSrvTeamRepositoryRoleList_RepositoryId] FOREIGN KEY ([RepositoryId]) REFERENCES [dbo].[GithubSrvRepositoryList] (Id)  ON DELETE CASCADE ,
 CONSTRAINT [FK_GithubSrvTeamRepositoryRoleList_TeamId] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[GithubSrvTeamList] (Id)  ON DELETE CASCADE )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_GithubSrvTeamRepositoryRoleList_RepositoryId] 
    ON [dbo].[GithubSrvTeamRepositoryRoleList] ([RepositoryId] asc)
```    
			
---   
			### TBL GithubSrvUserTeamRoleList     

```sql   
			
 IF OBJECT_ID('[dbo].[GithubSrvUserTeamRoleList]') IS NOT NULL 
 DROP TABLE [dbo].[GithubSrvUserTeamRoleList] 
 GO
 CREATE TABLE [dbo].[GithubSrvUserTeamRoleList] ( 
 [Id]         INT              IDENTITY(1,1)          NOT NULL,
 [TeamId]     INT                                     NOT NULL,
 [IsAdmin]    BIT                                     NOT NULL,
 [UserId]     INT                                     NOT NULL,
 [TimeStamp]  DATETIME2                               NOT NULL  CONSTRAINT [DF_GithubSrvUserTeamRoleList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_GithubSrvUserTeamRoleList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_GithubSrvUserTeamRoleList]  UNIQUE      NONCLUSTERED ([TeamId] asc, [UserId] asc) ,
 CONSTRAINT [FK_GithubSrvUserTeamRoleList_TeamId] FOREIGN KEY ([TeamId]) REFERENCES [dbo].[GithubSrvTeamList] (Id)  ON DELETE CASCADE ,
 CONSTRAINT [FK_GithubSrvUserTeamRoleList_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id)  ON DELETE CASCADE )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_GithubSrvUserTeamRoleList_TeamId] 
    ON [dbo].[GithubSrvUserTeamRoleList] ([TeamId] asc)
```    
			
---   
			### TBL LicSrvLicenseActivationFailList     

```sql   
			
 IF OBJECT_ID('[dbo].[LicSrvLicenseActivationFailList]') IS NOT NULL 
 DROP TABLE [dbo].[LicSrvLicenseActivationFailList] 
 GO
 CREATE TABLE [dbo].[LicSrvLicenseActivationFailList] ( 
 [Id]          INT              IDENTITY(1,1)          NOT NULL,
 [IpAddress]   VARCHAR(50)                             NOT NULL,
 [UnlockCode]  VARCHAR(50)                                 NULL,
 [PartNumber]  VARCHAR(50)                                 NULL,
 [TimeStamp]   DATETIME2                               NOT NULL  CONSTRAINT [DF_LicenceActivationFailList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_LicenseActivationFailList]  PRIMARY KEY CLUSTERED    ([Id] asc) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_LicenseActivationFailList_PartNumber] 
    ON [dbo].[LicSrvLicenseActivationFailList] ([PartNumber] asc)
 CREATE NONCLUSTERED INDEX [IX_LicenseActivationFailList_IpAddress] 
    ON [dbo].[LicSrvLicenseActivationFailList] ([IpAddress] asc)
```    
			
---   
			### TBL LicSrvLicenseAlgorithmList     

```sql   
			
 IF OBJECT_ID('[dbo].[LicSrvLicenseAlgorithmList]') IS NOT NULL 
 DROP TABLE [dbo].[LicSrvLicenseAlgorithmList] 
 GO
 CREATE TABLE [dbo].[LicSrvLicenseAlgorithmList] ( 
 [Id]               INT              IDENTITY(1,1)          NOT NULL,
 [AddressId]        INT                                     NOT NULL,
 [ItemId]           INT                                     NOT NULL,
 [Name]             VARCHAR(30)                             NOT NULL,
 [ValidFrom]        DATE                                        NULL,
 [ValidTo]          DATE                                        NULL,
 [Algorithm]        VARCHAR(2000)                           NOT NULL,
 [Description]      TEXT                                        NULL,
 [LimitActive]      BIT                                     NOT NULL,
 [ActivationLimit]  INT                                         NULL,
 [UsedCount]        INT                                     NOT NULL,
 [Active]           BIT                                     NOT NULL,
 [UserId]           INT                                     NOT NULL,
 [TimeStamp]        DATETIME2                               NOT NULL  CONSTRAINT [DF_LicSrvLicenseAlgorithmList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_LicSrvLicenseAlgorithmList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_LicSrvLicenseAlgorithmList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_LicenseAlgorithmList_AddressList] FOREIGN KEY ([AddressId]) REFERENCES [dbo].[BusinessAddressList] (Id) ,
 CONSTRAINT [FK_LicenseAlgorithmList_ItemList] FOREIGN KEY ([ItemId]) REFERENCES [dbo].[BasicItemList] (Id) ,
 CONSTRAINT [FK_LicenseAlgorithmList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL LicSrvUsedLicenseList     

```sql   
			
 IF OBJECT_ID('[dbo].[LicSrvUsedLicenseList]') IS NOT NULL 
 DROP TABLE [dbo].[LicSrvUsedLicenseList] 
 GO
 CREATE TABLE [dbo].[LicSrvUsedLicenseList] ( 
 [Id]             INT              IDENTITY(1,1)          NOT NULL,
 [AlgorithmName]  VARCHAR(30)                             NOT NULL,
 [PartNumber]     VARCHAR(50)                             NOT NULL,
 [UnlockCode]     VARCHAR(50)                             NOT NULL,
 [AddressId]      INT                                     NOT NULL,
 [ItemId]         INT                                     NOT NULL,
 [License]        VARCHAR(50)                             NOT NULL,
 [ActivateDate]   DATETIME2                               NOT NULL  CONSTRAINT [DF_UsedLicenceList_ActivateDate] DEFAULT (getdate()),
 [IpAddress]      VARCHAR(50)                             NOT NULL,
 CONSTRAINT   [PK_UsedLicenseList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_UsedLicenseList_AddressList] FOREIGN KEY ([AddressId]) REFERENCES [dbo].[BusinessAddressList] (Id) ,
 CONSTRAINT [FK_UsedLicenseList_ItemList] FOREIGN KEY ([ItemId]) REFERENCES [dbo].[BasicItemList] (Id) )
 
 
```    
			
---   
			### TBL ProdGuidGroupList     

```sql   
			
 IF OBJECT_ID('[dbo].[ProdGuidGroupList]') IS NOT NULL 
 DROP TABLE [dbo].[ProdGuidGroupList] 
 GO
 CREATE TABLE [dbo].[ProdGuidGroupList] ( 
 [Id]         INT              IDENTITY(1,1)          NOT NULL,
 [Name]       VARCHAR(50)                             NOT NULL,
 [UserId]     INT                                     NOT NULL,
 [Timestamp]  DATETIME2                               NOT NULL,
 CONSTRAINT   [PK_ProdGuidGroupList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ProdGuidGroupList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_ProdGuidGroupList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ProdGuidOperationList     

```sql   
			
 IF OBJECT_ID('[dbo].[ProdGuidOperationList]') IS NOT NULL 
 DROP TABLE [dbo].[ProdGuidOperationList] 
 GO
 CREATE TABLE [dbo].[ProdGuidOperationList] ( 
 [Id]               INT              IDENTITY(1,1)          NOT NULL,
 [WorkPlace]        INT                                     NOT NULL,
 [PartNumber]       VARCHAR(50)                             NOT NULL,
 [OperationNumber]  INT                                     NOT NULL,
 [Note]             VARCHAR(100)                            NOT NULL,
 [PcsPerHour]       INT                                     NOT NULL,
 [KcPerKs]          NUMERIC(10,4)                           NOT NULL,
 [UserId]           INT                                     NOT NULL,
 [Timestamp]        DATETIME2                               NOT NULL,
 CONSTRAINT   [PK_ProdGuidOperationList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ProdGuidOperationList]  UNIQUE      NONCLUSTERED ([WorkPlace] asc, [OperationNumber] asc) ,
 CONSTRAINT [FK_ProdGuidOperationList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ProdGuidPartList     

```sql   
			
 IF OBJECT_ID('[dbo].[ProdGuidPartList]') IS NOT NULL 
 DROP TABLE [dbo].[ProdGuidPartList] 
 GO
 CREATE TABLE [dbo].[ProdGuidPartList] ( 
 [Id]         INT              IDENTITY(1,1)          NOT NULL,
 [WorkPlace]  INT                                     NOT NULL,
 [Number]     VARCHAR(50)                             NOT NULL,
 [Name]       VARCHAR(100)                                NULL,
 [UserId]     INT                                     NOT NULL,
 [Timestamp]  DATETIME2                               NOT NULL,
 CONSTRAINT   [PK_ProdGuidPartList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ProdGuidPartList]  UNIQUE      NONCLUSTERED ([WorkPlace] asc, [Number] asc) ,
 CONSTRAINT [FK_ProdGuidPartList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ProdGuidPersonList     

```sql   
			
 IF OBJECT_ID('[dbo].[ProdGuidPersonList]') IS NOT NULL 
 DROP TABLE [dbo].[ProdGuidPersonList] 
 GO
 CREATE TABLE [dbo].[ProdGuidPersonList] ( 
 [Id]              INT              IDENTITY(1,1)          NOT NULL,
 [GroupId]         INT                                     NOT NULL,
 [PersonalNumber]  INT                                     NOT NULL,
 [Name]            VARCHAR(50)                             NOT NULL,
 [SurName]         VARCHAR(100)                            NOT NULL,
 [UserId]          INT                                     NOT NULL,
 [Timestamp]       DATETIME2                               NOT NULL,
 CONSTRAINT   [PK_ProdGuidPersonList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ProdGuidPersonList]  UNIQUE      NONCLUSTERED ([PersonalNumber] asc) ,
 CONSTRAINT [FK_ProdGuidPersonList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ProdGuidWorkList     

```sql   
			
 IF OBJECT_ID('[dbo].[ProdGuidWorkList]') IS NOT NULL 
 DROP TABLE [dbo].[ProdGuidWorkList] 
 GO
 CREATE TABLE [dbo].[ProdGuidWorkList] ( 
 [Id]               INT              IDENTITY(1,1)          NOT NULL,
 [Date]             DATETIME2                               NOT NULL,
 [PersonalNumber]   INT                                     NOT NULL,
 [WorkPlace]        INT                                     NOT NULL,
 [OperationNumber]  INT                                     NOT NULL,
 [WorkTime]         TIME                                    NOT NULL,
 [Pcs]              INT                                     NOT NULL,
 [Amount]           NUMERIC(10,2)                           NOT NULL,
 [WorkPower]        NUMERIC(10,2)                           NOT NULL,
 [UserId]           INT                                     NOT NULL,
 [Timestamp]        DATETIME2                               NOT NULL,
 CONSTRAINT   [PK_ProdGuidWorkList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_ProdGuidWorkList_ProdGuidPersonList] FOREIGN KEY ([PersonalNumber]) REFERENCES [dbo].[ProdGuidPersonList] (PersonalNumber) ,
 CONSTRAINT [FK_ProdGuidWorkList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ProviderAutoGenServerReqList     

```sql   
			
 IF OBJECT_ID('[dbo].[ProviderAutoGenServerReqList]') IS NOT NULL 
 DROP TABLE [dbo].[ProviderAutoGenServerReqList] 
 GO
 CREATE TABLE [dbo].[ProviderAutoGenServerReqList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [IpAddress]    VARCHAR(20)                             NOT NULL,
 [Name]         VARCHAR(100)                            NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                         NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_ProviderAutoGenServerCreateRequest_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ProviderAutoGenServerCreateRequest]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ProviderAutoGenServerCreateRequest]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_ProviderAutoGenServerCreateRequest_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ProviderGeneratedLicenseList     

```sql   
			
 IF OBJECT_ID('[dbo].[ProviderGeneratedLicenseList]') IS NOT NULL 
 DROP TABLE [dbo].[ProviderGeneratedLicenseList] 
 GO
 CREATE TABLE [dbo].[ProviderGeneratedLicenseList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [PartNumber]   VARCHAR(50)                             NOT NULL,
 [Type]         VARCHAR(50)                             NOT NULL,
 [Expiration]   DATETIME2                               NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_ProviderGeneratedLicenseList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ProviderGeneratedLicenseList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ProviderGeneratedLicenseList]  UNIQUE      NONCLUSTERED ([PartNumber] asc) ,
 CONSTRAINT [FK_ProviderGeneratedLicenseList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ProviderGeneratedToolList     

```sql   
			
 IF OBJECT_ID('[dbo].[ProviderGeneratedToolList]') IS NOT NULL 
 DROP TABLE [dbo].[ProviderGeneratedToolList] 
 GO
 CREATE TABLE [dbo].[ProviderGeneratedToolList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(50)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Rating]       INT                                         NULL,
 [DescActive]   BIT                                     NOT NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_GeneratedToolList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_GeneratedToolList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_GeneratedToolList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_GeneratedToolList] 
    ON [dbo].[ProviderGeneratedToolList] ([Name] asc, [UserId] asc)
 CREATE NONCLUSTERED INDEX [IX_GeneratedToolList_1] 
    ON [dbo].[ProviderGeneratedToolList] ([Name] asc)
 CREATE NONCLUSTERED INDEX [IX_GeneratedToolList_2] 
    ON [dbo].[ProviderGeneratedToolList] ([UserId] asc)
```    
			
---   
			### TBL ProviderViewGeneratedToolRatingList     

```sql   
			IF OBJECT_ID('[dbo].[ProviderViewGeneratedToolRatingList]') IS NOT NULL 
 DROP  VIEW      [dbo].[ProviderViewGeneratedToolRatingList] 
 GO
 CREATE VIEW dbo.ProviderViewGeneratedToolRatingList
AS
SELECT        Name, AVG(Rating) AS Rating, COUNT(Id) AS CountRating,
                             (SELECT        COUNT(Id) AS Expr1
                               FROM            dbo.ProviderGeneratedToolList AS gt
                               WHERE        (Name = g.Name)) AS TotalCount
FROM            dbo.ProviderGeneratedToolList AS g
WHERE        (Rating IS NOT NULL)
GROUP BY Name

GO

```    
			
---   
			### TBL ServerApiSecurityList     

```sql   
			
 IF OBJECT_ID('[dbo].[ServerApiSecurityList]') IS NOT NULL 
 DROP TABLE [dbo].[ServerApiSecurityList] 
 GO
 CREATE TABLE [dbo].[ServerApiSecurityList] ( 
 [Id]                     INT              IDENTITY(1,1)          NOT NULL,
 [InheritedApiType]       VARCHAR(50)                             NOT NULL,
 [Name]                   VARCHAR(50)                             NOT NULL,
 [Description]            TEXT                                        NULL,
 [UrlSubPath]             VARCHAR(100)                                NULL,
 [WriteAllowedRoles]      VARCHAR(500)                                NULL,
 [ReadAllowedRoles]       VARCHAR(500)                                NULL,
 [WriteRestrictedAccess]  BIT                                     NOT NULL,
 [ReadRestrictedAccess]   BIT                                     NOT NULL  CONSTRAINT [DF_ServerApiSecurityList_ReadRestrictedAccess] DEFAULT ((0)),
 [RedirectPathOnError]    VARCHAR(100)                                NULL,
 [Active]                 BIT                                     NOT NULL  CONSTRAINT [DF_ServerApiSecurityList_Active] DEFAULT ((1)),
 [UserId]                 INT                                     NOT NULL,
 [TimeStamp]              DATETIME2                               NOT NULL  CONSTRAINT [DF_ServerApiSecurityList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ServerApiSecurityList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ServerApiSecurityList_2]  UNIQUE      NONCLUSTERED ([UrlSubPath] asc) ,
 CONSTRAINT   [IX_ServerApiSecurityList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_ServerApiSecurityList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ServerCorsDefAllowedOriginList     

```sql   
			
 IF OBJECT_ID('[dbo].[ServerCorsDefAllowedOriginList]') IS NOT NULL 
 DROP TABLE [dbo].[ServerCorsDefAllowedOriginList] 
 GO
 CREATE TABLE [dbo].[ServerCorsDefAllowedOriginList] ( 
 [Id]             INT              IDENTITY(1,1)          NOT NULL,
 [AllowedDomain]  VARCHAR(50)                             NOT NULL,
 [Description]    TEXT                                        NULL,
 [UserId]         INT                                     NOT NULL,
 [Active]         BIT                                     NOT NULL  CONSTRAINT [DF_ServerCorsDefAllowedOriginList_Active] DEFAULT ((1)),
 [TimeStamp]      DATETIME2                               NOT NULL  CONSTRAINT [DF_ServerCorsDefAllowedOriginList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ServerCorsDefAllowedOriginList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ServerCorsDefAllowedOriginList]  UNIQUE      NONCLUSTERED ([AllowedDomain] asc) ,
 CONSTRAINT [FK_ServerCorsDefAllowedOriginList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ServerHealthCheckTaskList     

```sql   
			
 IF OBJECT_ID('[dbo].[ServerHealthCheckTaskList]') IS NOT NULL 
 DROP TABLE [dbo].[ServerHealthCheckTaskList] 
 GO
 CREATE TABLE [dbo].[ServerHealthCheckTaskList] ( 
 [Id]               INT              IDENTITY(1,1)          NOT NULL,
 [TaskName]         VARCHAR(100)                            NOT NULL,
 [Type]             VARCHAR(50)                             NOT NULL,
 [ServerDrive]      VARCHAR(50)                                 NULL,
 [FolderPath]       VARCHAR(1024)                               NULL,
 [DbSqlConnection]  VARCHAR(1024)                               NULL,
 [IpAddress]        VARCHAR(20)                                 NULL,
 [ServerUrlPath]    VARCHAR(1024)                               NULL,
 [UrlPath]          VARCHAR(1024)                               NULL,
 [SizeMB]           INT                                         NULL,
 [Port]             INT                                         NULL,
 [UserId]           INT                                     NOT NULL,
 [Active]           BIT                                     NOT NULL  CONSTRAINT [DF_HealthCheckTaskList_Active] DEFAULT ((1)),
 [Timestamp]        DATETIME2                               NOT NULL  CONSTRAINT [DF_HealthCheckTaskList_Timestamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_HealthCheckTaskList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_HealthCheckTaskList]  UNIQUE      NONCLUSTERED ([TaskName] asc) ,
 CONSTRAINT [FK_HealthCheckTaskList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ServerLiveDataMonitorList     

```sql   
			
 IF OBJECT_ID('[dbo].[ServerLiveDataMonitorList]') IS NOT NULL 
 DROP TABLE [dbo].[ServerLiveDataMonitorList] 
 GO
 CREATE TABLE [dbo].[ServerLiveDataMonitorList] ( 
 [Id]              INT              IDENTITY(1,1)          NOT NULL,
 [RootPath]        VARCHAR(1024)                           NOT NULL,
 [FileExtensions]  VARCHAR(1024)                           NOT NULL,
 [Description]     TEXT                                        NULL,
 [UserId]          INT                                     NOT NULL,
 [Active]          BIT                                     NOT NULL  CONSTRAINT [DF_ServerLiveDataMonitorList_Active] DEFAULT ((1)),
 [TimeStamp]       DATETIME2                               NOT NULL  CONSTRAINT [DF_ServerLiveDataMonitorList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ServerLiveDataMonitorList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ServerLiveDataMonitorList]  UNIQUE      NONCLUSTERED ([RootPath] asc) ,
 CONSTRAINT [FK_ServerLiveDataMonitorList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ServerModuleAndServiceList     

```sql   
			
 IF OBJECT_ID('[dbo].[ServerModuleAndServiceList]') IS NOT NULL 
 DROP TABLE [dbo].[ServerModuleAndServiceList] 
 GO
 CREATE TABLE [dbo].[ServerModuleAndServiceList] ( 
 [Id]                     INT              IDENTITY(1,1)          NOT NULL,
 [InheritedPageType]      VARCHAR(50)                             NOT NULL,
 [Name]                   VARCHAR(50)                             NOT NULL,
 [InheritedLayoutType]    VARCHAR(50)                                 NULL  CONSTRAINT [DF_ServerModuleAndServiceList_InheritedLayoutType] DEFAULT ('MultiLangLayout'),
 [Description]            TEXT                                        NULL,
 [UrlSubPath]             VARCHAR(100)                                NULL,
 [OptionalConfiguration]  VARCHAR(2048)                               NULL,
 [AllowedRoles]           VARCHAR(500)                                NULL,
 [RestrictedAccess]       BIT                                     NOT NULL,
 [RedirectPathOnError]    VARCHAR(100)                                NULL,
 [CustomHtmlContent]      TEXT                                        NULL,
 [IsLoginModule]          BIT                                     NOT NULL  CONSTRAINT [DF_ServerModuleAndServiceList_IsLoginModule] DEFAULT ((0)),
 [PathSetAllowed]         BIT                                     NOT NULL,
 [RestrictionSetAllowed]  BIT                                     NOT NULL,
 [HtmlSetAllowed]         BIT                                     NOT NULL,
 [RedirectSetAllowed]     BIT                                     NOT NULL,
 [Active]                 BIT                                     NOT NULL  CONSTRAINT [DF_ServerModuleAndServiceList_Active] DEFAULT ((1)),
 [UserId]                 INT                                     NOT NULL,
 [TimeStamp]              DATETIME2                               NOT NULL  CONSTRAINT [DF_ServerModuleAndServiceList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ServerModuleAndServiceList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ServerModuleAndServiceList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT   [IX_ServerModuleAndServiceList_2]  UNIQUE      NONCLUSTERED ([UrlSubPath] asc) ,
 CONSTRAINT [FK_ServerModuleAndServiceList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
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

 GO
```    
			
---   
			### TBL ServerSettingList     

```sql   
			
 IF OBJECT_ID('[dbo].[ServerSettingList]') IS NOT NULL 
 DROP TABLE [dbo].[ServerSettingList] 
 GO
 CREATE TABLE [dbo].[ServerSettingList] ( 
 [Id]                  INT              IDENTITY(1,1)          NOT NULL,
 [InheritedGroupName]  VARCHAR(50)                             NOT NULL,
 [Type]                VARCHAR(50)                             NOT NULL  CONSTRAINT [DF_ServerSettingList_Type] DEFAULT ('bit'),
 [Key]                 NVARCHAR(150)                           NOT NULL,
 [Value]               NVARCHAR(150)                           NOT NULL,
 [Description]         TEXT                                        NULL,
 [Link]                VARCHAR(1024)                               NULL,
 [UserId]              INT                                     NOT NULL,
 [Active]              BIT                                     NOT NULL  CONSTRAINT [DF_AdminConfiguration_Active] DEFAULT ((1)),
 [Timestamp]           DATETIME2                               NOT NULL  CONSTRAINT [DF_AdminConfiguration_CreateDate] DEFAULT (getdate()),
 CONSTRAINT   [PK_AdminConfiguration]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ServerSettingList]  UNIQUE      NONCLUSTERED ([Key] asc) ,
 CONSTRAINT [FK_ServerSettingList_SolutionUserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ServerStaticOrMvcDefPathList     

```sql   
			
 IF OBJECT_ID('[dbo].[ServerStaticOrMvcDefPathList]') IS NOT NULL 
 DROP TABLE [dbo].[ServerStaticOrMvcDefPathList] 
 GO
 CREATE TABLE [dbo].[ServerStaticOrMvcDefPathList] ( 
 [Id]                    INT              IDENTITY(1,1)          NOT NULL,
 [SystemName]            VARCHAR(50)                             NOT NULL,
 [WebRootSubPath]        VARCHAR(2048)                           NOT NULL,
 [AliasPath]             VARCHAR(255)                                NULL,
 [Description]           TEXT                                        NULL,
 [IsBrowsable]           BIT                                     NOT NULL  CONSTRAINT [DF_ServerStaticOrMvcDefPathList_IsBowsable] DEFAULT ((0)),
 [IsStaticOrMvcDefOnly]  BIT                                     NOT NULL  CONSTRAINT [DF_ServerStaticOrMvcDefPathList_IsStaticOrMvcDefOnly] DEFAULT ((0)),
 [UserId]                INT                                     NOT NULL,
 [Active]                BIT                                     NOT NULL,
 [TimeStamp]             DATETIME2                               NOT NULL  CONSTRAINT [DF_ServerStaticOrMvcDefPathList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ServerStaticOrMvcDefPathList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ServerStaticOrMvcDefPathList]  UNIQUE      NONCLUSTERED ([SystemName] asc) ,
 CONSTRAINT [FK_ServerStaticOrMvcDefPathList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ServerToolPanelDefinitionList     

```sql   
			
 IF OBJECT_ID('[dbo].[ServerToolPanelDefinitionList]') IS NOT NULL 
 DROP TABLE [dbo].[ServerToolPanelDefinitionList] 
 GO
 CREATE TABLE [dbo].[ServerToolPanelDefinitionList] ( 
 [Id]               INT              IDENTITY(1,1)          NOT NULL,
 [ToolTypeId]       INT                                     NOT NULL,
 [SystemName]       VARCHAR(50)                             NOT NULL,
 [Type]             VARCHAR(50)                             NOT NULL,
 [Command]          VARCHAR(500)                            NOT NULL,
 [IconName]         VARCHAR(50)                             NOT NULL,
 [IconColor]        VARCHAR(50)                             NOT NULL,
 [BackgroundColor]  VARCHAR(50)                             NOT NULL,
 [Description]      TEXT                                        NULL,
 [UserId]           INT                                     NOT NULL,
 [Timestamp]        DATETIME2                               NOT NULL  CONSTRAINT [DF_ServerToolPanelDefinitionList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ServerToolPanelDefinitionList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ServerToolPanelDefinitionList]  UNIQUE      NONCLUSTERED ([SystemName] asc) ,
 CONSTRAINT [FK_ServerToolPanelDefinitionList_ToolTypeList] FOREIGN KEY ([ToolTypeId]) REFERENCES [dbo].[ServerToolTypeList] (Id) ,
 CONSTRAINT [FK_ServerToolPanelDefinitionList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL ServerToolTypeList     

```sql   
			
 IF OBJECT_ID('[dbo].[ServerToolTypeList]') IS NOT NULL 
 DROP TABLE [dbo].[ServerToolTypeList] 
 GO
 CREATE TABLE [dbo].[ServerToolTypeList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Sequence]     INT                                     NOT NULL,
 [Name]         VARCHAR(50)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_ServerToolTypeList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ServerToolTypeList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ServerToolTypeList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_ServerToolTypeList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SolutionEmailerHistoryList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionEmailerHistoryList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionEmailerHistoryList] 
 GO
 CREATE TABLE [dbo].[SolutionEmailerHistoryList] ( 
 [Id]         INT              IDENTITY(1,1)          NOT NULL,
 [Recipient]  VARCHAR(1024)                           NOT NULL,
 [Subject]    VARCHAR(1024)                           NOT NULL,
 [Email]      TEXT                                        NULL,
 [Status]     VARCHAR(2048)                           NOT NULL,
 [TimeStamp]  DATETIME2                               NOT NULL  CONSTRAINT [DF_SolutionEmailerHistoryList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SolutionEmailerHistoryList]  PRIMARY KEY CLUSTERED    ([Id] asc) )
 
 
 GO
 
 



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

 GO
```    
			
---   
			### TBL SolutionEmailTemplateList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionEmailTemplateList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionEmailTemplateList] 
 GO
 CREATE TABLE [dbo].[SolutionEmailTemplateList] ( 
 [Id]                INT              IDENTITY(1,1)          NOT NULL,
 [SystemLanguageId]  INT                                     NOT NULL,
 [TemplateName]      VARCHAR(50)                             NOT NULL,
 [Variables]         TEXT                                    NOT NULL,
 [Subject]           VARCHAR(255)                            NOT NULL,
 [Email]             TEXT                                        NULL,
 [UserId]            INT                                     NOT NULL,
 [TimeStamp]         DATETIME2                               NOT NULL  CONSTRAINT [DF_EmailTemplateList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_EmailTemplateList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_EmailTemplateList]  UNIQUE      NONCLUSTERED ([SystemLanguageId] asc, [TemplateName] asc) ,
 CONSTRAINT [FK_EmailTemplateList_SystemLanguageList] FOREIGN KEY ([SystemLanguageId]) REFERENCES [dbo].[SolutionLanguageList] (Id) ,
 CONSTRAINT [FK_EmailTemplateList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SolutionFailList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionFailList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionFailList] 
 GO
 CREATE TABLE [dbo].[SolutionFailList] ( 
 [Id]              INT              IDENTITY(1,1)          NOT NULL,
 [Source]          VARCHAR(50)                             NOT NULL,
 [UserName]        VARCHAR(50)                                 NULL,
 [LogLevel]        VARCHAR(20)                                 NULL,
 [Message]         TEXT                                    NOT NULL,
 [ImageName]       VARCHAR(150)                                NULL,
 [Image]           VARBINARY(max)                              NULL,
 [AttachmentName]  VARCHAR(150)                                NULL,
 [Attachment]      VARBINARY(max)                              NULL,
 [UserId]          INT                                         NULL,
 [TimeStamp]       DATETIME2                               NOT NULL  CONSTRAINT [DF_SolutionFailList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SolutionFailList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_SolutionFailList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SolutionLanguageList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionLanguageList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionLanguageList] 
 GO
 CREATE TABLE [dbo].[SolutionLanguageList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [SystemName]   VARCHAR(50)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_ServerLanguageList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ServerLanguageList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ServerLanguageList]  UNIQUE      NONCLUSTERED ([SystemName] asc) ,
 CONSTRAINT [FK_ServerLanguageList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SolutionMessageModuleList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionMessageModuleList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionMessageModuleList] 
 GO
 CREATE TABLE [dbo].[SolutionMessageModuleList] ( 
 [Id]               INT              IDENTITY(1,1)          NOT NULL,
 [Level]            INT                                     NOT NULL  CONSTRAINT [DF_SolutionMessageModuleList_Level] DEFAULT ((0)),
 [MessageParentId]  INT                                         NULL,
 [MessageTypeId]    INT                                     NOT NULL,
 [Subject]          VARCHAR(150)                            NOT NULL,
 [HtmlMessage]      TEXT                                    NOT NULL,
 [Shown]            BIT                                     NOT NULL,
 [Archived]         BIT                                     NOT NULL,
 [IsSystemMessage]  BIT                                     NOT NULL,
 [Published]        BIT                                     NOT NULL  CONSTRAINT [DF_SolutionMessageModuleList_Publish] DEFAULT ((0)),
 [FromUserId]       INT                                         NULL,
 [ToUserId]         INT                                         NULL,
 [TimeStamp]        DATETIME2                               NOT NULL  CONSTRAINT [DF_SolutionMessageModuleList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SolutionMessageModuleList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_SolutionMessageModuleList]  UNIQUE      NONCLUSTERED ([Subject] asc) ,
 CONSTRAINT [FK_SolutionMessageModuleList_SolutionMessageModuleListParent] FOREIGN KEY ([MessageParentId]) REFERENCES [dbo].[SolutionMessageModuleList] (Id) ,
 CONSTRAINT [FK_SolutionMessageModuleList_SolutionMessageTypeList] FOREIGN KEY ([MessageTypeId]) REFERENCES [dbo].[SolutionMessageTypeList] (Id) ,
 CONSTRAINT [FK_SolutionMessageModuleList_SolutionUserListFrom] FOREIGN KEY ([FromUserId]) REFERENCES [dbo].[SolutionUserList] (Id) ,
 CONSTRAINT [FK_SolutionMessageModuleList_SolutionUserListTo] FOREIGN KEY ([ToUserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SolutionMessageTypeList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionMessageTypeList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionMessageTypeList] 
 GO
 CREATE TABLE [dbo].[SolutionMessageTypeList] ( 
 [Id]             INT              IDENTITY(1,1)          NOT NULL,
 [Name]           VARCHAR(50)                             NOT NULL,
 [Variables]      TEXT                                        NULL,
 [AnswerAllowed]  BIT                                     NOT NULL  CONSTRAINT [DF_SolutionMessageTypeList_AnswerEnabled] DEFAULT ((0)),
 [IsSystemOnly]   BIT                                     NOT NULL  CONSTRAINT [DF_SolutionMessageTypeList_IsSystemOnly] DEFAULT ((0)),
 [Description]    TEXT                                        NULL,
 [UserId]         INT                                     NOT NULL,
 [TimeStamp]      DATETIME2                               NOT NULL  CONSTRAINT [DF_SolutionMessageTypeList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SolutionMessageTypeList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_SolutionMessageTypeList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_SolutionMessageTypeList_SolutionUserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SolutionMixedEnumList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionMixedEnumList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionMixedEnumList] 
 GO
 CREATE TABLE [dbo].[SolutionMixedEnumList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [ItemsGroup]   VARCHAR(50)                             NOT NULL,
 [Name]         VARCHAR(50)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_GlobalMixedEnumList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_GlobalMixedEnumList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_GlobalMixedEnumList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_GlobalMixedEnumList]  UNIQUE      NONCLUSTERED ([ItemsGroup] asc, [Name] asc) ,
 CONSTRAINT [FK_GlobalMixedEnumList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) ,
 CONSTRAINT [FK_SolutionMixedEnumList_SolutionMixedEnumList] FOREIGN KEY ([Id]) REFERENCES [dbo].[SolutionMixedEnumList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_SolutionMixedEnumList] 
    ON [dbo].[SolutionMixedEnumList] ([ItemsGroup] asc)
 CREATE NONCLUSTERED INDEX [IX_SolutionMixedEnumList_1] 
    ON [dbo].[SolutionMixedEnumList] ([Name] asc)
```    
			
---   
			### TBL SolutionMottoList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionMottoList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionMottoList] 
 GO
 CREATE TABLE [dbo].[SolutionMottoList] ( 
 [Id]          INT              IDENTITY(1,1)          NOT NULL,
 [SystemName]  VARCHAR(50)                             NOT NULL,
 [UserId]      INT                                     NOT NULL  CONSTRAINT [DF_MottoList_UserId] DEFAULT ((1)),
 [Timestamp]   DATETIME2                               NOT NULL  CONSTRAINT [DF_MottoList_Timestamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_MottoList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_MottoList]  UNIQUE      NONCLUSTERED ([SystemName] asc) ,
 CONSTRAINT [FK_MottoList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SolutionOperationList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionOperationList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionOperationList] 
 GO
 CREATE TABLE [dbo].[SolutionOperationList] ( 
 [Id]                       INT              IDENTITY(1,1)          NOT NULL,
 [InheritedTypeName]        VARCHAR(50)                             NOT NULL,
 [Name]                     VARCHAR(255)                            NOT NULL,
 [InputData]                TEXT                                    NOT NULL,
 [InheritedResultTypeName]  VARCHAR(50)                             NOT NULL,
 [Description]              TEXT                                        NULL,
 [UserId]                   INT                                     NOT NULL,
 [Active]                   BIT                                     NOT NULL  CONSTRAINT [DF_SolutionOperationList_Active] DEFAULT ((1)),
 [TimeStamp]                DATETIME2                               NOT NULL  CONSTRAINT [DF_SolutionOperationList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SolutionOperationList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_SolutionOperationList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_SolutionOperationList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SolutionSchedulerList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionSchedulerList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionSchedulerList] 
 GO
 CREATE TABLE [dbo].[SolutionSchedulerList] ( 
 [Id]                     INT              IDENTITY(1,1)          NOT NULL,
 [InheritedGroupName]     VARCHAR(50)                             NOT NULL,
 [Name]                   VARCHAR(255)                            NOT NULL,
 [Sequence]               INT                                     NOT NULL,
 [Email]                  VARCHAR(255)                                NULL,
 [Data]                   TEXT                                    NOT NULL,
 [Description]            TEXT                                        NULL,
 [StartNowOnly]           BIT                                     NOT NULL,
 [StartAt]                DATETIME2                                   NULL,
 [FinishAt]               DATETIME2                                   NULL,
 [Interval]               INT                                     NOT NULL,
 [InheritedIntervalType]  VARCHAR(50)                             NOT NULL,
 [UserId]                 INT                                     NOT NULL,
 [Active]                 BIT                                     NOT NULL  CONSTRAINT [DF_GlobalAutoSchedulerList_Active] DEFAULT ((1)),
 [TimeStamp]              DATETIME2                               NOT NULL  CONSTRAINT [DF_GlobalAutoSchedulerList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SolutionSchedulerList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_SolutionSchedulerList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_GlobalAutoSchedulerList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SolutionSchedulerProcessList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionSchedulerProcessList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionSchedulerProcessList] 
 GO
 CREATE TABLE [dbo].[SolutionSchedulerProcessList] ( 
 [Id]                INT              IDENTITY(1,1)          NOT NULL,
 [ScheduledTaskId]   INT                                     NOT NULL,
 [ProcessData]       TEXT                                        NULL,
 [ProcessLog]        TEXT                                        NULL,
 [ProcessCrashed]    BIT                                     NOT NULL,
 [ProcessCompleted]  BIT                                     NOT NULL,
 [TimeStamp]         DATETIME2                               NOT NULL  CONSTRAINT [DF_SolutionSchedulerProcessList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SolutionSchedulerProcessList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_SolutionSchedulerProcessList_SolutionSchedulerList] FOREIGN KEY ([ScheduledTaskId]) REFERENCES [dbo].[SolutionSchedulerList] (Id)  ON DELETE CASCADE )
 
 
```    
			
---   
			### TBL SolutionStaticFileList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionStaticFileList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionStaticFileList] 
 GO
 CREATE TABLE [dbo].[SolutionStaticFileList] ( 
 [Id]            INT              IDENTITY(1,1)          NOT NULL,
 [WebsiteId]     INT                                     NOT NULL,
 [StaticPathId]  INT                                     NOT NULL,
 [FileNamePath]  VARCHAR(512)                            NOT NULL,
 [MimeType]      VARCHAR(150)                            NOT NULL,
 [Content]       VARBINARY(max)                              NULL,
 [Active]        BIT                                     NOT NULL  CONSTRAINT [DF_SolutionStaticFileList_Active] DEFAULT ((1)),
 [UserId]        INT                                         NULL,
 [TimeStamp]     DATETIME2                               NOT NULL  CONSTRAINT [DF_SolutionStaticFileList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SolutionStaticFileList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_SolutionStaticFileList]  UNIQUE      NONCLUSTERED ([FileNamePath] asc, [UserId] asc) ,
 CONSTRAINT [FK_SolutionStaticFileList_SolutionStaticFilePathList] FOREIGN KEY ([StaticPathId]) REFERENCES [dbo].[SolutionStaticFilePathList] (Id)  ON DELETE CASCADE ,
 CONSTRAINT [FK_SolutionStaticFileList_SolutionWebsiteList] FOREIGN KEY ([WebsiteId]) REFERENCES [dbo].[SolutionWebsiteList] (Id) ,
 CONSTRAINT [FK_SolutionStaticFileList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SolutionStaticFilePathList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionStaticFilePathList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionStaticFilePathList] 
 GO
 CREATE TABLE [dbo].[SolutionStaticFilePathList] ( 
 [Id]         INT              IDENTITY(1,1)          NOT NULL,
 [WebsiteId]  INT                                     NOT NULL,
 [Path]       VARCHAR(512)                            NOT NULL,
 [Size]       INT                                     NOT NULL,
 [Active]     BIT                                     NOT NULL  CONSTRAINT [DF_SolutionStaticFilePathList_Active] DEFAULT ((1)),
 [UserId]     INT                                         NULL,
 [TimeStamp]  DATETIME2                               NOT NULL  CONSTRAINT [DF_SolutionStaticFilePathList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SolutionStaticFilePathList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_SolutionStaticFilePathList]  UNIQUE      NONCLUSTERED ([Path] asc, [UserId] asc) ,
 CONSTRAINT [FK_SolutionStaticFilePathList_SolutionWebsiteList] FOREIGN KEY ([WebsiteId]) REFERENCES [dbo].[SolutionWebsiteList] (Id)  ON DELETE CASCADE ,
 CONSTRAINT [FK_SolutionStaticFilePathList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SolutionTaskList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionTaskList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionTaskList] 
 GO
 CREATE TABLE [dbo].[SolutionTaskList] ( 
 [Id]                   INT              IDENTITY(1,1)          NOT NULL,
 [InheritedTargetType]  VARCHAR(50)                             NOT NULL,
 [InheritedStatusType]  VARCHAR(50)                             NOT NULL,
 [Message]              TEXT                                    NOT NULL,
 [Documentation]        TEXT                                    NOT NULL,
 [ImageName]            VARCHAR(150)                                NULL,
 [Image]                VARBINARY(max)                              NULL,
 [AttachmentName]       VARCHAR(150)                                NULL,
 [Attachment]           VARBINARY(max)                              NULL,
 [UserId]               INT                                     NOT NULL,
 [TimeStamp]            DATETIME2                               NOT NULL  CONSTRAINT [DF_SolutionTaskList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SolutionTaskList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_SolutionTaskList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_SolutionTaskList] 
    ON [dbo].[SolutionTaskList] ([InheritedTargetType] asc)
 CREATE NONCLUSTERED INDEX [IX_SolutionTaskList_1] 
    ON [dbo].[SolutionTaskList] ([InheritedTargetType] asc, [InheritedStatusType] asc)
 CREATE NONCLUSTERED INDEX [IX_SolutionTaskList_2] 
    ON [dbo].[SolutionTaskList] ([InheritedStatusType] asc)
```    
			
---   
			### TBL SolutionUserList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionUserList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionUserList] 
 GO
 CREATE TABLE [dbo].[SolutionUserList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [RoleId]       INT                                     NOT NULL,
 [UserName]     VARCHAR(150)                            NOT NULL,
 [Password]     VARCHAR(2048)                           NOT NULL,
 [Name]         VARCHAR(150)                            NOT NULL,
 [SurName]      VARCHAR(150)                            NOT NULL,
 [InfoEmail]    VARCHAR(255)                            NOT NULL  CONSTRAINT [DF_SolutionUserList_InfoEmail] DEFAULT ('email@address.com'),
 [Description]  TEXT                                        NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_UserList_active] DEFAULT ((1)),
 [Timestamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_userList_timestamp] DEFAULT (getdate()),
 [Token]        VARCHAR(2048)                               NULL,
 [Expiration]   DATETIME2                                   NULL,
 [Photo]        VARBINARY(max)                              NULL,
 [MimeType]     VARCHAR(100)                                NULL,
 [PhotoPath]    VARCHAR(500)                                NULL,
 CONSTRAINT   [PK_username]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_UserList]  UNIQUE      NONCLUSTERED ([UserName] asc) ,
 CONSTRAINT [FK_UserList_UserList] FOREIGN KEY ([Id]) REFERENCES [dbo].[SolutionUserList] (Id) ,
 CONSTRAINT [FK_UserList_UserRoleList] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[SolutionUserRoleList] (Id)  ON UPDATE CASCADE  ON DELETE CASCADE )
 
 
 GO
 
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

 GO
```    
			
---   
			### TBL SolutionUserRoleList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionUserRoleList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionUserRoleList] 
 GO
 CREATE TABLE [dbo].[SolutionUserRoleList] ( 
 [Id]                  INT              IDENTITY(1,1)          NOT NULL,
 [SystemName]          VARCHAR(50)                             NOT NULL,
 [MinimalAccessValue]  INT                                     NOT NULL  CONSTRAINT [DF_SolutionUserRoleList_SequenceAccessNumber] DEFAULT ((0)),
 [Description]         TEXT                                        NULL,
 [UserId]              INT                                         NULL,
 [Timestamp]           DATETIME2                               NOT NULL  CONSTRAINT [DF_UserRoleList_timestamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_UserRoleList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_UserRoleList]  UNIQUE      NONCLUSTERED ([SystemName] asc) )
 
 
```    
			
---   
			### TBL SolutionWebsiteList     

```sql   
			
 IF OBJECT_ID('[dbo].[SolutionWebsiteList]') IS NOT NULL 
 DROP TABLE [dbo].[SolutionWebsiteList] 
 GO
 CREATE TABLE [dbo].[SolutionWebsiteList] ( 
 [Id]                       INT              IDENTITY(1,1)          NOT NULL,
 [WebsiteName]              VARCHAR(50)                             NOT NULL,
 [Description]              TEXT                                        NULL,
 [MinimalReadAccessValue]   INT                                     NOT NULL  CONSTRAINT [DF_SolutionWebsiteList_MinimalReadAccessValue] DEFAULT ((0)),
 [MinimalWriteAccessValue]  INT                                     NOT NULL  CONSTRAINT [DF_SolutionWebsiteList_MinimalWriteAccessValue] DEFAULT ((0)),
 [UserId]                   INT                                     NOT NULL,
 [Active]                   BIT                                     NOT NULL  CONSTRAINT [DF_SolutionWebsiteList_Active] DEFAULT ((1)),
 [TimeStamp]                DATETIME2                               NOT NULL  CONSTRAINT [DF_SolutionWebsiteList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SolutionWebsiteList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_SolutionWebsiteList]  UNIQUE      NONCLUSTERED ([WebsiteName] asc) ,
 CONSTRAINT [FK_SolutionWebsiteList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SystemCustomPageList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemCustomPageList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemCustomPageList] 
 GO
 CREATE TABLE [dbo].[SystemCustomPageList] ( 
 [Id]                INT              IDENTITY(1,1)          NOT NULL,
 [PageName]          VARCHAR(250)                            NOT NULL,
 [Description]       TEXT                                        NULL,
 [IsMultiFormType]   BIT                                     NOT NULL,
 [IsServerUrl]       BIT                                     NOT NULL,
 [StartupUrl]        VARCHAR(512)                                NULL,
 [IsWebServer]       BIT                                     NOT NULL,
 [StartupSubFolder]  VARCHAR(150)                                NULL,
 [StartupCommand]    VARCHAR(500)                                NULL,
 [IsGraphType]       BIT                                     NOT NULL,
 [Active]            BIT                                     NOT NULL,
 [UserId]            INT                                     NOT NULL,
 [TimeStamp]         DATETIME2                               NOT NULL  CONSTRAINT [DF_SystemCustomPageList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SystemCustomPageList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_SystemCustomPageList]  UNIQUE      NONCLUSTERED ([PageName] asc) ,
 CONSTRAINT [FK_SystemCustomPageList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SystemDocumentAdviceList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemDocumentAdviceList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemDocumentAdviceList] 
 GO
 CREATE TABLE [dbo].[SystemDocumentAdviceList] ( 
 [Id]            INT              IDENTITY(1,1)          NOT NULL,
 [BranchId]      INT                                     NOT NULL,
 [DocumentType]  VARCHAR(50)                             NOT NULL,
 [Prefix]        VARCHAR(10)                             NOT NULL,
 [Number]        VARCHAR(10)                             NOT NULL,
 [StartDate]     DATE                                    NOT NULL,
 [EndDate]       DATE                                    NOT NULL,
 [UserId]        INT                                     NOT NULL,
 [Active]        BIT                                     NOT NULL  CONSTRAINT [DF_DocumentAdvice_Active] DEFAULT ((1)),
 [TimeStamp]     DATETIME2                               NOT NULL  CONSTRAINT [DF_DocumentAdvice_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_DocumentAdvice]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_DocumentAdvice_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) ,
 CONSTRAINT [FK_DocumentAdviceList_BranchList] FOREIGN KEY ([BranchId]) REFERENCES [dbo].[BusinessBranchList] (Id) ,
 CONSTRAINT [FK_DocumentAdviceList_DocumentTypeList] FOREIGN KEY ([DocumentType]) REFERENCES [dbo].[SystemDocumentTypeList] (SystemName) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_DocumentAdviceList] 
    ON [dbo].[SystemDocumentAdviceList] ([BranchId] asc, [DocumentType] asc)
```    
			
---   
			### TBL SystemDocumentTypeList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemDocumentTypeList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemDocumentTypeList] 
 GO
 CREATE TABLE [dbo].[SystemDocumentTypeList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [SystemName]   VARCHAR(50)                             NOT NULL  CONSTRAINT [DF_DocumentTypeList_SystemName] DEFAULT ('MustProgramming'),
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Timestamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_DocumentTypeList_Timestamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_DocumentTypeList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_DocumentTypeList]  UNIQUE      NONCLUSTERED ([SystemName] asc) ,
 CONSTRAINT [FK_DocumentTypeList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SystemGroupMenuList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemGroupMenuList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemGroupMenuList] 
 GO
 CREATE TABLE [dbo].[SystemGroupMenuList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [SystemName]   VARCHAR(50)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_SystemGroupMenuList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_SystemGroupMenuList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SystemGroupMenuList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_SystemGroupMenuList]  UNIQUE      NONCLUSTERED ([SystemName] asc) ,
 CONSTRAINT [FK_SystemGroupMenuList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SystemIgnoredExceptionList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemIgnoredExceptionList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemIgnoredExceptionList] 
 GO
 CREATE TABLE [dbo].[SystemIgnoredExceptionList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [ErrorNumber]  VARCHAR(50)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_IgnoredExceptionList_Active] DEFAULT ((1)),
 [UserId]       INT                                     NOT NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_IgnoredExceptionList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_IgnoredExceptionList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_IgnoredExceptionList]  UNIQUE      NONCLUSTERED ([ErrorNumber] asc) ,
 CONSTRAINT [FK_IgnoredExceptionList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SystemLoginHistoryList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemLoginHistoryList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemLoginHistoryList] 
 GO
 CREATE TABLE [dbo].[SystemLoginHistoryList] ( 
 [Id]         INT              IDENTITY(1,1)          NOT NULL,
 [IpAddress]  VARCHAR(50)                             NOT NULL,
 [UserId]     INT                                     NOT NULL  CONSTRAINT [DF_LoginHistoryList_UserId] DEFAULT ((0)),
 [UserName]   VARCHAR(150)                            NOT NULL,
 [Timestamp]  DATETIME2                               NOT NULL  CONSTRAINT [DF_LoginHistory_timestamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_LoginHistory]  PRIMARY KEY CLUSTERED    ([Id] asc) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_LoginHistoryList] 
    ON [dbo].[SystemLoginHistoryList] ([IpAddress] asc)
 CREATE NONCLUSTERED INDEX [IX_LoginHistoryList_1] 
    ON [dbo].[SystemLoginHistoryList] ([UserId] asc)
```    
			
---   
			### TBL SystemMenuList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemMenuList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemMenuList] 
 GO
 CREATE TABLE [dbo].[SystemMenuList] ( 
 [Id]             INT              IDENTITY(1,1)          NOT NULL,
 [MenuType]       VARCHAR(50)                             NOT NULL,
 [GroupId]        INT                                     NOT NULL,
 [FormPageName]   VARCHAR(250)                            NOT NULL,
 [AccessRole]     VARCHAR(1024)                           NOT NULL,
 [Description]    TEXT                                        NULL,
 [UserId]         INT                                     NOT NULL,
 [NotShowInMenu]  BIT                                     NOT NULL  CONSTRAINT [DF_SystemMenuList_NotShowInMenu] DEFAULT ((0)),
 [Active]         BIT                                     NOT NULL  CONSTRAINT [DF_SystemMenuList_Active] DEFAULT ((1)),
 [TimeStamp]      DATETIME2                               NOT NULL  CONSTRAINT [DF_SystemMenuList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SystemMenuList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_GlobalMenuList]  UNIQUE      NONCLUSTERED ([FormPageName] asc) ,
 CONSTRAINT [FK_SystemMenuList_SystemGroupMenuList] FOREIGN KEY ([GroupId]) REFERENCES [dbo].[SystemGroupMenuList] (Id) ,
 CONSTRAINT [FK_SystemMenuList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SystemModuleList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemModuleList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemModuleList] 
 GO
 CREATE TABLE [dbo].[SystemModuleList] ( 
 [Id]               INT              IDENTITY(1,1)          NOT NULL,
 [ModuleType]       VARCHAR(50)                             NOT NULL,
 [Name]             VARCHAR(255)                            NOT NULL,
 [FolderPath]       VARCHAR(255)                                NULL,
 [FileName]         VARCHAR(255)                                NULL,
 [StartupCommand]   VARCHAR(255)                                NULL,
 [Description]      TEXT                                        NULL,
 [ForegroundColor]  VARCHAR(50)                             NOT NULL,
 [BackgroundColor]  VARCHAR(50)                             NOT NULL,
 [IconName]         VARCHAR(50)                             NOT NULL,
 [IconColor]        VARCHAR(50)                             NOT NULL,
 [UserId]           INT                                     NOT NULL,
 [TimeStamp]        DATETIME2                               NOT NULL  CONSTRAINT [DF_SystemModuleList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SystemModuleList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_SystemModuleList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_SystemModuleList_SystemModuleList] FOREIGN KEY ([Id]) REFERENCES [dbo].[SystemModuleList] (Id) ,
 CONSTRAINT [FK_SystemModuleList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SystemParameterList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemParameterList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemParameterList] 
 GO
 CREATE TABLE [dbo].[SystemParameterList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [UserId]       INT                                         NULL,
 [SystemName]   VARCHAR(50)                             NOT NULL,
 [Value]        TEXT                                    NOT NULL,
 [Type]         VARCHAR(50)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_ParameterList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ParameterList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ParameterList]  UNIQUE      NONCLUSTERED ([SystemName] asc, [UserId] asc) ,
 CONSTRAINT [FK_ParameterList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id)  ON DELETE CASCADE )
 
 
 GO
 
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

 GO
```    
			
---   
			### TBL SystemReportList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemReportList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemReportList] 
 GO
 CREATE TABLE [dbo].[SystemReportList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [PageName]     VARCHAR(50)                             NOT NULL,
 [SystemName]   VARCHAR(50)                             NOT NULL,
 [JoinedId]     BIT                                     NOT NULL  CONSTRAINT [DF_ReportList_JoinedId] DEFAULT ((0)),
 [Description]  TEXT                                        NULL,
 [ReportPath]   VARCHAR(500)                                NULL,
 [MimeType]     VARCHAR(100)                            NOT NULL,
 [File]         VARBINARY(max)                          NOT NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_ReportList_Active] DEFAULT ((1)),
 [Timestamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_ReportList_TimeStamp] DEFAULT (getdate()),
 [Default]      BIT                                     NOT NULL  CONSTRAINT [DF_ReportList_Default] DEFAULT ((0)),
 CONSTRAINT   [PK_ReportList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT [FK_ReportList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
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

 GO
```    
			
---   
			### TBL SystemReportQueueList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemReportQueueList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemReportQueueList] 
 GO
 CREATE TABLE [dbo].[SystemReportQueueList] ( 
 [Id]                  INT              IDENTITY(1,1)          NOT NULL,
 [Name]                VARCHAR(50)                             NOT NULL,
 [Sequence]            INT                                     NOT NULL,
 [Sql]                 NVARCHAR(max)                           NOT NULL,
 [TableName]           VARCHAR(150)                            NOT NULL,
 [Filter]              NVARCHAR(max)                               NULL,
 [Search]              VARCHAR(50)                                 NULL,
 [SearchColumnList]    NVARCHAR(max)                               NULL,
 [SearchFilterIgnore]  BIT                                     NOT NULL  CONSTRAINT [DF_ReportQueue_SearchFilterIgnore] DEFAULT ((0)),
 [RecId]               INT                                         NULL,
 [RecIdFilterIgnore]   BIT                                     NOT NULL  CONSTRAINT [DF_ReportQueue_RecIdFilterIgnore] DEFAULT ((0)),
 [Timestamp]           DATETIME2                               NOT NULL  CONSTRAINT [DF_ReportQueueList_Timestamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_ReportQueue]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_ReportQueueList_1]  UNIQUE      NONCLUSTERED ([TableName] asc, [Sequence] asc) ,
 CONSTRAINT   [IX_ReportQueue]  UNIQUE      NONCLUSTERED ([Name] asc) )
 
 
 GO
 
 CREATE NONCLUSTERED INDEX [IX_ReportQueueList] 
    ON [dbo].[SystemReportQueueList] ([TableName] asc)
```    
			
---   
			### TBL SystemSvgIconList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemSvgIconList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemSvgIconList] 
 GO
 CREATE TABLE [dbo].[SystemSvgIconList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(50)                             NOT NULL,
 [SvgIconPath]  VARCHAR(4096)                           NOT NULL,
 [UserId]       INT                                     NOT NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_SvgIconList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SvgIconList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_SvgIconList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_SvgIconList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL SystemTranslationList     

```sql   
			
 IF OBJECT_ID('[dbo].[SystemTranslationList]') IS NOT NULL 
 DROP TABLE [dbo].[SystemTranslationList] 
 GO
 CREATE TABLE [dbo].[SystemTranslationList] ( 
 [Id]             INT              IDENTITY(1,1)          NOT NULL,
 [SystemName]     VARCHAR(50)                             NOT NULL,
 [DescriptionCz]  VARCHAR(500)                                NULL,
 [DescriptionEn]  VARCHAR(500)                                NULL,
 [UserId]         INT                                         NULL  CONSTRAINT [DF_SystemTranslationList_UserId] DEFAULT ((0)),
 [Timestamp]      DATETIME2                               NOT NULL  CONSTRAINT [DF_SystemTranslationList_Timestamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_SystemTranslationList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_SystemTranslationList]  UNIQUE      NONCLUSTERED ([SystemName] asc) ,
 CONSTRAINT [FK_SystemTranslationList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 

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

 GO
```    
			
---   
			### TBL TemplateList     

```sql   
			
 IF OBJECT_ID('[dbo].[TemplateList]') IS NOT NULL 
 DROP TABLE [dbo].[TemplateList] 
 GO
 CREATE TABLE [dbo].[TemplateList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [GroupId]      INT                                     NOT NULL,
 [Sequence]     INT                                     NOT NULL,
 [Name]         VARCHAR(50)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Default]      BIT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_TemplateList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_TemplateList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_TemplateList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_TemplateList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_TemplateList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) ,
 CONSTRAINT [FK_TemplateList_UserRoleList] FOREIGN KEY ([GroupId]) REFERENCES [dbo].[SolutionUserRoleList] (Id) )
 
 
```    
			
---   
			### TBL WebBannedIpAddressList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebBannedIpAddressList]') IS NOT NULL 
 DROP TABLE [dbo].[WebBannedIpAddressList] 
 GO
 CREATE TABLE [dbo].[WebBannedIpAddressList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [IpAddress]    VARCHAR(50)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_WebBannedUserList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_WebBannedUserList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebBannedUserList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebBannedUserList]  UNIQUE      NONCLUSTERED ([IpAddress] asc) ,
 CONSTRAINT [FK_WebBannedUserList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL WebCodeLibraryList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebCodeLibraryList]') IS NOT NULL 
 DROP TABLE [dbo].[WebCodeLibraryList] 
 GO
 CREATE TABLE [dbo].[WebCodeLibraryList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [InheritedCodeType]  VARCHAR(50)                                 NULL,
 [Name]               VARCHAR(50)                             NOT NULL,
 [Description]        VARCHAR(2096)                               NULL,
 [Content]            VARCHAR(max)                            NOT NULL,
 [IsCompletion]       BIT                                     NOT NULL  CONSTRAINT [DF_WebCodeLibraryList_IsCompletion] DEFAULT ((0)),
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_WebCodeLibraryList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebCodeLibraryList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebCodeLibraryList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_WebCodeLibraryList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL WebConfiguratorList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebConfiguratorList]') IS NOT NULL 
 DROP TABLE [dbo].[WebConfiguratorList] 
 GO
 CREATE TABLE [dbo].[WebConfiguratorList] ( 
 [Id]               INT              IDENTITY(1,1)          NOT NULL,
 [Name]             VARCHAR(50)                             NOT NULL,
 [IsStartupPage]    BIT                                     NOT NULL,
 [Description]      VARCHAR(max)                                NULL,
 [HtmlContent]      VARCHAR(max)                                NULL,
 [ServerUrl]        VARCHAR(500)                                NULL,
 [AuthRole]         VARCHAR(200)                                NULL,
 [AuthIgnore]       BIT                                     NOT NULL,
 [AuthRedirect]     BIT                                     NOT NULL,
 [AuthRedirectUrl]  VARCHAR(500)                                NULL,
 [IncludedIdList]   VARCHAR(500)                                NULL,
 [Active]           BIT                                     NOT NULL  CONSTRAINT [DF_WebConfiguratorList_Active] DEFAULT ((1)),
 [UserId]           INT                                     NOT NULL,
 [TimeStamp]        DATETIME2                               NOT NULL  CONSTRAINT [DF_WebConfiguratorList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebConfiguratorList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebConfiguratorList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT   [IX_WebConfiguratorList_1]  UNIQUE      NONCLUSTERED ([ServerUrl] asc) ,
 CONSTRAINT [FK_WebConfiguratorList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL WebCoreFileList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebCoreFileList]') IS NOT NULL 
 DROP TABLE [dbo].[WebCoreFileList] 
 GO
 CREATE TABLE [dbo].[WebCoreFileList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [SpecificationType]  VARCHAR(50)                             NOT NULL,
 [Sequence]           INT                                     NOT NULL,
 [MetroPath]          VARCHAR(100)                            NOT NULL  CONSTRAINT [DF_WebCoreFileList_MetroPath] DEFAULT (''),
 [FileName]           VARCHAR(50)                             NOT NULL,
 [Description]        TEXT                                        NULL,
 [RewriteLowerLevel]  BIT                                     NOT NULL  CONSTRAINT [DF_WebCoreFileList_RewriteLowerLevel] DEFAULT ((0)),
 [GuestFileContent]   TEXT                                        NULL,
 [UserFileContent]    TEXT                                        NULL,
 [AdminFileContent]   TEXT                                        NULL,
 [ProviderContent]    TEXT                                        NULL,
 [IsUniquePath]       BIT                                     NOT NULL  CONSTRAINT [DF_WebCoreFileList_IsUniquePath] DEFAULT ((0)),
 [AutoUpdateOnSave]   BIT                                     NOT NULL,
 [Active]             BIT                                     NOT NULL,
 [UserId]             INT                                     NOT NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_WebCoreFileList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebCoreFileList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebCoreFileList]  UNIQUE      NONCLUSTERED ([FileName] asc, [SpecificationType] asc) ,
 CONSTRAINT [FK_WebCoreFileList_GlobalUserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL WebDeveloperNewsList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebDeveloperNewsList]') IS NOT NULL 
 DROP TABLE [dbo].[WebDeveloperNewsList] 
 GO
 CREATE TABLE [dbo].[WebDeveloperNewsList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Title]        VARCHAR(50)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_WebDeveloperNewsList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_WebDeveloperNewsList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebDeveloperNewsList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebDeveloperNewsList]  UNIQUE      NONCLUSTERED ([Title] asc) ,
 CONSTRAINT [FK_WebDeveloperNewsList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL WebDocumentationCodeLibraryList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebDocumentationCodeLibraryList]') IS NOT NULL 
 DROP TABLE [dbo].[WebDocumentationCodeLibraryList] 
 GO
 CREATE TABLE [dbo].[WebDocumentationCodeLibraryList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(50)                             NOT NULL,
 [Description]  VARCHAR(2096)                               NULL,
 [MdContent]    TEXT                                    NOT NULL,
 [HtmlContent]  TEXT                                    NOT NULL,
 [UserId]       INT                                     NOT NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_WebDocumentationCodeLibraryList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebDocumentationCodeLibraryList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebDocumentationCodeLibraryList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_WebDocumentationCodeLibraryList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL WebDocumentationList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebDocumentationList]') IS NOT NULL 
 DROP TABLE [dbo].[WebDocumentationList] 
 GO
 CREATE TABLE [dbo].[WebDocumentationList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(150)                            NOT NULL,
 [Sequence]     INT                                     NOT NULL,
 [Description]  TEXT                                        NULL,
 [MdContent]    TEXT                                    NOT NULL,
 [HtmlContent]  TEXT                                    NOT NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_WebDocumentationList_Active] DEFAULT ((1)),
 [AutoVersion]  INT                                     NOT NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_WebDocumentationList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebDocumentationList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebDocumentationList]  UNIQUE      NONCLUSTERED ([Name] asc, [AutoVersion] asc, [TimeStamp] asc) ,
 CONSTRAINT [FK_WebDocumentationList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 
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

 GO
```    
			
---   
			### TBL WebGlobalPageBlockList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebGlobalPageBlockList]') IS NOT NULL 
 DROP TABLE [dbo].[WebGlobalPageBlockList] 
 GO
 CREATE TABLE [dbo].[WebGlobalPageBlockList] ( 
 [Id]                   INT              IDENTITY(1,1)          NOT NULL,
 [PagePartType]         VARCHAR(50)                             NOT NULL,
 [Sequence]             INT                                     NOT NULL,
 [Name]                 VARCHAR(50)                             NOT NULL,
 [Description]          TEXT                                        NULL,
 [RewriteLowerLevel]    BIT                                     NOT NULL,
 [GuestHtmlContent]     TEXT                                        NULL,
 [UserHtmlContent]      TEXT                                        NULL,
 [AdminHtmlContent]     TEXT                                        NULL,
 [ProviderHtmlContent]  TEXT                                        NULL,
 [Active]               BIT                                     NOT NULL,
 [UserId]               INT                                     NOT NULL,
 [TimeStamp]            DATETIME2                               NOT NULL  CONSTRAINT [DF_WebGlobalBodyBlockList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebGlobalBodyBlockList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebGlobalBodyBlockList]  UNIQUE      NONCLUSTERED ([Name] asc, [PagePartType] asc) ,
 CONSTRAINT [FK_WebGlobalBodyBlockList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL WebGroupMenuList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebGroupMenuList]') IS NOT NULL 
 DROP TABLE [dbo].[WebGroupMenuList] 
 GO
 CREATE TABLE [dbo].[WebGroupMenuList] ( 
 [Id]         INT              IDENTITY(1,1)          NOT NULL,
 [Sequence]   INT                                     NOT NULL,
 [Onclick]    VARCHAR(255)                                NULL,
 [Name]       VARCHAR(50)                             NOT NULL,
 [UserId]     INT                                     NOT NULL,
 [Active]     BIT                                     NOT NULL,
 [TimeStamp]  DATETIME2                               NOT NULL  CONSTRAINT [DF_WebGroupMenuList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebGroupMenuList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebGroupMenuList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_WebGroupMenuList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL WebMenuList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebMenuList]') IS NOT NULL 
 DROP TABLE [dbo].[WebMenuList] 
 GO
 CREATE TABLE [dbo].[WebMenuList] ( 
 [Id]             INT              IDENTITY(1,1)          NOT NULL,
 [GroupId]        INT                                     NOT NULL,
 [Sequence]       INT                                     NOT NULL,
 [Name]           VARCHAR(50)                             NOT NULL,
 [MenuClass]      VARCHAR(100)                                NULL,
 [Description]    VARCHAR(2096)                               NULL,
 [HtmlContent]    TEXT                                    NOT NULL,
 [UserMenu]       BIT                                     NOT NULL  CONSTRAINT [DF_WebMenuList_UserRestriction] DEFAULT ((0)),
 [AdminMenu]      BIT                                     NOT NULL  CONSTRAINT [DF_WebMenuList_AdminMenu] DEFAULT ((0)),
 [UserIPAddress]  VARCHAR(50)                                 NULL,
 [UserId]         INT                                     NOT NULL,
 [Active]         BIT                                     NOT NULL,
 [Default]        BIT                                     NOT NULL,
 [TimeStamp]      DATETIME2                               NOT NULL  CONSTRAINT [DF_WebMenuList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebMenuList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebMenuList]  UNIQUE      NONCLUSTERED ([Name] asc, [GroupId] asc) ,
 CONSTRAINT [FK_WebMenuList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) ,
 CONSTRAINT [FK_WebMenuList_WebGroupMenuList] FOREIGN KEY ([GroupId]) REFERENCES [dbo].[WebGroupMenuList] (Id) )
 
 
 GO
 
 

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

 GO
```    
			
---   
			### TBL WebMessagesList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebMessagesList]') IS NOT NULL 
 DROP TABLE [dbo].[WebMessagesList] 
 GO
 CREATE TABLE [dbo].[WebMessagesList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(50)                             NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_WebMessagesList_Active] DEFAULT ((1)),
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_WebMessagesList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebMessagesList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebMessagesList]  UNIQUE      NONCLUSTERED ([Name] asc) ,
 CONSTRAINT [FK_WebMessagesList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
```    
			
---   
			### TBL WebSettingList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebSettingList]') IS NOT NULL 
 DROP TABLE [dbo].[WebSettingList] 
 GO
 CREATE TABLE [dbo].[WebSettingList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Key]          NVARCHAR(50)                            NOT NULL,
 [Value]        TEXT                                    NOT NULL,
 [Description]  TEXT                                        NULL,
 [UserId]       INT                                     NOT NULL,
 [Timestamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_WebSettingList_CreateDate] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebSettingList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebSettingList]  UNIQUE      NONCLUSTERED ([Key] asc) ,
 CONSTRAINT [FK_WebSettingList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id)  ON DELETE CASCADE )
 
 
```    
			
---   
			### TBL WebUserSettingList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebUserSettingList]') IS NOT NULL 
 DROP TABLE [dbo].[WebUserSettingList] 
 GO
 CREATE TABLE [dbo].[WebUserSettingList] ( 
 [Id]         INT              IDENTITY(1,1)          NOT NULL,
 [Key]        NVARCHAR(50)                            NOT NULL,
 [Value]      NVARCHAR(250)                           NOT NULL,
 [UserId]     INT                                     NOT NULL,
 [Timestamp]  DATETIME2                               NOT NULL  CONSTRAINT [DF_WebUserSettingList_CreateDate] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebUserSettingList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebUserSettingList]  UNIQUE      NONCLUSTERED ([UserId] asc, [Key] asc) ,
 CONSTRAINT [FK_WebUserSettingList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id)  ON DELETE CASCADE )
 
 
```    
			
---   
			### TBL WebVisitIpList     

```sql   
			
 IF OBJECT_ID('[dbo].[WebVisitIpList]') IS NOT NULL 
 DROP TABLE [dbo].[WebVisitIpList] 
 GO
 CREATE TABLE [dbo].[WebVisitIpList] ( 
 [Id]                 INT              IDENTITY(1,1)          NOT NULL,
 [WebHostIp]          VARCHAR(50)                             NOT NULL,
 [Description]        TEXT                                        NULL,
 [WhoIsInformations]  TEXT                                        NULL,
 [TimeStamp]          DATETIME2                               NOT NULL  CONSTRAINT [DF_WebVisitIpList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebVisitIpList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebVisitIpList]  UNIQUE      NONCLUSTERED ([WebHostIp] asc, [TimeStamp] asc) )
 
 
```    
			
---   
			