
Gs.Functions.GenerateUUID = function () { 
    var d = new Date().getTime();
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

Gs.Functions.RemoveElement = function (elementId) {
    let element = document.getElementById(elementId);
    if (element != null) { element.remove(); }
}

//TODO odebrat # z elementId
Gs.Functions.AddClass = function (elementId,clasName) {
    $("#" + elementId).addClass(clasName); //"disabled"
}

Gs.Functions.RemoveClass = function (elementId, clasName) {
    $("#" + elementId).removeClass(clasName); //"disabled"
}

Gs.Functions.HtmlDecode = function (input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

Gs.Functions.FileReaderToImageData = async function (n) {
    const t = new FileReader; return await new Promise((t, i) => {
        const r = new FileReader; r.onloadend = () => t(r.result); r.onerror = i;
        console.log("files", JSON.parse(JSON.stringify(files)));
        r.readAsDataURL(n[0]);
    })
}

Gs.Functions.Str2bytes = function (str) {
    let bytes = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes;
}

Gs.Functions.PreloadImage = function (src) {
    let img = new Image();
    img.src = src;
}

Gs.Functions.BindYouTubePlay = function (img) {
    var a = img.parent();
    var p = a.parent();
    if (p[0] && p[0].tagName === 'P') {
        var id = splitOnFirst(splitOnLast(a.attr('href'), '/')[1], '?')[0];
        var width = Math.floor(img[0].offsetWidth / 2 - 43);
        var height = Math.floor(img[0].offsetHeight / 2 - 31);
        var html = `<i class="youtube-play" style="width:${img[0].offsetWidth}px;height:${img[0].offsetHeight}px;background-position:${width}px ${height}px" onclick="playVideo(this,'${id}')"></i>`;
        p.prepend(html);
    }
}


Gs.Functions.BindYouTubeImages = function () {
    preloadImage('/images/youtube-play-hover.png');
    $("a[href^='https://youtu.be/']>img").each(function () {
        if (this.complete) {
            Gs.Functions.BindYouTubePlay($(this));
        } else {
            this.onload = function () { Gs.Functions.BindYouTubePlay($(this)); }
        }
    });
}

Gs.Functions.Video = function (url) {
    return '<iframe style="width:100%;min-height:585px" src="' + url + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
}


Gs.Functions.PlayVideo = function (el, id) {
    var url = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
    $(el).parent().html(video(url));
}


// Generate Tables
Gs.Functions.PrintTables = function (tables) {
    let html = "<thead><tr><th>Table List</th></tr></thead>";
    const rows = tables.map(function (table) {
        return `<tr>
            <td>
                <button class="sqlime-link" data-action="showTable" data-arg="${table}">
                    ${table}
                </button>
            </td>
        </tr>`;
    });
    html += "<tbody>" + rows.join("\n") + "</tbody>";
    return `<table>${html}</table>`;
}


// Code to MarkDown 
Gs.Functions.PrintMarkdown = function (text) {
    return `<pre>${text}</pre>`;
}


// Generate TagList
Gs.Functions.GenerateTagList = function (values, tagName, className) {
    if (values.length === 0) {
        return "";
    }
    const open = "<" + tagName + " class='" + className + "' >";
    const close = "</" + tagName + ">";
    return open + values.join(close + open) + close;
}


//Function for  Mermaid Data to Graphics Conversion
async function Mermaid() { try { await mermaid.run({ nodes: document.querySelectorAll('.class-mermaid'), }); } catch (err) { } }


//Function for Highlighting Code Segments
function HighlightCode() {
    //hljs.highlightAll()
    document.querySelectorAll('div.code').forEach(el => { hljs.highlightElement(el); });
}


Gs.Functions.ShowSource = function () {
    var source = "<html>";
    source += document.getElementsByTagName('html')[0].innerHTML;
    source += "</html>";
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    source = "<pre>" + source + "</pre>";
    sourceWindow = window.open('', 'Sorce code', 'height=800,width=1000,scrollbars=1,resizable=1');
    sourceWindow.document.write(source);
    sourceWindow.document.close();
    if (window.focus) sourceWindow.focus();
}


Gs.Functions.ShowFrameSource = function () {
    var source = "<html>";
    source += document.getElementById('IFrameWindow').contentWindow.document.body.innerHTML;
    source += "</html>";
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    source = "<pre>" + source + "</pre>";
    sourceWindow = window.open('', 'Sorce code', 'height=800,width=1000,scrollbars=1,resizable=1');
    sourceWindow.document.write(source);
    sourceWindow.document.close();
    if (window.focus) sourceWindow.focus();
}


Gs.Functions.PrintElement = function (elementId) {
    try {
        let divElements = document.getElementById(elementId).innerHTML;
        let oldPage = document.body.innerHTML;
        document.body.innerHTML =
            "<html><head>" + document.getElementsByTagName('head')[0].innerHTML + "</head><body>" +  divElements + "</body>";
        window.print();
        document.body.innerHTML = oldPage;
    } catch (t) { }
}


Gs.Functions.DownloadHtmlElement = function (elementId) {
    try {
        var t = document.body.appendChild(document.createElement("a"));
        t.download = elementId + ".html";
        t.href = "data:text/html;charset=utf-8," + encodeURIComponent(document.getElementById(elementId).innerHTML);
        t.click();
    } catch (i) { }
}

Gs.Functions.CopyElement = async function (elementId) {
    try { let t = document.getElementById(elementId).innerHTML; await navigator.clipboard.writeText(t); } catch (t) { }
}

Gs.Functions.ImageFromElement = function (elementId) {
    try {
        $("document").ready(function () {
            html2canvas($("#" + elementId), {
                onrendered: function (t) {
                    $("#previewImage").append(t);
                    var r = t.toDataURL("image/png"), u = r.replace(/^data:image\/png/, "data:application/octet-stream"), i = document.body.appendChild(document.createElement("a"));
                    i.download = elementId + ".png";
                    i.href = u; i.click()
                }
            })
        })
    } catch (t) { }
}


Gs.Functions.PrintOrExportWindow = function (command) {
    let frameExist = document.getElementById("IFrameWindow") != null;

    switch (command) {
        case "Print":
            if (frameExist) { Gs.Functions.PrintFrameElement(); }
            else { Gs.Functions.PrintElement("FrameWindow"); }
            break;
        case "Download":
            if (frameExist) { Gs.Functions.DownloadFrameHtmlElement(); }
            else { Gs.Functions.DownloadHtmlElement("FrameWindow"); }
            break;
        case "Image":
            if (frameExist) { Gs.Functions.ImageFromFrameElement(); }
            else { Gs.Functions.ImageFromElement("FrameWindow"); }
            break;
        case "Copy":
            if (frameExist) { Gs.Functions.CopyFrameElement(); }
            else { Gs.Functions.CopyElement("FrameWindow"); }
            break;
    }
}


Gs.Functions.PrintFrameElement = function () {
    try {
        document.getElementById("IFrameWindow").contentWindow.print();
    } catch (t) { }
}


Gs.Functions.DownloadFrameHtmlElement = function () {
    try {
        var t = document.body.appendChild(document.createElement("a"));
        t.download = "KlikneteZde" + ".html";
        t.href = "data:text/html;charset=utf-8," + encodeURIComponent(window.frames['IFrameWindow'].contentWindow.document.body.innerHTML);
        t.click();
    } catch (i) { }
}

Gs.Functions.CopyFrameElement = async function () {
    try {
        let t = window.frames['IFrameWindow'].contentWindow.document.body.innerHTML;
        await navigator.clipboard.writeText(t);
    } catch (t) { }
}


Gs.Functions.ImageFromFrameElement = function () {
    try {
        $("document").ready(function () {
            html2canvas(document.getElementById("IFrameWindow").contentWindow.document.body, {
                onrendered: function (t) {
                    $("#previewImage").append(t);
                    var r = t.toDataURL("image/png"), u = r.replace(/^data:image\/png/, "data:application/octet-stream"), i = document.body.appendChild(document.createElement("a"));
                    i.download = "KlikneteZdeCz.png";
                    i.href = u; i.click();
                }
            });
        });
    } catch (t) { }
}


Gs.Functions.SaveToFavorites = function (title, url) {
    if (window.sidebar) { // Firefox
        window.sidebar.addPanel(title, url, '');
    }
    else if (window.opera && window.print) { // Opera
        var elem = document.createElement('a');
        elem.setAttribute('href', url);
        elem.setAttribute('title', title);
        elem.setAttribute('rel', 'sidebar');
        elem.click();
    }
    else if (document.all) { // ie
        window.external.AddFavorite(url, title);
    } else {
        let createBookmark = browser.bookmarks.create({
            title: "KlikneteZde.Cz",
            url: "https://KlikneteZde.Cz",
        });
    }
}

Gs.Functions.LoadMetro = async function () {
    const pathCss = './metro/css/metro-all.min.css';
    const pathThemeCss = './metro/css/schemes/sky-net.css';
    const pathJs = './metro/js/metro.4.5.2.min.js?v=4.5.2';

    const dataCss = await fetch(pathCss).then((r) => r.text());
    const dataThemeCss = await fetch(pathThemeCss).then((r) => r.text());

    const myFont = new FontFace('metro', "url('./metro/mif/metro.svg') format('svg'), url('./metro/mif/metro.woff') format('woff'), url('./metro/mif/metro.ttf') format('truetype')");
    await myFont.load(); document.fonts.add(myFont);

    const dataJs = await fetch(pathJs).then((r) => r.text())

    const style = document.createElement("style")
    style.textContent = dataCss
    document.querySelector("head").appendChild(style)

    style.textContent = dataThemeCss
    document.querySelector("head").appendChild(style)

    new Function(dataJs)();
    Metro.init();
    Metro.toast.create("Metro 4 did loaded successful!", { showTop: true, clsToast: "success" });
}


Gs.Functions.UnloadMetro = function () {
    delete Metro;
}

Gs.Functions.LoadHtmlPage = function (elementId,url) {
    $.ajax({
        url: url
    }).done(function (data) {
        $('#' + elementId).html(data);
    });
}

Gs.Functions.LoadHtmlPageToFrame = function (elementId, url) {
    let frame = '<div id=MainWindow data-role="window" data-custom-buttons="WindowButtons" data-btn-close="false" class="h-100" data-btn-min="false" data-btn-max="false" data-width="100%" data-height="800" data-draggable="false" >'
        + '<iframe id="IFrameWindow" src="' + url + '" width="100%" height="700" frameborder="0" scrolling="yes" style="width: 100%; height: 100%;" ></iframe>';
    $('#' + elementId).html(frame);
  
}


Gs.Functions.GetFunctionList = function () {
    let functionList = [];
    for (var p in Gs.Media) { if (typeof Gs.Media[p] === "function") { functionList.push({ title: `Gs.Media.${p}()`, folder: false, checkbox: false, key: Gs.Media[p].toString() }); } }
    for (var p in Gs.Functions) { if (typeof Gs.Functions[p] === "function") { functionList.push({ title: `Gs.Functions.${p}()`, folder: false, checkbox: false, key: Gs.Functions[p].toString() }); } }
    for (var p in Gs.Behaviors) { if (typeof Gs.Behaviors[p] === "function") { functionList.push({ title: `Gs.Behaviors.${p}()`, folder: false, checkbox: false, key: Gs.Behaviors[p].toString() }); } }
    for (var p in Gs.Objects) { if (typeof Gs.Objects[p] === "function") { functionList.push({ title: `Gs.Objects.${p}()`, folder: false, checkbox: false, key: Gs.Objects[p].toString() }); } }
    for (var p in Gs.Apis) { if (typeof Gs.Apis[p] === "function") { functionList.push({ title: `Gs.Apis.${p}()`, folder: false, checkbox: false, key: Gs.Apis[p].toString() }); } }
    Metro.storage.setItem('FunctionList', functionList.sort((a, b) => (a.title > b.title) * 2 - 1));
}


Gs.Functions.loadCSS = function (elementId, code) {
    if (code) {
        Gs.Functions.RemoveElement(elementId);
        var style = document.createElement("style");
        style.setAttribute("id", elementId);
        style.innerHTML = code;
        document.head.appendChild(style);
    }
};


Gs.Functions.loadJS = function (elementId, code) {
    if (code) {
        Gs.Functions.RemoveElement(elementId);
        var script = document.createElement("script");
        script.setAttribute("id", elementId);
        script.innerHTML = code;
        document.body.appendChild(script);
    }
};


Gs.Functions.ExportTable = function (params) {
    var options = {
        tableName: 'TableData',
        worksheetName: 'Export Table'
    };
    $.extend(true, options, params);
    if (document.getElementById("IFrameWindow") == null) { $('#menuTable').tableExport(options); } 
}