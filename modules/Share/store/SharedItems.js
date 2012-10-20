/**
 * Store: SharedItems
 */
Ext.define('Share.store.SharedItems', {
	extend: 'Ext.data.Store',
	requires: [
		'Share.model.Item'
	],
	config: {
		model: 'Share.model.Item',
		storeId: 'shareditems',
		sorters: [
			{
				property : 'date',
				direction: 'DESC'
			}
		],
		proxy: {
			type: 'syncstorage',
			id: 'shareditems',
			access:'public'
		},
		autoLoad: true,
		autoSync: false
	}
});