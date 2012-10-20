Ext.define('Photos.view.photos.Photos', {
        extend: 'Ext.Container',
        xtype: 'photolist',
        requires: ['Photos.view.photos.DataView'],

        config: {
                cls: 'bg',
                fullscreen: true,
                layout: 'vbox',
                items: [
                        {
                                xtype: 'titlebar',
                                docked: 'top',
                                title : 'Photos'
                        },
                        {
                                html: 'This photos are private and only visible on all devices of the logged in user.',
                                styleHtmlContent: true
                        },
                        {
                                xtype: 'photosDataView',
                                flex: 1
                        }
                ]
        }
});