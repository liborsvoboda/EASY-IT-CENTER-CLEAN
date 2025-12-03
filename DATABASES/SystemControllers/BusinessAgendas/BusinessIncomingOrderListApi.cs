namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterBusinessIncomingOrderList")]
    public class EasyITCenterBusinessIncomingOrderListApi : ControllerBase {

        [HttpGet("/EasyITCenterBusinessIncomingOrderList")]
        public async Task<string> GetBusinessIncomingOrderList() {
            List<BusinessIncomingOrderList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().BusinessIncomingOrderLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterBusinessIncomingOrderList/Filter/{filter}")]
        public async Task<string> GetBusinessIncomingOrderListByFilter(string filter) {
            List<BusinessIncomingOrderList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().BusinessIncomingOrderLists.FromSqlRaw("SELECT * FROM BusinessIncomingOrderList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterBusinessIncomingOrderList/{id}")]
        public async Task<string> GetBusinessIncomingOrderListKey(int id) {
            BusinessIncomingOrderList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().BusinessIncomingOrderLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterBusinessIncomingOrderList")]
        [Consumes("application/json")]
        public async Task<string> InsertBusinessIncomingOrderList([FromBody] BusinessIncomingOrderList record) {
            try {
                //Increase and update Last Document Number
                SystemDocumentAdviceList documentAdvice = new SystemDocumentAdviceList(); string lastDocumentNumber = string.Empty;
                documentAdvice = new EasyITCenterContext().SystemDocumentAdviceLists.Where(a => a.InheritedDocumentType == "incomingOrder" && (a.StartDate == null || a.StartDate <= DateTime.UtcNow.Date) && (a.EndDate == null || a.EndDate >= DateTime.UtcNow.Date)).FirstOrDefault();
                if (documentAdvice != null) {
                    documentAdvice.Number = (int.Parse(documentAdvice.Number) + 1).ToString("D" + documentAdvice.Number.Length.ToString());
                    lastDocumentNumber = documentAdvice.Prefix + documentAdvice.Number;
                    var documentData = new EasyITCenterContext().SystemDocumentAdviceLists.Update(documentAdvice);
                    await documentData.Context.SaveChangesAsync();
                    record.DocumentNumber = lastDocumentNumber;
                }

                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().BusinessIncomingOrderLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = lastDocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterBusinessIncomingOrderList")]
        [Consumes("application/json")]
        public async Task<string> UpdateBusinessIncomingOrderList([FromBody] BusinessIncomingOrderList record) {
            try {
                var data = new EasyITCenterContext().BusinessIncomingOrderLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = record.DocumentNumber, RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterBusinessIncomingOrderList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteBusinessIncomingOrderList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                string docNumber = null;
                docNumber = new EasyITCenterContext().BusinessIncomingOrderLists.First(a => a.Id == int.Parse(id)).DocumentNumber;
                BusinessIncomingOrderList record = new() { Id = int.Parse(id), DocumentNumber = docNumber };

                var data = new EasyITCenterContext().BusinessIncomingOrderLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}