namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("ReportQueueList")]
    public class ReportQueueListApi : ControllerBase {

        [HttpGet("/ReportQueueList")]
        public async Task<string> GetReportQueueList() {
            List<ReportQueueList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().ReportQueueLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/ReportQueueList/Filter/{filter}")]
        public async Task<string> GetReportQueueListByFilter(string filter) {
            List<ReportQueueList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().ReportQueueLists.FromSqlRaw("SELECT * FROM ReportQueueList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/ReportQueueList/{id}")]
        public async Task<string> GetReportQueueListKey(int id) {
            ReportQueueList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().ReportQueueLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/ReportQueueList")]
        [Consumes("application/json")]
        public async Task<string> InsertReportQueueList([FromBody] ReportQueueList record) {
            try {
                var data = new EASYDATACenterContext().ReportQueueLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/ReportQueueList/WriteFilter")]
        [Consumes("application/json")]
        public async Task<string> UpdateReportQueueListWriteFilter([FromBody] SetReportFilter record) {
            try {
                List<ReportQueueList> dbData;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { dbData = new EASYDATACenterContext().ReportQueueLists.Where(a => a.TableName == record.TableName).ToList(); }
                dbData.ForEach(rec => { rec.Filter = record.Filter; rec.Search = record.Search; rec.RecId = record.RecId; });

                EASYDATACenterContext data = new EASYDATACenterContext();
                data.ReportQueueLists.UpdateRange(dbData);
                int result = await data.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpPost("/ReportQueueList")]
        [Consumes("application/json")]
        public async Task<string> UpdateReportQueueList([FromBody] ReportQueueList record) {
            try {
                var data = new EASYDATACenterContext().ReportQueueLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/ReportQueueList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteReportQueueList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                ReportQueueList record = new() { Id = int.Parse(id) };

                var data = new EASYDATACenterContext().ReportQueueLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}