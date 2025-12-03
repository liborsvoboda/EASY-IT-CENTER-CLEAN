namespace EasyITCenter.Controllers {

    [ApiController]
    [Route("EasyITCenterSolutionMottoList")]
    public class EasyITCenterSolutionMottoListApi : ControllerBase {

        [HttpGet("/EasyITCenterSolutionMottoList")]
        public async Task<string> GetSolutionMottoList() {
            List<SolutionMottoList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().SolutionMottoLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterSolutionMottoList/Filter/{filter}")]
        public async Task<string> GetSolutionMottoListByFilter(string filter) {
            List<SolutionMottoList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().SolutionMottoLists.FromSqlRaw("SELECT * FROM SolutionMottoList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
        }

        [HttpGet("/EasyITCenterSolutionMottoList/{id}")]
        public async Task<string> GetSolutionMottoListKey(int id) {
            SolutionMottoList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().SolutionMottoLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
        }

        [Authorize]
        [HttpPut("/EasyITCenterSolutionMottoList")]
        [Consumes("application/json")]
        public async Task<string> InsertSolutionMottoList([FromBody] SolutionMottoList record) {
            try {
                if (EasyITCenterContextExtension.IsAdmin()) {
                    record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                    var data = new EasyITCenterContext().SolutionMottoLists.Add(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpPost("/EasyITCenterSolutionMottoList")]
        [Consumes("application/json")]
        public async Task<string> UpdateSolutionMottoList([FromBody] SolutionMottoList record) {
            try {
                if (EasyITCenterContextExtension.IsAdmin()) {
                    var data = new EasyITCenterContext().SolutionMottoLists.Update(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [Authorize]
        [HttpDelete("/EasyITCenterSolutionMottoList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteSolutionMottoList(string id) {
            try {
                if (EasyITCenterContextExtension.IsAdmin()) {
                    if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                    SolutionMottoList record = new() { Id = int.Parse(id) };

                    var data = new EasyITCenterContext().SolutionMottoLists.Remove(record);
                    int result = await data.Context.SaveChangesAsync();
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