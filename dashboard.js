const token = localStorage.getItem("token");


if (!token) {

    window.location.href = "login.html";

}



fetch("https://auth-system-52jo.onrender.com/api/auth/profile",
{

    method:"GET",

    headers:{
        Authorization:`Bearer ${token}`
    }

})

.then(res => res.json())


.then(data => {


    document.getElementById("message").innerHTML = `


        <div class="profile-box">


            <h2>
                Welcome 👋
            </h2>


            <h3>
                ${data.user.name}
            </h3>


            <p>
                Email:
                ${data.user.email}
            </p>


            <p>
                Account Status:
                <strong>
                    Active
                </strong>
            </p>


        </div>


    `;


})


.catch(error => {

    console.log(error);

});





document
.getElementById("logoutBtn")
.addEventListener("click",()=>{


    localStorage.removeItem("token");


    window.location.href="login.html";


});