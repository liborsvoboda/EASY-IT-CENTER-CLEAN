//Globální Controllery Portálu
// Zde jsou controlerry ovládání generovaných Objektů

//Global Control For Show Page MD Help
async function OpenDocView(docname) {
    if (docname != null && docname.length > 0 && Metro.get$el($("#DocView"))[0] == undefined) {
        Metro.window.create({
            title: "Nápověda", shadow: true, draggable: true, modal: false, icon: "<span class=\"mif-info\"</span>",
            btnClose: true, width: 1000, height: 680, place: "top-center", btnMin: false, btnMax: false, clsWindow: "", dragArea: "#AppContainer",
            content: "<iframe id=\"DocView\" height=\"650\" style=\"width:100%;height:650px;\"></iframe>"
        });

        setTimeout(async function () {
            window.showPageLoading();
            let response = await fetch(
                Metro.storage.getItem('ApiRootUrl', null) + '/WebPages/GetWebDocumentationList/' + docname, {
                method: 'GET', headers: { 'Content-type': 'application/json' }
            }); let result = await response.json();

            if (result.Status == "error") {
                ShowNotify('error', result.ErrorMessage);
            } else {
                document.getElementById("DocView").srcdoc = result;
            }
            window.hidePageLoading();
        }, 100);
    }
}


//Global Controller For Expand/Collapse of All Collapse Elements
function ElementExpand(elementId) {
    try {
        let el = Metro.getPlugin('#' + elementId, 'collapse');
        let elStatus = el.isCollapsed();
        if (elStatus) { el.expand(); } else { el.collapsed(); }
    } catch { }
}

//Global Controller For Show/Hide Elements
function ElementShowHide(elementId, showOnly = false) {
    try {
        let el = Metro.get$el('#' + elementId);
        if (showOnly) { el.show(); }
        else if (el.style("display") == "none") { el.show(); } else { el.hide(); }
    } catch { }
}


//Global Controller For Set Checkbox with true/false Value by Element Id
function ElementSetCheckBox(elementId, val) {
    try {
        $('#' + elementId).val('checked')[0].checked = JSON.parse((val.toString().toLowerCase()));
    } catch { }
}


//Global Controller For Set Active Class to Element by Element Id
function ElementSetActive(elementId) {
    try {
        $('#' + elementId).addClass(" active ");
    } catch { }
}


//Accordion Control Active CustomMenu In Header 
async function AccordionCustomMenuClick(elementId) {
    const result = await setTimeout(() => {
        if (!$('#' + elementId).parent()[0].classList.contains("active")) {
            $('#' + elementId).parent().addClass(' active ');
            setTimeout(() => { $('#' + elementId).parent().children()[1].style.display = "block"; }, 50);
        }
    }, 100);
}


//Global Control for Open/Close InfoBox By Element Id
function InfoBoxOpenClose(elementId) {
    try {
        if (Metro.infobox.isOpen('#' + elementId)) { Metro.infobox.close('#' + elementId); }
        else { Metro.infobox.open('#' + elementId); }
    } catch { }
}


//Global Control for Show Configured Notification 
function ShowNotify(type, message) {
    try {
        var notify = Metro.notify; notify.setup({ width: 300, timeout: Metro.storage.getItem('NotifyShowTime', 2000), duration: 500 });
        if (type == 'error') { notify.create(message, "Error", { cls: "alert" }); }
        else if (type == 'success') { notify.create(message, "Success", { cls: "success" }); }
        else if (type == 'info') { notify.create(message, "Info"); }
        notify.reset();
    } catch { }
}


//Global Init Standard SummernoteElement Init by Element Id
function ElementSummernoteInit(elementId) {
    try {
        $('#' + elementId).summernote({
            tabsize: 2, height: 250, maxHeight: 250,
            toolbar: [['style', ['style']], ['font', ['bold', 'underline', 'clear']], ['fontname', ['fontname']],
            ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['table', ['table']],
            ['insert', ['link', 'picture', 'video']], ['view', ['fullscreen', 'undo', 'redo', 'help']]]
        });
        var newCss = {};
        newCss.backgroundColor = '#d6caba';
        $('.note-editable').css(newCss);
    } catch (err) { console.log("ElementSummernoteInit:", err); }
}


