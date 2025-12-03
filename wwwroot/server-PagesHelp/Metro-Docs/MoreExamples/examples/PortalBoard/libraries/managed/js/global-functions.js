//Globální Funkce Portálu


function ScrollToTop() { window.scrollTo(0, 0); }
function enableScroll() { window.onscroll = function () { }; }
function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        window.onscroll = function () { window.scrollTo(scrollLeft, scrollTop); };
}



function str2bytes(str) {
    var bytes = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes;
}

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

function UserChangeTranslateSetting() {
    Metro.storage.setItem('UserAutomaticTranslate', $("#UserAutomaticTranslate").val('checked')[0].checked);
}



function RestrictionControls() {
    //Enable-Disable Logged Controls
    //$("#UserSettingBtn").prop('disabled', !isLogged);
}



//Save Token on Success Login
async function Login(data) {
    Cookies.set('ApiToken', data.Token);
    Metro.storage.setItem('ApiToken', data.Token);
    Metro.storage.setItem('User', data);

    window.location.href = '/' + Metro.storage.getItem('WebMenuList', null)[0].id + "-" + Metro.storage.getItem('WebMenuList', data.Token)[0].name.replace(/\s+/g, '');
}


//Do Logout
function Logout() {
    Cookies.remove('ApiToken');
    Metro.storage.storage.clear();
    window.location.href = '/';
}


//Check is logged
function IsLogged() {
    return Metro.storage.getItem('ApiToken', null) != null;
}


async function FileReaderToImageData(n) {
    const t = new FileReader; return await new Promise((t, i) => {
        const r = new FileReader; r.onloadend = () => t(r.result); r.onerror = i;
        console.log("files", JSON.parse(JSON.stringify(files)));
        r.readAsDataURL(n[0]);
    });
}




//Function for  Mermaid Data to Graphics Conversion
async function Mermaid() { try { await mermaid.run({ nodes: document.querySelectorAll('.class-mermaid'), }); } catch (err) { } }

//Function for Highlighting Code Segments
function HighlightCode() { document.querySelectorAll('div.code').forEach(el => { hljs.highlightElement(el); }); }



