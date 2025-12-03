namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterBusinessOutgoingInvoiceSupportList")]
    public class EasyITCenterBusinessOutgoingInvoiceSupportListApi : ControllerBase {

        [HttpGet("/EasyITCenterBusinessOutgoingInvoiceSupportList/{documentNumber}")]
        public async Task<string> GetBusinessOutgoingInvoiceSupportListKey(string documentNumber) {
            List<BusinessOutgoingInvoiceSupportList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().BusinessOutgoingInvoiceSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterBusinessOutgoingInvoiceSupportList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocBusinessOutgoingInvoiceSupportList([FromBody] List<BusinessOutgoingInvoiceSupportList> record) {
            try {
                int result;
                EasyITCenterContext data = new EasyITCenterContext(); data.BusinessOutgoingInvoiceSupportLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterBusinessOutgoingInvoiceSupportList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<BusinessOutgoingInvoiceSupportList> data;
                data = new EasyITCenterContext().BusinessOutgoingInvoiceSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EasyITCenterContext data1 = new EasyITCenterContext(); data1.BusinessOutgoingInvoiceSupportLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }
    }
}