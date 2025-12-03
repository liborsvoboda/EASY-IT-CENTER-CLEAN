namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterServerStaticOrMvcDefPathList")]
    public class ServerStaticOrMvcDefPathListApi : ControllerBase {

        [HttpGet("/EasyITCenterServerStaticOrMvcDefPathList")]
        public async Task<string> GetServerStaticOrMvcDefPathList() {
            List<ServerStaticOrMvcDefPathList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().ServerStaticOrMvcDefPathLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterServerStaticOrMvcDefPathList/Filter/{filter}")]
        public async Task<string> GetServerStaticOrMvcDefPathListByFilter(string filter) {
            List<ServerStaticOrMvcDefPathList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().ServerStaticOrMvcDefPathLists.FromSqlRaw("SELECT * FROM ServerStaticOrMvcDefPathList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterServerStaticOrMvcDefPathList/{id}")]
        public async Task<string> GetServerStaticOrMvcDefPathListKey(int id) {
            ServerStaticOrMvcDefPathList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().ServerStaticOrMvcDefPathLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterServerStaticOrMvcDefPathList")]
        [Consumes("application/json")]
        public async Task<string> InsertServerStaticOrMvcDefPathList([FromBody] ServerStaticOrMvcDefPathList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().ServerStaticOrMvcDefPathLists.Add(record);
                int result = await data.Context.SaveChangesAsync();

                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.ServerStaticOrMvcDefPathLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterServerStaticOrMvcDefPathList")]
        [Consumes("application/json")]
        public async Task<string> UpdateServerStaticOrMvcDefPathList([FromBody] ServerStaticOrMvcDefPathList record) {
            try {
                var data = new EasyITCenterContext().ServerStaticOrMvcDefPathLists.Update(record);
                int result = await data.Context.SaveChangesAsync();

                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.ServerStaticOrMvcDefPathLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterServerStaticOrMvcDefPathList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteServerStaticOrMvcDefPathList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                ServerStaticOrMvcDefPathList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().ServerStaticOrMvcDefPathLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();

                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.ServerStaticOrMvcDefPathLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}