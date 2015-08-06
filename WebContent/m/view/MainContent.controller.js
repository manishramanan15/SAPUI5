sap.ui.controller("sap.ui.fame.m.view.MainContent", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf m.view.MainContent
*/
	onInit: function() {
		var oData = {logo: jQuery.sap.getModulePath("sap.ui.core", '/') + "mimes/logo/sap_50x26.png"};
	    var oModel = new sap.ui.model.json.JSONModel();
	    oModel.setData(oData);
	    this.getView().setModel(oModel);

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf m.view.MainContent
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf m.view.MainContent
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf m.view.MainContent
*/
//	onExit: function() {
//
//	}

	  handlePressConfiguration: function(oEvent) {
		    var oItem = oEvent.getSource();
		    var oShell = this.getView().byId("myShell");
		    var bState = oShell.getShowPane();
		    oShell.setShowPane(!bState);
		    oItem.setShowMarker(!bState);
		    oItem.setSelected(!bState);
		  },

		  handleLogoffPress: function(oEvent) {
		    sap.m.MessageToast.show("Logoff Button Pressed");
		  },

		  handleUserItemPressed: function(oEvent) {
		    sap.m.MessageToast.show("User Button Pressed");
		  },
		  
		  handleSearchItemSelect: function(oEvent) {
		    sap.m.MessageToast.show("Search Entry Selected: " + oEvent.getSource().getTitle());
		  },

		  handleShellOverlayClosed: function() {
		    sap.m.MessageToast.show("Overlay closed");
		  },

		  handleSearchPressed: function(oEvent) {
		    var sQuery = oEvent.getParameter("query");
		    if(sQuery == "") {
		      return;
		    }

		    // create Overlay only once
		    if (!this._overlay) {
		      this._overlay = sap.ui.xmlfragment(
		        "sap.ui.fame.m.view.ShellOverlay",
		        this
		      );
		      this.getView().addDependent(this._overlay);
		    }

		    // mock data
		    var aResultData = [];
		    for(var i = 0; i < 10; i++) {
		      aResultData.push({
		                title:(i + 1) + ". " + sQuery,
		                text:"Lorem ipsum sit dolem"
		              });
		    }
		    var oData = {
		            searchFieldContent: sQuery,
		            resultData: aResultData
		          };
		    var oModel = new sap.ui.model.json.JSONModel();
		    oModel.setData(oData);
		    this._overlay.setModel(oModel);

		    // set reference to shell and open overlay
		    this._overlay.setShell(this.getView().byId("myShell"));
		    this._overlay.open();
		  }

});