//using LicenseGenerator;
using Microsoft.EntityFrameworkCore;
using System.IO.Compression;

namespace EasyITCenter.Controllers {


    public partial class LicenseCheckRequest
    {
        public string UnlockCode { get; set; } = string.Empty;
        public string PartNumber { get; set; } = string.Empty;
    }



    [ApiController]
    [Route("LicenseService")]
    public class LicenseService : ControllerBase {



        [AllowAnonymous]
        [HttpGet("/LicenseService/OnlineActivation/{UnlockCode}/{PartNumber}")]
        public async Task<string> GetLicenseActivator(string unlockCode, string partNumber) {
            string data = string.Empty; List<SqlParameter> parameters = new(); bool allowed = false; bool catched = false;
            try {
                if (HttpContext.Connection.RemoteIpAddress != null) {
                    string clientIPAddr = Dns.GetHostEntry(HttpContext.Connection.RemoteIpAddress).AddressList.First(x => x.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork).ToString();
                    if (!string.IsNullOrWhiteSpace(clientIPAddr)) {
                        parameters = new List<SqlParameter> {
                        new SqlParameter { ParameterName = "@unlockCode", Value = unlockCode },
                        new SqlParameter { ParameterName = "@partNumber", Value = partNumber },
                        new SqlParameter { ParameterName = "@ipAddress", Value = clientIPAddr },
                        new SqlParameter { ParameterName = "@allowed" , Value = allowed, Direction = System.Data.ParameterDirection.Output} };

                        data = new EasyITCenterContext().Database.ExecuteSqlRaw("exec SpServiceCheckUnlockKey @unlockCode, @partNumber , @ipAddress, @allowed output", parameters.ToArray()).ToString();
                        allowed = bool.Parse(parameters[3].Value.ToString());
                    }
                }
            } catch { catched = true; }
            try {
                if (catched) {
                    parameters = new List<SqlParameter> {
                    new SqlParameter { ParameterName = "@unlockCode", Value = unlockCode },
                    new SqlParameter { ParameterName = "@partNumber", Value = partNumber },
                    new SqlParameter { ParameterName = "@ipAddress", Value = "Unknown" },
                    new SqlParameter { ParameterName = "@allowed" , Value = allowed, Direction = System.Data.ParameterDirection.Output} };

                    data = new EasyITCenterContext().Database.ExecuteSqlRaw("exec SpServiceCheckUnlockKey @unlockCode, @partNumber , @ipAddress, @allowed output", parameters.ToArray()).ToString();
                    allowed = bool.Parse(parameters[3].Value.ToString());
                }
            } catch (Exception Ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(Ex) }); }
            return JsonSerializer.Serialize(allowed);
        }



        [AllowAnonymous]
        [HttpPost("/LicenseService/OnlineActivation")]
        [Consumes("application/json")]
        public async Task<string> PostLicenseActivator([FromBody] LicenseCheckRequest record) {
            string data = string.Empty; List<SqlParameter> parameters = new(); bool allowed = false; bool catched = false;
            try {
                if (HttpContext.Connection.RemoteIpAddress != null) {
                    string clientIPAddr = Dns.GetHostEntry(HttpContext.Connection.RemoteIpAddress).AddressList.First(x => x.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork).ToString();
                    if (!string.IsNullOrWhiteSpace(clientIPAddr)) {
                        parameters = new List<SqlParameter> {
                        new SqlParameter { ParameterName = "@unlockCode", Value = record.UnlockCode },
                        new SqlParameter { ParameterName = "@partNumber", Value = record.PartNumber },
                        new SqlParameter { ParameterName = "@ipAddress", Value = clientIPAddr },
                        new SqlParameter { ParameterName = "@allowed" , Value = allowed, Direction = System.Data.ParameterDirection.Output} };

                        data = new EasyITCenterContext().Database.ExecuteSqlRaw("exec SpServiceCheckUnlockKey @unlockCode, @partNumber , @ipAddress, @allowed output", parameters.ToArray()).ToString();
                        allowed = bool.Parse(parameters[3].Value.ToString());
                    }
                }
            } catch { catched = true; }
            try {
                if (catched) {
                    parameters = new List<SqlParameter> {
                        new SqlParameter { ParameterName = "@unlockCode", Value = record.UnlockCode },
                        new SqlParameter { ParameterName = "@partNumber", Value = record.PartNumber },
                        new SqlParameter { ParameterName = "@ipAddress", Value = "Unknown" },
                        new SqlParameter { ParameterName = "@allowed" , Value = allowed, Direction = System.Data.ParameterDirection.Output} };

                    data = new EasyITCenterContext().Database.ExecuteSqlRaw("exec SpServiceCheckUnlockKey @unlockCode, @partNumber , @ipAddress, @allowed output", parameters.ToArray()).ToString();
                    allowed = bool.Parse(parameters[3].Value.ToString());
                }
            } catch { }
            return JsonSerializer.Serialize(allowed);
        }



        /*
        [Authorize]
        [HttpGet("/LicenseService/OfflineActivation/Trial/{product}")]
        public async Task<IActionResult> TrialLicenseGenerator(string product) {
            try {
                string authId = User.FindFirst(ClaimTypes.PrimarySid.ToString()).Value;
                SolutionUserList user = new EasyITCenterContext().SolutionUserLists.Where(a => a.Id == int.Parse(authId)).First();
                //ItemList item = new EASYDATACenterContext().ItemLists.Where(a => a.PartNumber == product).First();
                //if (item != null) {
                LicenseData licenseData = new LicenseData() {
                    Product = product,//item.PartNumber,
                    LicenseOwner = user.UserName,
                    ExpireDate = DateTime.Now.Date.AddDays(30)
                };
                var data = LicenseControlller.GenerateLicense(licenseData).ToArray();

                if (data != null) { return File(data, "application/xml", "license.lic"); }
                else { return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") }); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }
        */



        //[HttpGet("/LicenseService/OfflineActivation/FullVersion/{product}")]
        //public async Task<IActionResult> FullVersionLicenseGenerator(string product) {
        //    try {
        //        string authId = User.FindFirst(ClaimTypes.PrimarySid.ToString()).Value;
        //        SolutionUserList user = new EasyITCenterContext().SolutionUserLists.Where(a => a.Id == int.Parse(authId)).First();
        //        BasicItemList item = new EasyITCenterContext().BasicItemLists.Where(a => a.PartNumber == product).First();
        //        if (item != null) {
        //            LicenseData licenseData = new LicenseData() {
        //                Product = item.PartNumber,
        //                LicenseOwner = user.UserName,
        //                ExpireDate = null
        //            };
        //            var data = LicenseControlller.GenerateLicense(licenseData).ToArray();

        //            FileOperations.CreatePath(System.IO.Path.Combine(ServerRuntimeData.UserPath, User.Claims.First(a => a.Issuer != null).Value, "License"));
        //            FileOperations.ClearFolder(System.IO.Path.Combine(ServerRuntimeData.UserPath, User.Claims.First(a => a.Issuer != null).Value));
        //            FileOperations.ByteArrayToFile(System.IO.Path.Combine(ServerRuntimeData.UserPath, User.Claims.First(a => a.Issuer != null).Value, "License", "license.lic"), data);
        //            ZipFile.CreateFromDirectory(System.IO.Path.Combine(ServerRuntimeData.UserPath, User.Claims.First(a => a.Issuer != null).Value, "License"), System.IO.Path.Combine(ServerRuntimeData.UserPath, User.Claims.First(a => a.Issuer != null).Value, "License.zip"));
        //            data = await System.IO.File.ReadAllBytesAsync(System.IO.Path.Combine(ServerRuntimeData.UserPath, User.Claims.First(a => a.Issuer != null).Value, "License.zip"));

        //            if (data != null) { return File(data, "application/x-zip-compressed", "License.zip"); }
        //            else { return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") }); }
        //        }
        //    } catch { }
        //    return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        //}

    }
}