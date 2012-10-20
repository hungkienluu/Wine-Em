/**
 * Controller: Photos
 *
 */
Ext.define('Photos.controller.Photos', {
        extend: 'Ext.app.Controller',
        requires: ['Ext.cf.util.Md5','Photos.store.Photos', 'Photos.model.Photo'],

        config: {
                views: [
                        'Photos.view.Add',
                        'Photos.view.photos.Photos',
                        'Photos.view.Photo'
                ],

                stores: [
                        'Photos.store.Photos'
                ],

                models: [
                        'Photos.model.Photo'
                ],

                refs: {
                        photoView: 'photo',
                        dataView: 'photosDataView',
                        listView: 'photolist',
                        addView: 'photoadd',
                        editView: 'photoedit',
                        addButton: 'photolist button[action=photo-add]',
                        backButton: 'button[action=back]',
                        saveButton: 'photoadd button[action=photo-save]',
                        editButton: 'photoedit button[action=photo-edit]',
                        deleteButton: 'photoedit button[action=photo-delete]'
                },

                control: {
                        shareButton: {
                                tap: 'onShareButtonTap'
                        },
                        addButton: {
                                tap: 'onAddButtonTap'
                        },
                        backButton: {
                                tap: 'onBackButtonTap'
                        },
                        saveButton: {
                                tap: 'addPhoto'
                        },
                        editButton: {
                                tap: 'editPhoto'
                        },
                        deleteButton: {
                                tap: 'deletePhoto'
                        },
                        listView: {
                                phototap: 'onPhotoTapAction'
                        },
                        dataView: {
                                itemtap: 'showPhotoView'
                        }

                },
                routes: {
                        'photo-add': 'showAddView',
                        'photo-list': 'showListView',
                        'photo-edit': 'showEditView'
                }
        },

        /**
         * Add event listeners for IO events
         */
        init: function() {
                var me = this;

                this.getApplication().sio.on({
                        authorized: me.onLogin,
                        // add Event Lister for user messages
                        usermessage: me.onUserMessage,
                        scope: me
                });
        },

        /**
         * Sync the store with the proxy to get the user photos
         *
         * @param {} user
         * @return {Boolean}
         */
        onLogin: function(user) {
                Ext.getStore('photos').sync();
        },

        /**
         * Do some cleanup
         */
        onLogout: function() {},

        /**
         * If the user receives a message from one of his devices
         * lets check if he send update photos message
         * if so sync the photos store to be uptodate on all user devices
         *
         * @param {} sender
         * @param {} message
         * @param {} eOpts
         */
        onUserMessage: function(sender, message, eOpts) {
                var senderUserId = sender.getUserId();

                if (message === 'update-photos') {
                        Ext.io.User.getCurrent(
                                function(user, error) {
                                        if (user.getId() === senderUserId) {
                                                Ext.getStore('photos').sync();
                                        }
                                }
                        );
                }
        },

        /**
         * add an photo to the photos store
         * and send a user message "update-photos"
         * all user devices will listen to the "usermessage" event
         * and then update there photos store to be in sync
         */
        addPhoto: function(button) {
                var form = button.up('formpanel'),
                        values = form.getValues(),
                        store = Ext.getStore('photos');

                store.add(values);
                store.sync();
                form.reset();

                Ext.io.User.getCurrent(
                        function(user, error) {
                                if (user) {
                                        user.send({     message:'update-photos'}, function() {});
                                } else {
                                        console.log('ERROR', user, error);
                                }
                        }
                );
                this.redirectTo('photo-list');
        },

        /**
         * Redirect to the view
         */
        onAddButtonTap: function() {
                this.redirectTo('photo-add');
        },

        /**
         * Redirect to the view
         */
        onBackButtonTap: function() {
                this.redirectTo('photo-list');
        },

        /**
         * Show add tem View
         */
        showAddView: function() {
                var view = this.getAddView() ? this.getAddView() : Ext.create('Photos.view.Add');

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
         * Show Photo List view
         */
        showListView: function() {
                var view = this.getListView() ? this.getListView() : Ext.create('Photos.view.photos.Photos');

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
         * Show Photo detail view and show the selected photo and photo title
         *
         * @param {} dataView
         * @param {} index
         * @param {} dataItem
         * @param {} record
         * @param {} eventObject
         * @param {} eOpts
         */
        showPhotoView: function(dataView, index, dataItem, record, eventObject, eOpts) {
                var photoView = this.getPhotoView() ? this.getPhotoView() : Ext.create('Photos.view.Photo'),
                        toolbar = photoView.query('titlebar')[0],
                        title = record.data.title;

                toolbar.setTitle(title);
                photoView.setData(record.data);

                Ext.Viewport.animateActiveItem(
                        photoView,
                        {
                                type: 'slide',
                                direction: 'left',
                                reverse: true,
                                duration: 300
                        }
                );
        }
});