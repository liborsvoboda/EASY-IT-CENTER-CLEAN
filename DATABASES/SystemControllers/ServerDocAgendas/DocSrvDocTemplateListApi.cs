namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterDocSrvDocTemplateList")]
    public class EasyITCenterDocSrvDocTemplateListApi : ControllerBase {

        [HttpGet("/EasyITCenterDocSrvDocTemplateList")]
        public async Task<string> GetDocSrvDocTemplateList() {
            List<DocSrvDocTemplateList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().DocSrvDocTemplateLists.OrderBy(a => a.InheritedCodeType)
                    .ThenBy(a=>a.Sequence).ThenBy(a => a.Name).ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterDocSrvDocTemplateList/Filter/{filter}")]
        public async Task<string> GetDocSrvDocTemplateListByFilter(string filter) {
            List<DocSrvDocTemplateList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().DocSrvDocTemplateLists.FromSqlRaw("SELECT * FROM DocSrvDocTemplateList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }


        [HttpGet("/EasyITCenterDocSrvDocTemplateList/ByGroup/{code}")]
        public async Task<string> GetDocSrvDocTemplateListGroup(string code) {
            List<DocSrvDocTemplateList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().DocSrvDocTemplateLists.Where(a => 
                (code.ToLower() == "web" && (a.InheritedCodeType.ToLower() == "html" || a.InheritedCodeType.ToLower() == "javascript" || a.InheritedCodeType.ToLower() == "css")
                    || a.InheritedCodeType.ToLower() == code.ToLower())).OrderBy(a => a.Sequence).ThenBy(a=>a.Name).ToList();
            }

            return JsonSerializer.Serialize(data);
        }


        [HttpGet("/EasyITCenterDocSrvDocTemplateList/{id}")]
        public async Task<string> GetDocSrvDocTemplateListKey(int id) {
            DocSrvDocTemplateList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().DocSrvDocTemplateLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterDocSrvDocTemplateList")]
        [Consumes("application/json")]
        public async Task<string> InsertDocSrvDocTemplateList([FromBody] DocSrvDocTemplateList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().DocSrvDocTemplateLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterDocSrvDocTemplateList")]
        [Consumes("application/json")]
        public async Task<string> UpdateDocSrvDocTemplateList([FromBody] DocSrvDocTemplateList record) {
            try {
                var data = new EasyITCenterContext().DocSrvDocTemplateLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterDocSrvDocTemplateList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteDocSrvDocTemplateList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                DocSrvDocTemplateList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().DocSrvDocTemplateLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}