namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterDocSrvDocumentationGroupList")]
    public class EasyITCenterDocSrvDocumentationGroupListApi : ControllerBase {

        [HttpGet("/EasyITCenterDocSrvDocumentationGroupList")]
        public async Task<string> GetDocSrvDocumentationGroupList() {
            List<DocSrvDocumentationGroupList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().DocSrvDocumentationGroupLists
                    .OrderBy(a => a.Sequence).ThenBy(a => a.Name)
                    .ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterDocSrvDocumentationGroupList/Filter/{filter}")]
        public async Task<string> GetDocSrvDocumentationGroupListByFilter(string filter) {
            List<DocSrvDocumentationGroupList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().DocSrvDocumentationGroupLists.FromSqlRaw("SELECT * FROM DocSrvDocumentationGroupList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterDocSrvDocumentationGroupList/{id}")]
        public async Task<string> GetDocSrvDocumentationGroupListKey(int id) {
            DocSrvDocumentationGroupList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().DocSrvDocumentationGroupLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterDocSrvDocumentationGroupList")]
        [Consumes("application/json")]
        public async Task<string> InsertDocSrvDocumentationGroupList([FromBody] DocSrvDocumentationGroupList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().DocSrvDocumentationGroupLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterDocSrvDocumentationGroupList")]
        [Consumes("application/json")]
        public async Task<string> UpdateDocSrvDocumentationGroupList([FromBody] DocSrvDocumentationGroupList record) {
            try {
                var data = new EasyITCenterContext().DocSrvDocumentationGroupLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterDocSrvDocumentationGroupList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteDocSrvDocumentationGroupList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                DocSrvDocumentationGroupList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().DocSrvDocumentationGroupLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}