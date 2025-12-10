namespace EASYDATACenter.ServerCoreDefinition {

    /// <summary>
    /// Server Communication Extensions for Controlling Data
    /// </summary>
    public class CommunicationController : IHttpContextAccessor {
        private static readonly IHttpContextAccessor? _accessor;

        /// <summary>
        /// Server Request Accessory controller
        /// </summary>
        public HttpContext? HttpContext { get => _accessor.HttpContext; set => _accessor.HttpContext = value; }

        /// <summary>
        /// Check Admin Role
        /// </summary>
        public static bool CheckAdmin() {
            try {
                var context = _accessor.HttpContext;
                if (context != null && context.User != null && !context.User.IsInRole("admin")) { return false; } else return true;
            } catch { return false; }
        }
    }

    public class ServiceHealthCheck : IHealthCheck {

        /// <summary>
        ///checks any service whether it ends normally or with an exception
        /// </summary>
        /// <param name="context"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        Task<HealthCheckResult> IHealthCheck.CheckHealthAsync(
            HealthCheckContext context, CancellationToken cancellationToken = default) {
            try {
                return Task.FromResult(
                    HealthCheckResult.Healthy(ServerCoreDbOperations.DBTranslate("serviceIsUpAndRunning")));
            } catch (Exception) {
                return Task.FromResult(
                    new HealthCheckResult(
                        context.Registration.FailureStatus, ServerCoreDbOperations.DBTranslate("serviceIsDown")));
            }
        }
    }
}