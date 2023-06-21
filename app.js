var cal = document.getElementById("cal");
function getNum(num){
cal.value +=  num
}

function calcVal(){
    var  abc = cal.value;
    abc = eval(abc);
    cal.value = abc
}

function allClear(){
    cal.value = "  "
}