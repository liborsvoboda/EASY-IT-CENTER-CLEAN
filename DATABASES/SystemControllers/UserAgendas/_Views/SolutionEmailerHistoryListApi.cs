namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterSolutionEmailerHistoryList")]
    public class SolutionEmailerHistoryListApi : ControllerBase {

        [HttpGet("/EasyITCenterSolutionEmailerHistoryList")]
        public async Task<string> GetSolutionEmailerHistoryList() {
            List<SolutionEmailerHistoryList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions
            {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            }))
            {
                data = new EasyITCenterContext().SolutionEmailerHistoryLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterSolutionEmailerHistoryList/Filter/{filter}")]
        public async Task<string> GetSolutionEmailerHistoryListByFilter(string filter) {
            List<SolutionEmailerHistoryList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions
            {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            }))
            {
                data = new EasyITCenterContext().SolutionEmailerHistoryLists.FromSqlRaw("SELECT * FROM SolutionEmailerHistoryList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterSolutionEmailerHistoryList/{id}")]
        public async Task<string> GetSolutionEmailerHistoryListKey(int id) {
            SolutionEmailerHistoryList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions
            {
                IsolationLevel = IsolationLevel.ReadUncommitted
            }))
            {
                data = new EasyITCenterContext().SolutionEmailerHistoryLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterSolutionEmailerHistoryList")]
        [Consumes("application/json")]
        public async Task<string> InsertSolutionEmailerHistoryList([FromBody] SolutionEmailerHistoryList record) {
            try
            {
                var data = new EasyITCenterContext().SolutionEmailerHistoryLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            }
            catch (Exception ex)
            {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterSolutionEmailerHistoryList")]
        [Consumes("application/json")]
        public async Task<string> UpdateSolutionEmailerHistoryList([FromBody] SolutionEmailerHistoryList record) {
            try
            {
                var data = new EasyITCenterContext().SolutionEmailerHistoryLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            }
            catch (Exception ex)
            { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterSolutionEmailerHistoryList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteSolutionEmailerHistoryList(string id) {
            try
            {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                SolutionEmailerHistoryList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().SolutionEmailerHistoryLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            }
            catch (Exception ex)
            {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}