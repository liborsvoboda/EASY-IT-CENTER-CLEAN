namespace EasyITCenter.WebClasses {


    public class JsonResult {
        public string Status { get; set; }
        public object Result { get; set; }
        public string ErrorMessage { get; set; }
    }

    /// <summary>
    /// WebApi Responses
    /// </summary>
    public enum DBWebApiResponses {
        emailExist,
        emailNotExist,
        loginInfoSentToEmail,
        userNameExist,
        success
    }


    /// <summary>
    /// Server WebPages Communication Token Definition for Security content And Load Allowed Content
    /// </summary>
    public class ServerWebPagesToken {
        public Dictionary<string, string> Data { get; set; }
        public ClaimsPrincipal? UserClaims { get; set; } = null;
        public SecurityToken? Token { get; set; } = null;
        public string? stringToken { get; set; } = null;
        public bool IsValid { get; set; } = false;
        public string userRole { get; set; } = null;
    }


    /// <summary>
    /// Custom Class For UserConfig over Server Web Pages
    /// </summary>
    public class UserConfig {
        public bool UserAutoTranslate { get; set; }
        public bool UserSubscribeNews { get; set; }
    }


    public class WebPrivateMessage {
        public int ParentId { get; set; }
        public string Message { get; set; }
        public string Language { get; set; }
    }

    public class WebDiscussionContribution {
        public int ParentId { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public string Language { get; set; }
    }


    /// <summary>
    /// Custom WebMessage Class For Server Web Pages
    /// </summary>
    public class WebMessage {
        public string Message { get; set; }
    }

    public class WebSettingList1 {
        public List<WebSetting> Settings { get; set; }
    }

    public class WebSetting {
        public string Key { get; set; }
        public string Value { get; set; }
    }









    public class SetPasswordInput {
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(System.ComponentModel.DataAnnotations.DataType.Password)]
        [Display(Name = "New password")]
        public string NewPassword { get; set; }

        [DataType(System.ComponentModel.DataAnnotations.DataType.Password)]
        [Display(Name = "Confirm new password")]
        [Compare("NewPassword", ErrorMessage = "The new password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
    }

    public class ChangePasswordInput {
        [Required]
        [DataType(System.ComponentModel.DataAnnotations.DataType.Password)]
        [Display(Name = "Current password")]
        public string OldPassword { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(System.ComponentModel.DataAnnotations.DataType.Password)]
        [Display(Name = "New password")]
        public string NewPassword { get; set; }

        [DataType(System.ComponentModel.DataAnnotations.DataType.Password)]
        [Display(Name = "Confirm new password")]
        [Compare("NewPassword", ErrorMessage = "The new password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
    }

    /// <summary>
    /// Custom Class For Server Generator Request Monitoring
    /// </summary>
    public class AutoGenRequest {
        public string? Name { get; set; } = null;
        public string? IpAddress { get; set; } = null;

        // public string? Role { get; set; } = null;
    }

    /// <summary>
    /// Custom Class For Check ConnectionString
    /// </summary>
    public class AutoGenConnectionString {
        public string ConnectionString { get; set; }
    }

    /// <summary>
    /// Generator Uploading files for Generators
    /// </summary>
    public class UploadGeneratorFiles {
        public List<UploadFileData> Files { get; set; }
    }

    /// <summary>
    /// Generator File Class structure
    /// </summary>
    public class UploadFileData {
        public string Name { get; set; } = null;
        public string Extension { get; set; }
        public string FileArray { get; set; }
    }

    /// <summary>
    /// Generator Carousel Image Class
    /// </summary>
    public class CarouselImage {
        public string title { get; set; } = null;
        public string href { get; set; }
        public string thumbnail { get; set; }
    }

    /// <summary>
    /// Generator Carousel Video Class
    /// </summary>
    public class CarouselVideo {
        public string title { get; set; } = null;
        public string type { get; set; } = "video/mp4";
        public string href { get; set; }
        public string preload { get; set; } = "auto";
    }
}