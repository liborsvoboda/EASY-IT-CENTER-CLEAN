namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterServerApiSecurityList")]
    public class ServerApiSecurityListApi : ControllerBase {

        [HttpGet("/EasyITCenterServerApiSecurityList")]
        public async Task<string> GetServerApiSecurityList() {
            List<ServerApiSecurityList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().ServerApiSecurityLists.ToList();
            }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterServerApiSecurityList/Filter/{filter}")]
        public async Task<string> GetServerApiSecurityListByFilter(string filter) {
            List<ServerApiSecurityList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().ServerApiSecurityLists.FromSqlRaw("SELECT * FROM ServerApiSecurityList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterServerApiSecurityList/{id}")]
        public async Task<string> GetServerApiSecurityListKey(int id) {
            ServerApiSecurityList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().ServerApiSecurityLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterServerApiSecurityList")]
        [Consumes("application/json")]
        public async Task<string> InsertServerApiSecurityList([FromBody] ServerApiSecurityList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().ServerApiSecurityLists.Add(record);
                int result = await data.Context.SaveChangesAsync();

                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.ServerApiSecurityLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterServerApiSecurityList")]
        [Consumes("application/json")]
        public async Task<string> UpdateServerApiSecurityList([FromBody] ServerApiSecurityList record) {
            try {
                var data = new EasyITCenterContext().ServerApiSecurityLists.Update(record);
                int result = await data.Context.SaveChangesAsync();

                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.ServerApiSecurityLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterServerApiSecurityList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteServerApiSecurityList(int id) {
            try {
                ServerApiSecurityList record = new() { Id = id };
                var data = new EasyITCenterContext().ServerApiSecurityLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();

                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.ServerApiSecurityLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}