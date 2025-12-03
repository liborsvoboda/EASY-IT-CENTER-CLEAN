

$('body').storage.set('DetectedLanguage', (navigator.language || navigator.userLanguage).substring(0, 2));

//Function for  Mermaid Data to Graphics Conversion
async function Mermaid() { try { await mermaid.run({ nodes: document.querySelectorAll('.language-mermaid'), }); } catch (err) { } }

//Function for Highlighting Code Segments
function HighlightCode() { document.querySelectorAll('div.code').forEach(el => { hljs.highlightElement(el); }); }

function injectFile(type,src) {
    return new Promise(function (resolve, reject) {
        let link = document.createElement(type);
		if (type == "link"){link.href = src;link.rel = 'stylesheet';} 
		else if(type == "script") {link.src = src;link.type="text/javascript";} 
        link.onload = () => resolve(link);
        link.onerror = () => reject(new Error(`Style load error for ${src}`));
        document.head.append(link);
    });
}


let injectToolPanel = document.createElement("div"); 
injectToolPanel.innerHTML ='<div id="google_translate_element" style="position: fixed;bottom: 0px;left: 40%;"></div>';
document.body.append(injectToolPanel);
injectFile("script","https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
		
$(document).ready(function () { 
	setTimeout(()=>{

		Mermaid();
		GoogleTranslateElementInit();
	}, 3000); 
	
});



function GoogleTranslateElementInit() {
    $(document).ready(function () {
        new google.translate.TranslateElement({
            pageLanguage: '', //includedLanguages: 'en,cs',
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false
        }, 'google_translate_element');

        if (document.querySelector('#google_translate_element select') != null) {
            setTimeout(function () {
                let selectElement = document.querySelector('#google_translate_element select');
                selectElement.value = $('body').storage.set('DetectedLanguage');
                selectElement.dispatchEvent(new Event('change'));
            }, 1000);
        }
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
