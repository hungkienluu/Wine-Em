Ext.define('Wine-Em.controller.Application', {
	extend: 'Ext.app.Controller',
	requires: [
		'Ext.util.DelayedTask'
	],

	config: {
		views: [
			'Home'
		],

		refs: {
			homeView: 'home',
			authView: '#loginpanel'
		},
		control: {
			'button[action=cancellogin]': {
				tap: 'cancelLogin'
			}
		},

		routes: {
			'': 'showHomeView',
			'home': 'showHomeView',
			'logout': 'logout',
			'auth': 'showAuthView'
		}
	},

	/**
	 * Setup event listener for IO events
	 */
	init: function() {
		this.getApplication().sio.on({
			authorized: this.onAuth,
			logout: this.onLogout,
			scope: this
		});
	},

	/**
	 * Lunch
	 *
	 * @param {} app
	 */
	launch: function(app) {},

	/**
	 * Show the home start screen
	 *
	 * @return {void} [description]
	 */
	showHomeView: function() {
		var view = this.getHomeView() ? this.getHomeView() : Ext.create('Wine-Em.view.Home');

		Ext.Viewport.animateActiveItem(
			view,
			{
				type: 'slide',
				direction: 'left',
				duration: 300
			}
		);
	},

	/**
	 * Show the IO auth View
	 */
	showAuthView: function() {
		var view = this.getAuthView() ? this.getAuthView() : Ext.create(this.getApplication().sio.getAuthenticationView());
		Ext.Viewport.animateActiveItem(
			view,
			{
				type: 'slide',
				direction: 'left',
				duration: 300
			}
		);
	},

	/**
	 * logout the current IO user
	 */
	logout: function() {
		this.getApplication().sio.logout();
	},

	/**
	 * On user logout show the homescreen
	 */
	onLogout: function() {
		this.redirectTo('home');
	},

	/**
	 * On user login show the homescreen
	 */
	onAuth: function() {
		this.redirectTo('home');
	},

	/**
	 * On user cancel login show the homescreen
	 */
	cancelLogin: function() {
		this.redirectTo('home');
	}

});