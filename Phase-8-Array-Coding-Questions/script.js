//largest element in the array
/*const arr=[10,20,30,70,40,25,45,60]

let largest=arr[0]

for(let num of arr){
    if(num>largest){
        largest=num
    }
}
console.log(largest)*/

//secondlargest
//...skip for now

//Reverse an array
/*const arr=[10,2,40,29]
let reversed=[]

for(let i=arr.length-1;i>=0;i--){
    reversed.push(arr[i])
}
console.log(reversed)*/

//remove duplicates
/*const arr=[10,20,30,10,20,45]

let unique=[]

for(let ch of arr){
    if(!unique.includes(ch)){
        unique.push(ch)
    }
}
console.log(unique)*/

//missing number
let num=[1,2,3,4,6]

let n=num.length+1
let expectedSum=n*(n+1)/2

let actualSum=0
for(let ch of num){
    actualSum+=ch
}
console.log(expectedSum-actualSum)