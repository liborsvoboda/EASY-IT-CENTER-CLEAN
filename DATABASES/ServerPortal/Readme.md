# MICROSOFT LIST Available Library

[Net API Catalog](https://apisof.net/catalog)
https://source.dot.net/
https://referencesource.microsoft.com/
https://learn.microsoft.com/cs-cz/dotnet/api/



# NWAMP registrace vlastnich funkci a procedur n signalr


# CakeScript 
C# builder system with api scripts ETC
viz FastReport

# NUGET restsharp
for clients, auto convert, google drive, etc..

# ADD LING REPORT BUILDER/designer/editor


# Primary HELP PAGES
https://github.com/dotnet

# Primary HOW TO
https://learn.microsoft.com/en-us/dotnet/core/extensions/generic-host?tabs=appbuilder
https://learn.microsoft.com/en-us/dotnet/fundamentals/


# Extension JS access from C#

C# object are accessible from JS
https://github.com/danielgolabek/BlendedJint

# User Help NodeJs
https://nodejs.org/api/sqlite.html



# GENHTTP 
jeste dohrat dalsi knihovny



# Update EntityFramework Scaffold Tool   

`````         
dotnet tool update --global dotnet-ef --version 6.0.33   
`````        

# Managing AND Scaffolding SQLLocalDB 

- Database can Be Managed By MS Management Studio
- can be connected from file with Connection String

````        
'Data Source=Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=E:\\Projekty\\zEasy\\EASY-IT-CENTER\\EASY-IT-CENTER-SERVER\\wwwroot\\server-private\\databases\\EICwebHosting.mdf;Integrated Security=True;Connect Timeout=30'

````        

- LocalDB must be connected to '(localdb)\MSSQLLocalDB'   
- By MSSQL connection can be scaffolded [Generate Model & DBContext] to Project Code
- Scaffold LocalDB From direct file is not possible    

`````    
dotnet ef dbcontext scaffold "Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=EICWebHostingDb" Microsoft.EntityFrameworkCore.SqlServer    
Scaffold-DbContext 'Data Source=(LocalDB)\MSSQLLocalDB;Initial Catalog=EICWebHostingDb;Integrated Security=True;Connect Timeout=30' Microsoft.EntityFrameworkCore.SqlServer -ContextName EICWebHostingDbContext -Namespace EasyITCenter.WebDBModel -OutputDir DATABASES/WebHosting/WebHostingModel -ContextDir DATABASES/WebHosting -force    

`````        
# Possible Scaffold Parameters    

`````    
dotnet ef dbcontext scaffold ... --table Artist --table Album    
dotnet ef dbcontext scaffold ... --schema Customer --schema Contractor    
dotnet ef dbcontext scaffold ... --table Customer.Purchases --table Contractor.Accounts --table Contractor.Contracts   
dotnet ef dbcontext scaffold ... --context-dir Data --output-dir Models --namespace Your.Namespace --context-namespace Your.DbContext.Namespace --force   
dotnet ef dbcontext scaffold ... --force   

`````    
# Managing SQL Scripts nad Migrations commands    

`````     
Command Line	Description    
dotnet ef migrations add [name]	Create a new migration with the specific migration name.   
dotnet ef migrations remove	Remove the latest migration.   
dotnet ef database update	Update the database to the latest migration.   
dotnet ef database update [name]	Update the database to a specific migration name point.   
dotnet ef migrations list	Lists all available migrations.   
dotnet ef migrations script	Generates a SQL script for all migrations.   
dotnet ef migrations has-pending-model-changes	Check if there is any model changes since the last migration.   
dotnet ef database drop	Drop the database.   
dotnet ef migrations script   
`````    

# Documentation For EntityFramework, Migrations, Scaffolding     

[Migrations](https://github.com/zzzprojects/docs/blob/master/learnentityframeworkcore.com/pages/migrations/index.md)   

 
