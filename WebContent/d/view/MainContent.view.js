sap.ui.jsview("sap.ui.fame.d.view.MainContent", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf d.view.MainContent
	*/ 
	getControllerName : function() {
		return "sap.ui.fame.d.view.MainContent";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf d.view.MainContent
	*/ 
	createContent : function(oController) {
		//var oRouter = oController.getRouter();
		var shell = new sap.ui.ux3.Shell("shell", {
			appTitle:'FAME',
			worksetItems: [
				new sap.ui.ux3.NavigationItem("index", { key: "wi_home", text: "Home" }),
				new sap.ui.ux3.NavigationItem("example1", { key: "wi_example_1", text: "Example Screen 1", subItems: [
						new sap.ui.ux3.NavigationItem("example11", { key: "wi_example_1_1", text: "Example 1_1" }),
						new sap.ui.ux3.NavigationItem("example12", { key: "wi_example_1_2", text: "Example 1_2" }),
						new sap.ui.ux3.NavigationItem("example13", { key: "wi_example_1_3", text: "Example 1_3" })
					]
				}),
				new sap.ui.ux3.NavigationItem("example2", { key: "wi_example_2", text: "Example Screen 2" })
			],
			content: [],
			worksetItemSelected: function(oEvent) {
				var sSelected = oEvent.getParameter("id"),
					oHashChanger = sap.ui.core.routing.HashChanger.getInstance();

				//oHashChanger.setHash(oRouter.getURL("_" + sSelected));
			}
		});
				
 		return shell;
	}

});