function start() {
    $("#start").hide();
    $("#q1").show();
}
num=1;
function next(){
    var next = num+1;
    $("#q"+num).hide();
    $("#q"+next).show();
    num++;
}

var cnt1=0;
var cnt2=0;
var cnt3=0;

function cntChoice1(choice){
    if(choice=='D')
    cnt1++;
    next();
}
function cntChoice2(choice){
    if(choice=='H')
    cnt2++;
    next();
}
function cntChoice3(choice){
    if(choice=='A')
    cnt3++;
    next();
}

function getChoice1(){
    var x;

    if(cnt1>=2) // d == 0 
        x=0;
    else x=1;
    return x*100;    
}
function getChoice2(){
    var x;

    if(cnt2>=2) //h==0
        x=0;
    else x=1;
    return x*10;    
}
function getChoice3(){ 
    var x;

    if(cnt3>=2) //a==0
        x=0;
    else x=1;    
    return x;
}

function result(){
    res = getChoice1()+getChoice2()+getChoice3();
    if(res==0){
        window.location.href="./Project-master/Team_Project/DHA.html"
    }
    else if(res==1){
        window.location.href="./Project-master/Team_Project/DHT.html"
    }
    else if(res==10){
        window.location.href="./Project-master/Team_Project/DSA.html"
    }
    else if(res==11){
        window.location.href="./Project-master/Team_Project/DST.html"
    }
    else if(res==100){
        window.location.href="./Project-master/Team_Project/UHA.html"
    }
    else if(res==101){
        window.location.href="./Project-master/Team_Project/UHT.html"
    }
    else if(res==110){
        window.location.href="./Project-master/Team_Project/USA.html"
    }
    else if(res==111){
        window.location.href="./Project-master/Team_Project/UST.html"
    }
}