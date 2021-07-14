const box_canciones = document.getElementById("box-canciones");
const buscar = document.getElementById("buscar");

const mostrarTodos = () => {

    fetch('datos.json')
    .then(data => data.json())
    .then(data => {

        buscar.addEventListener('keyup', (e) => {
            let buscarPalabra = e.target.value;
            let cancionesFiltradas = data.canciones.filter((character) => {
                return (
                    character.nombre.includes(buscarPalabra)
                );
            });

            templateDatos(cancionesFiltradas);
            
        })

        templateDatos(data.canciones);

    });

}

const templateDatos = (canciones) => {

    const listaCanciones = canciones.map(cancion => {
        return `
            <div class="item shadow-sm mb-5 rounded">

                <img src="images/icon_${cancion.icono}.svg" class="mb-3">
                <div class="cancion">
                    <h4 class="timeme">${cancion.nombre}</h4>
                    <audio controls>
                        <source src="canciones/${cancion.ruta}" type="audio/mp3">
                    </audio>
                </div>
                
            </div>
        `;
    }).join('');

    box_canciones.innerHTML = listaCanciones;

}

mostrarTodos();

