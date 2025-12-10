namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("AccessRoleList")]
    public class AccessRoleListApi : ControllerBase {

        [HttpGet("/AccessRoleList")]
        public async Task<string> GetAccessRoleList() {
            List<AccessRoleList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().AccessRoleLists.ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [HttpGet("/AccessRoleList/Filter/{filter}")]
        public async Task<string> GetAccessRoleListByFilter(string filter) {
            List<AccessRoleList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EASYDATACenterContext().AccessRoleLists.FromSqlRaw("SELECT * FROM AccessRoleList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [HttpGet("/AccessRoleList/{id}")]
        public async Task<string> GetAccessRoleListKey(int id) {
            AccessRoleList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new EASYDATACenterContext().AccessRoleLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [HttpPut("/AccessRoleList")]
        [Consumes("application/json")]
        public async Task<string> InsertAccessRoleList([FromBody] AccessRoleList record) {
            try {
                var data = new EASYDATACenterContext();
                data.AccessRoleLists.Add(record);
                int result = await data.SaveChangesAsync();

                //var data = new EASYDATACenterContext().AccessRoleLists.Add(record);
                //int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/AccessRoleList")]
        [Consumes("application/json")]
        public async Task<string> UpdateAccessRoleList([FromBody] AccessRoleList record) {
            try {
                var data = new EASYDATACenterContext();
                data.AccessRoleLists.Update(record);
                int result = await data.SaveChangesAsync();

                //data.AccessRoleLists.Update(record);
                //int result = await data.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/AccessRoleList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteAccessRoleList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });
                AccessRoleList record = new() { Id = int.Parse(id) };

                var data = new EASYDATACenterContext();
                data.AccessRoleLists.Remove(record);
                int result = await data.SaveChangesAsync();

                //var data = new EASYDATACenterContext().AccessRoleLists.Remove(record);
                //int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}