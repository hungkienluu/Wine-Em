Ext.define('PathMenu.view.MenuButton', {
        extend: 'Ext.Button',
        alias: 'widget.menubutton',
        xtype: 'menubutton',

        config: {
                iconCls: 'add',
                ui : 'pathmenu',
                iconMask: true,
                left: 10,
                bottom: 10,
                height: 40,
                width: 40,
                cls: 'menubutton',
                isOpen: false
        }
});