namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterBusinessIncomingOrderSupportList")]
    public class EasyITCenterBusinessIncomingOrderSupportListApi : ControllerBase {

        [HttpGet("/EasyITCenterBusinessIncomingOrderSupportList/{documentNumber}")]
        public async Task<string> GetBusinessIncomingOrderSupportListKey(string documentNumber) {
            List<BusinessIncomingOrderSupportList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().BusinessIncomingOrderSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterBusinessIncomingOrderSupportList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocBusinessIncomingOrderSupportList([FromBody] List<BusinessIncomingOrderSupportList> record) {
            try {
                int result;
                EasyITCenterContext data = new EasyITCenterContext(); data.BusinessIncomingOrderSupportLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterBusinessIncomingOrderSupportList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<BusinessIncomingOrderSupportList> data;
                data = new EasyITCenterContext().BusinessIncomingOrderSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EasyITCenterContext data1 = new EasyITCenterContext(); data1.BusinessIncomingOrderSupportLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }
    }
}