//basic callback
function greet(name,callback){
    console.log("Hi ",name)
    callback();
}
function js(){
    console.log("Welcome to JS")
}
greet("Nirupama",js)