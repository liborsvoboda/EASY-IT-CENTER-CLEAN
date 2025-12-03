namespace EasyITCenter.Controllers {

    /// <summary>
    /// Class Definition for Server Emailer In List of this claas you can use Mass Emailer
    /// </summary>
    public class SendMailRequest {
        public string? Sender { get; set; } = null;
        public List<string>? Recipients { get; set; } = null;
        public string? Subject { get; set; } = null;
        public string? Content { get; set; } = null;
    }


    /// <summary>
    /// Server Email sender Api for logged Communication
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [Authorize]
    [ApiController]
    [Route("EmailService")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class EmailService : ControllerBase {


        [HttpGet("/EmailService/GetMessenger/{message}")]
        public async Task<string> GetMessenger(string message) {
            try {
                string result = null;
                if (!string.IsNullOrWhiteSpace(message)) result = CoreOperations.SendEmail(new SendMailRequest() { Content = message }, true);

                return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(result) });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }


        [HttpPost("/EmailService/PostMessenger")]
        [Consumes("application/json")]
        public async Task<string> PostMessenger([FromBody] SendMailRequest message) {
            try {
                string? result = null;
                if (!string.IsNullOrWhiteSpace(message.Content)) result = CoreOperations.SendEmail(message, true);

                return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate(result) });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }


        [HttpPost("/EmailService/PostMassMesseger")]
        [Consumes("application/json")]
        public async Task<string> PostMassMesseger([FromBody] List<SendMailRequest> messages) {
            try {
                if (bool.Parse(DbOperations.GetServerParameterLists("ServiceEnableMassEmail").Value)) {
                    CoreOperations.SendMassEmail(messages);
                    return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate("emailsSent") });
                }
                else { return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 0, ErrorMessage = DbOperations.DBTranslate("massEmailNotEnabled") }); }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }
    }
}