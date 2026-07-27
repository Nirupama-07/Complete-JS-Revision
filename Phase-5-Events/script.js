const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")

function sayHi(){
    alert("Hi Welcome")
}

btn1.addEventListener('click',sayHi)

btn2.addEventListener('click',()=>{
    btn1.removeEventListener('click',sayHi)
})

const btn3=document.getElementById("btn3")
const btn4=document.getElementById("btn4")

btn3.addEventListener('click',()=>{
    alert("Works on click")
})

btn4.addEventListener('dblclick',()=>{
    alert("Works on double click")
})

const heading1=document.getElementById("heading1")


heading1.addEventListener('mouseover',()=>{
    heading1.style.backgroundColor="pink"
})
heading1.addEventListener('mouseout',()=>{
    heading1.style.backgroundColor="red"
})

const text=document.getElementById("text")
text.addEventListener('keydown',(e)=>{
    console.log(e.target.value)
})
text.addEventListener('keyup',(e)=>{
    console.log(e.target.value)
})

const form=document.getElementById("form")
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log("Form submitted")
})
form.addEventListener('reset',(event)=>{
    console.log("Form reset")
})
const name=document.getElementById("name")
name.addEventListener('input',()=>{
    console.log(name.value)
})
name.addEventListener('focus',()=>{
    console.log("input focused")
})
name.addEventListener('blur',()=>{
    console.log("input loose focus")
})
const subject=document.getElementById("subject")
subject.addEventListener('change',()=>{
    console.log(subject.value)
})
const email=document.getElementById("email")
email.addEventListener('invalid',()=>{
    console.log("Email is not valid")
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        heading1.classList.add("sticky");
    } else {
        heading1.classList.remove("sticky");
    }
});