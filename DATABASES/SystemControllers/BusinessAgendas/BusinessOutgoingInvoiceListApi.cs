namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterBusinessOutgoingInvoiceList")]
    public class EasyITCenterBusinessOutgoingInvoiceListApi : ControllerBase {

        [HttpGet("/EasyITCenterBusinessOutgoingInvoiceList")]
        public async Task<string> GetBusinessOutgoingInvoiceList() {
            List<BusinessOutgoingInvoiceList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().BusinessOutgoingInvoiceLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterBusinessOutgoingInvoiceList/Filter/{filter}")]
        public async Task<string> GetBusinessOutgoingInvoiceListByFilter(string filter) {
            List<BusinessOutgoingInvoiceList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().BusinessOutgoingInvoiceLists.FromSqlRaw("SELECT * FROM BusinessOutgoingInvoiceList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterBusinessOutgoingInvoiceList/{id}")]
        public async Task<string> GetBusinessOutgoingInvoiceListKey(int id) {
            BusinessOutgoingInvoiceList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().BusinessOutgoingInvoiceLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterBusinessOutgoingInvoiceList")]
        [Consumes("application/json")]
        public async Task<string> InsertBusinessOutgoingInvoiceList([FromBody] BusinessOutgoingInvoiceList record) {
            try {
                //Increase and update Last Document Number
                SystemDocumentAdviceList documentAdvice = new SystemDocumentAdviceList(); string lastDocumentNumber = string.Empty;
                documentAdvice = new EasyITCenterContext().SystemDocumentAdviceLists.Where(a => a.InheritedDocumentType == "outgoingInvoice" && (a.StartDate == null || a.StartDate <= DateTime.UtcNow.Date) && (a.EndDate == null || a.EndDate >= DateTime.UtcNow.Date)).FirstOrDefault();
                if (documentAdvice != null) {
                    documentAdvice.Number = (int.Parse(documentAdvice.Number) + 1).ToString("D" + documentAdvice.Number.Length.ToString());
                    lastDocumentNumber = documentAdvice.Prefix + documentAdvice.Number;
                    var documentData = new EasyITCenterContext().SystemDocumentAdviceLists.Update(documentAdvice);
                    await documentData.Context.SaveChangesAsync();
                    record.DocumentNumber = lastDocumentNumber;
                }

                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().BusinessOutgoingInvoiceLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = lastDocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterBusinessOutgoingInvoiceList")]
        [Consumes("application/json")]
        public async Task<string> UpdateBusinessOutgoingInvoiceList([FromBody] BusinessOutgoingInvoiceList record) {
            try {
                var data = new EasyITCenterContext().BusinessOutgoingInvoiceLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = record.DocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterBusinessOutgoingInvoiceList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteBusinessOutgoingInvoiceList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                string docNumber = null;
                docNumber = new EasyITCenterContext().BusinessOutgoingInvoiceLists.First(a => a.Id == int.Parse(id)).DocumentNumber;
                BusinessOutgoingInvoiceList record = new() { Id = int.Parse(id), DocumentNumber = docNumber };

                var data = new EasyITCenterContext().BusinessOutgoingInvoiceLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}