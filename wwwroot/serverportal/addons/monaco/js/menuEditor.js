require.config({ paths: { 'vs': '/serverportal/addons/monaco/js/monaco-editor/min/vs' } });
require(['vs/editor/editor.main'], function () {

    let fileCounter = 0;

    monaco.editor.defineTheme('myTheme', {
        base: 'vs-dark',
        inherit: true,
        rules: [{ background: 'EDF9FA' }],
        // colors: { 'editor.lineHighlightBackground': '#0000FF20' }
    });
    monaco.editor.setTheme('myTheme');


    //monaco.languages.registerCompletionItemProvider('functionList', {
    //    provideCompletionItems: function (model, position) {
    //        const suggestions = Metro.storage.getItem('FunctionList', null);
    //        return { suggestions: suggestions };
    //    }
    //});

    function newEditor(elementId, container_id, code, language) {
        let model = monaco.editor.createModel (code, language);
        let editor = monaco.editor.create(document.getElementById(container_id), {
            model: model,
            suggest: {
                preview: true, insertMode: "replace"
            },
            automaticLayout: true, fixedOverflowWidgets: true,
            //language: language,
        });
        
        Gs.Variables.monacoEditorList.push({ elementId: elementId, editor: editor, model: model });
        return editor;
    }


    function addNewEditor(code, elementId, language) {
        var new_container = document.createElement("DIV");
        new_container.id = "container-" + fileCounter.toString(10);
        new_container.className = "monacocontainer";
        document.getElementById(elementId).appendChild(new_container);
        newEditor(elementId,new_container.id, code, language);
        fileCounter += 1;
    }

    addNewEditor("" ,"monacoHTML", 'html');
    addNewEditor("", "monacoJS", 'javascript');
    addNewEditor("", "monacoCSS", 'css');

    /*
    var languageSelected = document.querySelector('.language');    
    languageSelected.onchange = function () {
        monaco.editor.setModelLanguage(window.monaco.editor.getModels()[0], "html")
    }
    */

   
    var themeSelected = document.querySelector('.theme');    
    themeSelected.onchange = function () {
        monaco.editor.setTheme(themeSelected.value)
    }
    
    

    
});