/**
* A application that demonstrates shared data stores. 
*
  - Users share their location with other users of the application.
  - Ext.Map and the Google Maps API display the users locations.
  - A shared data store keeps a list of all of the user shared locations
  - An Ext.io.Channel is used to notify users of store changes.
  - Authentication is required for this application.  
  - An auth dialog is presneted on startup if the user is not already authorized.
*
*/


/**
* Set the path to Ext.io
*/
Ext.Loader.setPath({  
    'Ext': '../sdk/src',
    'Ext.io': '../lib/io/src/io'
});

Ext.application({
  
    models: [
        'Location'
    ],
    stores: [
        'Locations'
    ],
    views: [
        'Locations'
    ],

    
    /*
    * include Ext.io.Controller to manage the sencha.io connection
    */
    controllers: ['Ext.io.Controller', "Main"],
    
    
    /*
    *  Add sencha.io app configuration.
    */
     config: {
        io: {
            logLevel: "debug",
            appId: "6a7d73f5-01f5-4650-a894-c48c4ee209a8",
            appSecret: "JPhejKtfNMtilVnG",
            url: "http://127.0.0.1:8080",
        }    
      },
    
    
    name: 'MyApp',

    launch: function() {
      Ext.create('MyApp.view.Locations', {fullscreen: true});
    },

});
