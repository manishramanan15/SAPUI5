sap.ui.controller("sap.ui.fame.view.App", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.App
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.App
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.App
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.App
*/
//	onExit: function() {
//
//	}
	
	authenticate : function(event){
		
		var dialog = sap.ui.getCore().byId("busy4") || new sap.m.BusyDialog({
			id : "busy4", // sap.ui.core.ID
			busy : false, // boolean
			busyIndicatorDelay : 1000, // int
			visible : true, // boolean
			text : "Contacting Server", // string
			title : "Authenticating", // string
			showCancelButton : true, // boolean
			tooltip : "Authenticating", // sap.ui.core.TooltipBase
			close : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ]
		});
		
		dialog.open();
		
		var sText = "Connected to the server";
		
		var intervalID = setInterval(function(){
			if(dialog.getText() == "Authenticated"){
				clearInterval(intervalID);
				dialog.close();
				window.location="fame/main/index.html";
			}
					
			dialog.setText(sText);
			sText = "Authenticated";
		}, 2000);
	
	},//end authentication

	/**
	 * Navigates to another page
	 * @param {string} pageId The id of the next page
	 * @param {sap.ui.model.Context} context The data context to be applied to the next page (optional)
	 */
	to : function (pageId, context) {
		
		var app = this.getView().app;
		
		// load page on demand
		var master = ("Master" === pageId);
		if (app.getPage(pageId, master) === null) {
			var page = sap.ui.view({
				id : pageId,
				viewName : "sap.ui.demo.myFiori.view." + pageId,
				type : "XML"
			});
			page.getController().nav = this;
			app.addPage(page, master);
			jQuery.sap.log.info("app controller > loaded page: " + pageId);
		}
		
		// show the page
		app.to(pageId);
		
		// set data context on the page
		if (context) {
			var page = app.getPage(pageId);
			page.setBindingContext(context);
		}
	},
	
	/**
	 * Navigates back to a previous page
	 * @param {string} pageId The id of the next page
	 */
	back : function (pageId) {
		this.getView().app.backToPage(pageId);
	}

});