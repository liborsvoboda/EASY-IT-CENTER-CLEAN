namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterLicSrvUsedLicenseList")]
    public class EasyITCenterLicSrvUsedLicenseListApi : ControllerBase {

        [HttpGet("/EasyITCenterLicSrvUsedLicenseList")]
        public async Task<string> GetLicSrvUsedLicenseList() {
            List<LicSrvUsedLicenseList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().LicSrvUsedLicenseLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterLicSrvUsedLicenseList/Filter/{filter}")]
        public async Task<string> GetLicSrvUsedLicenseListByFilter(string filter) {
            List<LicSrvUsedLicenseList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().LicSrvUsedLicenseLists.FromSqlRaw("SELECT * FROM LicSrvUsedLicenseList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterLicSrvUsedLicenseList/{id}")]
        public async Task<string> GetLicSrvUsedLicenseListKey(int id) {
            LicSrvUsedLicenseList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().LicSrvUsedLicenseLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }
    }
}