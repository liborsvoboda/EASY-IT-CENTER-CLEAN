[Zpìt](../../)   


```csharp   
using EasyITCenter.DBModel;

namespace EasyITCenter.Controllers {
    [Authorize]
    [ApiController]
    [Route("EasyITCenterTemplateAnySProcedureData")]
    public class EasyITCenterTemplateAnySProcedureDataListApi : ControllerBase {
        [HttpGet("/EasyITCenterTemplateAnySProcedureData")]
        public async Task<string> GetTemplateAnySProcedureDataList() {
            List<CustomString> data = new();
            data = new EasyITCenterContext().EasyITCenterCollectionFromSql<CustomString>("EXEC GetTables;");

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }
    }
}

```  
