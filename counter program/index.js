const counter = document.getElementById("counterLabel");
const inc = document.getElementById("incCounter");
const dec = document.getElementById("decCounter");
const reset = document.getElementById("resetCounter");
let count = 0;
inc.onclick = function(){
    count++;
    document.getElementById("counterLabel").textContent = count;
}

dec.onclick = function(){
    count--;
    document.getElementById("counterLabel").textContent = count;
}

reset.onclick = function(){
    count = 0;
    document.getElementById("counterLabel").textContent = count;
}

