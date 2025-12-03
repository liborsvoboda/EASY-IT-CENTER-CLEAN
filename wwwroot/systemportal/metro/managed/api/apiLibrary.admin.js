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

