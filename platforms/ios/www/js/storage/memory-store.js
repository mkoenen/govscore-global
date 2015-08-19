var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        console.log(searchKey);
        var orgs = this.orgs.filter(function(element) {
            var Name = element.Name;
            return Name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, orgs);
    }


    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.orgs = [
            
            {"organization_id": 6000, "Name": "Institute of Development Management", "location": "Botswana", "kf_country_id": "BW"},
            {"organization_id": 6001, "Name": "Ecole Nationale de Santé Publique", "location": "Burkina Faso", "kf_country_id": "BF"},
            {"organization_id": 6002, "Name": "HRH Programme, World Health Organisation Regional Office for Africa", "location": "Congo", "kf_country_id": "CD"},
            {"organization_id": 6003, "Name": "Centre de Recherche et d'Action en Santé Publique", "location": "Congo", "kf_country_id": "CD"},
        ];

    callLater(successCallback);

}