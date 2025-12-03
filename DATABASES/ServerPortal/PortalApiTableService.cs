using DocumentFormat.OpenXml.Office2010.Excel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace EasyITCenter.Controllers
{


    public partial class MenuData {
        public string ParentGuid { get; set; } = null;
        public string RecGuid { get; set; } = null;
        public int Sequence { get; set; }
        public string Name { get; set; } = null;
        public string Icon { get; set; } = null;
        public string InheritedMenuType { get; set; } = null;
        public string Description { get; set; } = null;
        public bool Active { get; set; } = true;
        public string HtmlContent { get; set; } = null;
        public string JsContent { get; set; } = null;
        public string CssContent { get; set; } = null;
        public string MdHelp { get; set; } = null;
    }

    public partial class UserSetting {
        public string RecGuid { get; set; } = null;
        public bool EnableAutoTranslate { get; set; }
        public bool EnableShowDescription { get; set; }
        public bool RememberLastJson { get; set; }
        public bool RememberLastHandleBar { get; set; }
        public bool EnableScreenSaver { get; set; }
    }

    public partial class QuestionRequest {
        public string RecGuid { get; set; } = null;
        public string MenuName { get; set; }
        public string Question { get; set; }
        public string Response { get; set; } = null;
    }


    public partial class ResponseRequest {
        public int Id { get; set; }
        public string Response { get; set; }
    }

    [Route("PortalApiTableService")]
    [ApiController]
    public class PortalApiTableService : ControllerBase
    {

        [AllowAnonymous]
        [HttpGet("/PortalApiTableService/GetApiTableDataList/{tablename}")]
        public async Task<string> GetApiTableDataList(string tablename) {
            List<PortalApiTableColumnDataList> data = new();
            try {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    data = new EasyITCenterContext().PortalApiTableColumnDataLists
                        .Where(a => a.ApiTableName.ToLower() == tablename.ToLower() && a.Active == true)
                        .OrderBy(a => a.RecGuid).ThenBy(a => a.Id).ToList();
                }
            } 
            catch (Exception ex) {  }
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true, DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
        }


        [AllowAnonymous]
        [HttpPost("/PortalApiTableService/SetApiTableColumnDataList")]
        public async Task<string> SetApiTableColumnDataList([FromBody] MenuData menuData) {
            EasyITCenterContext data = new EasyITCenterContext();
            try {
                
                if (EasyITCenterContextExtension.IsAdmin() || EasyITCenterContextExtension.IsWebAdmin()) {
                    if (menuData.RecGuid == null) {
                        menuData.RecGuid = Guid.NewGuid().ToString().ToUpper();
                        List<PortalApiTableColumnDataList> record = new();
                        record.Add(new() { ApiTableName = "PortalMenu", ApiTableColumnName = "ParentGuid", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.ParentGuid, Description = menuData.Description, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "PortalMenu", ApiTableColumnName = "Sequence", InheritedDataType = "int", RecGuid = menuData.RecGuid, Value = menuData.Sequence.ToString(), Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "PortalMenu", ApiTableColumnName = "Name", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.Name, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "PortalMenu", ApiTableColumnName = "Icon", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.Icon, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "PortalMenu", ApiTableColumnName = "InheritedMenuType", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.InheritedMenuType, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "PortalMenu", ApiTableColumnName = "HtmlContent", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.HtmlContent, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "PortalMenu", ApiTableColumnName = "JsContent", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.JsContent, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "PortalMenu", ApiTableColumnName = "CSSContent", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.CssContent, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "PortalMenu", ApiTableColumnName = "MdHelp", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.MdHelp, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        
                        DatabaseContextExtensions.RunTransaction(data, (trans) => {
                            data.PortalApiTableColumnDataLists.AddRange(record);
                            data.SaveChanges();
                            return true;
                        });
                    } else {
                        List<PortalApiTableColumnDataList> original = new();
                        original = new EasyITCenterContext().PortalApiTableColumnDataLists.Where(a => a.ApiTableName == "PortalMenu" && a.RecGuid == menuData.RecGuid).ToList();
                        
                        List<PortalApiTableColumnDataList> record = new();
                        record.Add(new() { Id = (int)original.Where(a => a.ApiTableColumnName == "ParentGuid").Select(a=>a.Id).FirstOrDefault(), ApiTableName = "PortalMenu", ApiTableColumnName = "ParentGuid", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.ParentGuid, Description = menuData.Description, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { Id = (int)original.Where(a => a.ApiTableColumnName == "Sequence").Select(a => a.Id).FirstOrDefault(), ApiTableName = "PortalMenu", ApiTableColumnName = "Sequence", InheritedDataType = "int", RecGuid = menuData.RecGuid, Value = menuData.Sequence.ToString(), Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { Id = (int)original.Where(a => a.ApiTableColumnName == "Name").Select(a => a.Id).FirstOrDefault(), ApiTableName = "PortalMenu", ApiTableColumnName = "Name", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.Name, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { Id = (int)original.Where(a => a.ApiTableColumnName == "Icon").Select(a => a.Id).FirstOrDefault(), ApiTableName = "PortalMenu", ApiTableColumnName = "Icon", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.Icon, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { Id = (int)original.Where(a => a.ApiTableColumnName == "InheritedMenuType").Select(a => a.Id).FirstOrDefault(), ApiTableName = "PortalMenu", ApiTableColumnName = "InheritedMenuType", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.InheritedMenuType, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { Id = (int)original.Where(a => a.ApiTableColumnName == "HtmlContent").Select(a => a.Id).FirstOrDefault(), ApiTableName = "PortalMenu", ApiTableColumnName = "HtmlContent", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.HtmlContent, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { Id = (int)original.Where(a => a.ApiTableColumnName == "JsContent").Select(a => a.Id).FirstOrDefault(), ApiTableName = "PortalMenu", ApiTableColumnName = "JsContent", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.JsContent, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { Id = (int)original.Where(a => a.ApiTableColumnName == "CSSContent").Select(a => a.Id).FirstOrDefault(), ApiTableName = "PortalMenu", ApiTableColumnName = "CSSContent", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.CssContent, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { Id = (int)original.Where(a => a.ApiTableColumnName == "MdHelp").Select(a => a.Id).FirstOrDefault(), ApiTableName = "PortalMenu", ApiTableColumnName = "MdHelp", InheritedDataType = "string", RecGuid = menuData.RecGuid, Value = menuData.MdHelp, Description = null, Active = menuData.Active, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        
                        DatabaseContextExtensions.RunTransaction(data, (trans) => {
                            data.PortalApiTableColumnDataLists.UpdateRange(record);
                            data.SaveChanges();
                            return true;
                        });
                    }

                    return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 8, ErrorMessage = menuData.RecGuid });
                } else {
                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        [AllowAnonymous]
        [HttpDelete("/PortalApiTableService/DeleteApiTableColumnDataList/{recGuid}")]
        public async Task<string> DeleteApiTableColumnDataList(string recGuid) {
            EasyITCenterContext data = new EasyITCenterContext();
            try {

                if (EasyITCenterContextExtension.IsAdmin() || EasyITCenterContextExtension.IsWebAdmin()) {

                    List<PortalApiTableColumnDataList> original = new();
                    original = new EasyITCenterContext().PortalApiTableColumnDataLists.Where(a => a.RecGuid == recGuid).ToList();

                    DatabaseContextExtensions.RunTransaction(data, (trans) => {
                        data.PortalApiTableColumnDataLists.RemoveRange(original);
                        data.SaveChanges();
                        return true;
                    });

                    return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = original.Count(), ErrorMessage = string.Empty });
                } else {
                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        [AllowAnonymous]
        [HttpDelete("/PortalApiTableService/DeleteApiTableList/{id}")]
        public async Task<string> DeleteApiTableList(int id) {
            EasyITCenterContext data = new EasyITCenterContext(); List<PortalApiTableColumnDataList> apidata = new();
            try {

                if (EasyITCenterContextExtension.IsAdmin() || EasyITCenterContextExtension.IsWebAdmin()) {
                    PortalApiTableList original = new EasyITCenterContext().PortalApiTableLists.Where(a => a.Id == id).FirstOrDefault();
                    apidata = new EasyITCenterContext().PortalApiTableColumnDataLists.Where(a => a.ApiTableName == original.Name).ToList();

                    if (apidata.Any()) {
                        DatabaseContextExtensions.RunTransaction(data, (trans) => {
                            data.PortalApiTableColumnDataLists.RemoveRange(apidata);
                            data.SaveChanges();
                            return true;
                        });
                    }
                    
                    DatabaseContextExtensions.RunTransaction(data, (trans) => {
                        data.PortalApiTableLists.Remove(original);
                        data.SaveChanges();
                        return true;
                    });
            

                    return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = apidata.Count(), ErrorMessage = string.Empty });
                } else {
                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.DeniedYouAreNotAdmin.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        [AllowAnonymous]
        [HttpPost("/PortalApiTableService/SetUserSettingList")]
        public async Task<string> SetUserSettingList([FromBody] UserSetting userSetting) {
            EasyITCenterContext data = new EasyITCenterContext(); List<PortalApiTableColumnDataList> original = new();
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        original = new EasyITCenterContext().PortalApiTableColumnDataLists
                            .Where(a => a.ApiTableName == "UserSetting" && a.UserId == EasyITCenterContextExtension.GetUserId())
                            .OrderBy(a => a.RecGuid).ThenBy(a => a.Id).ToList();
                    }

                    if (original.Count == 5) {//UPDATE only
                        original.ForEach(orig => {
                            switch (orig.ApiTableColumnName) {
                                case "EnableAutoTranslate":
                                    orig.Value = userSetting.EnableAutoTranslate.ToString();
                                    break;
                                case "EnableShowDescription":
                                    orig.Value = userSetting.EnableShowDescription.ToString();
                                    break;
                                case "RememberLastJson":
                                    orig.Value = userSetting.RememberLastJson.ToString();
                                    break;
                                case "RememberLastHandleBar":
                                    orig.Value = userSetting.RememberLastHandleBar.ToString();
                                    break;
                                case "EnableScreenSaver":
                                    orig.Value = userSetting.EnableScreenSaver.ToString();
                                    break;
                            }

                        });

                        DatabaseContextExtensions.RunTransaction(data, (trans) => {
                            data.PortalApiTableColumnDataLists.UpdateRange(original);
                            data.SaveChanges();
                            return true;
                        });

                    } else if (original.Any()) {//MODIFY -added NEW
                        original = new EasyITCenterContext().PortalApiTableColumnDataLists.Where(a => a.ApiTableName == "UserSetting" && a.UserId == (int)EasyITCenterContextExtension.GetUserId()).ToList();
                        DatabaseContextExtensions.RunTransaction(data, (trans) => {
                            data.PortalApiTableColumnDataLists.RemoveRange(original);
                            data.SaveChanges();
                            return true;
                        });

                        string recGuid = Guid.NewGuid().ToString().ToUpper();
                        List<PortalApiTableColumnDataList> record = new();
                        record.Add(new PortalApiTableColumnDataList() { ApiTableName = "UserSetting", ApiTableColumnName = "EnableAutoTranslate", InheritedDataType = "bit", RecGuid = recGuid, Value = userSetting.EnableAutoTranslate.ToString(), Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "UserSetting", ApiTableColumnName = "EnableShowDescription", InheritedDataType = "bit", RecGuid = recGuid, Value = userSetting.EnableShowDescription.ToString(), Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "UserSetting", ApiTableColumnName = "RememberLastJson", InheritedDataType = "bit", RecGuid = recGuid, Value = userSetting.RememberLastJson.ToString(), Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "UserSetting", ApiTableColumnName = "RememberLastHandleBar", InheritedDataType = "bit", RecGuid = recGuid, Value = userSetting.RememberLastHandleBar.ToString(), Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "UserSetting", ApiTableColumnName = "EnableScreenSaver", InheritedDataType = "bit", RecGuid = recGuid, Value = userSetting.EnableScreenSaver.ToString(), Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });

                        DatabaseContextExtensions.RunTransaction(data, (trans) => {
                            data.PortalApiTableColumnDataLists.AddRange(record);
                            data.SaveChanges();
                            return true;
                        });
                    } else {//NEW
                        string recGuid = Guid.NewGuid().ToString().ToUpper();
                        List<PortalApiTableColumnDataList> record = new();
                        record.Add(new PortalApiTableColumnDataList() { ApiTableName = "UserSetting", ApiTableColumnName = "EnableAutoTranslate", InheritedDataType = "bit", RecGuid = recGuid, Value = userSetting.EnableAutoTranslate.ToString(), Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "UserSetting", ApiTableColumnName = "EnableShowDescription", InheritedDataType = "bit", RecGuid = recGuid, Value = userSetting.EnableShowDescription.ToString(), Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "UserSetting", ApiTableColumnName = "RememberLastJson", InheritedDataType = "bit", RecGuid = recGuid, Value = userSetting.RememberLastJson.ToString(), Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "UserSetting", ApiTableColumnName = "RememberLastHandleBar", InheritedDataType = "bit", RecGuid = recGuid, Value = userSetting.RememberLastHandleBar.ToString(), Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                        record.Add(new() { ApiTableName = "UserSetting", ApiTableColumnName = "EnableScreenSaver", InheritedDataType = "bit", RecGuid = recGuid, Value = userSetting.EnableScreenSaver.ToString(), Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });

                        DatabaseContextExtensions.RunTransaction(data, (trans) => {
                            data.PortalApiTableColumnDataLists.AddRange(record);
                            data.SaveChanges();
                            return true;
                        });
                    }


                    return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 5, ErrorMessage = string.Empty });
                } else {
                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        [AllowAnonymous]
        [HttpGet("/PortalApiTableService/GetUserSettingList")]
        public async Task<string> GetUserSettingList() {
            List<PortalApiTableColumnDataList> data = new();
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        data = new EasyITCenterContext().PortalApiTableColumnDataLists
                            .Where(a => a.ApiTableName == "UserSetting" && a.UserId == EasyITCenterContextExtension.GetUserId())
                            .OrderBy(a => a.RecGuid).ThenBy(a => a.Id).ToList();
                    }
                } else {
                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true, DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
        }


        [AllowAnonymous]
        [HttpPost("/PortalApiTableService/SetQuestionList")]
        public async Task<string> SetQuestionList([FromBody] QuestionRequest questionRequest) {
            EasyITCenterContext data = new EasyITCenterContext();
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    string recGuid = Guid.NewGuid().ToString().ToUpper();
                    List<PortalApiTableColumnDataList> record = new();
                    record.Add(new PortalApiTableColumnDataList() { ApiTableName = "QuestionList", ApiTableColumnName = "MenuName", InheritedDataType = "string", RecGuid = recGuid, Value = questionRequest.MenuName, Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                    record.Add(new() { ApiTableName = "QuestionList", ApiTableColumnName = "Question", InheritedDataType = "string", RecGuid = recGuid, Value = questionRequest.Question, Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });
                    record.Add(new() { ApiTableName = "QuestionList", ApiTableColumnName = "Response", InheritedDataType = "string", RecGuid = recGuid, Value = null, Description = null, Active = true, UserId = (int)EasyITCenterContextExtension.GetUserId(), TimeStamp = DateTimeOffset.Now.DateTime });

                    DatabaseContextExtensions.RunTransaction(data, (trans) => {
                        data.PortalApiTableColumnDataLists.AddRange(record);
                        data.SaveChanges();
                        return true;
                    });

                    return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 3, ErrorMessage = recGuid });
                } else {
                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        [AllowAnonymous]
        [HttpPost("/PortalApiTableService/SetQuestionResponseList")]
        public async Task<string> SetQuestionResponseList([FromBody] ResponseRequest responseRequest) {
            PortalApiTableColumnDataList data = new();
            EasyITCenterContext dbContext = new EasyITCenterContext();
            try {
                if (EasyITCenterContextExtension.IsAdmin() || EasyITCenterContextExtension.IsWebAdmin()) {
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        data = new EasyITCenterContext().PortalApiTableColumnDataLists
                            .Where(a => a.ApiTableName == "QuestionList" && a.Id == responseRequest.Id).FirstOrDefault();
                    }

                    if (data != null) {
                        data.Value = responseRequest.Response;
                        DatabaseContextExtensions.RunTransaction(dbContext, (trans) => {
                            dbContext.PortalApiTableColumnDataLists.Update(data);
                            dbContext.SaveChanges();
                            return true;
                        });

                        return JsonSerializer.Serialize(new ResultMessage() { InsertedId = 0, Status = DBResult.success.ToString(), RecordCount = 1, ErrorMessage = data.RecGuid });
                    } else {
                        return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                    }
                } else {
                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
        

        [AllowAnonymous]
        [HttpGet("/PortalApiTableService/GetQuestionForResponseList")]
        public async Task<string> GetQuestionForResponseList() {
            List<PortalApiTableColumnDataList> data = new();
            List<PortalApiTableColumnDataList> result = new();
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        data = new EasyITCenterContext().PortalApiTableColumnDataLists
                            .Where(a => a.ApiTableName == "QuestionList" && a.ApiTableColumnName == "Response" && a.Value == null)
                            .OrderBy(a => a.Id).ToList();
                    }
                    if (data.Any()) {
                        data.ForEach(dataRec => {
                            List<PortalApiTableColumnDataList>? response = new();
                            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                                response = new EasyITCenterContext().PortalApiTableColumnDataLists
                                    .Where(a => a.RecGuid == dataRec.RecGuid)
                                    .OrderBy(a => a.RecGuid).ThenBy(a => a.Id).ToList();
                            }
                            result.AddRange(response);
                        });
                    }
                } else {
                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(result, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true, DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
            }
            return JsonSerializer.Serialize(result, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true, DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
        }


        [AllowAnonymous]
        [HttpGet("/PortalApiTableService/GetMyQuestionList")]
        public async Task<string> GetMyQuestionList() {
            List<PortalApiTableColumnDataList> data = new();
            List<PortalApiTableColumnDataList> result = new();
            try {
                if (EasyITCenterContextExtension.IsLogged()) {
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        data = new EasyITCenterContext().PortalApiTableColumnDataLists
                            .Where(a => a.ApiTableName == "QuestionList" && a.ApiTableColumnName == "MenuName" && a.UserId == (int)EasyITCenterContextExtension.GetUserId())
                            .OrderByDescending(a => a.TimeStamp).ToList();
                    }
                    if (data.Any()) {
                        data.ForEach(dataRec => {
                            List<PortalApiTableColumnDataList>? response = new();
                            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                                response = new EasyITCenterContext().PortalApiTableColumnDataLists
                                    .Where(a => a.RecGuid == dataRec.RecGuid)
                                    .OrderBy(a => a.Id).ToList();
                            }
                            result.AddRange(response);
                        });
                    }
                } else {
                        return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.UnauthorizedRequest.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) {
                return JsonSerializer.Serialize(result, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true, DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
            }
            return JsonSerializer.Serialize(result, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true, DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
        }

    }
}
