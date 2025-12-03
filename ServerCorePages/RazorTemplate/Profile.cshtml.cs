using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

using EasyITCenter.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages
{
    public class ProfileModel : PageModel
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly string _emailSender;

        public ProfileModel(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, string emailSender) 
            //: base(userManager, signInManager, emailSender)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _emailSender = emailSender;
        }

        [BindProperty]
        [Required]
        public string UserName { get; set; }

        [BindProperty]
        [Required][EmailAddress]
        public string Email { get; set; }

        [BindProperty]
        [Phone][Display(Name = "Phone number")]
        public string PhoneNumber { get; set; }

        public bool IsEmailConfirmed { get; set; }

        public async Task<IActionResult> OnGetAsync()
        {
            IdentityUser user = await _userManager.GetUserAsync(User);
            if (user == null)
                throw new ApplicationException($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");

            UserName = user.UserName;
            Email = user.Email;
            PhoneNumber = user.PhoneNumber;

            IsEmailConfirmed = await _userManager.IsEmailConfirmedAsync(user);

            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            IdentityUser user = await _userManager.GetUserAsync(User);
            if (user == null) throw new ApplicationException($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");

            if (UserName != user.UserName)
            {
                var setUserNameResult = await _userManager.SetUserNameAsync(user, UserName);
                if (!setUserNameResult.Succeeded)
                {
                    TempData["StatusMessage"] = $"Error on changing username." + string.Join(". ", setUserNameResult.Errors.Select(p => p.Description));
                    return RedirectToPage();
                    //throw new ApplicationException($"Unexpected error occurred setting email for user with ID '{user.Id}'.");
                }
            }

            if (Email != user.Email)
            {
                var setEmailResult = await _userManager.SetEmailAsync(user, Email);
                if (!setEmailResult.Succeeded)
                {
                    TempData["StatusMessage"] = $"Error on changing email. '{Email}' use in other account and must be unique.";
                    return RedirectToPage();
                    //throw new ApplicationException($"Unexpected error occurred setting email for user with ID '{user.Id}'.");
                }
            }

            if (PhoneNumber != user.PhoneNumber)
            {
                var setPhoneResult = await _userManager.SetPhoneNumberAsync(user, PhoneNumber);
                if (!setPhoneResult.Succeeded)
                {
                    throw new ApplicationException($"Unexpected error occurred setting phone number for user with ID '{user.Id}'.");
                }
            }

            TempData["StatusMessage"] = "Your profile has been updated";

            return RedirectToPage();
        }

        public async Task<IActionResult> OnPostSendVerificationEmailAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            IdentityUser user = await _userManager.GetUserAsync(User);
            if (user == null) throw new ApplicationException($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");

            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            //var callbackUrl = Url.EmailConfirmationLink(user.Id, code, Request.Scheme);
            //await _emailSender.SendEmailConfirmationAsync(user.Email, callbackUrl);

            TempData["StatusMessage"] = "Verification email sent. Please check your email.";

            return RedirectToPage();
        }
    }
}