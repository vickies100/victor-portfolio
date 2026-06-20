const token = localStorage.getItem("token");


if (!token) {

    window.location.href = "login.html";

}


fetch("https://auth-system-52jo.onrender.com/api/auth/profile",
    {

        method: "GET",

        headers: {
            Authorization: `Bearer ${token}`
        }

    }
)

.then(res => res.json())

.then(data => {


    document.getElementById("message").innerHTML = `

        <h2>Welcome ${data.user.name}</h2>

        <p>Email: ${data.user.email}</p>

    `;


})

.catch(error => {

    console.log(error);

});