Ext.define('Share.view.List', {
	extend: 'Ext.List',
	alias: 'widget.sharelist',
	xtype: 'sharelist',
	requires: ['Ext.TitleBar'],

	config: {
		store: 'shareditems',
		cls: 'bg',
		emptyText: 'No items in list!',
		itemCls: 'shareditem',
		disableSelection: true,
		pressedCls: '',
		itemTpl: '<div class="from">' +
				'	<img src="http://www.gravatar.com/avatar/{from}?s=40&d=mm" />' +
				'</div>' +
				'<div class="image">' +
				'	<img src="http://src.sencha.io/200/{imageurl}" alt="{title}" />' +
				'</div>' +
				'Shared on:' + 
				'{date}' 
				+
				'<div class="clear"></div>',
		items: [
			{
				xtype: 'titlebar',
				title: 'Shared Photos',
				docked: 'top'
			},
			{
				xtype: 'container',
				html: 'Shared photos are visible for all users of the apps usergroup.',
				styleHtmlContent: true,
				docked: 'top'
			}
		]
	}
});