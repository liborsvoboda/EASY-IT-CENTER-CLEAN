namespace EasyITCenter.DBModel {


    /// <summary>
    /// Database response types definition
    /// </summary>
    public enum DBResult {
        success,
        error,
        DeniedYouAreNotAdmin,
        UnauthorizedRequest
    }

    /// <summary>
    /// The DB result message.
    /// </summary>
    public class ResultMessage {

        public int InsertedId { get; set; } = 0;
        public string Status { get; set; }
        public int RecordCount { get; set; }
        public string ErrorMessage { get; set; }
    }

    /// <summary>
    /// The authenticate response.
    /// </summary>
    public class AuthenticateResponse {

        public int Id { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string? Token { get; set; }
        public string Email { get; set; }
        public string? Message { get; set; }
        public DateTime? Expiration { get; set; }
        public string Role { get; set; }
    }


    /// <summary>
    /// Database Model Extension Definitions Its API Filter, Extended Classes, Translation, etc
    /// </summary>
    public class SetReportFilter {
        public string TableName { get; set; } = null;
        public string Filter { get; set; } = null;
        public string Search { get; set; } = null;
        public int RecId { get; set; } = 0;
    }


    /// <summary>
    /// Custom Definition for Returning string List from Stored Procedures Named Data = ColumnName
    /// in the Data string Can be Any Object
    /// </summary>
    public class GenericDataList {
        public string Data { get; set; }
    }


    /// <summary>
    /// Custom Definition for Returning List with One Record from Operation Stored Procedures
    /// </summary>
    public class CustomMessageList {
        public string MessageList { get; set; }
    }

    /// <summary>
    /// Generic Table Standard Fieds Public Class For Get Informations By System
    /// </summary>
    public class GenericTable {
        public int Id { get; set; }
        public string Description { get; set; } = null;
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }
    }


    public abstract class GenericModel {
        public Guid Id { get; set; } = Guid.NewGuid();
    }


    public partial class DBJsonFile {
        public string Value { get; set; } = null!;
    }


    public class RssPost {
        public string Title { get; set; }
        public string UrlSlug { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
    }

    public class StaticFilesRequest {
        public string Website { get; set; }
        public string Path { get; set; }
        public bool Recursive { get; set; } = false;
    }

}