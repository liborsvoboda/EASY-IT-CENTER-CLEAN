namespace EasyITCenter.Controllers {

    [ApiController]
    [Route("EasyITCenterSystemTranslationList")]
    public class EasyITCenterSystemTranslationListApi : ControllerBase {

        [HttpGet("/EasyITCenterSystemTranslationList")]
        public async Task<string> GetSystemTranslationList() {
            List<SystemTranslationList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().SystemTranslationLists.OrderByDescending(a=>a.Id).ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
        }

        [HttpGet("/EasyITCenterSystemTranslationList/Filter/{filter}")]
        public async Task<string> GetSystemTranslationListByFilter(string filter) {
            List<SystemTranslationList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().SystemTranslationLists.FromSqlRaw("SELECT * FROM SystemTranslationList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
        }

        [HttpGet("/EasyITCenterSystemTranslationList/{id}")]
        public async Task<string> GetSystemTranslationListKey(int id) {
            SystemTranslationList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().SystemTranslationLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
        }

        [HttpPut("/EasyITCenterSystemTranslationList")]
        [Consumes("application/json")]
        public async Task<string> InsertSystemTranslationList([FromBody] SystemTranslationList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().SystemTranslationLists.Add(record);
                int result = await data.Context.SaveChangesAsync();

                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.SystemTranslationLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpPost("/EasyITCenterSystemTranslationList")]
        [Consumes("application/json")]
        public async Task<string> UpdateSystemTranslationList([FromBody] SystemTranslationList record) {
            try {
                if (EasyITCenterContextExtension.IsAdmin()) {
                    var data = new EasyITCenterContext().SystemTranslationLists.Update(record);
                    int result = await data.Context.SaveChangesAsync();

                    //Update Server LocalFile
                    DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.SystemTranslationLists);

                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [Authorize]
        [HttpDelete("/EasyITCenterSystemTranslationList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteSystemTranslationList(string id) {
            try {
                if (EasyITCenterContextExtension.IsAdmin()) {
                    if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                    SystemTranslationList record = new() { Id = int.Parse(id) };

                    var data = new EasyITCenterContext().SystemTranslationLists.Remove(record);
                    int result = await data.Context.SaveChangesAsync();

                    //Update Server LocalFile
                    DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.SystemTranslationLists);

                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}