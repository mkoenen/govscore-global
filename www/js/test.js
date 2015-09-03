//listen for click events      
function setbuttons(btn,func) {

    document.getElementById('btnStore').addEventListener('click', function(){
    	validate();
    });
    document.getElementById('ag1Store').addEventListener('click', function({
    	adv_validate(ag1data, 24, 0, ag1savelocal);
    }));
    document.getElementById('ag2Store').addEventListener('click', function(){
    	adv_validate(ag2data, 24, 24,ag2savelocal);

    });
    document.getElementById('ag3Store').addEventListener('click', function({
    	adv_validate(ag3data, 12, 48, ag3savelocal);
    }));
    document.getElementById('ag4Store').addEventListener('click', function(){
    	adv_validate(ag4data, 24, 60, ag4savelocal);
    });
    document.getElementById('ag5Store').addEventListener('click', function({
    	adv_validate(ag5data, 16, 84, ag5savelocal);
    }));

}

function adv_validate( savedData, length, keyaug, savefunc){
    if(savedData){

        alreadySaved();

    }else if(gsdata = null){

        gsFirst();

    }else{
      var i, key, value;
      //loop through the entries, grab value and store in array
      for(i=1; i<=length; i++) {
          key = "'ag" + (i+keyaug) +"'";
          value = $('input[name = ' + key + ']:checked').val();
          if(value === "" || value == undefined) {
              navigator.notification.alert( "Please answer all questions" );
              event.preventDefault();
              return false;
          }
      }

      savefunc();

      } 
}


function simple_notification(message) {
  if (navigator.notification) { 
      window.alert = function (message) {
          navigator.notification.alert(message);
      };
   }else{
      alert(message);
   }
}

function adv_notification(message,callbk,title,btname) {
  if (navigator.notification) { 
      window.alert = function (message,callbk,title,btname) {
          navigator.notification.alert(
              message,    // message
              callbk,       // callback
              title, // title
              btname        // buttonName
          );
      };
   }else{
      alert(message);
      callback;
   }
}
 