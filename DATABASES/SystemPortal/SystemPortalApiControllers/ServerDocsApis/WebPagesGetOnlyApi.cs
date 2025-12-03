

namespace EasyITCenter.Controllers {

    [ApiController]
    [Route("/WebApi/WebDocumentation")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class WebPagesGetOnlyApi : ControllerBase {

        [HttpGet("/WebApi/WebDocumentation/GetTemplateDocList")]
        public async Task<string> GetTemplateDocList() {
            List<DocSrvDocTemplateList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().DocSrvDocTemplateLists
                    .Include(a => a.Group)
                    .OrderBy(a => a.Group.Sequence).ThenBy(a => a.Name).ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                ReferenceHandler = ReferenceHandler.IgnoreCycles,
                WriteIndented = true,
                DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            });
        }
    }
}