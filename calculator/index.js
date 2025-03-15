// calculator program
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        const result = math.evaluate(display.value);
        display.value = result;
    }
    catch(error){
        display.value = "Error";
    }
}