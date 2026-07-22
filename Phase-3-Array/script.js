let arr = ["Aman", "sudipta", "vaishnovi"]
console.log(arr.length)
arr.push("Arav")
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift("Aman")
console.log(arr)
arr.splice(1, 1)
console.log(arr)
arr.splice(1, 0, "Simran")
console.log(arr)
arr.splice(2, 1, "Rahul")
console.log(arr)

let arr2 = ["Aman", "Simran", "Rahul", "Vaishnavi", "pankaj"]
let result = arr2.slice(1, 4)
console.log(result) //output:["Simran","Rahul","Vaishnavi"] 

let arr3=['1','2','3','4','5']
let result2=arr2.concat(arr3)
console.log(result2)
console.log(result2.includes('2'))
console.log(arr3.indexOf('7'))
let result3=arr3.find(num=>num>3)
console.log(result3)
console.log(arr3.findIndex(num=>num>3))
console.log(arr3.some(num=>num>4))
console.log(arr3.every(num=>num>4))

let arr4=['3','5','1','2','4']
console.log(arr4.sort((a,b)=>a-b))
console.log(arr4.reverse())
console.log(arr4.join("-"))

let arr5=['1',2,[3,'Aman',4,5],6]
console.log(arr5.flat())

let arr6=[2,3,5]
console.log(arr6.flatMap((num)=>num*2))

console.log(Array.isArray(['1','2'])) 

let arr7=["aman","sangeet","rani"]
arr7.forEach((ch)=>{
    console.log(ch)
})
for(const ch of arr7){
    console.log(ch)
}

let arr8=[20,40,30]
console.log(arr8.map(num=>num*2))
console.log(arr8)
console.log(arr8.filter(num=>num>30))
console.log(arr8)
let sum=arr8.reduce((acc,num)=>{return acc+num},0)
console.log(sum)