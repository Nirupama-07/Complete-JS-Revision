/*fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });*/


//get
/*async function getUsers() {
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        
        const data=await response.json()
        console.log(data);
    }catch(error){
        console.log(error);
        
    }
}
getUsers()*/

//post
/*async function createUsers() {
    const user={
        name:"Nirupama",
        email:"nirupama@gmail.com"
    }

    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(user)
        }
        )
        const data=await response.json()
        console.log(data);
        
    }catch(error){
        console.log(error);
    }
}
createUsers()*/

/*async function deleteUser(id) {

    try {

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error("Failed to delete user");
        }

    } catch (error) {
        console.log(error.message);
    }
}

deleteUser(1);*/


let btn=document.getElementById("btn")
let usersDiv=document.getElementById("users")
btn.addEventListener('click',async()=>{
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const users = await response.json();

        usersDiv.innerHTML = "";

        users.forEach(user => {

            const p = document.createElement("p");

            p.textContent = user.name;

            usersDiv.appendChild(p);
        });

    }catch(error){
        console.log(error);
    }
})