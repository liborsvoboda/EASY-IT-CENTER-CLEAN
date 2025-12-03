namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterBusinessIncomingInvoiceList")]
    public class EasyITCenterBusinessIncomingInvoiceListApi : ControllerBase {

        [HttpGet("/EasyITCenterBusinessIncomingInvoiceList")]
        public async Task<string> GetBusinessIncomingInvoiceList() {
            List<BusinessIncomingInvoiceList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().BusinessIncomingInvoiceLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterBusinessIncomingInvoiceList/Filter/{filter}")]
        public async Task<string> GetBusinessIncomingInvoiceListByFilter(string filter) {
            List<BusinessIncomingInvoiceList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().BusinessIncomingInvoiceLists.FromSqlRaw("SELECT * FROM BusinessIncomingInvoiceList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterBusinessIncomingInvoiceList/{id}")]
        public async Task<string> GetBusinessIncomingInvoiceListKey(int id) {
            BusinessIncomingInvoiceList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().BusinessIncomingInvoiceLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterBusinessIncomingInvoiceList")]
        [Consumes("application/json")]
        public async Task<string> InsertBusinessIncomingInvoiceList([FromBody] BusinessIncomingInvoiceList record) {
            try {
                //Increase and update Last Document Number
                SystemDocumentAdviceList documentAdvice = new SystemDocumentAdviceList(); string lastDocumentNumber = string.Empty;
                documentAdvice = new EasyITCenterContext().SystemDocumentAdviceLists.Where(a => a.InheritedDocumentType == "incomingInvoice" && (a.StartDate == null || a.StartDate <= DateTime.UtcNow.Date) && (a.EndDate == null || a.EndDate >= DateTime.UtcNow.Date)).FirstOrDefault();
                if (documentAdvice != null) {
                    documentAdvice.Number = (int.Parse(documentAdvice.Number) + 1).ToString("D" + documentAdvice.Number.Length.ToString());
                    lastDocumentNumber = documentAdvice.Prefix + documentAdvice.Number;
                    var documentData = new EasyITCenterContext().SystemDocumentAdviceLists.Update(documentAdvice);
                    await documentData.Context.SaveChangesAsync();
                    record.DocumentNumber = lastDocumentNumber;
                }

                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().BusinessIncomingInvoiceLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = lastDocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterBusinessIncomingInvoiceList")]
        [Consumes("application/json")]
        public async Task<string> UpdateBusinessIncomingInvoiceList([FromBody] BusinessIncomingInvoiceList record) {
            try {
                var data = new EasyITCenterContext().BusinessIncomingInvoiceLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = record.DocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterBusinessIncomingInvoiceList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteBusinessIncomingInvoiceList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                string docNumber = null;
                docNumber = new EasyITCenterContext().BusinessIncomingInvoiceLists.First(a => a.Id == int.Parse(id)).DocumentNumber;
                BusinessIncomingInvoiceList record = new() { Id = int.Parse(id), DocumentNumber = docNumber };

                var data = new EasyITCenterContext().BusinessIncomingInvoiceLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}