using EasyData.EntityFrameworkCore;

namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterWebGlobalPageBlockList")]
    public class EasyITCenterWebGlobalPageBlockListApi : ControllerBase {

        [HttpGet("/EasyITCenterWebGlobalPageBlockList")]
        public async Task<string> GetWebGlobalPageBlockList() {
            List<WebGlobalPageBlockList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().WebGlobalPageBlockLists.OrderBy(a => a.Sequence).ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterWebGlobalPageBlockList/Filter/{filter}")]
        public async Task<string> GetWebGlobalPageBlockListByFilter(string filter) {
            List<WebGlobalPageBlockList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().WebGlobalPageBlockLists.FromSqlRaw("SELECT * FROM WebGlobalPageBlockList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterWebGlobalPageBlockList/{id}")]
        public async Task<string> GetWebGlobalPageBlockListKey(int id) {
            WebGlobalPageBlockList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().WebGlobalPageBlockLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterWebGlobalPageBlockList")]
        [Consumes("application/json")]
        public async Task<string> InsertWebGlobalPageBlockList([FromBody] WebGlobalPageBlockList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().WebGlobalPageBlockLists.Add(record);
                int result = await data.Context.SaveChangesAsync();

                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.WebGlobalPageBlockLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterWebGlobalPageBlockList")]
        [Consumes("application/json")]
        public async Task<string> UpdateWebGlobalPageBlockList([FromBody] WebGlobalPageBlockList record) {
            try {
                var data = new EasyITCenterContext().WebGlobalPageBlockLists.Update(record);
                int result = await data.Context.SaveChangesAsync();

                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.WebGlobalPageBlockLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterWebGlobalPageBlockList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteWebGlobalPageBlockList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                WebGlobalPageBlockList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().WebGlobalPageBlockLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                 
                //Update Server LocalFile
                DbOperations.LoadOrRefreshStaticDbDials(ServerLocalDbDialsTypes.WebGlobalPageBlockLists);

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}