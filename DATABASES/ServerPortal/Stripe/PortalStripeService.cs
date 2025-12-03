using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace EasyITCenter.Controllers
{

    public record AddStripeCard
       (
           string Name,
           string CardNumber,
           string ExpirationYear,
           string ExpirationMonth,
           string Cvc
       );

    public record AddStripeCustomer
    (
        string Email,
        string Name,
        AddStripeCard CreditCard
    );

    public record AddStripePayment
    (
        string CustomerId,
        string ReceiptEmail,
        string Description,
        string Currency,
        long Amount
    );

    public record StripeCustomer
    (
        string Name,
        string Email,
        string CustomerId
    );

    public record StripePayment
    (
        string CustomerId,
        string ReceiptEmail,
        string Description,
        string Currency,
        long Amount,
        string PaymentId
    );


    public interface IStripeService {
        Task<StripeCustomer> AddStripeCustomerAsync(AddStripeCustomer customer, CancellationToken ct);
        Task<StripePayment> AddStripePaymentAsync(AddStripePayment payment, CancellationToken ct);
    }

    public class StripeService : IStripeService {
        private readonly ChargeService _chargeService;
        private readonly CustomerService _customerService;
        private readonly TokenService _tokenService;
        public StripeService(ChargeService chargeService, CustomerService customerService, TokenService tokenService) {
            _chargeService = chargeService;
            _customerService = customerService;
            _tokenService = tokenService;
        }

        public async Task<StripeCustomer> AddStripeCustomerAsync(AddStripeCustomer customer, CancellationToken ct) {
            // Set Stripe Token options based on customer data
            TokenCreateOptions tokenOptions = new TokenCreateOptions {
                Card = new TokenCardOptions {
                    Name = customer.Name,
                    Number = customer.CreditCard.CardNumber,
                    ExpYear = customer.CreditCard.ExpirationYear,
                    ExpMonth = customer.CreditCard.ExpirationMonth,
                    Cvc = customer.CreditCard.Cvc
                }
            };

            // Create new Stripe Token
            Token stripeToken = await _tokenService.CreateAsync(tokenOptions, null, ct);

            // Set Customer options using
            CustomerCreateOptions customerOptions = new CustomerCreateOptions {
                Name = customer.Name,
                Email = customer.Email,
                Source = stripeToken.Id
            };

            // Create customer at Stripe
            Customer createdCustomer = await _customerService.CreateAsync(customerOptions, null, ct);

            // Return the created customer at stripe
            return new StripeCustomer(createdCustomer.Name, createdCustomer.Email, createdCustomer.Id);
        }

        public async Task<StripePayment> AddStripePaymentAsync(AddStripePayment payment, CancellationToken ct) {
            // Set the options for the payment we would like to create at Stripe
            ChargeCreateOptions paymentOptions = new ChargeCreateOptions {
                Customer = payment.CustomerId,
                ReceiptEmail = payment.ReceiptEmail,
                Description = payment.Description,
                Currency = payment.Currency,
                Amount = payment.Amount
            };

            // Create the payment
            var createdPayment = await _chargeService.CreateAsync(paymentOptions, null, ct);

            // Return the payment to requesting method
            return new StripePayment
              (
              createdPayment.CustomerId,
              createdPayment.ReceiptEmail,
              createdPayment.Description,
              createdPayment.Currency,
              createdPayment.Amount,
              createdPayment.Id
              );
        }
    }




    [Route("ServerPortalApi/StripeApi")]
    [ApiController]
    public class PortalStripeService : ControllerBase
    {
        private readonly IStripeService _stripeService;
        public PortalStripeService(IStripeService stripeService)
        {
            _stripeService = stripeService;
        }

        [HttpPost("/ServerPortalApi/StripeApi/customer/add")]
        public async Task<ActionResult<StripeCustomer>> AddStripeCustomer([FromBody] AddStripeCustomer customer, CancellationToken ct)
        {
            StripeCustomer createdCustomer = await _stripeService.AddStripeCustomerAsync(customer, ct);
            return StatusCode(StatusCodes.Status200OK, createdCustomer);
        }

        [HttpPost("/ServerPortalApi/StripeApi/payment/add")]
        public async Task<ActionResult<StripePayment>> AddStripePayment([FromBody] AddStripePayment payment, CancellationToken ct)
        {
            StripePayment createdPayment = await _stripeService.AddStripePaymentAsync(payment, ct);
            return StatusCode(StatusCodes.Status200OK, createdPayment);
        }
    }
}
