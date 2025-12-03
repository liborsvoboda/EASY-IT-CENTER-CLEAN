# Úvod   EIC-CanceledRazorBuild  

Ukázka Kódu portálu v Technologii Razor/MVC s nutností provést Builde a nasazení na Web
Tvorba portálu byla pouhý měsíc, Ale od Tohoto způsobu VÝVOJE je upuštěno
ve prospěch ONLINE okamžité Aplikace Editory
Je možné Vytěžit Generátory kódu a Objekty Metro4

# Úplný kód MVC Razor Portálu CSHTML,   s JS,Metro4, nutný Build,Vývoj 1 Měsíc, nyní se již nepoužívá   ### AdvantageousServices.cshtml     

```http   
			ď»ż@page
@model ServerCorePages.AdvantageousServicesModel
@{
    ViewData["Title"] = "Advantageous Services";
}
@*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
    <window>
        <div class="h4 fg-darkOrange" style="top:10px;">
            EASY contact for Move Forward:<br />
            <div class="h2 d-block c-help ani-hover-heartbeat" style="font-weight:bolder;color: #155f82;" onclick="Metro.infobox.open('#ContactBox');" title="Contact List">
                <div class="">Phone / Email / Skype / Messenger/ WhatsApp / Signal / Message</div>
                <div class="" >LinkeId / FaceBook / Web / Portal / OnLine / GitHub / DataBox </div>
            </div>
            Easy and Fast GroupWare (Multi) Solutions are my Basic Views in solve of IT task <br />
            Here Are OneTime - Paid Services List For Fast Modern Multiple Solutions<br />

        </div>

        <div class="about ">
            <div class="container">
                <div class="mt-10 text-center">
                    <div class="fg-darkSteel" style="font-weight:bold;font-size:20px;opacity:0.7;">
                        Static Pages / NoBuild Pages / JS-TS Systems / Servers / Services / Support / HelpDesk / Remote Help
                    </div>
                    <p class="text-leader pl-20-md pr-20-md">
                        By click on Icons open Examples
                    </p>
                </div>

                <div class="row mt-10">
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Price List",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/EDC_ESB_InteliHelp/book/PriceList.html\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Price List"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-1x" style="top: 0px;right:0px;">
                                        <input id="HourPrice" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("HourPrice");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="LongTerm Projects Price ">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            500KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("HourPrice");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Any Support Service Price">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            750KÄŤ
                                        </div>

                                    </div>
                                    <div class="text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-block w-100">
                                                <div class="text-left pl-2">LongTerm Projects Work / Cooperation <br />IT Online Support / Remote HelpDesk</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                <span onclick="window.open('https://GroupWare-Solution.Eu','_blank');" class="mif-eye ani-heartbeat mif-3x mif-3x ml-2" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Detailed Situation Descriptions / Technologies / Solutions"></span>
                                                <span onclick="window.open('https://KlikneteZde.Cz','_blank');" class="mif-eye ani-heartbeat mif-3x mif-3x ml-2" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online EDC & ESB Solutions & Clones"></span>
                                                @* <span onclick="window.open('../server/Downloads/ProjectManagement','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Project Management"></span>
                                                <span onclick='Metro.window.create({title:"Project Management ScreenShot",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/Downloads/ProjectManagement/Gallery\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show ScreenShot"></span>
                                                <span onclick="window.open('http://kliknetezde.cz:5001','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Project Management Online Test<br/>username: test@test.com<br/>password: tester"></span> *@

                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Expert Documentation Manager Multilanguage Implementation",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/ExpertDocManager\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-1x" style="top: 0px;right:0px;">
                                        <input id="OnlineWebtranslation" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("OnlineWebtranslation");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Implementation of Online Any Web Pages unlimited Translation">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            5000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("OnlineWebtranslation");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Solution for Distribute Online Any Web Pages unlimited Translation">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            10000KÄŤ
                                        </div>
                                    </div>
                                    <div class="text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-block w-100">
                                                <div class="text-left pl-2">Implementing in 1-3 days <br />Any Web Online Auto Translation</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                <span onclick='Metro.window.create({title:"Free Expert Documentation Viewer Multilanguage Implementation",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/ExpertDocViewer\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x ml-2" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show Free Expert Documentation Viewer Multilanguage Implementation Example"></span>

                                                <span onclick="window.open('https://KlikneteZde.Cz:5001','_blank');" class="mif-eye ani-heartbeat mif-3x mif-3x ml-2" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show Project Management Server Multilanguage Implementation Example username/password: admin@admin.eu/admin"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"EASY-DATA-Center Dev Info",shadow:true,draggable:true,customButtons:CenterBackButton,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe id=\"CenterWindow\" src=\"../server/EASYDATACenter_Downloads\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-1x" style="top: 0px;right:0px;">
                                        <input id="EasyDataCenterPartner" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("EasyDataCenterPartner");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Unlimited Partner Distribution EASYDATACenter License">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            20 000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("EasyDataCenterPartner");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Unlimited Independent Distribution EASYDATACenter License">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            100 000KÄŤ
                                        </div>
                                    </div>
                                    <div class="text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-block w-100">
                                                <div class="text-left pl-2"><b>EASY-DATA-Center</b> Partner License <br />Full Independent Distribution License</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                <span onclick="window.open('../server/Downloads/EASYDATACenter','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download EASYDATACenter"></span>
                                                <span onclick='Metro.window.create({title:"EasyDataCenter ScreenShots",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/EASYDATACenter_Downloads/PhotoGallery\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show ScreenShot"></span>
                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client EDCManager is on Desktop"></span>
                                                <span onclick='generateTrialLicense("EasyDataCenter");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span>
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"EASY-SYSTEM-Builder Dev Info",shadow:true,draggable:true,customButtons:BuilderBackButton,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe  id=\"BuilderWindow\" src=\"../server/EASYSYSTEMBuilder_Downloads\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-1x" style="top: 0px;right:0px;">
                                        <input id="EasySystemBuilderPartner" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("EasySystemBuilderPartner");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Unlimited Partner Distribution EASYSYSTEMBuilder License">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            20 000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("EasySystemBuilderPartner");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Unlimited Independent Distribution EASYSYSTEMBuilder License">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            100 000KÄŤ
                                        </div>
                                    </div>
                                    <div class="text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-block w-100">
                                                <div class="text-left pl-2"><b>EASY-SYSTEM-Builder</b> Partner License <br />Full Independent Distribution License</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                <span onclick="window.open('../server/Downloads','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Any Server Client - Its ESB Clone"></span>
                                                <span onclick='Metro.window.create({title:"EasySystemBuilder ScreenShots",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/EASYSYSTEMBuilder_Downloads/PhotoGallery\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show ScreenShot"></span>
                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client Global Version & EDCManager is on Desktop"></span>
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="pb-10 mb-10"></div>


            <div id="ContactBox" class="info-box" data-role="infobox" data-type="info" data-width="800">
                <span class="button square closer"></span>
                <div class="info-box-content">
                    <h3>Libor Svoboda Contact Posibilities</h3>
                    <p style="font-size:13px;margin-top:0px">I working Every Day / Full day from Home. Therefore a i can find time for you almost any time.</p>
                    <p style="font-size:13px;margin-top:0px">Everything you see here is the result of one man hobby [transition to new technologies] less than 1 Year in spare time</p>
                    <p style="font-size:13px;margin-top:0px">
                        After 33 years daily pro-Active work in IT branch over 17 supra-national companies <br />
                        I don't know a problem I can't solve, come up with a solution as I go, give advice on anything
                    </p>

                    <ul>
                        <li class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('tel:+420724986873','_blank');">Phone: +420 724 986 873</li>
                        <li>Email: <div class="d-inline-flex c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('mailto:Libor.Svoboda@GroupWare-Solution.Eu','_blank');"> Libor.Svoboda@GroupWare-Solution.Eu</div> - <div class="d-inline-flex c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('mailto:Libor.Svoboda@KlikneteZde.Cz','_blank');">Libor.Svoboda@KlikneteZde.Cz</div></li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('skype:Chrasty80','_blank');">Skype: Chrasty80</li>
                        <li>Messenger: <div class="d-inline-flex c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('http://m.me/GroupWareSolution','_blank');">GroupWareSolution</div> - <div class="d-inline-flex c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('http://m.me/LiborSvoboda80','_blank');">LiborSvoboda80</div></li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('https://api.whatsapp.com/send?phone=00420724986873','_blank');">WhatsApp</li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('https://signal.me/#p/+420724986873 ','_blank');">Signal liborsvoboda</li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo" onclick="ShowMessagePanel()">Write Portal Message</li>
                    </ul>
                    <hr/>
                    <ul>
                        <li class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('https://www.linkedin.com/in/libor-svoboda-7b96014a/','_blank');">LinkedIn libor-svoboda-7b96014a</li>
                        <li>FaceBook: <div class="d-inline-flex c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('https://www.facebook.com/GroupWareSolution/','_blank');"> GroupWareSolution</div> - <div class="d-inline-flex c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('https://www.facebook.com/LiborSvoboda80/','_blank');">LiborSvoboda80</div></li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('https://Groupware-Solution.eu','_blank');">Web Groupware-Solution.eu</li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('https://KlikneteZde.Cz:5000','_blank');">Portal KlikneteZde.Cz</li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('https://KlikneteZde.Cz','_blank');">Online KlikneteZde.Cz</li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('https://github.com/liborsvoboda?tab=repositories','_blank');">GitHub liborsvoboda</li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('https://www.mojedatovaschranka.cz/','_blank');">DataBox ffbd3at</li>
                    </ul>
                    <hr />
                    <ul>
                        <li class="c-pointer ani-hover-horizontal fg-indigo">
                            IT Support/HelpDesk, Administrator, Tester, Analytic, Programmer, Developer, Manager, Architect
                        </li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo">Libor Svoboda</li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo">Ĺ˝lutava 173</li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo">763 61 Ĺ˝lutava, Zlinsko</li>
                        <li class="c-pointer ani-hover-horizontal fg-indigo">Czech Republic</li>
                    </ul>
                </div>
            </div>


    </window>

    <script>
        /* Startup */

        // Declaration
        let CenterBackButton = [{ html: "<span class=\"mif-backward\"></span>", cls: "warning", onclick: "$(\"#CenterWindow\").attr(\"src\", \"../server/EASYDATACenter_Downloads\")" }];
        let BuilderBackButton = [{ html: "<span class=\"mif-backward\"></span>", cls: "warning", onclick: "$(\"#BuilderWindow\").attr(\"src\", \"../server/EASYSYSTEMBuilder_Downloads\")" }];

        // Startup Calling

        var notify = Metro.notify; notify.setup({ width: 300, duration: 5000, animation: 'easeOutBounce' });
        notify.create("Please Rate Tool After Download..."); notify.reset();
        GetGeneratorsRating();



        // Function Part
        function setGeneratorsRating(value, star, element) {
            let recId;
            $.ajax({
                type: "GET", url: "/Generators/SetGeneratedToolRatingName/" + element.id + "/" + value, dataType: 'json',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                }
            }).always(function (data) { GetGeneratorsRating(); });
            $(element).data('rating').static(true);
        };
        function GetGeneratorsRating() {
            $.get("/Generators/GetGeneratedToolRatingList").then(function (data) {
                data = JSON.parse(data);
                data.forEach(tool => {
                    switch (tool.Name) {
                        case "HourPrice":
                            $('#HourPrice').data('rating').val(tool.Rating);
                            $('#HourPrice').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "OnlineWebtranslation":
                            $('#OnlineWebtranslation').data('rating').val(tool.Rating);
                            $('#OnlineWebtranslation').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "EasyDataCenterPartner":
                            $('#EasyDataCenterPartner').data('rating').val(tool.Rating);
                            $('#EasyDataCenterPartner').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "EasySystemBuilderPartner":
                            $('#EasySystemBuilderPartner').data('rating').val(tool.Rating);
                            $('#EasySystemBuilderPartner').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        default:
                            break;
                    }
                });
            });
        };


        async function generateTrialLicense(project) {
            if (IsLogged()) {
                showPageLoading();

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Downloading " + project + " Trial License..."); notify.reset();

                AuthDownloadFile("GET", "LicenseRequest/Trial/" + project);
                hidePageLoading();
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("You must Login First", "Alert", { cls: "alert" }); notify.reset();
            }
        };





    </script>
</div>

```    
			
---   
			### AminLogin.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.AdminLoginModel
@{
    ViewData["Title"] = "PĹ™ihlĂˇĹˇenĂ­ Admina";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center">
    <window>
        <div class="hero hero-bg 1bg-brand-secondary add-neb">
            <div class="container">
                <div class="row">
                    <form id="loginform" method="post"
                          class="login-form bg-white fg-darkBlue p-6 mx-auto border bd-default win-shadow"
                          data-role="validator"
                          action="javascript:"
                          data-clear-invalid="2000"
                          data-on-error-form="invalidForm"
                          data-on-validate-form="validateForm">
                        <span class="mif-vpn-lock mif-4x place-right" style="margin-top: -10px;"></span>
                        <h2 class="text-light">Golden Portal PĹ™ihlĂˇĹˇenĂ­</h2>
                        
                        <div class="form-group">
                            <input id="usernameId" type="email" data-role="input" class="input" data-prepend="<span class='mif-envelop'>" placeholder="VloĹľte email..." data-validate="required" maxlength="50" style="height: auto;" />
                        </div>
                        <div class="form-group">
                            <input id="passwordId" type="password" data-role="input" data-prepend="<span class='mif-key'>" placeholder="VloĹľte heslo..." data-validate="required minlength=6">
                        </div>
                        <div class="form-group mt-10">
                            <input type="checkbox" data-role="checkbox" data-caption="Zapamatovat" class="place-right">
                            <button class="button shadowed">PĹ™ihlĂˇsit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </window>
    <script>
        function invalidForm() {
            var form = $(this);
            form.addClass("ani-ring");
            setTimeout(function () {
                form.removeClass("ani-ring");
            }, 1000);
        }

        function validateForm() {
            showPageLoading();
            var def = $.ajax({
                global: false, type: "POST", url: "/GoldenSystemAuthentication", dataType: 'json',
                headers: { "Authorization": "Basic " + btoa($("#usernameId").val() + ":" + $("#passwordId").val()) }
            });

            def.fail(function (data) {
                var notify = Metro.notify; notify.setup({ width: 300, timeout: Metro.storage.getItem('NotifyShowTime', null), duration: 500 });
                notify.create("NesprĂˇvnĂ© jmĂ©no nebo heslo", "Error", { cls: "alert" }); notify.reset();
                hidePageLoading();
            });

            def.done(function (data) {
                AdminLogin(data);
                hidePageLoading();
            });
        }

    </script>
</div>

```    
			
---   
			### AminLogin.cshtml.cs     

```http   
			ď»żusing Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class AdminLoginModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;

        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = ServerCoreHelpers.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}
```    
			
---   
			### AutomaticServices.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.AutomaticServicesModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EDC & ESB Has AUTOMATED SYSTEM CORE - therefore Your Work is make DB Table & User Form Only"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="950px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Tools/EDC_ESB_InteliHelp/book/AUTO_STEPS_Look_First.html' frameborder='0' style='overflow:hidden;height:900px;width:100%'></iframe>">

    </div>
 
    <script>
      

    </script>
</div>

```    
			
---   
			### BusinessGenerators.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.BusinessGeneratorsModel
@{
    ViewData["Title"] = "Business Generators";
}
    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
    <window>
        <div class="h4 fg-darkOrange" style="top:10px;">
            EASY to USE:<br />
            Import Image Files for Presentations only.<br />
            Presentations are automatically generated for Download<br />
            Download, Unpack and Copy to your WebPages.<br />
            You show Presentations by Index.html<br />
        </div>

        @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {

        }
        else {
            <div class="h4 fg-red ani-hover-heartbeat">
                For Make and Download Presentations You must be Logged in
            </div>
        }

        <div class="about ">
            <div class="container">
                <div class="mt-10 text-center">
                    <div class="fg-darkSteel" style="font-weight:bold;font-size:40px;opacity:0.7;">
                        Static Pages - Business Presentation GENERATORS
                    </div>
                    <p class="text-leader pl-20-md pr-20-md">
                        By click on left Icon open Example
                    </p>
                </div>

                <div class="row mt-10">
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Image Book",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/Book/demo/index.html\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="imageBookRating" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("ImageBook");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("ImageBook");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Single od Double Page can be set">Image Book</div>
                                            </div>
                                            <div class="d-flex">
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                    <input class="mt-4" type="file" data-role="file" data-on-select="uploadImageBook" accept=".png,.jpg,.jpeg,.tiff" data-cls-caption="width50" data-prepend="Select your Images" data-button-title="<span class='mif-folder mif-3x ani-ring'></span>" multiple="multiple">

                                                    <span id="imageBookDownload" onclick='downloadImageBook();' class="mif-file-download ani-heartbeat mif-3x pl-10 mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download your Image Book" />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Medial Presentation",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/Media/Presentation/index.html\" style=\"width:100%;height:600px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-search"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="medialPresentationRating" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("MedialPresentation");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            3000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("MedialPresentation");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            5000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="c-help text-left pl-4 ani-heartbeat" onclick="Metro.infobox.open('#PresentationInfoBox');">Medial Presentation </div>
                                            <div class="d-flex">
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                    <input class="mt-4" type="file" data-role="file" data-on-select="uploadMedialPresentation" accept=".png,.jpg,.jpeg,.tiff" data-cls-caption="width50" data-prepend="Select Images" data-button-title="<span class='mif-folder mif-3x ani-ring'></span>" multiple="multiple">

                                                    <span id="medialPresentationDownload" onclick='downloadMedialPresentation();' class="mif-file-download ani-heartbeat mif-3x pl-10 mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download your Medial Presentation" />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="pb-10 mb-10"></div>


            @* Info Boxs *@
            <div id="PresentationInfoBox" class="info-box" data-role="infobox" data-type="info" data-width="800">
                <span class="button square closer"></span>
                <div class="info-box-content">
                    <h5>Universal Medial Presentation Posibilities</h5>
                    <p style="font-size:16px;margin-top:0px">This Medial Presentation is complexed code for show Pretty Presentation as alone Page </p>
                    <p style="font-size:16px;margin-top:0px">Here is Prepared Generating only from Images and URLs </p>
                    <p style="font-size:16px;margin-top:0px">Presentation content can be from: Html code, Images, Videos, Urls and More </p>
                    <p style="font-size:16px;margin-top:0px">For Modify edit Index.html only. Templates included in Comments</p>
                    <p style="font-size:16px;margin-top:0px">Possible automatic sliding, omnidirectional navigation and much more</p>
                </div>
            </div>
    </window>
 
    <script>
        /* Startup */

        // Declaration
        $('#imageBookDownload').hide(); $('#medialPresentationDownload').hide();
        let imageBookLastId = null; medialPresentationLastId = null;

        // Startup Calling
        
        var notify = Metro.notify; notify.setup({ width: 300, duration: 5000, animation: 'easeOutBounce' });
        notify.create("Please Rate Tool After Download..."); notify.reset();
        GetGeneratorsRating();



        // Function Part
        function setGeneratorsRating(value, star, element) {
            let recId;
            switch (element.id) {
                case "imageBookRating": recId = imageBookLastId; break;
                case "medialPresentationRating": recId = medialPresentationLastId; break;
                default:
                    break;
            }
            $.ajax({
                type: "GET", url: "/Generators/SetGeneratedToolRatingList/" + recId + "/" + value, dataType: 'json',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                }
            }).always(function (data) { GetGeneratorsRating(); });
            $(element).data('rating').static(true);
        };
        function GetGeneratorsRating() {
            $.get("/Generators/GetGeneratedToolRatingList").then(function (data) {
                data = JSON.parse(data);
                data.forEach(tool => {
                    switch (tool.Name) {
                        case "ImageBook":
                            $('#imageBookRating').data('rating').val(tool.Rating);
                            $('#imageBookRating').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "MedialPresentation":
                            $('#medialPresentationRating').data('rating').val(tool.Rating);
                            $('#medialPresentationRating').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        default:
                            break;
                    }
                });
            });
        };


        async function uploadImageBook(files, element) {
            if (files.length > 0) {
                showPageLoading();
                let dataset = [];

                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    let fileContent = await new Promise((resolve, reject) => {
                        const reader = new FileReader()
                        reader.onloadend = () => resolve(reader.result)
                        reader.onerror = reject
                        reader.readAsDataURL(files[i])
                    });
                    dataset.push({ name: files[i].name, extension: files[i].name.split('.').pop(), fileArray: fileContent });
                }

                var def = $.ajax({
                    global: false, type: "POST", url: "/Generators/GenerateImageBook", dataType: 'json',
                    headers: {
                        'Content-type': 'application/json',
                        "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                    },
                    data: JSON.stringify({ Files: dataset })
                });

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Uploading Images for generate Image Book..."); notify.reset();

                def.fail(function (data) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Download Image Book Failed", "Alert", { cls: "alert" }); notify.reset();
                    $('#imageBookDownload').hide();
                    hidePageLoading();
                });

                def.done(function (data) {
                    imageBookLastId = data.genRecord;
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Your Image Book was Generated succesfully."); notify.reset();
                    $('#imageBookDownload').show();
                    hidePageLoading();
                    $('#imageBookRating').data('rating').static(false);
                });
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Any Image was not Selected", "Info"); notify.reset();
                $('#imageBookDownload').hide();
            }
        };
        async function downloadImageBook() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading Image Book..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetGeneratedImageBook");
            hidePageLoading();
        };


        async function uploadMedialPresentation(files) {
            if (files.length > 0) {
                showPageLoading();
                let dataset = [];

                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    let fileContent = await new Promise((resolve, reject) => {
                        const reader = new FileReader()
                        reader.onloadend = () => resolve(reader.result)
                        reader.onerror = reject
                        reader.readAsDataURL(files[i])
                    });
                    dataset.push({ name: files[i].name, extension: files[i].name.split('.').pop(), fileArray: fileContent });
                }

                var def = $.ajax({
                    global: false, type: "POST", url: "/Generators/GenerateMedialPresentation", dataType: 'json',
                    headers: {
                        'Content-type': 'application/json',
                        "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                    },
                    data: JSON.stringify({ Files: dataset })
                });

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Uploading Images for generate Medial Presentation..."); notify.reset();

                def.fail(function (data) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Download Medial Presentation Failed", "Alert", { cls: "alert" }); notify.reset();
                    $('#medialPresentationDownload').hide();
                    hidePageLoading();
                });

                def.done(function (data) {
                    medialPresentationLastId = data.genRecord;
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Your Medial Presentation was Generated succesfully."); notify.reset();
                    $('#medialPresentationDownload').show();
                    hidePageLoading();
                    $('#medialPresentationRating').data('rating').static(false);
                });
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Any Image was not Selected", "Info"); notify.reset();
                $('#GenerateMedialPresentation').hide();
            }
        };
        async function downloadMedialPresentation() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading Medial Presentation..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetGeneratedMedialPresentation");
            hidePageLoading();
        };

       
    </script>
</div>

```    
			
---   
			### ChangeLog.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.ChangeLogModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EDC & ESB Change Log I must Working on different Projects. Will Be Actualize Daily If the Clever will Be Engine In World  daily Fails"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="950px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Tools/EDC_ESB_InteliHelp/book/SolutionsChangeLog.html' frameborder='0' style='overflow:hidden;height:900px;width:100%'></iframe>">

    </div>
 
    <script>
        

    </script>
</div>

```    
			
---   
			### DashBoard.cshtml     

```http   
			ď»ż@page
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
@model ServerCorePages.DashBoardModel
@{
    ViewData["Title"] = "Welcome In GroupWare Solutions IT News";
}
@*    
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html 
*@
<div class="text-center info-panel">
    <window>
        <div class="hero hero-bg 1bg-brand-secondary add-neb" style="height:450px;padding:10px;">
            <div class="container">
                <div class="row">
                    <div class="cell-lg-12 d-flex flex-justify-center flex-align-center">
                        <div class="hero-desc" style="margin-left:10px;">
                            <div class="h2 d-flex" style="font-weight:bolder;color: #155f82;">
                                <div class="c-help ani-hover-heartbeat" onclick="Metro.infobox.open('#EDCinfoBox');" title="Fast Info">EASY-DATA-Center</div>
                                <div style="width:100px;text-align:center;"> &</div>
                                <div class="c-help ani-hover-heartbeat" onclick="Metro.infobox.open('#ESBinfoBox');" title="Fast Info">EASY-SYSTEM-Builder</div>
                            </div>

                            <div class="fg-darkSteel" style="font-weight:bold;font-size:30px;opacity:0.7;">
                                Revolutionary OpenSource Solutions FOR EACH:
                            </div>
                            <div class="fg-darkSteel" style="font-weight:bold;font-size:40px;opacity:0.7;">
                                Company | School | Organisation | State | Developer<br />
                                Handyman | IT Department | EveryOne in Our World
                            </div>
                            <br />
                            <br />
                            <div class="h4 fg-blue pos-center">
                                Generated API + Media Servers:
                                <span class="h3 ml-5 fg-green" data-role="counter" data-value="3" id="edcCounter">0</span>
                            </div>
                            <div class="h4 fg-blue pos-center">
                                Generated MultiMedial MS Systems:
                                <span class="h3 ml-5 fg-green" data-role="counter" data-value="7" id="esbCounter">0</span>
                            </div>
                           <div class="h4 fg-blue pos-center">
                                Tool Generators Used:
                                <span class="h3 ml-5 fg-green" data-role="counter" id="toolCounter" ></span>
                            </div>
                        </div>
                        <div data-role="cube" class="pos-relative cube" style="right: 250px;opacity: 0.3;width: 0px;"
                             data-color="bg-cyan bd-darkCyan"
                             data-flash-color="#aa00ff"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about ">
            <div class="container bg-white">
                <div class="mt-1 text-center">
                    <div class="h1">EASY GroupWare Solutions Smart Help Center</div>
                    <p class="text-leader pl-20-md pr-20-md">
                        An advanced knowledge base management service is the first step to customer care automation.
                        Here are the main features Aistant already has:
                    </p>
                </div>

                <div class="row mt-10">
                    <div class="cell-md-6 pt-4">
                        
                        <div class="p-4 bg-brand-secondary h-100">
                            <a href="/Docs" class="unstyled-link c-pointer" target="_blank">
                                <div class="icon-box border bd-brand">
                                    <div class="icon bg-brand fg-white"><span class="mif-developer_board"></span></div>
                                    <div class="content d-flex flex-align-center pl-4">
                                            <div class="h4 text-light c-pointer"><span class="reduce-1 enlarge-1-md">EASY-DATA-Center Full Developer Code Documentation</span></div>
                                    </div>
                                </div>
                            </a>
                            <p>
                                Fully customizable projects for any type of practical use. A GroupWare solution that uses more technology than is normally needed, and that's just the beginning of the possibilities.
                                There is also an abundance of ready-made configurations, tools, variables, 
                                automatic tools for the simple solution of every request literally in a single day
                                Click to open the Servers Documentation and all other information about Visions and Ideals
                            </p>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Projects Info",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/Media/ManagerInfoBook/index.html\" style=\"width:100%;height:600px\"></iframe>"});'>
                                <div class="icon-box border bd-brand">
                                    <div class="icon bg-brand fg-white"><span class="mif-open-book"></span></div>
                                    <div class="content d-flex flex-align-center pl-4">
                                        <div class="h4 text-light"><span class="reduce-1 enlarge-1-md">Basic Projects Info for Managers CZ</span></div>
                                    </div>
                                </div>
                            </a>
                            <p>Short Info Book for Managers with Informations about Technologies, Using, Possibilities, 
                                EASY progresses and Using Groupware Projects EASY-DATA-Center and EASY-SYSTEM-Builder in Practise
                                Click For read Basic Documentation, which contains enough information for starting development immediately
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row mt-2-lg">
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <a href="/server" class="unstyled-link c-pointer" target="_blank">
                                <div class="icon-box border bd-brand">
                                    <div class="icon bg-brand fg-white"><span class="mif-files-empty"></span></div>
                                    <div class="content d-flex flex-align-center pl-4">
                                        <div class="h5 text-light"><span class="reduce-1 enlarge-1-md">Never Ending Free Updates on the way for Full Auto System Solution</span></div>
                                    </div>
                                </div>
                            </a>
                            <p>All of these Groupware (multiple solutions in one package) projects have the ambition to automate at least 90% of the necessary activities during the implementation
                                of the Backend Server EASY-DATA-Center (can manage bobust systems from one point), and for system development, all that remains is clicking on input Form fields and the database fields
                                By Click you can go open All Tech/Dev/Info/Migration documents, images, videos, intelligent help, shared agendas Free, etc.
                            </p>
                        </div>
                    </div>
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <a href="https://KlikneteZde.Cz" class="unstyled-link c-pointer" target="_blank">
                                <div class="icon-box border bd-brand">
                                    <div class="icon bg-brand fg-white"><span class="mif-search"></span></div>
                                    <div class="content d-flex flex-align-center pl-4">
                                        <div class="h6 text-light"><span class="reduce-1 enlarge-1-md">MS EASY-SYSTEM-Builder it will be fully tuned for connection to the systems generator by the end of the summer 2023</span></div>
                                    </div>
                                </div>
                            </a>
                            <p>
                                Both solutions contain more than 100 Technologies with the possibility of expanding by several others. The perfectly tuned services of the core systems make these GroupWare solutions, cheap easily available solutions, with the possibility to move the development to the level of Database Architecture and the Form.
                                There are also already plans to create a Web clone in Metro4 as a fully compatible sibling of the already existing Microsoft version. 
                                By Click you can go to the ONLINE Portal and Test the Microsoft SYSTEM Online.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row mt-2-lg">
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100 d-flex flex-align-center flex-justify-center">
                            <a href="#" class="fg-dark no-decor">
                                <ul class="step-list">
                                    <li>
                                        <h4>SERVER & SYSTEM GENERATORS and WEB SYSTEM Builder</h4>
                                        <p>
                                            This year the BACKEND SERVER generator and the MS SYSTEM Generator will be completed. a fully compatible
                                            Metro4 System for web solutions will be launched next year. Everyone I disable moves the system and agenda sharing,
                                            which means nothing just a table and form, development for all other extremes is fast and effortless
                                        </p>
                                    </li>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <li>
                                        <h4>EASY-DATA-CENTER</h4>
                                        <p>
                                            One Click DB Schema, Auto API, Auto Doc, Templates for Specific Procedures, Apis, System Check, FTP, WEB, AutoControl System
                                            Central Tables, Multi DB Support, Multi Model Support, One Dev Language, >100finished tool finished on github. Solutions For all World Servers Variables.
                                            (WSDL will be added - only SAP), IS/OS/Linux/Windows Support, Minimal Hardware Requirements, Unlimited Easy Modifications/Customizations
                                            DB Schema Controling, Implemented Inteligent solution for automatic repair existing Fails, High multiple Security, EASY Implementation/Migration
                                            Better Data using posibilities, Optimized Traffic, Prepared For Automatioc Generate Server From Database Schema (With all Object Types)
                                            Development using template renaming only for new table/API. Proper 3-tier system logic solutions for software.
                                            System Core has custom analyzers for Core Controlling and more Future innovations.
                                        </p>
                                    </li>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />

                                    <li>
                                        <h4>EASY-SYSTEM-BUILDER</h4>
                                        <p>
                                            Super modern EASY SYSTEM Builder, it has automatic intelligent SYSTEM CORE for editing only with Insert Form. They are supported
                                            All types of systems - Machine control, Terminal, Control, Complete IT system, DataHouse, WorkFlow, Media, Video, 3D
                                            , Reporting, HW system management, etc. Development is extremely fast, All Requests are solved by one man maximum in a few days.
                                            System Core has custom analyzers for Core Controlling and more Future innovations.
                                        </p>
                                    </li>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </ul>
                            </a>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <a href="https://github.com/liborsvoboda?tab=repositories" class="unstyled-link c-pointer" target="_blank">
                                <div class="icon-box border bd-brand">
                                    <div class="icon bg-brand fg-white"><span class="mif-github"></span></div>
                                    <div class="content d-flex flex-align-center pl-4">
                                        <div class="h5 text-light"><span class="reduce-1 enlarge-1-md">Migrations from Existing Systems, Addons, Modernization, NEW Easy and Future IT Way</span></div>
                                    </div>
                                </div>
                            </a>
                            <p>
                                Systems are ready for Easy Support (RDP implementation completed in 5 hours). Agenda sharing system policy (ideas from the world) is the world's gateway to better work, use of society and world resources.
                                The planet needs a global policy for central problem solving by all the people of the world. And it's a win-win for everyone.
                                Each Agenda Is Only: Database Table - For Backend AND System Form - for frontend. All others processes are fully automatized
                                Its Vision for 21.st. Click for open 57 older Free projects with GroupWare Face for Central managing of Company Resources.
                            </p>
                            <br>
                            <div id="pictures" data-role="carousel" data-auto-start="true" data-cls-bullet="bullet-big" data-cls-controls="fg-blue"
                                 style="width: 500px;" data-cls-bullet-on="bg-red drop-shadow" data-cls-slides="rounded" data-control-next="<span class='mif-arrow-right'></span>" data-control-prev="<span class='mif-arrow-left'></span>">
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/39.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/40.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/41.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/42.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/43.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/1.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/2.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/3.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/4.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/5.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/6.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/7.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/8.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/9.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/10.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/11.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/12.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/13.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/14.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/15.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/16.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/17.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/18.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/19.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/20.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/21.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/22.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/23.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/24.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/25.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/26.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/27.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/28.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/29.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/30.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/31.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/32.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/33.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/34.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/35.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/36.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/37.png"></div>
                                <div class="slide" data-cover="../server/EASYDATACenter_Downloads/PhotoGallery/img/38.png"></div>
                            </div>
                            <br>
                            <div data-role="example">
                               <video data-role="video-player" class="video-player" poster="../logo.png" 
                               data-controls-hide="1000" data-loop="true" width="500" height="360" controls >
                                    <source src="../server/Media/VideoGallery/EASYDATACenter-LastVideo.mp4" type="video/mp4" />
                               </video>
                            </div>

                            <br>
                            <div id="pictures" data-role="carousel" data-auto-start="true" data-cls-bullet="bullet-big" data-cls-controls="fg-blue"
                                 style="width: 500px;" data-cls-bullet-on="bg-red drop-shadow" data-cls-slides="rounded" data-control-next="<span class='mif-arrow-right'></span>" data-control-prev="<span class='mif-arrow-left'></span>">
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/43.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/44.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/45.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/46.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/47.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/1.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/2.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/3.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/4.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/5.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/6.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/7.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/8.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/9.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/10.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/11.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/12.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/13.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/14.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/15.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/16.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/17.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/18.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/19.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/20.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/21.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/22.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/23.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/24.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/25.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/26.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/27.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/28.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/29.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/30.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/31.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/32.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/33.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/34.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/35.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/36.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/37.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/38.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/39.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/40.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/41.png"></div>
                                <div class="slide" data-cover="../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/img/42.png"></div>
                            </div>
                            <br>
                            <div data-role="example">
                                <video data-role="video-player" class="video-player" poster="../logo.png"
                                       data-controls-hide="1000" data-loop="true" width="500" height="360" controls>
                                    <source src="../server/Media/VideoGallery/EASYSYSTEMBuilder-LastVideo.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

          @*      <div class="d-flex flex-justify-center flex-align-center">
                    <button class="mt-10 mb-10 d-none d-block-md button large bg-brand fg-white shadow-1">Create you branded help center</button>
                    <button class="mt-10 mb-10 d-none-md button bg-brand fg-white shadow-1">Create you branded help center</button>
                </div>*@
            </div>
        </div>

        <div class="widgets pt-10 pb-10">
            <div class="container">
                <div class="row mt-10">
                    <div class="cell-md-6 pt-4">
                        <div class="info-panel no-overflow border bd-brand h-100">
                            <div class="info-panel-header bg-brand fg-white">Customizable design</div>
                            <div class="info-panel-content">
                                <div class="mx-10 my-6"><img src="~/metro/images/qcustomizable.svg" class="w-100"></div>
                                <span class="text-leader2">You decide where to place it and how it will look. Fonts, colors, sizes and some behavior options - everything is configurable.</span>
                            </div>
                        </div>
                    </div>
                    <div class="cell-md-6 pt-4">
                        <div class="info-panel no-overflow border bd-brand h-100">
                            <div class="info-panel-header bg-brand fg-white">Search suggestions</div>
                            <div class="info-panel-content">
                                <div class="mx-10 my-6"><img src="~/metro/images/search_suggeestions.svg" class="w-100"></div>
                                <span class="text-leader2">Usually, people donâ€™t know how to ask for what they need. Aistant can help with that by generating search suggestions based on the content of your website.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-10-md">
                    <div class="cell-md-6 pt-4">
                        <div class="info-panel no-overflow border bd-brand h-100">
                            <div class="info-panel-header bg-brand fg-white">Analytics</div>
                            <div class="info-panel-content">
                                <div class="mx-10 my-6"><img src="~/metro/images/analitics.svg" class="w-100"></div>
                                <span class="text-leader2">What your visitors search for? What are the most frequent queries? Do they satisfied with the results? You will get the answers for these and other questions with our analytics tool.</span>
                            </div>
                        </div>
                    </div>
                    <div class="cell-md-6 pt-4">
                        <div class="info-panel no-overflow border bd-brand h-100">
                            <div class="info-panel-header bg-brand fg-white">"Contact us" form</div>
                            <div class="info-panel-content">
                                <div class="mx-10 my-6"><img src="~/metro/images/contact_us.svg" class="w-100"></div>
                                <span class="text-leader2">Search request - is the first interaction of the potential client with your website. If they found what needed - thatâ€™s great. </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </window>

    <div id="EDCinfoBox" class="info-box" data-role="infobox" data-type="info" data-width="1000">
        <span class="button square closer"></span>
        <div class="info-box-content">
            <h3>What is EASY-DATA-Center?</h3>
            <p style="font-size:13px;margin-top:0px">EASY-DATA-Center [EDC] is Visual Studio Project for immediately Start With do snapshot only of Existing DB and Run Or for unlimited next EASY Developing.</p>
            <p style="font-size:13px;margin-top:0px">EDC is Now more than just Backend Server. In little than 1 Year was created the new IT Backend Server Solution of its kind, Now is The unique Groupware Server. </p>
            <p style="font-size:13px;margin-top:0px">EDC Immediately Solve these Servers: ANY BACKEND|FTP|WEB|Intranet|MassEmail|WATCHDOG|MEDIA|PROJECT|INFO| & Multi Server for ANY 3 Layer SYSTEM</p>
            <h5>Short List of used Technnologies:</h5>
            <p style="font-size:13px;margin-top:0px"><a href="https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md" target="_blank" title="Click for Open Supportd OS List">Supported are ALL OS Systems and Clouds which are in every Company, Organisation, School, Household. </a></p>
            <p style="font-size:13px;margin-top:0px"><a href="https://learn.microsoft.com/en-us/ef/core/providers/?tabs=dotnet-core-cli" target="_blank" title="Click for Open Support DB List"> Supported are ALL standard SQL DB Types. Multi DB/API Solution[Systems] in One Instance are Supported.</a></p>
            <ul>
                <li>ANY BACKEND Server - contain Automatic Tools do make:Full DB/API Docs,Diagram,DB Snapshot,API Auto/Man Creation</li>
                <li>Open/Securited FTP Server with administration</li>
                <li>EDC Manager - for full Administration Of Server with Uniques functionalities</li>
                <li>WatchDog Admin/Monitor For AutoChecking HDD,Space,Folders, Memory, IP, Port, Ping, ALL DB Connection types,URL by used part of posibilities of HealthCheck </li>
                <li>Web Server with Full Security, support more WEB server Types: Node,SPA,MVC,Razor</li>
                <li>Unique APIs as: EmailAPI for MaasEmailing,Remote Server Monitor/Control,Export API DBSchema,WebSocket Logger</li>
                <li>Inteligent Search Documentation, Full Dev Documentation, Prepared API Templates for COPY/PASTE new API/DB TABLE/PROCEDURE</li>
                <li>Custom EDC Manager App for Config/Setting Server/WatchDog is Free</li>
            </ul>
            <p style="font-size:13px;margin-top:0px"><strong>For MORE info about Next Functionalities and Possibilities READ Documentation</strong></p>
            <p><strong>Full Solution you can <a href="/server/Downloads/EASYDATACenter/" target="_blank">Download</a> or <a href="https://kliknetezde.cz" target="_blank">Watch Online</a> </strong></p>
        </div>
    </div>

    <div id="ESBinfoBox" class="info-box" data-role="infobox" data-type="info" data-width="800">
        <span class="button square closer"></span>
        <div class="info-box-content">
            <h3>What is EASY-SYSTEM-Builder?</h3>
            <p style="font-size:13px;margin-top:0px">EASY-DATA-Center [ESB] is Visual Studio Project for immediately Start Extremely Fast Development of ANY SYSTEM.</p>
            <p style="font-size:13px;margin-top:0px">ESB is universal SYSTEM TEmplate for Next Developing only by FORM Builder early by Graphics Designer only. </p>

            <p style="font-size:18px;">ESB Immediately Prepared for: ANY MS SYSTEMS [web Planned] & Applications using as:</p>
            <p style="font-size:20px;margin-top:0px">IS Systems | Touch Systems |Terminal Panels |Controling-DWHS Systems</p>
            <p style="font-size:20px;margin-top:0px">MultiMedia Systems | Machine Control Panels | Production Terminals | Etc..</p>
            <p style="font-size:20px;">Based on 3 Layer Technology. </p>
            <p style="font-size:20px;">For next 1 year is Planned full compatible WEB client on METRO4 (this web)</p>

            <h5 style="margin-bottom:0px">2 of 50 used Technologies open Unlimited Possibilities:</h5>
            <p style="font-size:20px;margin-top:0px"><a href="https://mahapps.com/" target="_blank" title="Click for Info About First Technology">Design Technology Metro</a></p>
            <p style="font-size:20px;margin-top:0px"><a href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/?view=netdesktop-7.0" target="_blank" title="Click for Open Support DB List"> WPF.NET</a></p>

            <p style="font-size:20px;"><strong>For MORE info about Next Functionalities and Possibilities READ Documentation</strong></p>
            <p style="font-size:20px;margin-top:0px"><strong>Example EDC Manager or ther Cilents you can <a href="/server/Downloads/" target="_blank">Download</a> or <a href="https://kliknetezde.cz" target="_blank">Watch Online</a> </strong></p>
        </div>
    </div>
    


    <script>
        /* Startup */

        // Declaration


        // Startup Calling
        $.get("/Generators/GetGeneratedToolCount").then(function (data) {
            $('#toolCounter').data('counter').reset();
            $('#toolCounter').data('counter').options.value = data.ToolCounter;
            $('#toolCounter').data('counter').start();
        });


        // Function Part


    </script>
</div>

```    
			
---   
			### Databases.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.DatabasesModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EASY DATA Center ANY DATABASES Politics - ITs same for ALL - not use anomaly, but are supported :)"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="950px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Tools/EDC_ESB_InteliHelp/book/DATABASES.html' frameborder='0' style='overflow:hidden;height:900px;width:100%'></iframe>">

    </div>
 
    <script>
       

    </script>
</div>

```    
			
---   
			### DocumentationsGenerators.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.DocumentationsGeneratorsModel
@{
    ViewData["Title"] = "Project Documentations Generators";
}
    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
    <window>
        <div class="h4 fg-darkOrange" style="top:10px;">
            EASY to USE:<br />
            <div class=" d-flex c-help ani-hover-heartbeat fg-red" onclick="Metro.infobox.open('#VisualInfoBox');">
                Import Project Comment File XML from Visual Studio for Generate MarkDown MD documentation.
            </div>
            Import All MArkDown files With Summary File - Its signpost for Robust Inteligent HELP Documentations<br />
            Documentations are automatically generated for Download<br />
        </div>

        @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {

        }
        else {
            <div class="h4 fg-red ani-hover-heartbeat">
                For Make and Download Documentation Files from your XML/MD source files You must be Logged in
            </div>
        }

        <div class="about ">
            <div class="container">
                <div class="mt-10 text-center">
                    <div class="fg-darkSteel" style="font-weight:bold;font-size:40px;opacity:0.7;">
                        Static Pages Project Documentation GENERATORS
                    </div>
                    <p class="text-leader pl-20-md pr-20-md">
                        By click on left Icon open Example
                    </p>
                </div>

                <div class="row mt-10">
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"MarkDownMD HTML Viewer",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/MDViewer/demo.html\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="xmlToMdRating" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("XmlToMd");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("XmlToMd");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">XML to MarkDown</div>
                                            </div>
                                            <div class="d-flex">
@*                                                 @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                    <input class="mt-4" type="file" data-role="file" data-on-select="uploadXmlToMd" accept=".xml" data-cls-caption="width50" data-prepend="Select your XML file" data-button-title="<span class='mif-folder mif-3x ani-ring'></span>">

                                                    <span id="xmlToMdDownload" onclick='downloadXmlToMd();' class="mif-file-download ani-heartbeat mif-3x pl-10 mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download your MD MarkDown Documentation" />
                                                } *@
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openMDToHtml();Metro.window.create({title:"MD to HTML Online Converter",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/MDViewer/index.html\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Open MD to HTML Online Converter"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="mdToHtmlRating" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("MdToHtml");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("MdToHtml");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pt-7 pl-4">MD to HTML Online Converter</div>
                                            </div>
                                            <div class="d-flex">
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Inteligent MD Book Example",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/EDC_ESB_InteliHelp/book/index.html\" style=\"width:100%;height:600px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-search"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="mdToMdBookRating" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("MdToMdBook");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            3000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("MdToMdBook");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            5000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="c-help text-left pl-4 ani-heartbeat" style="font-size:24px;" onclick="Metro.infobox.open('#MdBookInfoBox');">MarkDown to MD Book </div>
                                            <div class="d-flex">
@*                                                 @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                    <input class="mt-4" type="file" data-role="file" data-on-select="uploadMdToMdBook" accept=".md" data-cls-caption="width50" data-prepend="Select MarkDown Files" data-button-title="<span class='mif-folder mif-3x ani-ring'></span>" multiple="multiple">

                                                    <span id="mdToMdBookDownload" onclick='downloadMdToMdBook();' class="mif-file-download ani-heartbeat mif-3x pl-10 mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download your MD Book" />
                                                } *@
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="pb-10 mb-10"></div>


            @* Info Boxs *@
            <div id="VisualInfoBox" class="info-box" data-role="infobox" data-type="info" data-width="800">
                <span class="button square closer"></span>
                <div class="info-box-content">
                    <h5>How To Export All Comment from Visual Studio To XML</h5>
                    <p style="font-size:20px;margin-top:0px">
                        <a href="https://www.c-sharpcorner.com/article/exporting-comments-in-visual-studio/" target="_blank" title="Open Click by Click Help How to Export All project Comments">
                        Pages with Click by Click Help How to Export All project comments to XML file
                        </a>
                    </p>
                    <p style="font-size:20px;margin-top:0px">Exported XML file is source file for Easy & Pretty documentations of Projects</p>
                </div>
            </div>

            <div id="MdBookInfoBox" class="info-box" data-role="infobox" data-type="info" data-width="800">
                <span class="button square closer"></span>
                <div class="info-box-content">
                    <h5>What is Required For Generating MD Book from MD files</h5>
                    <p style="font-size:16px;margin-top:0px">
                        MD Book is generated web Pages with indexed Content For FullText Searching in All MD Files
                    </p>
                    <p style="font-size:16px;margin-top:0px">
                        Required is only file SUMMARY.md In this file are Linked All MD Files As MD Book Menu
                    </p>
                    <p style="font-size:16px;margin-top:0px">
                        Code Format is Easy:<br /><br />
                        ### Main Menu 1 Section<br />
                        ```markdown<br />
                        [MenuItemName](./SomeFile.MD)<br />
                        [MenuItemName](./NextMdFile.md)<br />
                        ```<br />
                        ---<br />
                        ### Next Main Menu 2 Section<br />
                        ```markdown<br />
                        [ThirdMenuItem](./Next.MD)<br />
                        [XXX](./other.md)<br />
                        ```<br />
                        ---<br /><br />
                    </p>
                    <p style="font-size:20px;margin-top:0px">
                        If Generation is not succes Insert 'Empty line' <br />
                        before each line in SUMMARY.MD file and 3 spaces to each end line
                    </p>

                    <p style="font-size:20px;margin-top:0px">Exported XML file is source file for Easy & Pretty documentations of Projects</p>
                </div>
            </div>
    </window>
 
    <script>
        /* Startup */

        // Declaration
        $('#xmlToMdDownload').hide(); $('#mdToMdBookDownload').hide();
        let xmlToMdLastId = null; mdToMdBookLastId = null;

        // Startup Calling
        
        var notify = Metro.notify; notify.setup({ width: 300, duration: 5000, animation: 'easeOutBounce' });
        notify.create("Please Rate Tool After Download..."); notify.reset();
        GetGeneratorsRating();



        // Function Part
        function setGeneratorsRating(value, star, element) {
            let recId;
            switch (element.id) {
                case "xmlToMdRating": recId = xmlToMdLastId; break;
                case "mdToHtmlRating": recId = "MdToHtml"; break;
                case "mdToMdBookRating": recId = mdToMdBookLastId; break;
                default:
                    break;
            }

            if (recId == "MdToHtml") {
                $.ajax({
                    type: "GET", url: "/Generators/SetGeneratedToolRatingName/" + recId + "/" + value, dataType: 'json',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                    }
                }).always(function (data) { GetGeneratorsRating(); });
            } else {
                $.ajax({
                    type: "GET", url: "/Generators/SetGeneratedToolRatingList/" + recId + "/" + value, dataType: 'json',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                    }
                }).always(function (data) { GetGeneratorsRating(); });
            }
            $(element).data('rating').static(true);
        };
        function GetGeneratorsRating() {
            $.get("/Generators/GetGeneratedToolRatingList").then(function (data) {
                data = JSON.parse(data);
                data.forEach(tool => {
                    switch (tool.Name) {
                        case "XmlToMd":
                            $('#xmlToMdRating').data('rating').val(tool.Rating);
                            $('#xmlToMdRating').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "MdToHtml":
                            $('#mdToHtmlRating').data('rating').val(tool.Rating);
                            $('#mdToHtmlRating').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "MdToMdBook":
                            $('#mdToMdBookRating').data('rating').val(tool.Rating);
                            $('#mdToMdBookRating').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        default:
                            break;
                    }
                });
            });
        };


        async function uploadXmlToMd(files,element) {
            if (files.length > 0) {
                showPageLoading();
                let dataset = [];

                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    let fileContent = await new Promise((resolve, reject) => {
                        const reader = new FileReader()
                        reader.onloadend = () => resolve(reader.result)
                        reader.onerror = reject
                        reader.readAsDataURL(files[i])
                    });
                    dataset.push({ name: files[i].name, extension: files[i].name.split('.').pop(), fileArray: fileContent });
                }

                var def = $.ajax({
                    global: false, type: "POST", url: "/Generators/GenerateXmlToMd", dataType: 'json',
                    headers: {
                        'Content-type': 'application/json',
                        "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                    },
                    data: JSON.stringify({ Files: dataset })
                });

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Uploading XML file for generate MD MarkDown..."); notify.reset();

                def.fail(function (data) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Download MD MarkDown documentation Failed", "Alert", { cls: "alert" }); notify.reset();
                    $('#xmlToMdDownload').hide();
                    hidePageLoading();
                });

                def.done(function (data) {
                    xmlToMdLastId = data.genRecord;
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Your MD MarkDown documentation was Generated succesfully."); notify.reset();
                    $('#xmlToMdDownload').show();
                    hidePageLoading();
                    $('#xmlToMdRating').data('rating').static(false);
                });
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Any XML was not Selected", "Info"); notify.reset();
                $('#xmlToMdDownload').hide();
            }
        };
        async function downloadXmlToMd() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading MD MarkDown Documentation File..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetGeneratedXmlToMd");
            hidePageLoading();
        };

        async function openMDToHtml() {
            $('#mdToHtmlRating').data('rating').static(false);
        };

        async function uploadMdToMdBook(files) {
            if (files.length > 0) {
                showPageLoading();
                let dataset = [];

                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    let fileContent = await new Promise((resolve, reject) => {
                        const reader = new FileReader()
                        reader.onloadend = () => resolve(reader.result)
                        reader.onerror = reject
                        reader.readAsDataURL(files[i])
                    });
                    dataset.push({ name: files[i].name, extension: files[i].name.split('.').pop(), fileArray: fileContent });
                }

                var def = $.ajax({
                    global: false, type: "POST", url: "/Generators/GenerateMdToMdBook", dataType: 'json',
                    headers: {
                        'Content-type': 'application/json',
                        "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                    },
                    data: JSON.stringify({ Files: dataset })
                });

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Uploading MD files for generate MD Book..."); notify.reset();

                def.fail(function (data) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Download MD Book Failed", "Alert", { cls: "alert" }); notify.reset();
                    $('#mdToMdBookDownload').hide();
                    hidePageLoading();
                });

                def.done(function (data) {
                    mdToMdBookLastId = data.genRecord;
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Your MD Book was Generated succesfully."); notify.reset();
                    $('#mdToMdBookDownload').show();
                    hidePageLoading();
                    $('#mdToMdBookRating').data('rating').static(false);
                });
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Any MD file was not Selected", "Info"); notify.reset();
                $('#GenerateMdToMdBook').hide();
            }
        };
        async function downloadMdToMdBook() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading MD Book..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetGeneratedMdToMdBook");
            hidePageLoading();
        };

       
    </script>
</div>

```    
			
---   
			### Downloads.cshtml     

```http   
			ď»ż@page
@model ServerCorePages.DownloadsModel
@{
    ViewData["Title"] = "Welcome In GroupWare Solutions IT News";
}

<div class="text-center info-panel">
    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    *@
         
    <window>
        <div class="hero hero-bg 1bg-brand-secondary add-neb">
            <div class="container">
                <div class="row">
                     <div class="mt-10 w-100 text-center">
                        <div class="cell-md-12 pt-4">
                            <div class="head-bar pos-absolute after-fg-darkGrayBlue w-100" style="z-index:0;">
                                <button class="expand-button"><span></span></button>
                                <span class="app-title"><b>GroupWare Solutions - Download Center</b> on <a href="/server/" target="_blank">[Server browse]</a> or show <a href="https://kliknetezde.cz" target="_blank">[Online Examples]</a></span>
                            </div>
                            <ul data-app-bar="true"
                                data-role="materialtabs"
                                data-fixed-tabs="true"
                                class="bg-transparent"
                                data-cls-tab=" fg-black text-light"
                                data-cls-tab-active="text-bold bg-facebook"
                                data-cls-marker="bg-orange"
                                data-deep="true">
                                <li><a href="#easydatacenter">EDC Servers</a></li>
                                <li><a href="#easysystembuilder">ESB Systems</a></li>
                                <li><a href="#databases">DATABASES</a></li>
                                <li><a href="#addonsothers">AddOns/Others</a></li>
                                <li><a href="#media">Media</a></li>
                                <li><a href="#developers">Developers</a></li>
                            </ul>
                            <div style="margin-top: 60px">
                                <div id="easydatacenter">
                                    <table class="table row-border row-hover subcompact" data-horizontal-scroll="true"
                                    data-rows="-1" data-show-search="false" data-rownum="false" data-show-rows-steps="false" data-show-pagination="false">
                                        <thead>
                                            <tr>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left text-bold">Name</th>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left">Short Description</th>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left text-bold">OS Version</th>
                                                <th data-cls-column="text-right" class="text-right">Download</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>EDC Server</td>
                                                <td>Full Free (dev locked) EDC Server Installer for YOURS.Its prepared for any DB/API/WEB/FTP/Portal/etc Server Solutions</td>
                                                <td>WIN/LIN/Gcloud/Docker</td>
                                                <td><a href="/server/Downloads/EASYDATACenter/Server/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>FULL DB</td>
                                                <td>Full MSSQL DB For Start finished Server Solution locally. You can test the prepared Server solution</td>
                                                <td>MSSQL</td>
                                                <td><a href="/server/Downloads/UNIVERSAL_MSSQL_DB/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>EDC Manager</td>
                                                <td>Free Media EDC Server Manager Installer for Administration EASY-DATA-Center Multi Server for any Company</td>
                                                <td>Win x86/x64</td>
                                                <td><a href="/server/Downloads/EASYDATACenter/Client/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>Templates</td>
                                                <td>All System Templates for COPY/PASTE Developing of any Web/Api/Ftp/Email/Lic/Projects and Primary Backend Server</td>
                                                <td>WIN/LIN/Gcloud/Docker</td>
                                                <td><a href="/server/EASYDATACenter_Downloads/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>Printing</td>
                                                <td>All Created print Reports And Viewer/Designer/Cmd Tools for inspiration and help with created new</td>
                                                <td>All Print</td>
                                                <td><a href="/server/Downloads/FYIReporting/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>LicenseSHOPER Srv</td>
                                                <td>Unlimited Media Licence Server Based On SQL Keys With Business System. Server Listen on GET/POST for Key CHecking</td>
                                                <td>WIN/LIN/Gcloud/Docker</td>
                                                <td><a href="/server/Downloads/LicenseSHOPER/Server/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>ShopINGer Srv</td>
                                                <td>Media Business System with MultiBranch/Media Offers, Orders, Invoicing,Item,Tax,Vat with Unlimited Extensions </td>
                                                <td>WIN/LIN/Gcloud/Docker</td>
                                                <td><a href="/server/Downloads/LicenseSHOPER/Server/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="easysystembuilder">
                                    <table class="table row-border row-hover subcompact" data-horizontal-scroll="true"
                                           data-rows="-1" data-show-search="false" data-rownum="false" data-show-rows-steps="false" data-show-pagination="false">
                                        <thead>
                                            <tr>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left text-bold">Name</th>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left">Short Description</th>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left text-bold">OS Version</th>
                                                <th data-cls-column="text-right" class="text-right">Download</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>EDC Srv Manager</td>
                                                <td>Free Media ESB System as EDC Server Manager with More Special functionalities with unimited extensions</td>
                                                <td>Win x86/x64</td>
                                                <td><a href="/server/Downloads/EASYDATACenter/Client/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>Shopinger</td>
                                                <td>Free Media Business System for Managing MultiBranch Offer,Order,Invoices in All currencies and More.. with unimited extensions</td>
                                                <td>Win x86/x64</td>
                                                <td><a href="/server/Downloads/ShopINGer/Client/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>LicenseSHOPER</td>
                                                <td>Free Media Licenses & Business System for Managing MultiBranch Offer,Order,Invoices in All currencies and More.. with unimited extensions</td>
                                                <td>Win x86/x64</td>
                                                <td><a href="/server/Downloads/LicenseSHOPER/Client/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>GlobalNET</td>
                                                <td>Free Media System with More Special Functionalities, All Modern Technologies are supported, Its prepared for Fast Developing of ANY System Types, Terminals for Windows /Web Client is in DEV</td>
                                                <td>Win x86/x64</td>
                                                <td><a href="/server/Downloads/GlobalNET/Client/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>Templates</td>
                                                <td>All System Templates for COPY/PASTE Developing of any System</td>
                                                <td>Win x86/x64</td>
                                                <td><a href="/server/EASYSYSTEMBuilder_Downloads/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>Printing</td>
                                                <td>All Created print Reports And Viewer/Designer/Cmd Tools for inspiration and help with created new</td>
                                                <td>All Print</td>
                                                <td><a href="/server/Downloads/FYIReporting/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="databases">
                                    <table class="table row-border compact row-hover subcompact" data-role="table" data-rows="-1" data-show-search="false" data-rownum="false" data-show-rows-steps="false" data-show-pagination="false">
                                        <thead>
                                            <tr>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left text-bold">Name</th>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left">Short Description</th>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left text-bold">OS Version</th>
                                                <th data-cls-column="text-right" class="text-right">Download</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>UNI EDC DB</td>
                                                <td>Universal Full MSSQL Database backup for start EASY-DATA-CENTER Solution and All APP Clones locally</td>
                                                <td>MSSQL</td>
                                                <td><a href="/server/Downloads/UNIVERSAL_MSSQL_DB/EASYDATACenter.bak" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>MSSQL SrvPath</td>
                                                <td>Prepared scripts for Backup / Restore / Upload DB for starting EASYDATACenter Server</td>
                                                <td>Win x86</td>
                                                <td><a href="/server/Downloads/UNIVERSAL_MSSQL_DB/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>MSSQL Tbl</td>
                                                <td>Exported SQL Tables, Procedures, Scripts, Views for System / Server / Managing ESB and EDC solutions</td>
                                                <td>Win x86</td>
                                                <td><a href="/server/EASYDATACenter_Downloads/ANY_DATABASES_Help/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="addonsothers">
                                    <table class="table row-border compact row-hover subcompact" data-role="table" data-rows="-1" data-show-search="false" data-rownum="false" data-show-rows-steps="false" data-show-pagination="false">
                                        <thead>
                                            <tr>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left text-bold">Name</th>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left">Short Description</th>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left text-bold">OS Version</th>
                                                <th data-cls-column="text-right" class="text-right">Download</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>FYIReporting</td>
                                                <td>Report Designer/Viewer/Cmd Installer for Printing from EASYSYSTEMBuider</td>
                                                <td>Win x86</td>
                                                <td><a href="/server/Downloads/FYIReporting/FyiReporting_x86.exe" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>FYIReporting</td>
                                                <td>Report Designer/Viewer/Cmd tools in Installer for Printing from EASYSYSTEMBuider</td>
                                                <td>Win x64</td>
                                                <td><a href="/server/Downloads/FYIReporting/FyiReporting_x64.exe" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>Printing</td>
                                                <td>All Created print Reports And Viewer/Designer/Cmd Tools for inspiration and help with created new</td>
                                                <td>All Print</td>
                                                <td><a href="/server/Downloads/FYIReporting/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="media">
                                    <table class="table row-border compact row-hover subcompact" data-role="table" data-rows="-1" data-show-search="false" data-rownum="false" data-show-rows-steps="false" data-show-pagination="false">
                                        <thead>
                                            <tr>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left text-bold">Name</th>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left">Short Description</th>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left text-bold">OS Version</th>
                                                <th data-cls-column="text-right" class="text-right">Download</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Solutions</td>
                                                <td>Photo Gallery of EDC and ESB Solutions</td>
                                                <td>Web</td>
                                                <td><a href="/server/Media/PhotoGallery/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>Solutions</td>
                                                <td>Video Gallery of EDC and ESB Solutions</td>
                                                <td>Web</td>
                                                <td><a href="/server/Media/VideoGallery/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>Fast Tech</td>
                                                <td>Short Technology and Practise Using informations</td>
                                                <td>Web</td>
                                                <td><a href="/server/Media/ManagerInfoBook/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>Fast Tech</td>
                                                <td>Short Presensation of EDC & ESB Projects - Future GroupWare Solutions </td>
                                                <td>Web</td>
                                                <td><a href="/server/Media/Presentation/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>Old Lic</td>
                                                <td>Old Licenses and prices of IS Clones </td>
                                                <td>Web</td>
                                                <td><a href="/server/Media/SolutionLicPrices/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>Business</td>
                                                <td>Older Business informations of EDC & ESB Projects - in 1/2year moved To AUTO Generators level</td>
                                                <td>Web</td>
                                                <td><a href="/server/Media/DocsDescriptions/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>Case Study</td>
                                                <td>First Case Studies. The System clonning is 1 Day work</td>
                                                <td>Web</td>
                                                <td><a href="/server/Media/CaseStudies/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="developers">
                                    <table class="table row-border compact row-hover subcompact" data-role="table" data-rows="-1" data-show-search="false" data-rownum="false" data-show-rows-steps="false" data-show-pagination="false">
                                        <thead>
                                            <tr>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left text-bold">Name</th>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left">Short Description</th>
                                                <th data-sortable="true" data-sort-dir="asc" data-cls-column="text-left text-bold">OS Version</th>
                                                <th data-cls-column="text-right" class="text-right">Download</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>EDC Win Doc</td>
                                                <td>EASYDataCenter Gererated Full Code Structure Documentation in Windows Help File </td>
                                                <td>Win</td>
                                                <td><a href="/server/EASYDATACenter_Downloads/EASYDATACenter-FullDocsPC.chm" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>ESB Win Doc</td>
                                                <td>EASYSYSTEMBuilder Gererated Full Code Structure Documentation in Windows Help File </td>
                                                <td>Win</td>
                                                <td><a href="/server/EASYSYSTEMBuilder_Downloads/EASY-SYSTEM-Builder_FullDocs.chm" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>GroupWare</td>
                                                <td>EDC and ESB Inteligent Search Documentation about Projects </td>
                                                <td>Win</td>
                                                <td><a href="/Tools/EDC_ESB_InteliHelp/book/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>GroupWare</td>
                                                <td>EDC and ESB MD Documentation about Projects </td>
                                                <td>Win</td>
                                                <td><a href="/Docs/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>EDC Dev Support</td>
                                                <td>All Templates, Scrits, Codes for Dovelop Support </td>
                                                <td>Win</td>
                                                <td><a href="/server/EASYDATACenter_Downloads/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                            <tr>
                                                <td>ESB Dev Support</td>
                                                <td>All Templates, Scrits, Codes for Dovelop Support </td>
                                                <td>Win</td>
                                                <td><a href="/server/EASYSYSTEMBuilder_Downloads/" target="_blank"><span class="mif-file-download ani-heartbeat mif-3x"></span></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="about ">
            <div class="container bg-white">
                <div class="mt-10 text-center">
                    <div class="h1">EASY GroupWare Solutions Download Center</div>
                    <p class="text-leader pl-20-md pr-20-md">
                        Here is Examples Offline and Online Installation Files, Install Manuals,Full Developer Docummentations.
                        More Downloads you can find in Server Part
                    </p>
                </div>

                <div class="row mt-10">
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <a href="/server/EASYDATACenter_Downloads/EASYDATACenter-FullDocsPC.chm" class="unstyled-link c-pointer" target="_blank">
                                <div class="icon-box border bd-brand">
                                    <div class="icon bg-brand fg-white"><span class="mif-open-book"></span></div>
                                    <div class="content d-flex flex-align-center pl-4">
                                            <div class="h4 text-light c-pointer"><span class="reduce-1 enlarge-1-md">EASY-DATA-Center Full Developer Code Documentation Windows Help</span></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <a href="/server/EASYSYSTEMBuilder_Downloads/EASY-SYSTEM-Builder_FullDocs.chm" class="unstyled-link c-pointer" target="_blank">
                                <div class="icon-box border bd-brand">
                                    <div class="icon bg-brand fg-white"><span class="mif-open-book"></span></div>
                                    <div class="content d-flex flex-align-center pl-4">
                                        <div class="h4 text-light c-pointer"><span class="reduce-1 enlarge-1-md">EASY-SYSTEM-Builder Full Developer Code Documentation Windows Help</span></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="widgets pt-10 pb-10">
            <div class="container">
                <div class="row mt-10">
                    <div class="cell-md-6 pt-4">
                        <div class="info-panel no-overflow border bd-brand h-100">
                            <div class="info-panel-header bg-brand fg-white">EASY-DATA-Center DATABASE Download Free</div>
                            <div class="info-panel-content">
                                <div class="mx-10 my-6"><img src="~/metro/images/databases.svg" class="w-50"></div>
                                <span class="text-leader1">
                                    <a href="/server/Downloads/UNIVERSAL_MSSQL_DB/EASYDATACenter.bak" target="_blank">MSSQL Database backup Example for Server</a>
                                    <br />
                                    <a href="/server/Downloads/UNIVERSAL_MSSQL_DB/" target="_blank">MSSQL Installation Script or Use Management Studio</a>
                                    <br />
                                    Server Need Read/Write/Execute Rights on connected DB Only.
                                    <br />
                                    Backend Server Support All Database Types MSSQL,MYSQL,ORACLE,POSTGRESQL,DB2,SQLITE,etc..
                                    <br />
                                    By one instance can be provided to API unlimited Database servers in one time with different types also.
                                    <br />
                                    Shared Database has ANY technologies (Procedures,Help,Template,Views) for inspiration for Make ANY DB type (WEB,App,Bridge,DaTaHouse)
                                    <br />
                                    Shared MSSQL Database IS universal for ALL ESB System Clones for running.
                                    
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="cell-md-6 pt-4">
                        <div class="info-panel no-overflow border bd-brand h-100">
                            <div class="info-panel-header bg-brand fg-white">
                                EASY-DATA-Center Full Multi SERVER<br />
                                Locked Developing - Buy for OPEN
                            </div>
                            <div class="info-panel-content">
                                <div class="mx-10 my-6"><img src="~/metro/images/backend.png" class="w-50"></div>
                                <span class="text-leader1">
                                    <a href="/server/Downloads/EASYDATACenter/EDCServer/" target="_blank"
                                       title="Windows Installer, Extracted Project can run on Linux by EASYDATACenter.Dll">Download offline Installer EASY-DATA-Center Server</a>
                                    <br />
                                    <a href="https://KlikneteZde.Cz:5000" target="_blank">Or Browse EASY-DATA-Center Online (Read Only) </a>
                                    <br />
                                    Server can Run on Windows / Linux IS as Service/Application. (EASYDATACenter.dll)
                                    <br />
                                    Server need installed ASPNETCORE 6 Only (Windows/Linux supported)
                                    <br />
                                    Server SupportAll Database Types MSSQL,MYSQL,ORACLE,POSTGRESQL,DB2,SQLITE,etc..
                                    <br />
                                    Server GroupWare Solution has Enabled All included modules: AutoApi, AutoDoc, Web, FTP, HeathCheck, DataManager
                                    <br />
                                    All Dev Informations are included. For Change DB server is the "connection string" And implement "system templates" need only
                                    <br />
                                    This can be your NEW Backend Server for ANY SYSTEM / WEB / APPLICATION
                                    <br />
                                    Configuration is in "ProgramData/EASYDATACenter" for startup and its rewrited by "SesverSetting" Table after DB connection -> StartUp
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="cell-md-12 pt-4">
                        <div class="info-panel no-overflow border bd-brand h-100">
                            <div class="info-panel-header bg-brand fg-white">
                                EASY-SYSTEM-Builder as SERVER ADMIN<br />
                                for MANAGING EASY-DATA-Center - GroupWare Super Server<br />
                                Free FULL Unlimited TEST [Run with Published Schema]<br />
                                Locked Developing - Buy for OPEN
                            </div>
                            <div class="info-panel-content">
                                <div class="mx-10 my-6"><img src="~/metro/images/easydatacentermanager.png" class="w-50"></div>
                                <span class="text-leader1">
                                    <a href="/server/Downloads/EASYDATACenter/EDCManager/" target="_blank">Download Offline Installer EASY Server Admin</a>
                                    <br />
                                    <a href="https://KlikneteZde.Cz" target="_blank">Run Online EASY Server Admin (Read Only) </a>
                                    <br />
                                    Setup Client Setting For API Server Connection. Admin Client is Free.
                                    <br />
                                    Server Configuration Menu for Online Modify Server Setting (In DB) and its Aplied After Restart.
                                    <br />
                                    Server Contain Extra Technologies and Posibilities and is Opened for Next News.
                                    <br />
                                    All Updates Are Available for Free Or Cheap 750KÄŤ/Hour for Fast Easy Implement (the only possible one)
                                    <br />
                                    All development tasks are fully automated, all you need to do is create a DB table and COPY/RENAME the template
                                    <br />
                                    More Server Controls Are For Remote Over API. (For Admin Users Only)
                                    <br />
                                    Any Extension is Possible. Solutions are Fully Opened Code After Buy 1000Euro For Solution. (Extremelly Cheap ONE Buy For UNLIMITED Using)
                                    <br />
                                    Developing is Over Copy API Templates - Are Prepared for Any API Server Type, ASP NET CORE 6 Package Need Only 
                                    <br />
                                    DB Support: New Or SnapShot and Include Existing, ORACLE, MSSQL, MYSQL, POSTGRESQL, DB2, SQLITE, Etc. in One Same Code Type
                                    <br />
                                    DB Templates: Table, Procedure, View, Backup, Restore, AutoRestore/Backup TableCopy, FileWork, ImageWork, Set Rights,Etc
                                    <br />
                                    API Templates: Auth,Image,File,FullRest,Procedures,Views,SingleDB,MultiDB,SingleRec,MultiRec,WebSocket = not need Other
                                    <br />
                                    Server is MultiServer (GroupWareSolution) : API,FTP,WEB,Emailer,License Svr, for WINDOWS, LINUX, DOCKER, GCloud, Azure
                                    <br />
                                    Included the Word News: Server Core Auto Controlling,All API AUTO Generators, Auto Docs, Socket Controller, No Limit Update
                                    <br />
                                    Absolute EASY Technologies And Code Structure With full Help, Support, for Daily Adding the News (next Server type by One day :)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        </div>
    </window>

</div>

```    
			
---   
			### EDCImageList.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.EDCImageListModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EASY DATA Center Image Gallery Of Project, Server, Structure and All Others - Nothing is Secret"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="950px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../server/EASYDATACenter_Downloads/PhotoGallery/index.html' frameborder='0' style='overflow:hidden;height:900px;width:100%'></iframe>" >

    </div>
 
    <script>
      

    </script>
</div>

```    
			
---   
			### EDCManagersInfoCZ.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.EDCManagersInfoCZModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EDC & ESB Simple Technology And Possibility Information Result For Managers and Lead Workers"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="1050px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Tools/PdfViewer/web/viewer.html' frameborder='0' style='overflow:hidden;height:1000px;width:100%'></iframe>">

    </div>
 
    <script>

        $(window).ready(function () {
            setTimeout(function () {
                window[0].PDFViewerApplication.open('../../../server/Media/DocsDescriptions/EASYDATACenter_ProjectDescriptionCZ.pdf', 'EASYDATACenter_ProjectDescriptionCZ.pdf');
            }, 1000);
        });

        
    </script>
</div>

```    
			
---   
			### EDCManagersInfoEN.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.EDCManagersInfoENModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EDC & ESB Simple Technology And Possibility Information Result For Managers and Lead Workers"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="1050px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Tools/PdfViewer/web/viewer.html' frameborder='0' style='overflow:hidden;height:1000px;width:100%'></iframe>">

    </div>
 
    <script>

        $(window).ready(function () {
            setTimeout(function () {
                window[0].PDFViewerApplication.open('../../../server/Media/DocsDescriptions/EASYDATACenter_ProjectDescriptionEN.pdf', 'EASYDATACenter_ProjectDescriptionEN.pdf');
            }, 1000);
        });

    </script>
</div>

```    
			
---   
			### Error.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.ErrorModel
@{
    ViewData["Title"] = "Error";
}

<h1 class="text-danger">Error.</h1>
<h2 class="text-danger">An error occurred while processing your request.</h2>

@if (Model.ShowRequestId)
{
    <p>
        <strong>Request ID:</strong> <code>@Model.RequestId</code>
    </p>
}

<h3>Development Mode</h3>
<p>
    Swapping to the <strong>Development</strong> environment displays detailed information about the error that occurred.
</p>
<p>
    <strong>The Development environment shouldn't be enabled for deployed applications.</strong>
    It can result in displaying sensitive information from exceptions to end users.
    For local debugging, enable the <strong>Development</strong> environment by setting the <strong>ASPNETCORE_ENVIRONMENT</strong> environment variable to <strong>Development</strong>
    and restarting the app.
</p>

```    
			
---   
			### ESBImageList.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.ESBImageListModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EASY SYSTEM Builder Image Gallery Of Project, Server, Structure and All Others - Nothing is Secret"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="950px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../server/EASYSYSTEMBuilder_Downloads/PhotoGallery/index.html' frameborder='0' style='overflow:hidden;height:900px;width:100%'></iframe>">

    </div>
 
    <script>
        

    </script>
</div>

```    
			
---   
			### ESBManagersInfoCZ.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.ESBManagersInfoCZModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EDC & ESB Simple Technology And Possibility Information Result For Managers and Lead Workers"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="1050px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Tools/PdfViewer/web/viewer.html' frameborder='0' style='overflow:hidden;height:1000px;width:100%'></iframe>">

    </div>
 
    <script>


        $(window).ready(function () {
            setTimeout(function () {
                window[0].PDFViewerApplication.open('../../../server/Media/DocsDescriptions/EASYBuilder_ProjectDescriptionCZ.pdf', 'EASYBuilder_ProjectDescriptionCZ.pdf');
            }, 1000);
        });


    </script>
</div>

```    
			
---   
			### ESBManagersInfoEN.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.ESBManagersInfoENModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EDC & ESB Simple Technology And Possibility Information Result For Managers and Lead Workers"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="1050px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Tools/PdfViewer/web/viewer.html' frameborder='0' style='overflow:hidden;height:1000px;width:100%'></iframe>">

    </div>
 
    <script>

        $(window).ready(function () {
            setTimeout(function () {
                window[0].PDFViewerApplication.open('../../../server/Media/DocsDescriptions/EASYBuilder_ProjectDescriptionEN.pdf', 'EASYBuilder_ProjectDescriptionEN.pdf');
            }, 1000);
        });


    </script>
</div>

```    
			
---   
			### GalleryGenerators.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.GalleryGeneratorsModel
@{
    ViewData["Title"] = "Image/Video Gallery Generators";
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
    <window>
        <div class="h4 fg-darkOrange" style="top:10px;">
            EASY to USE:<br />
            Import Image Files for Presentations only.<br />
            Galleries are automatically generated for Download<br />
            Download, Unpack and Copy to your WebPages.<br />
            Gallery will be shown automatically by Index.html<br />
        </div>

        @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {

        }
        else {
            <div class="h4 fg-red ani-hover-heartbeat">
                For Create and Download your Gallery from your Pictures You must be Logged in
            </div>
        }

        <div class="about ">
            <div class="container">
                <div class="mt-10 text-center">
                    <div class="fg-darkSteel" style="font-weight:bold;font-size:40px;opacity:0.7;">
                        Static Pages Image / Videos Gallery GENERATORS
                    </div>
                    <p class="text-leader pl-20-md pr-20-md">
                        By click on left Icon open Example
                    </p>
                </div>

                <div class="row mt-10">
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Easy Gallery",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/EasyGallery/demo/index.html\" style=\"width:100%;height:600px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-images"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="easyGalleryRating" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("EasyGallery");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("EasyGallery");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4"> EASY Gallery </div>
                                            </div>
                                            <div class="d-flex">
@*                                                 @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                    <input class="mt-4" type="file" data-role="file" data-on-select="uploadEasyGallery" accept=".png,.jpg,.jpeg,.tiff" data-cls-caption="width50" data-prepend="Select your images" data-button-title="<span class='mif-folder mif-3x ani-ring'></span>" multiple="multiple">

                                                    <span id="easyGalleryDownload" onclick='downloadEasyGallery();' class="mif-file-download ani-heartbeat mif-3x pl-10 mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download your EASY Gallery" />
                                                } *@
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Carousel Gallery",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/CarouselGallery/demo/fullscreenCarouselImage.html\" style=\"width:100%;height:600px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-replay"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="carouselGalleryRating" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("CarouselGallery");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("CarouselGallery");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            3000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="text-left pl-4">Carousel Gallery</div>
                                            <div class="d-flex">
@*                                                 @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                    <input class="mt-4" type="file" data-role="file" data-on-select="uploadCarouselGallery" accept=".png,.jpg,.jpeg,.tiff" data-cls-caption="width50" data-prepend="Select your images" data-button-title="<span class='mif-folder mif-3x ani-ring'></span>" multiple="multiple">

                                                    <span id="carouselGalleryDownload" onclick='downloadCarouselGallery();' class="mif-file-download ani-heartbeat mif-3x pl-10 mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download your Carousel Gallery" />
                                                } *@
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"MP4 Carousel Video Gallery",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/CarouselVideoGallery/demo/videoCarousel.html\" allowfullscreen style=\"width:100%;height:600px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-film"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="carouselVideoGalleryRating" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("CarouselVideoGallery");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("CarouselVideoGallery");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            3000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="For Fast generation Carousel Video Gallery the Video Files are with zero size. After Download your Rewrite Video files in folder 'videos'">
                                            <div class="text-left pl-4">Carousel Video Gallery</div>
                                            <div class="d-flex">
@*                                                 @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                    <input class="mt-4" type="file" data-role="file" data-on-select="uploadCarouselVideoGallery" accept=".mp4" data-cls-caption="width50" data-prepend="Select your videos" data-button-title="<span class='mif-folder mif-3x ani-ring'></span>" multiple="multiple">

                                                    <span id="carouselVideoGalleryDownload" onclick='downloadCarouselVideoGallery();' class="mif-file-download ani-heartbeat mif-3x pl-10 mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download your Carousel Video Gallery" />
                                                } *@
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Video Player & PlayList",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/VideoListGallery/demo/index.html\" style=\"width:100%;height:600px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-list2"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="videoPlayListRating" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("VideoPlayList");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("VideoPlayList");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1500KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="For Fast generation Video Download your Video Player & PlayList the Video Files are with zero size. After Download your Rewrite Video files in folder 'videos'">
                                            <div class="text-left pl-4">Video Player & PlayList</div>
                                            <div class="d-flex">
@*                                                 @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                    <input class="mt-4" type="file" data-role="file" data-on-select="uploadVideoPlayList" accept=".mp4" data-cls-caption="width50" data-prepend="Select your videos" data-button-title="<span class='mif-folder mif-3x ani-ring'></span>" multiple="multiple">

                                                    <span id="videoPlayListDownload" onclick='downloadVideoPlayList();' class="mif-file-download ani-heartbeat mif-3x pl-10 mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download your Video Player & PlayList" />
                                                } *@
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div class="pb-10 mb-10"></div>


    </window>
 
    <script>
        /* Startup */

        // Declaration
        $('#easyGalleryDownload').hide();$('#carouselGalleryDownload').hide();$('#carouselVideoGalleryDownload').hide();$('#videoPlayListDownload').hide();
        let easyGalleryLastId = null; let carouselGalleryLastId = null; carouselVideoGalleryLastId = null; videoPlayListLastId = null;

        // Startup Calling
        GetGeneratorsRating();
        var notify = Metro.notify; notify.setup({ width: 300, duration: 5000, animation: 'easeOutBounce' });
        notify.create("Please Rate Tool After Download..."); notify.reset();




        // Function Part

        function setGeneratorsRating(value, star, element) {
            let recId;
            switch (element.id) {
                case "easyGalleryRating": recId = easyGalleryLastId; break;
                case "carouselGalleryRating": recId = carouselGalleryLastId; break;
                case "carouselVideoGalleryRating": recId = carouselVideoGalleryLastId; break;
                case "videoPlayListRating": recId = videoPlayListLastId; break;
                default:
                    break;
            }

            $.ajax({
                type: "GET", url: "/Generators/SetGeneratedToolRatingList/" + recId + "/" + value, dataType: 'json',
                headers: { 
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                }
            }).always(function (data) { GetGeneratorsRating(); });
            $(element).data('rating').static(true);
        };
        function GetGeneratorsRating() {
            $.get("/Generators/GetGeneratedToolRatingList").then(function (data) {
                data = JSON.parse(data);
                data.forEach(tool => {
                    switch (tool.Name) {
                        case "EasyGallery":
                            $('#easyGalleryRating').data('rating').val(tool.Rating);
                            $('#easyGalleryRating').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "CarouselGallery":
                            $('#carouselGalleryRating').data('rating').val(tool.Rating);
                            $('#carouselGalleryRating').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "CarouselVideoGallery":
                            $('#carouselVideoGalleryRating').data('rating').val(tool.Rating);
                            $('#carouselVideoGalleryRating').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "VideoPlayList":
                            $('#videoPlayListRating').data('rating').val(tool.Rating);
                            $('#videoPlayListRating').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        default:
                            break;
                    }
                });
            });
        };


        async function uploadEasyGallery(files) {
            if (files.length > 0) {
                showPageLoading();
                let dataset = [];

                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    let fileContent = await new Promise((resolve, reject) => {
                        const reader = new FileReader()
                        reader.onloadend = () => resolve(reader.result)
                        reader.onerror = reject
                        reader.readAsDataURL(files[i])
                    });
                    dataset.push({ name: files[i].name, extension: files[i].name.split('.').pop(), fileArray: fileContent });
                }

                var def = $.ajax({
                    global: false, type: "POST", url: "/Generators/GenerateEasyGallery", dataType: 'json',
                    headers: {
                        'Content-type': 'application/json',
                        "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                    },
                    data: JSON.stringify({ Files: dataset })
                });

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Uploading Images for generate Easy Gallery..."); notify.reset();

                def.fail(function (data) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Download Easy Gallery Failed", "Alert", { cls: "alert" }); notify.reset();
                    $('#easyGalleryDownload').hide();
                    hidePageLoading();
                });

                def.done(function (data) {
                    easyGalleryLastId = data.genRecord;
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Your Easy Gallery was Generated succesfully."); notify.reset();
                    $('#easyGalleryDownload').show();
                    hidePageLoading();
                    $('#easyGalleryRating').data('rating').static(false);
                });
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Any Image was not Selected", "Info"); notify.reset();
                $('#easyGalleryDownload').hide();
            }
        };
        async function downloadEasyGallery() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading EASY Gallery..."); notify.reset();
            AuthDownloadFile("GET", "/Generators/GetGeneratedEasyGallery");
            hidePageLoading();
        };

        async function uploadCarouselGallery(files) {
            if (files.length > 0) {
                showPageLoading();
                let dataset = [];

                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    let fileContent = await new Promise((resolve, reject) => {
                        const reader = new FileReader()
                        reader.onloadend = () => resolve(reader.result)
                        reader.onerror = reject
                        reader.readAsDataURL(files[i])
                    });
                    dataset.push({ name: files[i].name, extension: files[i].name.split('.').pop(), fileArray: fileContent });
                }

                var def = $.ajax({
                    global: false, type: "POST", url: "/Generators/GenerateCarouselGallery", dataType: 'json',
                    headers: {
                        'Content-type': 'application/json',
                        "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                    },
                    data: JSON.stringify({ Files: dataset })
                });

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Uploading Images for generate Carousel Gallery..."); notify.reset();

                def.fail(function (data) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Download Carousel Gallery Failed", "Alert", { cls: "alert" }); notify.reset();
                    $('#carouselGalleryDownload').hide();
                    hidePageLoading();
                });

                def.done(function (data) {
                    carouselGalleryLastId = data.genRecord;
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Your Carousel Gallery was Generated succesfully."); notify.reset();
                    $('#carouselGalleryDownload').show();
                    hidePageLoading();
                    $('#carouselGalleryRating').data('rating').static(false);
                });
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Any Image was not Selected", "Info"); notify.reset();
                $('#carouselGalleryDownload').hide();
            }
        };
        async function downloadCarouselGallery() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading Carousel Gallery..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetGeneratedCarouselGallery");
            hidePageLoading();
        };

        async function uploadCarouselVideoGallery(files) {
            if (files.length > 0) {
                showPageLoading();
                let dataset = [];

                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    let fileContent = await new Promise((resolve, reject) => {
                        const reader = new FileReader()
                        reader.onloadend = () => resolve(reader.result)
                        reader.onerror = reject
                        reader.readAsDataURL(files[i])
                    });
                    dataset.push({ name: files[i].name, extension: files[i].name.split('.').pop(), fileArray: fileContent });
                }

                var def = $.ajax({
                    global: false, type: "POST", url: "/Generators/GenerateCarouselVideoGallery", dataType: 'json',
                    headers: {
                        'Content-type': 'application/json',
                        "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                    },
                    data: JSON.stringify({ Files: dataset })
                });

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Uploading Images for generate Carousel Video Gallery..."); notify.reset();

                def.fail(function (data) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Download Carousel Video Gallery Failed", "Alert", { cls: "alert" }); notify.reset();
                    $('#carouselVideoGalleryDownload').hide();
                    hidePageLoading();
                });

                def.done(function (data) {
                    carouselVideoGalleryLastId = data.genRecord;
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Your Carousel Video Gallery was Generated succesfully."); notify.reset();
                    $('#carouselVideoGalleryDownload').show();
                    hidePageLoading();
                    $('#carouselVideoGalleryRating').data('rating').static(false);
                });
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Any video was not Selected", "Info"); notify.reset();
                $('#carouselVideoGalleryDownload').hide();
            }
        };
        async function downloadCarouselVideoGallery() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading Carousel Video Gallery..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetGeneratedCarouselVideoGallery");
            hidePageLoading();
        };

        async function uploadVideoPlayList(files) {
            if (files.length > 0) {
                showPageLoading();
                let dataset = [];

                for (let i = 0; i < files.length; i++) {
                    const reader = new FileReader();
                    let fileContent = await new Promise((resolve, reject) => {
                        const reader = new FileReader()
                        reader.onloadend = () => resolve(reader.result)
                        reader.onerror = reject
                        reader.readAsDataURL(files[i])
                    });
                    dataset.push({ name: files[i].name, extension: files[i].name.split('.').pop(), fileArray: fileContent });
                }

                var def = $.ajax({
                    global: false, type: "POST", url: "/Generators/GenerateVideoPlayList", dataType: 'json',
                    headers: {
                        'Content-type': 'application/json',
                        "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                    },
                    data: JSON.stringify({ Files: dataset })
                });

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Uploading Videos for generate for VideoPlayer & PlayList..."); notify.reset();

                def.fail(function (data) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Download VideoPlayer & PlayList Failed", "Alert", { cls: "alert" }); notify.reset();
                    $('#videoPlayListDownload').hide();
                    hidePageLoading();
                });

                def.done(function (data) {
                    videoPlayListLastId = data.genRecord;
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Your VideoPlayer & PlayList was Generated succesfully."); notify.reset();
                    $('#videoPlayListDownload').show();
                    hidePageLoading();
                    $('#videoPlayListRating').data('rating').static(false);
                });
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Any video was not Selected", "Info"); notify.reset();
                $('#videoPlayListDownload').hide();
            }
        };
        async function downloadVideoPlayList() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading VideoPlayer & PlayList..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetGeneratedVideoPlayList");
            hidePageLoading();
        };
    </script>
</div>

```    
			
---   
			### InteliBook.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.InteliBookModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EASY DATA Center & EASY SYSTEM Builder Has Centralised Informations Of Developing to One Intelligent Book for clever Help"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="950px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Tools/EDC_ESB_InteliHelp/book' frameborder='0' style='overflow:hidden;height:900px;width:100%'></iframe>">

    </div>
 
    <script>
        

    </script>
</div>

```    
			
---   
			### Login.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.LoginModel
@{
    ViewData["Title"] = "Login";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel">
    <window>
        <div class="hero hero-bg 1bg-brand-secondary add-neb">
            <div class="container">
                <div class="row">
                    <form id="loginform" method="post" 
                        class="login-form bg-white p-6 mx-auto border bd-default win-shadow"
                          data-role="validator"
                          action="javascript:"
                          data-clear-invalid="2000"
                          data-on-error-form="invalidForm"
                          data-on-validate-form="validateForm">
                        <span class="mif-vpn-lock mif-4x place-right" style="margin-top: -10px;"></span>
                        <h2 class="text-light">EDC&ESB Portal Login</h2>
                        <hr class="thin mt-4 mb-4 bg-white">
                        <div class="form-group">
                            <input id="usernameId" type="email" data-role="input" data-prepend="<span class='mif-envelop'>" placeholder="Enter your email..." data-validate="required">
                        </div>
                        <div class="form-group">
                            <input id="passwordId" type="password" data-role="input" data-prepend="<span class='mif-key'>" placeholder="Enter your password..." data-validate="required minlength=6">
                        </div>
                        <div class="form-group mt-10">
                            <input type="checkbox" data-role="checkbox" data-caption="Remember me" class="place-right">
                            <button class="button" >Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </window>
    <script>
        function invalidForm() {
            var form = $(this);
            form.addClass("ani-ring");
            setTimeout(function () {
                form.removeClass("ani-ring");
            }, 1000);
        }

        function validateForm() {
            showPageLoading();
            var def = $.ajax({
                global: false, type: "POST", url: "/GLOBALNETAuthentication", dataType: 'json',
                headers: { "Authorization": "Basic " + btoa($("#usernameId").val() + ":" + $("#passwordId").val()) }
            });

            def.fail(function (data) {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Login Failed", "Alert", { cls: "alert" }); notify.reset();
                hidePageLoading();
            });

            def.done(function (data) {
                Login(data);
                hidePageLoading();
            });
        }

    </script>
</div>

```    
			
---   
			### MdView.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.MdViewModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EASY DATA Center & EASY SYSTEM Builder Has More View of Help This Show Full All Source Knoledges For Using"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="100%"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Docs' frameborder='0' style='overflow:hidden;height:900px;width:100%'></iframe>" >

    </div>
 
    <script>
        

    </script>
</div>

```    
			
---   
			### PriceList.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.PriceListModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EASY DATA Center & EASY SYSTEM BUILDER & SIEMENS MACHINES & ALL OTHERS WHAT WE DO you Find On WebPages"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="950px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Tools/EDC_ESB_InteliHelp/book/PriceList.html' frameborder='0' style='overflow:hidden;height:900px;width:100%'></iframe>">

    </div>
 
    <script>
        

    </script>
</div>

```    
			
---   
			### Privacy.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.PrivacyModel
@{
    ViewData["Title"] = "Privacy Policy";
}

<div class="text-center info-panel">
    <window>
        <h1>Libor Svoboda GroupWare-Solution.Eu Privacy Policy</h1>
        <br><br>
        This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from https://groupware-solution.eu (the â€śSiteâ€ť).
        <br><br>
        PERSONAL INFORMATION WE COLLECT
        <br><br>
        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as â€śDevice Information.â€ť
        <br><br>
        We collect Device Information using the following technologies:
        <br><br>
            - â€śCookiesâ€ť are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
        <br><br>
            - â€śLog filesâ€ť track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
        <br><br>
            - â€śWeb beacons,â€ť â€śtags,â€ť and â€śpixelsâ€ť are electronic files used to record information about how you browse the Site.
        <br><br>
            [[INSERT DESCRIPTIONS OF OTHER TYPES OF TRACKING TECHNOLOGIES USED]]
        <br><br>
        Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers [[INSERT ANY OTHER PAYMENT TYPES ACCEPTED]]), email address, and phone number.  We refer to this information as â€śOrder Information.â€ť
        <br><br>

        [[INSERT ANY OTHER INFORMATION YOU COLLECT:  OFFLINE DATA, PURCHASED MARKETING DATA/LISTS]]
        <br><br>

        When we talk about â€śPersonal Informationâ€ť in this Privacy Policy, we are talking both about Device Information and Order Information.
        <br><br>

        HOW DO WE USE YOUR PERSONAL INFORMATION?
        <br><br>
        We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to:
        <br><br>
        Communicate with you;
        <br><br>
        Screen our orders for potential risk or fraud; and
        <br><br>
        When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
        <br><br>
        [[INSERT OTHER USES OF ORDER INFORMATION]]
        <br><br>
        We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
        <br><br>
        [[INSERT OTHER USES OF DEVICE INFORMATION, INCLUDING:  ADVERTISING/RETARGETING]]
        <br><br>
        SHARING YOUR PERSONAL INFORMATION
        <br><br>

        We share your Personal Information with third parties to help us use your Personal Information, as described above.  For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here:  https://www.shopify.com/legal/privacy.  We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here:  https://www.google.com/intl/en/policies/privacy/.  You can also opt-out of Google Analytics here:  https://tools.google.com/dlpage/gaoptout.
        <br><br>
        Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
        [[INCLUDE IF USING REMARKETING OR TARGETED ADVERTISING]]
        BEHAVIOURAL ADVERTISING
        As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.  For more information about how targeted advertising works, you can visit the Network Advertising Initiativeâ€™s (â€śNAIâ€ť) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
        <br><br>
        You can opt out of targeted advertising by:
        <br><br>
        [[
        <br><br>
          INCLUDE OPT-OUT LINKS FROM WHICHEVER SERVICES BEING USED.
        <br><br>
          COMMON LINKS INCLUDE:
        <br><br>
            FACEBOOK - https://www.facebook.com/settings/?tab=ads
        <br><br>
            GOOGLE - https://www.google.com/settings/ads/anonymous
        <br><br>
            BING - https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
        <br><br>
        ]]
        <br><br>
        Additionally, you can opt out of some of these services by visiting the Digital Advertising Allianceâ€™s opt-out portal at:  http://optout.aboutads.info/.
        <br><br>
        DO NOT TRACK
        <br><br>
        Please note that we do not alter our Siteâ€™s data collection and use practices when we see a Do Not Track signal from your browser.
        <br><br>
        [[INCLUDE IF LOCATED IN OR IF STORE HAS CUSTOMERS IN EUROPE]]
        <br><br>
        YOUR RIGHTS
        <br><br>
        If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
        Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.  Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
        <br><br>

        DATA RETENTION
        <br><br>
        When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
        <br><br>
        [[INSERT IF AGE RESTRICTION IS REQUIRED]]
        MINORS
        <br><br>
        The Site is not intended for individuals under the age of [[INSERT AGE]].
        <br><br>
        CHANGES
        <br><br>
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
        <br><br>
        CONTACT US
        <br><br>
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:Libor.svoboda@GroupWare-Solution.Eu">Libor.svoboda@GroupWare-Solution.Eu</a> or by mail using the details provided below:
        <br><br>
          Ĺ˝lutava 173, Ĺ˝lutava, ÄŚESKĂ REPUBLIKA, 76361, Czechia
        <br />
        <br />
        <br />
        <br />
    </window>

</div>

```    
			
---   
			### Registration.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.RegistrationModel
@{
    ViewData["Title"] = "Registration";
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel">
    <window>
        <div class="hero hero-bg 1bg-brand-secondary add-neb">
            <div class="container">
                <div class="row">
                    <form id="loginform" method="post" 
                        class="login-form bg-white p-6 mx-auto border bd-default win-shadow"
                          data-role="validator"
                          action="javascript:"
                          data-clear-invalid="2000"
                          data-on-error-form="invalidForm"
                          data-on-validate-form="validateForm">
                        <span class="mif-vpn-lock mif-4x place-right" style="margin-top: -10px;"></span>
                        <h2 class="text-light">EDC&ESB Portal Registration</h2>
                        <hr class="thin mt-4 mb-4 bg-white">
                        <div class="form-group">
                            <input id="emailAddressId" type="email" data-role="input" data-prepend="<span class='mif-envelop'>" placeholder="Enter your email..."
                                   data-validate="required, email" data-clear-button="true">
                        </div>
                        <div class="form-group mb-10">
                            <span class="button c-pointer" onclick="sendVerifyCode()">Send Verify Code to Email</span>
                        </div>
                        <div class="form-group">
                            <input id="verifyCodeId" type="text" data-role="input" oninput="checkVerify(false)" data-prepend="<span class='mif-verified'>"
                                   placeholder="Enter your verify code..." data-validate="required minlength=10" data-clear-button="true" data-custom-buttons="checkButton">
                        </div>
                        <div class="form-group">
                            <input id="passwordId" type="password" disabled data-role="input" data-prepend="<span class='mif-key'>"
                                   placeholder="Enter your password..." data-validate="required minlength=6" data-reveal-button="true">
                        </div>
                        <div class="form-group mt-10">
                            <button id="formButton" class="button" disabled>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </window>
    <script>
        //Declaration
        let doVerify = true;
        let verifyCode = null;
        var checkButton = [{ html: "<span class='mif-user-check'></span>", cls: "warning", onclick: "checkVerify(true)"}]


        //Functions

        function checkVerify(showNotify) {
            if (doVerify) {
                let resultOk = verifyCode != null && verifyCode == $("#verifyCodeId").val();

                if (showNotify && !resultOk) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Verification Failed", "Alert", { cls: "alert" }); notify.reset();
                }
                if (resultOk) {
                    $("#passwordId").prop('disabled', false);
                    $("#formButton").prop('disabled', false);
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Email was Verified", "Success", { cls: "success" }); notify.reset();
                    doVerify = false;
                }
            }
        }

        function sendVerifyCode() {
            if ($("#emailAddressId").val().length == 0) {
                $("#loginform").addClass("ani-ring");
                setTimeout(function () {
                    $("#loginform").removeClass("ani-ring");
                }, 1000);
            } else {

                var def = $.ajax({
                    global: false, type: "POST", url: "/WebUser/SendVerifyCode", 
                    dataType: 'json', contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({ EmailAddress: $("#emailAddressId").val(), Language: Metro.storage.getItem('WebPagesLanguage', 'en' )})
                });

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Sending Verification Email..."); notify.reset();

                def.fail(function (data) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Send Failed " + data.responseJSON.ErrorMessage, "Alert", { cls: "alert" }); notify.reset();
                });

                def.done(function (data) {
                    verifyCode = data.verifyCode;
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Email Sent. Write Verify Code from Email ", "Info", { cls: "success" }); notify.reset();
                });
            }
        }

        function invalidForm() {
            var form  = $(this);
            form.addClass("ani-ring");
            setTimeout(function(){
                form.removeClass("ani-ring");
            }, 1000);
        }

        function validateForm() {
            if (!doVerify) {
                showPageLoading();

                var def = $.ajax({
                    global: false, type: "POST", url: "/WebUser/Registration", dataType: 'json',
                    dataType: 'json', contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({ EmailAddress: $("#emailAddressId").val(), Password: $("#passwordId").val(), Language: Metro.storage.getItem('WebPagesLanguage', 'cz') })
                });

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Waiting for Login..."); notify.reset();

                def.fail(function (data) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Login Failed", "Alert", { cls: "alert" }); notify.reset();
                    hidePageLoading();
                });

                def.done(function (data) {
                    hidePageLoading();
                    login();
                });
            }
        }

        function login() {
            showPageLoading();
            var def = $.ajax({
                global: false, type: "POST", url: "/GLOBALNETAuthentication", dataType: 'json',
                headers: { "Authorization": "Basic " + btoa($("#emailAddressId").val() + ":" + $("#passwordId").val()) }
            });

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Waiting for Login..."); notify.reset();

            def.fail(function (data) {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Login Failed", "Alert", { cls: "alert" }); notify.reset();
                hidePageLoading();
            });

            def.done(function (data) {
                hidePageLoading();
                Cookies.set('ApiToken', data.Token);
                window.location.href = "/Dashboard";
            });
        }

    </script>
</div>

```    
			
---   
			### ResetPassword.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.ResetPasswordModel
@{
    ViewData["Title"] = "Reset Password";
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel">
    <window>
        <div class="hero hero-bg 1bg-brand-secondary add-neb">
            <div class="container">
                <div class="row">
                    <form id="loginform" method="post" 
                        class="login-form bg-white p-6 mx-auto border bd-default win-shadow"
                          data-role="validator"
                          action="javascript:"
                          data-clear-invalid="2000"
                          data-on-error-form="invalidForm"
                          data-on-validate-form="validateForm">
                        <span class="mif-vpn-lock mif-4x place-right" style="margin-top: -10px;"></span>
                        <h3 class="text-light">EDC&ESB Portal Reset Password</h3>
                        <hr class="thin mt-4 mb-4 bg-white">
                        <div class="form-group">
                            <input id="emailAddressId" type="email" data-role="input" data-prepend="<span class='mif-envelop'>" placeholder="Enter your email..."
                                   data-validate="required, email" data-clear-button="true">
                        </div>
                        <div class="form-group mb-10">
                            <span class="button c-pointer" onclick="ResetPassword()">Send New Password to Email</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </window>
    <script>
        //Declaration


        //Functions

        function ResetPassword() {
            if ($("#emailAddressId").val().length == 0) {
                $("#loginform").addClass("ani-ring");
                setTimeout(function () {
                    $("#loginform").removeClass("ani-ring");
                }, 1000);
            } else {

                var def = $.ajax({
                    global: false, type: "POST", url: "/WebUser/ResetPassword",
                    dataType: 'json', contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({ EmailAddress: $("#emailAddressId").val(), Language: Metro.storage.getItem('WebPagesLanguage', 'cz') })
                });

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Sending New Password to Email..."); notify.reset();

                def.fail(function (data) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Send Failed", "Alert", { cls: "alert" }); notify.reset();
                });

                def.done(function (data) {
                    var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                    notify.create("Email Sent. ", "Info", { cls: "success" }); notify.reset();
                });
            }
        }

        function invalidForm() {
            var form  = $(this);
            form.addClass("ani-ring");
            setTimeout(function(){
                form.removeClass("ani-ring");
            }, 1000);
        }

    </script>
</div>

```    
			
---   
			### SolutionCoresLogic.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.SolutionCoresLogicModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EDC & ESB Has AUTOMATED SYSTEM CORE - Core Definition will be fully descripted with start of Public Interest"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="950px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Tools/EDC_ESB_InteliHelp/book/CoreStructureDefinition.html' frameborder='0' style='overflow:hidden;height:900px;width:100%'></iframe>">

    </div>
 
    <script>
        

    </script>
</div>

```    
			
---   
			### SolutionServers.cshtml     

```http   
			ď»ż@page
@model ServerCorePages.SolutionServersModel
@{
    ViewData["Title"] = "Solution Servers";
}
@*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
    <window>
        <div class="h4 fg-darkOrange" style="top:10px;">
            EASY to USE:<br />
            Read the Installation description.<br />
            All Servers are for Test with Trial 30 Days License<br />
            You can Buy Full Server/Client Project Code for Unlimited Customizing Server<br />
            All Solutions are NETCORE6 + EF with Linux, Windows, MacOS & Multi DB Supported
        </div>

        @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {

        }
        else {
            <div class="h4 fg-red ani-hover-heartbeat">
                For Download License You must be Logged in
            </div>
        }

        <div class="about ">
            <div class="container">
                <div class="mt-10 text-center">
                    <div class="fg-darkSteel" style="font-weight:bold;font-size:40px;opacity:0.7;">
                        Solution Servers Downloads
                    </div>
                    <p class="text-leader pl-20-md pr-20-md">
                        By click on Icons open Server Info
                    </p>
                </div>

                <div class="row mt-10">
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Project Management Installation Info",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/Downloads/ProjectManagement/ExpertDocViewer/\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="ProjectManagement" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("ProjectManagement");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Unlimited License">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            3000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("ProjectManagement");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full NetCore6 C# Server/Client Project">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            10 000KÄŤ
                                        </div>

                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">Project Management</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                <span onclick="window.open('../server/Downloads/ProjectManagement','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Project Management"></span>
                                                <span onclick='Metro.window.create({title:"Project Management ScreenShot & Video",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/Downloads/ProjectManagement/Gallery\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show ScreenShot"></span>
                                                <span onclick="window.open('http://kliknetezde.cz:5001','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Project Management Online Test<br/>username: test@test.com<br/>password: tester"></span>
                                                <span onclick='generateTrialLicense("ProjectManagement");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span>
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"EASY-DATA-Center Installation Info",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/MDViewer/EASYDATACenter.html\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="EasyDataCenter" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("EASYDATACenter");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Unlimited License">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            10 000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("EASYDATACenter");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full NetCore6 C# Server/Client Project">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            30 000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">EASYDATACenter</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                <span onclick="window.open('../server/Downloads/EASYDATACenter','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download EASYDATACenter"></span>
                                                <span onclick='Metro.window.create({title:"EasyDataCenter ScreenShots",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/EASYDATACenter_Downloads/PhotoGallery\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show ScreenShot"></span>
                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client EDCManager is on Desktop"></span>
                                                <span onclick='generateTrialLicense("EasyDataCenter");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span>
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Expert Documentation Editor",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/ExpertDocManager/Docs/ExportCs.html\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="ExpertDocManager" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("ExpertDocManager");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Unlimited License">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            5 000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("ExpertDocManager");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full NetCore6 C# Server/Client Project">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            10 000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">ExpertDocManager</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                <span onclick="window.open('../server/Downloads/ExpertDocManager','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download ExpertDocManager"></span>
                                                <span onclick='Metro.window.create({title:"ExpertDocManager Short Example",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/ExpertDocManager/docs/ExpertDocManagerEn.html\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show Fast Example"></span>
                                                <span onclick="window.open('/Tools/ExpertDocManager/','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online ExpertDocManager in FilesManager Mode"></span>
                                                <span onclick="window.open('/Tools/ExpertDocViewer/','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online ExpertDocViewer in FilesManager Mode"></span>
                                                <span onclick='generateTrialLicense("ExpertDocManager");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span>
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Monitoring Server Info",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/MDViewer/EASYDATACenter.html\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="MonitServer" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("MonitServer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Unlimited License">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            5 000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("MonitServer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full NetCore6 C# Server/Client Project">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            10 000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">MonitServer</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                <span onclick="window.open('../server/Downloads/MonitServer','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download EASYDATACenter"></span>
                                                <span onclick='Metro.window.create({title:"MonitServer ScreenShots",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/EASYDATACenter_Downloads/PhotoGallery\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show ScreenShot"></span>
                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client EDCManager is on Desktop"></span>
                                                <span onclick='generateTrialLicense("MonitServer");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span>
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Expert Documentation Server",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/ExpertDocManager/Docs/ExportCs.html\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="ExpertDocServer" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("ExpertDocServer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Unlimited License">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            10 000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("ExpertDocServer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full NetCore6 C# Server/Client Project">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            20 000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">ExpertDocServer</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                <span onclick="window.open('../server/Downloads/ExpertDocManager','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download ExpertDocServer"></span>
                                                <span onclick='Metro.window.create({title:"ExpertDocServer Short Example",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/ExpertDocManager/docs/ExpertDocManagerEn.html\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show Fast Example"></span>
                                                <span onclick="window.open('/Tools/ExpertDocManager/','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online ExpertDocManager in FilesManager Mode"></span>
                                                <span onclick="window.open('/Tools/ExpertDocViewer/','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online ExpertDocViewer in FilesManager Mode"></span>
                                                <span onclick='generateTrialLicense("ExpertDocServer");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span>
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Private Git Server Installation Info",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/Downloads/GitServer/ExpertDocViewer/\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="PrivateGitServer" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("PrivateGitServer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Unlimited License">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            3 000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("PrivateGitServer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full NetCore6 C# Server/Client Project">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            5 000KÄŤ
                                        </div>
                                    </div>
                                    <div class="text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-block w-100">
                                                <div class="text-left pl-4">MultiLingual Private Git Server with<br />Branches,Sharing,Public,Translation</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                <span onclick="window.open('../server/Downloads/GitServer','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download ExpertDocServer"></span>
                                                <span onclick='Metro.window.create({title:"Private Git Server Screenshots & Video",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/Downloads/GitServer/Gallery\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show Private Git Server Screenshots & Video"></span>
                                                <span onclick="window.open('https://Kliknetezde.cz:5002','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Private Git Server"></span>
                                                <span onclick='generateTrialLicense("PrivateGitServer");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span>
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-10 mb-10"></div>


    </window>

    <script>
        /* Startup */

        // Declaration


        // Startup Calling

        var notify = Metro.notify; notify.setup({ width: 300, duration: 5000, animation: 'easeOutBounce' });
        notify.create("Please Rate Tool After Download..."); notify.reset();
        GetGeneratorsRating();



        // Function Part
        function setGeneratorsRating(value, star, element) {
            let recId;
            $.ajax({
                type: "GET", url: "/Generators/SetGeneratedToolRatingName/" + element.id + "/" + value, dataType: 'json',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                }
            }).always(function (data) { GetGeneratorsRating(); });
            $(element).data('rating').static(true);
        };
        function GetGeneratorsRating() {
            $.get("/Generators/GetGeneratedToolRatingList").then(function (data) {
                data = JSON.parse(data);
                data.forEach(tool => {
                    switch (tool.Name) {
                        case "ProjectManagement":
                            $('#ProjectManagement').data('rating').val(tool.Rating);
                            $('#ProjectManagement').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "EasyDataCenter":
                            $('#EasyDataCenter').data('rating').val(tool.Rating);
                            $('#EasyDataCenter').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "ExpertDocManager":
                            $('#ExpertDocManager').data('rating').val(tool.Rating);
                            $('#ExpertDocManager').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "MonitServer":
                            $('#MonitServer').data('rating').val(tool.Rating);
                            $('#MonitServer').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "ExpertDocServer":
                            $('#ExpertDocServer').data('rating').val(tool.Rating);
                            $('#ExpertDocServer').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "PrivateGitServer":
                            $('#PrivateGitServer').data('rating').val(tool.Rating);
                            $('#PrivateGitServer').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        default:
                            break;
                    }
                });
            });
        };


        async function generateTrialLicense(project) {
            if (IsLogged()) {
                showPageLoading();

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Downloading " + project + " Trial License..."); notify.reset();

                AuthDownloadFile("GET", "LicenseRequest/Trial/" + project);
                hidePageLoading();
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("You must Login First", "Alert", { cls: "alert" }); notify.reset();
            }
        };





    </script>
</div>

```    
			
---   
			### SolutionsVisionsIdeas.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.SolutionsVisionsIdeasModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="GroupWare Solutions is Cheap Way for More Services For Unlimited Support Of Your Business You Can Check EveryTime"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="950px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Tools/EDC_ESB_InteliHelp/book/SolutionsVisions&Ideas.html' frameborder='0' style='overflow:hidden;height:900px;width:100%'></iframe>">

    </div>
 
    <script>
        

    </script>
</div>

```    
			
---   
			### SystemToolsGenerators.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.SystemToolsModel
@{
    ViewData["Title"] = "System Tools Generators";
}
    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
    <window>
        <div class="h4 fg-darkOrange" style="top:10px;font-size:16px;">
            EASY to USE:<br />
            Prepared Web Pages & Tools for Immediatelly Using For make Modern Systems, Portals, Intranet.<br />
            <a href="https://korzh.com/blog/single-file-web-service-aspnetcore" target="_blank">Metro4 is Very Modern Standalone Technology</a><br />
            Its ideally for Easy build any Web/System for Every Web Server [example EDC EASY-DATA-Center]<br />
            Download, Unpack and Copy to your WebPages.<br />
            You show Presentations by Index.html<br />
        </div>

        @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {

        }
        else {
            <div class="h4 fg-red ani-hover-heartbeat">
                For Download You must be Logged in
            </div>
        }

        <div class="about ">
            <div class="container">
                <div class="mt-10 text-center">
                    <div class="fg-darkSteel" style="font-weight:bold;font-size:40px;opacity:0.7;">
                        Static Pages - Templates & Web Tools 
                    </div>
                    <p class="text-leader pl-20-md pr-20-md">
                        By click on left Icon open Example
                    </p>
                </div>

                <div class="row mt-10">
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openSystemDesktop();Metro.window.create({title:"System Desktop Template",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/SystemDesktop/index.html\" style=\"width:100%;height:640px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="SystemDesktop" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("SystemDesktop");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("SystemDesktop");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer w-100">
                                        <div class="reduce-1 pt-2 enlarge-1-md text-right">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-2">System Desktop</div>
                                            </div>
@*                                                 @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                    <span id="systemDesktopDownload" onclick='downloadSystemDesktop();' class="mif-file-download ani-heartbeat pl-1 mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download System Desktop Template" />
                                                } *@
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openSystemToolDesktop();Metro.window.create({title:"System Tool Desktop Template",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/SystemToolDesktop/index.html\" style=\"width:100%;height:640px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="SystemToolDesktop" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("SystemToolDesktop");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("SystemToolDesktop");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer w-100">
                                        <div class="reduce-1 pt-2 enlarge-1-md text-right">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-2">System Tool Desktop</div>
                                            </div>
@*                                             @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                <span id="systemToolDesktopDownload" onclick='downloadSystemToolDesktop();' class="mif-file-download ani-heartbeat pl-1 mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download System Desktop Template" />
                                            } *@
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openAdminDesktop();Metro.window.create({title:"System Tool Desktop Template",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/AdminDesktop/index.html\" style=\"width:100%;height:640px;\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="AdminDesktop" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("AdminDesktop");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            3000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("AdminDesktop");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            5000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer w-100">
                                        <div class="reduce-1 pt-2 enlarge-1-md text-right">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-2">Admin Desktop</div>
                                            </div>
@*                                             @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                <span id="adminDesktopDownload" onclick='downloadAdminDesktop();' class="mif-file-download ani-heartbeat pl-1 mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download System Desktop Template" />
                                            } *@
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openMoreEffects();Metro.window.create({title:"More Effects Library",shadow:true,draggable:true,customButtons:windowBackButton,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe  id=\"moreEffectWindow\" src=\"../server/EASYSYSTEMBuilder_Downloads/Metro4DevHelp/Metro4Example/examples\" style=\"width:100%;height:640px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="MoreEffects" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("MoreEffects");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("MoreEffects");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            3000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer w-100">
                                        <div class="reduce-1 pt-2 enlarge-1-md text-right">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-2">More Effects Library</div>
                                            </div>
@*                                             @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                <span id="moreEffectsDownload" onclick='downloadMoreEffects();' class="mif-file-download ani-heartbeat pl-1 mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download More Effects Library" />
                                            } *@
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    @*<div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openMdViewer();Metro.window.create({title:"Markdown Web Viewer and Conerter",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/MDViewer/demo.html\" style=\"width:100%;height:640px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="MdViewer" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-light c-pointer w-100">
                                        <div class="reduce-1 pt-2 enlarge-1-md text-right">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-2" style="font-size:18px;">MarkDown Web Converter/Viewer</div>
                                            </div>
                                            @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                <span id="mdViewerDownload" onclick='downloadMdViewer();' class="mif-file-download ani-heartbeat pl-1 mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download MarkDown Web Viewer" />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> *@

                    @* <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openPdfWebViewer();Metro.window.create({title:"Pdf Web Viewer",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe id=\"pdfWebViewerWindow\" src=\"../Tools/PdfViewer/web/index.html\" style=\"width:100%;height:640px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="PdfWebViewer" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-light c-pointer w-100">
                                        <div class="reduce-1 pt-2 enlarge-1-md text-right">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-2">Pdf Web Viewer</div>
                                            </div>
                                            @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                <span id="pdfWebViewerDownload" onclick='downloadPdfWebViewer();' class="mif-file-download ani-heartbeat pl-1 mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Pdf Web Viewer" />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> *@

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openMetroPosibilities();Metro.window.create({title:"Metro4 Developer Posibilities",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/EASYSYSTEMBuilder_Downloads/Metro4DevHelp/Metro4Example/m4q-about.html\" style=\"width:100%;height:640px;\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for Show Example"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="MetroPosibilities" class="text-right" data-static="true" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("MetroPosibilities");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            3000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("MetroPosibilities");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            5000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer w-100">
                                        <div class="reduce-1 pt-2 enlarge-1-md text-right">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-2">Metro4 Developing</div>
                                            </div>
@*                                             @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                <span id="metroPosibilitiesDownload" onclick='downloadMetroPosibilities();' class="mif-file-download ani-heartbeat pl-1 mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Metro4 Dev Help" />
                                            } *@
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="pb-10 mb-10"></div>


    </window>
 
    <script>
        /* Startup */

        // Declaration
        let windowBackButton = [{ html: "<span class=\"mif-backward\"></span>", cls: "warning", onclick: "$(\"#moreEffectWindow\").attr(\"src\", \"../server/EASYSYSTEMBuilder_Downloads/Metro4DevHelp/Metro4Example/examples\")" }];
        let WpfToolBackButton = [{ html: "<span class=\"mif-backward\"></span>", cls: "warning", onclick: "$(\"#WpfToolWindow\").attr(\"src\", \"../server/Downloads/WPF_DevWindowsTools\")" }];


        // Startup Calling
        var notify = Metro.notify; notify.setup({ width: 300, duration: 5000, animation: 'easeOutBounce' });
        notify.create("Please Rate Tool After Download..."); notify.reset();
        GetGeneratorsRating();



        // Function Part
        function setGeneratorsRating(value, star, element) {
            $.ajax({
                type: "GET", url: "/Generators/SetGeneratedToolRatingName/" + element.id + "/" + value, dataType: 'json',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                }
            }).always(function (data) { GetGeneratorsRating(); });
            $(element).data('rating').static(true);
        };
        function GetGeneratorsRating() {
            $.get("/Generators/GetGeneratedToolRatingList").then(function (data) {
                data = JSON.parse(data);
                data.forEach(tool => {
                    switch (tool.Name) {
                        case "SystemDesktop":
                            $('#SystemDesktop').data('rating').val(tool.Rating);
                            $('#SystemDesktop').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "SystemToolDesktop":
                            $('#SystemToolDesktop').data('rating').val(tool.Rating);
                            $('#SystemToolDesktop').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "AdminDesktop":
                            $('#AdminDesktop').data('rating').val(tool.Rating);
                            $('#AdminDesktop').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "MoreEffects":
                            $('#MoreEffects').data('rating').val(tool.Rating);
                            $('#MoreEffects').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "MdViewer":
                            $('#MdViewer').data('rating').val(tool.Rating);
                            $('#MdViewer').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "PdfWebViewer":
                            $('#PdfWebViewer').data('rating').val(tool.Rating);
                            $('#PdfWebViewer').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "MetroPosibilities":
                            $('#MetroPosibilities').data('rating').val(tool.Rating);
                            $('#MetroPosibilities').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        default:
                            break;
                    }
                });
            });
        };

        async function openSystemDesktop() {
            $('#SystemDesktop').data('rating').static(false);
        };

        async function downloadSystemDesktop() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading System Desktop Template..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetSystemDesktop");
            hidePageLoading();
            $('#SystemDesktop').data('rating').static(false);
        };

        async function openSystemToolDesktop() {
            $('#SystemToolDesktop').data('rating').static(false);
        };

        async function downloadSystemToolDesktop() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading System Tool Desktop Template..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetSystemToolDesktop");
            hidePageLoading();
            $('#SystemToolDesktop').data('rating').static(false);
        };

        async function openAdminDesktop() {
            $('#AdminDesktop').data('rating').static(false);
        };

        async function downloadAdminDesktop() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading Admin Desktop Template..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetAdminDesktop");
            hidePageLoading();
            $('#AdminDesktop').data('rating').static(false);
        };

        async function openMoreEffects() {
            $('#MoreEffects').data('rating').static(false);
        };

        async function downloadMoreEffects() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading Metro4 + Effects Template..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetMoreEffects");
            hidePageLoading();
            $('#MoreEffects').data('rating').static(false);
        };

        async function openMdViewer() {
            $('#MdViewer').data('rating').static(false);
        };

        async function downloadMdViewer() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading MarkDown Viewer..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetMdViewer");
            hidePageLoading();
            $('#MdViewer').data('rating').static(false);
        };


        async function openPdfWebViewer() {
            $('#PdfWebViewer').data('rating').static(false);
        };

        async function downloadPdfWebViewer() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading Pdf Web Viewer..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetPdfWebViewer");
            hidePageLoading();
            $('#PdfWebViewer').data('rating').static(false);
        };

        async function openMetroPosibilities() {
            $('#MetroPosibilities').data('rating').static(false);
        };
        async function downloadMetroPosibilities() {
            showPageLoading();

            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading Metro4 Developer Help..."); notify.reset();

            AuthDownloadFile("GET", "/Generators/GetMetroPosibilities");
            hidePageLoading();
            $('#MetroPosibilities').data('rating').static(false);
        };
        
    </script>
</div>

```    
			
---   
			### SystemToolsGenerators.cshtml.cs     

```http   
			ď»żusing EASYDATACenter.DBModel;
using EASYDATACenter.ServerCoreDefinition;
using k8s.KubeConfigModels;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class SystemToolsModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;

        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = ServerCoreHelpers.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}
```    
			
---   
			### TechnologyPosibilities.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.TechnologyPosibilitiesModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EASY DATA Center & EASY SYSTEM Builder 'applied' Technology Descriptions For News are Not Limits"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="950px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../Tools/EDC_ESB_InteliHelp/book/3rdPartyVisionsTips.html' frameborder='0' style='overflow:hidden;height:900px;width:100%'></iframe>">

    </div>
 
    <script>
        

    </script>
</div>

```    
			
---   
			### TechnologyPosibilities.cshtml.cs     

```http   
			ď»żusing Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class TechnologyPosibilitiesModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;

        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = ServerCoreHelpers.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}
```    
			
---   
			### Terms.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.TermsModel
@{
    ViewData["Title"] = "Terms & Conditions";
}

<div class="text-center info-panel">
    <window>
        <h1>Libor Svoboda GroupWare-Solution.Eu Terms &amp; Conditions </h1>
        <br><br>
        <p>Last updated: May 17, 2023</p>
        <p>Please read these terms and conditions carefully before using Our Service.</p>
        <h1>Interpretation and Definitions</h1>
        <h2>Interpretation</h2>
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
        <h2>Definitions</h2>
        <p>For the purposes of these Terms and Conditions:</p>
        <ul>
            <li>
                <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
            </li>
            <li>
                <p><strong>Country</strong> refers to: Czechia</p>
            </li>
            <li>
                <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Libor Svoboda GroupWare-Solution.Eu, Ĺ˝lutava 173.</p>
            </li>
            <li>
                <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
            </li>
            <li>
                <p><strong>Service</strong> refers to the Website.</p>
            </li>
            <li>
                <p><strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank">TermsFeed Terms and Conditions Generator</a>.</p>
            </li>
            <li>
                <p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
            </li>
            <li>
                <p><strong>Website</strong> refers to GroupWare-Solution.Eu, accessible from <a href="https://groupware-solution.eu" rel="external nofollow noopener" target="_blank">https://groupware-solution.eu</a></p>
            </li>
            <li>
                <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
            </li>
        </ul>
        <h1>Acknowledgment</h1>
        <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
        <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
        <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
        <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
        <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
        <h1>Links to Other Websites</h1>
        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
        <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
        <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
        <h1>Termination</h1>
        <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
        <p>Upon termination, Your right to use the Service will cease immediately.</p>
        <h1>Limitation of Liability</h1>
        <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
        <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
        <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
        <h1>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h1>
        <p>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
        <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
        <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
        <h1>Governing Law</h1>
        <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
        <h1>Disputes Resolution</h1>
        <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
        <h1>For European Union (EU) Users</h1>
        <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>
        <h1>United States Legal Compliance</h1>
        <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
        <h1>Severability and Waiver</h1>
        <h2>Severability</h2>
        <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
        <h2>Waiver</h2>
        <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
        <h1>Translation Interpretation</h1>
        <p>
            These Terms and Conditions may have been translated if We have made them available to You on our Service.
            You agree that the original English text shall prevail in the case of a dispute.
        </p>
        <h1>Changes to These Terms and Conditions</h1>
        <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
        <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
        <h1>Contact Us</h1>
        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
        <ul class="mb-10 pb-10">
            <li>
                By email: <a href="mailto:Libor.svoboda@GroupWare-Solution.Eu">Libor.svoboda@GroupWare-Solution.Eu</a>
            </li>
            <li>
                By visiting this page on our website: <a href="https://groupware-solution.eu/contactus" rel="external nofollow noopener" target="_blank">https://groupware-solution.eu/contactus</a>
            </li>
            <li>
                By phone number: 00 420 724 986 873
            </li>
        </ul>
        <br /><br /><br /><br />
    </window>
</div>
```    
			
---   
			### Terms.cshtml.cs     

```http   
			ď»żusing Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class TermsModel : PageModel {
        public ServerWebPagesToken serverWebPagesToken;

        private readonly ILogger<TermsModel> _logger;
        public TermsModel(ILogger<TermsModel> logger) {
            _logger = logger;
        }

        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = ServerCoreHelpers.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new(); }
        }
    }
}
```    
			
---   
			### UserProfile.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.UserProfileModel
@{
    ViewData["Title"] = "User Profile";
}

@*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel">
    <window>
        <div class="hero hero-bg 1bg-brand-secondary add-neb">
            <div class="container">
                <div class="row">
                    <form id="userform" method="post" 
                        class="login-form bg-white p-6 mx-auto border bd-default win-shadow"
                            data-role="validator"
                            action="javascript:"
                            data-clear-invalid="2000"
                            data-on-error-form="invalidForm"
                            data-on-validate-form="validateForm">
                        <span class="mif-vpn-lock mif-4x place-right" style="margin-top: -10px;"></span>
                        <h2 class="text-light">EDC&ESB Portal User Profile</h2>
                        <hr class="thin mt-4 mb-4 bg-white">
                        <div class="form-group">
                            <input id="usernameId" type="text" data-role="input" data-prepend="<span class='mif-envelop'>" placeholder="Enter your email..." data-validate="required">
                        </div>
                        <div class="form-group">
                            <input id="firstnameId" type="text" data-role="input" data-prepend="<span class='mif-user'>" placeholder="Enter your First Name" data-validate="required">
                        </div>
                        <div class="form-group">
                            <input id="lastnameId" type="text" data-role="input" data-prepend="<span class='mif-user'>" placeholder="Enter your Last Name" data-validate="required">
                        </div>

                        <div class="form-group">
                            <input id="passwordId" type="password" data-role="input" data-prepend="<span class='mif-key'>" placeholder="Empty or Insert New" >
                        </div>
                        <div class="form-group mt-10">
                            <button class="button" >Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </window>

    <script>
        // check logged


        //Declaration
        
        

        //Startup
        getUserProfile();




        //Functions
        
        function getUserProfile() {
            showPageLoading();
            let getUser = $.ajax({
                global: false, type: "GET", url: "/WebUser/GetWebUser/" + Metro.storage.getItem('WebPagesLanguage', 'cz'), dataType: 'json',
                contentType: 'application/json',
                headers: {
                    "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                }
            }).fail(function (data) {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Cannot Load User Data", "Alert", { cls: "alert" }); notify.reset();
                hidePageLoading();
            }).done(function (data) {
                Metro.storage.setItem('UserData', data);
                $("#usernameId").val(data.userName);
                if (data.userName != data.name) { $("#firstnameId").val(data.name); }
                if (data.userName != data.surName) { $("#lastnameId").val(data.surName); }
                hidePageLoading();
            });
        }

        function invalidForm() {
            var form = $(this);
            form.addClass("ani-ring");
            setTimeout(function () {
                form.removeClass("ani-ring");
            }, 1000);
        }

        function validateForm() {
            showPageLoading();

            var def = $.ajax({
                global: false, type: "POST", url: "/WebUser/UpdateRegistration", dataType: 'json',
                contentType: 'application/json',
                headers: { "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null) },
                data: JSON.stringify({ EmailAddress: $("#usernameId").val(), FirstName: $("#firstnameId").val(),
                    LastName: $("#lastnameId").val(), Password: $("#passwordId").val(), Language: Metro.storage.getItem('WebPagesLanguage', 'cz')
                })
            }).fail(function (data) {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Update Profile Failed", "Alert", { cls: "alert" }); notify.reset();
                hidePageLoading();
            }).done(function (data) {

                //update storage user
                let user = Metro.storage.getItem('UserData', null);
                user.userName = $("#usernameId").val(); user.name = $("#firstnameId").val(); user.surName = $("#lastnameId").val();
                Metro.storage.setItem('UserData', user);

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Update Profile Success", "Info", { cls: "success" }); notify.reset();
                hidePageLoading();
            });
        }

    </script>
</div>

```    
			
---   
			### UserProfile.cshtml.cs     

```http   
			ď»żusing EASYDATACenter.DBModel;
using EASYDATACenter.ServerCoreDefinition;
using k8s.KubeConfigModels;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class UserProfileModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;

        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = ServerCoreHelpers.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}
```    
			
---   
			### VideoGallery.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.VideoGalleryModel
@{
    ViewData["Title"] = "";  
    //Layout = "~/Shared/_Layout.cshtml";  
}

    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
   
    <div id="imageWindow" data-role="window" class="window"
         data-title="EASY DATA Center & EASY SYSTEM Builder Video Gallery of One Man Developing as Hobby less than One Year"
         data-btn-min="false"
         data-btn-max="false"
         data-btn-close="false"
         data-resizable="false"
         data-draggable="false"
         data-width="100%"
         data-height="650px"
         data-shadow="true"
         data-icon="<span class='mif-image'></span>"
         data-content="<iframe src='../server/Media/VideoGallery/index.html' frameborder='0' style='overflow:hidden;height:610px;width:100%' width='100%'></iframe>">
    </div>
 
    <script>

    </script>
</div>

```    
			
---   
			### VideoGallery.cshtml.cs     

```http   
			ď»żusing Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class VideoGalleryModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;

        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = ServerCoreHelpers.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}
```    
			
---   
			### WebEditors.cshtml     

```http   
			ď»ż@page
@model ServerCorePages.WebEditorsModel
@{
    ViewData["Title"] = "Web Editors";
}
@*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
    <window>
        <div class="h4 fg-darkOrange" style="top:10px;">
            EASY to USE:<br />
            Read the Installation description.<br />
            Look on Online Tool. For Next using is only COPY. All Problem Solved<br />
            All Tools are Static Pages, Run by Click on index.html only<br />

        </div>

        @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {

        }
        else {
            <div class="h4 fg-red ani-hover-heartbeat">
                For Download License You must be Logged in
            </div>
        }

        <div class="about ">
            <div class="container">
                <div class="mt-10 text-center">
                    <div class="fg-darkSteel" style="font-weight:bold;font-size:40px;opacity:0.7;">
                        Static Pages - Editors & Managers & Builders Tools
                    </div>
                    <p class="text-leader pl-20-md pr-20-md">
                        By click on Icons open Tool Info
                    </p>
                </div>

                <div class="row mt-10">
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Simple Code Editor Static Pages",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/SimpleCodeEditor/website/dist\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="SimpleCodeEditor" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("SimpleCodeEditor");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            500KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("SimpleCodeEditor");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>

                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">SimpleCodeEditor</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                @* <span onclick="window.open('../server/Downloads/ProjectManagement','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Project Management"></span>
                                                <span onclick='Metro.window.create({title:"Project Management ScreenShot",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/Downloads/ProjectManagement/Gallery\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show ScreenShot"></span>
                                                <span onclick="window.open('http://kliknetezde.cz:5001','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Project Management Online Test<br/>username: test@test.com<br/>password: tester"></span> *@

                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"SQL Builder Tool Static Pages",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/SqlBuilder\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="SqlBuilder" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("SqlBuilder");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("SqlBuilder");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            3000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">SqlBuilder</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                @* <span onclick="window.open('../server/Downloads/EASYDATACenter','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download EASYDATACenter"></span>
                                                <span onclick='Metro.window.create({title:"EasyDataCenter ScreenShots",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/EASYDATACenter_Downloads/PhotoGallery\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show ScreenShot"></span>
                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client EDCManager is on Desktop"></span>
                                                <span onclick='generateTrialLicense("EasyDataCenter");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span> *@
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"Expert Documentation Manager + Server + Viewer + Fullext Search WebPages",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/ExpertDocManager\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="ExpertDocManager" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("ExpertDocManager");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            5000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("ExpertDocManager");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            10000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">ExpertDocManager</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                <span onclick='Metro.window.create({title:"EasyDataCenter ScreenShots",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../tools/ExpertDocManager/docs/ExpertDOCManagerEn.html\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show Example"></span>
                                                <span onclick='Metro.window.create({title:"EasyDataCenter ScreenShots",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../tools/ExpertDocManager/docs/ExportCs.html\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Automatic Translate"></span>
                                                @* <span onclick="window.open('../server/Downloads/EASYDATACenter','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download EASYDATACenter"></span>
                                                
                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client EDCManager is on Desktop"></span>
                                                <span onclick='generateTrialLicense("EasyDataCenter");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span> *@
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="pb-10 mb-10"></div>


    </window>

    <script>
        /* Startup */

        // Declaration


        // Startup Calling

        var notify = Metro.notify; notify.setup({ width: 300, duration: 5000, animation: 'easeOutBounce' });
        notify.create("Please Rate Tool After Download..."); notify.reset();
        GetGeneratorsRating();



        // Function Part
        function setGeneratorsRating(value, star, element) {
            let recId;
            $.ajax({
                type: "GET", url: "/Generators/SetGeneratedToolRatingName/" + element.id + "/" + value, dataType: 'json',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                }
            }).always(function (data) { GetGeneratorsRating(); });
            $(element).data('rating').static(true);
        };
        function GetGeneratorsRating() {
            $.get("/Generators/GetGeneratedToolRatingList").then(function (data) {
                data = JSON.parse(data);
                data.forEach(tool => {
                    switch (tool.Name) {
                        case "SimpleCodeEditor":
                            $('#SimpleCodeEditor').data('rating').val(tool.Rating);
                            $('#SimpleCodeEditor').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "ExpertDocManager":
                            $('#ExpertDocManager').data('rating').val(tool.Rating);
                            $('#ExpertDocManager').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "SqlBuilder":
                            $('#SqlBuilder').data('rating').val(tool.Rating);
                            $('#SqlBuilder').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        default:
                            break;
                    }
                });
            });
        };


        async function generateTrialLicense(project) {
            if (IsLogged()) {
                showPageLoading();

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Downloading " + project + " Trial License..."); notify.reset();

                AuthDownloadFile("GET", "LicenseRequest/Trial/" + project);
                hidePageLoading();
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("You must Login First", "Alert", { cls: "alert" }); notify.reset();
            }
        };





    </script>
</div>

```    
			
---   
			### WebEditors.cshtml.cs     

```http   
			ď»żusing EASYDATACenter.DBModel;
using EASYDATACenter.ServerCoreDefinition;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class WebEditorsModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;

        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = ServerCoreHelpers.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}
```    
			
---   
			### WebMenuBuilder.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.WebMenuBuilderModel



<div class="text-center mb-4 pb-5">
    <window style="position: relative; top: 60px;">
        <div id="TogglePanelBackground" class="panel" style="min-height: 700px;">
            <form class="form1" data-role="validator" action="javascript:" data-on-submit="isValid = true;"
                  data-interactive-check="true" autocomplete="off" data-on-error="isValid = false;">
                <div class="d-block">
                    <div class="d-flex row gutters mr-4">
                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 pl-5 pt-5 mb-0">
                            <ul data-role="tabs" data-expand="true" data-tabs-type="text" data-on-tab="">
                                <li id="menuListMenu" class="fg-black"><a href="#_menuList">PĹ™ehled Menu</a></li>
                                <li id="menuBuilderMenu" class="fg-black "><a href="#_menuBuilder">Menu Builder</a></li>
                            </ul>
                        </div>

                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 pt-4 col-12">
                            <div class="text-right">
                                <button type="reset" class="button warning outline shadowed">
                                    Reset
                                </button>
                                <button type="submit" class="button info outline shadowed" onclick="saveNew = false;SaveMenu();">
                                    UloĹľit
                                </button>
                                <button type="submit" class="button success outline shadowed" onclick="saveNew = true;SaveMenu();">
                                    UloĹľit jako NovĂ©
                                </button>
                            </div>
                        </div>

                    </div>

                    <div id="_menuList">
                        <div class="d-flex row gutters ml-5 mr-5 mb-5 border">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <table id="menuTable" class="table striped table-border mt-4"
                                       data-role="table" data-cls-component="mt-10" data-show-activity="true" data-rows="30" data-pagination="true"
                                       data-show-all-pages="false" data-check="true" data-check-style="1" data-check-type="radio" data-on-check-click="SetRecId()"
                                       data-use-current-slice="true">
                                    <thead>
                                        <tr>
                                            <th data-sortable="true">Id</th>
                                            <th data-sortable="true">Sekvence</th>
                                            <th data-sortable="true">Group Id</th>
                                            <th data-sortable="true">NĂˇzev Skupiny </th>
                                            <th data-sortable="true">NĂˇzev menu</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="_menuBuilder">
                        <div class="d-flex row gutters ml-5 mr-5 mb-5 border">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group">
                                    <label for="Street">Sequence</label>
                                    <input id="menuSeq" type="number" data-role="spinner" data-min-value="0" data-step="10" data-max-value="30000">
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group pt-6">
                                    <select id="groupMenu" data-role="select" data-filter-placeholder="Vyberte Skupinu menu" data-empty-value="" data-validate="required not=-1" data-clear-button="true"></select>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group pt-5">
                                    <input id="menuName" type="text" data-role="input" data-label="NĂˇzev" data-validate="required" autocomplete="off" style="height: auto;" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group pt-5">
                                    <input id="menuDescription" type="text" data-role="input" data-label="Popisek" autocomplete="off" style="height: auto;" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div class="form-group pt-5">
                                    <input id="menuClass" type="text" data-role="input" data-label="TĹ™Ă­dy Menu" autocomplete="off" style="height: auto;" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            </div>

                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div id="menuSummernote"></div>
                            </div>

                        </div>
                    </div>
                    <div class="row gutters pr-5">
                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 pt-4 col-12">
                            <div class="text-right">
                                <button type="reset" class="button warning outline shadowed">
                                    Reset
                                </button>
                                <button type="submit" class="button info outline shadowed" onclick="saveNew = false">
                                    UloĹľit
                                </button>
                                <button type="submit" class="button success outline shadowed" onclick="saveNew = true">
                                    UloĹľit jako NovĂ©
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </window>
    <div class="mb-10"></div>

 
    <script>

        // Form Definitions
        let recId = 0;
        let isValid = false;
        let saveNew = false;


        //Startup Actions
        $('#menuSummernote').summernote({
            tabsize: 2, height: 300, maxHeight: 300,
            toolbar: [['style', ['style']], ['font', ['bold', 'underline', 'clear']], ['fontname', ['fontname']],
            ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['table', ['table']],
            ['insert', ['link', 'picture', 'video']], ['view', ['fullscreen', 'codeview', 'undo', 'redo', 'help']]]
        });
        $(document).ready(function () { StartUp(); });


        //Functions
        async function StartUp() {
            let data = []; Metro.storage.getItem('WebMenuList', null).forEach(item => { data.push([item.id, item.sequence, item.groupId, item.group.name, item.name]); });
            var table = Metro.getPlugin("#menuTable", "table");
            console.log(data);
        
            table.setItems(data); table.reload();

            let result = await GetMenuGroupList();
            let selectMenu = Metro.getPlugin('#groupMenu', 'select');
            let option = [];
            result.forEach(group => { option.push({ val: group.id, title: group.name, selected: false }); });
            selectMenu.addOptions(option);
        }

        function MenuSettingToJson() {
            return {
                Settings: [
                    { Key: "GroupId", Value: $("#groupMenu")[0].selectedOptions[0].value },
                    { Key: "Sequence", Value: $("#menuSeq").val() },
                    { Key: "Name", Value: $("#menuName").val() },
                    { Key: "MenuClass", Value: $("#menuClass").val() },
                    { Key: "Description", Value: $("#menuDescription").val() },
                    { Key: "HtmlContent", Value: $("#menuSummernote").summernote('code') }
                ]
            }
        };

        function SetRecId() {
            var table = Metro.getPlugin("#menuTable", "table");
            var groupSelect = Metro.getPlugin('#groupMenu', 'select');
            let selectedMenu = Metro.storage.getItem('WebMenuList', null).filter(menu => { return menu.id == table.getSelectedItems()[0][0]; })[0];
            recId = selectedMenu.id;
            groupSelect.val(selectedMenu.groupId);
            $("#menuSeq").val(selectedMenu.sequence);
            $("#menuName").val(selectedMenu.name);
            $("#menuDescription").val(selectedMenu.description);
            $("#menuClass").val(selectedMenu.menuClass);
            $("#menuSummernote").summernote('code', selectedMenu.htmlContent);
        }

        async function SaveMenu() {
            if (isValid) {
                await setTimeout(async function () {
                    let data = MenuSettingToJson();
                    if (saveNew) { data.Settings.push({ Key: "Id", Value: 0 }); }
                    else { data.Settings.push({ Key: "Id", Value: recId }); }
                    window.showPageLoading();
                    let response = await fetch(Metro.storage.getItem('ApiOriginSuffix', null) + '/WebPages/SetMenuList', {
                        method: 'POST',
                        headers: {
                            "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null),
                            'Content-type': 'application/json'
                        }, body: JSON.stringify(data)
                    }); let result = await response.json();

                    if (result.Status == "error") {
                        var notify = Metro.notify; notify.setup({ width: 300, timeout: Metro.storage.getItem('NotifyShowTime', null), duration: 500 });
                        notify.create(JSON.stringify(result), "Error", { cls: "alert" }); notify.reset();
                    } else {
                        var notify = Metro.notify; notify.setup({ width: 300, timeout: Metro.storage.getItem('NotifyShowTime', null), duration: 500 });
                        notify.create("UloĹľenĂ­ bylo ĂşspÄ›ĹˇnĂ©", "Success", { cls: "success" }); notify.reset();
                        await GetWebMenuList();
                    }
                    window.hidePageLoading();

                }, 100);
            }
        }


    </script>
</div>

```    
			
---   
			### WebMenuBuilder.cshtml.cs     

```http   
			ď»żusing Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class WebMenuBuilderModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;

        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = ServerCoreHelpers.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}
```    
			
---   
			### WebSetting.cshtml     

```http   
			ď»ż@page
@model ServerCorePages.WebSettingModel
@{
    ViewData["Title"] = "NastavenĂ­ Webu";
}


<div class="text-center mb-4 pb-5">
    <window style="position: relative; top: 60px;">
        <div id="TogglePanelBackground" class="panel" style="min-height: 700px;">
            <form class="form1" data-role="validator" action="javascript:" data-on-submit="SaveWebSettings"
                  data-interactive-check="true" autocomplete="off" data-on-error="newCommentIsValid = false;">
                <div class="d-block">
                    <div class="d-flex row gutters mr-4">
                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 pl-5 pt-5 mb-0">
                            <ul data-role="tabs" data-expand="true" data-tabs-type="text">
                                <!-- <ul data-app-bar="true" data-role="materialtabs" data-fixed-tabs="true" data-deep="true"> -->
                                <li id="systemBehaviorMenu" class="fg-black"><a href="#_systemBehavior">ChovĂˇnĂ­ SystĂ©mu</a></li>
                                <li id="systemDesignMenu" class="fg-black"><a href="#_systemDesign">Vzhled SystĂ©mu</a></li>
                            </ul>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 pt-4 col-12">
                            <div class="text-right">
                                <button type="button" class="button warning outline shadowed" onclick="ShowBackgound()">
                                    UkĂˇzat pozadĂ­
                                </button>
                                <button type="button" class="button info outline shadowed" onclick="StoreWebSettings()">
                                    Otestovat
                                </button>
                                <button type="submit" class="button success outline shadowed">
                                    UloĹľit
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="_systemBehavior">
                        <div class="d-flex row gutters ml-5 mr-5 mb-5 border">

                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group">
                                    <label for="Street">ZobrazenĂ­ Notifikace milisekundy</label>
                                    <input id="NotifyShowTime" type="number" data-role="spinner" data-min-value="0" data-max-value="30000">
                                </div>
                            </div>

                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group pt-5">
                                </div>
                            </div>

                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group pt-5">
                                    <input id="AutomaticDetectedLanguageTranslate" type="checkbox" data-role="checkbox" data-caption="AutomatickĂ˝ pĹ™eklad do DetekovanĂ©ho Jazyka NĂˇvĹˇtÄ›vnĂ­ka" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div id="_systemDesign">
                        <div class="d-flex row gutters ml-5 mr-5 mb-5 border">

                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group p-3 pb-0">
                                    <label for="Street">PrĹŻhlednost pĹ™ektrytĂ­ PozadĂ­ v %</label>
                                    <input id="BackgroundOpacitySetting" type="text" data-role="spinner" data-validate="required" data-step="10" data-min-value="0" data-max-value="100">
                                </div>

                                <div class="form-group p-3 pb-0">
                                    <label for="Street">Url/Cesta Videa PozadĂ­</label>
                                    <input id="BackgroundVideoSetting" type="text" data-role="input" data-validate="required" autocomplete="off" />
                                </div>

                                <div class="form-group p-3 pb-0">
                                    <label for="Street">Url/Cesta ObrĂˇzku PozadĂ­</label>
                                    <input id="BackgroundImageSetting" type="text" data-role="input" data-validate="required" autocomplete="off" />
                                </div>
                                

                                <div class="form-group p-3 pb-0">
                                    <label for="Street">Barva pĹ™ektrytĂ­ PozadĂ­</label>
                                    <input id="BackgroundColorSetting" type="text" data-role="input" data-validate="required hexcolor" autocomplete="off" />
                                </div>
                            </div>

                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <button type="button" class="button info outline shadowed mt-8" onclick='Metro.window.create({title:"DostupnĂ© obrĂˇzky",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Images/List/backgroundLinks.html\" style=\"width:100%;height:600px;\"></iframe>"});'>
                                    Zobrazit dostupnĂ© obrĂˇzky PozadĂ­
                                </button>
                            </div>

                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div class="form-group p-3 pb-0">
                                    <label for="Street">ZkopĂ­rujte Barvu</label>
                                    <div data-role="color-selector" data-show-user-colors="false" data-show-alpha-channel="false" data-readonly-input="true"></div>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </form>

            <div class="row gutters pr-5">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="text-right">
                        <button type="button" class="button warning outline shadowed" onclick="ShowBackgound()">
                            UkĂˇzat pozadĂ­
                        </button>
                        <button type="button" class="button info outline shadowed" onclick="StoreWebSettings()">
                            Otestovat
                        </button>
                        <button type="submit" class="button success outline shadowed">
                            UloĹľit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </window>
    <div class="mb-10"></div>

    <script>

        // Definitions


        //Startup
        async function Startup() {
            await GetWebSettingsList();
            $("#NotifyShowTime").val(Metro.storage.getItem('NotifyShowTime', null));
            $("#AutomaticDetectedLanguageTranslate").val('checked')[0].checked = Metro.storage.getItem('AutomaticDetectedLanguageTranslate', null);
            $("#BackgroundOpacitySetting").val(Metro.storage.getItem('BackgroundOpacitySetting', null));
            $("#BackgroundVideoSetting").val(Metro.storage.getItem('BackgroundVideoSetting', null));
            $("#BackgroundImageSetting").val(Metro.storage.getItem('BackgroundImageSetting', null));
            $("#BackgroundColorSetting").val(Metro.storage.getItem('BackgroundColorSetting', null));
        }; 
        $(document).ready(async function () { await Startup(); });
        


        //Functions
        function ShowBackgound() {
            if ($("#TogglePanelBackground")[0].style.backgroundColor != "transparent") { $("#TogglePanelBackground")[0].style.backgroundColor = "transparent"; }
            else { $("#TogglePanelBackground")[0].style.backgroundColor = "white"; }
        }

        function WebSettingsToJson() {
            return {
                Settings:  [
                    {Key: "NotifyShowTime", Value: $("#NotifyShowTime").val()},
                    { Key: "AutomaticDetectedLanguageTranslate", Value: $("#AutomaticDetectedLanguageTranslate").val('checked')[0].checked },
                    { Key: "BackgroundOpacitySetting", Value: $("#BackgroundOpacitySetting").val() },
                    { Key: "BackgroundVideoSetting", Value: $("#BackgroundVideoSetting").val() },
                    { Key: "BackgroundImageSetting", Value: $("#BackgroundImageSetting").val() },
                    { Key: "BackgroundColorSetting", Value: $("#BackgroundColorSetting").val() }
                ]
            }
        };

        function StoreWebSettings() {
            Metro.storage.setItem('NotifyShowTime', $("#NotifyShowTime").val());
            Metro.storage.setItem('AutomaticDetectedLanguageTranslate', $("#AutomaticDetectedLanguageTranslate").val('checked')[0].checked);
            Metro.storage.setItem('BackgroundOpacitySetting', $("#BackgroundOpacitySetting").val());
            Metro.storage.setItem('BackgroundVideoSetting', $("#BackgroundVideoSetting").val());
            Metro.storage.setItem('BackgroundImageSetting', $("#BackgroundImageSetting").val());
            Metro.storage.setItem('BackgroundColorSetting', $("#BackgroundColorSetting").val());
            ApplyLoadedWebSetting("isRuntimeChange");
        };

        async function SaveWebSettings() {
            window.showPageLoading();
            let response = await fetch(Metro.storage.getItem('ApiOriginSuffix', null) + '/WebPages/SetSettingList', {
                method: 'POST',
                headers: {
                    "Authorization": 'Bearer ' + Metro.storage.getItem('ApiToken', null),
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(WebSettingsToJson())
            });
            let result = await response.json();

            if (result.errors) {
                var notify = Metro.notify; notify.setup({ width: 300, timeout: Metro.storage.getItem('NotifyShowTime', null), duration: 500 });
                notify.create(JSON.stringify(result), "Error", { cls: "alert" }); notify.reset();
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, timeout: Metro.storage.getItem('NotifyShowTime', null), duration: 500 });
                notify.create("UloĹľenĂ­ bylo ĂşspÄ›ĹˇnĂ©", "Success", { cls: "success" }); notify.reset();
                StoreWebSettings();
            }
            window.hidePageLoading();
        }

    </script>
</div>

```    
			
---   
			### WebSetting.cshtml.cs     

```http   
			ď»żusing Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class WebSettingModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;

        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = ServerCoreHelpers.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}
```    
			
---   
			### WebViewers.cshtml     

```http   
			ď»ż@page
@model ServerCorePages.WebViewersModel
@{
    ViewData["Title"] = "Web Viewers";
}
@*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
    <window>
        <div class="h4 fg-darkOrange" style="top:10px;">
            EASY to USE:<br />
            Read the Installation description.<br />
            Look on Online Tool. For Next using is only COPY. All Problem Solved<br />
            All Tools are Static Pages, Run by Click on index.html only<br />

        </div>

        @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {

        }
        else {
            <div class="h4 fg-red ani-hover-heartbeat">
                For Download License You must be Logged in
            </div>
        }

        <div class="about ">
            <div class="container">
                <div class="mt-10 text-center">
                    <div class="fg-darkSteel" style="font-weight:bold;font-size:40px;opacity:0.7;">
                        Static Pages Web Viewers Tools
                    </div>
                    <p class="text-leader pl-20-md pr-20-md">
                        By click on Icons open Tool Info
                    </p>
                </div>

                <div class="row mt-10">
                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openMdViewer();Metro.window.create({title:"Markdown Web Viewer and Conerter",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/MDViewer/demo.html\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="MarkDownViewer" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("MarkDownViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("MarkDownViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">MarkDownViewer</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                @* <span onclick="window.open('../server/Downloads/ProjectManagement','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Project Management"></span>
                                                <span onclick='Metro.window.create({title:"Project Management ScreenShot",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/Downloads/ProjectManagement/Gallery\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show ScreenShot"></span>
                                                <span onclick="window.open('http://kliknetezde.cz:5001','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Project Management Online Test<br/>username: test@test.com<br/>password: tester"></span> *@

                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openPdfWebViewer();Metro.window.create({title:"Pdf Web Viewer",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/PdfViewer/web/index.html\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="PdfWebViewer" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("PdfWebViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("PdfWebViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            3000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">PdfWebViewer</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                @* <span onclick="window.open('../server/Downloads/EASYDATACenter','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download EASYDATACenter"></span>
                                                <span onclick='Metro.window.create({title:"EasyDataCenter ScreenShots",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../server/EASYDATACenter_Downloads/PhotoGallery\" style=\"width:100%;height:650px\"></iframe>"});' class="mif-eye ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Show ScreenShot"></span>
                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client EDCManager is on Desktop"></span>
                                                <span onclick='generateTrialLicense("EasyDataCenter");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span> *@
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openExcelViewer();Metro.window.create({title:"Excel Viewer",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/ExcelViewer/docs\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="ExcelViewer" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("ExcelViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("ExcelViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">ExcelViewer</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                @* <span onclick="window.open('../server/Downloads/EASYDATACenter','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download EASYDATACenter"></span>
                                                
                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client EDCManager is on Desktop"></span>
                                                <span onclick='generateTrialLicense("EasyDataCenter");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span> *@
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openExpertDocViewer();Metro.window.create({title:"Expert Documentation Viewer",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/ExpertDocViewer\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="ExpertDocViewer" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("ExpertDocViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("ExpertDocViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">ExpertDocViewer</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                @* <span onclick="window.open('../server/Downloads/EASYDATACenter','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download EASYDATACenter"></span>

                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client EDCManager is on Desktop"></span>
                                                <span onclick='generateTrialLicense("EasyDataCenter");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span> *@
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openWebCharts();Metro.window.create({title:"WebCharts",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/ChartJs/public\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="WebCharts" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("WebCharts");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("WebCharts");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">WebCharts</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                @* <span onclick="window.open('../server/Downloads/EASYDATACenter','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download EASYDATACenter"></span>

                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client EDCManager is on Desktop"></span>
                                                <span onclick='generateTrialLicense("EasyDataCenter");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span> *@
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openMsOfficeViewer();Metro.window.create({title:"Ms Office Web Viewer",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/MsOfficeViewer/dist\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="MsOfficeViewer" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("MsOfficeViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("MsOfficeViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            3000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">MsOfficeViewer</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                @* <span onclick="window.open('../server/Downloads/EASYDATACenter','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download EASYDATACenter"></span>

                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client EDCManager is on Desktop"></span>
                                                <span onclick='generateTrialLicense("EasyDataCenter");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span> *@
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openPanoramaViewer();Metro.window.create({title:"Panorama Viewer",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/PanoramaViewer/\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="PanoramaViewer" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("PanoramaViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("PanoramaViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">PanoramaViewer</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                @* <span onclick="window.open('../server/Downloads/EASYDATACenter','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download EASYDATACenter"></span>

                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client EDCManager is on Desktop"></span>
                                                <span onclick='generateTrialLicense("EasyDataCenter");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span> *@
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='openXmlDataViewer();Metro.window.create({title:"Xml Data Viewer",shadow:true,draggable:true,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe src=\"../Tools/XmlDataViewer/resources/html\" style=\"width:100%;height:650px\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Installation Info"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="XmlDataViewer" class="text-right" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" onclick='buyLicense("XmlDataViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            1000KÄŤ
                                        </div>
                                        <div class="d-block c-pointer" onclick='buyFullCode("XmlDataViewer");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            2000KÄŤ
                                        </div>
                                    </div>
                                    <div class="h4 text-light c-pointer">
                                        <div class="reduce-1 pt-2 enlarge-1-md">
                                            <div class="d-flex w-100">
                                                <div class="text-left pl-4">XmlDataViewer</div>
                                            </div>
                                            <div class="d-flex w-100">
                                                @* <span onclick="window.open('../server/Downloads/EASYDATACenter','_blank');" class="mif-file-download ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download EASYDATACenter"></span>

                                                <span onclick="window.open('http://kliknetezde.cz','_blank');" class="mif-local-service ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Online Server Client EDCManager is on Desktop"></span>
                                                <span onclick='generateTrialLicense("EasyDataCenter");' class="mif-document-file-key ani-heartbeat mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Trial License"></span> *@
                                                @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="pb-10 mb-10"></div>


    </window>

    <script>
        /* Startup */

        // Declaration


        // Startup Calling

        var notify = Metro.notify; notify.setup({ width: 300, duration: 5000, animation: 'easeOutBounce' });
        notify.create("Please Rate Tool After Download..."); notify.reset();
        GetGeneratorsRating();



        // Function Part
        function setGeneratorsRating(value, star, element) {
            let recId;
            $.ajax({
                type: "GET", url: "/Generators/SetGeneratedToolRatingName/" + element.id + "/" + value, dataType: 'json',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                }
            }).always(function (data) { GetGeneratorsRating(); });
            $(element).data('rating').static(true);
        };
        function GetGeneratorsRating() {
            $.get("/Generators/GetGeneratedToolRatingList").then(function (data) {
                data = JSON.parse(data);
                data.forEach(tool => {
                    switch (tool.Name) {
                        case "MarkDownViewer":
                            $('#MarkDownViewer').data('rating').val(tool.Rating);
                            $('#MarkDownViewer').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "PdfWebViewer":
                            $('#PdfWebViewer').data('rating').val(tool.Rating);
                            $('#PdfWebViewer').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "ExpertDocViewer":
                            $('#ExpertDocViewer').data('rating').val(tool.Rating);
                            $('#ExpertDocViewer').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                        case "ExcelViewer":
                            $('#ExcelViewer').data('rating').val(tool.Rating);
                            $('#ExcelViewer').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                          case "WebCharts":
                            $('#WebCharts').data('rating').val(tool.Rating);
                            $('#WebCharts').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;                          
                          case "MsOfficeViewer":
                            $('#MsOfficeViewer').data('rating').val(tool.Rating);
                            $('#MsOfficeViewer').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                          case "PanoramaViewer":
                            $('#PanoramaViewer').data('rating').val(tool.Rating);
                            $('#PanoramaViewer').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                          case "XmlDataViewer":
                            $('#XmlDataViewer').data('rating').val(tool.Rating);
                            $('#XmlDataViewer').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;

                        default:
                            break;
                    }
                });
            });
        };


        async function generateTrialLicense(project) {
            if (IsLogged()) {
                showPageLoading();

                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Downloading " + project + " Trial License..."); notify.reset();

                AuthDownloadFile("GET", "LicenseRequest/Trial/" + project);
                hidePageLoading();
            } else {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("You must Login First", "Alert", { cls: "alert" }); notify.reset();
            }
        };

        async function openMdViewer() {
            $('#MarkDownViewer').data('rating').static(false);
        };

        async function openPdfWebViewer() {
            $('#PdfWebViewer').data('rating').static(false);
        };

        async function openExcelViewer() {
            $('#ExcelViewer').data('rating').static(false);
        };

        async function openExpertDocViewer() {
            $('#ExpertDocViewer').data('rating').static(false);
        };

        async function openWebCharts() {
            $('#WebCharts').data('rating').static(false);
        };        
        
        async function openMsOfficeViewer() {
            $('#MsOfficeViewer').data('rating').static(false);
        };  
        async function openPanoramaViewer() {
            $('#PanoramaViewer').data('rating').static(false);
        };  
        async function openXmlDataViewer() {
            $('#XmlDataViewer').data('rating').static(false);
        };  
        
        
    </script>
</div>

```    
			
---   
			### WebViewers.cshtml.cs     

```http   
			ď»żusing EASYDATACenter.DBModel;
using EASYDATACenter.ServerCoreDefinition;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class WebViewersModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;

        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = ServerCoreHelpers.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}
```    
			
---   
			### WpfDeveloperTools.cshtml     

```http   
			ď»ż@page 
@model ServerCorePages.WpfDeveloperToolsModel
@{
    ViewData["Title"] = "Wpf Developer Tools";
}
    @*
    https://metroui.org.ua/intro.html
    https://metroui.org.ua/position.html
    https://www.c-sharpcorner.com/article/custom-login-register-with-identity-in-asp-net-core-3-1/
    *@

<div class="text-center info-panel mb-2">
    <window>
        <div class="h4 fg-darkOrange" style="top:10px;font-size:16px;">
            EASY to USE:<br />
            Prepared Tools & Packages for EASY Graphics Developing WPF Metro Systems.<br />
            <a href="https://mahapps.com/" target="_blank">Metro is Very Modern Technology</a><br />
            Download, Unpack, install or Compile for Run Examples of Graphics Posibilities.<br />
            Its for maximalize Graphics developing - Low Code - Way is Generate Graphics Builders<br />
        </div>

@*         @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {

        }
        else {
            <div class="h4 fg-red ani-hover-heartbeat">
                For Download You must be Logged in
            </div>
        } *@

        <div class="about ">
            <div class="container">
                <div class="mt-10 text-center">
                    <div class="fg-darkSteel" style="font-weight:bold;font-size:20px;opacity:0.7;">
                        WPF Applications & Project for EASY Developing from Graphics Builders 
                    </div>
                    <p class="text-leader pl-20-md pr-20-md">
                        By click on left Icon open Example
                    </p>
                </div>

                <div class="row mt-10">
                   

                    <div class="cell-md-6 pt-4">
                        <div class="p-4 bg-brand-secondary h-100">
                            <div class="icon-box border bd-brand">
                                <a href="#" class="unstyled-link c-pointer" onclick='Metro.window.create({title:"WPF Developer Theme / Style / Code / Comment / Design Tools",shadow:true,draggable:true,customButtons:WpfToolBackButton,modal:true,icon:"<span class=\"mif-info\"</span>",btnClose:true,width:1050,height:680,place:"center",content:"<iframe id=\"WpfToolWindow\" src=\"../server/Downloads/WPF_DevWindowsTools\" style=\"width:100%;height:640px;\"></iframe>"});'>
                                    <div class="icon bg-brand fg-white button" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Click for open Download"><span class="mif-file-text"></span></div>
                                </a>
                                <div class="content d-flex flex-align-center">
                                    <span class="pos-absolute w-100 text-right mif-3x" style="top: 0px;right:0px;">
                                        <input id="WPFDeveloperTools" class="text-right" data-static="false" data-role="rating" data-on-star-click="setGeneratorsRating" data-star-color="cyan" data-stared-color="fg-blue">
                                    </span>
                                    <div class="h4 text-right pos-absolute w-100 mb-0 pb-0 pr-1">
                                        <div class="d-block c-pointer mt-5" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Free Prepared Full Design WPF Code Package">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            Free
                                        </div>
@*                                         <div class="d-block c-pointer" onclick='buyFullCode("MetroPosibilities");' data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Buy Full Code with Help and Support">
                                            <span class="mif-shopping-basket ani-heartbeat mif-1x mif-1x"></span>
                                            5000KÄŤ
                                        </div> *@
                                    </div>
                                    <div class="text-light c-pointer w-100">
                                        <div class="reduce-1 pt-2 enlarge-1-md text-right">
                                            <div class="d-block w-100">
                                                <div class="text-left pl-2">WPF Designing Windows Tools <br />Prepared Full Developer Package</div>
                                            </div>
                                            @*                                             @if (User.Claims.FirstOrDefault(a => a.Type == ClaimTypes.Role) != null) {
                                            <span id="metroPosibilitiesDownload" onclick='downloadMetroPosibilities();' class="mif-file-download ani-heartbeat pl-1 mif-3x mif-3x" data-role="hint" data-cls-hint="bg-cyan fg-white drop-shadow" data-hint-text="Download Metro4 Dev Help" />
                                            } *@
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div class="pb-10 mb-10"></div>


    </window>
 
    <script>
        /* Startup */

        // Declaration
        let WpfToolBackButton = [{ html: "<span class=\"mif-backward\"></span>", cls: "warning", onclick: "$(\"#WpfToolWindow\").attr(\"src\", \"../server/Downloads/WPF_DevWindowsTools\")" }];


        // Startup Calling
        var notify = Metro.notify; notify.setup({ width: 300, duration: 5000, animation: 'easeOutBounce' });
        notify.create("Please Rate Tool After Download..."); notify.reset();
        GetGeneratorsRating();



        // Function Part
        function setGeneratorsRating(value, star, element) {
            $.ajax({
                type: "GET", url: "/Generators/SetGeneratedToolRatingName/" + element.id + "/" + value, dataType: 'json',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
                }
            }).always(function (data) { GetGeneratorsRating(); });
            $(element).data('rating').static(true);
        };
        function GetGeneratorsRating() {
            $.get("/Generators/GetGeneratedToolRatingList").then(function (data) {
                data = JSON.parse(data);
                data.forEach(tool => {
                    switch (tool.Name) {
                        case "WPFDeveloperTools":
                            $('#WPFDeveloperTools').data('rating').val(tool.Rating);
                            $('#WPFDeveloperTools').data('rating').msg('<span class="mr-1 fg-blue" style="font-size:16px;font-weight:bold">' + tool.TotalCount + '</span>');
                            break;
                            
                        default:
                            break;
                    }
                });
            });
        };

    </script>
</div>

```    
			
---   
			### WpfDeveloperTools.cshtml.cs     

```http   
			ď»żusing EASYDATACenter.DBModel;
using EASYDATACenter.ServerCoreDefinition;
using k8s.KubeConfigModels;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ServerCorePages {

    public class WpfDeveloperToolsModel : PageModel {
        public static ServerWebPagesToken serverWebPagesToken;

        public void OnGet() {

            string? requestToken = HttpContext.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;
            if (!string.IsNullOrWhiteSpace(requestToken)) {
                serverWebPagesToken = ServerCoreHelpers.CheckTokenValidityFromString(requestToken);
                if (serverWebPagesToken.IsValid) { User.AddIdentities(serverWebPagesToken.UserClaims.Identities); }
            }
            else { serverWebPagesToken = new ServerWebPagesToken(); }
        }
    }
}
```    
			
---   
			### _ViewImports.cshtml     

```http   
			ď»ż@using ServerCorePages
@namespace ServerCorePages
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers

```    
			
---   
			### _ViewStart.cshtml     

```http   
			ď»ż@{
    Layout = "_Layout";
}

```    
			
---   
			