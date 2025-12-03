

#### List Tabulek v Generické REST Full Správě

Tyto Správy jsou v Serveru 2 s autorizací a bez. 
Pro Systém použijete vždy s autorizací, ale třeba pro Internet 
může být bez. 
Pro Vytvoření nového API musíte Vytvořit DB Dabulku v nějakém Editoru
jako třeba zde přímo z Webových Stránek a zkopírovat Tento kód + Přejmenovat Tabulku

Mě je ale mylejší vždy samostatná šablona, maximálně 1 Chyba, a vhodným umístěním v systému
šablon, než se leknout jestli není smazaná a najít ji v seznamu generických.

#### BEZ Šablony - Vložit Název tabulky do Seznamu Generických API

```   
//API URLis: http://localhost:8000/ServerGenericAuthApi/SystemParameterList
[Route("ServerGenericAuthApi/[controller]")]
[ApiController]
public class SystemParameterListController : AuthGenericProviderApi<EasyITCenterContext, SystemParameterList, int> {
        public SystemParameterListController(IRepositoryAsync<EasyITCenterContext, SystemParameterList> repo) : base(repo) { }
    }
```   

```cs   
[Authorize]
[Route("[controller]")]
[ApiController]
public class SolutionWebsiteListController : StdAuthGenericProviderApi<EasyITCenterContext, SolutionWebsiteList, int> {

    public SolutionWebsiteListController(IRepositoryAsync<EasyITCenterContext, TemplateList> repo) : base(repo) {
    }
}
```   


#### Základní REST Full Šablona která vám Vydrží

Všiměte si že mám v ROUTE = URL API, prefix "EasyITCenter".
To pro možnost Vytvořit zmíněný Test Server v 1 minutě.

Zopírováním Adresáře s API voláním a pak jen 
přejmenovat "EasyITCenterTemplateList" na "TestEasyITCenterTemplateList"
v celém projektu.

Na každou drobnost je v projektu myšleno

```cs   
namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterTemplateList")]
    public class EasyITCenterTemplateListApi : ControllerBase {

        [HttpGet("/EasyITCenterTemplateList")]
        public async Task<string> GetTemplateList() {
            List<TemplateList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().TemplateLists.ToList();
            }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterTemplateList/Filter/{filter}")]
        public async Task<string> GetTemplateListByFilter(string filter) {
            List<TemplateList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().TemplateLists.FromSqlRaw("SELECT * FROM TemplateList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterTemplateList/{id}")]
        public async Task<string> GetTemplateListKey(int id) {
            TemplateList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().TemplateLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterTemplateList")]
        [Consumes("application/json")]
        public async Task<string> InsertTemplateList([FromBody] TemplateList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().TemplateLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterTemplateList")]
        [Consumes("application/json")]
        public async Task<string> UpdateTemplateList([FromBody] TemplateList record) {
            try {
                var data = new EasyITCenterContext().TemplateLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterTemplateList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteTemplateList(int id) {
            try {
                TemplateList record = new() { Id = id };
                var data = new EasyITCenterContext().TemplateLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}

```    

#### Primární Šablona pro API Hlavní Tabulky s rozsahem SubPoložek 

Použití je například pro Fakturu, Objednábku atd..
To vše ale jen zkopírujete z existujícího řešení.

Ukládáte Hlavičky i položke v 1 API. Vazba je nastavena na úrovni DB.

```cs   
namespace EasyITCenter.Controllers {
    [Authorize]
    [ApiController]
    [Route("EasyITCenterTemplateRange")]
    public class EasyITCenterTemplateRangeApi : ControllerBase {
        [HttpGet("/EasyITCenterTemplateRange/{documentNumber}")]
        public async Task<string> GetTemplateRangeKey(string documentNumber) {
            List<OutgoingInvoiceSupportList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().OutgoingInvoiceSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterTemplateRange")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocTemplateRange([FromBody] List<OutgoingInvoiceSupportList> record) {
            try {
                int result;
                EasyITCenterContext data = new EasyITCenterContext(); data.OutgoingInvoiceSupportLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterTemplateRange/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<OutgoingInvoiceSupportList> data;
                data = new EasyITCenterContext().OutgoingInvoiceSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EasyITCenterContext data1 = new EasyITCenterContext(); data1.OutgoingInvoiceSupportLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}

```    


#### Sekundární Šablona k Hlavní s Volbou ukládat Odděleně

Pokud Chcete oddelené ukládání ale rozsahu položek, k tomu 
slouží tato šablona. Ne Vždy je nutné ukládat i Hlavičku.

```cs   
using EasyITCenter.DBModel;

namespace EasyITCenter.Controllers {
    [Authorize]
    [ApiController]
    [Route("EasyITCenterTemplateItemList")]
    public class EasyITCenterTemplateItemListApi : ControllerBase {
        [HttpGet("/EasyITCenterTemplateItemList")]
        public async Task<string> GetTemplateItemList() {
            List<ItemList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().ItemLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterTemplateItemList/Filter/{filter}")]
        public async Task<string> GetTemplateItemListByFilter(string filter) {
            List<ItemList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().ItemLists.FromSqlRaw("SELECT * FROM TemplateItemList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterTemplateItemList/{id}")]
        public async Task<string> GetTemplateItemListKey(int id) {
            ItemList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().ItemLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterTemplateItemList")]
        [Consumes("application/json")]
        public async Task<string> InsertTemplateItemList([FromBody] ItemList record) {
            try {
                var data = new EasyITCenterContext().ItemLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterTemplateItemList")]
        [Consumes("application/json")]
        public async Task<string> UpdateTemplateItemList([FromBody] ItemList record) {
            try {
                var data = new EasyITCenterContext().ItemLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterTemplateItemList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteTemplateItemList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                ItemList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().ItemLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();

                //Remove Item Attachments Previous delete Item HERE is not deleted BY foreign key
                List<BasicAttachmentList> Attachmentdata;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { Attachmentdata = new EasyITCenterContext().BasicAttachmentLists.Where(a => a.ParentType == "ITEM" && a.ParentId == int.Parse(id)).ToList(); }
                EasyITCenterContext itemData = new EasyITCenterContext(); itemData.BasicAttachmentLists.RemoveRange(Attachmentdata);
                itemData.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}
```    

#### Šablona Procedury s Návratem Libovolné Tabulky

Universální Šablona pro unikátní Volání přes procedury. Toto
Řešení zajišťuje právě Dynamické API už i bez Programování.
 

```cs   
namespace EasyITCenter.Controllers {
    [Authorize]
    [ApiController]
    [Route("EasyITCenterTemplateAnySProcedureData")]
    public class EasyITCenterTemplateAnySProcedureDataListApi : ControllerBase {
        [HttpGet("/EasyITCenterTemplateAnySProcedureData")]
        public async Task<string> GetTemplateAnySProcedureDataList() {
            List<CustomString> data = new();
            data = new EasyITCenterContext().EasyITCenterCollectionFromSql<CustomString>("EXEC GetTables;");

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }
    }
}
```    


#### Šablona Procedury s Návratem True/False

Sice zbytečná, protože toto mohla řešit předchozí šablona,
ale např pro Aktivaci Licenčního klíče ideální. 
Či pro Optimalizaci provozu na síti na každý bit. 

```cs   
namespace EasyITCenter.Controllers {
    [ApiController]
    [Route("EasyITCenterTemplateProcedure")]
    public class EasyITCenterTemplateProcedureApi : ControllerBase {
        [AllowAnonymous]
        [HttpGet("/EasyITCenterTemplateProcedure/{UnlockCode}/{PartNumber}")]
        public async Task<string> GetTemplateProcedure(string unlockCode, string partNumber) {
            string data = string.Empty; List<SqlParameter> parameters = new(); bool allowed = false; bool catched = false;
            try {
                if (HttpContext.Connection.RemoteIpAddress != null) {
                    string clientIPAddr = System.Net.Dns.GetHostEntry(HttpContext.Connection.RemoteIpAddress).AddressList.First(x => x.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork).ToString();
                    if (!string.IsNullOrWhiteSpace(clientIPAddr)) {
                        parameters = new List<SqlParameter> {
                        new SqlParameter { ParameterName = "@unlockCode", Value = unlockCode },
                        new SqlParameter { ParameterName = "@partNumber", Value = partNumber },
                        new SqlParameter { ParameterName = "@ipAddress", Value = clientIPAddr },
                        new SqlParameter { ParameterName = "@allowed" , Value = allowed, Direction = System.Data.ParameterDirection.Output} };

                        data = new EasyITCenterContext().Database.ExecuteSqlRaw("exec CheckUnlockKey @unlockCode, @partNumber , @ipAddress, @allowed output", parameters.ToArray()).ToString();
                        allowed = bool.Parse(parameters[3].Value.ToString());
                    }
                }
            } catch { catched = true; }
            try {
                if (catched) {
                    parameters = new List<SqlParameter> {
                    new SqlParameter { ParameterName = "@unlockCode", Value = unlockCode },
                    new SqlParameter { ParameterName = "@partNumber", Value = partNumber },
                    new SqlParameter { ParameterName = "@ipAddress", Value = "Unknown" },
                    new SqlParameter { ParameterName = "@allowed" , Value = allowed, Direction = System.Data.ParameterDirection.Output} };

                    data = new EasyITCenterContext().Database.ExecuteSqlRaw("exec CheckUnlockKey @unlockCode, @partNumber , @ipAddress, @allowed output", parameters.ToArray()).ToString();
                    allowed = bool.Parse(parameters[3].Value.ToString());
                }
            } catch { }
            return JsonSerializer.Serialize(allowed);
        }

        [AllowAnonymous]
        [HttpPost("EasyITCenterTemplateProcedure")]
        [Consumes("application/json")]
        public async Task<string> PostTemplateProcedure([FromBody] LicenseActivator record) {
            string data = string.Empty; List<SqlParameter> parameters = new(); bool allowed = false; bool catched = false;
            try {
                if (HttpContext.Connection.RemoteIpAddress != null) {
                    string clientIPAddr = System.Net.Dns.GetHostEntry(HttpContext.Connection.RemoteIpAddress).AddressList.First(x => x.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork).ToString();
                    if (!string.IsNullOrWhiteSpace(clientIPAddr)) {
                        parameters = new List<SqlParameter> {
                        new SqlParameter { ParameterName = "@unlockCode", Value = record.UnlockCode },
                        new SqlParameter { ParameterName = "@partNumber", Value = record.PartNumber },
                        new SqlParameter { ParameterName = "@ipAddress", Value = clientIPAddr },
                        new SqlParameter { ParameterName = "@allowed" , Value = allowed, Direction = System.Data.ParameterDirection.Output} };

                        data = new EasyITCenterContext().Database.ExecuteSqlRaw("exec CheckUnlockKey @unlockCode, @partNumber , @ipAddress, @allowed output", parameters.ToArray()).ToString();
                        allowed = bool.Parse(parameters[3].Value.ToString());
                    }
                }
            } catch { catched = true; }
            try {
                if (catched) {
                    parameters = new List<SqlParameter> {
                        new SqlParameter { ParameterName = "@unlockCode", Value = record.UnlockCode },
                        new SqlParameter { ParameterName = "@partNumber", Value = record.PartNumber },
                        new SqlParameter { ParameterName = "@ipAddress", Value = "Unknown" },
                        new SqlParameter { ParameterName = "@allowed" , Value = allowed, Direction = System.Data.ParameterDirection.Output} };

                    data = new EasyITCenterContext().Database.ExecuteSqlRaw("exec CheckUnlockKey @unlockCode, @partNumber , @ipAddress, @allowed output", parameters.ToArray()).ToString();
                    allowed = bool.Parse(parameters[3].Value.ToString());
                }
            } catch { }
            return JsonSerializer.Serialize(allowed);
        }
    }
}
```    



#### Šablona API pro Distribuci Obrázků / Souborů

A poslední šablona která se dá použít častěji jak 1x ročně,
je pro práci se soubory. Tento portál má Weby uložené v databázi.
Komlpetně. tedy já ji použil pro ohromné výhody které tato logika přináší.

```cs   
namespace EasyITCenter.Controllers {
    [ApiController]
    [Route("EasyITCenterTemplateImageApi/Image")]
    public class EasyITCenterTemplateImageApi : ControllerBase {
        [HttpGet("/EasyITCenterTemplateImageApi/Image/{id}")]
        public async Task<IActionResult> GetSearchImageById(int? id = null) {
            int recId; ImageGalleryList data = null;
            if (!string.IsNullOrWhiteSpace(id.ToString()) && int.TryParse(id.ToString(), out recId)) {
                data = _dbContext.ImageGalleryLists.Where(a => a.Id == recId).FirstOrDefault();
            }

            if (data != null) { return File(data.Attachment, MimeTypes.GetMimeType(data.FileName), data.FileName); } else { return BadRequest(new { message = DBOperations.DBTranslate("BadRequest", "en") }); }
        }

        [HttpGet("/EasyITCenterTemplateImageApi/Image/{id}/{filename}")]
        public async Task<IActionResult> GetSearchImageByKeys(int? id = null, string fileName = null) {
            int recId; ImageGalleryList data = null;
            if (!string.IsNullOrWhiteSpace(id.ToString()) && !string.IsNullOrWhiteSpace(fileName) && int.TryParse(id.ToString(), out recId)) {
                data = _dbContext.ImageGalleryLists.Where(a => a.Id == recId && a.FileName.ToLower() == fileName.ToLower()).FirstOrDefault();
            }

            if (data != null) { return File(data.Attachment, MimeTypes.GetMimeType(data.FileName), data.FileName); } else { return BadRequest(new { message = DBOperations.DBTranslate("BadRequest", "en") }); }
        }

        [HttpGet("/EasyITCenterTemplateImageApi/RoomImage/{id}/{roomId}")]
        public async Task<IActionResult> GetRoomImageByKeys(int? id = null, int? roomId = null) {
            int hId; int rId; ImageGalleryList data = null;
            if (int.TryParse(id.ToString(), out hId) && int.TryParse(roomId.ToString(), out rId)) {
                data = _dbContext.ImageGalleryLists.Where(a => a.Id == hId && a.Id == rId).FirstOrDefault();
            }

            if (data != null) { return File(data.Attachment, MimeTypes.GetMimeType(data.FileName), data.FileName); } else { return BadRequest(new { message = DBOperations.DBTranslate("BadRequest", "en") }); }
        }
    }
}
```    

