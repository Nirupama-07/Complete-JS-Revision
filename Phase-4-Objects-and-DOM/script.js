//object
/*const student={
    name:"Nirupama",
    age:23
}
console.log(student)*/

//object creation
/*const student={
    name:"Nirupama",
    age:23
}
console.log(student)

const student2=new Object()
student2.name="Priti"
student2.age=23*/

//accessing objects
const student={
    name:"Nirupama",
    age:23
}
console.log(student)
console.log(student.name)
console.log(student["age"])

//updating values
student.name="Asutosh"
console.log(student)

//adding properties
student.city="Bihar"
console.log(student)

//deleting properties
delete student.age
console.log(student)

//object inside another object
const student2={
    name:"Nirupama",
    age:23,
    address:{
        city:"Bihar",
        pin:756349
    }
}
console.log(student2)
console.log(student2.address)
console.log(student2.address.city)

//array of object
const cards=[
    {
        name:"Shivangi",
        age:23
    },
    {
        name:"Harshad",
        age:32
    },
    {
        name:"Hina",
        age:34
    },
    {
        name:"Karthik",
        age:37
    }
]
console.log(cards)
console.log(cards[2])
console.log(cards[1].name)

const profile={
    name:"Nirupama",
    greet:function(){
        console.log(`Welcome, ${this.name}`)
    }
}
profile.greet()
console.log(profile.name)

const obj={
    brand:"dot & key",
    product:"sunscreen"
}
for(key in obj){
    console.log(key,":",obj[key])
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(obj.hasOwnProperty("brand"))