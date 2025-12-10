namespace EASYDATACenter.Controllers {

    [ApiController]
    [Route("MottoList")]
    public class MottoListApi : ControllerBase {

        [HttpGet("/MottoList")]
        public async Task<string> GetMottoList() {
            List<MottoList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().MottoLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }
    }
}