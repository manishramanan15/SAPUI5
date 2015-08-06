sap.ui.controller("sap.ui.fame.d.view.FameLogin", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf d.view.FameLogin
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf d.view.FameLogin
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf d.view.FameLogin
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf d.view.FameLogin
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
				window.location="d/index.html";
			}
					
			dialog.setText(sText);
			sText = "Authenticated";
		}, 2000);
	
	}//end authentication

	
});