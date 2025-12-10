namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("AttachmentList")]
    public class AttachmentListApi : ControllerBase {

        [HttpGet("/AttachmentList")]
        public async Task<string> GetAttachmentList() {
            List<ViewAttachmentList> data = new();
            try {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().ViewAttachmentLists.ToList(); }
            } catch (Exception ex) { }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/AttachmentList/Filter/{filter}")]
        public async Task<string> GetAttachmentListByFilter(string filter) {
            List<ViewAttachmentList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().ViewAttachmentLists.FromSqlRaw("SELECT * FROM ViewAttachmentList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/AttachmentList/{id}")]
        public async Task<string> GetAttachmentListByKey(int id) {
            AttachmentList data = new();
            try {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().AttachmentLists.Where(a => a.Id == id).First(); }
            } catch (Exception ex) { }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/AttachmentList/{type}/{parentId}")]
        public async Task<string> GetAttachmentListKey(string type, int parentId) {
            List<AttachmentList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().AttachmentLists.Where(a => a.ParentType == type && a.ParentId == parentId).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/AttachmentList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocAttachmentList([FromBody] List<AttachmentList> record) {
            try {
                int result;
                EASYDATACenterContext data = new EASYDATACenterContext(); data.AttachmentLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpDelete("/AttachmentList/{type}/{parentId}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string type, int parentId) {
            try {
                List<AttachmentList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().AttachmentLists.Where(a => a.ParentType == type && a.ParentId == parentId).ToList(); }

                EASYDATACenterContext data1 = new EASYDATACenterContext(); data1.AttachmentLists.RemoveRange(data);
                int result = data1.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}