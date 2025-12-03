[Zpět](../../../)   


```xml  

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EIC-MDglogalSolution</title>
    <link rel="stylesheet" href="~/ServerCoreTools/markdown/css/bootstrap.css"/>
    <link href="~/ServerCoreTools/markdown/css/font-awesome.min.css" rel="stylesheet">
    <link href="~/ServerCoreTools/markdown/metro/css/metro3.css" rel="stylesheet" />
    <link href="~/ServerCoreTools/markdown/metro/css/metro-schemes.css" rel="stylesheet" />
    <link href="~/ServerCoreTools/markdown/metro/css/metro-icons.css" rel="stylesheet" />


    <script type="text/javascript" src="~/ServerCoreTools/markdown/js/jquery-3.6.0.min.js"> </script>
    <script type="text/javascript" src="~/ServerCoreTools/markdown/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="~/ServerCoreTools/markdown/js/jspdf.js"></script>
    <script type="text/javascript" src="~/ServerCoreTools/markdown/js/clipboard.min.js"></script>

    <script type="text/javascript" src="~/ServerCoreTools/markdown/metro/js/metro-addon.js"></script>
    <script type="text/javascript" src="~/ServerCoreTools/markdown/metro/js/metro3.js"></script>

    <script type="text/javascript" src="~/ServerCoreTools/markdown/js/globalStorage.js"></script>
    <script type="text/javascript" src="~/ServerCoreTools/markdown/js/globalScript.js"></script>
    <style>
        img {
            max-width: 100%
        }
        .skiptranslate { /* display:none !important; */
            /*  zoom: 1.2; */
        }

        .audio-player {
            zoom: 0.7;
            background-color: transparent !important;
        }

        #\:1\.container {
            visibility: hidden !important;
        }
    </style>
</head>

<!-- Google Translation -->
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<script>document.title = (Metro.storage.getItem('WebPagesName', null) == null ? "EDC+ESB IT GroupWare-Solution.Eu" : Metro.storage.getItem('WebPagesName', null)) + (decodeURI(window.location.pathname).split("-")[1] == undefined ? "" : decodeURI(window.location.pathname).split("-")[1])</script>

<body>
    <div id="docLoader" data-role="preloader" data-type="square" data-style="color" style="position: absolute;top: 200px;left: 50%;z-index: 100000;" class="shadow"></div>
    <div id="toolPanel" data-role="charm" data-position="top" class="pos-fixed list-list grid-style opened shadow" style="top: 0px; z-index:10000;min-width: 400px;max-width: 400px;background-color: bisque;left: 40% !important;}}">
        <div class="w-100 text-left" style="z-index: 1000000;"><div id="google_translate_element"></div></div>
        <div class="w-100 d-inline-flex">
            <div class="w-50 text-left">
                <label class="input-control checkbox">
                    <input id="UserAutomaticTranslate" type="checkbox" checked>
                    <span class="check"></span>
                    <span class="caption fg-black">Překládat Automaticky</span>
                </label>
            </div><div class="w-25 mt-1 text-right"><button class="button secondary mini" onclick="CancelTranslation()">Zrušit Překlad</button></div>
        </div>
        <div class="c-pointer mif-cancel icon pos-absolute fg-red" style="top:5px;right:5px;" onclick="ShowToolPanel()"></div>
    </div>

    <nav data-role="app-bar" class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <ul class="m-menu bg-darkCobalt shadow">
                <li><a href="~/server-doc/md-book/book/" title="Vyhledat v Dokumentaci s Fultextovým Vyhledáváním" target="_blank"><strong>Vyhledat</strong></a></li>
                <li>
                    <a href="#" class="dropdown-toggle">Overview</a>
                    <div class="m-menu-container shadow" data-role="dropdown" data-no-close="true">
                        <div class="grid no-margin">
                            <div class="row cells5">
                                <div class="cell colspan4">
                                    <h2 class="fg-white text-bold text-shadow">EIC&ESB = Servery, Systémy, Weby v 1 balení V2.+</h2>
                                    <p class="padding20 no-padding-top no-padding-left no-padding-bottom fg-white">
                                        Fultextová Dokumentace bude Aktualizována Zájmem či při Dostatku volného času. Čeká 500 nástrojů na implementaci.<br />
                                        Nyní probíhá vývoj ve volném čase. I tak každý den vývoje znamená přidání něčeho zásadního.<br />
                                        Tak si ulehčete práci s IT, začněte Šetřit a Kontaktujte mne již nyní. 30denní Plná verze je ke stažení.
                                    </p>
                                    <p class="fg-white text-bold">
                                        Libor Svoboda
                                        <div class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('tel:+420724986873','_blank');">Phone: +420 724 986 873</div>
                                        <div>Email: <span class="d-inline-flex c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('mailto:Libor.Svoboda@GroupWare-Solution.Eu','_blank');"> Libor.Svoboda@GroupWare-Solution.Eu</span> - <span class="d-inline-flex c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('mailto:Libor.Svoboda@KlikneteZde.Cz','_blank');">Libor.Svoboda@KlikneteZde.Cz</span></div>
                                        <div class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('skype:Chrasty80','_blank');">Skype: Chrasty80</div>
                                        <div class="c-pointer ani-hover-horizontal fg-indigo" onclick="window.open('https://api.whatsapp.com/send?phone=00420724986873','_blank');">WhatsApp</div>
                                    </p>
                                </div>
                                <div class="cell colspan1">
                                    <ul class="unstyled-list">
                                        <li><h3 class="text-shadow">EIC&ESB Docs</h3></li>
                                        <li><a class="fg-white" onclick="ChangeSource('~/server-doc/md-book/book/')" href="#">FullText Dokumentace</a></li>
                                        <li><a class="fg-white" href="~/EIC&ESBdocs/CodeDocs/">EIC&ESB Kód Jader Řešení</a></li>
                                        <li><a class="fg-white" href="~/EIC&ESBdocs/EIC-InfoWeb/">InfoDocs EIC</a></li>
                                        <li><a class="fg-white" href="~/EIC&ESBdocs/ESB-InfoWeb/">InfoDocs ESB</a></li>
                                        <li><a class="fg-white" href="~/EIC&ESBdocs/EIC-XmlWeb/">EIC Projekt XML-Objekty</a></li>
                                        <li><a class="fg-white" href="~/EIC&ESBdocs/ESB-XmlWeb/">ESB Projekt XML-Objekty</a></li>
                                        <li><a class="fg-white" href="~/EIC&ESBdocs/CodeDocs/InspiredByGithub.md">Github Inspirace Aktuálně</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" class="dropdown-toggle">Frameworky</a>
                    <div class="m-menu-container" data-role="dropdown" data-no-close="true">
                        <ul class="inline-list">
                            <li><a href="#">Windows</a></li>
                            <li><a href="#">Office</a></li>
                            <li><a href="#">Skype</a></li>
                            <li><a href="#">Internet Explorer</a></li>
                            <li><a href="#">Visio</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#" class="dropdown-toggle">DashBoardy</a>
                    <div class="m-menu-container" data-role="dropdown">
                        <ul class="inline-list">
                            <li><a href="#">Surface</a></li>
                            <li><a href="#">Xbox</a></li>
                            <li><a href="#">PC & Tables</a></li>
                            <li><a href="#">Phones</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#" class="dropdown-toggle">Editory</a>
                    <div class="m-menu-container" data-role="dropdown">
                        <ul class="inline-list">
                            <li><a href="#">Surface</a></li>
                            <li><a href="#">Xbox</a></li>
                            <li><a href="#">PC & Tables</a></li>
                            <li><a href="#">Phones</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#" class="dropdown-toggle">Editory</a>
                    <div class="m-menu-container" data-role="dropdown">
                        <ul class="inline-list">
                            <li><a href="#">Surface</a></li>
                            <li><a href="#">Xbox</a></li>
                            <li><a href="#">PC & Tables</a></li>
                            <li><a href="#">Phones</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                    </div>
                </li>

                <li class="place-right no-hovered c-pointer mif-earth mif-4x fg-white padding10 bg-black ani-hover-heartbeat'><a href="#" title='Přeložit do libovolného jazyku' onclick='ShowToolPanel()' style="cursor: pointer;max-height: 52px;"></a></li>
                <li class="place-right no-hovered bg-darkRed" >
                   @*  <form>
                        <div class="input-control text" style="width: 250px; margin-right: 10px">
                            <input type="text" placeholder="Vyhledat">
                            <button class="button"><span class="mif-search"></span></button>
                        </div>
                    </form> *@
                    <a href="#" onclick="history.back();"><strong>Zpět</strong></a>
                </li>
               
            </ul>
        
        </div>
    </nav>
    <div class="container body-content">
        @RenderBody()
       
        <hr />
        <footer>
            <div class="pull-right">
                <a href="https://GroupWare-solution.Eu">
                    <img src="~/logo.png" style="width:50px;"/>
                </a>
            </div>
            <p>&copy; @DateTime.Now.Year, GroupWare Solution Global Technologies</p>
        </footer>
    </div>
</body>
</html>


```  

