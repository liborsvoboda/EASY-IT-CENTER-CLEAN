using ServerCorePages;

namespace EasyITCenter.Controllers {

    [ApiController]
    [Route("WebApi/WebPages")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class WebPagesAdminSettingApi : ControllerBase {

        [Authorize]
        [HttpPost("/WebApi/WebPages/WebAdmin/SetWebPagesSettingList")]
        [Consumes("application/json")]
        public IActionResult SetGuestSettingList([FromBody] WebSettingList1 record) {
            try {
                if (EasyITCenterContextExtension.IsAdmin()) {
                    string authId = User.FindFirst(ClaimTypes.PrimarySid.ToString()).Value;
                    List<WebSettingList> webSettingList;
                    webSettingList = new EasyITCenterContext().WebSettingLists.ToList();

                    record.Settings.ForEach(setting => {
                        if (webSettingList.FirstOrDefault(a => a.Key == setting.Key) == null) {
                            var data = new EasyITCenterContext().WebSettingLists.Add(new WebSettingList() { Key = setting.Key, Value = setting.Value, UserId = int.Parse(authId), TimeStamp = DateTimeOffset.Now.DateTime });
                            int result = data.Context.SaveChanges();
                        }
                        else {
                            webSettingList.FirstOrDefault(a => a.Key == setting.Key).Value = setting.Value;
                            webSettingList.FirstOrDefault(a => a.Key == setting.Key).TimeStamp = DateTimeOffset.Now.DateTime;
                            var data = new EasyITCenterContext().WebSettingLists.Update(webSettingList.First(a => a.Key == setting.Key));
                            int result = data.Context.SaveChanges();
                        }
                    });

                    return Ok(JsonSerializer.Serialize(
                    new ResultMessage() {
                        Status = DBResult.success.ToString(),
                        ErrorMessage = string.Empty
                    }));
                }
                else {
                    return BadRequest(new ResultMessage() {
                        Status = DBResult.error.ToString(),
                        ErrorMessage = DbOperations.DBTranslate("YouDoesNotHaveRights")
                    });
                }
            } catch (Exception ex) {
                return BadRequest(new ResultMessage() {
                    Status = DBResult.error.ToString(),
                    ErrorMessage = DataOperations.GetUserApiErrMessage(ex)
                });
            }
        }
    }
}