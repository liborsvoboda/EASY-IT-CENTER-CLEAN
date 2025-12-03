# Úvod   EIC Knihovny Kódů a Šablony  

Knihovny kódů implementovaných v projektu. 
Většinou už budete jen opakovat co bylo vytvořeno, takže stačí vykopírovat z Těchto Knihoven

Implementované Generátory Webů Stránek, Dokumentací, Galerií, Prezentací, Webových Portálů,

# EIC- Implementované Generátory    
    
### Generátor Dokumentace    
    
1. Gnerátor HTML, MD, Docx, Dokumentace    
    
```    
        //WebFile Generator    
        //Convert MD->Html,Convert Html->Md,    
        //Convert List<MD>->List<Html>,Convert List<Html>->List<Md>,    
        //Convert MD->Docx,List<Md>->List<Docx>    
        //Generate List<Md>->Index.Md,Generate List<Md>->Index.Html    
        //TODO Ošetřit aby Mohli menit soubory jen ve svem ulozisti    
        //TODO Udelat Aendu Dynamicke Registace Trid Pro Dynamicka API a tam se zadaji file Extensions    
        //TODO VKladat Static DB Soubory    
        //TODO Vracet jako Zip    
```    
    
Příklad Volání API:    
```    
using (HttpClient httpClient = new HttpClient()) {    
    httpClient.DefaultRequestHeaders.Add("Authorization", this.HttpContext.Request.Headers.Authorization.ToString());    
    var bodyRequest =new StringContent(JsonSerializer.Serialize(new MDGeneratorCreateIndexRequest() {    
        FromType = SupportGenFileTypes.Md,    
        ToType = SupportGenFileTypes.Docx,    
        RewriteAllowed = true,    
        WebRootFilePath ="/server-doc/md-book/src/templates",    
        IndexOnly = false,    
        ScanRootOnly = false,    
        ServerLanguage = "cz"    
    }), System.Text.Encoding.UTF8, "application/json");    
    await httpClient.PostAsync((this.HttpContext.Request.IsHttps ? "https://" : "http://") +    
        this.HttpContext.Request.Host + "/UltraSystemControl/WebFilesGenerator", bodyRequest);    
}```    
    
---    
    
    
#API Generátory    
    
1.  Generátor Dokumentace    
/ServerApi/GeneratorServices/GenerateDocsFile    
{    
  "webRootFilePath": "/EIC&ESBdocs/",    
  "fromType": "Html",    
  "toType": "Html",    
  "scanRootOnly": false,    
  "indexOnly": true,    
  "rewriteAllowed": true,    
  "serverLanguage": "cz",    
  "indexInFrameList": true,    
  "genHtmlIndexFileSuffix":"_libIndex",    
  "FromSuffixOnly": false    
}    
    
        //WebFile Generator    
        //Convert MD->Html,Convert Html->Md,    
        //Convert List<MD>->List<Html>,Convert List<Html>->List<Md>,    
        //Convert MD->Docx,List<Md>->List<Docx>    
        //Generate List<Md>->Index.Md,Generate List<Md>->Index.Html,Generate List<Html>->Index.Html    
        //TODO Ošetřit aby Mohli menit soubory jen ve svem ulozisti    
        //TODO Udelat Aendu Dynamicke Registace Trid Pro Dynamicka API a tam se zadaji file Extensions    
        //TODO VKladat Static DB Soubory    
        //TODO Vracet jako Zip    
    
    
    
    
    
    