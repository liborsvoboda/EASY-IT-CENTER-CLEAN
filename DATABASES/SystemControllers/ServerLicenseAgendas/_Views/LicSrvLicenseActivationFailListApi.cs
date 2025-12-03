namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterLicSrvLicenseActivationFailList")]
    public class EasyITCenterLicSrvLicenseActivationFailListApi : ControllerBase {

        [HttpGet("/EasyITCenterLicSrvLicenseActivationFailList")]
        public async Task<string> GetLicSrvLicenseActivationFailList() {
            List<LicSrvLicenseActivationFailList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().LicSrvLicenseActivationFailLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterLicSrvLicenseActivationFailList/Filter/{filter}")]
        public async Task<string> GetLicSrvLicenseActivationFailListByFilter(string filter) {
            List<LicSrvLicenseActivationFailList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().LicSrvLicenseActivationFailLists.FromSqlRaw("SELECT * FROM LicSrvLicenseActivationFailList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterLicSrvLicenseActivationFailList/{id}")]
        public async Task<string> GetLicSrvLicenseActivationFailListKey(int id) {
            LicSrvLicenseActivationFailList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().LicSrvLicenseActivationFailLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }
    }
}