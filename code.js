// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof(input) === "string") {
        return "Hello, " + input + "!";
    } else if (input === true || input === false) {
        return "Hello, World!";
    } else {
        return "Hello, World!";
    }
}