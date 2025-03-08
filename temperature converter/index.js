const textBox = document.getElementById("textBox");
const CtoF = document.getElementById("CtoF");
const FtoC = document.getElementById("FtoC");
const myButton = document.getElementById("myButton");
const result = document.getElementById("result");


let temp;
function convert(){

    if(CtoF.checked){
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if(FtoC.checked){
        temp = Number(textBox.value);
        temp = (temp-32) * 5/9;
        result.textContent = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent = `Select a unit.`
    }
}