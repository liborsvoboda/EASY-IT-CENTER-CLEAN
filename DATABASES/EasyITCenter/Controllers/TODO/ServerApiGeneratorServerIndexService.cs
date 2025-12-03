using Markdig.Renderers.Docx;
using Markdig;
using Microsoft.Extensions.Logging.Abstractions;
using Pek.Markdig.HighlightJs;
using Markdown = Westwind.AspNetCore.Markdown.Markdown;
using OpenGraphNet;
using MimeKit;



namespace EasyITCenter.Controllers {


    /// <summary>
    ///  Server Index Files Generators
    /// </summary>
    [Authorize]
    [ApiController]
    [Route("ServerApi")]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class ServerApiGeneratorServerIndexService : ControllerBase {


        private readonly Microsoft.AspNetCore.Hosting.IWebHostEnvironment _hostingEnvironment;
        public ServerApiGeneratorServerIndexService(Microsoft.AspNetCore.Hosting.IWebHostEnvironment hostingEnvironment) {
            _hostingEnvironment = hostingEnvironment;
        }



        /// <summary>
        /// WebFile Generators Request Dataset
        /// </summary>
        public class MDGeneratorCreateIndexRequest {
            public string WebRootFilePath { get; set; }
            public string IndexWebRootSubFolderPathName { get; set; } = null;
            public string FromType { get; set; }
            public string ToType { get; set; }
            public bool ScanRootOnly { get; set; }
            public bool IndexOnly { get; set; }
            public bool RewriteAllowed { get; set; }
            public string ServerLanguage { get; set; } = "cz";
            public bool IndexInFrameList { get; set; } = false;
            public string genHtmlIndexFileSuffix { get; set; }
            public bool FromSuffixOnly { get; set; } = false;
        }
        /// <summary>
        /// WebFile Generator
        ///Convert MD->Html,Convert Html->Md,
        ///Convert List Any FileType List Any FileType,
        ///Convert MD->Docx,List<Md>->List<Docx>
        ///Generate List<Md>->Index.Md,Generate List<Md>->Index.Html,Generate List<Html>->Index.Html
        ///TODO Ošetřit aby Mohli menit soubory jen ve svem ulozisti
        ///TODO Udelat Aendu Dynamicke Registace Trid Pro Dynamicka API a tam se zadaji file Extensions
        ///TODO VKladat Static DB Soubory 
        ///TODO Vracet jako Zip
        /// //TODO Generate Full Content to One Page For  Direct Search
        /// Is Subfolder for WebrootFilePath AS multiple RootIndex
        /// WebRootFilePath set path which path diferrent wil be written,
        /// IndexWebRootSubFolderPathName set path where starting procesing,
        /// FromType = set the extension of processing files , exmaple html,md
        /// ToType = set convert to type, for easch file setting use, must be fill, 
        /// ScanRootOnly = Set if scan only selected root path - no subfolders,
        /// IndexOnly = Set to genedate only Index List Or Tranform each File,
        /// RewriteAllowed set if rewrite existing files on save,
        /// IndexInFrameList set Frame part for generate onject, no generate link list
        /// genHtmlIndexFileSuffix Set if Set the sufix example suffix_index.html
        /// fromSuffixOnly = OPnly from files contain This string
        /// </summary>
        /// <param name="webfilesrequest"></param>
        /// <returns></returns>
        [HttpPost("/ServerApi/GeneratorServerServices/GenerateDocsFile")]
        [Consumes("application/json")] 
        public async Task<IActionResult> GenerateDocsFile(MDGeneratorCreateIndexRequest webfilesrequest) {
            try {

                if (EasyITCenterContextExtension.IsAdmin()) {
                    string resultMessage = DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage);

                    List<string> indexRootList = new List<string>();

                    //Corection Paths
                    webfilesrequest.WebRootFilePath = !webfilesrequest.WebRootFilePath.EndsWith("/") ? $"{webfilesrequest.WebRootFilePath}/" : webfilesrequest.WebRootFilePath;
                    webfilesrequest.WebRootFilePath = !string.IsNullOrWhiteSpace(webfilesrequest.IndexWebRootSubFolderPathName) && ( !webfilesrequest.WebRootFilePath.EndsWith($"{webfilesrequest.IndexWebRootSubFolderPathName}/") ) ? $"{webfilesrequest.WebRootFilePath}{webfilesrequest.IndexWebRootSubFolderPathName}/" : webfilesrequest.WebRootFilePath;

                    if (string.IsNullOrWhiteSpace(webfilesrequest.IndexWebRootSubFolderPathName)) { indexRootList.Add("");
                    } else {
                        var folderList = System.IO.Directory.GetDirectories(Path.Combine(SrvRuntime.WebRootPath) + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath));
                        folderList.ToList().ForEach(folder => indexRootList.Add(System.IO.Path.GetFullPath(folder).Split("\\").Last() + "\\"));
                    }


                    indexRootList.ForEach(rootIndex => {
                        //Modify WebRoot For Each Index
                        webfilesrequest.WebRootFilePath = $"{webfilesrequest.WebRootFilePath.Split(webfilesrequest.IndexWebRootSubFolderPathName)[0]}{webfilesrequest.IndexWebRootSubFolderPathName}{( !string.IsNullOrWhiteSpace(webfilesrequest.IndexWebRootSubFolderPathName) ? "\\" : "" )}" + rootIndex;
                        List<string> filelist = FileOperations.GetPathFiles(Path.Combine(SrvRuntime.WebRootPath) + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath),
                            $"*.{webfilesrequest.FromType.ToString().ToLower()}", webfilesrequest.ScanRootOnly ? SearchOption.TopDirectoryOnly : SearchOption.AllDirectories
                        );

                        if (filelist.Count == 0) {
                            resultMessage += $"For root Index {rootIndex} NoFiles Found{Environment.NewLine}";
                        } else {

                            //Generate IndexFile For Any File Type
                            if (webfilesrequest.IndexOnly) {
                                string generatedFile = webfilesrequest.ToType.ToLower() == SupportGenFileTypes.Md.ToString().ToLower() ? Environment.NewLine + $"# Index {webfilesrequest.WebRootFilePath}" + Environment.NewLine : $"<H1>Index {webfilesrequest.WebRootFilePath}</H1><span>" + Environment.NewLine;
                                if (!webfilesrequest.RewriteAllowed && FileOperations.CheckFile(webfilesrequest.WebRootFilePath + $"index.{webfilesrequest.ToType.ToString()}")) {
                                    resultMessage = resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage) ? $"Failed on Exist File: index.{webfilesrequest.ToType.ToString()}" : resultMessage + $"Failed on Exist File index.{webfilesrequest.ToType.ToString()}";
                                } else {
                                    filelist.AsEnumerable().Where(a => ( webfilesrequest.FromSuffixOnly && a.Contains(webfilesrequest.genHtmlIndexFileSuffix) ) || !webfilesrequest.FromSuffixOnly).ToList().ForEach(
                                        file => {
                                            generatedFile += webfilesrequest.ToType.ToLower() == SupportGenFileTypes.Md.ToString().ToLower() ? $"[{Path.GetFileNameWithoutExtension(file)}]({webfilesrequest.WebRootFilePath + file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1]})" + Environment.NewLine :
                                            webfilesrequest.IndexInFrameList ?

                                        //GENERATE TILE ARRAY
                                        "" : $"{Environment.NewLine}<div data-role='tile' onclick=ChangeSource('.{webfilesrequest.WebRootFilePath + file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1]}')>{Environment.NewLine}<span class='mif-github icon'></span>{Environment.NewLine}<span class='branding-bar'>{Path.GetFileNameWithoutExtension(file)}</span>{Environment.NewLine}</div>{Environment.NewLine}{Environment.NewLine}";

                                            /*
                                                    $"<span style='margin:10px'><iframe src='{webfilesrequest.WebRootFilePath + file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1]}' width='600px' height='400px' onclick=window.open('{webfilesrequest.WebRootFilePath + file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1]}','_blank') >{Path.GetDirectoryName(file)?.Split(Path.DirectorySeparatorChar).Last()}</iframe></span>" + Environment.NewLine
                                                    : $"<p><a  style='font-size:36px;' href='{webfilesrequest.WebRootFilePath + file.Split(Path.GetDirectoryName(webfilesrequest.WebRootFilePath)?.Split(Path.DirectorySeparatorChar).Last())[1]}' target='blank'>{Path.GetDirectoryName(file)?.Split(Path.DirectorySeparatorChar).Last()}</a></p>" + Environment.NewLine;
                                                    */
                                        });
                                    if (webfilesrequest.ToType.ToLower() == SupportGenFileTypes.Md.ToString().ToLower()) { generatedFile = DataOperations.MarkDownLineEndSpacesResolve(generatedFile); }
                                    FileOperations.WriteToFile(Path.Combine(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath), $"index{webfilesrequest.genHtmlIndexFileSuffix}.{webfilesrequest.ToType.ToString()}"), generatedFile);
                                }

                            } else if (!webfilesrequest.IndexOnly && webfilesrequest.FromType.ToLower() == SupportGenFileTypes.Md.ToString().ToLower() && webfilesrequest.ToType.ToLower() == SupportGenFileTypes.Html.ToString().ToLower()) {
                                //Generate All Html Files 
                                filelist.ForEach(file => {
                                    if (!webfilesrequest.RewriteAllowed && FileOperations.CheckFile(file.Replace(file.Split(".").Last(), $".{webfilesrequest.ToType.ToString()}"))) {
                                        resultMessage = resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage) ? $"Fail on Exist File {file}" : resultMessage + $"Fail on Exist File {file}";
                                    } else {
                                        try { FileOperations.WriteToFile(Path.Combine(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath), $"{Path.GetFileNameWithoutExtension(file)}.{webfilesrequest.ToType.ToString()}"), Markdown.ParseHtmlString(System.IO.File.ReadAllText(file), false, false, false).Value?.ToString()); } catch { }
                                    }
                                });

                            } else if (!webfilesrequest.IndexOnly && webfilesrequest.FromType.ToLower() == SupportGenFileTypes.Html.ToString().ToLower() && webfilesrequest.ToType.ToLower() == SupportGenFileTypes.Md.ToString().ToLower()) {
                                //Generate All Md Files 
                                filelist.ForEach(file => {
                                    if (!webfilesrequest.RewriteAllowed && FileOperations.CheckFile(file.Replace(file.Split(".").Last(), $".{webfilesrequest.ToType.ToString()}"))) {
                                        resultMessage = resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage) ? $"Fail on Exist File {file}" : resultMessage + $"Fail on Exist File {file}";
                                    } else {
                                        FileOperations.WriteToFile(Path.Combine(SrvRuntime.WebRootPath + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath), $"{Path.GetFileNameWithoutExtension(file)}.{webfilesrequest.ToType.ToString()}"), new ReverseMarkdown.Converter().Convert(System.IO.File.ReadAllText(file)));
                                    }
                                });
                            } else if (!webfilesrequest.IndexOnly && webfilesrequest.FromType.ToLower() == SupportGenFileTypes.Md.ToString().ToLower() && webfilesrequest.ToType.ToLower() == SupportGenFileTypes.Docx.ToString().ToLower()) {
                                //Generate All Docx Files 
                                var document = DocxTemplateHelper.Standard;
                                var styles = new DocumentStyles();
                                var renderer = new DocxDocumentRenderer(document, styles, NullLogger<DocxDocumentRenderer>.Instance);
                                var pipeline = new MarkdownPipelineBuilder().UseEmphasisExtras().UseAbbreviations().UseAdvancedExtensions().UseBootstrap()
                                    .UseDiagrams().UseEmphasisExtras().UseEmojiAndSmiley(true).UseDefinitionLists().UseTaskLists()
                                    .UseSmartyPants().UsePipeTables().UseMediaLinks().UseMathematics().UseListExtras().UseHighlightJs()
                                    .UseGridTables().UseGlobalization().UseGenericAttributes().UseFootnotes().UseFooters().UseSyntaxHighlighting().UseFigures().Build();

                                filelist.ForEach(file => {
                                    if (!webfilesrequest.RewriteAllowed && FileOperations.CheckFile(file.Replace(file.Split(".").Last(), $".{webfilesrequest.ToType.ToString()}"))) {
                                        resultMessage = resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage) ? $"Fail on Exist File {file}" : resultMessage + $"Fail on Exist File {file}";
                                    } else {
                                        try {
                                            object exportedFile = Markdig.Markdown.Convert(System.IO.File.ReadAllText(file), renderer, pipeline);
                                            ((DocxDocumentRenderer)exportedFile).Document.Save();
                                            //((DocxDocumentRenderer)exportedFile).Document.SaveAs(Path.Combine(SrvRuntime.WebRoot_path + FileOperations.ConvertSystemFilePathFromUrl(webfilesrequest.WebRootFilePath), $"{Path.GetFileNameWithoutExtension(file)}.{webfilesrequest.ToType.ToString()}"));
                                        } catch { }
                                    }
                                });

                            } else { resultMessage = DbOperations.DBTranslate("UnsupportedVariant", webfilesrequest.ServerLanguage); }
                        }
                    });

                    if (resultMessage == DbOperations.DBTranslate("ProcessSucessfullyCompleted", webfilesrequest.ServerLanguage)) {
                        return new ContentResult() { Content = resultMessage, StatusCode = StatusCodes.Status200OK };
                    } else { return new ContentResult() { Content = resultMessage, StatusCode = StatusCodes.Status200OK }; }

                    //ZipFile.CreateFromDirectory(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages"), Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));
                    //var zipData = await System.IO.File.ReadAllBytesAsync(Path.Combine(ServerRuntimeData.Startup_path, "Export", "Webpages.zip"));
                    //if (data != null) { return File(zipData, "application/x-zip-compressed", "Webpages.zip"); }
                    //else { return BadRequest(new { message = DbOperations.DBTranslate("BadRequest", "en") }); }
                } else { return new ContentResult() { Content = DbOperations.DBTranslate("YouDoesNotHaveRights", webfilesrequest.ServerLanguage), StatusCode = StatusCodes.Status200OK }; }
            } catch (Exception ex) {
                return new ContentResult() { Content = DataOperations.GetErrMsg(ex), StatusCode = StatusCodes.Status200OK };
            }
        }




 
        public class WebUrlRequest {
            public string Url { get; set; }
        }
        /// <summary>
        /// Documentation https://ogp.me/
        /// Tool For Extend Loaded Html By Add Custom Metadata by Format OpenGraph
        /// TODO Implement Inserting Metadata or How To Use
        /// Its Description Content as Metadata for Facebokk etc
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost("/ServerApi/GeneratorServerServices/ConfigureHtmlInfoHeader")]
        [Consumes("application/json")]
        public async Task<IActionResult> ConfigureHtmlInfoHeader(WebUrlRequest request) {
            try {
                OpenGraph graph = await OpenGraph.ParseUrlAsync(request.Url);
                var response = File(Encoding.UTF8.GetBytes(graph.OriginalHtml), MimeTypes.GetMimeType("index.html"), "index.html");
                return response;
            } catch { }
            return null;
        }
    }
}