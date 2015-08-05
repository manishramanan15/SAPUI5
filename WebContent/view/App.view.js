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
		
		
		 var view = this;
         
	        //Create a panel instance
	        var oPanel = new sap.ui.commons.Panel({width: "450px"});

	        //Set the title of the panel
	        oPanel.setTitle(new sap.ui.core.Title({text: "Secure Login", icon: "img/al.png"}));
	        
	        //Create a matrix layout with 2 columns
	        var oMatrix = new sap.ui.commons.layout.MatrixLayout({layoutFixed: true, width: '300px', columns: 2});
	        oMatrix.setWidths('100%', '100%');

	        
	        var txt_user = new sap.ui.commons.TextField('txt_userid'); 
	        var lb_user = new sap.ui.commons.Label('lb_userid',{
	        	text:"User ID:"
	        });
	        lb_user.setLabelFor(txt_user);
	        oMatrix.createRow(lb_user, txt_user);

	        	
	        var txt_pass = new sap.ui.commons.PasswordField('txt_pass');
	        var lb_pass = new sap.ui.commons.Label('lb_pass',{
	        	text : "Password"
	        });
	        lb_pass.setLabelFor(txt_pass);
	        oMatrix.createRow(lb_pass, txt_pass);
	        
	        var btn_login = new sap.ui.commons.Button("btn_login",{
	        	text : "Login",
	        	style : sap.ui.commons.ButtonStyle.Accept,
	        	press : function(event){
	        		
	        		if(txt_user.getValue()==""){
	        			sap.ui.commons.MessageBox.alert("Please Etner a valid User Id!");
	        			return false;
	        		}
	        		
	        		if(txt_pass.getValue()==""){
	        			sap.ui.commons.MessageBox.alert("Please Etner a valid Password!");
	        			return false; 
	        		}
	        		
	        		oController.authenticate(event);
	        	}
	        }); 

	        var lb_login = new sap.ui.commons.Label('lb_login',{
	        	text : ""
	        });

	        oMatrix.createRow(lb_login,btn_login);
	        
	        
	        //Add the form to the panels content area
	        oPanel.addContent(oMatrix);  
	      
	  
	        return oPanel;

		
	}

});