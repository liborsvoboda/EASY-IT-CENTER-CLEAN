namespace EasyITCenter.Controllers {

    [ApiController]
    [Route("EasyITCenterWebDocumentationList")]
    public class EasyITCenterWebDocumentationListApi : ControllerBase {

        [HttpGet("/EasyITCenterWebDocumentationList")]
        public async Task<string> GetWebDocumentationList() {
            List<WebDocumentationList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().WebDocumentationLists
                    .OrderBy(a => a.Sequence).ThenBy(a => a.Name)
                    .ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterWebDocumentationList/Filter/{filter}")]
        public async Task<string> GetWebDocumentationListByFilter(string filter) {
            List<WebDocumentationList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().WebDocumentationLists.FromSqlRaw("SELECT * FROM WebDocumentationList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterWebDocumentationList/{id}")]
        public async Task<string> GetWebDocumentationListKey(int id) {
            WebDocumentationList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().WebDocumentationLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [Authorize]
        [HttpPut("/EasyITCenterWebDocumentationList")]
        [Consumes("application/json")]
        public async Task<string> InsertWebDocumentationList([FromBody] WebDocumentationList record) {
            try {
                record.MdContent = DataOperations.MarkDownLineEndSpacesResolve(record.MdContent);
                var data = new EasyITCenterContext().WebDocumentationLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [Authorize]
        [HttpPost("/EasyITCenterWebDocumentationList")]
        [Consumes("application/json")]
        public async Task<string> UpdateWebDocumentationList([FromBody] WebDocumentationList record) {
            try {
                record.MdContent = DataOperations.MarkDownLineEndSpacesResolve(record.MdContent);
                var data = new EasyITCenterContext().WebDocumentationLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [Authorize]
        [HttpDelete("/EasyITCenterWebDocumentationList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteWebDocumentationList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                WebDocumentationList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().WebDocumentationLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}