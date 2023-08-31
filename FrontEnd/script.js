// tretement des works //
fetch("http://localhost:5678/api/works")
.then(response => response.json())
.then(reponse => {

    console.log(reponse) 
})


// tretement des categories //
fetch("http://localhost:5678/api/categories")
.then(reponse =>  {
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
})