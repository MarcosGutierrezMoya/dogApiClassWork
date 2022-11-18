if (document.title == "DogApi") {

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
            let img = group.appendChild(document.createElement("img"));
            img.src = listaFotoPerro.message;
            img.classList.add("img");
        }
    }
    
    getDogBreeds();
}
else if(document.title == "Choose a dog") {
    
    let ListaRazas = document.getElementById("ListaRazas");
    let drop = document.getElementById("dropdown");

    async function taking() {
        let listaPromise = await fetch("https://dog.ceo/api/breeds/list/all").then(response => response.json());
        
        for (let i = 0; i < Object.keys(listaPromise.message).length; i++) {
            let op = drop.appendChild(document.createElement("option"));
            op.value = Object.keys(listaPromise.message)[i];
            op.innerText = Object.keys(listaPromise.message)[i];
        }
        drop.addEventListener("change",printPhotos);
    }
    taking();


    async function printPhotos(e) {
        ListaRazas.innerHTML = "";
        let listaFotoPerro = await fetch(`https://dog.ceo/api/breed/${e.target.value}/images`).then(response => response.json());
        
        for (let i = 0; i < Object.keys(listaFotoPerro.message).length; i++) {         
            let img = ListaRazas.appendChild(document.createElement("img"));
            img.src = Object.values(listaFotoPerro.message)[i];
            img.classList.add("img");
        }
    }

}