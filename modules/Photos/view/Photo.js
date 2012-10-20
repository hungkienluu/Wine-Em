Ext.define('Photos.view.Photo', {
        extend: 'Ext.Container',
        xtype: 'photodetail',

        config: {
                cls: 'bg photodetail',
                items: [
                        {
                                xtype: 'titlebar',
                                docked: 'top',
                                items: [
                                        {
                                                text : 'back',
                                                ui: 'back',
                                                action: 'back'
                                        },
                                        {
                                                align: 'right',
                                                iconMask: true,
                                                iconCls: 'cloud_black_upload1',
                                                action: 'share'
                                        }
                                ]
                        }
                ],
                scrollable: true,
                styleHtmlContent: true,
                tpl: '<div class="image">' +
                                '<img src="http://src.sencha.io/280/{url}" alt="{title}" title="{title}" />' +
                        '</div>' + '<div>"{title}"</div>' 
        }
});