# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

SQL_STORED_PROCEDURE





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
