// Add your code here



const submitData = (userName, userEmail) => {

    const par = document.querySelector(".display-id");

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-type" : "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: userName,
        email: userEmail
    })
    }).then(res => res.json()).then((data) => {
        console.log(data);
        par.textContent = data.id;
    }).catch(err => {
        par.textContent = err.message;
    })
}