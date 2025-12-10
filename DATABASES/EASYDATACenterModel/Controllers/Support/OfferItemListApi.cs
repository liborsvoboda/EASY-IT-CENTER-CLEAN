namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("OfferItemList")]
    public class OfferItemListApi : ControllerBase {

        [HttpGet("/OfferItemList/{documentNumber}")]
        public async Task<string> GetOfferItemListKey(string documentNumber) {
            List<OfferItemList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().OfferItemLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/OfferItemList")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocOfferItemList([FromBody] List<OfferItemList> record) {
            try {
                int result;
                EASYDATACenterContext data = new EASYDATACenterContext(); data.OfferItemLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/OfferItemList/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<OfferItemList> data;
                data = new EASYDATACenterContext().OfferItemLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EASYDATACenterContext data1 = new EASYDATACenterContext(); data1.OfferItemLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}