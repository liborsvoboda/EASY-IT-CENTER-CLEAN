# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

TABLE


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
 
 