[Zpět](../../../)   


```xml  

<!DOCTYPE html>
<html>
<head>

    <title>@ViewBag.Title - Privátní GitServer</title>
    <meta name="viewport" content="width=device-width" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <meta name="charset" content="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="author" content="Libor Svoboda">
    <meta name="description" content="EasyITCenter">
    <meta name="keywords" content="System, Backend, API, EASY-IT-Center, EASY-SYSTEM-Builder, Application, Server, IT, Solution, Help, HowTo, Javascript, HTML5, UI, Library, Web, Development, Framework">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">

    <link href="~/server-web/github/semantic/semantic.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="~/server-web/github/css/main.css" />
    <link href="~/server-web/github/css/metro-all.min.css" rel="stylesheet" />

    <script src="~/server-web/github/js/jquery.min.js"></script>
    <script src="~/server-web/github/semantic/semantic.min.js"></script>
    <script src="~/server-web/github/js/metro.min.4.5.2.js"></script>
    <script src="~/server-web/github/js/globalBehavior.js"></script>
    <script src="~/server-web/github/js/globalFunctions.js"></script>
    <script src="~/server-web/github/js/globalStorage.js"></script>

    <!-- Google Translation -->
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

    <link rel="shortcut icon" href="~/server-web/github/img/favicon.ico" />
</head>
<body>
    <div class="full height">
        <noscript>Prosím Zapněte podporu Javascriptu ve vašem Prohlížeči!</noscript>
        <div class="following bar light">
            <div class="ui container">
                <div class="ui grid">
                    <div class="column">
                        <div class="ui top secondary menu">
                            <a class="item brand" href="/">
                                <img src="~/server-web/github/img/logo_white.svg" alt="GitServer" class="logo-image" title="Domů" />
                            </a>

                            <a class="item" href="~/server-web/github/Public">Veřejné Privátní GitHub Repozitáře</a>
                            <a class="item" href="~/server-web/github/Shared">Sdílené Privátní GitHub Repozitáře</a>

                            <div class="pos-relative pos-top-left mt-4" style="width:350px;">
                                <div id="google_translate_element"></div>
                            </div>
@*                          <a class="item" href="/">přední strana</a>
                            <a class="item" href="#">prozkoumat</a> *@

                            <div class="right menu">
                                @if (ViewContext.HttpContext.User.Identity != null && ViewContext.HttpContext.User.Identity.IsAuthenticated) {
                                    <a class="item" href="#">@ViewContext.HttpContext.User.Identity.Name</a>
                                    <a class="item" href="~/server-web/github/User/Signout">Odhlásit</a>
                                } else { <a class="item" href="~/server-web/github/User/Login">Přihlásit</a> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui container dashboard">
            @RenderBody()
        </div>        
    </div>
    <footer>
        <div class="ui container">
            <div class="ui left">
                Groupware-Solution © 2023 Privátní GitServer Verze: '1.5' Datum: 20.09.2023
            </div>
            <div class="ui right links">
                <a target="_blank" href="https://GropWare-Soltion.Eu">GropWare-Solution.Eu</a>
                <a target="_blank" href="https://KlikneteZde.Cz:8000">Systém Builder k Vidění Online</a>
            </div>
        </div>
    </footer>

    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>
</html>


```  

