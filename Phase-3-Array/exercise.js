//remove duplicate in an array
/*let arr=[1,2,2,2,3,3,4,5,6]
let unique=[]

for(let num of arr){
    if(!unique.includes(num)){
        unique.push(num)
    }
}
console.log(unique)*/

//Largest Element
/*let arr=[20,12,30,43,23]
let largest=arr[0]

for(num of arr){
    if(num>largest){
        largest=num
    }
}
console.log(largest)*/

//Second Largest
/*const arr = [10, 5, 20, 8, 15];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {

    if (num > largest) {
        secondLargest = largest;
        largest = num;
    }

    else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }

}

console.log(secondLargest);*/

//Frequency of Numbers
/*const arr = [1, 2, 2, 3, 1, 4, 2];

let freq = {};

for (let num of arr) {

    if (freq[num]) {
        freq[num]++;
    } else {
        freq[num] = 1;
    }

}

console.log(freq);*/

//Sum of array
/*const arr = [10, 20, 30, 40];

let sum = 0;

for (let num of arr) {
    sum += num;
}

console.log(sum);*/
//or
//const sum = arr.reduce((acc, num) => acc + num, 0);

//Average of array
/*const arr = [10, 20, 30, 40];

let sum = 0;

for (let num of arr) {
    sum += num;
}

let average = sum / arr.length;

console.log(average);*/

//Reverse Array
/*const arr = [1, 2, 3, 4];

let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log(reversed);*/

//Merge Array
/*const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];

console.log(merged);*/

//Rotate an array
/*const arr = [1, 2, 3, 4, 5];

const first = arr.shift();

arr.push(first);

console.log(arr);*/

//Flatten array
/*const arr = [1, [2, [3, [4]]]];

console.log(arr.flat(Infinity));*/