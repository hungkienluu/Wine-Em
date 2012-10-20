Ext.define('Photos.view.photos.DataView', {
        extend: 'Ext.DataView',
        xtype: 'photosDataView',
        requires: ['Photos.view.photos.DataItem'],

        config: {
                store: 'photos',
                useComponents: true,
                defaultType: 'photosDataItem',
                inline: true,
                itemCls: 'photo-item-container',
                cls: 'photos-dataview-container',
                emptyText: 'No photos! Please add one!',
                pressedCls: ''
        }
});