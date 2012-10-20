/**
* A simple application that demonstrates how to use Ext.io.Channels 
*
*  For this application user login is optional.  If the user is authentcated in then the message
   are sent by the user. If they are not authentcated then the message is sent by the device. 
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
    
    requires:[
        'MyApp.channel.Test'
    ],
  
    models: [
        'Message'
    ],
    stores: [
        'Messages'
    ],
    views: [
        'ChannelView'
    ],
   
    channels: ["Test", "Test2"], 
    
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
      Ext.create('MyApp.view.ChannelView', {fullscreen: true});
    },

});