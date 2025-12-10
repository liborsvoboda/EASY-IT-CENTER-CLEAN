namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("PaymentStatusList")]
    public class PaymentStatusListApi : ControllerBase {

        [HttpGet("/PaymentStatusList")]
        public async Task<string> GetPaymentStatusList() {
            List<PaymentStatusList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().PaymentStatusLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/PaymentStatusList/Filter/{filter}")]
        public async Task<string> GetPaymentStatusListByFilter(string filter) {
            List<PaymentStatusList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().PaymentStatusLists.FromSqlRaw("SELECT * FROM PaymentStatusList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/PaymentStatusList/{id}")]
        public async Task<string> GetPaymentStatusListKey(int id) {
            PaymentStatusList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().PaymentStatusLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/PaymentStatusList")]
        [Consumes("application/json")]
        public async Task<string> InsertPaymentStatusList([FromBody] PaymentStatusList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EASYDATACenterContext().PaymentStatusLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/PaymentStatusList")]
        [Consumes("application/json")]
        public async Task<string> UpdatePaymentStatusList([FromBody] PaymentStatusList record) {
            try {
                var data = new EASYDATACenterContext().PaymentStatusLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/PaymentStatusList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeletePaymentStatusList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                PaymentStatusList record = new() { Id = int.Parse(id) };

                var data = new EASYDATACenterContext().PaymentStatusLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}