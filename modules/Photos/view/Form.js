Ext.define('Photos.view.Form', {
        extend: 'Ext.form.FieldSet',
        xtype: 'photoform',
        requires: [
                'Ext.field.Number',
                'Ext.field.Select'
        ],

        config: {
                title : 'Photo',
                xtype: 'fieldset',
                ui: 'light',
                fieldDefaults: {
                        labelAlign: 'top'
                },
                defaultType: 'textfield',
                defaults: {
                        anchor: '100%'
                },
                items: [
                        {
                                name : 'title',
                                label: 'Title'
                        },
                        {
                                name : 'url',
                                label: 'URL'
                        }
                ]
        }
});