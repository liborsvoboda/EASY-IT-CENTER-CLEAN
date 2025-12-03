using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Playwright;
using PuppeteerSharp;
using ScrapySharp.Network;
using Westwind.AspNetCore.Markdown;


namespace EasyITCenter.Controllers {


    public class HtmlScreenShotReq {
        public string Url { get; set; } = null;
        public string SavePath { get; set; } = null;
    }



    [AllowAnonymous]
    [Route("/DownloadService")]
    public class DownloadService : Controller {


        /// <summary>
        /// Html From URL Downloader Return InnerHtml
        /// 
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        [HttpPost("/DownloadService/DownloadHtmlPage")]
        [Consumes("application/json")]
        public async Task<IActionResult> DownloadHtmlPage([FromBody] string url) {

            ScrapingBrowser? browser = new ScrapingBrowser();
            WebPage? resultsPage = await browser.NavigateToPageAsync(new Uri(url));

            return base.Json(new WebClasses.JsonResult() { Result = new { resultsPage.Html.InnerHtml }, Status = DBResult.success.ToString() });
        }



        [HttpPost("/DownloadService/DownloadMarkdownFromUrlToStatic")]
        [Consumes("application/json")]
        public async Task<string> DownloadMarkdownFromUrlToStatic([FromBody] string markdownUrl) {

            string MdAsHtml = await Markdown.ParseFromUrlAsync(markdownUrl, true, false, false);
            return MdAsHtml;
        }



        [HttpPost("/DownloadService/DownloadHtmlScreenShot")]
        [Consumes("application/json")]
        public async Task<IActionResult> DownloadHtmlScreenShot([FromBody] HtmlScreenShotReq htmlScreenShotReq) {

            using var playwright = await Playwright.CreateAsync();
            await using var browser = await playwright.Chromium.LaunchAsync();
            var page = await browser.NewPageAsync();
            await page.GotoAsync(htmlScreenShotReq.Url);
            await page.ScreenshotAsync(new PageScreenshotOptions() { Path = htmlScreenShotReq.SavePath });

            return base.Json(new WebClasses.JsonResult() { Result = String.Empty, Status = DBResult.success.ToString() });
        }



        [HttpPost("/DownloadService/DownloadPdfScreenShot")]
        [Consumes("application/json")]
        public async Task<IActionResult> DownloadPdfScreenShot([FromBody] HtmlScreenShotReq htmlScreenShotReq) {

            var browserFetcher = new BrowserFetcher();
            await browserFetcher.DownloadAsync();
            await using var browser = await Puppeteer.LaunchAsync(new LaunchOptions { Headless = true });
            await using var page = await browser.NewPageAsync();
            await page.GoToAsync(htmlScreenShotReq.Url);

            await page.EvaluateExpressionHandleAsync("document.fonts.ready");
            await page.PdfAsync(htmlScreenShotReq.SavePath);

            return base.Json(new WebClasses.JsonResult() { Result = String.Empty, Status = DBResult.success.ToString() });
        }
    }
}
