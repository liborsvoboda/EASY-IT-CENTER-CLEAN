using DocumentFormat.OpenXml.Bibliography;
using DocumentFormat.OpenXml.Office2010.Ink;



namespace EasyITCenter.Controllers {


    [ApiController]
    [Route("TranslateService")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class TranslateService : ControllerBase {

        [HttpGet("/TranslateService/{destLang}/{origText}")]
        public async Task<string> Translate(string destLang, string origText) {
            try {

                string? textTranslatorUrlKey = "";
                string translated = string.Empty;
                bool success = false;
                try {
                    success = GoogleTranslateService.Translate(origText, destLang, "en", textTranslatorUrlKey, out translated);
                } catch (Exception) {
                    success = false;
                }

                if (success) {
                    return JsonSerializer.Serialize(translated, new JsonSerializerOptions() {
                        ReferenceHandler = ReferenceHandler.IgnoreCycles,
                        WriteIndented = true,
                        DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    });
                } else {
                    return JsonSerializer.Serialize(String.Empty, new JsonSerializerOptions() {
                        ReferenceHandler = ReferenceHandler.IgnoreCycles,
                        WriteIndented = true,
                        DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

    }
}