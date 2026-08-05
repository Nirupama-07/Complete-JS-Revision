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

/*function secondLargest(arr){
    if(arr.length<2){
        return null
    }
    let largest=-Infinity
    let secondLargest=-Infinity

    for(let num of arr){
        if(num>largest){
            secondLargest=largest
            largest=num
        }else if(num>secondLargest && num!==largest){
            secondLargest=num
        }
    }
    return secondLargest===-Infinity?null:secondLargest

}
console.log(secondLargest([10,20,30,25,65,35,55]))*/

//Reverse an array
/*const arr=[10,20,30,40]

let reversed=[]

for(let i=arr.length-1;i>=0;i--){
    reversed.push(arr[i])
}
console.log(reversed);*/


//remove duplicates
const arr=[10,20,30,23,54,10,23,30]

let unique=[]

for(let num of arr){
    if(!unique.includes(num)){
        unique.push(num)
    }
}
console.log(unique);


//missing number
/*let num=[1,2,3,4,6]

let n=num.length+1
let expectedSum=n*(n+1)/2

let actualSum=0
for(let ch of num){
    actualSum+=ch
}
console.log(expectedSum-actualSum)*/