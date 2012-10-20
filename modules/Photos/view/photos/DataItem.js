Ext.define('Photos.view.photos.DataItem', {
        extend: 'Ext.dataview.component.DataItem',
        xtype: 'photosDataItem',

        config: {
                image: {
                        cls: 'image',
                        tpl: '<img src="http://src.sencha.io/130/130/{url}" alt="{title}" title="{title}" /> '
                }


        },

        applyImage: function(config) {
                var conf = Ext.Object.merge({}, config, {
                        data: this.getRecord().getData()
                });
                return Ext.factory(conf, Ext.Component);
        },

        updateImage: function(newImage) {
                if (newImage) {
                        this.add(newImage);
                }
        }
});