# Úvod   Start -DATABASE-RULE  

Vše začíná U databáze. 
Pravidla určující MultiLogiku v 1 Balíčku.
Zde najdete Kompletní Strukturu Aktuální Databáze
a Seznam Pravidel, které je obecně dobré dodržovat

1 pravidlo: Každé slovo má Hluboký Význam

Složené Datapohledy a Funkce

# DB - Export Views a Funkcí Řešení,   
Zde najdete složené Datapohledy a Funkce   
### FNfnGetFileName     
			
```sql   Create FUNCTION fnGetFileName
(
    @fullpath nvarchar(1024)
) 
RETURNS nvarchar(1024)
AS
BEGIN
    IF(CHARINDEX('\', @fullpath) > 0)
       SELECT @fullpath = RIGHT(@fullpath, CHARINDEX('\', REVERSE(@fullpath)) -1)
       RETURN @fullpath
END
```    
---   
			### FN Fn_SplitString     
			
```sql   Create FUNCTION [dbo].[Fn_SplitString]
(
    @string    nvarchar(max),
    @delimiter nvarchar(max)
)
/*
    The same as STRING_SPLIT for compatibility level < 130
    https://docs.microsoft.com/en-us/sql/t-sql/functions/string-split-transact-sql?view=sql-server-ver15
*/
RETURNS TABLE AS RETURN
(
    SELECT 
      --ROW_NUMBER ( ) over(order by (select 0))                            AS id     --  intuitive, but not correect
        Split.a.value('let $n := . return count(../*[. << $n]) + 1', 'int') AS id
      , Split.a.value('.', 'NVARCHAR(MAX)')                                 AS value
    FROM
    (
        SELECT CAST('<X>'+REPLACE(@string, @delimiter, '</X><X>')+'</X>' AS XML) AS String
    ) AS a
    CROSS APPLY String.nodes('/X') AS Split(a)
)
```    
---   
			### VIEW ProviderViewGeneratedToolRatingList     
			
```sql   CREATE VIEW dbo.ProviderViewGeneratedToolRatingList
AS
SELECT        Name, AVG(Rating) AS Rating, COUNT(Id) AS CountRating,
                             (SELECT        COUNT(Id) AS Expr1
                               FROM            dbo.ProviderGeneratedToolList AS gt
                               WHERE        (Name = g.Name)) AS TotalCount
FROM            dbo.ProviderGeneratedToolList AS g
WHERE        (Rating IS NOT NULL)
GROUP BY Name

```    
---   
			### VIEW BasicViewAttachmentList     
			
```sql   CREATE VIEW dbo.BasicViewAttachmentList
AS
SELECT        TOP (100) PERCENT AL.Id, AL.FileName, IL.PartNumber, AL.TimeStamp
FROM            dbo.BasicAttachmentList AS AL LEFT OUTER JOIN
                         dbo.BasicItemList AS IL ON AL.ParentId = IL.Id AND AL.ParentType = 'ITEM'
ORDER BY AL.FileName

```    
---   
			