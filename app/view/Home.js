Ext.define('Wine-Em.view.Home', {
	extend: 'Ext.Container',
	alias: 'widget.home',
	requires: ['Ext.Img'],

	config: {
		scrollable: true,

		layout: 'vbox',
		cls: 'bg',
		items: [
			{
				xtype: 'img',
				src: 'resources/images/sencha-io.png',
				style: 'background-position: center;',
				width: 320,
				height: 179
			},
			{
				cls: 'home',
				html: 'Wine-Em<br> ' +
					'Save your favorite wines<br><b>in the cloud</b>' +
					'<br /><br />by Hung Luu <br><b>@hungkienluu</b>',
				styleHtmlContent: true,
				align: 'center'
			}
		]

	}
});