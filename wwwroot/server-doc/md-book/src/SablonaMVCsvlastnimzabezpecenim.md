# Úvod   EIC Knihovny Kódů a Šablony  

Knihovny kódů implementovaných v projektu. 
Většinou už budete jen opakovat co bylo vytvořeno, takže stačí vykopírovat z Těchto Knihoven

Šablona má natvrdo zaimplementovanou autorizační kontrolu.
Zrušeno , zabezpečuje agenda API nastavení přístupů 
Tím je toto nastavení dynamické

@page "/easydata/{**entity}"
@{ Layout = "/ServerCorePages/Shared/MetroLayout.cshtml"; }

@addTagHelper *, WebOptimizer.Core
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers

@using ServerCorePages;
@using Microsoft.AspNetCore.Html;
@using EasyITCenter.DBModel;
@using EasyITCenter.ServerCoreWebPages;
@using EasyITCenter.ServerCoreStructure;
@using System.Security.Claims;
@model ServerCorePages.ServerModulesModel


@* TODO PLNE PREVEST TENTO OBSAH DO AGENDY DYNAMICKE STRANKY  *@
@* MOZNOST UDELAT DESKTOP ALA UZIVATEL  DASHBOARD UZIVATELE *@
@namespace ServerCorePages
@{
    ViewData["Title"] = "DB EasyData Manager";

    bool userLogged = false;
    string token = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
    ServerWebPagesToken? srvWebPagesToken = null;

    if (token != null) {

        srvWebPagesToken = CoreOperations.CheckTokenValidityFromString(token);
        if (srvWebPagesToken != null && srvWebPagesToken.IsValid) { User.AddIdentities(srvWebPagesToken.UserClaims.Identities); userLogged = true; }

    }


    @if (userLogged && srvWebPagesToken != null && srvWebPagesToken.UserClaims.FindFirstValue(ClaimTypes.Role.ToString()) == "admin") {
        ServerModuleAndServiceList? serverModule = ((ServerModuleAndServiceList?)HttpContext.Items.FirstOrDefault(a => a.Key.ToString() == "ServerModule").Value);

        @if (serverModule != null) { Html.Raw(serverModule.CustomHtmlContent); }


        @* https://github.com/KorzhCom/EasyData/blob/master/easydata.net/src/EasyData.Exporters.Default/Html/HtmlDataExporter.cs  *@
        <link rel="stylesheet" href="~/ServerCoreTools/modules/easydata/css/easydata.min.css" />
        <div class="container text-center pt-5 mb-2">
            <DIV class="info-panel">
                <div id="EasyDataContainer"></div>
            </DIV>
        </div>


        <script src="~/ServerCoreTools/modules/easydata/js/jquery-3.6.0.min.js" type="text/javascript"></script>
        <script src="~/ServerCoreTools/modules/easydata/js/easydata.min.js" type="text/javascript"></script>
        <script>
            window.addEventListener('load', function () {
                    new easydata.crud.EasyDataViewDispatcher().run()
                });

               @* 
                 window.addEventListener('load', function () {
                    new easydata.crud.EasyDataViewDispatcher({
                        rootEntity: 'Order'
                    }).run()
                }); 
                *@
        </script>


    }
}
     
@if (!userLogged) {

    <script type="text/javascript">
       @*  Cookies.set('ApiToken', data.Token); *@

        ShowUnAuthMessage();
        function Logout() {
            Cookies.remove('ApiToken');
            Metro.storage.storage.clear();
            Cookies.as
            window.location.href ='/DefaultWebPages/GlobalLogin'; 
        }
        function ShowUnAuthMessage() {
            $("body")[0].setAttribute("onclick", "Logout();");
            var html_content =
                "<h3>Stránka na Adrese " + window.location.href + " vyžaduje Autorizaci.</h3>" +
                "<p>Kliknutím Vás přesměrujeme na Výchozí Stránku Serveru.</p>" +
                "<p>Nashledanou...</p>";
            Metro.infobox.create(html_content, "alert");
        }

     </script>
}
   

