const datos = Object.assign({}, data);

function createCard (carta) {
    return (`<article class="card card-medium col-10 col-lg-3 col-md-5 justify-content-center ">
                <img ${carta.image} class="card-img-top" alt="avengers" title="avengers">
                <div class="card-body">
                    <h5 class="card-title">${carta.name}</h5>
                    <p class="card-text">${carta.description}</p>
                    <div>
                        <p class="card-text">Price: $${carta.price}</p>
                        <a href="./details.html" class="btn btn-outline-light btn-info">See More</a>
                    </div>
                </div>
            </article>`);
}


function cargaTodosLosEventos (listaEventos) {
   
    let listaTerminada = []
    for(evento of listaEventos) {
        listaTerminada.push(createCard(evento));
    }
    return listaTerminada;
}




let todosLosEventos = cargaTodosLosEventos(datos.events);
todosLosEventos = todosLosEventos.toString();
console.log(todosLosEventos);



