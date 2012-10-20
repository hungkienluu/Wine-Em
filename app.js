Ext.Loader.setPath({
    'Ext.io': 'libs/sencha-io/src/io',
    'Ext.cf': 'libs/sencha-io/src/cf',
    'Ext': 'sdk/src',
    'Ux' : 'libs/Ux',
    'PathMenu': 'modules/PathMenu',
    'Share': 'modules/Share',
    'Photos': 'modules/Photos'
});

Ext.application({
    name: 'Wine-Em',

    requires: [
        'Ext.MessageBox'
    ],


    controllers: [        
        //include Ext.io.Controller to manage the sencha.io connection
        'Ext.io.Controller',
        // Controller for the main application
        'Application',
        // Controller of the module to manage photos
        'Photos.controller.Photos',
        // Controller of the module for sharing images between users
        'Share.controller.Share',
        // Controller for the path menu
        'PathMenu.controller.Menu'
        ],

    config: {
        io: {
            // app id string configured on http://developer.sencha.io/apps
            appId: '8vse398RRHcEm753zZMxksMIpK',
            // app secret
            appSecret: 'w6b7AW5fBQsC7ELC',
            // logging level. Should be one of "none", "debug", "info", "warn" or "error". Defaults to "error".
            logLevel: 'error',
            // If you don't want to attempt to authenticate on startup set this to false. defaults to true
            authOnStartup: true,
            // If you don't want to automatically trigger the login panel when your application starts then set manualLogin to true
            manualLogin: true
        }
    },

        viewport: {
        autoMaximize: true,
        showAnimation: 'slideIn'
    },

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    viewport: {
        autoMaximize: true,
        showAnimation: 'slideIn'
    },

    // app icons
    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },

    // start screens
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',


    /**
     * Application launch
     */
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
    },

    /**
     * On production build app updated
     */
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
