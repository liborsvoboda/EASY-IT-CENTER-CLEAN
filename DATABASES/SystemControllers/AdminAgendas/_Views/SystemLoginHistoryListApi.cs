namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterSystemLoginHistoryList")]
    public class EasyITCenterSystemLoginHistoryListApi : ControllerBase {

        [HttpGet("/EasyITCenterSystemLoginHistoryList")]
        public async Task<string> GetLoginHistory() {
            List<SystemLoginHistoryList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) { data = new EasyITCenterContext().SystemLoginHistoryLists.OrderByDescending(a => a.TimeStamp).ToList(); }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterSystemLoginHistoryList/Filter/{filter}")]
        public async Task<string> GetSystemLoginHistoryListByFilter(string filter) {
            List<SystemLoginHistoryList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().SystemLoginHistoryLists.FromSqlRaw("SELECT * FROM SystemLoginHistoryList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPost("/EasyITCenterSystemLoginHistoryList")]
        [Consumes("application/json")] // ([FromBody] int Id) Body is only 17 ([FromBody] IdFilter id) Body is {"Id":17}
        public async Task<string> GetSystemLoginHistoryListId([FromBody] int id) {
            if (!int.TryParse(id.ToString(), out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

            SystemLoginHistoryList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().SystemLoginHistoryLists.Where(a => a.Id == id).First(); }
            return JsonSerializer.Serialize(data);
        }

        /*
            [HttpPost("/EasyITCenterLoginHistory/Name")]
            [Consumes("application/json")]//([FromBody] string Name) Body is only "tester" ([FromBody] NameFilter Name) Body is {"Name":"tester"}
            public async Task<string> GetLoginHistoryName([FromBody] NameFilter Name)
            {
                if (string.IsNullOrWhiteSpace(Name.Name)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is null" });

                List<LoginHistory> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions
                { IsolationLevel = IsolationLevel.ReadUncommitted }))
                { data = new EasyITCenterContext().LoginHistories.Where(a => a.UserName == Name.Name.ToString()).ToList(); }
                return JsonSerializer.Serialize(data);
            }
        */
    }
}
