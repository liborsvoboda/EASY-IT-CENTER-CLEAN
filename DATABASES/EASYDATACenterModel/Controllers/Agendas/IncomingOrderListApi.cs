namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("IncomingOrderList")]
    public class IncomingOrderListApi : ControllerBase {

        [HttpGet("/IncomingOrderList")]
        public async Task<string> GetIncomingOrderList() {
            List<IncomingOrderList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().IncomingOrderLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/IncomingOrderList/Filter/{filter}")]
        public async Task<string> GetIncomingOrderListByFilter(string filter) {
            List<IncomingOrderList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().IncomingOrderLists.FromSqlRaw("SELECT * FROM IncomingOrderList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/IncomingOrderList/{id}")]
        public async Task<string> GetIncomingOrderListKey(int id) {
            IncomingOrderList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().IncomingOrderLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/IncomingOrderList")]
        [Consumes("application/json")]
        public async Task<string> InsertIncomingOrderList([FromBody] IncomingOrderList record) {
            try {
                //Increase and update Last Document Number
                DocumentAdviceList documentAdvice = new DocumentAdviceList(); string lastDocumentNumber = string.Empty;
                documentAdvice = new EASYDATACenterContext().DocumentAdviceLists.Where(a => a.DocumentType == "incomingOrder" && (a.StartDate == null || a.StartDate <= DateTime.UtcNow.Date) && (a.EndDate == null || a.EndDate >= DateTime.UtcNow.Date)).FirstOrDefault();
                if (documentAdvice != null) {
                    documentAdvice.Number = (int.Parse(documentAdvice.Number) + 1).ToString("D" + documentAdvice.Number.Length.ToString());
                    lastDocumentNumber = documentAdvice.Prefix + documentAdvice.Number;
                    var documentData = new EASYDATACenterContext().DocumentAdviceLists.Update(documentAdvice);
                    await documentData.Context.SaveChangesAsync();
                    record.DocumentNumber = lastDocumentNumber;
                }

                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EASYDATACenterContext().IncomingOrderLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = lastDocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/IncomingOrderList")]
        [Consumes("application/json")]
        public async Task<string> UpdateIncomingOrderList([FromBody] IncomingOrderList record) {
            try {
                var data = new EASYDATACenterContext().IncomingOrderLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = record.DocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/IncomingOrderList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteIncomingOrderList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                string docNumber = null;
                docNumber = new EASYDATACenterContext().IncomingOrderLists.First(a => a.Id == int.Parse(id)).DocumentNumber;
                IncomingOrderList record = new() { Id = int.Parse(id), DocumentNumber = docNumber };

                var data = new EASYDATACenterContext().IncomingOrderLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}