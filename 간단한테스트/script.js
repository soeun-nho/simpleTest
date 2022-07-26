function start() {
    $("#start").hide();
    $("#q1").show();
}
function q1(){
        $("#q1").hide();
        $("#q2").show();
}
function q2(){
    $("#q2").hide();
    $("#q3").show();
}
function q3(){
    $("#q3").hide();
    $("#q4").show();
}
function q4(){
    $("#q4").hide();
    $("#q5").show();
}
function q5(){
    $("#q5").hide();
    $("#q6").show();
}
function q6(){
    $("#q6").hide();
    $("#res").show();
}

var cnt=0;

function cntChoice1(choice){
    if(choice=='H')
    cnt++;
}
function cntChoice2(choice){
    if(choice=='A')
    cnt++;
}
function getChoice1(){
    var x;

    if(cnt>=2)
        x=0;
    else x=1;    
    return x*10;
}
function getChoice2(){
    var x;

    if(cnt>=2)
        x=0;
    else x=1;
    return x;    
}
function answer(){
    res = getChoice1()+getChoice2();

    if(res==0)
        document.write("핫플 혼여행");
    else if(res==10)
        document.write("숨스팟 혼여행");
    else if(res==11)
    document.write("핫플 같여행");
    else if(res==01)
    document.write("숨스팟 같 여행");

}