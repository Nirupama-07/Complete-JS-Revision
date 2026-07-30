const promise1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1)
    },2000)
})
const promise2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("fails")
    },1000)
})
const promise3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(3)
    },3000)
})

Promise.all([promise1,promise2,promise3])
    .then((results)=>{
        console.log(results)
    })
    .catch((error)=>{
        console.log("error:",error)
    })

Promise.allSettled([promise1,promise2,promise3])
    .then((results)=>{
        console.log(results)
    })
    .catch((error)=>{
        console.log("error:",error)
    })

Promise.race([promise1,promise2,promise3])
    .then((results)=>{
        console.log(results)
    })
    .catch((error)=>{
        console.log(error)
    })

Promise.any([promise1,promise2,promise3])
    .then((results)=>{
        console.log(results)
    })
    .catch((error)=>{
        console.log(error)
    })