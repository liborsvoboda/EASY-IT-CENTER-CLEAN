using MimeKit;
using Snickler.RSSCore.Models;
using Snickler.RSSCore.Providers;
using System.ServiceModel.Syndication;
using System.Xml;

namespace EasyITCenter.Controllers {

    internal static class RSSLoad {

        /// <summary>
        /// Load RSS Feed
        /// </summary>
        /// <param name="rssUrl"></param>
        /// <returns></returns>
        public static IEnumerable<SyndicationItem> GetRssFeed(string rssUrl) {
            var reader = XmlReader.Create(rssUrl);
            var feed = SyndicationFeed.Load(reader);
            var posts = feed.Items;
            return posts;
        }

        internal static IEnumerable<RssPost> GetItemRssList()
        {
            var posts = new List<RssPost>();
            try
            {
                List<BasicItemList> data;
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions
                {
                    IsolationLevel = IsolationLevel.ReadUncommitted
                })) { data = new EasyITCenterContext().BasicItemLists.OrderBy(a => a.Name).ToList(); }

                data.ForEach(item => {
                    posts.Add(new RssPost()
                    {
                        Title = item.Name,
                        UrlSlug = item.PartNumber,
                        Description = item.Description ?? "",
                        CreatedDate = item.TimeStamp
                    });
                });
            }
            catch (Exception ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(ex) }); }
            return posts;
        }
    }

    /// <summary>
    /// RSS Provider
    /// </summary>
    public class SomeRSSProvider : IRSSProvider {

        public Task<IList<RSSItem>> RetrieveSyndicationItems() {
            IList<RSSItem> syndicationList = new List<RSSItem>();
            var synd1 = new RSSItem() {
                Title = DataOperations.RemoveDiacritism("IT Řešení v nejmodenější podobě jaké jinde Nenajdete"),
                PermaLink = new Uri(DbOperations.GetServerParameterLists("ServerPublicUrl").Value),
                LinkUri = new Uri(DbOperations.GetServerParameterLists("ServerPublicUrl").Value),
                LastUpdated = DateTime.Now,
                PublishDate = DateTime.Now,
                CommentsUri = new Uri(DbOperations.GetServerParameterLists("ServerPublicUrl").Value),
                Content = "Novinky",
                FeaturedImage = new Uri(DbOperations.GetServerParameterLists("ServerPublicUrl").Value + "/logo")
            };
            syndicationList.Add(synd1);
            return Task.FromResult(syndicationList);
        }
    }

    /// <summary>
    /// Server Restart Api for Remote Control
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [ApiController]
    [Route("rss", Name = "rss")]
    [Route("rss.xml", Name = "rssxml")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class RssService : ControllerBase {
        private readonly ILogger logger;

        public RssService(ILogger<RssService> _logger) => logger = _logger;

        public ActionResult Index() {
            try {
                if (bool.Parse(DbOperations.GetServerParameterLists("WebRSSFeedsEnabled").Value)) {
                    var feed = new SyndicationFeed("Nazev", "Popisek", new Uri(DbOperations.GetServerParameterLists("ServerPublicUrl").Value), "RSSUrl", DateTime.Now);
                    feed.Copyright = new TextSyndicationContent($"{DateTime.Now.Year} Libor Svoboda");
                    var items = new List<SyndicationItem>();
                    var postings = RSSLoad.GetItemRssList();
                    foreach (var item in postings) {
                        var postUrl = Url.Action("Produkty", "Vyvoj", new { id = item.UrlSlug }, HttpContext.Request.Scheme);
                        var title = item.Title;
                        var description = item.Description;
                        items.Add(new SyndicationItem(title, description, new Uri(postUrl), item.UrlSlug, item.CreatedDate));
                    }
                    feed.Items = items;
                    var settings = new XmlWriterSettings {
                        Encoding = Encoding.UTF8,
                        NewLineHandling = NewLineHandling.Entitize,
                        NewLineOnAttributes = true,
                        Indent = true
                    };
                    using (var stream = new MemoryStream()) {
                        using (var xmlWriter = XmlWriter.Create(stream, settings)) {
                            var rssFormatter = new Rss20FeedFormatter(feed, false);
                            rssFormatter.WriteTo(xmlWriter);
                            xmlWriter.Flush();
                        }
                        return File(stream.ToArray(), MimeTypes.GetMimeType("rss.xml"), "rss.xml");
                    }
                }
                else { return BadRequest(); }
            } catch (Exception ex) { CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(ex) }); }
            return BadRequest();
        }
    }
}