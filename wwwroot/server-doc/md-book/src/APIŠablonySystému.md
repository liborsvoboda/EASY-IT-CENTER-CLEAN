# Úvod   EIC Knihovny Kódů a Šablony  

Knihovny kódů implementovaných v projektu. 
Většinou už budete jen opakovat co bylo vytvořeno, takže stačí vykopírovat z Těchto Knihoven

Těchto pár Šablon Stačí na tvorbu Libovolného Backend Serveru

# EIC- C# API Šablony,   
Standardní C# API pro Vývoj Babkend APi Služeb   
### C# API Autorizace Token, Basic     

```csharp   
			using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {

    [ApiController]
    [Route("GLOBALNETTemplateAuthApi")]
    public class GLOBALNETTemplateAuthApiService : ControllerBase {
        private static Encoding ISO_8859_1_ENCODING = Encoding.GetEncoding("ISO-8859-1");

        [AllowAnonymous]
        [HttpPost("/GLOBALNETTemplateAuthApi")]
        public IActionResult Authenticate([FromHeader] string Authorization) {
            (string username, string password) = GetUsernameAndPasswordFromAuthorizeHeader(Authorization);

            var user = Authenticate(username, password);

            try {
                if (HttpContext.Connection.RemoteIpAddress != null && user != null) {
                    string clientIPAddr = System.Net.Dns.GetHostEntry(HttpContext.Connection.RemoteIpAddress).AddressList.First(x => x.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork).ToString();
                    if (!string.IsNullOrWhiteSpace(clientIPAddr)) { DBOperations.WriteVisit(clientIPAddr, user.Id, username); }
                }
            } catch { }

            if (user == null)
                return BadRequest(new { message = DBOperations.DBTranslate("UsernameOrPasswordIncorrect", BackendServer.ServerConfigSettings.ConfigServerLanguage) });

            if (!BackendServer.ServerConfigSettings.ServerTimeTokenValidationEnabled) { user.Expiration = null; }

            RefreshUserToken(username, user);
            return Ok(JsonSerializer.Serialize(user));
        }

        private static (string?, string?) GetUsernameAndPasswordFromAuthorizeHeader(string authorizeHeader) {
            if (authorizeHeader == null || (!authorizeHeader.Contains("Basic ") && !authorizeHeader.Contains("Bearer "))) return (null, null);

            if (authorizeHeader.Contains("Basic ")) {
                string encodedUsernamePassword = authorizeHeader.Substring("Basic ".Length).Trim();
                string usernamePassword = ISO_8859_1_ENCODING.GetString(Convert.FromBase64String(encodedUsernamePassword));

                string username = usernamePassword.Split(':')[0];
                string password = usernamePassword.Split(':')[1];

                return (username, password);
            }

            return (null, null);
        }

        /// <summary>
        /// API Authenticated and Generate Token
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public static AuthenticateResponse? Authenticate(string? username, string? password) {
            if (username == null)
                return null;

            var user = new EASYDATACenterContext()
                .UserLists.Include(a => a.Role).Where(a => a.Active == true && a.UserName == username && a.Password == password)
                .First();

            if (user == null)
                return null;

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(BackendServer.ServerConfigSettings.ConfigJwtLocalKey);
            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.PrimarySid, user.Id.ToString()),
                    new Claim(ClaimTypes.NameIdentifier, user.UserName),
                    new Claim(ClaimTypes.Role, user.Role.SystemName),
                    new Claim(ClaimTypes.Dns, BackendServer.ServerConfigSettings.ConfigCertificateDomain),
                }),
                Issuer = user.UserName,
                NotBefore = DateTimeOffset.Now.DateTime,
                Expires = DateTimeOffset.Now.AddMinutes(BackendServer.ServerConfigSettings.ConfigApiTokenTimeoutMin).DateTime,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            AuthenticateResponse authResponse = new() { Id = user.Id, Name = user.Name, Surname = user.SurName, Token = tokenHandler.WriteToken(token), Expiration = token.ValidTo.ToLocalTime(), Role = user.Role.SystemName };
            return authResponse;
        }

        /// <summary>
        /// API Refresh User Token
        /// </summary>
        /// <param name="username"></param>
        /// <param name="token">   </param>
        /// <returns></returns>
        public static bool RefreshUserToken(string username, AuthenticateResponse token) {
            try {
                var dbUser = new EASYDATACenterContext()
                    .UserLists.Where(a => a.Active == true && a.UserName == username)
                    .First();
                if (dbUser == null || dbUser.Token == token.Token && dbUser.Expiration < DateTimeOffset.Now) return false;

                dbUser.Token = token.Token;
                dbUser.Expiration = token.Expiration;
                var data = new EASYDATACenterContext().UserLists.Update(dbUser);
                int result = data.Context.SaveChanges();

                if (result > 0) return true;
                return false;
            } catch (Exception ex) { }
            return false;
        }

        /// <summary>
        /// API Token LifeTime Validator
        /// </summary>
        /// <param name="notBefore"></param>
        /// <param name="expires">  </param>
        /// <param name="token">    </param>
        /// <param name="params">   </param>
        /// <returns></returns>
        internal static bool LifetimeValidator(DateTime? notBefore, DateTime? expires, SecurityToken token, TokenValidationParameters @params) {
            if (RefreshUserToken(token.Issuer, new AuthenticateResponse() { Token = ((JwtSecurityToken)token).RawData.ToString(), Expiration = DateTimeOffset.Now.AddMinutes(BackendServer.ServerConfigSettings.ConfigApiTokenTimeoutMin).DateTime }))
                return true;
            else return false;
        }
    }
}
```    
			
---   
			### C# API pro práci s Dynamickými  Procedurami     

```csharp   
			using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {
    [Authorize]
    [ApiController]
    [Route("GLOBALNETTemplateAnySProcedureData")]
    public class GLOBALNETTemplateAnySProcedureDataListApi : ControllerBase {
    
        [HttpGet("/GLOBALNETTemplateAnySProcedureData")]
        public async Task<string> GetTemplateAnySProcedureDataList() {
            List<CustomString> data = new();
            data = new EASYDATACenterContext().CollectionFromSql<CustomString>("EXEC GetTables;");

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }
    }
    
    
        /// <summary>
        /// Gets Form Agendas Pages List
        /// For System Menu Definition.
        /// </summary>
        /// <returns></returns>
        [HttpGet("/GoldenSystemStoredProceduresList/SystemSpGetSystemPageList")]
        public async Task<string> GetSystemTableList() {
            try {
                List<CustomString> data = new();
                data = new GoldenContext().GoldenCollectionFromSql<CustomString>("EXEC SystemSpGetSystemPageList;");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreHelpers.GetUserApiErrMessage(ex) });
            }
        }
    
        /// <summary>
        /// Api For Logged User 
        /// with Menu Datalist
        /// </summary>
        /// <returns></returns>
        [HttpGet("/GoldenSystemStoredProceduresList/SystemSpGetUserMenuList")]
        public async Task<string> GetSystemSpGetUserMenuList() {
            try {
                List<SpUserMenuList> data = new List<SpUserMenuList>();

                data = new GoldenContext().GoldenCollectionFromSql<SpUserMenuList>("EXEC SystemSpGetUserMenuList @userRole = N'" + User.FindFirst(ClaimTypes.Role.ToString())?.Value + "';");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreHelpers.GetUserApiErrMessage(ex) });
            }
        }
}
```    
			
---   
			### C# API pro práci s Procedurami TrueFalse     

```csharp   
			using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {
    [ApiController]
    [Route("GLOBALNETTemplateProcedure")]
    public class GLOBALNETTemplateProcedureApi : ControllerBase {

        [AllowAnonymous]
        [HttpGet("/GLOBALNETTemplateProcedure/{UnlockCode}/{PartNumber}")]
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

                        data = new EASYDATACenterContext().Database.ExecuteSqlRaw("exec CheckUnlockKey @unlockCode, @partNumber , @ipAddress, @allowed output", parameters.ToArray()).ToString();
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

                    data = new EASYDATACenterContext().Database.ExecuteSqlRaw("exec CheckUnlockKey @unlockCode, @partNumber , @ipAddress, @allowed output", parameters.ToArray()).ToString();
                    allowed = bool.Parse(parameters[3].Value.ToString());
                }
            } catch { }
            return JsonSerializer.Serialize(allowed);
        }

        [AllowAnonymous]
        [HttpPost("GLOBALNETTemplateProcedure")]
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

                        data = new EASYDATACenterContext().Database.ExecuteSqlRaw("exec CheckUnlockKey @unlockCode, @partNumber , @ipAddress, @allowed output", parameters.ToArray()).ToString();
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

                    data = new EASYDATACenterContext().Database.ExecuteSqlRaw("exec CheckUnlockKey @unlockCode, @partNumber , @ipAddress, @allowed output", parameters.ToArray()).ToString();
                    allowed = bool.Parse(parameters[3].Value.ToString());
                }
            } catch { }
            return JsonSerializer.Serialize(allowed);
        }
    }
}
```    
			
---   
			### C# API pro práci s rozsahy položek     

```csharp   
			using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("GLOBALNETTemplateRange")]
    public class GLOBALNETTemplateRangeApi : ControllerBase {

        [HttpGet("/GLOBALNETTemplateRange/{documentNumber}")]
        public async Task<string> GetTemplateRangeKey(string documentNumber) {
            List<OutgoingInvoiceSupportList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().OutgoingInvoiceSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/GLOBALNETTemplateRange")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocTemplateRange([FromBody] List<OutgoingInvoiceSupportList> record) {
            try {
                int result;
                EASYDATACenterContext data = new EASYDATACenterContext(); data.OutgoingInvoiceSupportLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/GLOBALNETTemplateRange/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<OutgoingInvoiceSupportList> data;
                data = new EASYDATACenterContext().OutgoingInvoiceSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EASYDATACenterContext data1 = new EASYDATACenterContext(); data1.OutgoingInvoiceSupportLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}
```    
			
---   
			### C# API pro práci se Soubory,Obrázky,Atd     

```csharp   
			using EASYDATACenter.DBModel;
using MimeKit;

namespace EASYDATACenter.Controllers {

    [ApiController]
    [Route("GLOBALNETTemplateImageApi/Image")]
    public class GLOBALNETTemplateImageApi : ControllerBase {

        [HttpGet("/GLOBALNETTemplateImageApi/Image/{id}")]
        public async Task<IActionResult> GetSearchImageById(int? id = null) {
            int recId; ImageGalleryList data = null;
            if (!string.IsNullOrWhiteSpace(id.ToString()) && int.TryParse(id.ToString(), out recId)) {
                data = _dbContext.ImageGalleryLists.Where(a => a.Id == recId).FirstOrDefault();
            }

            if (data != null) { return File(data.Attachment, MimeTypes.GetMimeType(data.FileName), data.FileName); } else { return BadRequest(new { message = DBOperations.DBTranslate("BadRequest", "en") }); }
        }

        [HttpGet("/GLOBALNETTemplateImageApi/Image/{id}/{filename}")]
        public async Task<IActionResult> GetSearchImageByKeys(int? id = null, string fileName = null) {
            int recId; ImageGalleryList data = null;
            if (!string.IsNullOrWhiteSpace(id.ToString()) && !string.IsNullOrWhiteSpace(fileName) && int.TryParse(id.ToString(), out recId)) {
                data = _dbContext.ImageGalleryLists.Where(a => a.Id == recId && a.FileName.ToLower() == fileName.ToLower()).FirstOrDefault();
            }

            if (data != null) { return File(data.Attachment, MimeTypes.GetMimeType(data.FileName), data.FileName); } else { return BadRequest(new { message = DBOperations.DBTranslate("BadRequest", "en") }); }
        }

        [HttpGet("/GLOBALNETTemplateImageApi/RoomImage/{id}/{roomId}")]
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
			
---   
			### C# API s uložerním Sub Rozsahův 1 kroku     

```csharp   
			using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("GLOBALNETTemplateItemList")]
    public class GLOBALNETTemplateItemListApi : ControllerBase {

        [HttpGet("/GLOBALNETTemplateItemList")]
        public async Task<string> GetTemplateItemList() {
            List<ItemList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().ItemLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETTemplateItemList/Filter/{filter}")]
        public async Task<string> GetTemplateItemListByFilter(string filter) {
            List<ItemList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().ItemLists.FromSqlRaw("SELECT * FROM TemplateItemList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETTemplateItemList/{id}")]
        public async Task<string> GetTemplateItemListKey(int id) {
            ItemList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().ItemLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/GLOBALNETTemplateItemList")]
        [Consumes("application/json")]
        public async Task<string> InsertTemplateItemList([FromBody] ItemList record) {
            try {
                var data = new EASYDATACenterContext().ItemLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/GLOBALNETTemplateItemList")]
        [Consumes("application/json")]
        public async Task<string> UpdateTemplateItemList([FromBody] ItemList record) {
            try {
                var data = new EASYDATACenterContext().ItemLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/GLOBALNETTemplateItemList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteTemplateItemList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                ItemList record = new() { Id = int.Parse(id) };

                var data = new EASYDATACenterContext().ItemLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();

                //Remove Item Attachments Previous delete Item HERE is not deleted BY foreign key
                List<BasicAttachmentList> Attachmentdata;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { Attachmentdata = new EASYDATACenterContext().BasicAttachmentLists.Where(a => a.ParentType == "ITEM" && a.ParentId == int.Parse(id)).ToList(); }
                EASYDATACenterContext itemData = new EASYDATACenterContext(); itemData.BasicAttachmentLists.RemoveRange(Attachmentdata);
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
			
---   
			### C# API Univerzální Šablona RestFull     

```csharp   
			using EASYDATACenter.DBModel;

namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("GLOBALNETTemplateList")]
    public class GLOBALNETTemplateListApi : ControllerBase {

        [HttpGet("/GLOBALNETTemplateList")]
        public async Task<string> GetTemplateList() {
            List<TemplateList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().TemplateLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETTemplateList/Filter/{filter}")]
        public async Task<string> GetTemplateListByFilter(string filter) {
            List<TemplateList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().TemplateLists.FromSqlRaw("SELECT * FROM TemplateList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/GLOBALNETTemplateList/{id}")]
        public async Task<string> GetTemplateListKey(int id) {
            TemplateList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().TemplateLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/GLOBALNETTemplateList")]
        [Consumes("application/json")]
        public async Task<string> InsertTemplateList([FromBody] TemplateList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EASYDATACenterContext().TemplateLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/GLOBALNETTemplateList")]
        [Consumes("application/json")]
        public async Task<string> UpdateTemplateList([FromBody] TemplateList record) {
            try {
                var data = new EASYDATACenterContext().TemplateLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/GLOBALNETTemplateList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteTemplateList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                TemplateList record = new() { Id = int.Parse(id) };

                var data = new EASYDATACenterContext().TemplateLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}
```    
			
---   
			