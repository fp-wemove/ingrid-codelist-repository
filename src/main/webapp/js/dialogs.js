var clDialogs = {};

//require(["dijit/Dialog"]);
dojo.require("dijit.Dialog");

clDialogs.TYPE_OK           = "OK";
clDialogs.TYPE_ERROR        = "ERROR";

clDialogs.MSG_SAVE_ERROR    = "The Codelist could not be saved due to an error!";
clDialogs.MSG_SAVE_SUCCESS  = "The Codelist has been saved successfully!";
clDialogs.MSG_DELETE_LIST   = "Do you really want to delete the selected codelist?";
clDialogs.MSG_CHANGES       = "There are changes which need to be saved first! Do you want to discard these changes?";

clDialogs.showDialog = function(type, content) {
    var myDialog = new dijit.Dialog({
	    // The dialog's title
	    title: type == "ERROR" ? "Error" : "Information",
	    // The dialog's content
	    content: content,
        'class': type == "ERROR" ? "error" : ""
	});
    myDialog.show();
};

clDialogs.showAskDialog = function(content) {
    var def = new dojo.Deferred();
    
    var myDialog = new dijit.Dialog({
        // The dialog's title
        title: "Question"
    });
    
    var content = dojo.create("div", {
        "class": "dijitDialogPaneContentArea",
        "innerHTML": content
    }, myDialog.containerNode);
    
    var actionBar = dojo.create("div", {
        "class": "dijitDialogPaneActionBar"
    }, myDialog.containerNode);

    new dijit.form.Button({
        label: "Ok",
        type: "submit",
        onClick: function() {console.debug("ok clicked"); def.callback();} 
    }).placeAt(actionBar);
    new dijit.form.Button({
        label: "Cancel",
        type: "submit",
        onClick: function() {console.debug("cancel clicked");def.cancel();}
    }).placeAt(actionBar);
    
    myDialog.show();
    return def;
};