//Developer Portal Startup Configuration
if (typeof EasyITCenterJS == 'undefined') { var EasyITCenterJS = {}; }
let EasyITCenterJSLoaded = false;
//Kontrola Existence KnihovnyJS
//Knihovna Globálních Funkcí


//Výchozí Konfigurace
EasyITCenterJS.startupCfg = {
    settings: {
        docsLink: "./index",
        dynamicGeneratorApi: "/DynamicWebGenerator",
        updateOnPageLoad: true,
        dataTimeOutIntervalSec: "1000",
        functNamespace: "EasyITCenter"
    },

    staticObjectIdList: [
        { "metroDocId": { "open": true, lastUpdate: null, generatorName: "" } }
    ],
    dynamicGeneratorObjectIdList: {
        mainDesktop: { id: "mainDesktopId", data: null, lastUpdate: null, dynamicGroupName: "EIC&ESBDevWeb", dynamicGeneratorName: "genMainDesktop" }
    },
};




//Startup Load Or Set Configuration
if (Metro.storage.getItem('userCfg', null) != null) {
    EasyITCenterJS.userCfg = Metro.storage.getItem('userCfg', null);
} else {
    EasyITCenterJS.userCfg = {
        portalCfg: EasyITCenterJS.startupCfg,
        userId: null, userName: "Anonymní", userRole: "webuser", name: "Host", surName: "",
        AutoHighlightEnabled: true, AutoMermaidEnabled: true
    };
    Metro.storage.setItem('userCfg', EasyITCenterJS.userCfg);
}



//Funkce Pro Ovladani Konfigurace

//Panely
function MetroPanelChangeParam(param) {
    console.log("pusi", param);

    if (typeof EasyITCenterJSLoaded != null && EasyITCenterJSLoaded) {
        switch (param) {
            case "open":
                EasyITCenterJS.userCfg.portalCfg.staticObjectIdList.filter(obj => { return obj.metroDocId; })[0].metroDocId.open = true;
                break;
            case "close":
                EasyITCenterJS.userCfg.portalCfg.staticObjectIdList.filter(obj => { return obj.metroDocId; })[0].metroDocId.open = false;
                break;
        }
        Metro.storage.setItem('userCfg', EasyITCenterJS.userCfg);
    }
}

// let tmpPanel = Metro.getPlugin("#metroDocId");
//            if (EasyITCenterJS.userCfg.portalCfg.staticObjectIdList.filter(obj => { return obj.metroDocId; })[0].metroDocId.collapsed) { tmpPanel.panel.collapsed(); } else { tmpPanel.panel.expand(); }




// Nastavuje Hodnoty na Objektech
function SetDefaultValues() {


    var tmpPanel = Metro.getPlugin("#metroDocId");
    if (EasyITCenterJS.userCfg.portalCfg.staticObjectIdList.filter(obj => { return obj.metroDocId; })[0].metroDocId.open) { tmpPanel.collapse.expand(); } else { tmpPanel.collapse.collapse(); }

    EasyITCenterJSLoaded = true;
}