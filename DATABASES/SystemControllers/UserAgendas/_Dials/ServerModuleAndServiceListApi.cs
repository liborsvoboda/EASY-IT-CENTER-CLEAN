namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("ServerModuleAndServiceList")]
    public class EasyITCenterServerModuleAndServiceListApi : ControllerBase {

        [HttpGet("/ServerModuleAndServiceList")]
        public async Task<string> GetServerModuleAndServiceList() {
            List<ServerModuleAndServiceList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().ServerModuleAndServiceLists.ToList();
            }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/ServerModuleAndServiceList/Filter/{filter}")]
        public async Task<string> GetServerModuleAndServiceListByFilter(string filter) {
            List<ServerModuleAndServiceList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().ServerModuleAndServiceLists.FromSqlRaw("SELECT * FROM ServerModuleAndServiceList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/ServerModuleAndServiceList/{id}")]
        public async Task<string> GetServerModuleAndServiceListKey(int id) {
            ServerModuleAndServiceList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().ServerModuleAndServiceLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/ServerModuleAndServiceList")]
        [Consumes("application/json")]
        public async Task<string> InsertServerModuleAndServiceList([FromBody] ServerModuleAndServiceList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().ServerModuleAndServiceLists.Add(record);
                int result = await data.Context.SaveChangesAsync();

                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.ServerModuleAndServiceLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/ServerModuleAndServiceList")]
        [Consumes("application/json")]
        public async Task<string> UpdateServerModuleAndServiceList([FromBody] ServerModuleAndServiceList record) {
            try {
                var data = new EasyITCenterContext().ServerModuleAndServiceLists.Update(record);
                int result = await data.Context.SaveChangesAsync();

                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.ServerModuleAndServiceLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/ServerModuleAndServiceList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteServerModuleAndServiceList(int id) {
            try {
                ServerModuleAndServiceList record = new() { Id = id };
                var data = new EasyITCenterContext().ServerModuleAndServiceLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();

                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.ServerModuleAndServiceLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}