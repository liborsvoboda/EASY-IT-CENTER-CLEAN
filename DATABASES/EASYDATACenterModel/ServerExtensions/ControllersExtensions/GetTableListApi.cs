namespace EASYDATACenter.ControllersExtensions {

    [Authorize]
    [ApiController]
    [Route("GetTableList")]
    public class CustomStringListApi : ControllerBase {

        [HttpGet("/GetTableList")]
        public async Task<string> GetTableList() {
            List<CustomString> data = new();
            data = new EASYDATACenterContext().CollectionFromSql<CustomString>("EXEC GetTables;");

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }
    }
}