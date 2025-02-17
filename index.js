// Imprime un mensaje en la consola
console.log("Hola superheroes");

// Define un array de objetos de superhéroes, cada uno con un nombre y una URL de imagen
const bd = [
    {
        nombre: "MAGNETO",
        url_imagen: "https://cdn.marvel.com/content/1x/058mgn_com_crd_02.png",
    },
    {
        nombre: "CYCLOPS",
        url_imagen: "https://cdn.marvel.com/content/1x/191cyc_com_crd_01.png",
    },
    {
        nombre: "JEAN GREY",
        url_imagen: "https://cdn.marvel.com/content/1x/186jgr_com_crd_01.png",
    },
    {
        nombre: "WOLVERINE",
        url_imagen: "https://cdn.marvel.com/content/1x/034wlv_com_crd_01.jpg",
    },
    {
        nombre: "BEAST",
        url_imagen: "https://cdn.marvel.com/content/1x/190bhm_com_crd_01.png",
    }
];

// Función para mostrar los superhéroes en la página web
function mostrarSuperheroes() {
    // Inicializa una cadena vacía para contener el HTML de las tarjetas de superhéroes
    let tarjetas = "";
    // Recorre cada superhéroe en el array
    for (let i = 0; i < bd.length; i++) {
        // Imprime el índice, nombre y URL de imagen del superhéroe actual en la consola
        console.log(i + ": ", bd[i].nombre, bd[i].url_imagen);
        // Añade el HTML de la tarjeta del superhéroe actual a la cadena tarjetas
        tarjetas = 
        tarjetas +
        `<div class="tarjeta">
            <div class="imagen">
                <img 
                    src="${bd[i].url_imagen}" 
                    alt=""
                />
            </div>
            <div class="nombre">${bd[i].nombre}</div>
        </div>`;
    }
    // Establece el HTML interno del elemento con la clase "contenedor" a la cadena tarjetas
    document.querySelector(".contenedor").innerHTML = tarjetas;
}

// Selecciona el elemento botón del DOM
const boton = document.querySelector("button");
// Añade un listener de eventos al botón para el evento "click"
boton.addEventListener ("click", function(e){
    // Previene el comportamiento predeterminado del botón (por ejemplo, envío de formulario)
    e.preventDefault();
    // Obtiene el valor del elemento input con id "nombre"
    let nombre = document.querySelector("#nombre").value;
    // Obtiene el valor del elemento input con id "url"
    let url = document.querySelector("#url").value;

    // Crea un nuevo objeto de superhéroe con los valores capturados
    const nuevoSuper = {
        nombre: nombre,
        url_imagen: url,
    };

    // Imprime el nuevo objeto de superhéroe en la consola
    console.log("nuevoSuper: ", nuevoSuper);
    // Imprime el nombre y la URL capturados en la consola
    console.log("nombre: ", nombre, url);
    // Imprime un mensaje en la consola indicando que se hizo clic en el botón
    console.log("se hizo click");

    // Añade el nuevo objeto de superhéroe al array
    bd.push(nuevoSuper);
    // Imprime el array actualizado en la consola
    console.log("Base de datos con super",bd);
    
    // Llama a la función para mostrar la lista actualizada de superhéroes
    mostrarSuperheroes();
})