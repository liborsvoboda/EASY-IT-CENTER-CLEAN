# Úvod   EIC-CanceledRazorBuild  

Ukázka Kódu portálu v Technologii Razor/MVC s nutností provést Builde a nasazení na Web
Tvorba portálu byla pouhý měsíc, Ale od Tohoto způsobu VÝVOJE je upuštěno
ve prospěch ONLINE okamžité Aplikace Editory
IMPORTED FILE

ď»żusing Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class VideoGalleryModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;

        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = ServerCoreHelpers.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}