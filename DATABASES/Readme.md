# Definice Databází   


# Class Definiti0on In Controllers
Must be defined Previous Controllers for Swagger


# Entity Framework 6
Je použit Entity Framework 6, tím jsou tedy podporovány všechny standardní Typy Databází



**Jasná a Jednoduchá Globální Struktura**    
Api se nabízí jako Služby, plánované úlohy, Procesy, Operace, Generátory, Exporty   

- GlobalApi: Api Definované Pro Uživatele
- Server Api: Je Serverová Unikátní API
- SystemApi: Jsou Api využité Systémem
- WebApi: Jsou unikátní Api pro centrální Ovládání WebServeru




# TODO

1] Přesunout datové Definice dio lok8ln9 tabulky a agendy Dynamické Datové Definice
a z tama je používat jak na serveru tak v systému - převádět je viz JsonSerialize: Typická Tabulka

GenericTable ConvertGenericClassToStandard

2] vytvořit proceduru na hromadné změny v tabulkách 

jako přidání sloupce, změna typu, nahrazení stringu


---   
# TODO DATABASE MANAGEMENT   

*   MassInsert: db.BulkInsertAsync/Update/Delete/ 
*   Clear cache by EasyITCenterContext.RefreshModel()
*   New Table by EasyITCenterContext.Attach()
*   Testing and Commit/rollback EasyITCenterContext.GetDbTransaction().Save/Release/Rollback 
*   EasyITCenterContext.GetDbTransaction(). + next can be solution for Selection
*   a.Model. -get procedures/function,schema,views,
*   a.Database.AutoTransactionsEnabled = true, a.Database.beginTransaction/close,commit
*   createDB a.Database.EnsureCreated
*   Script For Create All Tables a.Database.GenerateCreateScript()
*   a.Database.GetDbConnection().ChangeDatabase(dbName)
*   a.Database.GetDbConnection().GetSchema()
*   CONTEXT TO DB a.Database.Migrate()
*   Open custom connect a.Database.OpenConnection() a.Database.UseTransaction() 
*   a.Database.SetConnectionString() a.Database.RollbackTransaction()
*   a.Database.ExecuteSqlRaw - Original executing, delete DB a.Database.EnsureDeleted/Created
*   a.Database.GetMigrations 
*   Connect NEW DB a.Database.GetInfrastructure().CreateScope
*   a.Model.GetDefaultSchema a.Model.GetDbFunctions
*   a.GetDto().ToCsv a.GetDto().ToJson/xml 
*   copy context EasyITCenterContext.CreateCopy()
*   TODO Integrity Operations db.Merge, 



#   Scaffold Command

dotnet ef dbcontext scaffold "Data Source=192.168.1.141,1433; Initial Catalog=EasyITCenter; User ID=easyitcenter;\
Password=easyitcenter;TrustServerCertificate=True;command timeout=300;" Microsoft.EntityFrameworkCore.SqlServer --context ScaffoldContext
--context-dir DATABASES/EasyITCenter/DBModel --output-dir DATABASES/EasyITCenter/NewEntities --context-namespace EasyITCenter.DBModel
--namespace EasyITCenter.DBModel --data-annotations --no-onconfiguring --force --no-build --verbose
