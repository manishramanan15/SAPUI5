jQuery.sap.declare("sap.ui.fame.Component");


sap.ui.core.UIComponent.extend("sap.ui.fame.Component", {
	metadata : {
        name : "Fame App",
        version : "1.0",
        includes : [],
        dependencies : {
            libs : ["sap.m", "sap.ui.layout","sap.me","sap.ui.commons","sap.ui.unified"],
            components : []
        },
        config : {
            resourceBundle : "i18n/messageBundle.properties",
            serviceConfig : {
                name : "Northwind",
                //serviceUrl : "http://services.odata.org/V2/(S(sapuidemotdg))/OData/OData.svc/"
                serviceUrl : "model/mock.json"
            }
        }

	},//end metadata
	
	init : function(){
		
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        var mConfig = this.getMetadata().getConfig();

        // always use absolute paths relative to our own component
        var rootPath = jQuery.sap.getModulePath("sap.ui.fame");

        // set i18n model
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : [rootPath, mConfig.resourceBundle].join("/")
        });
        this.setModel(i18nModel, "i18n");
        
        // Create and set domain model to the component
        //var sServiceUrl = mConfig.serviceConfig.serviceUrl;
        //var oModel = new sap.ui.model.json.JSONModel(sServiceUrl);
        //this.setModel(oModel);

        // set device model
        var deviceModel = new sap.ui.model.json.JSONModel({
            isTouch : sap.ui.Device.support.touch,
            isNoTouch : !sap.ui.Device.support.touch,
            isPhone : sap.ui.Device.system.phone,
            isNoPhone : !sap.ui.Device.system.phone,
            listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
            listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
        });
        deviceModel.setDefaultBindingMode("OneWay");
        this.setModel(deviceModel, "device");
        
        //this.getRouter().initialize();
		
	},//end init
	
	createContent : function() {
		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.fame.view.App",
			type : "JS",
			viewData : { component : this }
		});
		
		// done
		return oView;
	}
})