[Zpět](../../)   


```csharp  
using EasyITCenter.DBModel;

namespace EasyITCenter.Controllers {
    [Authorize]
    [ApiController]
    [Route("EasyITCenterTemplateRange")]
    public class EasyITCenterTemplateRangeApi : ControllerBase {
        [HttpGet("/EasyITCenterTemplateRange/{documentNumber}")]
        public async Task<string> GetTemplateRangeKey(string documentNumber) {
            List<OutgoingInvoiceSupportList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EasyITCenterContext().OutgoingInvoiceSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList(); }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterTemplateRange")]
        [Consumes("application/json")]
        public async Task<string> InsertAllDocTemplateRange([FromBody] List<OutgoingInvoiceSupportList> record) {
            try {
                int result;
                EasyITCenterContext data = new EasyITCenterContext(); data.OutgoingInvoiceSupportLists.AddRange(record);
                result = data.SaveChanges();

                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterTemplateRange/{documentNumber}")]
        [Consumes("application/json")]
        public async Task<string> DeleteItemList(string documentNumber) {
            try {
                List<OutgoingInvoiceSupportList> data;
                data = new EasyITCenterContext().OutgoingInvoiceSupportLists.Where(a => a.DocumentNumber == documentNumber).ToList();
                EasyITCenterContext data1 = new EasyITCenterContext(); data1.OutgoingInvoiceSupportLists.RemoveRange(data);
                int result = data1.SaveChanges();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}

```  
