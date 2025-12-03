namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterBasicAttachmentList")]
    public class EasyITCenterBasicAttachmentListApi : ControllerBase {

        [HttpGet("/EasyITCenterBasicAttachmentList")]
        public async Task<string> GetBasicAttachmentList() {
            List<BasicViewAttachmentList> data = new();
            try {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().BasicViewAttachmentLists.ToList(); }
            } catch (Exception ex) { }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterBasicAttachmentList/Filter/{filter}")]
        public async Task<string> GetBasicAttachmentListByFilter(string filter) {
            List<BasicViewAttachmentList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().BasicViewAttachmentLists.FromSqlRaw("SELECT * FROM BasicViewBasicAttachmentList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterBasicAttachmentList/{id}")]
        public async Task<string> GetBasicAttachmentListByKey(int id) {
            BasicAttachmentList data = new();
            try {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().BasicAttachmentLists.Where(a => a.Id == id).First(); }
            } catch (Exception ex) { }
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterBasicAttachmentList/{inheritedParentRecordType}/{parentId}")]
        public async Task<string> GetBasicAttachmentListKey(string inheritedParentRecordType, int parentId) {
            List<BasicAttachmentList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().BasicAttachmentLists.Where(a => a.InheritedParentRecordType == inheritedParentRecordType && a.ParentId == parentId).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterBasicAttachmentList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocBasicAttachmentList([FromBody] List<BasicAttachmentList> record) {
            try {
                int result;
                EasyITCenterContext data = new EasyITCenterContext(); data.BasicAttachmentLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpDelete("/EasyITCenterBasicAttachmentList/{inheritedParentRecordType}/{parentId}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string inheritedParentRecordType, int parentId) {
            try {
                List<BasicAttachmentList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { 
                    data = new EasyITCenterContext().BasicAttachmentLists.Where(a => a.InheritedParentRecordType == inheritedParentRecordType && a.ParentId == parentId).ToList(); }

                EasyITCenterContext data1 = new EasyITCenterContext(); data1.BasicAttachmentLists.RemoveRange(data);
                int result = data1.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}