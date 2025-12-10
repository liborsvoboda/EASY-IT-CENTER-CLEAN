namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("IncomingInvoiceItemList")]
    public class IncomingInvoiceItemListApi : ControllerBase {

        [HttpGet("/IncomingInvoiceItemList/{documentNumber}")]
        public async Task<string> GetIncomingInvoiceItemListKey(string documentNumber) {
            List<IncomingInvoiceItemList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().IncomingInvoiceItemLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/IncomingInvoiceItemList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocIncomingInvoiceItemList([FromBody] List<IncomingInvoiceItemList> record) {
            try {
                int result;
                EASYDATACenterContext data = new EASYDATACenterContext(); data.IncomingInvoiceItemLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/IncomingInvoiceItemList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<IncomingInvoiceItemList> data;
                data = new EASYDATACenterContext().IncomingInvoiceItemLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EASYDATACenterContext data1 = new EASYDATACenterContext(); data1.IncomingInvoiceItemLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}