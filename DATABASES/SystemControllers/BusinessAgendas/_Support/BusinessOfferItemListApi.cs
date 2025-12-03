namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterBusinessOfferSupportList")]
    public class EasyITCenterBusinessOfferSupportListApi : ControllerBase {

        [HttpGet("/EasyITCenterBusinessOfferSupportList/{documentNumber}")]
        public async Task<string> GetBusinessOfferSupportListKey(string documentNumber) {
            List<BusinessOfferSupportList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().BusinessOfferSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterBusinessOfferSupportList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocBusinessOfferSupportList([FromBody] List<BusinessOfferSupportList> record) {
            try {
                int result;
                EasyITCenterContext data = new EasyITCenterContext(); data.BusinessOfferSupportLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterBusinessOfferSupportList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<BusinessOfferSupportList> data;
                data = new EasyITCenterContext().BusinessOfferSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EasyITCenterContext data1 = new EasyITCenterContext(); data1.BusinessOfferSupportLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }
    }
}