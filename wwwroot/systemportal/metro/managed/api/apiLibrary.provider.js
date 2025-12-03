//// Provider Only Api Definition List
async function SendWebSystemLogMessage(logMessage) {
	//console.log("send Log", log);
	let user = Metro.storage.getItem('User', null);
	
    let response = await fetch(Metro.storage.getItem('ApiOriginSuffix', null) + '/WebPages/WebSystem/SetWebSystemLogMessage', {
        method: 'POST', headers: { 'Content-type': 'application/json', 'Authorization': 'Bearer ' + Metro.storage.getItem('ApiToken', null) },
        body: JSON.stringify({ 
        	LogLevel: logMessage.LogLevel,Message: logMessage.Message, UserId: user != null ? user.Id : null, UserName: user != null ? user.Name : null,
        	ImageName: null, Image: null, AttachmentName: null, Attachment:null
        })
    });
    let result = await response.json();
	
	/*if (result.Status == "error") {
	        var notify = Metro.notify; notify.setup({ width: 300, timeout: Metro.storage.getItem('NotifyShowTime', null), duration: 500 });
	        notify.create(result.ErrorMessage, "Error", { cls: "alert" }); notify.reset();
	        return [];
	    } else { return result; }
	*/
}


//Only For Provider Portal Sharing Concept and Control of Portal
async function GetSolutionToolList() {
    if (Metro.storage.getItem('SolutionToolList', null) == null) {
	    window.showPageLoading();
	    let response = await fetch(Metro.storage.getItem('ApiOriginSuffix', null) + '/WebPages/GetSolutionToolList', {
	        method: 'GET', headers: { 'Content-type': 'application/json' }
	    }); let result = await response.json();
	    //result = result.sort((a, b) => a.name - b.name);
	    Metro.storage.setItem('SolutionToolList', result);
	    GenerateGlobalToolBox();
	    window.hidePageLoading();
	    return true;
	} else { GenerateGlobalToolBox(); }
}

//Only For Provider Portal Sharing Menu Codes
async function GetTemplateWebMenuList() {
    window.showPageLoading();
    let response = await fetch(Metro.storage.getItem('ApiOriginSuffix', null) + '/WebPages/GetTemplateWebMenuList', {
        method: 'GET', headers: { 'Content-type': 'application/json' }
    }); let result = await response.json();
    result = result.sort((a, b) => a.name - b.name);
    Metro.storage.setItem('TemplateWebMenuList', result);
    window.hidePageLoading();
    return true;
}

//Only For Provider Portal Sharing Concept and Control of Portal
async function GetManagedJsCssList() {
    window.showPageLoading();
    let response = await fetch(Metro.storage.getItem('ApiOriginSuffix', null) + '/WebPages/GetManagedJsCssList', {
        method: 'GET', headers: { 'Content-type': 'application/json' }
    }); let result = await response.json();
    result = result.sort((a, b) => a.name - b.name);
    Metro.storage.setItem('ManagedJsCssList', result);
    window.hidePageLoading();
    return true;
}


//-----------------------------------------------------------------------------------------------
//Doc Server Data


//Get ServerDocs Templates List
async function GetTemplateDocList() {
    if (Metro.storage.getItem('TemplateDocList', null) == null) {
        showPageLoading();
         let response = await fetch(Metro.storage.getItem('ApiOriginSuffix', null) + '/WebDocumentation/GetTemplateDocList', {
    	    method: 'GET', headers: { 'Content-type': 'application/json' }
    	}); let result = await response.json();
    		Metro.storage.setItem('TemplateDocList', result);
           	await GenerateTemplateDocBox();
            	hidePageLoading();
    } else { await GenerateTemplateDocBox(); }
     return true;
}


//-----------------------------------------------------------------------------------------------

//// WebAdmin Api Definition List

//Admin Get Code Library List
async function GetTemplateWebCodeLibraryList() {
    window.showPageLoading();
    let response = await fetch(Metro.storage.getItem('ApiOriginSuffix', null) + '/WebPages/WebAdmin/WebCodeLibraryList', {
        method: 'GET', headers: { 'Content-type': 'application/json' }
    }); let result = await response.json();
    result = result.sort((a, b) => a.name - b.name);
    Metro.storage.setItem('TemplateWebCodeLibraryList', result);
    window.hidePageLoading();
    return true;
}


