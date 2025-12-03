using Microsoft.AspNetCore.Mvc.RazorPages;
using System;

namespace RefactorWebSites {

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    [IgnoreAntiforgeryToken]
    public class DefaultModel : PageModel {
        public string? RequestId { get; set; }
        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

        private readonly ILogger<DefaultModel> _logger;

        public void OnGet() {
            //RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            //return null;
        }

        /*
        TODO
        IDEA ERROR PAGE CAN BE USED FOR WEB TRAFFIC ONLY 
        OTHER IS NORMAL API 


        HERE CAN BE IMPLEMENTED GLOBALY RUREL FOR VISITS, VISIT COUNTER, STATISTICS, MONITORING, PAGE LOADING,ETC
        ONLY FOR PORTAL - DYNAMIC CONTENT  =  because all page of portal is error 404
        */

       
    }
}