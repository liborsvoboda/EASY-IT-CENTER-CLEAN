namespace EASYDATACenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("ImageGalleryList")]
    public class ImageGalleryListApi : ControllerBase {

        [HttpGet("/ImageGalleryList")]
        public async Task<string> GetImageGalleryList() {
            List<ImageGalleryList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                if (CommunicationController.CheckAdmin()) { data = new EASYDATACenterContext().ImageGalleryLists.ToList(); } else {
                    data = new EASYDATACenterContext().ImageGalleryLists.Include(a => a.User)
                        .Where(a => a.User.UserName == Request.HttpContext.User.Claims.First().Issuer).ToList();
                }
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [HttpGet("/ImageGalleryList/Filter/{filter}")]
        public async Task<string> GetImageGalleryListByFilter(string filter) {
            List<ImageGalleryList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                if (Request.HttpContext.User.IsInRole("Admin")) { data = new EASYDATACenterContext().ImageGalleryLists.FromSqlRaw("SELECT * FROM ImageGalleryList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList(); } else {
                    data = new EASYDATACenterContext().ImageGalleryLists.FromSqlRaw("SELECT * FROM ImageGalleryList WHERE 1=1 AND " + filter.Replace("+", " "))
                        .Include(a => a.User).Where(a => a.User.UserName == Request.HttpContext.User.Claims.First().Issuer)
                        .AsNoTracking().ToList();
                }
            }
            return JsonSerializer.Serialize(data, new JsonSerializerOptions() { ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true });
        }

        [HttpGet("/ImageGalleryList/{id}")]
        public async Task<string> GetImageGalleryListById(int id) {
            ImageGalleryList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { data = new EASYDATACenterContext().ImageGalleryLists.Where(a => a.Id == id).First(); }
            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/ImageGalleryList")]
        [Consumes("application/json")]
        public async Task<string> InsertImageGalleryList([FromBody] ImageGalleryList record) {
            try {
                record.User = null;  //EntityState.Detached IDENTITY_INSERT is set to OFF
                var data = new EASYDATACenterContext().ImageGalleryLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }

        [HttpPost("/ImageGalleryList")]
        [Consumes("application/json")]
        public async Task<string> UpdateImageGalleryList([FromBody] ImageGalleryList record) {
            try {
                var data = new EASYDATACenterContext().ImageGalleryLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) { return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/ImageGalleryList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteImageGalleryList(string id) {
            try {
                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                ImageGalleryList record = new() { Id = int.Parse(id) };

                var data = new EASYDATACenterContext().ImageGalleryLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new DBResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
            }
        }
    }
}