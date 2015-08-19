var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.store = new MemoryStore();
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },

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

    // Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('deviceready', this.checkConnection, false);
        /*document.addEventListener('online', this. onOnline, true);*/
    },

    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    /* Form Validation -------------------------------------*/

    function validate(event) {
        if(gsdata){
           alreadySaved();
        }else{
          if( document.gsForm.username.value === "" ) {
                 navigator.notification.alert( "Please enter your full name!" );
                 document.gsForm.username.focus();
                 event.preventDefault();
                 return false;               
          }
          if( document.gsForm.email.value !== document.gsForm.email2.value ) {
                navigator.notification.alert( "Email entries don't match. Please try again" );
                document.gsForm.email.focus();
                event.preventDefault();
                return false;                
          }
          if( document.gsForm.email.value === "" ) {
                navigator.notification.alert( "Please enter your email address!" );
                document.gsForm.email.focus();
                event.preventDefault();
                return false;
          }else{
                // Put extra check for data format
                var ret = validateEmail();
                if( ret === false ) {
                    event.preventDefault();
                    return false;
                 }
          }
          if( document.gsForm.organization.value === "-1" ) {

             navigator.notification.alert( "Please enter your organization!" );
             document.gsForm.organization.focus();
             event.preventDefault();
             return false;
          }
           //check that all answers have been answered
          var i, key, value;
          //loop through the entries, grab value and store in array
          for(i=1; i<=25; i++) {
              key = "'g" + i +"'";
              value = $('input[name = ' + key + ']:checked').val();
              if(value === "" || value == undefined) {
                  navigator.notification.alert( "Please answer all questions" );
                  event.preventDefault();
                  return false;
              }
          }        
          savelocal();
         }
    },

    savelocal: function() {

    var userdata, email, gsdate, username;

    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    organization = document.getElementById("organization").value;
    gsdate  = formatDate(new Date());

    //construct the json array for user data and add to local storage
    gsdata = {'username': username, 'email': email, 'organization': organization, 'gsdate': gsdate, 'answers':[-1]};
    gsdata = getinputs(gsdata,1,25,"g");
    localStorage.setObject('gsdata', gsdata);
    
    //calcResults();

    //now that everything is saved, check the connection
   // checkConnection( "cgovscore");
}


// function validateEmail() {

//    var emailID = document.gsForm.email.value;
//    var atpos = emailID.indexOf("@");
//    var dotpos = emailID.lastIndexOf(".");
//    if (atpos < 1 || ( dotpos - atpos < 2 )) {
//        navigator.notification.alert("Please enter a correct email address");
//        document.gsForm.email.focus();
//        event.preventDefault();
//        return false;
//    }
//    return( true );
// }

// ag1validate: function() {
//     if(ag1data){
//         alreadySaved();
//     }else if(gsdata = null){
//         gsFirst();
//     }else{
//       var i, key, value;
//       //loop through the entries, grab value and store in array
//       for(i=1; i<=24; i++) {
//           key = "'ag" + i +"'";
//           value = $('input[name = ' + key + ']:checked').val();
//           if(value === "" || value == undefined) {
//               navigator.notification.alert( "Please answer all questions" );
//               event.preventDefault();
//               return false;
//           }
//       }
//       ag1savelocal();
//     } 
// }


// function ag2validate(){
//     if(ag2data){

//         alreadySaved();

//     }else if(gsdata = null){

//         gsFirst();

//     }else{
//       var i, key, value;
//       //loop through the entries, grab value and store in array
//       for(i=1; i<=24; i++) {
//           key = "'ag" + (i + 24) +"'";
//           value = $('input[name = ' + key + ']:checked').val();
//           if(value === "" || value == undefined) {
//               navigator.notification.alert( "Please answer all questions" );
//               event.preventDefault();
//               return false;
//           }
//       }

//       ag2savelocal();

//       }
// }


// function ag3validate(){
//     if(ag3data){

//         alreadySaved();

//     }else if(gsdata = null){

//         gsFirst();

//     }else{

//       var i, key, value;
//       //loop through the entries, grab value and store in array
//       for(i=1; i<=12; i++) {
//           key = "'ag" + (i + 48) +"'";
//           value = $('input[name = ' + key + ']:checked').val();
//           if(value === "" || value == undefined) {
//               navigator.notification.alert( "Please answer all questions" );
//               event.preventDefault();
//               return false;
//           }
//       }

//       ag3savelocal();

//       }
// }


// function ag4validate(){
//     if(ag4data){

//         alreadySaved();

//     }else if(gsdata = null){

//         gsFirst();

//     }else{

//       var i, key, value;
//       //loop through the entries, grab value and store in array
//       for(i=1; i<=24; i++) {
//           key = "'ag" + (i + 60) + "'";
//           value = $('input[name = ' + key + ']:checked').val();
//           if(value === "" || value == undefined) {
//               navigator.notification.alert( "Please answer all questions" );
//               event.preventDefault();
//               return false;
//           }
//       }
        
//       ag4savelocal();

//       }
// }
// function ag5validate(){
//     if(ag5data){

//         alreadySaved();

//     }else if(gsdata = null){

//         gsFirst();

//     }else{

//       var i, key, value;
//       //loop through the entries, grab value and store in array
//       for(i=1; i<=16; i++) {
//           key = "'ag" + (i + 84) +"'";
//           value = $('input[name = ' + key + ']:checked').val();
//           if(value === "" || value == undefined) {
//               navigator.notification.alert( "Please answer all questions" );
//               event.preventDefault();
//               return false;
//           }
//       }

//       ag5savelocal();

//       }
// }
// }
    
    

};

