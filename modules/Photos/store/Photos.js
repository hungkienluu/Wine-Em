/**
 * Store: Photos
 *
 * a private user IO syncstore for all devices of one user
 */
Ext.define('Photos.store.Photos', {
        extend: 'Ext.data.Store',
        requires: [
                'Photos.model.Photo'
        ],

        config: {
                model: 'Photos.model.Photo',
                storeId: 'photos',
                proxy: {
                        type: 'syncstorage',
                        id: 'photos',
                        owner: 'user',
                        access: 'private'
                },
                autoLoad: true,
                autoSync: false
        }
});