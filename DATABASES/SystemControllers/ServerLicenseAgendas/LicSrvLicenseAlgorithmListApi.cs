namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterLicSrvLicenseAlgorithmList")]
    public class EasyITCenterLicSrvLicenseAlgorithmListApi : ControllerBase {

        [HttpGet("/EasyITCenterLicSrvLicenseAlgorithmList")]
        public async Task<string> GetLicSrvLicenseAlgorithmList() {
            List<LicSrvLicenseAlgorithmList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().LicSrvLicenseAlgorithmLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterLicSrvLicenseAlgorithmList/Filter/{filter}")]
        public async Task<string> GetLicSrvLicenseAlgorithmListByFilter(string filter) {
            List<LicSrvLicenseAlgorithmList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().LicSrvLicenseAlgorithmLists.FromSqlRaw("SELECT * FROM LicSrvLicenseAlgorithmList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterLicSrvLicenseAlgorithmList/{id}")]
        public async Task<string> GetLicSrvLicenseAlgorithmListKey(int id) {
            LicSrvLicenseAlgorithmList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().LicSrvLicenseAlgorithmLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/EasyITCenterLicSrvLicenseAlgorithmList")]
        [Consumes("application/json")]
        public async Task<string> InsertLicSrvLicenseAlgorithmList([FromBody] LicSrvLicenseAlgorithmList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EasyITCenterContext().LicSrvLicenseAlgorithmLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/EasyITCenterLicSrvLicenseAlgorithmList")]
        [Consumes("application/json")]
        public async Task<string> UpdateLicSrvLicenseAlgorithmList([FromBody] LicSrvLicenseAlgorithmList record) {
            try {
                var data = new EasyITCenterContext().LicSrvLicenseAlgorithmLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/EasyITCenterLicSrvLicenseAlgorithmList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteLicSrvLicenseAlgorithmList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                LicSrvLicenseAlgorithmList record = new() { Id = int.Parse(id) };

                var data = new EasyITCenterContext().LicSrvLicenseAlgorithmLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}