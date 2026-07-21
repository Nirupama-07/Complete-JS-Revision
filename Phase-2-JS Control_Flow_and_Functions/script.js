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
/*let age=parseInt(prompt("Enter your age"))
if(age>20 && age<29){
    console.log("You are in your 20's")
    if(age%2==0){
        console.log("Your age is even")
    }else{
        console.log("Your age is odd")
    }
}else{
    console.log("Your age does not lies between 20 and 29")
}*/


//switch-case
/*const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  default:
    console.log("Regular day");
}*/

//for loops

/*let num=parseInt(prompt("Enter a number to find the sum"))
let sum=0

for(let i=0;i<num+1;i++){
    sum+=i
}
alert(`Sum is: ${sum}`)*/

//while loop
/*let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}*/

/*
for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 2; col++) {
    console.log(`Row: ${row}, Column: ${col}`);
  }
}*/

//Function

/*function greet() {
    console.log("Hi! Good Morning")
}
greet()
greet()
greet()*/
//This is also an example of named function or function declaration

//hoisted defination function
greet()

function greet() {
    console.log("Hi")
}
