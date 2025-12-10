namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("LanguageList")]
    public class LanguageListApi : ControllerBase {

        [AllowAnonymous]
        [HttpGet("/LanguageList")]
        public async Task<string> GetLanguageList() {
            List<LanguageList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().LanguageLists.ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [AllowAnonymous]
        [HttpGet("/LanguageList/Filter/{filter}")]
        public async Task<string> GetLanguageListByFilter(string filter) {
            List<LanguageList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().LanguageLists.FromSqlRaw("SELECT * FROM LanguageList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [AllowAnonymous]
        [HttpGet("/LanguageList/{id}")]
        public async Task<string> GetLanguageListKey(int id) {
            LanguageList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().LanguageLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [HttpPut("/LanguageList")]
        [Consumes("application/json")]
        public async Task<string> InsertLanguageList([FromBody] LanguageList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EASYDATACenterContext().LanguageLists.Add(record);
                int result = await data.Context.SaveChangesAsync();

                //Server LocalFile
                ServerCoreDbOperations.LoadStaticDbDials(ServerLocalDbDials.LanguageList);

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/LanguageList")]
        [Consumes("application/json")]
        public async Task<string> UpdateLanguageList([FromBody] LanguageList record) {
            try {
                var data = new EASYDATACenterContext().LanguageLists.Update(record);
                int result = await data.Context.SaveChangesAsync();

                //Server LocalFile
                ServerCoreDbOperations.LoadStaticDbDials(ServerLocalDbDials.LanguageList);

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/LanguageList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteLanguageList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                LanguageList record = new() { Id = int.Parse(id) };

                var data = new EASYDATACenterContext().LanguageLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();

                //Server LocalFile
                ServerCoreDbOperations.LoadStaticDbDials(ServerLocalDbDials.LanguageList);

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}