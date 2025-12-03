[Zpět](../../)   


```csharp  

@page "/ServerCoreTools/MarkDown"

@addTagHelper *, WebOptimizer.Core
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
@addTagHelper *, Westwind.AspNetCore.Markdown
@model ServerCorePages.MarkdownModel
@using Microsoft.AspNetCore.Html;
@using ServerCorePages
@* @using Westwind.AspNetCore.Markdown; *@

@{
    ViewBag.Title = "EIC-MDsolution";
}
<div class="container" style="margin-top: 60px;">

    <div id="Present" class="shadow">
        <div class="presenter" data-role="presenter" data-height="220" data-easing="swing">
            <div class="scene">
                <div class="act bg-cobalt fg-white">
                    <img src="~/logo.png" class="actor" data-position="10,10" style="height: 200px">
                    <h1 class="actor" data-position="10,250">Easy IT center</h1>
                    <p class="actor" data-position="70,250">To jsou Serverová řešení pro Vaši Firmu. Základní sestava obsahuje již více než 20 typů serverů.</p>
                    <p class="actor" data-position="120,250">Kompletní Management pomocí přiloženého Systému . Vývoj libovolných API a jejich služeb pouhým kopírováním šablon</p>
                    <a class="actor button primary" data-position="170,250" href="~/EIC&ESBdocs/EIC-InfoWeb/">Info Dokumentace EIC</a>
                </div>
                <div class="act bg-steel fg-white">
                    <img src="~/logo.png" class="actor" data-position="10,10" style="height: 200px">
                    <h1 class="actor" data-position="10,270">Easy SYSTEM builder</h1>
                    <p class="actor" data-position="70,270">To jsou všechny typy systémů, které vás napadnou. Díky Prfekně zaimplemenotovaným moderním technologiím si můžete Sami či si pořídit Libobolný typ Systému již do 1 měsíce od Objednání.</p>
                    <p class="actor" data-position="120,270">Neskutečně jednoduchý Vývoj pomocí Šablon, Editorů a již Brzy přímo z portálu je naprostou hračkou pro každé IT oddělení.</p>
                    <a class="actor button primary" data-position="170,270" href="~/EIC&ESBdocs/ESB-InfoWeb/">Info Dokumentace ESB</a>
                </div>
                <div class="act bg-darkCyan fg-white">
                    <img src="~/logo.png" class="actor" data-position="10,10" style="height: 200px">
                    <h1 class="actor" data-position="10,300">EIC & ESB = Servery + Systémy + Weby</h1>
                    <p class="actor" data-position="70,300">Neotálejte a Vyzkoušejte 30denní Plnou Verzi ZDARMA v sekci ke STAŽENÍ.<br /> Začněte šetřit výdaje s Novým IT řešením už nyní</p>
                    <a class="actor button success" data-position="130,300" href="~/Downloads">MSSQLDB + Server + Systém v Sekci Ke Stažení</a>
                </div>
            </div>
        </div>
    </div>

    <div id="contentWindow" style="width: 960px;min-width: 960px;">
  @*   <markdown> *@
        @Html.Raw(MarkdownModel.result)
 @*    </markdown> *@
    </div>

    <hr />
    <h3><a href="https://www.youtube.com/embed/6ThVBv_diGo?list=PLmE7gP9LTBimNJQ444ypG8HVce23fa2Hb" target="_blank">Sjedujte Vývoj Řešení i na Youtube</a></h3>
    <iframe width="920" height="600" src="https://www.youtube.com/embed/6ThVBv_diGo?list=PLmE7gP9LTBimNJQ444ypG8HVce23fa2Hb"
            title="SYSTEMsupportAnyLANG System was extended for ANY programming Language Module. Full Github Supported" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
    
</div>


<!-- Syntax Highlighting code -->
<link href="~/ServerCoreTools/markdown/highlightjs/styles/vs2015.css" rel="stylesheet" />
<script type="text/javascript" src="~/ServerCoreTools/markdown/highlightjs/highlight.pack.js"></script>
<script type="text/javascript" src="~/ServerCoreTools/markdown/highlightjs/highlightjs-badge.js"></script>

<script>
    var pres = document.querySelectorAll("pre>code"); pres = document.querySelectorAll("code");
    for (var i = 0; i < pres.length; i++) { hljs.highlightBlock(pres[i]); }
    window.highlightJsBadge();
    $(document).ready(function () {
        $("#docLoader").hide();
        setTimeout(() => { googleTranslateElementInit(); }, 3000);
    });
    
</script>


```  

