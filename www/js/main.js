var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
      /*  this.store = new MemoryStore();
        $('.search-key').on('keyup', $.proxy(this.findByName, this));*/
    },

   /* findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(orgs) {
            var l = orgs.length;
            var e;
            $('.org-list').empty();
            for (var i=0; i<l; i++) {
                e = orgs[i];
                $('.org-list').append('<li><a href="#orgs/' + e.id + '">' + e.Name + '</a></li>');
            }
        });
    },*/

    // Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        /*document.addEventListener('online', this. onOnline, true);*/
    },

    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       // var parentElement = document.getElementById(id);
       // var listeningElement = parentElement.querySelector('.listening');
       // var receivedElement = parentElement.querySelector('.received');

       // listeningElement.setAttribute('style', 'display:none;');
//receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ');
    }
    

};

