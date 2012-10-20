/**
 * Controller: Share
 *
 */
Ext.define('Share.controller.Share', {
	extend: 'Ext.app.Controller',
	requires: [
		'Share.store.SharedItems'
	],

	config: {
		views: [
			'Share.view.List'
		],

		stores: [
			'Share.store.SharedItems'
		],

		models: [
			'Share.model.Item'
		],

		refs: {
			listView: 'sharelist',
			shareButton: 'button[action=share]'
		},

		control: {
			shareButton: {
				tap: 'onShareButtonTap'
			}
		},

		routes: {
			'share': 'showListView'
		},

		user: null,
		channel: null
	},

	/**
	 * Controller Init
	 */
	init: function() {
		var me = this;

		// IO event listener
		this.getApplication().sio.on({
			authorized: me.onLogin,
			scope: me
		});
	},

	/**
	 * Sync the shareditems store and add an listener to the share image io
	 * channel
	 *
	 * @param {} user
	 * @return {}
	 */
	onLogin: function(user) {
		var me = this;
		me.setUser(user);

		Ext.getStore('shareditems').sync();

		/**
		 * get / create channel with the name "share-images"
		 * subscribe to channel
		 */
		Ext.io.Channel.get(
			{
				name: 'share-images'
			},
			this.subscribeToChannel,
			this
		);
	},

	/**
	 * Subscribe to the channel to listen for new shared images
	 *
	 * @param {} channel
	 */
	subscribeToChannel: function(channel) {
		// save reference to the channel to use it for publishing later
		this.setChannel(channel);

		channel.subscribe(
			this.onNewSharedImage,
			this
		);
	},

	/**
	 * Sync the store if a new image message receive
	 *
	 * @param {} message
	 */
	onNewSharedImage: function(message) {
		Ext.getStore('shareditems').sync();
	},

	/**
	 * Share the image and show the shared image list
	 * @param {} button
	 */
	onShareButtonTap: function(button) {
		var view = button.up('photodetail'),
			data = view.getData();

		this.shareImage(data);
		this.showListView();
	},

	/**
	 * Share a image
	 * @param {} data
	 */
	shareImage: function(data) {
		var store = Ext.getStore('shareditems'),
			me = this,
			record = {
				from: Ext.cf.util.Md5.hash(this.getUser().getData().email),
				imageurl: data.url,
				date: Ext.Date.format(new Date(), 'U')
			};
		store.add(record);

		// wait for sync callback before publish, to make sure all listeners sync there stores after the record is synced in the cloud
		store.sync(function(){
			me.publishNewImageMessage();
		});
	},

	/**
	 * Publish a new image message in channel
	 * this happens when a new image is added to the group store
	 *
	 */
	publishNewImageMessage: function() {
		// get the saved channel reference
		this.getChannel().publish({message: 'new image'},Ext.emptyFn , this);
	},

	/**
	 * Show the List View
	 */
	showListView: function() {
		var view = this.getListView() ? this.getListView() : Ext.create('Share.view.List');

		Ext.Viewport.animateActiveItem(view, {
			type: 'slide',
			direction: 'left',
			duration: 300
		});
	}

});