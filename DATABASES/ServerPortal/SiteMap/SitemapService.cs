using IdentityModel.Client;
using SimpleMvcSitemap;
using SimpleMvcSitemap.Images;
using SimpleMvcSitemap.News;
using System.Collections.Generic;

namespace EasyITCenter.Controllers {

    /// <summary>
    /// robots.txt routing
    /// </summary>
    /// <seealso cref="Controller"/>
    [Route("robots", Name = "robot")]
    [Route("robots.txt", Name = "robottxt")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class RobotsController : ControllerBase {

        public ActionResult Index() {
            try {
                string data = "";
                if (bool.Parse(DbOperations.GetServerParameterLists("WebRobotTxtFileEnabled").Value)) {
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                        IsolationLevel = IsolationLevel.ReadUncommitted
                    })) { data = new EasyITCenterContext().WebSettingLists.Where(a => a.Key == "WebRobotTxtFile").First().Value; }
                }
                return new ContentResult { Content = data, ContentType = MimeTypes.GetMimeType("robots.txt") };
            } catch (Exception ex) {
                return new ContentResult { Content = DataOperations.GetUserApiErrMessage(ex), ContentType = MimeTypes.GetMimeType("robots.txt") };
            }
        }
    }

    /// <summary>
    /// Sitemap.xml Routing
    /// </summary>
    /// <seealso cref="Controller"/>
    [Route("sitemap", Name = "sitemap")]
    [Route("sitemap.xml", Name = "sitemapxml")]
    [Route("sitemap_index.xml", Name = "sitemapindex")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class SitemapController : ControllerBase {
        private readonly ISitemapProvider sitemapProvider;
        private SitemapDataBuilder dataBuilder;

        public SitemapController(ISitemapProvider sitemapProvider) {
            this.sitemapProvider = sitemapProvider;
            dataBuilder = new SitemapDataBuilder();
        }

        /// <summary>
        /// SiteMap File Generator
        /// </summary>
        /// <returns></returns>
        public ActionResult Index() {
            return sitemapProvider.CreateSitemapIndex(new SitemapIndexModel(new List<SitemapIndexNode>
            {
                !bool.Parse(DbOperations.GetServerParameterLists("WebSitemapFileEnabled").Value) ? null : 

                new SitemapIndexNode(Url.Action("sitemap/WebDocPortal")),
                new SitemapIndexNode(Url.Action("sitemap/DeveloperNews")),
                new SitemapIndexNode(Url.Action("sitemap/News")),
                new SitemapIndexNode(Url.Action("sitemap/Images")),
                new SitemapIndexNode(Url.Action("sitemap/WebPortal")),

                //TODO Links - Tools
                //TODO Modules
                //TODO Message Modul
                //GitHuB

                //new SitemapIndexNode(Url.Action("Videos")),
                //new SitemapIndexNode(Url.Action("Translation")),
                //new SitemapIndexNode(Url.Action("StyleSheet")),
                //new SitemapIndexNode(Url.Action("Huge")),
            }));
        }


        /// <summary>
        /// Static Web Portal
        /// </summary>
        /// <returns></returns>
        [Route("WebPortal")]
        public ActionResult WebPortal() {
            List<WebMenuList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted }))
                { data = new EasyITCenterContext().WebMenuLists.Where(a => a.Active && a.Group.Active).OrderBy(a=>a.Group.Sequence).ThenBy(a=>a.Sequence).ToList(); }
            List<SitemapNode> webpagesUrls = new();

            data.ForEach(webMenu => { webpagesUrls.Add(
                new SitemapNode(DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/" + webMenu.Id + "-" + webMenu.Name.Replace(" ", string.Empty)) { LastModificationDate = DateTime.UtcNow.ToLocalTime(),
                Url = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/" + webMenu.Id + "-" + webMenu.Name.Replace(" ", string.Empty), ChangeFrequency = ChangeFrequency.Weekly, Priority = 0.8M }); });

            return sitemapProvider.CreateSitemap(new SitemapModel(webpagesUrls));
        }


        /// <summary>
        /// Web Portals 
        /// </summary>
        /// <returns></returns>
        [Route("WebDocPortal")]
        public ActionResult WebDocPortals() {
            List<SitemapNode> webpagesUrls = new();

            webpagesUrls.Add(
                new SitemapNode("EIC&ESB Solution Documentation Portal") {
                    LastModificationDate = DateTime.UtcNow.ToLocalTime(),
                    Url = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/EIC&ESBdocs/CodeDocs/",
                    News = new SitemapNews(new NewsPublication("EIC&ESB IT Groupware Solution Documentation Portal", "en"), DateTimeOffset.UtcNow.DateTime, "EasyITcenter & EasySYSTEMbuilder IT Groupware Solution Documentation Portal"),

                    ChangeFrequency = ChangeFrequency.Weekly,
                    Priority = 0.8M
                });
            webpagesUrls.Add(
                new SitemapNode("EIC&ESB Inteligentni Web Dokumentace") {
                    LastModificationDate = DateTime.UtcNow.ToLocalTime(),
                    Url = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/server-doc/md-book/book/",
                    News = new SitemapNews(new NewsPublication("EIC&ESB Inteligentni Web Dokumentace", "cs"), DateTimeOffset.UtcNow.DateTime, "EasyITcenter & EasySYSTEMbuilder Inteligentni Web Dokumentace"),
                    ChangeFrequency = ChangeFrequency.Weekly,
                    Priority = 0.8M
                }
            );
            webpagesUrls.Add(
                new SitemapNode("EIC&ESB Visual Studio Online Code Browser") {
                    LastModificationDate = DateTime.UtcNow.ToLocalTime(),
                    Url = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/EiC&ESBCodeBrowser/index/index.html",
                    News = new SitemapNews(new NewsPublication("EIC&ESB Visual Studio Online Code Browser", "en"), DateTimeOffset.UtcNow.DateTime, "EasyITcenter & EasySYSTEMbuilder Visual Studio Online Code Browser"),
                    ChangeFrequency = ChangeFrequency.Weekly,
                    Priority = 0.8M
                }
            );
            webpagesUrls.Add(
                new SitemapNode("EIC&ESB Solution Docs") {
                LastModificationDate = DateTime.UtcNow.ToLocalTime(),
                Url = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/Docs",
                News = new SitemapNews(new NewsPublication("Easy List Viewer Documentation EIC&ESB Solution", "cs"), DateTimeOffset.UtcNow.DateTime, "Easy List Viewer Documentation EasyITcenter & EasySYSTEMbuilder Solution"),
                ChangeFrequency = ChangeFrequency.Weekly,
                Priority = 0.8M
                }
            );
            webpagesUrls.Add(
                new SitemapNode("EIC&ESB Solution YouTube PlayList") {
                    LastModificationDate = DateTime.UtcNow.ToLocalTime(),
                    Url = "https://www.youtube.com/embed/6ThVBv_diGo?list=PLmE7gP9LTBimNJQ444ypG8HVce23fa2Hb",
                    News = new SitemapNews(new NewsPublication("EIC&ESB Solution YouTube PlayList", "en"), DateTimeOffset.UtcNow.DateTime, "EasyITcenter & EasySYSTEMbuilder Solution YouTube PlayList"),
                    ChangeFrequency = ChangeFrequency.Weekly,
                    Priority = 0.8M
                }
            );
            webpagesUrls.Add(
                new SitemapNode("EIC&ESB Solution FaceBook") {
                    LastModificationDate = DateTime.UtcNow.ToLocalTime(),
                    Url = "https://www.facebook.com/GroupWareSolution",
                    News = new SitemapNews(new NewsPublication("EIC&ESB Solution FaceBook", "en"), DateTimeOffset.UtcNow.DateTime, "EasyITcenter & EasySYSTEMbuilder Solution FaceBook"),
                    ChangeFrequency = ChangeFrequency.Weekly,
                    Priority = 0.8M
                }
            );
            return sitemapProvider.CreateSitemap(new SitemapModel(webpagesUrls));

        }


        /// <summary>
        /// Get All Images From Static Documentation 
        /// In EIC&ESB Nodes
        /// </summary>
        /// <returns></returns>
        [Route("Images")]
        public ActionResult Images() {
            List<SitemapNode> imageNodes = new();

            List<SitemapImage> imageList = new List<SitemapImage>();
            List<string> staticImages = FileOperations.GetPathFiles(Path.Combine(SrvRuntime.WebRootPath) + FileOperations.ConvertSystemFilePathFromUrl("/EIC&ESBdocs/EIC-Gallery/img"), "*.png", SearchOption.TopDirectoryOnly);
            staticImages.ForEach(image => {
                imageList.Add(
                    new SitemapImage(DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/EIC&ESBdocs/EIC-Gallery/img/" + Path.GetFileName(image)) {
                        Caption = "EasyITCenter Solution", Location = "Solution Server Online", Title = Path.GetFileName(image),
                        Url = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/EIC&ESBdocs/EIC-Gallery/img/" + Path.GetFileName(image)
                    });
            });


            imageNodes.Add(new SitemapNode(DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/EIC&ESBdocs/EIC-Gallery/") { 
                Images = imageList, Url = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/EIC&ESBdocs/EIC-Gallery/", 
                ChangeFrequency = ChangeFrequency.Weekly,Priority = 0.8M
            });

            imageList = new List<SitemapImage>();
            staticImages = FileOperations.GetPathFiles(Path.Combine(SrvRuntime.WebRootPath) + FileOperations.ConvertSystemFilePathFromUrl("/EIC&ESBdocs/ESB-Gallery/img"), "*.png", SearchOption.TopDirectoryOnly);
            staticImages.ForEach(image => {
                imageList.Add(
                    new SitemapImage(DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/EIC&ESBdocs/ESB-Gallery/img/" + Path.GetFileName(image)) {
                        Caption = "EasySYSTEMBuilder Solution", Location = "Solution Server Online", Title = Path.GetFileName(image),
                        Url = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/EIC&ESBdocs/ESB-Gallery/img/" + Path.GetFileName(image)
                    });
            });

            imageNodes.Add(new SitemapNode(DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/EIC&ESBdocs/ESB-Gallery/") {
                Images = imageList,
                Url = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/EIC&ESBdocs/ESB-Gallery/",
                ChangeFrequency = ChangeFrequency.Weekly,
                Priority = 0.8M
            });

            return sitemapProvider.CreateSitemap(new SitemapModel(imageNodes));
        }



        //[Route("videos")]
        //public ActionResult Videos() {
        //    return sitemapProvider.CreateSitemap(new SitemapModel(new List<SitemapNode>
        //    {
        //        dataBuilder.CreateSitemapNodeWithVideoRequiredProperties(),
        //        dataBuilder.CreateSitemapNodeWithVideoAllProperties()
        //    }));
        //}

        [Route("DeveloperNews")]
        public ActionResult DeveloperNews() {
            //string requestUrl = $"{Request.Scheme}://{Request.Host.Value}/";
            List<SitemapNode> newsList = new();

            List<WebDeveloperNewsList> data = new();
            if (bool.Parse(DbOperations.GetServerParameterLists("WebRobotTxtFileEnabled").Value)) {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                    IsolationLevel = IsolationLevel.ReadUncommitted
                })) { data = new EasyITCenterContext().WebDeveloperNewsLists.Where(a => a.Active).OrderByDescending(a => a.TimeStamp).ToList(); }
            }

            data.ForEach(news => {
                newsList.Add(new SitemapNode(DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/DeveloperNews") {
                    Url = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/DeveloperNews",
                    LastModificationDate = news.TimeStamp,
                    News = new SitemapNews(new NewsPublication(news.Title, "cs"), news.TimeStamp, news.Title) {
                        PublicationDate = news.TimeStamp,
                        Genres = "IT, Groupware, Solution, Central, Global, Universal, System, Web, Pages, Portal, Touch, Panels, MultiLanguage, MultiServer,Server, MultiSystem, Business",
                        Title = news.Title,
                        Keywords = "IT, Groupware, Solution, Central, Global, Universal, System, Web, Pages, Portal, Touch, Panels, MultiLanguage, MultiServer,Server, MultiSystem, Business"
                    }
                });
            });

            return sitemapProvider.CreateSitemap(new SitemapModel(newsList));
        }



        [Route("News")]
        public ActionResult News() {
            //string requestUrl = $"{Request.Scheme}://{Request.Host.Value}/";
            List<SitemapNode> newsList = new();

            List<SolutionMessageModuleList> data = new();
            if (bool.Parse(DbOperations.GetServerParameterLists("WebRobotTxtFileEnabled").Value)) {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                    IsolationLevel = IsolationLevel.ReadUncommitted
                })) { data = new EasyITCenterContext().SolutionMessageModuleLists.Where(a => a.MessageType.Name == "newsletter" && a.Published && !a.Archived).OrderByDescending(a => a.TimeStamp).ToList(); }
            }

            data.ForEach(news => {
                newsList.Add(new SitemapNode(DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/CommercialNews") {
                    Url = DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/CommercialNews",
                    LastModificationDate = news.TimeStamp,
                    News = new SitemapNews(new NewsPublication(news.Subject, "cs"), news.TimeStamp, news.Subject) {
                        PublicationDate = news.TimeStamp,
                        Genres = "IT, Groupware, Solution, Central, Global, Universal, System, Web, Pages, Portal, Touch, Panels, MultiLanguage, MultiServer,Server, MultiSystem, Business",
                        Title = news.Subject,
                        Keywords = "IT, Groupware, Solution, Central, Global, Universal, System, Web, Pages, Portal, Touch, Panels, MultiLanguage, MultiServer,Server, MultiSystem, Business"
                    }
                });
            });

            return sitemapProvider.CreateSitemap(new SitemapModel(newsList));
        }

        //[Route("translation")]
        //public ActionResult Translation() {
        //    return sitemapProvider.CreateSitemap(dataBuilder.CreateSitemapWithTranslations());
        //}

        //[Route("stylesheet")]
        //public ActionResult StyleSheet() {
        //    return sitemapProvider.CreateSitemap(dataBuilder.CreateSitemapWithSingleStyleSheet());
        //}

        //[Route("huge")]
        //public ActionResult Huge() {
        //    return sitemapProvider.CreateSitemap(dataBuilder.CreateHugeSitemap());
        //}

        //[Route("sitemapcategories")]
        //public ActionResult Categories()
        //{
        //    return _sitemapProvider.CreateSitemap(_builder.BuildSitemapModel());
        //}

        //[Route("sitemapbrands")]
        //public ActionResult Brands()
        //{
        //    return _sitemapProvider.CreateSitemap(_builder.BuildSitemapModel());
        //}

        //public ActionResult Products(int? currentPage)
        //{
        //    IQueryable<Product> dataSource = _products.Where(item => item.Status == ProductStatus.Active);
        //    ProductSitemapIndexConfiguration configuration = new ProductSitemapIndexConfiguration(Url, currentPage);

        //    return _sitemapProvider.CreateSitemap(dataSource, configuration);
        //}

        //public ActionResult StaticPages(int? id)
        //{
        //    IQueryable<string> urls = new List<string> { "/1", "/1", "/1", "/1", "/1" }.AsQueryable();
        //    return _sitemapProvider.CreateSitemap(urls, new SitemapIndexConfiguration(id, Url));
        //}
    }
}