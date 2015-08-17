var app = {

    findByName: function() {
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
    },

    initialize: function() {
        this.store = new MemoryStore();
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    }

};

app.initialize();