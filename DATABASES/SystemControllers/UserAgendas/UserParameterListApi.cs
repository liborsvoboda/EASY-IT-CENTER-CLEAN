namespace EasyITCenter.Controllers {

    [ApiController]
    [Route("EasyITCenterUserParameterList")]
    public class EasyITCenterUserParameterListApi : ControllerBase {

        [HttpGet("/EasyITCenterUserParameterList")]
        public async Task<string> GetUserParameterList() {
            List<UserParameterList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = new EasyITCenterContext().UserParameterLists.Where(a => a.UserId == null).ToList();
            }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterUserParameterList/Filter/{filter}")]
        public async Task<string> GetUserParameterListByFilter(string filter) {
            List<UserParameterList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().UserParameterLists.FromSqlRaw("SELECT * FROM UserParameterList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [Authorize]
        [HttpGet("/EasyITCenterUserParameterList/{userId}")]
        public async Task<string> GetUserParameterListKey(int userId) {
            List<UserParameterList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                data = new EasyITCenterContext().UserParameterLists.Where(a => a.UserId == userId || a.UserId == null).ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [Authorize]
        [HttpPut("/EasyITCenterUserParameterList")]
        [Consumes("application/json")]
        public async Task<string> InsertUserParameterList([FromBody] UserParameterList record) {
            try {
                if (EasyITCenterContextExtension.IsAdmin()) {
                    record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                    var data = new EasyITCenterContext().UserParameterLists.Add(record);
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
        [HttpPost("/EasyITCenterUserParameterList")]
        [Consumes("application/json")]
        public async Task<string> UpdateUserParameterList([FromBody] UserParameterList record) {
            try {
                if (EasyITCenterContextExtension.IsAdmin()) {
                    var data = new EasyITCenterContext().UserParameterLists.Update(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(DBResult.DeniedYouAreNotAdmin.ToString()) });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [Authorize]
        [HttpDelete("/EasyITCenterUserParameterList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteUserParameterList(string id) {
            try {
                if (EasyITCenterContextExtension.IsAdmin()) {
                    if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                    UserParameterList record = new() { Id = int.Parse(id) };

                    var data = new EasyITCenterContext().UserParameterLists.Remove(record);
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