let ListaRazas = document.getElementById("ListaRazas");

async function getDogBreeds() {
    let listaPromise = await fetch("https://dog.ceo/api/breeds/list/all").then(response => response.json());
    console.log(listaPromise.message);
    //#region imagenes
    let listaFotos = await fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json());
    console.log(listaFotos.message);
    
    let listaFoto = await fetch("https://dog.ceo/api/breed/brabancon/images/random").then(response => response.json());
    console.log(listaFoto.message);
    //#endregion
    for (let i = 0; i < Object.keys(listaPromise.message).length; i++) {
        let group = ListaRazas.appendChild(document.createElement("div"));
        group.appendChild(document.createElement("p")).innerText = Object.keys(listaPromise.message)[i];
        
        let listaFotoPerro = await fetch(`https://dog.ceo/api/breed/${Object.keys(listaPromise.message)[i]}/images/random`).then(response => response.json());
        group.appendChild(document.createElement("img")).src = listaFotoPerro.message;
    }
}

getDogBreeds();