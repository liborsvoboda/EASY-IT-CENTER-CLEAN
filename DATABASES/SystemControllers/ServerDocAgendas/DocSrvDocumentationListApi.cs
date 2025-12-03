namespace EasyITCenter.Controllers {

    [ApiController]
    [Route("EasyITCenterDocSrvDocumentationList")]
    public class EasyITCenterDocSrvDocumentationListApi : ControllerBase {

        [HttpGet("/EasyITCenterDocSrvDocumentationList")]
        public async Task<string> GetDocSrvDocumentationList() {
            List<DocSrvDocumentationList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().DocSrvDocumentationLists
                    .OrderBy(a => a.DocumentationGroup.Sequence).ThenBy(a => a.Sequence).ThenBy(a => a.Name)
                    .ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterDocSrvDocumentationList/Filter/{filter}")]
        public async Task<string> GetDocSrvDocumentationListByFilter(string filter) {
            List<DocSrvDocumentationList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().DocSrvDocumentationLists.FromSqlRaw("SELECT * FROM DocSrvDocumentationList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterDocSrvDocumentationList/{id}")]
        public async Task<string> GetDocSrvDocumentationListKey(int id) {
            DocSrvDocumentationList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().DocSrvDocumentationLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [Authorize]
        [HttpPut("/EasyITCenterDocSrvDocumentationList")]
        [Consumes("application/json")]
        public async Task<string> InsertDocSrvDocumentationList([FromBody] DocSrvDocumentationList record) {
            try {
                record.MdContent = DataOperations.MarkDownLineEndSpacesResolve(record.MdContent);
                var data = new EasyITCenterContext().DocSrvDocumentationLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpPost("/EasyITCenterDocSrvDocumentationList")]
        [Consumes("application/json")]
        public async Task<string> UpdateDocSrvDocumentationList([FromBody] DocSrvDocumentationList record) {
            try {
                record.MdContent = DataOperations.MarkDownLineEndSpacesResolve(record.MdContent);
                var data = new EasyITCenterContext().DocSrvDocumentationLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [Authorize]
        [HttpDelete("/EasyITCenterDocSrvDocumentationList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteDocSrvDocumentationList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                DocSrvDocumentationList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().DocSrvDocumentationLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}