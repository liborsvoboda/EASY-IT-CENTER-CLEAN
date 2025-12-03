 [Zpět](../../)   


```csharp  
using EasyITCenter.DBModel;
using MimeKit;

namespace EasyITCenter.Controllers {
    [ApiController]
    [Route("EasyITCenterTemplateImageApi/Image")]
    public class EasyITCenterTemplateImageApi : ControllerBase {
        [HttpGet("/EasyITCenterTemplateImageApi/Image/{id}")]
        public async Task<IActionResult> GetSearchImageById(int? id = null) {
            int recId; ImageGalleryList data = null;
            if (!string.IsNullOrWhiteSpace(id.ToString()) && int.TryParse(id.ToString(), out recId)) {
                data = _dbContext.ImageGalleryLists.Where(a => a.Id == recId).FirstOrDefault();
            }

            if (data != null) { return File(data.Attachment, MimeTypes.GetMimeType(data.FileName), data.FileName); } else { return BadRequest(new { message = DBOperations.DBTranslate("BadRequest", "en") }); }
        }

        [HttpGet("/EasyITCenterTemplateImageApi/Image/{id}/{filename}")]
        public async Task<IActionResult> GetSearchImageByKeys(int? id = null, string fileName = null) {
            int recId; ImageGalleryList data = null;
            if (!string.IsNullOrWhiteSpace(id.ToString()) && !string.IsNullOrWhiteSpace(fileName) && int.TryParse(id.ToString(), out recId)) {
                data = _dbContext.ImageGalleryLists.Where(a => a.Id == recId && a.FileName.ToLower() == fileName.ToLower()).FirstOrDefault();
            }

            if (data != null) { return File(data.Attachment, MimeTypes.GetMimeType(data.FileName), data.FileName); } else { return BadRequest(new { message = DBOperations.DBTranslate("BadRequest", "en") }); }
        }

        [HttpGet("/EasyITCenterTemplateImageApi/RoomImage/{id}/{roomId}")]
        public async Task<IActionResult> GetRoomImageByKeys(int? id = null, int? roomId = null) {
            int hId; int rId; ImageGalleryList data = null;
            if (int.TryParse(id.ToString(), out hId) && int.TryParse(roomId.ToString(), out rId)) {
                data = _dbContext.ImageGalleryLists.Where(a => a.Id == hId && a.Id == rId).FirstOrDefault();
            }

            if (data != null) { return File(data.Attachment, MimeTypes.GetMimeType(data.FileName), data.FileName); } else { return BadRequest(new { message = DBOperations.DBTranslate("BadRequest", "en") }); }
        }
    }
}

```  
