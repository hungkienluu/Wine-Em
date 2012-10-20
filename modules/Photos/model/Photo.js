/**
 * Model: Photo
 */
Ext.define('Photos.model.Photo', {
        extend: 'Ext.data.Model',
        config: {

                fields: [
                        {
                                name: 'title',
                                type: 'string'
                        },
                        {
                                name: 'url',
                                type: 'string'
                        }
                ]
        }
});