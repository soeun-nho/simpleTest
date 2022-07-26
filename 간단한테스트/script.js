function start() {
    $("#start").hide();
    $("#question").show();
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
    //document.write(cnt);
    var x;

    if(cnt>=2)
        x=0;
    else x=1;    
    return x*10;
}
function getChoice2(){
    //document.write(cnt);
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