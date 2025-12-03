# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

TABLE


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