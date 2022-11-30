// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

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

console.log(sayHello(""));