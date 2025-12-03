namespace EasyITCenter.Controllers {

    [AllowAnonymous]
    [ApiController]
    [Route("EasyITCenterSolutionMixedEnumList")]
    public class EasyITCenterSolutionMixedEnumListApi : ControllerBase {

        [HttpGet("/EasyITCenterSolutionMixedEnumList")]
        public async Task<string> GetSolutionMixedEnumList() {
            List<SolutionMixedEnumList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().SolutionMixedEnumLists.OrderBy(a => a.ItemsGroup).ThenBy(a=>a.Name).ToList();
            }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterSolutionMixedEnumList/Filter/{filter}")]
        public async Task<string> GetSolutionMixedEnumListByFilter(string filter) {
            List<SolutionMixedEnumList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().SolutionMixedEnumLists.FromSqlRaw("SELECT * FROM SolutionMixedEnumList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterSolutionMixedEnumList/ByGroup/{groupname}")]
        public async Task<string> GetSolutionMixedEnumListByGroup(string groupname) {
            List<SolutionMixedEnumList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().SolutionMixedEnumLists.Where(a => a.ItemsGroup.ToLower() == groupname.ToLower()).OrderBy(a=>a.Name).ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterSolutionMixedEnumList/{id}")]
        public async Task<string> GetSolutionMixedEnumListKey(int id) {
            SolutionMixedEnumList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().SolutionMixedEnumLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }


        [Authorize]
        [HttpPut("/EasyITCenterSolutionMixedEnumList")]
        [Consumes("application/json")]
        public async Task<string> InsertSolutionMixedEnumList([FromBody] SolutionMixedEnumList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().SolutionMixedEnumLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpPost("/EasyITCenterSolutionMixedEnumList")]
        [Consumes("application/json")]
        public async Task<string> UpdateSolutionMixedEnumList([FromBody] SolutionMixedEnumList record) {
            try {
                var data = new EasyITCenterContext().SolutionMixedEnumLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [Authorize]
        [HttpDelete("/EasyITCenterSolutionMixedEnumList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteSolutionMixedEnumList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                SolutionMixedEnumList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().SolutionMixedEnumLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }

}