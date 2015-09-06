//saving the adv gs

function adv_savelocal( dataset, num1, num2, conn )
adv_savelocal(ag1data, 1, 24, cag1);
adv_savelocal(ag2data, 25, 48, cag2);
adv_savelocal(ag3data, 49, 60, cag3);
adv_savelocal(ag4data, 61, 84, cag4);
adv_savelocal(ag5data, 85, 100, cag5);
function adv_savelocal( dataset, num1, num2, conn ) {

    var date;

    gsdata = localStorage.getObject('gsdata');

    date = formatDate(new Date());

    dataset = { 'date':date, 'email': gsdata.email, 'answers': [-1]};
    dataset = getinputs(dataset, num1, num2, "ag");

    localStorage.setObject('dataset', dataset);

    calcResults()
    //now that everything is saved check the connection
    checkConnection("conn");
    
}
function ag2savelocal() {

    var ag2date;

    gsdata = localStorage.getObject('gsdata');

    ag2date = formatDate(new Date());

    ag2data = { 'ag2date':ag2date, 'email': gsdata.email, 'answers': [-1]};
    ag2data = getinputs(ag2data,25,48,"ag");

    localStorage.setObject('ag2data', ag2data);

    calcResults()
    //now that everything is saved check the connection
    checkConnection("cag2");
    
}
function advSaveServer(dataset, saved) {
          
    ag1data = localStorage.getObject('ag1data');
    saveToServer("http://mshlmg.wpengine.com/store-ag.php", ag1data, "ag1Saved");
        
}
function ag2saveServer() {
 
    ag2data = localStorage.getObject('ag2data');
    saveToServer("http://mshlmg.wpengine.com/store-ag.php", ag2data, "ag2Saved");
        
}