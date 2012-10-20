/**
 * Controller: Menu
 *
 */
Ext.define('PathMenu.controller.Menu', {
        extend: 'Ext.app.Controller',
        requires: [
                'PathMenu.view.MenuItemButton',
                'PathMenu.view.MenuButton'
        ],

        config: {
                views: [
                ],

                stores: [
                ],

                models: [
                ],

                refs: {
                        menubutton: 'menubutton',
                        menuitembutton: 'menuitembutton'
                },

                control: {
                        menubutton: {
                                tap: 'onMenuButtonTap'
                        },
                        menuitembutton: {
                                tap: 'onMenuItemButtonTap'
                        }
                }
        },

        /**
         * Controller Init
         */
        init: function () {

        },

        /**
         * Controller Launch
         *
         * @param {} application
         */
        launch: function(app) {
                Ext.Viewport.add([
                        {
                                xtype: 'menuitembutton',
                                iconCls: 'home2',
                                route: 'home'
                        },
                        {
                                xtype: 'menuitembutton',
                                iconCls: 'user',
                                route: 'auth'
                        },
                        {
                                xtype: 'menuitembutton',
                                iconCls: 'cloud',
                                route: 'share'
                        },
                        {
                                xtype: 'menuitembutton',
                                iconCls: 'photos2',
                                route: 'photo-list'
                        },
                        {
                                xtype: 'menuitembutton',
                                iconCls: 'photo1',
                                route: 'photo-add'
                        },
                        {
                                xtype: 'menubutton'
                        }

                ]);
        },

        /**
         *
         * @param {} button
         */
        onMenuItemButtonTap: function(button) {
                var     menuButton = Ext.ComponentQuery.query('menubutton')[0];
                button.addCls('tapped');
                this.closeMenu(menuButton);

                this.redirectTo(button.getRoute());
        },

        /**
         *
         * @param {} menuButton
         */
        onMenuButtonTap: function(menuButton) {
                if (!menuButton.getIsOpen()) {
                        // open menu
                        this.openMenu(menuButton);
                } else {
                        // close Menu
                        this.closeMenu(menuButton);
                }
        },


        openMenu: function(menuButton) {
                var     items = Ext.ComponentQuery.query('menuitembutton'),
                        bottom = menuButton.getBottom(),
                        left = menuButton.getLeft(),
                        radius = 150,
                        abschnitte = items.length - 1
                        winkel = 90 / abschnitte;

                menuButton.replaceCls('close', 'open');

                Ext.each(items, function(item, index) {
                        item.addCls('menuitembutton');
                        item.replaceCls('close', 'open');

                        var currentAngle = (90 - (winkel * (abschnitte - index))),
                                radiant = Math.PI / 180,
                                currnetRadiant = radiant * currentAngle,
                                x = Math.round(Math.cos(currnetRadiant) * radius),
                                y = Math.round(Math.sin(currnetRadiant) * radius);

                        item.setLeft(left + x);
                        item.setBottom(bottom + y);
                });

                menuButton.setIsOpen(true);
        },

        closeMenu: function(menuButton) {
                var     items = Ext.ComponentQuery.query('menuitembutton');

                menuButton.replaceCls('open', 'close');

                Ext.each(items, function(item, index) {
                        if (item.getCls().indexOf('tapped') === -1) {
                                item.replaceCls('open', 'close');
                                item.setLeft(10);
                                item.setBottom(10);
                        } else {

                                var task = Ext.create(
                                        'Ext.util.DelayedTask',
                                        function() {
                                                item.removeCls('menuitembutton');
                                                item.setLeft(10);
                                                item.setBottom(10);
                                                item.removeCls('tapped');
                                        }
                                );
                                task.delay(900);

                        }
                });
                menuButton.setIsOpen(false);
        }
});