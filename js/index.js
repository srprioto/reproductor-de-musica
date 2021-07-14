// funciones
$('.carousel').carousel()
mostrar_canciones_top();




// estructuras
function mostrar_canciones_top() {

    const mostrar_top_canciones = document.getElementById('top-canciones');

    fetch('datos.json')
        .then(data => data.json())
        .then(data => {

            const canciones = data.canciones;

            canciones.sort((a, b) => {
                if (a.reproducciones > b.reproducciones) {
                    return -1;
                }

                if (a.reproducciones < b.reproducciones) {
                    return 1;
                }

                return 0;

            });

            for (let i = 0; i < 3; i++) {

                let nombre = canciones[i].nombre;
                let ruta = canciones[i].ruta;

                mostrar_top_canciones.innerHTML += `
                    <tr>
                        <td scope="row" class="timeme nombre-cancion">${nombre}</td>
                        <td>
                            <audio controls>
                                <source src="canciones/${ruta}" type="audio/mp3">
                            </audio>
                        </td>
                    </tr>
                `;

            }

        });
}









