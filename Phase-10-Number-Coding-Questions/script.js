//factorial of a number
/*function fact(num){
    let fact=1
    for(let i=1;i<=num;i++){
        fact*=i
    }
    return fact
}
console.log(fact(2));*/

//prime number
/*function prime(num){
    if(num<=1){
        return false
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true;
}
console.log(prime(7));*/

//fibonacci
/*function fibonacci(num){
    let a=0;
    let b=1
    for(let i=0;i<=num;i++){
        console.log(a);
        let next=a+b
        a=b
        b=next
    }
    
}
fibonacci(4)*/

//Reverse number
/*function reverse(num){
    let reverse=0
    while(num>0){
        let digit=num%10;
        reverse=reverse*10+digit
        num=Math.floor(num/10)
    }
    return reverse
}
console.log(reverse(123));*/

//palindrome number
/*function palindrome(num){
    let reverse=0
    let temp=num
    while(num>0){
        let digit=num%10
        reverse=reverse*10+digit
        num=Math.floor(num/10)
    }
    if(reverse===temp){
        return true
    }
    else{
        return false
    }
}
console.log(palindrome(1221));*/

//check even or odd
/*function check(num){
    if(num%2==0){
        return 'even'
    }else{
        return 'odd'
    }
}
console.log(check(23));*/

//total even
/*function total(num){
    let count=0
    for(let i=0;i<=num;i++){
        if(i%2==0){
            count++
        }
    }
    return count
}
console.log(total(100));*/

//total prime
/*function isPrime(num){
    if(num<=1){
        return false
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true
}

function totalPrime(num) {
    let count = 0;

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}

console.log(totalPrime(100));*/

//sum of digits
/*function sum(num){
    let sum=0
    while(num>0){
        let digit=num%10
        sum+=digit
        num=Math.floor(num/10)
    }
    return sum
}
console.log(sum(12));*/


//armstrong number
function armstrong(num){
    let temp=num
    let sum=0
    let digits=num.toString().length
    while(num>0){
        let digit=num%10
        sum=sum+ digit**digits
        num=Math.floor(num/10)
    }
    if(sum==temp){
        return true
    }else{
        return false
    }
}
console.log(armstrong(153));

