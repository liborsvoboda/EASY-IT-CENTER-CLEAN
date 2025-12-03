using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class DashBoardModel : PageModel {
        private readonly ILogger<DashBoardModel> _logger;

        public DashBoardModel(ILogger<DashBoardModel> logger) {
            _logger = logger;
        }

        public void OnGet() {
        }
    }
}