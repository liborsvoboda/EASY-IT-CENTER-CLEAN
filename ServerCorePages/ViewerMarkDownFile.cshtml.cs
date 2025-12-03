using Microsoft.AspNetCore.Mvc.RazorPages;
using EasyITCenter.ServerCoreStructure;
using Westwind.AspNetCore.Markdown;
namespace ServerCorePages {

    public class ViewerMarkDownFileModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;
        public static string result;

        public void OnGet() {

            string? requestedUrlPath = ""; string result = "";
            try {//Standalone Load File From Url Request

                try { requestedUrlPath = ( (string?)HttpContext.Items.FirstOrDefault(a => a.Key.ToString() == "FileValidUrl").Value ); } catch { }
                string? filePath = System.IO.Path.Combine(SrvRuntime.WebRootPath) + FileOperations.ConvertSystemFilePathFromUrl(requestedUrlPath);

                filePath = FileOperations.CheckFile(filePath) ? filePath : FileOperations.CheckFile($"{filePath}.md") ? $"{filePath}.md" :
                    FileOperations.CheckFile($"{filePath}/readme.md") ? $"{filePath}/readme.md" : FileOperations.CheckFile($"{filePath}/index.md") ?
                    $"{filePath}/index.md" : FileOperations.GetPathFiles("filePath", "*.md", SearchOption.AllDirectories)[0];


                var fileContent = System.IO.File.ReadAllText(filePath);
                result = Markdown.ParseHtmlString(fileContent)?.Value.ToString();
            } catch {

                try { requestedUrlPath = ((string?)HttpContext.Items.FirstOrDefault(a => a.Key.ToString() == "FileValidUrl").Value); } catch { }
                string? filePath = System.IO.Path.Combine(SrvRuntime.WebRootPath) + FileOperations.ConvertSystemFilePathFromUrl(requestedUrlPath);
                var fileContent = System.IO.File.ReadAllText(filePath);
                result = fileContent.ToString();
            }

            //Standalone Check Token
            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = CoreOperations.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}