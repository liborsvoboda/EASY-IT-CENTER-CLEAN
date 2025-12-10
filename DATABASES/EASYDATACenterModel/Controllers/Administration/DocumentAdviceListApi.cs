namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("DocumentAdviceList")]
    public class DocumentAdviceListApi : ControllerBase {

        [HttpGet("/DocumentAdviceList")]
        public async Task<string> GetDocumentAdviceList() {
            List<DocumentAdviceList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().DocumentAdviceLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/DocumentAdviceList/Filter/{filter}")]
        public async Task<string> GetDocumentAdviceListByFilter(string filter) {
            List<DocumentAdviceList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().DocumentAdviceLists.FromSqlRaw("SELECT * FROM DocumentAdviceList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/DocumentAdviceList/{documentType}/{branchId}")]
        public async Task<string> GetDocumentAdviceListType(string documentType, int branchId) {
            DocumentAdviceList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().DocumentAdviceLists.Where(a => a.DocumentType == documentType && a.Active == true && a.BranchId == branchId &&
                (a.StartDate == null || a.StartDate <= DateTime.UtcNow.Date) && (a.EndDate == null || a.EndDate >= DateTime.UtcNow.Date)).FirstOrDefault();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/DocumentAdviceList")]
        [Consumes("application/json")]
        public async Task<string> InsertDocumentAdviceList([FromBody] DocumentAdviceList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EASYDATACenterContext().DocumentAdviceLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/DocumentAdviceList")]
        [Consumes("application/json")]
        public async Task<string> UpdateDocumentAdviceList([FromBody] DocumentAdviceList record) {
            try {
                var data = new EASYDATACenterContext().DocumentAdviceLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/DocumentAdviceList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteDocumentAdviceList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                DocumentAdviceList record = new() { Id = int.Parse(id) };

                var data = new EASYDATACenterContext().DocumentAdviceLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}