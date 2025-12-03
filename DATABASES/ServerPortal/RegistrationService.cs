using ServerCorePages;

namespace EasyITCenter.Controllers {



    public class EmailVerification {
        public string EmailAddress { get; set; } = null;
        public string Username { get; set; } = null;
    }


    public class WebRegistration {
        public string FirstName { get; set; } = null;
        public string Surname { get; set; } = null;
        public string Username { get; set; } = null;
        public string EmailAddress { get; set; } = null;
        public string Password { get; set; } = null;
    }


    public class UserProfile {
        public string FirstName { get; set; } = null;
        public string Surname { get; set; } = null;
        public string Username { get; set; } = null;
        public string EmailAddress { get; set; } = null;
        public string? Password { get; set; }
    }


    [ApiController]
    [Route("/RegistrationService")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class RegistrationService : ControllerBase {


        [HttpPost("/RegistrationService/SendVerifyCode")]
        [Consumes("application/json")]
        public async Task<IActionResult> SendVerifyCode([FromBody] EmailVerification record) {
            try {
                if (!string.IsNullOrWhiteSpace(record.EmailAddress) && DataOperations.IsValidEmail(record.EmailAddress)) {
                    string verifyCode = DataOperations.RandomString(10);

                    //check email exist
                    int count;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        count = new EasyITCenterContext().SolutionUserLists.Where(a => a.UserName == record.EmailAddress && a.Active).Count();
                    }
                    if (count > 0) { return BadRequest(JsonSerializer.Serialize(new ResultMessage() { Status = DBWebApiResponses.emailExist.ToString(), ErrorMessage = DbOperations.DBTranslate(DBWebApiResponses.emailExist.ToString()) })); }

                    //Send Verify Email
                    SolutionEmailTemplateList template = new EasyITCenterContext().SolutionEmailTemplateLists.Where(a => a.TemplateName.ToLower() == "Verification".ToLower() && a.SystemLanguage.SystemName.ToLower() == DbOperations.GetServerParameterLists("ServiceServerLanguage").Value.ToLower()).FirstOrDefault();
                    SendMailRequest mailRequest = new SendMailRequest();
                    if (template != null) {
                        mailRequest = new SendMailRequest() {
                            Subject = template.Subject.Replace("[verifyCode]", verifyCode), Recipients = new List<string>() { record.EmailAddress }, Content = template.Email.Replace("[verifyCode]", verifyCode)
                        };
                    }
                    else {
                        mailRequest = new() {
                            Subject = "KlikneteZde.Cz Verification Email", Recipients = new() { record.EmailAddress }, Content = "Your Registration Verify Code is: " + verifyCode + Environment.NewLine
                        };
                    }
                    string result = CoreOperations.SendEmail(mailRequest, true);
                    if (result == DBResult.success.ToString()) { return Ok(JsonSerializer.Serialize(new { verifyCode = verifyCode })); } else { return BadRequest(JsonSerializer.Serialize(result)); }
                }
                else { return BadRequest(new { message = DbOperations.DBTranslate("EmailAddressIsNotValid", DbOperations.GetServerParameterLists("ServiceServerLanguage").Value) }); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("EmailCannotBeSend", DbOperations.GetServerParameterLists("ServiceServerLanguage").Value) });
        }


        [AllowAnonymous]
        [HttpPost("/RegistrationService/Registration")]
        [Consumes("application/json")]
        public async Task<string> Registration([FromBody] WebRegistration webRegistration) {
            EasyITCenterContext data = new EasyITCenterContext();
            try { //check email exist
                int count;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    count = new EasyITCenterContext().SolutionUserLists.Where(a => a.UserName == webRegistration.Username && a.Active).Count();
                }
                if (count > 0) {
                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBWebApiResponses.userNameExist.ToString(), ErrorMessage = DbOperations.DBTranslate(DBWebApiResponses.userNameExist.ToString()) });
                }
                
                int result; //checkDeactivated
                SolutionUserList origUser = new();
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    origUser = new EasyITCenterContext().SolutionUserLists.Where(a => a.UserName == webRegistration.EmailAddress).FirstOrDefault();
                }
                if (origUser != null) {
                    origUser.Name = webRegistration.FirstName; origUser.SurName = webRegistration.Surname; origUser.UserName = webRegistration.Username; origUser.Password = webRegistration.Password;
                    origUser.Email = webRegistration.EmailAddress; origUser.Active = true;

                    DatabaseContextExtensions.RunTransaction(data, (trans) => {
                        data.SolutionUserLists.Update(origUser);
                        data.SaveChanges();
                        return true;
                    });

                }
                else {
                    origUser = new() { RoleId = 4, UserName = webRegistration.Username, Password = webRegistration.Password, Name = webRegistration.FirstName, 
                        SurName = webRegistration.Surname, Email = webRegistration.EmailAddress, EmailConfirmed = true };
                    
                    DatabaseContextExtensions.RunTransaction(data, (trans) => {
                        data.SolutionUserLists.Add(origUser);
                        data.SaveChanges();
                        return true;
                    });

             
                }

                //Send Reg Email
                SolutionEmailTemplateList template = new EasyITCenterContext().SolutionEmailTemplateLists.Where(a => a.TemplateName.ToLower() == "Registration".ToLower() && a.SystemLanguage.SystemName.ToLower() == DbOperations.GetServerParameterLists("ServiceServerLanguage").Value.ToLower()).FirstOrDefault();
                SendMailRequest mailRequest = new SendMailRequest();
                if (template != null) {
                    mailRequest = new SendMailRequest() {
                        Subject = template.Subject.Replace("[email]", webRegistration.EmailAddress).Replace("[password]", webRegistration.Password).Replace("[username]", webRegistration.Username).Replace("[firstname]", webRegistration.FirstName).Replace("[surname]", webRegistration.Surname),
                        Recipients = new List<string>() { webRegistration.EmailAddress },
                        Content = template.Email.Replace("[email]", webRegistration.EmailAddress).Replace("[password]", webRegistration.Password).Replace("[username]", webRegistration.Username).Replace("[firstname]", webRegistration.FirstName).Replace("[surname]", webRegistration.Surname),
                    };
                } else {
                    mailRequest = new SendMailRequest() {
                        Subject = "KlikneteZde.Cz Registration Email", Recipients = new List<string>() { webRegistration.EmailAddress },
                        Content = "Registration for " + webRegistration.EmailAddress + Environment.NewLine + " with password " + webRegistration.Password
                    };
                }
                CoreOperations.SendEmail(mailRequest, true);
                 return JsonSerializer.Serialize(new ResultMessage() { InsertedId = origUser.Id, Status = DBWebApiResponses.success.ToString(), RecordCount = 1, ErrorMessage = DbOperations.DBTranslate(DBWebApiResponses.loginInfoSentToEmail.ToString()) });
            } 
            catch(Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
            
        }


        [AllowAnonymous]
        [HttpPost("/RegistrationService/ResetPassword")]
        [Consumes("application/json")]
        public async Task<IActionResult> ResetPassword([FromBody] EmailVerification record) {
            try {
                if (!string.IsNullOrWhiteSpace(record.EmailAddress) && DataOperations.IsValidEmail(record.EmailAddress)) {
                    

                    //check email exist
                    SolutionUserList data;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        data = new EasyITCenterContext().SolutionUserLists.Where(a => a.UserName == record.Username && a.Active).FirstOrDefault();
                    }
                    if (data == null) { return BadRequest(JsonSerializer.Serialize(new ResultMessage() { Status = DBWebApiResponses.emailNotExist.ToString(), ErrorMessage = DbOperations.DBTranslate(DBWebApiResponses.emailNotExist.ToString()) })); }

                    //Set new Password
                    string newPassword = DataOperations.RandomString(10); data.Password = newPassword;
                    var dbdata = new EasyITCenterContext().SolutionUserLists.Update(data);
                    await dbdata.Context.SaveChangesAsync();

                    //Send ResetPassword Email
                    SolutionEmailTemplateList template = new EasyITCenterContext().SolutionEmailTemplateLists.Where(a => a.TemplateName.ToLower() == "ResetPassword".ToLower() && a.SystemLanguage.SystemName.ToLower() == DbOperations.GetServerParameterLists("ServiceServerLanguage").Value.ToLower()).FirstOrDefault();
                    SendMailRequest mailRequest = new SendMailRequest();
                    if (template != null) {
                        mailRequest = new SendMailRequest() {
                            Subject = template.Subject
                            .Replace("[password]", newPassword).Replace("[email]", record.EmailAddress),
                            Recipients = new List<string>() { record.EmailAddress },
                            Content = template.Email
                            .Replace("[password]", newPassword).Replace("[email]", record.EmailAddress)
                        };
                    }
                    else {
                        mailRequest = new() {
                            Subject = "KlikneteZde.Cz Reset Password Email",
                            Recipients = new() { record.EmailAddress },
                            Content = "Your new password for login is: " + newPassword + Environment.NewLine
                        };
                    }
                    string result = CoreOperations.SendEmail(mailRequest, true);

                    if (result == DBResult.success.ToString()) { return Ok(JsonSerializer.Serialize(new { message = DBResult.success.ToString() })); } else { return BadRequest(JsonSerializer.Serialize(result)); }
                }
                else { return BadRequest(new { message = DbOperations.DBTranslate("EmailAddressIsNotValid") }); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("EmailCannotBeSend") });
        }


        [Authorize]
        [HttpPost("/RegistrationService/UpdateRegistration")]
        [Consumes("application/json")]
        public async Task<string> UpdateRegistration([FromBody] UserProfile record) {
            try {
                if (EasyITCenterContextExtension.GetUserName().ToLower() == record.Username.ToLower()) {
                    SolutionUserList user = new EasyITCenterContext().SolutionUserLists.Where(a => a.Id == EasyITCenterContextExtension.GetUserId()).First();
                    if (record.Password != null && record.Password.Length > 0) { user.Password = record.Password; }
                    user.Name = record.FirstName; user.SurName = record.Surname; user.Email = record.EmailAddress; user.TimeStamp = DateTimeOffset.Now.DateTime;

                    var data = new EasyITCenterContext().SolutionUserLists.Update(user);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = user.Id, Status = DBWebApiResponses.loginInfoSentToEmail.ToString(), RecordCount = result, ErrorMessage = DBWebApiResponses.loginInfoSentToEmail.ToString() });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) }); }
        }

    }
}