using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace EasyITCenter.ServerCorePages {


    public static class UserMenuExtensions {

        public static bool IsMenuActive(this IHtmlHelper htmlHelper, string menuItemUrl) {
            var viewContext = htmlHelper.ViewContext;
            var currentPageUrl = viewContext.ViewData["ActiveMenu"] as string ?? viewContext.HttpContext.Request.Path;
            return currentPageUrl.StartsWith(menuItemUrl, StringComparison.OrdinalIgnoreCase);
        }
    }


    public static class UrlHelperExtensions {
        public static string GetLocalUrl(this IUrlHelper urlHelper, string localUrl) {
            if (!urlHelper.IsLocalUrl(localUrl)) {
                return urlHelper.Page("/RazorTemplate");
            }

            return localUrl;
        }

        public static string? EmailConfirmationLink(this IUrlHelper urlHelper, string userId, string code, string scheme) {

            return urlHelper.Page(
                "/RazorTemplate/ConfirmEmail",
                pageHandler: null,
                values: new { userId, code },
                protocol: scheme);
        }

        public static string? ResetPasswordCallbackLink(this IUrlHelper urlHelper, string userId, string code, string scheme) {
            return urlHelper.Page(
                "/RazorTemplate/ResetPassword",
                pageHandler: null,
                values: new { userId, code },
                protocol: scheme);
        }
    }


    public static class PageModelExtensions {

        public static void SetStatusMessage(this PageModel pageModel, string message) {
            pageModel.TempData["StatusMessage"] = message;
        }
    }

}