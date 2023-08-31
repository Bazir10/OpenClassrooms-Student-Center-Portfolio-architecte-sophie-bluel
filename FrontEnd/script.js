// tretement des works //
fetch("http://localhost:5678/api/works")
.then(response => response.json())
.then(reponse => {

    console.log(r)
})


// tretement des categories //
fetch("http://localhost:5678/api/categories")
.then(body => console.log(body)) {
    var element = document.getElementById(portfolio).innerText = "Mes Projets";

var element = document.getElementById(contact).innerText = "contact";

var element = document.getElementById(name).addEventListener("click", function () {
    alert("vous avez cliqué !");
});
var element = document.getElementById(email).addEventListener("click", function () {
    alert("vous avez cliqué !");
});
var element = document.getElementById(message).addEventListener("click", function () {
    alert("vous avez cliqué !");
});
    console.log(reponse.json())
}


let set = new Set

let portfolio = { name: "portfolio" };
let contact = { name: "contact" };
let name = { name: "name" };
let email = { name: "email" };
let message = { name: "message" };

alert( set.size );

for (let user of set) {
    alert(user.name);
}