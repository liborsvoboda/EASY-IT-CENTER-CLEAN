namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("OutgoingInvoiceItemList")]
    public class OutgoingInvoiceItemListApi : ControllerBase {

        [HttpGet("/OutgoingInvoiceItemList/{documentNumber}")]
        public async Task<string> GetOutgoingInvoiceItemListKey(string documentNumber) {
            List<OutgoingInvoiceItemList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().OutgoingInvoiceItemLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/OutgoingInvoiceItemList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocOutgoingInvoiceItemList([FromBody] List<OutgoingInvoiceItemList> record) {
            try {
                int result;
                EASYDATACenterContext data = new EASYDATACenterContext(); data.OutgoingInvoiceItemLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/OutgoingInvoiceItemList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<OutgoingInvoiceItemList> data;
                data = new EASYDATACenterContext().OutgoingInvoiceItemLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EASYDATACenterContext data1 = new EASYDATACenterContext(); data1.OutgoingInvoiceItemLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}