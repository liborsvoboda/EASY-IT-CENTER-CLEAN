namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("ReceiptItemList")]
    public class ReceiptItemListApi : ControllerBase {

        [HttpGet("/ReceiptItemList/{documentNumber}")]
        public async Task<string> GetReceiptItemListKey(string documentNumber) {
            List<ReceiptItemList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().ReceiptItemLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/ReceiptItemList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocReceiptItemList([FromBody] List<ReceiptItemList> record) {
            try {
                int result;
                EASYDATACenterContext data = new EASYDATACenterContext(); data.ReceiptItemLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/ReceiptItemList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<ReceiptItemList> data;
                data = new EASYDATACenterContext().ReceiptItemLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EASYDATACenterContext data1 = new EASYDATACenterContext(); data1.ReceiptItemLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}