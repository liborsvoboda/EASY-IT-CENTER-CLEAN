using System.Collections.Generic;
using System.Data;
using System.Xml;



//BETTER USE DATA TABLE - DIRECT
//https://github.com/jchristn/SerializableDataTable

namespace EasyITCenter.Controllers {


    public partial class SpUserMenuList {
        public int Id { get; set; }
        public string InheritedSystemMenuType { get; set; } = null!;
        public int GroupId { get; set; }
        public string FormPageName { get; set; } = null!;
        public string AccessRole { get; set; } = null!;
        public string? AccessUser { get; set; } = null;
        public string? OrderBy { get; set; }
        public string? Description { get; set; }
        public int UserId { get; set; }
        public bool NotShowInMenu { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }
        public string GroupName { get; set; } = null!;
    }



    /// <summary>
    /// Stored Procedures Central Library With Return Dynamic DataList
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ControllerBase"/>
    //[Authorize]
    [ApiController]
    [Route("DatabaseService")]
    public class DatabaseService : ControllerBase {

        //TODO GENERIC API 
        //new EasyITCenterContext().Entry(data.GetType()).Context.Model.GetDbFunctions



        /// <summary>
        /// Generic Procedure Return Full DB Over Params 
        /// SpProcedure, tableName, userRole, userId 
        /// in List Dictionary string,string
        /// Can Provide All Procedure Datatypes 
        /// </summary>
        /// <param name="dataset"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/DatabaseService/SpProcedure/GetGenericDataListByParams")]
        [Consumes("application/json")]
        public async Task<string> GetSystemOperationsList(List<Dictionary<string, string>> dataset) {
            string procedureName = ""; string parameters = ""; string EntityTypeName = "";
            foreach (Dictionary<string, string> param in dataset) {
                if (param.Where(a => a.Key.ToLower() == "SpProcedure".ToLower()).Any()) {
                    procedureName = param.Where(a => a.Key.ToLower() == "SpProcedure".ToLower()).First().Value;
                } else if (param.Where(a => a.Key.ToLower() == "tableName".ToLower()).Any()) {
                    parameters += ( parameters.Length > 0 ? "," : "" ) + $"@{param.Keys.First()} = N'{param.Values.First()}' ";
                    EntityTypeName = param.Values.First();
                } else { parameters += ( parameters.Length > 0 ? "," : "" ) + $"@{param.Keys.First()} = N'{param.Values.First()}' "; }
            }

            parameters += EasyITCenterContextExtension.GetUserRole() == null ? $", @userRole = N'all'" : $", @userRole = N'{EasyITCenterContextExtension.GetUserRole()}'";
            parameters += EasyITCenterContextExtension.GetUserId() == null ? $", @userId = N''" : $", @userId = N'{EasyITCenterContextExtension.GetUserId()}'";

            DataView data = ((DataView)(await new EasyITCenterContext().ExecuteReaderAsync($"EXEC {procedureName} {parameters};")).DefaultView);
            return Newtonsoft.Json.JsonConvert.SerializeObject(data.Table, (Newtonsoft.Json.Formatting)Formatting.Indented);

        }


        /// <summary>
        /// Insert, Update, Delete Procerure For Any Table
        /// Delete Must be only 1 Column Id
        /// NUll values must be removed
        /// </summary>
        /// <param name="dataset"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("/DatabaseService/SpProcedure/SetGenericDataListByParams")]
        [Consumes("application/json")]
        public async Task<string> SetGenericDataListByParams(List<Dictionary<string, string>> dataset) {
            string procedureName = ""; string parameters = ""; string EntityTypeName = ""; List<CustomMessageList>? data = null;
            List<CustomMessageList> succesData = new List<CustomMessageList>(); succesData.Add(new CustomMessageList() { MessageList = "1" });

            try {
                foreach (Dictionary<string, string> param in dataset) {
                    if (param.Where(a => a.Key.ToLower() == "SpProcedure".ToLower()).Any()) {
                        procedureName = param.Where(a => a.Key.ToLower() == "SpProcedure".ToLower()).First().Value;
                    } else if (param.Where(a => a.Key.ToLower() == "tableName".ToLower()).Any()) {
                        parameters += (parameters.Length > 0 ? "," : "") + $"@{param.Keys.First()} = N'{param.Values.First()}' ";
                        EntityTypeName = param.Values.First();
                    } else { parameters += (parameters.Length > 0 ? "," : "") + $"@{param.Keys.First()} = N'{param.Values.First().Replace("'","`")}' "; }
                }

                parameters += EasyITCenterContextExtension.GetUserRole() == null ? $", @userRole = N'all'" : $", @userRole = N'{EasyITCenterContextExtension.GetUserRole()}'";
                parameters += EasyITCenterContextExtension.GetUserId() == null ? $", @userId = N''" : $", @userId = N'{EasyITCenterContextExtension.GetUserId()}'";

                data = new EasyITCenterContext().GetListOf<CustomMessageList>($"EXEC {procedureName} {parameters};");
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() 
                { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }

            if (data[0].MessageList == succesData[0].MessageList) {
                return JsonSerializer.Serialize(new ResultMessage() 
                { Status = DBResult.success.ToString(), RecordCount = 1, ErrorMessage = null });
            } else {
                return JsonSerializer.Serialize(new ResultMessage() 
                { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = data[0].MessageList });
            }
        }


        /// <summary>
        /// Return String Message
        /// </summary>
        /// <param name="procedureName"></param>
        /// <returns></returns>
        [HttpGet("/DatabaseService/SpProcedure/Message/{procedureName}")]
        public async Task<string> GetSystemOperationsList(string procedureName) {
            List<CustomMessageList> data = new List<CustomMessageList>();
            data = new EasyITCenterContext().GetListOf<CustomMessageList>($"EXEC {procedureName};");
            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
        }

        /// <summary>
        /// Return File
        /// </summary>
        /// <param name="procedureName"></param>
        /// <returns></returns>
        [HttpGet("/DatabaseService/SpProcedure/File/{procedureName}")]
        public async Task<string> GetSystemOperationsListJson(string procedureName) {
            List<DBJsonFile>? data = null;
            data = new EasyITCenterContext().GetListOf<DBJsonFile>($"EXEC {procedureName};");
            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
        }


        /// <summary>
        /// Gets Table List for Reporting
        /// TODO takova bude genericka procedura
        /// </summary>
        /// <returns></returns>
        [HttpGet("/DatabaseService/SpGetTableSchema/{tableName}")]
        public async Task<string> SpGetTableSchema(string tableName) {
            try {
                List<GenericDataList> data = new List<GenericDataList>();
                data = new EasyITCenterContext().GetListOf<GenericDataList>($"EXEC SpGetTableSchema @tableName = N'{tableName}';");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }


        /// <summary>
        /// Get DB Procedure param List Definitions
        /// </summary>
        /// <param name="procedureName"></param>
        /// <returns></returns>
        [HttpGet("/DatabaseService/SpGetProcedureParams/{procedureName}")]
        public async Task<string> SpGetProcedureParams(string procedureName) {
            try {
                object? data = new object();
                data = new EasyITCenterContext().ExecuteReader($"EXEC SpGetProcedureParams @procedureName = N'{procedureName}';");
                return JsonSerializer.Serialize(data.ObjectToJson(), new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true, DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Gets Table List for Reporting
        /// </summary>
        /// <returns></returns>
        [HttpGet("/DatabaseService/SpGetTableList")]
        public async Task<string> SpGetTableList() {
            try {
                List<GenericDataList> data = new();
                data = new EasyITCenterContext().GetListOf<GenericDataList>("EXEC SpGetTableList;");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Gets Form Agendas Pages List For System Menu Definition.
        /// </summary>
        /// <returns></returns>
        [HttpGet("/DatabaseService/SpGetSystemPageList")]
        public async Task<string> SpGetSystemPageList() {
            try {
                List<GenericDataList> data = new();
                data = new EasyITCenterContext().GetListOf<GenericDataList>("EXEC SpGetSystemPageList;");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }

        /// <summary>
        /// Api For Logged User with Menu Datalist
        /// 
        /// </summary>
        /// <returns></returns>
        [Authorize]
        [HttpGet("/DatabaseService/SpGetUserMenuList")]
        public async Task<string> SpGetUserMenuList() {
            try
            {
                List<SpUserMenuList> data = new List<SpUserMenuList>();

                data = new EasyITCenterContext().GetListOf<SpUserMenuList>("EXEC SpGetUserMenuList @userRole = N'" + EasyITCenterContextExtension.GetUserRole() + "', @userId = " + EasyITCenterContextExtension.GetUserId() + " ;");
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {ReferenceHandler = ReferenceHandler.IgnoreCycles,WriteIndented = true,DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,PropertyNamingPolicy = JsonNamingPolicy.CamelCase});
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DataOperations.GetUserApiErrMessage(ex) });
            }
        }
    }
}