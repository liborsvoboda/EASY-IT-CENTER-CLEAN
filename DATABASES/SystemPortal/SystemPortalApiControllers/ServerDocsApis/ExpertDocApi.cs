namespace EasyITCenter.Controllers {

    [ApiController]
    [Route("/WebApi/WebDocumentation")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class ExpertDocApi : ControllerBase {

        /// <summary>
        /// ExpertDocManager Group Documentation Request Api
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [HttpGet("/WebApi/WebDocumentation/GetDocSrvDocumentationList")]
        public async Task<string> GetDocumentationGroupedList() {
            List<DocSrvDocumentationList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().DocSrvDocumentationLists
                    .Include(a => a.DocumentationGroup)
                    .Where(a => a.Active)
                    .OrderBy(a => a.Sequence).ToList()
                    .OrderBy(a => a.DocumentationGroup.Sequence).ToList();
            }

            data.ForEach(documentation => {
                documentation.Name = "ver." + documentation.AutoVersion + ": " + documentation.Name;
            });

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                ReferenceHandler = ReferenceHandler.IgnoreCycles,
                WriteIndented = true,
                DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            });
        }


        /// <summary>
        /// ExpertDocManager Group Documentation Request Api
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [HttpGet("/WebApi/WebDocumentation/GetDocSrvDocumentationList/byGroup/{id}")]
        public async Task<string> GetDocumentationGroupedList(int id) {
            List<DocSrvDocumentationList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new EasyITCenterContext().DocSrvDocumentationLists.Where(a => a.DocumentationGroupId == id && a.Active).ToList();
            }

            return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                ReferenceHandler = ReferenceHandler.IgnoreCycles,
                WriteIndented = true,
                DictionaryKeyPolicy = JsonNamingPolicy.CamelCase,
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            });
        }


        //[Authorize]
        //[HttpPost("/EasyITCenterDocSrvDocumentationList/ByGroup")]
        //[Consumes("application/json")]
        //public async Task<string> InsertDocSrvDocumentationList([FromBody] EasyDocumentation record) {
        //    try {
        //         record.MdContent = DataOperations.MarkDownLineEndSpacesResolve(record.MdContent);
        //        DocSrvDocumentationList newRec = new() {
        //            Name = record.Name,
        //            DocumentationGroupId = record.DocumentationGroupId,
        //            Description = record.Description,
        //            UserId = int.Parse(User.FindFirst(ClaimTypes.PrimarySid).Value),
        //            Active = true,
        //            AutoVersion = 0,
        //            TimeStamp = DateTimeOffset.Now.DateTime
        //        };
        //        EntityEntry<DocSrvDocumentationList>? data = new EasyITCenterContext().DocSrvDocumentationLists.Add(newRec);
        //        int result = await data.Context.SaveChangesAsync();

        // if (result > 0) { List<DocSrvDocumentationList> newdata; using (new
        // TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel
        // = IsolationLevel.ReadUncommitted //with NO LOCK })) { newdata = new
        // EasyITCenterContext().DocSrvDocumentationLists.Where(a => a.DocumentationGroupId ==
        // record.DocumentationGroupId && a.Active).ToList(); } return JsonSerializer.Serialize(newdata);

        //        }
        //        else return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
        //    } catch (Exception ex) {
        //        return JsonSerializer.Serialize(new DBResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = ServerCoreFunctions.GetUserApiErrMessage(ex) });
        //    }
        //}
    }
}