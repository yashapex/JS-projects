
let str = ""
let ans = ""

function randomPasswordGenerator(length, lowerCase, upperCase, numbers, symbols){
    const lowerChars = "abcdefghijklmnopqrstuvwxyz"
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numChars = "1234567890"
    const symbolChars = "~!@#$%^&*()_-+=/"

    
    str+= lowerCase ? lowerChars : "";
    str+= upperCase ? upperChars : "";
    str+= numbers ? numChars : "";
    str+= symbols ? symbolChars : "";

    if(length <= 0){
        return console.log(`password length must be atleast 1`)
    }
    if(str.length === 0){
        return console.log(`atleast one set of characters must be selected`)
    }
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * str.length);
        ans+=str[randomIndex];
        
    }

    return ans;
}

const length = 10;
const lowerCase = true;
const upperCase = true;
const numbers = true;
const symbols = true;

let password = randomPasswordGenerator(length, lowerCase, upperCase, numbers, symbols)

console.log(password);