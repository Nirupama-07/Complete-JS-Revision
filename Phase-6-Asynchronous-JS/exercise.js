//basic callback
/*function greet(name,callback){
    console.log("Hi ",name)
    callback();
}
function js(){
    console.log("Welcome to JS")
}
greet("Nirupama",js)*/

//simulate a delay
/*console.log("Loading...")
setTimeout(()=>{
    console.log("Data loaded")
},3000)*/

//countdown timer
/*let num=5
let timer=setInterval(()=>{
    if(num<=5){
        console.log(num)
        if(num==1)
            clearInterval(timer)
        num--
    }
    
},1000)*/

//promise basics
/*let marks=5
let promise=new Promise((resolve, reject) => {
    if(marks>40){
        resolve("passed")
    }else{
        reject("Failed")
    }
})
promise
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))*/

//promise with delay
/*let promise=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("order delivered")
    },2000)
    
})
promise.then((result)=>console.log(result))*/

//promise rejection

/*let choice=Math.random()
let promise=new Promise((resolve, reject) => {
    if(choice>=0.5){
        resolve("Payment successful")
    }else{
        reject("Payment Failed")
    }
})
promise
    .then((results)=>console.log(results))
    .catch((error)=>console.log(error))*/


//promise chaining
/*let num=5
function multiply(){
    return new Promise((resolve, reject) => {
        console.log(num*2)
        resolve("Done multiplying")
    })
}
function add(data){
    return new Promise((resolve, reject) => {
        console.log(num+10)
        resolve("Done add")
    })
}
function divide(data){
    return new Promise((resolve, reject) => {
        console.log(num+5)
        resolve("done divide")
    })
}
multiply()
    .then((data)=>add(data))
    .then((data)=>divide(data))
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))
*/


//login simulation
/*function login(){
    return new Promise((resolve, reject) => {
        resolve("Logged In")
    })
}
function getUser(){
    return new Promise((resolve, reject) => {
        resolve("users found")
    })
}
function getOrders(){
    return new Promise((resolve, reject) => {
        resolve("Orders loaded")
    })
}
login()
    .then((data)=>{
        console.log(data)
        return getUser()
    })
    .then((data)=>{
        console.log(data)
        return getOrders()
    })
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
*/


//Promise.all
/*const promise1=Promise.resolve("HTML")
const promise2=Promise.resolve("CSS")
const promise3=Promise.resolve("JS")

Promise.all([promise1,promise2,promise3])
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log("All courses completed")
    })*/

//promise.race
/*const promise1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise 1")
    },3000)
})
const promise2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise 2")
    },2000)
})
const promise3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("Promise 3")
    },1000)
})
Promise.race([promise1,promise2,promise3])
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))*/

//promise.any
/*const promise1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("Promise 1")
    },3000)
})
const promise2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("Promise 2")
    },1000)
})
const promise3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise 3")
    },2000)
})
Promise.any([promise1,promise2,promise3])
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))*/

//async/await
/*function greet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hi");
        }, 2000);
    });
}

async function main() {
    const message = await greet();
    console.log(message);
}

main();*/

//async delay
/*function wait(){
    setTimeout(()=>{
        console.log("wait...")
        console.log("Done")
    },3000)
}
async function main() {
    const message=await wait()
    
}
main()*/

//online food order
/*function placeOrder(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("order placed")
        },2000)
    })
}

function preparingFood(){
    return new Promise((resolve, reject) => {
            setTimeout(()=>{
            resolve("Preparing food")
        },2000)
    })
}

function foodDelivered(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Food Delivered")
        },2000)
    })
}

async function main() {
    const message=await placeOrder()
    console.log(message)

    const message2=await preparingFood()
    console.log(message2)

    const message3=await foodDelivered()
    console.log(message3)
}
main()*/