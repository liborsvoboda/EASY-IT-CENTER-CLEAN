using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;


namespace EasyITCenter.Controllers {

    [ApiController]
    [Route("AuthenticationService")]
    public class AuthenticationService : ControllerBase {
        private static Encoding ISO_8859_1_ENCODING = Encoding.GetEncoding("ISO-8859-1");

        [AllowAnonymous]
        [HttpPost("/AuthenticationService")]
        public IActionResult Authenticate([FromHeader] string Authorization) {
            (string? username, string? password) = GetUsernameAndPasswordFromAuthorizeHeader(Authorization);
            AuthenticateResponse? user = Authenticate(username, password);
            
            if (!string.IsNullOrWhiteSpace(user?.Message)) { return Ok(JsonSerializer.Serialize(user)); 
            } else if (user == null) { { return BadRequest(new { message = DbOperations.DBTranslate("UsernameOrPasswordIncorrect", DbOperations.GetServerParameterLists("ServiceServerLanguage").Value) }); }; }

            try { if (HttpContext.Connection.RemoteIpAddress != null && user != null) {
                    string clientIPAddr = Dns.GetHostEntry(HttpContext.Connection.RemoteIpAddress).AddressList.First(x => x.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork).ToString();
                    if (!string.IsNullOrWhiteSpace(clientIPAddr)) { DatabaseContextExtensions.WriteVisit(clientIPAddr, user.Id, username); }
                }
            } catch { }

            
            if (!bool.Parse(DbOperations.GetServerParameterLists("ConfigTimeTokenValidationEnabled").Value)) { user.Expiration = null; }

            RefreshUserToken(username, user);
            UserStorageOperations.CreateUserStorage(username);

            return Ok(JsonSerializer.Serialize(user));
        }

        private static (string?, string?) GetUsernameAndPasswordFromAuthorizeHeader(string authorizeHeader) {
            if (authorizeHeader == null || (!authorizeHeader.Contains("Basic ") && !authorizeHeader.Contains("Bearer "))) return (null, null);

            if (authorizeHeader.Contains("Basic ")) {
                string encodedUsernamePassword = authorizeHeader.Substring("Basic ".Length).Trim();
                string usernamePassword = ISO_8859_1_ENCODING.GetString(Convert.FromBase64String(encodedUsernamePassword));

                string username = usernamePassword.Split(':')[0];
                string password = usernamePassword.Split(':')[1];

                return (username, password);
            }

            return (null, null);
        }


        /// <summary>
        /// API Authenticated and Generate Token
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public static AuthenticateResponse? Authenticate(string? username, string? password) {
            SecurityToken? token = null; string? errorMessage = null;
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(DbOperations.GetServerParameterLists("ConfigJwtLocalKey").Value);


            if (username == null) { return null; }
            var user = new EasyITCenterContext().SolutionUserLists.Include(a => a.Role)
                .Where(a => a.Active == true && a.UserName == username && a.Password == password).FirstOrDefault();
            if (user == null) { return null; }
                
            try {
               
                var tokenDescriptor = new SecurityTokenDescriptor {
                    Subject = new ClaimsIdentity(new Claim[] {

                    new Claim(ClaimTypes.PrimarySid, user.Id.ToString()),
                    new Claim(ClaimTypes.NameIdentifier, user.UserName),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.Role, user.Role.SystemName.ToLower())
                }),
                    CompressionAlgorithm = CompressionAlgorithms.Deflate,
                    Issuer = user.UserName,
                    TokenType = "JWT",
                    IssuedAt = DateTimeOffset.Now.DateTime,
                    NotBefore = DateTimeOffset.Now.DateTime,
                    Expires = DateTimeOffset.Now.AddMinutes(double.Parse(DbOperations.GetServerParameterLists("ConfigApiTokenTimeoutMin").Value)).DateTime,
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), 
                    (
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "Aes256Encryption" ? SecurityAlgorithms.Aes256Encryption :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "Aes256Gcm" ? SecurityAlgorithms.Aes256Gcm :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "EcdsaSha256" ? SecurityAlgorithms.EcdsaSha256 :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "EcdsaSha512" ? SecurityAlgorithms.EcdsaSha512 :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "HmacSha256" ? SecurityAlgorithms.HmacSha256 :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "HmacSha384" ? SecurityAlgorithms.HmacSha384 :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "HmacSha512" ? SecurityAlgorithms.HmacSha512 :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "RsaOAEP" ? SecurityAlgorithms.RsaOAEP :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "RsaPKCS1" ? SecurityAlgorithms.RsaPKCS1 :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "RsaSha256" ? SecurityAlgorithms.RsaSha256 :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "RsaSha512" ? SecurityAlgorithms.RsaSha512 :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "RsaV15KeyWrap" ? SecurityAlgorithms.RsaV15KeyWrap :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "Sha256" ? SecurityAlgorithms.Sha256 :
                        DbOperations.GetServerParameterLists("ConfigTokenEncryption").Value == "Sha512" ? SecurityAlgorithms.Sha512 : SecurityAlgorithms.RsaSha512
                    ))
                };                token = tokenHandler.CreateToken(tokenDescriptor);
            } catch (Exception ex) { errorMessage = DataOperations.GetErrMsg(ex); }

            AuthenticateResponse authResponse = new() 
            { Id = user.Id, Name = user.Name, SurName = user.SurName, Token = token == null ? string.Empty : tokenHandler.WriteToken(token), 
                Email = user.Email, Message = !string.IsNullOrWhiteSpace(errorMessage) ? $"Token Generation Error, Check {errorMessage}" : "",
                Expiration = token?.ValidTo.ToLocalTime(), Role = user.Role.SystemName.ToLower() 
            };
            return authResponse;
            
        }

        /// <summary>
        /// API Refresh User Token
        /// </summary>
        /// <param name="username"></param>
        /// <param name="token">   </param>
        /// <returns></returns>
        public static bool RefreshUserToken(string username, AuthenticateResponse token) {
            try {
                SolutionUserList? dbUser = new EasyITCenterContext().SolutionUserLists
                    .Where(a => a.Active == true && a.UserName == username).FirstOrDefault();
                if (dbUser == null || dbUser.AccessToken == token.Token && dbUser.Expiration < DateTimeOffset.Now) { return false; }

                dbUser.AccessToken = token.Token; dbUser.Expiration = token.Expiration;
                var data = new EasyITCenterContext().SolutionUserLists.Update(dbUser);
                int result = data.Context.SaveChanges();

                if (result > 0) { return true; }
                return false;
            } catch (Exception ex) { }
            return false;
        }


        /// <summary>
        /// API Token LifeTime Validator
        /// </summary>
        /// <param name="notBefore"></param>
        /// <param name="expires">  </param>
        /// <param name="token">    </param>
        /// <param name="params">   </param>
        /// <returns></returns>
        internal static bool TokenLifetimeValidator(DateTime? notBefore, DateTime? expires, SecurityToken token, TokenValidationParameters @params) {
            if (RefreshUserToken(token.Issuer, new AuthenticateResponse() {
                Token = ((JwtSecurityToken)token).RawData.ToString(),
                Expiration = DateTimeOffset.Now.AddMinutes(double.Parse(DbOperations.GetServerParameterLists("ConfigApiTokenTimeoutMin").Value)).DateTime
            })) { return true; } else { return false; }
        }
    }
}