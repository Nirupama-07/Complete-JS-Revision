// if statement
/*let age=parseInt(prompt("Enter your age"))

if(age>18){
    console.log("You can drive")
}*/

//if-else statement
/*let age=parseInt(prompt("Enter your age"))
if(age>18){
    console.log("You can drive")
}else{
    console.log("You cannot drive")
}*/

//if..else-if..else statement
/*let age=parseInt(prompt("Enter your age"))
if(age>18){
    console.log("You can drive")
}else if(age<0){
    console.log("Age cannot be negative")
}else{
    console.log("You cannot drive")
}*/

//nested if
let age=parseInt(prompt("Enter your age"))
if(age>20 && age<29){
    console.log("You are in your 20's")
    if(age%2==0){
        console.log("Your age is even")
    }else{
        console.log("Your age is odd")
    }
}else{
    console.log("Your age does not lies between 20 and 29")
}