sap.ui.jsview("sap.ui.fame.view.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.App
	*/ 
	getControllerName : function() {
		return "sap.ui.fame.view.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.App
	*/ 
	createContent : function(oController) {
 		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		//create an app
		this.app = new sap.m.App({
			id : "idAppControl", // sap.ui.core.ID
			visible : true, // boolean
			height : "100%", // sap.ui.core.CSSSize
			width : "100%", // sap.ui.core.CSSSize
			visible : true, // boolean
			defaultTransitionName : "slide", // string, since 1.7.1
			homeIcon : "img/favicon.ico", // any
			backgroundColor : "#F8FFF8", // string, since 1.11.2
		});
		
		var device = sap.ui.getCore().getModel("device");
		console.log(device);
		
		var viewName = sap.ui.Device.system.desktop ? "sap.ui.fame.d.view.FameLogin" : "sap.ui.fame.m.view.FameLogin"
		
		
		var login = sap.ui.Device.system.desktop ? sap.ui.jsview("login",viewName): sap.ui.xmlview("login",viewName);
		login.getController().nav = this.getController();
		this.app.addPage(login,true);
		
		return this.app;
		
	}

});