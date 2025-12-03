# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

TABLE


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
 
 