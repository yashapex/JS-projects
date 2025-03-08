function rollDice(){
    const numOfDice = document.getElementById("myInput").value
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")

    const values = [];
    const images = [];

    for(let i =0; i<numOfDice; i++){
        let value = Math.floor(Math.random() * 6 ) + 1;
        values.push(value);
        images.push(`<img src="public/side${value}.png" alt = "Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`
    diceImages.innerHTML = images.join('');
}