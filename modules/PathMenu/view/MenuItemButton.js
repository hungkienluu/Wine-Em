Ext.define('PathMenu.view.MenuItemButton', {
        extend: 'Ext.Button',
        alias: 'widget.menuitembutton',
        xtype: 'menuitembutton',

        config: {
                iconMask: true,
                ui : 'pathmenu',
                left: 10,
                bottom: 10,
                height: 40,
                width: 40,
                cls: 'menuitembutton',
                isActive: false,
                route: ''
        }
});