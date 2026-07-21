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
/*greet()

function greet() {
    console.log("Hi")
}*/

//arrow function
/*const square=n=>n**n
console.log(square(2))*/

//rest parameter
/*function sum(...numbers){
    let total=0
    for(let num of numbers){
         total+=num
    }
    return total
}
console.log(sum(10,20,30))*/

//callback function
/*function greet(name,callback){
    console.log(`Hello ${name}`)
    callback()
}
function say(){
    console.log("Good morning")
}
greet("Rahul",say)
//here hi is the callback function*/

//filter
/*const n=[1,2,3,4,5]

const even=n.filter((num)=>num%2==0)
console.log(even)*/

//reduce
/*const n=[1,2,3,4,5]

const sum=n.reduce((acc,curr)=>acc+curr,0)
console.log(sum)*/
//acc->store the result of the value sum
//0->initial value


//some() and every()
/*const n = [1, 2, 3, -4, 5]
const hasNeg = n.some((num) => num > 0)
console.log(hasNeg)

const n2 = [1, 2, 3, -4, 5]
const hasNeg2 = n2.every((num) => num > 0)
console.log(hasNeg2)*/

//function binding
const student={
    name:"Nirupama",
    age:21
}
function sayHi(area){
    console.log(this.name,'is',this.age,'years old',area)
}

sayHi.call(student,'Bhubaneswar')
sayHi.apply(student,['Bhubaneswar'])
let result=sayHi.bind(student,'Bhubaneswar')
result()