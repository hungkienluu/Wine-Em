/**
*  Ext.io.Channel that will send and receive messages on the 'test' channel.
*  Each message the channel receives will be delivered to the messages store 
*  If needed more than one store can be bound to the channel.
*/
Ext.define('MyApp.channel.Test', {
    extend: 'Ext.io.Channel',
    config: {
        name:"test", //channel name to create
        boundStores:{
            messages : {  // Ext.getStore('messages')
                enabled: true, // enable:true is default
                // declare a function to tranform the sender and raw message into the record the store expectes.
                // if this function returns anyting other than an object then the record won't be added to the store.
                transform: function(sender, message){
                    console.log("channel message transform", sender, message);
                    return {message: message.message};   
                }
            }
        }
    }
});