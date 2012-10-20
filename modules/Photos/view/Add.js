Ext.define('Photos.view.Add', {
        extend: 'Ext.form.Panel',
        alias: 'widget.photoadd',
        xtype: 'photoadd',
        requires: ['Photos.view.Form'],

        config: {
                items: [
                        {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: 'Add',
                                items: [
                                        {
                                                ui: 'back',
                                                align: 'left',
                                                text: 'back',
                                                action: 'back'
                                        }
                                ]
                        },
                        {
                                cls: 'bg',
                                xtype: 'photoform'
                        },
                        {
                                xtype: 'toolbar',
                                ui: 'none',
                                items: [
                                        {
                                                xtype: 'spacer'
                                        },
                                        {
                                                ui: 'confirm',
                                                align: 'right',
                                                text: 'Add',
                                                action: 'photo-save'
                                        }
                                ]
                        }
                ]
        }
});