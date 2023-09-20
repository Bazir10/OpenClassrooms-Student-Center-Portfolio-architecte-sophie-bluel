// traitement des works //
fetch("http://localhost:5678/api/works")
.then(response => response.json())
.then(works => {

    console.log(works)
    var gallery = document.getElementById("gallery");
    gallery.innerHTML=``
    for (let work of works) {
        console.log(work);
        gallery.innerHTML += `
        <figure>
            <img src="${work.imageUrl}" alt="${work.title}">
            <figcaption>${work.title}</figcaption>
        </figure>
        `


    }
})

fetch("http://localhost:5678/api/works")
.then(response => response.json())
.then(works => {

    console.log(works)
    var gallery = document.getElementById("gallery");
    gallery.innerHTML=``
    for (let work of works) {
        console.log(work);
        gallery.innerHTML += `
        <figure id='${work.id}'>
            <img src="${work.imageUrl}" alt="${work.title}">
            <figcaption>${work.title}</figcaption>
        </figure>
        `
        var element2 = document.getElementById(work.id).addEventListener("click", function () {
            alert("vous avez cliqué !");
        });


    }

    let fitrage = {
        data:  [
            {
            filtrageName: "Mes Project",
            category: "projet",
        },
        {
            filtrageName: "contact",
            category: "contact",
        },
        {
            filtrageName: "loging",
            category: "loging",
        },
    ],
    };

    for(let i of products.data){
        //Create Card
        let card = document.createElement("div");
        //card should have category
        card.classList.add("card", "i.category");
        //image div
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        //img tag
        let image = document.createElement("img");
        image.setAttribute("src", i.image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);

        document.getElementById("filters").appendChild(card);
    }
})

/*
// tretement des categories //
fetch("http://localhost:5678/api/categories")
.then(body =>  {
    var element = document.getElementById(portfolio).innerText = "Mes Projets";

var element1 = document.getElementById(contact).innerText = "contact";

var element2 = document.getElementById(name).addEventListener("click", function () {
    alert("vous avez cliqué !");
});
var element3 = document.getElementById(email).addEventListener("click", function () {
    alert("vous avez cliqué !");
});
var element4 = document.getElementById(message).addEventListener("click", function () {
    alert("vous avez cliqué !");
});
console.log(body.json())

})

    let set = new Set ()

    let portfolio = { name: "portfolio" };
    let contact = { name: "contact" };
    let name = { name: "name" };
    let email = { name: "email" };
    let message = { name: "message" };

    set.add(portfolio);
    set.add(contact);
    set.add(name);
    set.add(email);
    set.add(message);

    alert( set.size );
    for (let user of set) {
        alert(user.name);
    }


*/
