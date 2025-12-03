namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("EasyITCenterSystemSvgIconList")]
    public class EasyITCenterSystemSvgIconListApi : ControllerBase {

        [HttpGet("/EasyITCenterSystemSvgIconList")]
        public async Task<string> GetSystemSvgIconList() {
            List<SystemSvgIconList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().SystemSvgIconLists.OrderBy(a => a.Name).ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterSystemSvgIconList/Filter/{filter}")]
        public async Task<string> GetSystemSvgIconListByFilter(string filter) {
            List<SystemSvgIconList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().SystemSvgIconLists.FromSqlRaw("SELECT * FROM SystemSvgIconList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().OrderBy(a => a.Name).ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/EasyITCenterSystemSvgIconList/{iconName}")]
        public async Task<string> GetSystemSvgIconListKey(string iconName) {
            SystemSvgIconList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EasyITCenterContext().SystemSvgIconLists.Where(a => a.Name == iconName).First();
            }

            return JsonSerializer.Serialize(data);
        }
    }
}