namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterSolutionCodeLibraryList")]
    public class EasyITCenterSolutionCodeLibraryListApi : ControllerBase {

        [HttpGet("/EasyITCenterSolutionCodeLibraryList")]
        public async Task<string> GetSolutionCodeLibraryList() {
            List<SolutionCodeLibraryList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().SolutionCodeLibraryLists.OrderBy(a => a.Name).ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterSolutionCodeLibraryList/Filter/{filter}")]
        public async Task<string> GetSolutionCodeLibraryListByFilter(string filter) {
            List<SolutionCodeLibraryList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().SolutionCodeLibraryLists.FromSqlRaw("SELECT * FROM SolutionCodeLibraryList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }


        [HttpGet("/EasyITCenterSolutionCodeLibraryList/ByGroup/{code}")]
        public async Task<string> GetSolutionCodeLibraryListGroup(string code) {
            List<SolutionCodeLibraryList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().SolutionCodeLibraryLists
                    .Where(a =>
                    (code.ToLower() == "web" && (a.InheritedCodeType.ToLower() == "html" || a.InheritedCodeType.ToLower() == "javascript" || a.InheritedCodeType.ToLower() == "css")
                    || a.InheritedCodeType.ToLower() == code.ToLower())).OrderBy(a => a.InheritedCodeType).ThenBy(a=>a.Name).ToList();
            }

            return JsonSerializer.Serialize(data);
        }


        [HttpGet("/EasyITCenterSolutionCodeLibraryList/{id}")]
        public async Task<string> GetSolutionCodeLibraryListKey(int id) {
            SolutionCodeLibraryList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().SolutionCodeLibraryLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterSolutionCodeLibraryList")]
        [Consumes("application/json")]
        public async Task<string> InsertSolutionCodeLibraryList([FromBody] SolutionCodeLibraryList record) {
            try {
                var data = new EasyITCenterContext().SolutionCodeLibraryLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterSolutionCodeLibraryList")]
        [Consumes("application/json")]
        public async Task<string> UpdateSolutionCodeLibraryList([FromBody] SolutionCodeLibraryList record) {
            try {
                var data = new EasyITCenterContext().SolutionCodeLibraryLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterSolutionCodeLibraryList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteSolutionCodeLibraryList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                SolutionCodeLibraryList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().SolutionCodeLibraryLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}