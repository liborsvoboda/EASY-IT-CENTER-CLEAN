namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("ReceiptList")]
    public class ReceiptListApi : ControllerBase {

        [HttpGet("/ReceiptList")]
        public async Task<string> GetReceiptList() {
            List<ReceiptList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().ReceiptLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/ReceiptList/Filter/{filter}")]
        public async Task<string> GetReceiptListByFilter(string filter) {
            List<ReceiptList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().ReceiptLists.FromSqlRaw("SELECT * FROM ReceiptList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/ReceiptList/{id}")]
        public async Task<string> GetReceiptListKey(int id) {
            ReceiptList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().ReceiptLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/ReceiptList")]
        [Consumes("application/json")]
        public async Task<string> InsertReceiptList([FromBody] ReceiptList record) {
            try {
                //Increase and update Last Document Number
                DocumentAdviceList documentAdvice = new DocumentAdviceList(); string lastDocumentNumber = string.Empty;
                documentAdvice = new EASYDATACenterContext().DocumentAdviceLists.Where(a => a.DocumentType == "receipt" && (a.StartDate == null || a.StartDate <= DateTime.UtcNow.Date) && (a.EndDate == null || a.EndDate >= DateTime.UtcNow.Date)).FirstOrDefault();
                if (documentAdvice != null) {
                    documentAdvice.Number = (int.Parse(documentAdvice.Number) + 1).ToString("D" + documentAdvice.Number.Length.ToString());
                    lastDocumentNumber = documentAdvice.Prefix + documentAdvice.Number;
                    var documentData = new EASYDATACenterContext().DocumentAdviceLists.Update(documentAdvice);
                    await documentData.Context.SaveChangesAsync();
                    record.DocumentNumber = lastDocumentNumber;
                }

                //Load Receipt Status
                PaymentStatusList receiptStatus = new EASYDATACenterContext().PaymentStatusLists.Where(a => a.Receipt).FirstOrDefault();

                //Update Invoice Identificator And Receipt Status
                OutgoingInvoiceList parentInvoice = new OutgoingInvoiceList();
                parentInvoice = new EASYDATACenterContext().OutgoingInvoiceLists.Where(a => a.DocumentNumber == record.InvoiceNumber).First();
                if (receiptStatus != null) { parentInvoice.PaymentStatusId = receiptStatus.Id; } //Automatic Receipt status

                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EASYDATACenterContext().ReceiptLists.Add(record);
                int result = await data.Context.SaveChangesAsync();

                //Insert ReceiptId to Invoice
                parentInvoice.ReceiptId = record.Id;
                var invoiceData = new EASYDATACenterContext().OutgoingInvoiceLists.Update(parentInvoice);
                await invoiceData.Context.SaveChangesAsync();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = lastDocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/ReceiptList")]
        [Consumes("application/json")]
        public async Task<string> UpdateReceiptList([FromBody] ReceiptList record) {
            try {
                var data = new EASYDATACenterContext().ReceiptLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = record.DocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/ReceiptList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteReceiptList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                string docNumber = null;
                docNumber = new EASYDATACenterContext().ReceiptLists.First(a => a.Id == int.Parse(id)).DocumentNumber;
                ReceiptList record = new() { Id = int.Parse(id), DocumentNumber = docNumber };

                var data = new EASYDATACenterContext().ReceiptLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}