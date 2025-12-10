namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("LicenseActivationFailList")]
    public class LicenseActivationFailListApi : ControllerBase {

        [HttpGet("/LicenseActivationFailList")]
        public async Task<string> GetLicenseActivationFailList() {
            List<LicenseActivationFailList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().LicenseActivationFailLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/LicenseActivationFailList/Filter/{filter}")]
        public async Task<string> GetLicenseActivationFailListByFilter(string filter) {
            List<LicenseActivationFailList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().LicenseActivationFailLists.FromSqlRaw("SELECT * FROM LicenseActivationFailList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/LicenseActivationFailList/{id}")]
        public async Task<string> GetLicenseActivationFailListKey(int id) {
            LicenseActivationFailList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().LicenseActivationFailLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }
    }
}