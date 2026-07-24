//Student object
const student={
    name:"Priyansh",
    age:24,
    address:{
        city:"Bhopal",
        pin:756493
    }
}
console.log(student)

student.age=25
console.log(student)

student.email="priyansh@gmail.com"
console.log(student)

delete student.address.city
console.log(student)

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(student.hasOwnProperty("age"))
console.log(Object.keys(student).length)

const subject={
    first:"coa",
    second:"dsa",
    third:"js"
}
const merge={...student,...subject}
console.log(merge)

const students=[
    {
        name:"Priyansh",
        mark:98,
        age:24,
        department:"CSE"
    },
    {
        name:"Sudipta",
        mark:88,
        age:23,
        department:"EE"
    },
    {
        name:"Aish",
        mark:93,
        age:25,
        department:"EEE"
    },
    {
        name:"Kavita",
        mark:78,
        age:24,
        department:"CSE"
    },
    {
        name:"Jeon",
        mark:90,
        age:23,
        department:"CSE"
    },
]

students.forEach((item)=>{
    console.log(item)
})

const highest = students.reduce((max, student) => {
    return student.mark > max.mark ? student : max;
});

console.log(highest);

const averageAge = students.reduce((total, student) => {
    return total + student.age;
}, 0) / students.length;

console.log(averageAge);

const sortMarks=[...students].sort((a,b)=>a.mark-b.mark)
console.log(sortMarks)

const grouped = students.reduce((acc, student) => {
    if (!acc[student.department]) {
        acc[student.department] = [];
    }

    acc[student.department].push(student);

    return acc;
}, {});

console.log(grouped);
