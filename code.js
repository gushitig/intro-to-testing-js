// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
//Q2,3,4,5,6,7,8
function sayHello(input) {
    if (input === "") {
        return "Hello, World!";
    } else if (typeof(input) === "string") {
        if (isNaN(input)) {
            return "Hello, " + input + "!";
        } else {
            return "Hello, World!";
        }
    } else if (typeof(input) === "boolean") {
        return "Hello, World!";
    } else if (input === undefined) {
        return "Hello, World!";
    } else if (input === null){
        return "Hello, World!";
    } else if (typeof(input) === "number"){
        return "Hello, World!";
    } else {
        return "Hello, World!";
    }
}

//Q10
function isFive(input) {
    if (input === 5) {
        return true;
    } else if (parseInt(input) === 5) {
        return true;
    } else {
        return false;
    }
}

//Q11
function isEven(input) {
    if (input === false || input === true){
        return false;
    } else if (input === "") {
        return false;
    } else if ( input % 2 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(isEven(false));

//Q12
function isVowel(input) {
    if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
        return true;
    } else if (input === "A" || input === "E" || input === "I" || input === "O" || input === "U"){
        return true;
    } else {
        return false;
    }
}

//Q13
function add(a, b) {
    if (!isNaN(parseInt(a)) || !isNaN(parseInt(b))) {
        return parseInt(a) + parseInt(b);
    } else {
        return NaN;
    }
}





