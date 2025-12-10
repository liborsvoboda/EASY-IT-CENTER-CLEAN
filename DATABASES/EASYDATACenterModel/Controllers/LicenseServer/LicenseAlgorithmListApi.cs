namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("LicenseAlgorithmList")]
    public class LicenseAlgorithmListApi : ControllerBase {

        [HttpGet("/LicenseAlgorithmList")]
        public async Task<string> GetLicenseAlgorithmList() {
            List<LicenseAlgorithmList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().LicenseAlgorithmLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/LicenseAlgorithmList/Filter/{filter}")]
        public async Task<string> GetLicenseAlgorithmListByFilter(string filter) {
            List<LicenseAlgorithmList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().LicenseAlgorithmLists.FromSqlRaw("SELECT * FROM LicenseAlgorithmList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/LicenseAlgorithmList/{id}")]
        public async Task<string> GetLicenseAlgorithmListKey(int id) {
            LicenseAlgorithmList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().LicenseAlgorithmLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/LicenseAlgorithmList")]
        [Consumes("application/json")]
        public async Task<string> InsertLicenseAlgorithmList([FromBody] LicenseAlgorithmList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EASYDATACenterContext().LicenseAlgorithmLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/LicenseAlgorithmList")]
        [Consumes("application/json")]
        public async Task<string> UpdateLicenseAlgorithmList([FromBody] LicenseAlgorithmList record) {
            try {
                var data = new EASYDATACenterContext().LicenseAlgorithmLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/LicenseAlgorithmList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteLicenseAlgorithmList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                LicenseAlgorithmList record = new() { Id = int.Parse(id) };

                var data = new EASYDATACenterContext().LicenseAlgorithmLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}