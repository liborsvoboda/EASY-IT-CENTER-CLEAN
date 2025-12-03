namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterBusinessIncomingInvoiceSupportList")]
    public class EasyITCenterBusinessIncomingInvoiceSupportListApi : ControllerBase {

        [HttpGet("/EasyITCenterBusinessIncomingInvoiceSupportList/{documentNumber}")]
        public async Task<string> GetBusinessIncomingInvoiceSupportListKey(string documentNumber) {
            List<BusinessIncomingInvoiceSupportList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().BusinessIncomingInvoiceSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterBusinessIncomingInvoiceSupportList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocBusinessIncomingInvoiceSupportList([FromBody] List<BusinessIncomingInvoiceSupportList> record) {
            try {
                int result;
                EasyITCenterContext data = new EasyITCenterContext(); data.BusinessIncomingInvoiceSupportLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterBusinessIncomingInvoiceSupportList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<BusinessIncomingInvoiceSupportList> data;
                data = new EasyITCenterContext().BusinessIncomingInvoiceSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EasyITCenterContext data1 = new EasyITCenterContext(); data1.BusinessIncomingInvoiceSupportLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }
    }
}