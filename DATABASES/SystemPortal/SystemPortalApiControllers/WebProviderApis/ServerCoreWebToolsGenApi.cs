using System.IO.Compression;

namespace EasyITCenter.ControllersExtensions {

    /// <summary>
    /// Server Root Controller
    /// </summary>
    [ApiController]
     //[ApiExplorerSettings(IgnoreApi = true)]
    [Route("Generators")]
    public class ServerCoreWebToolsGenApi : ControllerBase {


        [HttpGet("/Generators/GetSystemModuleList")]
        [Consumes("application/json")]
        public async Task<string> GetSystemModuleList() {
            List<SystemModuleList> data = null;
            try {
               
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    data = new EasyITCenterContext().SystemModuleLists.OrderBy(a => a.InheritedModuleType).ThenBy(a => a.Name).ToList();
                }
                
            } catch { }
            return JsonSerializer.Serialize(data);
        }

       

        /// <summary>
        /// Easy Image Gallery Generator
        /// </summary>
        /// <param name="imageList">The image list.</param>
        /// <returns></returns>
        [Authorize]
        [HttpPost("/Generators/GenerateEasyGallery")]
        [Consumes("application/json")]
        public IActionResult GenerateEasyGallery([FromBody] UploadGeneratorFiles imageList) {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "Tools\\EasyGallery\\copy"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "EasyGallery"));

                List<string> fileList = new List<string>();
                imageList.Files.ForEach(file => {
                    if (file.FileArray != null) {
                        FileOperations.ByteArrayToFile(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "EasyGallery\\images\\", (string)DataOperations.RemoveWhitespace(file.Name)), DataOperations.GetByteArrayFrom64Encode(file.FileArray));
                        fileList.Add("./images/" + DataOperations.RemoveWhitespace(file.Name));
                    }
                });

                string indexFile = System.IO.File.ReadAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "EasyGallery", "index.html"))
                    .Replace("let files = [];", "let files = " + JsonSerializer.Serialize(fileList) + ";");

                System.IO.File.WriteAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "EasyGallery", "index.html"), indexFile);
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "EasyGallery"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "EasyGallery.zip"));

                //var genRecord = new ProviderGeneratedToolList() { Name = "EasyGallery", UserId = int.Parse(User.Claims.First(a => a.Issuer != null).Value), Rating = null, DescActive = false, Description = null, TimeStamp = DateTimeOffset.Now.DateTime };
                //var saveGen = new EasyITCenterContext().ProviderGeneratedToolLists.Add(genRecord);
                //saveGen.Context.SaveChanges();

                return Ok(new { genRecord = 0, message = DbOperations.DBTranslate("EASYGalleryWasGenerated", "en") });
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetGeneratedEasyGallery")]
        public async Task<IActionResult> GetGeneratedEasyGallery() {
            try {
                byte[] easyGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "EasyGallery.zip"));

                if (easyGalleryPackage != null) { return File(easyGalleryPackage, "application/x-zip-compressed", "EasyGallery.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        /// <summary>
        /// Image Carousel Generator
        /// </summary>
        /// <param name="imageList">The image list.</param>
        /// <returns></returns>
        [Authorize]
        [HttpPost("/Generators/GenerateCarouselGallery")]
        [Consumes("application/json")]
        public IActionResult GenerateCarouselGallery([FromBody] UploadGeneratorFiles imageList) {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath,"Tools\\CarouselGallery\\copy"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselGallery"));

                List<CarouselImage> fileList = new List<CarouselImage>();
                imageList.Files.ForEach(file => {
                    if (file.FileArray != null) {
                        FileOperations.ByteArrayToFile(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselGallery\\images\\", (string)DataOperations.RemoveWhitespace(file.Name)), DataOperations.GetByteArrayFrom64Encode(file.FileArray));
                        fileList.Add(new CarouselImage() { title = DataOperations.RemoveWhitespace(file.Name.Split(".").First()), href = "./images/" + DataOperations.RemoveWhitespace(file.Name), thumbnail = "./images/" + DataOperations.RemoveWhitespace(file.Name) });
                    }
                });

                string indexFile = System.IO.File.ReadAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselGallery", "index.html"))
                    .Replace("let files = [];", "let files = " + JsonSerializer.Serialize(fileList) + ";");

                System.IO.File.WriteAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselGallery", "index.html"), indexFile);
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselGallery"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselGallery.zip"));

                //var genRecord = new ProviderGeneratedToolList() { Name = "CarouselGallery", UserId = int.Parse(User.Claims.First(a => a.Issuer != null).Value), Rating = null, DescActive = false, Description = null, TimeStamp = DateTimeOffset.Now.DateTime };
                //var saveGen = new EasyITCenterContext().ProviderGeneratedToolLists.Add(genRecord);
                //saveGen.Context.SaveChanges();

                return Ok(new { genRecord = 0, message = DbOperations.DBTranslate("CarouselGalleryWasGenerated", "en") });
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetGeneratedCarouselGallery")]
        public async Task<IActionResult> GetGeneratedCarouselGallery() {
            try {
                byte[] carouselGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselGallery.zip"));

                if (carouselGalleryPackage != null) { return File(carouselGalleryPackage, "application/x-zip-compressed", "CarouselGallery.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        /// <summary>
        /// Video Carousel Generator
        /// </summary>
        /// <param name="videoList">The image list.</param>
        /// <returns></returns>
        [Authorize]
        [HttpPost("/Generators/GenerateCarouselVideoGallery")]
        [Consumes("application/json")]
        public IActionResult GenerateCarouselVideoGallery([FromBody] UploadGeneratorFiles videoList) {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "Tools\\CarouselVideoGallery\\copy"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselVideoGallery"));

                List<CarouselVideo> fileList = new List<CarouselVideo>();
                videoList.Files.ForEach(file => {
                    if (file.Name != null) {
                        FileOperations.ByteArrayToFile(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselVideoGallery\\videos\\", (string)DataOperations.RemoveWhitespace(file.Name)), DataOperations.GetByteArrayFrom64Encode(file.FileArray));
                        fileList.Add(new CarouselVideo() { title = DataOperations.RemoveWhitespace(file.Name.Split(".").First()), href = "./videos/" + DataOperations.RemoveWhitespace(file.Name) });
                    }
                });

                string indexFile = System.IO.File.ReadAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselVideoGallery", "index.html"))
                    .Replace("let files = [];", "let files = " + JsonSerializer.Serialize(fileList) + ";");

                System.IO.File.WriteAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselVideoGallery", "index.html"), indexFile);
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselVideoGallery"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselVideoGallery.zip"));

                //var genRecord = new ProviderGeneratedToolList() { Name = "CarouselVideoGallery", UserId = int.Parse(User.Claims.First(a => a.Issuer != null).Value), Rating = null, DescActive = false, Description = null, TimeStamp = DateTimeOffset.Now.DateTime };
                //var saveGen = new EasyITCenterContext().ProviderGeneratedToolLists.Add(genRecord);
                //saveGen.Context.SaveChanges();

                return Ok(new { genRecord = 0, message = DbOperations.DBTranslate("CarouselVideoGalleryWasGenerated", "en") });
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetGeneratedCarouselVideoGallery")]
        public async Task<IActionResult> GetGeneratedCarouselVideoGallery() {
            try {
                byte[] videoGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "CarouselVideoGallery.zip"));

                if (videoGalleryPackage != null) { return File(videoGalleryPackage, "application/x-zip-compressed", "CarouselVideoGallery.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        /// <summary>
        /// Video Player + PlayList Generator
        /// </summary>
        /// <param name="videoList">The image list.</param>
        /// <returns></returns>
        [Authorize]
        [HttpPost("/Generators/GenerateVideoPlayList")]
        [Consumes("application/json")]
        public IActionResult GenerateVideoPlayList([FromBody] UploadGeneratorFiles videoList) {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "Tools\\VideoListGallery\\copy"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "VideoPlayList"));

                string playList = ""; string firstVideo = ""; string firstName = "";
                int counter = 1;
                videoList.Files.ForEach(file => {
                    if (file.Name != null) {
                        if (firstVideo.Length == 0) { firstVideo = "videos/" + DataOperations.RemoveWhitespace(file.Name); firstName = counter.ToString() + ". " + file.Name.Split(".").First(); }
                        FileOperations.ByteArrayToFile(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "VideoPlayList\\videos\\", (string)DataOperations.RemoveWhitespace(file.Name)), DataOperations.GetByteArrayFrom64Encode(file.FileArray));
                        playList += "<div class=\"list\">\r\n                    <video src=\"videos/" + DataOperations.RemoveWhitespace(file.Name) + "\" class=\"list-video\"></video>\r\n                    <h3 class=\"list-title\">" + counter.ToString() + ". " + file.Name.Split(".").First() + "</h3>\r\n                </div>";
                        counter++;
                    }
                });

                string indexFile = System.IO.File.ReadAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "VideoPlayList", "index.html"))
                    .Replace("AUTOFILLVIDEO", firstVideo).Replace("AUTOFILLNAME", firstName).Replace("AUTOFILING", playList);

                System.IO.File.WriteAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "VideoPlayList", "index.html"), indexFile);
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "VideoPlayList"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "VideoPlayList.zip"));

                return Ok(new { genRecord = 0, message = DbOperations.DBTranslate("VideoPlayListWasGenerated", "en") });
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetGeneratedVideoPlayList")]
        public async Task<IActionResult> GetGeneratedVideoPlayList() {
            try {
                byte[] videoGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "VideoPlayList.zip"));

                if (videoGalleryPackage != null) { return File(videoGalleryPackage, "application/x-zip-compressed", "VideoPlayList.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        /// <summary>
        /// XmlToMD Generator
        /// </summary>
        /// <param name="fileList">The image list.</param>
        /// <returns></returns>
        [Authorize]
        [HttpPost("/Generators/GenerateXmlToMd")]
        [Consumes("application/json")]
        public IActionResult GenerateXmlToMd([FromBody] UploadGeneratorFiles fileList) {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "Tools\\XmlToMD\\generator"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "XmlToMd"));

                if (fileList.Files[0].FileArray != null) {
                    FileOperations.ByteArrayToFile(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "XmlToMd", (string)DataOperations.RemoveWhitespace(fileList.Files[0].Name)), DataOperations.GetByteArrayFrom64Encode(fileList.Files[0].FileArray));

                    string cmdGenerator = System.IO.File.ReadAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "XmlToMd", "GenerateDocs.bat"))
                        .Replace("StartDrive", Path.GetPathRoot(SrvRuntime.UserPath))
                        .Replace("StartupPATH", Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "XmlToMd"))
                        .Replace("UploadFileName", (string)DataOperations.RemoveWhitespace(fileList.Files[0].Name));
                    System.IO.File.WriteAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "XmlToMd", "GenerateDocs.bat"), cmdGenerator);

                    RunProcessRequest process = new RunProcessRequest() {
                        Command = Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "XmlToMd", "GenerateDocs.bat"),
                        WorkingDirectory = Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "XmlToMd"),
                        ProcessType = ProcessType.cmd,
                    };
                    ProcessOperations.ServerProcessStartAsync(process);

                    ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "XmlToMd", "XmlToMd"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MarkDownDocumentation.zip"));

                    return Ok(new { genRecord = 0, message = DbOperations.DBTranslate("XmlToMdWasGenerated", "en") });
                }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetGeneratedXmlToMd")]
        public async Task<IActionResult> GetGeneratedXmlToMd() {
            try {
                byte[] xmlToMd = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MarkDownDocumentation.zip"));

                if (xmlToMd != null) { return File(xmlToMd, "application/x-zip-compressed", "MarkDownDocumentation.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        /// <summary>
        /// MdToMdBook Generator
        /// </summary>
        /// <param name="fileList">The image list.</param>
        /// <returns></returns>
        [Authorize]
        [HttpPost("/Generators/GenerateMdToMdBook")]
        [Consumes("application/json")]
        public async Task<IActionResult> GenerateMdToMdBook([FromBody] UploadGeneratorFiles fileList) {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "Tools\\EDC_ESB_InteliHelp\\generator"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdToMdBook"));

                fileList.Files.ForEach(file => {
                    if (file.FileArray != null) {
                        FileOperations.ByteArrayToFile(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdToMdBook", "src", (string)DataOperations.RemoveWhitespace(file.Name)), DataOperations.GetByteArrayFrom64Encode(file.FileArray));
                    }
                });

                string cmdGenerator = System.IO.File.ReadAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdToMdBook", "GenerateMdBook.bat"))
                    .Replace("StartDrive", Path.GetPathRoot(SrvRuntime.UserPath)).Replace("StartupPATH", Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdToMdBook"));
                System.IO.File.WriteAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdToMdBook", "GenerateMdBook.bat"), cmdGenerator);

                RunProcessRequest process = new RunProcessRequest() {
                    Command = Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdToMdBook", "GenerateMdBook.bat"),
                    WorkingDirectory = Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdToMdBook"),
                    ProcessType = ProcessType.cmd
                };
                await ProcessOperations.ServerProcessStartAsync(process);

                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdToMdBook", "book"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdBook.zip"));



                return Ok(new { genRecord = 0, message = DbOperations.DBTranslate("MdToMdBookWasGenerated", "en") });
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetGeneratedMdToMdBook")]
        public async Task<IActionResult> GetGeneratedMdToMdBook() {
            try {
                byte[] xmlToMd = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdBook.zip"));

                if (xmlToMd != null) { return File(xmlToMd, "application/x-zip-compressed", "MdBook.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        /// <summary>
        /// ImageBook Generator
        /// </summary>
        /// <param name="imageList">The image list.</param>
        /// <returns></returns>
        [Authorize]
        [HttpPost("/Generators/GenerateImageBook")]
        [Consumes("application/json")]
        public IActionResult GenerateImageBook([FromBody] UploadGeneratorFiles imageList) {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "Tools\\Book\\copy"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "ImageBook"));

                string fileList = "";
                imageList.Files.ForEach(file => {
                    if (file.FileArray != null) {
                        FileOperations.ByteArrayToFile(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "ImageBook\\pages\\", (string)DataOperations.RemoveWhitespace(file.Name)), DataOperations.GetByteArrayFrom64Encode(file.FileArray));
                        fileList += "<div style=\"background-image:url(pages/" + DataOperations.RemoveWhitespace(file.Name) + ");\"></div>";
                    }
                });

                string indexFile = System.IO.File.ReadAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "ImageBook", "index.html"))
                    .Replace("IMAGEDATA", fileList);

                System.IO.File.WriteAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "ImageBook", "index.html"), indexFile);
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "ImageBook"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "ImageBook.zip"));

                return Ok(new { genRecord = 0, message = DbOperations.DBTranslate("ImageBookWasGenerated", "en") });
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetGeneratedImageBook")]
        public async Task<IActionResult> GetGeneratedImageBook() {
            try {
                byte[] easyGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "ImageBook.zip"));

                if (easyGalleryPackage != null) { return File(easyGalleryPackage, "application/x-zip-compressed", "ImageBook.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        /// <summary>
        /// MedialPresentation from Images Generator
        /// </summary>
        /// <param name="imageList">The image list.</param>
        /// <returns></returns>
        [Authorize]
        [HttpPost("/Generators/GenerateMedialPresentation")]
        [Consumes("application/json")]
        public IActionResult GenerateMedialPresentation([FromBody] UploadGeneratorFiles imageList) {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "Tools\\Presentation\\copy"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MedialPresentation"));

                string fileList = "";
                imageList.Files.ForEach(file => {
                    if (file.FileArray != null) {
                        FileOperations.ByteArrayToFile(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MedialPresentation\\images\\", (string)DataOperations.RemoveWhitespace(file.Name)), DataOperations.GetByteArrayFrom64Encode(file.FileArray));
                        fileList += "<section data-background-transition=\"zoom\" data-autoslide=\"0\" data-background=\"rgba(30, 114, 195, 0.35)\" class=\"author\">\r\n                <section data-transition=\"slide\">\r\n                    <div class=\"black-bg fade-up\" style=\"box-shadow: 5px 10px #888888;border-radius: 20px;transform: scale(0.8);\">\r\n                        <img class=\"\" src=\"./images/" + DataOperations.RemoveWhitespace(file.Name) + "\" width=\"100%\" />\r\n                    </div>\r\n                </section>\r\n            </section>\r\n";
                    }
                });

                string indexFile = System.IO.File.ReadAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MedialPresentation", "index.html"))
                    .Replace("AUTODATA", fileList);

                System.IO.File.WriteAllText(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MedialPresentation", "index.html"), indexFile);
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MedialPresentation"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MedialPresentation.zip"));


                return Ok(new { genRecord = 0, message = DbOperations.DBTranslate("MedialPresentationWasGenerated", "en") });
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetGeneratedMedialPresentation")]
        public async Task<IActionResult> GetGeneratedMedialPresentation() {
            try {
                byte[] easyGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MedialPresentation.zip"));

                if (easyGalleryPackage != null) { return File(easyGalleryPackage, "application/x-zip-compressed", "MedialPresentation.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetSystemDesktop")]
        public async Task<IActionResult> GetSystemDesktop() {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "Tools\\SystemDesktop"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "SystemDesktop"));
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "SystemDesktop"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "SystemDesktop.zip"));

                byte[] easyGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "SystemDesktop.zip"));

                if (easyGalleryPackage != null) { return File(easyGalleryPackage, "application/x-zip-compressed", "SystemDesktop.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetSystemToolDesktop")]
        public async Task<IActionResult> GetSystemToolDesktop() {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "Tools\\SystemToolDesktop"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "SystemToolDesktop"));
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "SystemToolDesktop"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "SystemToolDesktop.zip"));

                byte[] easyGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "SystemToolDesktop.zip"));

                if (easyGalleryPackage != null) { return File(easyGalleryPackage, MimeTypes.GetMimeType("SystemToolDesktop.zip"), "SystemToolDesktop.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetAdminDesktop")]
        public async Task<IActionResult> GetAdminDesktop() {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "Tools\\AdminDesktop"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "AdminDesktop"));
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "AdminDesktop"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "AdminDesktop.zip"));

                byte[] easyGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "AdminDesktop.zip"));

                if (easyGalleryPackage != null) { return File(easyGalleryPackage, MimeTypes.GetMimeType("AdminDesktop.zip"), "AdminDesktop.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetMoreEffects")]
        public async Task<IActionResult> GetMoreEffects() {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "server\\EASYSYSTEMBuilder_Downloads\\Metro4DevHelp\\Metro4Example"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MoreEffects"));
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MoreEffects"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MoreEffects.zip"));

                byte[] easyGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MoreEffects.zip"));

                if (easyGalleryPackage != null) { return File(easyGalleryPackage, MimeTypes.GetMimeType("MoreEffects.zip"), "MoreEffects.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetMdViewer")]
        public async Task<IActionResult> GetMdViewer() {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "Tools\\MDViewer"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdViewer"));
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdViewer"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdViewer.zip"));

                byte[] easyGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MdViewer.zip"));

                if (easyGalleryPackage != null) { return File(easyGalleryPackage, MimeTypes.GetMimeType("MdViewer.zip"), "MdViewer.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetPdfWebViewer")]
        public async Task<IActionResult> GetPdfWebViewer() {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "Tools\\PdfViewer"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "PdfWebViewer"));
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "PdfWebViewer"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "PdfWebViewer.zip"));

                byte[] easyGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "PdfWebViewer.zip"));

                if (easyGalleryPackage != null) { return File(easyGalleryPackage, "application/x-zip-compressed", "PdfWebViewer.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }

        [Authorize]
        [HttpGet("/Generators/GetMetroPosibilities")]
        public async Task<IActionResult> GetMetroPosibilities() {
            try {
                FileOperations.ClearFolder(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value));
                FileOperations.CopyDirectory(Path.Combine(SrvRuntime.WebRootPath, "server\\EASYSYSTEMBuilder_Downloads\\Metro4DevHelp\\Metro4Example"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MetroPosibilities"));
                ZipFile.CreateFromDirectory(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MetroPosibilities"), Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MetroPosibilities.zip"));

                byte[] easyGalleryPackage = await System.IO.File.ReadAllBytesAsync(Path.Combine(SrvRuntime.UserPath, User.Claims.First(a => a.Issuer != null).Value, "MetroPosibilities.zip"));

                if (easyGalleryPackage != null) { return File(easyGalleryPackage, "application/x-zip-compressed", "MetroPosibilities.zip"); }
            } catch { }
            return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") });
        }
    }
}