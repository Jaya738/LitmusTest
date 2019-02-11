var dial = $(".dial .inner");
var gauge_value = $(".gauge .value");
var value=0;
function pHValue(value){
    this.value=value;
    this.getPH=function(){
        return this.value;
    }
}
function pHvalue(){
    return new pHValue();
}
function HCL(){
    document.getElementById("liquid").style.backgroundColor="red";
   
    return value=4;
}
function H2SO4() {
        document.getElementById("liquid").style.backgroundColor = "yellow";
        return value=6;
    }
function NaCl() {
        document.getElementById("liquid").style.backgroundColor = "violet";
        return value=8;
    }
function NaOH() {
        document.getElementById("liquid").style.backgroundColor = "orange";
        return value=10;
    }

    