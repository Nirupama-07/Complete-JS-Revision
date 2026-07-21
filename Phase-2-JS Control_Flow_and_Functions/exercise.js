//Fibonacci
/*num=parseInt(prompt("Enter a number"))

function fibonacci(num){
    let a=0
    let b=1
    for(let i=1;i<=num;i++){
        console.log(a)
        let c = a + b;
        a = b;
        b = c;
    }
}
fibonacci(num)
*/

//prime number
/*num=parseInt(prompt("Enter a number"))
let count=0
for(let i=1;i<=num;i++){
    if (num%i==0) {
        count++
    }
    
}
if (count==2) {
    console.log("It is a prime number")
}else{
    console.log("It is not a prime number")
}*/

//Armstrong Number
/*num=parseInt(prompt("Enter a number"))

let temp=num
let total=0

while (temp>0){
    digit=temp%10
    total=total+digit**3
    temp = Math.floor(temp / 10);
}
if(total==num){
    console.log("It is armstrong number")
}else{
    console.log("It is not an armstrong number")
}*/

//Reverse Number
/*let num = parseInt(prompt("Enter a number"));

let temp = num;
let rev = 0;

while (temp > 0) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
}

console.log(rev);*/

//palindrome Number
/*let num = parseInt(prompt("Enter a number"));

let temp=num
let rev=0

while(temp>0){
    digit=temp%10
    rev=rev*10 + digit
    temp=Math.floor(temp/10)
}
if (rev==num) {
    console.log("It is palindrome")
}else{
    console.log("It is not a palindrome")
}*/

//count
/*let num = parseInt(prompt("Enter a number"));

let temp = num;
let count = 0;

while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}

console.log("Number of digits:", count);*/

//multiplication
/*let num = parseInt(prompt("Enter a number"));

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

//factorial
let num = parseInt(prompt("Enter a number"));

let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log("Factorial =", factorial);*/