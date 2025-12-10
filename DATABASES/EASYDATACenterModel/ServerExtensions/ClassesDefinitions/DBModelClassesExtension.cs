/*
 * Database Model Classes Extension for customizing
 * unlimited working with Automatic Adopted Database Model
 */

namespace EASYDATACenter.Controllers {

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
    /// Custom Class Definition for Filtering by record Id
    /// </summary>
    public class IdFilter {
        public int Id { get; set; }
    }

    /// <summary>
    /// Custom Class Definition for Filtering by string
    /// </summary>
    public class NameFilter {
        public string Name { get; set; }
    }

    /// <summary>
    /// Custom Definition for Returning string List from Stored Procedures Name is ColumnName from
    /// Stored Procedure Result
    /// </summary>
    public class CustomString {
        public string TableList { get; set; }
    }
}