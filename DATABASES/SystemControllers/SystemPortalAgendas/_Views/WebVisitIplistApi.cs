namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterWebVisitIpList")]
    public class EasyITCenterWebVisitIpListApi : ControllerBase {

        [HttpGet("/EasyITCenterWebVisitIpList")]
        public async Task<string> GetWebVisit() {
            List<WebVisitIpList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) { data = new EasyITCenterContext().WebVisitIpLists.OrderByDescending(a => a.TimeStamp).ToList(); }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterWebVisitIpList/Distinct")]
        public async Task<string> GetDistinctWebVisitIpLists() {
            List<string> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) { data = new EasyITCenterContext().WebVisitIpLists.Select(a => a.WebHostIp).ToList().Distinct().ToList(); }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterWebVisitIpList/Filter/{filter}")]
        public async Task<string> GetWebVisitIpListsByFilter(string filter) {
            List<WebVisitIpList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().WebVisitIpLists.FromSqlRaw("SELECT * FROM WebVisitIpLists WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        //[HttpPost("/EasyITCenterWebVisitIpList")]
        //[Consumes("application/json")] // ([FromBody] int Id) Body is only 17 ([FromBody] IdFilter id) Body is {"Id":17}
        //public async Task<string> GetWebVisitIpListsId([FromBody] IdFilter id) {
        //    if (!int.TryParse(id.Id.ToString(), out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

        //    WebVisitIpLists data;
        //    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().WebVisitIpLists.Where(a => a.Id == id.Id).First(); }
        //    return JsonSerializer.Serialize(data);
        //}

        [HttpPut("/EasyITCenterWebVisitIpList")]
        [Consumes("application/json")]
        public async Task<string> InsertWebVisitIpLists([FromBody] WebVisitIpList record) {
            try {
                var data = new EasyITCenterContext().WebVisitIpLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterWebVisitIpList")]
        [Consumes("application/json")]
        public async Task<string> UpdateWebVisitIpLists([FromBody] WebVisitIpList record) {
            try {
                var data = new EasyITCenterContext().WebVisitIpLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterWebVisitIpList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteWebVisitIpLists(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                WebVisitIpList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().WebVisitIpLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
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