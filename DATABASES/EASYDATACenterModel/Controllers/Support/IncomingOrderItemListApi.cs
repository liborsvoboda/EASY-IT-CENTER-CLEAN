namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("IncomingOrderItemList")]
    public class IncomingOrderItemListApi : ControllerBase {

        [HttpGet("/IncomingOrderItemList/{documentNumber}")]
        public async Task<string> GetIncomingOrderItemListKey(string documentNumber) {
            List<IncomingOrderItemList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().IncomingOrderItemLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/IncomingOrderItemList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocIncomingOrderItemList([FromBody] List<IncomingOrderItemList> record) {
            try {
                int result;
                EASYDATACenterContext data = new EASYDATACenterContext(); data.IncomingOrderItemLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/IncomingOrderItemList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<IncomingOrderItemList> data;
                data = new EASYDATACenterContext().IncomingOrderItemLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EASYDATACenterContext data1 = new EASYDATACenterContext(); data1.IncomingOrderItemLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}