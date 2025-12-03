



//Translation Tool Panel TODO Set TOP
function CreateToolPanel() {
    let html = '<div id="toolPanel" data-role="bottom-sheet" class="bottom-sheet pos-fixed list-list grid-style opened" style="top: 0px; left: 90%; z-index:10000;min-width: 430px;">';
    html += '<div class="w-100 text-left"> <audio id="radio" class="light bg-transparent" data-role="audio-player" data-src="./media/hotel_california.mp3" data-volume=".5"></audio> </div>';
    html += '<div class="w-100 text-left" style="z-index: 1000000;"><div id="google_translate_element"></div></div>';
    html += '<div class="w-100 d-inline-flex"><div class="w-75 text-left">';
    html += '<input id="UserAutomaticTranslate" type="checkbox" data-role="checkbox" data-cls-caption="fg-cyan text-bold" data-caption="Auto Translate" onchange="UserChangeTranslateSetting">';
    html += '</div><div class="w-25 mt-1 text-right" style="max-width:25% !important;"><button class="button secondary mini" style="max-width:100% !important;" onclick="CancelTranslation()">Cancel Translate</button></div>';
    html += '</div><div class="d-flex w-100" title="Theme">';
    let themes = [
        ["#585b5d", "darcula.css?white"], ["#AF0015", "red-alert.css?white"], ["#690012", "red-dark.css?white"], ["#0CA9F2", "sky-net.css?white"],
        ["#585b5d", "darcula.css?#585b5d"], ["#AF0015", "red-alert.css?#AF0015"], ["#690012", "red-dark.css?#690012"], ["#0CA9F2", "sky-net.css?#0CA9F2"]
    ];
    themes.forEach((theme, index) => {
        html += '<button class="button shadowed w-50px opc-05 mt-1" style="background-color: ' + theme[0] + ';" onclick="ChangeSchemeTo(\'' + theme[1] + '\')" ></button>';
        if (index == 3) { html += '</div><div class="d-flex w-100" title="BackGround">'; }
    });
	return html;
}

let injectToolPanel = document.createElement("div"); 
injectToolPanel.innerHTML = CreateToolPanel(); 
document.body.append(injectToolPanel);

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


injectFile("stylesheet","./autotranslate/css/metro.min.css");
injectFile("script","./autotranslate/js/jquery-3.6.0.min.js");
injectFile("script","./autotranslate/js/metro.js");

$(document).ready(function () { 
	googleTranslateElementInit(); 
});
