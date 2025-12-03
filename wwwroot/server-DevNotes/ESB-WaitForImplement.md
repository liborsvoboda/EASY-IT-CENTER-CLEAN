
# Remember
**!! CEFSHARP nepovyšovat , MAJI BUG !!!** - půjde do Backupu Nahrazen WebView2 


# First TODO v Pořadí

 
//Links to csv minning form URL api 
https://www.scrapingbee.com/blog/web-scraping-csharp/

static hosting hm - pujde unlilmited pujde spoustenim cmd server + system
https://github.com/davidnx/NextjsStaticHosting-AspNetCore

graphql
https://graphql.org/code/#c-net



hostování web aplikací
https://blog.codeinside.eu/2015/09/29/wpf-chrome-embedded-and-webapi-selfhosting/

WPF čte data z cefsharp browsehu - tak mužu vytvářet rychle libovolné apky pro WPF
a nebo ty apky budou komunikovat přímo se serverem mimo WPF
https://github.com/cefsharp/CefSharp/tree/master/CefSharp.Wpf.Example

WPF - WPF 
https://github.com/dearman/activizdotnet-WPF/tree/master

GoogleMaps
https://github.com/mchall/GoogleMapsApi

WPF powershell
https://github.com/analogrelay/Coco


https://github.com/Royosef/FileHost/tree/master
file hosting

https://github.com/WPFDevelopersOrg/XamlViewer
profi xaml editor

roslyn C# for WPF implennent

Graphicd Document editor drrag drop
https://github.com/alexiej/YATE


poradnej editor MUSIM MIT
https://github.com/lepinay/myedit

https://github.com/greenshot/Playground.Editor/tree/master
xam,l editor


Perfect desktop designer por machines and more
https://github.com/LPeter1997/WpfEditorLibrary

maji spousty grafickych app
https://www.syncfusion.com/account/profilecompletion?returnurl=%2fdownloads%2fmetrostudio

https://github.com/scriptcs-contrib/scriptcs-webapi/tree/dev
webserver
https://github.com/scriptcs-contrib/scriptcs-webapi/tree/dev
script-webapi  xaml na webu add


ilspy dokaze generovat tu dokumentaci
https://github.com/icsharpcode/ILSpy/tree/master/ICSharpCode.ILSpyX/Search


Vše o XAML
https://docs.telerik.com/devtools/wpf/styling-and-appearance/styling-apperance-editing-control-templates


microsoft WPF na webu
https://www.wpftutorial.net/3rdPartyLibs.html

dohrat ilspy  ma i context menu



avaloniaDocs
https://docs.avaloniaui.net/docs/reference/controls/contextmenu


dnspy online  debug and compiler EASY DEV
https://github.com/sentientpc/dnSpy


https://github.com/JustinPealing/html-query-plan?tab=readme-ov-file
display table execution html structure


stream server
https://github.com/sentientpc/RecordRTC

chrome web
https://github.com/sentientpc/WordFlow-Web/tree/master


JS grid tables easy
SlickGrid https://github.com/6pac/SlickGrid/tree/master/examples



Cesta k dynamickým Formulářům - udělat Test usercontrol window pro program který bude designer pro XAML

var label = new Label().LoadFromXaml("<Label Text=\"Hello dynamic world!\" />");

void LoadData()
{
    // Load values from Json
    var jsonData = Preferences.Get("JsonData", "{}");
    var data = JsonConvert.DeserializeObject<Dictionary<string, object>>(jsonData);
    Values.Clear();
    if (data != null)
    {
        foreach (var entry in data)
        {
            Values.Add(entry.Key, entry.Value);
        }
    }
    // Get the Xaml and put inside the shell
    var baseDefinition = Preferences.Get(nameof(XamlDefinition), "");
    XamlDefinition = XamlShell.Replace("{{content}}", baseDefinition);
    var contentView = new ContentView().LoadFromXaml(XamlDefinition);
    // Set DataBinding
    contentView.BindingContext = this;
    // Set the content on the view
    ContentPresenter?.Children?.Clear();
    ContentPresenter?.Children?.Add(contentView);
}




WPF  má hotové služby na tvorbu nových onjektů designerem pro metro a spousty dalšího co rozšíří vývoj
do extrému
https://github.com/Dirkster99/UserNotifications


xceed avalon charts calenadr panely
https://github.com/xceedsoftware/wpftoolkit/wiki


to vše umí WPFTOOLKIT 

Document WorkFlow
https://github.com/xceedsoftware/DocX

multicalendar
https://github.com/xceedsoftware/wpftoolkit/wiki/MultiCalendar

<xctk:WindowContainer>
  <xctk:ChildWindow WindowBackground="Blue"
                    Left="75"
                    Top="50"
                    Width="275"
                    Height="125"
                    WindowState="Open">
    <TextBlock Text="This is a Child Window" Padding="10"/>
  </xctk:ChildWindow>

  <xctk:ChildWindow WindowBackground="Green"
                    Left="175"
                    Top="125"
                    Width="275"
                    Height="125"
                    WindowState="Open">
    <TextBlock Text="This is another Child Window" Padding="10"/>
  </xctk:ChildWindow>

  <xctk:MessageBox Caption="MessageBox"
                   Text="This is a MessageBox"/>
</xctk:WindowContainer>


WPF 405 repozitářů  WPF i NET třeba web code review, WPF objekty programově designer
https://github.com/mattleibow

řešení multiplatform 2000 repozitářů
https://github.com/mono/mono/tree/main

monowebsote

sprava db projektu gererovani aplikaci a vse  maji to co delam ja
https://www.monodevelop.com/documentation/  

maji stravu projektu a editory na vsechno managing databaze pivotu i se spravou vytvoreni projektu
https://github.com/mono/md-website/tree/gh-pages#setting-up-a-local-copy-of-the-website

zaimplementovat EDI ma vse krome naseptavace https://dirkster99.github.io/Edi/

https://github.com/heartacker 145repos

dokonala sprava githubu hura
https://github.com/heartacker/sourcegit


markdig pro spravu dokumentace
https://github.com/heartacker/markdig

maji editory na vse takze tabulka pristupy  FTP ssh atd
a zaiúplementovat klienty a je to
https://github.com/heartacker?tab=repositories

vizualizace ve WPF a na webu
https://github.com/heartacker/Csharp-Data-Visualization


dokument server
https://github.com/heartacker/DocumentServer


language server kompilovani online
https://github.com/heartacker/csharp-language-server-protocol


 ICSharpCode.TextEditor.

 dalsi kolem kompilaaci a fajn logu
 https://github.com/vatsan-madhavan?tab=repositories



 windows IT profesional kompletni dokumentace spravy vseho v MD, kdyz tam dam tu knihovnu co cte md ja html mam cely portal
 https://github.com/vatsan-madhavan/windows-itpro-docs/tree/public


 instalator balicku doufam ze do projektu GUI
 https://github.com/vatsan-madhavan/StyleCopAnalyzers


 build WPF projektu
 https://github.com/heartacker/wpf


 C# WAML build sluyba hostovani vyvoje
 https://github.com/heartacker/dt/tree/master

 uwp for ITHHome 
 https://github.com/heartacker/ITHome/tree/master


 gerrit sprava projektu se vsim primo na webu   konkurence maji svuj git

 https://gerrit.googlesource.com/

 https://gerrit.googlesource.com/?format=HTML

 instalator geritu  to jsou google vcetne prochy a vseho  je to ale u nich
 https://gerrit.googlesource.com/gerrit-installer/

 https://gerrit-review.googlesource.com/Documentation/intro-project-owner.html


 https://gerrit-releases.storage.googleapis.com/index.html  servery ke stazeni je to google opensource

 blazor webview for wpf   zprovozneni wpf na webu
 https://github.com/heartacker/TwokaB
 https://github.com/SteveSandersonMS/WebWindow   


 https://github.com/jspuij  ten co ma apky na webu 50 repos


 pro WPF  mozna budu muset prewest do netcore
 https://jspuij.github.io/BlazorWebView.Docs/pages/wpftutorial.html?tabs=addwpf-1


 screenshot software udelat screen tvorbu navodu manualu atd
 https://github.com/heartacker/HandyScreenshot


 https://github.com/heartacker/ClearScript  js/vb/google script
 pro snadnou praci se scripty v jaemkoliv jazyce


 https://dotnetbrowser-support.teamdev.com/   pro  zobrazeni apek na webu visual studio

 markdown luxus editor for visual lze prevest do WPF a naiplementovat?
 https://github.com/heartacker/MarkdownEditor2022/blob/master/art/navigator-bar.png

stvoritele dotnetbrowser 9repos
https://github.com/TeamDev-IP


moderní schema builder ideální na vlastní sprábu DB 
https://github.com/heartacker/NodeNetwork 

gui seriove rozhrani  app muze byt i pro udrzbare muzou si posilat data na serial usb cokoliv
https://github.com/heartacker/SerialChart


muzu i zaimplementovat programovani a kompilaci c++ a nabizet mechanikum


i okno generate new custom app - prevody wpf do html, sablony pro nowe projekty+compile+download finish

jako třeba toto k tomu udělat jednoduchy API server nahodit ho na webu - spustit ve WPF a mam hotovo
https://github.com/heartacker/WPFArrows

taky todělat podporu instalací z gitu a knihovnu a to budou šablony a vytvořit ji jen z Install-Package ModernWpfUI
https://github.com/heartacker/ModernWpf zkompiluji a vložím do App


unix run c# code , file or full project
https://github.com/heartacker/cs/blob/master/src/Program.cs

neznam ELF Uimage Mach-o formaty
https://github.com/heartacker/elfsharp/tree/master


https://github.com/heartacker/clr-loader/tree/master
spoustec net   treba backend serveru
https://github.com/heartacker/clr-loader/tree/master

krizovatka moudrosti
https://github.com/microsoft/dotnet/blob/main/dotnet-developer-projects.md

snad web sprava projektu
https://github.com/enduracode/enterprise-web-library

EDI EDI EDI
to ma EDI v sobe
UML Editor luxus
LogFOrnet viewer 

dobře zpracovane stranky s programy dle zamereni
https://www.linuxlinks.com/best-free-open-source-software-development/


materialUi msa vlastn9 webbuilder opensource

je řešení pro react aplikace 
https://dotnetify.net/core

dokumentace SQL objektu
https://www.codeproject.com/Articles/5161784/Documenting-MS-SQL-Server-Databases

netcore portal article Wexflow - Open Source .NET Workflow Engine  workflow server
https://www.codeproject.com/Articles/5346143/Wexflow-Open-Source-NET-Workflow-Engine

videokonference
https://github.com/aelassas/wexstream/tree/main



clean code dotnet
https://github.com/aelassas/clean-code-dotnet/tree/master

clean code javascript
https://github.com/ryanmcdermott/clean-code-javascript


Roslyn,RoslynPad,CSharpEditor,AvalonStudio,Avalonia.Desktop  
jak net6UI app pro uplnou spravu projeku

Editory CDS.CSharpScripting,Avalonia,AvalonEdit,SharpLab
ICSharpCODE ma spostu jinych funkci jako VB-C# atd


avalonia i moderní xaml https://github.com/AvaloniaUI



manik bohaty na C# 150 uzitecnych projektu
https://github.com/KirillOsenkov?tab=repositories

https://github.com/KirillOsenkov/LayoutDesigner/tree/master/LayoutDesigner/UI
pekna stavba formulare drag drop pro xaml

další blázen do C# 3D / Games / Etc. 61 repos
https://github.com/tgjones/veldrid
