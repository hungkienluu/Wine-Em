/**
* Set the path to Ext.io
*/
Ext.Loader.setPath({
    'Ext.io': '../lib/io/src/io'
});

Ext.application({

    models: [
    'Todo'
    ],
    stores: [
    'Todos'
    ],
    views: [
    'Todos'
    ],

    /**
    *  Add the application controller.
    */
    controllers: ['Ext.io.Controller', "Todos"],


    /**
    * Ext.io.Controller will read the application's config
    * to initialize sencha.io
    */
    config: {
        io: {
               logLevel: "debug",
                appId: "8e2cb081-a725-493d-a17a-108a7ab930e6",
                appSecret: "eoEZCcd48PlP3W1z"
                , url: "http://127.0.0.1:8080",
        }
    },


    name: 'MyApp',

    launch: function() {
        Ext.create('MyApp.view.Todos', {
            fullscreen: true
        });


    },

});