//Globální Funkce Portálu
let pageLoader;
/*let charms;*/



/*Start of Global Loading Indicator for All Pages*/
function hidePageLoading() { Metro.activity.close(pageLoader); }
function showPageLoading() {
    if (pageLoader != undefined) {
        if (pageLoader[0]["DATASET:UID:M4Q"] == undefined) { pageLoader = null; }
        else {
            try { Metro.activity.close(pageLoader); } catch {
                try { pageLoader.close(); } catch { pageLoader = pageLoader[0]["DATASET:UID:M4Q"].dialog; pageLoader.close(); }; pageLoader = null;
            }
        }
    }
    pageLoader = Metro.activity.open({ type: 'atom', style: 'dark', overlayClickClose: true, /*overlayColor: '#fff', overlayAlpha: 1*/ });
}


function googleTranslateElementInit() {
    $(document).ready(function () {
        new google.translate.TranslateElement({
            pageLanguage: 'cs', //includedLanguages: 'en,cs',
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false
        }, 'google_translate_element');

        let autoTranslateSetting = Metro.storage.getItem('AutomaticDetectedLanguageTranslate', null) == null || Metro.storage.getItem('AutomaticDetectedLanguageTranslate', null) == false ? false : true;
        if (autoTranslateSetting && document.querySelector('#google_translate_element select') != null) {
            setTimeout(function () {
                let selectElement = document.querySelector('#google_translate_element select');
                selectElement.value = Metro.storage.getItem('DetectedLanguage', null);
                selectElement.dispatchEvent(new Event('change'));
            }, 1000);
        }

        /*
        let userTranslateSetting = Metro.storage.getItem('UserAutomaticTranslate', null) != null && Metro.storage.getItem('UserAutomaticTranslate', null) ? true : false;
        if (userTranslateSetting && document.querySelector('#google_translate_element select') != null) {
            setTimeout(function () {
                let selectElement = document.querySelector('#google_translate_element select');
                selectElement.value = "nemam";
                selectElement.dispatchEvent(new Event('change'));
            }, 1000);
        }*/


    });
}

function CancelTranslation() {
    setTimeout(function () {
        let selectElement = document.querySelector('#google_translate_element select');
        selectElement.selectedIndex = 1;
        selectElement.dispatchEvent(new Event('change'));
        if (selectElement.value != '') {
            setTimeout(function () {
                let selectElement = document.querySelector('#google_translate_element select');
                selectElement.selectedIndex = 0;
                selectElement.dispatchEvent(new Event('change'));
                if (selectElement.value != '') {
                    setTimeout(function () {
                        let selectElement = document.querySelector('#google_translate_element select');
                        selectElement.selectedIndex = 0;
                        selectElement.dispatchEvent(new Event('change'));
                    }, 2000);
                }
            }, 2000);
        }
    }, 1000);
}




function PrintElement(elementId) {
    try {
        $("#" + elementId).printElement({ pageTitle: elementId.split("_")[1] + ".html", printMode: "popup" });
    } catch (t) { }
}

function DownloadHtmlElement(elementId) {
    try {
        var t = document.body.appendChild(document.createElement("a")); t.download = elementId + ".html"; t.href = "data:text/html;charset=utf-8," + encodeURIComponent(document.getElementById(elementId).innerHTML); t.click();
    } catch (i) { }
}

async function CopyElement(elementId) {
    try {
        let t = document.getElementById(elementId).innerHTML; await navigator.clipboard.writeText(t);
    } catch (t) { }
}

function ImageFromElement(elementId) {
    try {
        $("document").ready(function () {
            html2canvas($("#" + elementId), {
                onrendered: function (t) {
                    $("#previewImage").append(t);
                    var r = t.toDataURL("image/png"), u = r.replace(/^data:image\/png/, "data:application/octet-stream"), i = document.body.appendChild(document.createElement("a")); i.download = elementId + ".png"; i.href = u; i.click();
                }
            });
        });
    } catch (t) { }
}











