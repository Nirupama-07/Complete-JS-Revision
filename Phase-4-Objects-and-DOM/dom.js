let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")

btn1.addEventListener("click",()=>{
    document.getElementById("heading1").textContent="Heading1 get changed"
    document.getElementById("para1").innerHTML="The paragraph also get changed"
})