namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterServerCorsDefAllowedOriginList")]
    public class EasyITCenterServerCorsDefAllowedOriginListApi : ControllerBase {

        [HttpGet("/EasyITCenterServerCorsDefAllowedOriginList")]
        public async Task<string> GetServerCorsDefAllowedOriginList() {
            List<ServerCorsDefAllowedOriginList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().ServerCorsDefAllowedOriginLists.ToList();
            }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterServerCorsDefAllowedOriginList/Filter/{filter}")]
        public async Task<string> GetServerCorsDefAllowedOriginListByFilter(string filter) {
            List<ServerCorsDefAllowedOriginList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().ServerCorsDefAllowedOriginLists.FromSqlRaw("SELECT * FROM ServerCorsDefAllowedOriginList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterServerCorsDefAllowedOriginList/{id}")]
        public async Task<string> GetServerCorsDefAllowedOriginListKey(int id) {
            ServerCorsDefAllowedOriginList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().ServerCorsDefAllowedOriginLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterServerCorsDefAllowedOriginList")]
        [Consumes("application/json")]
        public async Task<string> InsertServerCorsDefAllowedOriginList([FromBody] ServerCorsDefAllowedOriginList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().ServerCorsDefAllowedOriginLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterServerCorsDefAllowedOriginList")]
        [Consumes("application/json")]
        public async Task<string> UpdateServerCorsDefAllowedOriginList([FromBody] ServerCorsDefAllowedOriginList record) {
            try {
                var data = new EasyITCenterContext().ServerCorsDefAllowedOriginLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterServerCorsDefAllowedOriginList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteServerCorsDefAllowedOriginList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                ServerCorsDefAllowedOriginList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().ServerCorsDefAllowedOriginLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}