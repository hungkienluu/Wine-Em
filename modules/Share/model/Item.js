/**
 * Model: Item
 */
Ext.define('Share.model.Item', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				name: 'from'
			},
			{
				name: 'imageurl'
			},
			{
				name: 'date',
				type: 'int'
			}
		]
	}
});