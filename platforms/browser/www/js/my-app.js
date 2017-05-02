// Initialize app
var myApp = new Framework7({
    material:true,
    swipePanel:'both',

   
});



// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {

window.plugins.PushbotsPlugin.initialize("5908a7694a9efabe108b4567", {"android":{"sender_id":"1018992769151"}});



});

