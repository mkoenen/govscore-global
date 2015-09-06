/* Events -----------------------------------------*/
function init(){
    document.addEventListener("online", onOnline, true);
    document.addEventListener("deviceready", onOnline, true);
    document.addEventListener("deviceready", checkLanguage, false); 
    document.addEventListener("deviceready", showResults, false);
    document.addEventListener("deviceready", setbuttons, false);
    document.addEventListener("deviceready", initPushwoosh, true);
    document.addEventListener("deviceready", showResultsButtons, false);
}


//listen for click events      
function setbuttons() {
    document.getElementById('btnStore').addEventListener('click', validate, false);
    document.getElementById('ag1Store').addEventListener('click', function(){ adv_validate(ag1data, 24, 0, ag1savelocal); });
    document.getElementById('ag2Store').addEventListener('click', function(){ adv_validate(ag2data, 24, 24, ag2savelocal); });
    document.getElementById('ag3Store').addEventListener('click', function(){ adv_validate(ag3data, 12, 48, ag3savelocal); });
    document.getElementById('ag4Store').addEventListener('click', function(){ adv_validate(ag4data, 24, 60, ag4savelocal); });
    document.getElementById('ag5Store').addEventListener('click', function(){ adv_validate(ag5data, 16, 84, ag5savelocal); });
}

/* Globalization ---------------------------------------*/

function checkLanguage() {
  alert("going to check to language");
      navigator.globalization.getPreferredLanguage(
        function (language) {
            var lang = language.value;
            alert('language: ' + lang + '\n');
            console.log(lang);
            translatenow(lang);
        },
        function () {alert('Error getting language\n');}
      );
    }

function translatenow(mylang) { 

    alert('language: ' + mylang + ' again\n');

    if(mylang == "fr-FR" ) {
        $.i18n.load(i18n_dict_fr);
    }else if(mylang == "es-US" ) {
        $.i18n.load(i18n_dict_fr);
    }else{
        $.i18n.load(i18n_dict);
    }

    $('h2#about')._t('about');
   $('p#about-text')._t('about-text');
    $('li#step1')._t('step1');
    $('li#step2')._t('step2');
    $('li#step3')._t('step3');
    $('li#step4')._t('step4');
    $('li#step5')._t('step5');
    $('li#step7')._t('step7');
    $('li#step8')._t('step8');
    $('p#step-last')._t('step-last'); /*
    $('#name')._t('name');
    $('#email')._t('email');
    $('#email2')._t('email2');
    $('#organization')._t('organization');
    $('#select-org')._t('select-org');
    $('#gs1')._t('gs1');
    $('#gs2')._t('gs2');
    $('#gs3')._t('gs3');
    $('#gs4')._t('gs4');
    $('#gs5')._t('gs5');
    $('#gs6')._t('gs6');
    $('#gs7')._t('gs7');
    $('#gs8')._t('gs8');
    $('#gs9')._t('gs9');
    $('#gs10')._t('gs10');
    $('#gs11')._t('gs11');
    $('#gs12')._t('gs12');
    $('#gs13')._t('gs13');
    $('#gs14')._t('gs14');
    $('#gs15')._t('gs15');
    $('#gs16')._t('gs16');
    $('#gs17')._t('gs17');
    $('#gs18')._t('gs18');
    $('#gs19')._t('gs19');
    $('#gs20')._t('gs20');
    $('#gs21')._t('gs21');
    $('#gs22')._t('gs22');
    $('#gs23')._t('gs23');
    $('#gs24')._t('gs24');
    $('#gs25')._t('gs25');
    $('#pick-area')._t('pick-area');
    $('#pick-area-adv')._t('pick-area-adv');
    $('#ag1')._t('ag1');
    $('#ag2')._t('ag2');
    $('#ag3')._t('ag3');
    $('#ag4')._t('ag4');
    $('#ag5')._t('ag5');
    $('#ag6')._t('ag6');
    $('#ag7')._t('ag7');
    $('#ag8')._t('ag8');
    $('#ag9')._t('ag9');
    $('#ag10')._t('ag10');
    $('#ag11')._t('ag11');
    $('#ag12')._t('ag12');
    $('#ag13')._t('ag13');
    $('#ag14')._t('ag14');
    $('#ag15')._t('ag15');
    $('#ag16')._t('ag16');
    $('#ag17')._t('ag17');
    $('#ag18')._t('ag18');
    $('#ag19')._t('ag19');
    $('#ag20')._t('ag20');
    $('#ag21')._t('ag21');
    $('#ag22')._t('ag22');
    $('#ag23')._t('ag23');
    $('#ag24')._t('ag24');
    $('#ag25')._t('ag25');
    $('#ag26')._t('ag26');
    $('#ag27')._t('ag27');
    $('#ag28')._t('ag28');
    $('#ag29')._t('ag29');
    $('#ag30')._t('ag30');
    $('#ag31')._t('ag31');
    $('#ag32')._t('ag32');
    $('#ag33')._t('ag33');
    $('#ag34')._t('ag34');
    $('#ag35')._t('ag35');
    $('#ag36')._t('ag36');
    $('#ag37')._t('ag37');
    $('#ag38')._t('ag38');
    $('#ag39')._t('ag39');
    $('#ag40')._t('ag40');
    $('#ag41')._t('ag41');
    $('#ag42')._t('ag42');
    $('#ag43')._t('ag43');
    $('#ag44')._t('ag44');
    $('#ag45')._t('ag45');
    $('#ag46')._t('ag46');
    $('#ag47')._t('ag47');
    $('#ag48')._t('ag48');
    $('#ag49')._t('ag49');
    $('#ag50')._t('ag50');
    $('#ag51')._t('ag51');
    $('#ag52')._t('ag52');
    $('#ag53')._t('ag53');
    $('#ag54')._t('ag54');
    $('#ag55')._t('ag55');
    $('#ag56')._t('ag56');
    $('#ag57')._t('ag57');
    $('#ag58')._t('ag58');
    $('#ag59')._t('ag59');
    $('#ag60')._t('ag60');
    $('#ag61')._t('ag61');
    $('#ag62')._t('ag62');
    $('#ag63')._t('ag63');
    $('#ag64')._t('ag64');
    $('#ag65')._t('ag65');
    $('#ag66')._t('ag66');
    $('#ag67')._t('ag67');
    $('#ag68')._t('ag68');
    $('#ag69')._t('ag69');
    $('#ag70')._t('ag70');
    $('#ag71')._t('ag71');
    $('#ag72')._t('ag72');
    $('#ag73')._t('ag73');
    $('#ag74')._t('ag74');
    $('#ag75')._t('ag75');
    $('#ag76')._t('ag76');
    $('#ag77')._t('ag77');
    $('#ag78')._t('ag78');
    $('#ag79')._t('ag79');
    $('#ag80')._t('ag80');
    $('#ag81')._t('ag81');
    $('#ag82')._t('ag82');
    $('#ag83')._t('ag83');
    $('#ag84')._t('ag84');
    $('#ag85')._t('ag85');
    $('#ag86')._t('ag86');
    $('#ag87')._t('ag87');
    $('#ag88')._t('ag88');
    $('#ag89')._t('ag89');
    $('#ag90')._t('ag90');
    $('#ag91')._t('ag91');
    $('#ag92')._t('ag92');
    $('#ag93')._t('ag93');
    $('#ag94')._t('ag94');
    $('#ag95')._t('ag95');
    $('#ag96')._t('ag96');
    $('#ag97')._t('ag97');
    $('#ag98')._t('ag98');
    $('#ag99')._t('ag99');
    $('#ag100')._t('ag100');*/  

}

/* Form Validation -------------------------------------*/

function validate(event) {
  if(gsdata){
        notification('You previously finished this assessment. Please check your results.', goTo(), "Already Completed", "OK");
  }else{  
      if( document.gsForm.username.value === "" ) {
             notification(  "Please enter your full name!" );
             document.gsForm.username.focus();
             event.preventDefault();
             return false;      
      }
      if( document.gsForm.email.value !== document.gsForm.email2.value ) {
            notification(  "Email entries don't match. Please try again" );
            document.gsForm.email.focus();
            event.preventDefault();
            return false;    
      }
      if( document.gsForm.email.value === "" ) {
            notification(  "Please enter your email address!" );
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
        notification(  "Please enter your organization!");
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
              notification(  "Please answer all questions");
              event.preventDefault();
              return false;
          }
      }       
      savelocal();
      }
}

function validateEmail() {
   var emailID = document.gsForm.email.value;
   var atpos = emailID.indexOf("@");
   var dotpos = emailID.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) {

       notification( "Please enter a correct email address");
       document.gsForm.email.focus();
       event.preventDefault();
       return false;
   }
   return( true );
}

function adv_validate( savedData, length, keyaug, savefunc){
    if(savedData){
        notification('You previously finished this assessment. Please check your results.', goTo(), "Already Completed", "OK");
    }else if(gsdata = null){
        notification('Please complete the initial Govscore assessment before moving on to the Advanced Govscore questionnaires.', goToGs(), "Alert", "OK");
    }else{
      var i, key, value;
      //loop through the entries, grab value and store in array
      for(i=1; i<=length; i++) {
          key = "'ag" + (i+keyaug) +"'";
          value = $('input[name = ' + key + ']:checked').val();
          if(value === "" || value == undefined) {
              notification( "Please answer all questions" );
              event.preventDefault();
              return false;
          }
      }
      savefunc();
      } 
}



/* Notifications ----------------------------------*/

function notification(message,callbk,title,btname) {
  if (navigator.notification) { 
      window.alert = function (message,callbk,title,btname) {
          navigator.notification.alert(
              message,      // message
              callbk,       // callback
              title,        // title
              btname        // buttonName
          );
      };
   }else{
      alert(message);
      callbk;
   }
}


/* Switch Page -----------------------------------------------*/

function goTo(){
    window.location.hash = "govscore-results";
}

function goToGs() {
    window.location.hash = "govscore";
}


/* Get Date --------------------------------------------------*/

function formatDate(date) {
    date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' +
            ('00' + date.getUTCHours()).slice(-2) + ':' +
            ('00' + date.getUTCMinutes()).slice(-2) + ':' +
            ('00' + date.getUTCSeconds()).slice(-2); 
    return date;   
}


/*------------check network connection --------------*/

function checkConnection(whichfunction) {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    if( states[networkState] !== 'No network connection'){
        switch(whichfunction) {
            case "cgovscore":
                saveServer();
                break;
            case "cag1":
                ag1saveServer();
                break;
            case "cag2":
                ag2saveServer();
                break;
            case "cag3":
                ag3saveServer();
                break;
            case "cag4":
                ag4saveServer();
                break;
            case "cag5":
                ag5saveServer();
                break;
        }
    }else{
        notification("Your answers have been stored on your device. They will be saved to our server when you get reconnected to the internet.", goTo(), "No Internet Connection", "OK");     
    }
}


/* App Comes Online ------------------------------------------*/

//check if online according to the above interval
function onOnline(event) {
    //there must be locally saved data and the saved flag must be false
    gsSaved = localStorage.getItem("gsSaved");
    ag1Saved = localStorage.getItem("ag1Saved");
    ag2Saved = localStorage.getItem("ag2Saved");
    ag3Saved = localStorage.getItem("ag3Saved");
    ag4Saved = localStorage.getItem("ag4Saved");
    ag5Saved = localStorage.getItem("ag5Saved");

    if( gsdata && gsSaved === null){
        saveServer();
    }
    if( ag1data && ag1Saved === null){
        ag1saveServer();
    } 
    if( ag2data && ag2Saved === null){
        ag2saveServer();
    }
    if( ag3data && ag3Saved === null){
        ag3saveServer(); 
    }
    if( ag4data && ag4Saved === null) {
        ag4saveServer();
    }
    if( ag5data && ag5Saved === null){
        ag5saveServer();
    }else{
        return false;
    }
}

/* Functions for processing data -----------------------------------------------*/

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

//get answers from form and build json array
function getinputs(answerset,num1,num2,prefix){
    var i, key, value;
    //loop through the entries, grab value and store in array
    for(i=num1; i<=num2; i++) {
        key = "'" + prefix + i +"'";
        value = $('input[name = ' + key + ']:checked').val();
        answerset.answers[i] = value;
    }
    
    return answerset;
}

var gsSaved = "false", ag1Saved = "false", ag2Saved = "false", ag3Saved = "false", ag4Saved = "false", ag5Saved = "false";

//save the json data array to the server via ajax call
function saveToServer(address,dataset,datasaved){
    $.ajax({
    type       : "GET",
    url        : address,
    crossDomain: true,
    data       : dataset,
    contentType: 'application/json; charset=utf-8',
    ////dataType   : 'json',
    success    : function(responseData) {
                notification(responseData, goTo(), "Update", "OK");
                localStorage.setItem(datasaved, "true");
                showResultsButtons();
                },
    error      : function(response) {
                notification(responseData); 
                } 
    });
}


/* Saving -----------------------------------------------*/

var gsdata = localStorage.getObject('gsdata'); 
var ag1data = localStorage.getObject('ag1data');
var ag2data = localStorage.getObject('ag2data');
var ag3data = localStorage.getObject('ag3data');
var ag4data = localStorage.getObject('ag4data');
var ag5data = localStorage.getObject('ag5data');


/* Saving Govscore --------------------------------------*/
 
/* store locally */
function savelocal() {

    var userdata, email, gsdate, username;

    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    organization = document.getElementById("organization").value;
    gsdate  = formatDate(new Date());

    //construct the json array for user data and add to local storage
    gsdata = {'username': username, 'email': email, 'organization': organization, 'gsdate': gsdate, 'answers':[-1]};
    gsdata = getinputs(gsdata,1,25,"g");
    localStorage.setObject('gsdata', gsdata);   
    calcResults();
    //now that everything is saved, check the connection
    checkConnection( "cgovscore");
}

/* save to server */
function saveServer() {
    var gsdata;
    //get the data from local storage
    gsdata = localStorage.getObject('gsdata');
    saveToServer("http://mshlmg.wpengine.com/store-gs.php", gsdata, "gsSaved");
}

/* Saving Advanced Govscore Data ----------------------------------------*/

/* store locally */

function ag1savelocal() {
    gsdata = localStorage.getObject('gsdata');
    var ag1date = formatDate(new Date());
    ag1data = { 'ag1date':ag1date, 'email': gsdata.email, 'answers': [-1]};
    ag1data = getinputs(ag1data,1,24,"ag");
    localStorage.setObject('ag1data', ag1data);
    calcResults();
    checkConnection("cag1");   
}
function ag2savelocal() {
    gsdata = localStorage.getObject('gsdata');
    var ag2date = formatDate(new Date());
    ag2data = { 'ag2date':ag2date, 'email': gsdata.email, 'answers': [-1]};
    ag2data = getinputs(ag2data,25,48,"ag");
    localStorage.setObject('ag2data', ag2data);
    calcResults();
    checkConnection("cag2");
}
function ag3savelocal() {
    gsdata = localStorage.getObject('gsdata');
    var ag3date = formatDate(new Date());
    ag3data = { 'ag3date':ag3date, 'email': gsdata.email, 'answers': [-1]};
    ag3data = getinputs(ag3data,49,60,"ag");
    localStorage.setObject('ag3data', ag3data);
    calcResults();
    checkConnection("cag3");
}
function ag4savelocal() {
    gsdata = localStorage.getObject('gsdata');
    var ag4date = formatDate(new Date());
    ag4data = { 'ag4date':ag4date, 'email': gsdata.email, 'answers': [-1]};
    ag4data = getinputs(ag4data,61,84,"ag");
    localStorage.setObject('ag4data', ag4data);
    calcResults();
    checkConnection("cag4");   
}
function ag5savelocal() {
    gsdata = localStorage.getObject('gsdata');
    var ag5date = formatDate(new Date());
    ag5data = { 'ag5date':ag5date, 'email': gsdata.email, 'answers': [-1]};
    ag5data = getinputs(ag5data,85,100,"ag");  
    localStorage.setObject('ag5data', ag5data);
    calcResults();
    checkConnection("cag5");  
}

/* Save on Server */

function ag1saveServer() {        
    ag1data = localStorage.getObject('ag1data');
    saveToServer("http://mshlmg.wpengine.com/store-ag.php", ag1data, "ag1Saved");        
}
function ag2saveServer() {
    ag2data = localStorage.getObject('ag2data');
    saveToServer("http://mshlmg.wpengine.com/store-ag.php", ag2data, "ag2Saved");       
}
function ag3saveServer() {

    ag3data = localStorage.getObject('ag3data');
    saveToServer("http://mshlmg.wpengine.com/store-ag.php", ag3data, "ag3Saved");

}
function ag4saveServer() {    
    ag4data = localStorage.getObject('ag4data');
    saveToServer("http://mshlmg.wpengine.com/store-ag.php", ag4data, "ag4Saved");
}
function ag5saveServer() {
    ag5data = localStorage.getObject('ag5data');
    saveToServer("http://mshlmg.wpengine.com/store-ag.php", ag5data, "ag5Saved");   
} 


/* Interface changes -----------------------------------------*/ 

//show results btns AND gray out links to quizzes already taken
function showResultsButtons() {
    gsdata = localStorage.getObject('gsdata');
    if( gsdata){
        var resultButton2 = document.getElementById('govscore-results2');
        resultButton2.className = resultButton2.className + " see";
    }
    ag1data = localStorage.getObject('ag1data');
    if(ag1data){
        var ag1resultButton = document.getElementById('ag1-results');
        ag1resultButton.className = ag1resultButton.className + " see";
        var accBtn = document.getElementById('acc-btn');
        accBtn.className = accBtn.className + " gray";
    }
    ag2data = localStorage.getObject('ag2data');
    if(ag2data) {
        var ag2resultButton = document.getElementById('ag2-results');
        ag2resultButton.className = ag2resultButton.className + " see";
        var stakeBtn = document.getElementById('stake-btn');
        stakeBtn.className = stakeBtn.className + " gray";
    }
    ag3data = localStorage.getObject('ag3data');
    if(ag3data){
        var ag3resultButton = document.getElementById('ag3-results');
        ag3resultButton.className = ag3resultButton.className + " see";
        var dirBtn = document.getElementById('dir-btn');
        dirBtn.className = dirBtn.className + " gray";
    }
    ag4data = localStorage.getObject('ag4data'); 
    if( ag4data) {
        var ag4resultButton = document.getElementById('ag4-results');
        ag4resultButton.className = ag4resultButton.className + " see";
        var resBtn = document.getElementById('res-btn');
        resBtn.className = resBtn.className + " gray";
    }
    ag5data = localStorage.getObject('ag5data');
    if( ag5data){
        var ag5resultButton = document.getElementById('ag5-results');
        ag5resultButton.className = ag5resultButton.className + " see";
        var enhBtn = document.getElementById('enh-btn');
        enhBtn.className = enhBtn.className + " gray";
    }
}

/* Results -----------------*/
//display previous results saved in local storage
function showResults(){

    var storedResult = localStorage.getItem("result");

    if(storedResult){
        document.getElementById('gs-results').innerHTML = storedResult;
    }else{
        document.getElementById('gs-results').innerHTML = "No results available at this time.";
    }
} 

/*Questions 1, 2, 5, 8, 10 and 13 are based on the practice of cultivating accountability.
Questions 11, 14 and 22 are based on the practice of engaging stakeholders.
Questions 6, 7, 12 and 16 are based on the practice of setting shared strategic direction.
Questions 3, 4, 17, 21, 23 and 25 are based on the practice of stewarding resources.
Questions 9, 15, 18, 19, 20 and 24 are based on the practice of continuous governance enhancement.*/

//add up the numbers
function calcResults() {

    var ag1results,ag2results,ag3results,ag4results,ag5results,res,resag,ag1percent,ag2percent,ag3percent,ag4percent,ag5percent;

    function getPercent(score,possible){
        return Math.round(score/possible*100);
    }

    function findLevel(score){
        switch(true) {
            case( score <= 25 ):
                level = "Clear need of governance development (first level/4)";
                break;
            case( score > 25 && score <= 50 ):
                level = "Basic level of governance (second level/4)";
                break;
            case( score > 50 && score <= 75 ):
                level = "Goal-Driven and dynamic governance (third level/4)";
                break;
            case( score > 75 ): 
                level = "Transformational governance (highest level/4)";
        }
        return level;
    }

   if(gsdata){

        var percentArray = [], accScore, stakeScore, dirScore, resScore, enhScore, totalScore, mlevel, ag1level, ag2level, ag3level, ag4level, ag5level;
        

        accScore = parseInt(gsdata.answers[1]) + parseInt(gsdata.answers[2]) + parseInt(gsdata.answers[5]) + parseInt(gsdata.answers[8]) + parseInt(gsdata.answers[10]) + parseInt(gsdata.answers[13]);
        var accPercent = getPercent(accScore,24);
        percentArray.push(accPercent);

        stakeScore = parseInt(gsdata.answers[11]) + parseInt(gsdata.answers[14]) + parseInt(gsdata.answers[22]);
        var stakePercent = getPercent(stakeScore,12);
        percentArray.push(stakePercent);

        dirScore = parseInt(gsdata.answers[6]) +parseInt(gsdata.answers[7]) +parseInt(gsdata.answers[12]) +parseInt(gsdata.answers[16]);
        var dirPercent = getPercent(dirScore,16);
        percentArray.push(dirPercent);

        resScore = parseInt(gsdata.answers[3]) +parseInt(gsdata.answers[4]) +parseInt(gsdata.answers[17]) +parseInt(gsdata.answers[21]) +parseInt(gsdata.answers[23]) +parseInt(gsdata.answers[25]);
        var resPercent = getPercent(resScore,24);
        percentArray.push(resPercent);

        enhScore = parseInt(gsdata.answers[9]) +parseInt(gsdata.answers[15]) +parseInt(gsdata.answers[18]) +parseInt(gsdata.answers[19]) +parseInt(gsdata.answers[20]) +parseInt(gsdata.answers[24]);
        var enhPercent = getPercent(enhScore,24);
        percentArray.push(enhPercent);

        totalScore = accScore+stakeScore+dirScore+resScore+enhScore;
        
        mlevel = findLevel(totalScore);

        //list each area with the score
        res = "<h2>Govscore Assessment</h2><p>You assessed your organization as follows: </p>";
        res += "<div id=\"accountability\"><h3>Cultivating Accountability</h3><p>" + accScore + " out of 24 points - " + accPercent + "%.</p></div>";
        res += "<div id=\"stakeholders\"><h3>Engaging Stakeholders</h3><p>" + stakeScore + " out of 12 points - " + stakePercent + "%.</p></div>";
        res += "<div id=\"direction\"><h3>Shared Strategic Direction</h3><p>" + dirScore + " out of 16 points - " + dirPercent + "%.</p></div>";
        res += "<div id=\"resources\"><h3>Stewarding Resources</h3><p>" + resScore + " out of 24 points - " + resPercent + "%.</p></div>";
        res += "<div id=\"enhancement\"><h3>Continuous Governance Enhancement</h3><p>" + enhScore + " out of 24 points - " + enhPercent + "%.</p></div>";
        res += "<div id=\"total\"><h3>Total Score</h3><p>" + totalScore +" points out of 100</p><p>This places your organization at:</p><p class=\"level\">" + mlevel + "</p></div>";
        res += "<div id=\"link\"><p>Learn more at <a href=\"http://govscoreapp.net/\">govscoreapp.net</a></p><p>Enter the organization code " + gsdata.organization + " to see how your organization was evaluated collectively.</p></div>";
        //document.getElementById('gs-results').innerHTML = res;
        
    }

    if(ag1data || ag2data || ag3data || ag4data || ag5data ){
        res += "<h2>Advanced Govscore</h2>";

        function getAgResults(dataset,resSet,ansnums) {
            var resSet = 0;
            for(i=0; i<(dataset.answers.length - ansnums); i++){
                var ans = ansnums + i;
                resSet += parseInt(dataset.answers[ans]);
            }
            return resSet;
        }

        if(ag1data){ag1results = getAgResults(ag1data,ag1results,1);}
        if(ag2data){ag2results = getAgResults(ag2data,ag2results,25);}
        if(ag3data){ag3results = getAgResults(ag3data,ag3results,49);}
        if(ag4data){ag4results = getAgResults(ag4data,ag4results,61);}
        if(ag5data){ag5results = getAgResults(ag5data,ag5results,85);}

        ag1percent = getPercent(ag1results,24);
        ag2percent = getPercent(ag2results,24);
        ag3percent = getPercent(ag3results,12);
        ag4percent = getPercent(ag4results,24);
        ag5percent = getPercent(ag5results,16);

        ag1level = findLevel(ag1percent);
        ag2level = findLevel(ag2percent);
        ag3level = findLevel(ag3percent);
        ag4level = findLevel(ag4percent);
        ag5level = findLevel(ag5percent);
        
        if(ag1results >= 0){
            res += "<div id=\"adv-govscore\"><h3>Cultivating Accountability</h3><p>" + ag1results + " out of 24 - " + ag1percent + "%</p><p>This places your organization at:</p><p>" + ag1level + "</p></div>";
        }
        if(ag2results >= 0){
            res += "<div id=\"adv-govscore\"><h3>Engaging Stakeholders</h3><p>" + ag2results + " out of 24 - " + ag2percent + "%</p><p>This places your organization at:</p><p>" + ag2level + "</p></div>";
        }
        if(ag3results >= 0){
            res += "<div id=\"adv-govscore\"><h3>Shared Strategic Direction</h3><p>" + ag3results + " out of 12 - " + ag3percent + "%</p><p>This places your organization at:</p><p>" + ag3level + "</p></div>";
        }
        if(ag4results >= 0){
            res += "<div id=\"adv-govscore\"><h3>Stewarding Resources</h3><p>" + ag4results + " out of 24 - " + ag4percent + "%</p><p>This places your organization at:</p><p>" + ag4level + "</p></div>";
        }
        if(ag5results >= 0){
            res += "<div id=\"adv-govscore\"><h3>Continuous Governance Enhancement</h3><p>" + ag5results + " out of 16 - " + ag5percent + "%</p><p>This places your organization at:</p><p>" + ag5level + "</p></div>";
        }
    }
    localStorage.setItem("result", res);
    document.getElementById('gs-results').innerHTML = res; 
}



/* Pushwoosh ---------------------------------------------------*/
function initPushwoosh() {
      var pushNotification = window.plugins.pushNotification;

      if(device.platform == "Android")
      {
        registerPushwooshAndroid();
      }else if(device.platform == "iPhone" || device.platform == "iOS")
      {
        registerPushwooshIOS();
      }
    }

function registerPushwooshAndroid() {
    var pushNotification = window.plugins.pushNotification;
 
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;
                                 
        if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }
                                     
        alert(title);
    });
 
    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({ projectid: "864197909703", pw_appid : "4C804-675D6" });
 
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );
}

function registerPushwooshIOS() {
    var pushNotification = window.plugins.pushNotification;
 
    //set push notification callback before we initialize the plugin
    document.addEventListener('push-notification', function(event) {
                                //get the notification payload
                                var notification = event.notification;
 
                                //display alert to the user for example
                                alert(notification.aps.alert);
                               
                                //clear the app badge
                                pushNotification.setApplicationIconBadgeNumber(0);
                            });
 
    //initialize the plugin
    pushNotification.onDeviceReady({pw_appid:"4C804-675D6"});
     
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var deviceToken = status['deviceToken'];
            console.warn('registerDevice: ' + deviceToken);
        },
        function(status) {
            console.warn('failed to register : ' + JSON.stringify(status));
            //alert(JSON.stringify(['failed to register ', status]));
        }
    );
     
    //reset badges on app start
    pushNotification.setApplicationIconBadgeNumber(0);
}
