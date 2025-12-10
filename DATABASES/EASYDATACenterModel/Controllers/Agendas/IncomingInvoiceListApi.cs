namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("IncomingInvoiceList")]
    public class IncomingInvoiceListApi : ControllerBase {

        [HttpGet("/IncomingInvoiceList")]
        public async Task<string> GetIncomingInvoiceList() {
            List<IncomingInvoiceList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().IncomingInvoiceLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/IncomingInvoiceList/Filter/{filter}")]
        public async Task<string> GetIncomingInvoiceListByFilter(string filter) {
            List<IncomingInvoiceList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().IncomingInvoiceLists.FromSqlRaw("SELECT * FROM IncomingInvoiceList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/IncomingInvoiceList/{id}")]
        public async Task<string> GetIncomingInvoiceListKey(int id) {
            IncomingInvoiceList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().IncomingInvoiceLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/IncomingInvoiceList")]
        [Consumes("application/json")]
        public async Task<string> InsertIncomingInvoiceList([FromBody] IncomingInvoiceList record) {
            try {
                //Increase and update Last Document Number
                DocumentAdviceList documentAdvice = new DocumentAdviceList(); string lastDocumentNumber = string.Empty;
                documentAdvice = new EASYDATACenterContext().DocumentAdviceLists.Where(a => a.DocumentType == "incomingInvoice" && (a.StartDate == null || a.StartDate <= DateTime.UtcNow.Date) && (a.EndDate == null || a.EndDate >= DateTime.UtcNow.Date)).FirstOrDefault();
                if (documentAdvice != null) {
                    documentAdvice.Number = (int.Parse(documentAdvice.Number) + 1).ToString("D" + documentAdvice.Number.Length.ToString());
                    lastDocumentNumber = documentAdvice.Prefix + documentAdvice.Number;
                    var documentData = new EASYDATACenterContext().DocumentAdviceLists.Update(documentAdvice);
                    await documentData.Context.SaveChangesAsync();
                    record.DocumentNumber = lastDocumentNumber;
                }

                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EASYDATACenterContext().IncomingInvoiceLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = lastDocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/IncomingInvoiceList")]
        [Consumes("application/json")]
        public async Task<string> UpdateIncomingInvoiceList([FromBody] IncomingInvoiceList record) {
            try {
                var data = new EASYDATACenterContext().IncomingInvoiceLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = record.DocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/IncomingInvoiceList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteIncomingInvoiceList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                string docNumber = null;
                docNumber = new EASYDATACenterContext().IncomingInvoiceLists.First(a => a.Id == int.Parse(id)).DocumentNumber;
                IncomingInvoiceList record = new() { Id = int.Parse(id), DocumentNumber = docNumber };

                var data = new EASYDATACenterContext().IncomingInvoiceLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}