//WebPages Api Definition List

//Get WebSettings List
async function GetWebSettingsList() {
    window.showPageLoading();
    let response = await fetch(Metro.storage.getItem('ApiOriginSuffix', null) + '/WebPages/GetSettingList', {
        method: 'GET', headers: {
            'Content-type': 'application/json'
        }
    });
    let result = await response.json();

    if (result.Status == "error") {
        var notify = Metro.notify; notify.setup({ width: 300, timeout: Metro.storage.getItem('NotifyShowTime', null), duration: 500 });
        notify.create(result.ErrorMessage, "Error", { cls: "alert" }); notify.reset();
    } else {
        if (result.Status != undefined) {
            var notify = Metro.notify; notify.setup({ width: 300, timeout: Metro.storage.getItem('NotifyShowTime', null), duration: 500 });
            notify.create(result.ErrorMessage, "Error", { cls: "alert" }); notify.reset();
        } else {
            result.forEach(setting => {
                switch (setting.key) {
                    case "NotifyShowTime": Metro.storage.setItem('NotifyShowTime', setting.value); break;
                    case "AutomaticDetectedLanguageTranslate": Metro.storage.setItem('AutomaticDetectedLanguageTranslate', JSON.parse(setting.value.toLowerCase())); break;
                    case "BackgroundOpacitySetting": Metro.storage.setItem('BackgroundOpacitySetting', setting.value); break;
                    case "BackgroundColorSetting": Metro.storage.setItem('BackgroundColorSetting', setting.value); break;
                    case "BackgroundVideoSetting": Metro.storage.setItem('BackgroundVideoSetting', setting.value); break;
                    case "BackgroundImageSetting": Metro.storage.setItem('BackgroundImageSetting', setting.value); break;
                    case "WebPagesName": Metro.storage.setItem('WebPagesName', setting.value); break;
                    case "WebPagesNameSmall": Metro.storage.setItem('WebPagesNameSmall', setting.value); break;
                    case "WebSettingRefreshOnEachLoad": Metro.storage.setItem('WebSettingRefreshOnEachLoad', JSON.parse(setting.value.toLowerCase())); break;
                    case "AutoHighlightEnabled": Metro.storage.setItem('AutoHighlightEnabled', JSON.parse(setting.value.toLowerCase())); break;
                    case "AutoMermaidEnabled": Metro.storage.setItem('AutoMermaidEnabled', JSON.parse(setting.value.toLowerCase())); break;
                    case "WebBuilderHeadSection": Metro.storage.setItem('WebBuilderHeadSection', setting.value); break;
                    case "CycleWebPageMottosEnabled": Metro.storage.setItem('CycleWebPageMottosEnabled', JSON.parse(setting.value.toLowerCase())); break;
                    case "CycleWebPageMottosSecTime": Metro.storage.setItem('CycleWebPageMottosSecTime', setting.value); break;
                    case "ReloadContentOnly": Metro.storage.setItem('ReloadContentOnly', JSON.parse(setting.value.toLowerCase())); break;
                    case "WebSystemPortalLogEnabled": Metro.storage.setItem('WebSystemPortalLogEnabled', JSON.parse(setting.value.toLowerCase())); break;
                }
            });
            if (Metro.storage.getItem('CycleWebPageMottosEnabled', null) != null && Metro.storage.getItem('CycleWebPageMottosEnabled', null)) { GetMottoList(); }
            if (Metro.storage.getItem('WebSettingsList', null) == null) {
                Metro.storage.setItem('WebSettingsList', result);
                ApplyLoadedWebSetting("reload");
            }
            ApplyLoadedWebSetting("reload");
        }
    }
    window.hidePageLoading();
}


//Get WebMenu List or AuthWebMenuList
async function GetWebMenuList() {
   // window.showPageLoading();
    let response = await fetch(Metro.storage.getItem('ApiOriginSuffix', null) + (Metro.storage.getItem('ApiToken', null) == null ? '/WebPages/GetWebMenuList' : '/WebPages/GetAuthWebMenuList') , {
        method: 'GET', headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
        }
    });
    let result = await response.json();

    if (result.Status == "error") {
        var notify = Metro.notify; notify.setup({ width: 300, timeout: Metro.storage.getItem('NotifyShowTime', null), duration: 500 });
        notify.create(result.ErrorMessage, "Error", { cls: "alert" }); notify.reset();
        ShowBlockedMessage();
    } else {
        if (Metro.storage.getItem('WebMenuList', null) == null) {
            Metro.storage.setItem('WebMenuList', result);
            SetWebMenuPanel();
            SetWebMenuHtml();
        } else { Metro.storage.setItem('WebMenuList', result); SetWebMenuPanel(); }
    }
   // window.hidePageLoading();
}

//Save Message
function SendMessage() {
    showPageLoading();
    var def = $.ajax({
        global: false, type: "POST", url: Metro.storage.getItem('ApiOriginSuffix', null) + "/WebPages/InsertMessage", dataType: 'json',
        headers: {
            'Content-type': 'application/json'
        },
        data: JSON.stringify({ Message: $("#NewMessage").val() })
    });

    def.fail(function (err) {
        var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
        notify.create("Saving Message Failed", "Alert", { cls: "alert" }); notify.reset();
        hidePageLoading();
    });

    def.done(function (data) {
        var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
        notify.create("Saving Message Sucessfully", "Info", { cls: "success" }); notify.reset();
        $("#NewMessage").val(null);
        hidePageLoading();
        GetMessages();
    });
}

//Get Messages
function GetMessages() {
    showPageLoading();
    $.ajax({
        url: Metro.storage.getItem('ApiOriginSuffix', null) + '/WebPages/GetMessageList', dataType: 'json',
        type: "GET",
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null)
        },
        success: function (data) {
            data = JSON.parse(JSON.stringify(data));
            let messageData = "";
            data.forEach(message => {
                messageData += "<div class=\"card image-header\"><div class=\"card-content p-2 op-lightBrown-low\"><p class=\"fg-black\">" + message.Name + "</p>" + message.Description + "</div></div>";
            });
            $("#MessageBox").html(messageData);
            hidePageLoading();
        },
        error: function (error) {
            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
            notify.create("Downloading Messages Failed", "Alert", { cls: "alert" }); notify.reset();
            hidePageLoading();
        }
    });
}

//Get NewsList
function GetNewsList() {
	if (Metro.storage.getItem('NewsList', null) == null) {
	    showPageLoading();
	    $.ajax({
            url: Metro.storage.getItem('ApiOriginSuffix', null) + '/WebPages/GetNewsList', dataType: 'json',
	        type: "GET",
	        headers: { 'Content-type': 'application/json' },
	        success: function (data) {
	            data = JSON.parse(JSON.stringify(data));
	            Metro.storage.setItem('NewsList', data);
	            let messageData = "";
	            data.forEach(message => {
	                messageData += "<div class=\"card image-header\"><div class=\"card-content p-2\"><p class=\"fg-black\"><b>" + new Date(message.timeStamp).toLocaleDateString() + "</b> "+ message.title + "</p>" + message.description + "</div></div>";
	            });
	            $("#NewsListBox").html(messageData);
	            Metro.infobox.open('#NewsInfoBox');
	            hidePageLoading();
	        },
	        error: function (error) {
	            var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
	            notify.create("Downloading Messages Failed", "Alert", { cls: "alert" }); notify.reset();
	            hidePageLoading();
	        }
	    });
	} else { 
		let data = Metro.storage.getItem('NewsList', null);
		let messageData = "";
        data.forEach(message => {
            messageData += "<div class=\"card image-header\"><div class=\"card-content p-2\"><p class=\"fg-black\"><b>" + new Date(message.timeStamp).toLocaleDateString() + "</b> "+ message.title + "</p>" + message.description + "</div></div>";
        });
        $("#NewsListBox").html(messageData);
		Metro.infobox.open('#NewsInfoBox');
	}
}

//Get MottoList 
function GetMottoList() {
    if (Metro.storage.getItem('MottoList', null) == null) {
        //showPageLoading();
        $.ajax({
            url: Metro.storage.getItem('ApiOriginSuffix', null) + '/WebPages/GetMottoList', dataType: 'json',
            type: "GET",
            headers: { 'Content-type': 'application/json' },
            success: function (data) {
                data = JSON.parse(JSON.stringify(data));
                Metro.storage.setItem('MottoList', data);
                ShowWebPageMottos();
                //hidePageLoading();
            },
            error: function (error) {
                var notify = Metro.notify; notify.setup({ width: 300, duration: 1000, animation: 'easeOutBounce' });
                notify.create("Downloading Messages Failed", "Alert", { cls: "alert" }); notify.reset();
                //hidePageLoading();
            }
        });
    } else { ShowWebPageMottos(); }
}


