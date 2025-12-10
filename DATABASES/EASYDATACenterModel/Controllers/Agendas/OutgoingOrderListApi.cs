namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("OutgoingOrderList")]
    public class OutgoingOrderListApi : ControllerBase {

        [HttpGet("/OutgoingOrderList")]
        public async Task<string> GetOutgoingOrderList() {
            List<OutgoingOrderList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().OutgoingOrderLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/OutgoingOrderList/Filter/{filter}")]
        public async Task<string> GetOutgoingOrderListByFilter(string filter) {
            List<OutgoingOrderList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().OutgoingOrderLists.FromSqlRaw("SELECT * FROM OutgoingOrderList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/OutgoingOrderList/{id}")]
        public async Task<string> GetOutgoingOrderListKey(int id) {
            OutgoingOrderList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().OutgoingOrderLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/OutgoingOrderList")]
        [Consumes("application/json")]
        public async Task<string> InsertOutgoingOrderList([FromBody] OutgoingOrderList record) {
            try {
                //Increase and update Last Document Number
                DocumentAdviceList documentAdvice = new DocumentAdviceList(); string lastDocumentNumber = string.Empty;
                documentAdvice = new EASYDATACenterContext().DocumentAdviceLists.Where(a => a.DocumentType == "outgoingOrder" && (a.StartDate == null || a.StartDate <= DateTime.UtcNow.Date) && (a.EndDate == null || a.EndDate >= DateTime.UtcNow.Date)).FirstOrDefault();
                if (documentAdvice != null) {
                    documentAdvice.Number = (int.Parse(documentAdvice.Number) + 1).ToString("D" + documentAdvice.Number.Length.ToString());
                    lastDocumentNumber = documentAdvice.Prefix + documentAdvice.Number;
                    var documentData = new EASYDATACenterContext().DocumentAdviceLists.Update(documentAdvice);
                    await documentData.Context.SaveChangesAsync();
                    record.DocumentNumber = lastDocumentNumber;
                }

                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EASYDATACenterContext().OutgoingOrderLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = lastDocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/OutgoingOrderList")]
        [Consumes("application/json")]
        public async Task<string> UpdateOutgoingOrderList([FromBody] OutgoingOrderList record) {
            try {
                var data = new EASYDATACenterContext().OutgoingOrderLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = record.DocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/OutgoingOrderList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteOutgoingOrderList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                string docNumber = null;
                docNumber = new EASYDATACenterContext().OutgoingOrderLists.First(a => a.Id == int.Parse(id)).DocumentNumber;
                OutgoingOrderList record = new() { Id = int.Parse(id), DocumentNumber = docNumber };

                var data = new EASYDATACenterContext().OutgoingOrderLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}