Proyecto: Galería de Superhéroes Dinámica

Este proyecto es una aplicación web interactiva que permite mostrar una galería de superhéroes con sus nombres e imágenes. Además, puedes agregar nuevos superhéroes mediante un formulario.

Captura de Pantalla

Agrega aquí una imagen de la interfaz

Tecnologías Utilizadas

HTML: Para la estructura de la página web.

CSS: Para el diseño y la apariencia visual.

JavaScript: Para la interactividad y la manipulación del DOM.

Estructura del Proyecto

Superheroes-Project/
│-- index.html
│-- index.css
│-- index.js
│-- imagenes/

1. Estructura del HTML (index.html)

Este archivo define la estructura básica de la página.

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería de Superhéroes</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <h1>Superhéroes</h1>
    <div class="formulario">
        <form>
            <input id="nombre" type="text" placeholder="Nombre del Superhéroe"/>
            <input id="url" type="text" placeholder="URL de la Imagen"/>
            <button>Añadir Superhéroe</button>
        </form>
    </div>
    <div class="contenedor"></div>
    <script src="index.js"></script>
</body>
</html>

Explicación:

Se define un formulario para agregar superhéroes.

Un div con la clase .contenedor donde se mostrarán las tarjetas.

Se enlaza index.css para los estilos y index.js para la interactividad.

2. Estilos CSS (index.css)

Define la apariencia visual del proyecto.

body {
    background-color: #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
}

.contenedor {
    background-color: white;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 50px;
}

.tarjeta {
    border: 1px solid grey;
    background-color: aliceblue;
    width: 150px;
    height: 200px;
    text-align: center;
}

.imagen img {
    width: 100%;
}

Explicación:

Se centra el contenido con flexbox.

.contenedor organiza las tarjetas en filas flexibles.

.tarjeta define el diseño de cada superhéroe.

3. Lógica en JavaScript (index.js)

Define la funcionalidad para mostrar y agregar superhéroes.

console.log("Hola superhéroes");

const bd = [
    { nombre: "MAGNETO", url_imagen: "https://cdn.marvel.com/content/1x/058mgn_com_crd_02.png" },
    { nombre: "CYCLOPS", url_imagen: "https://cdn.marvel.com/content/1x/191cyc_com_crd_01.png" },
    { nombre: "JEAN GREY", url_imagen: "https://cdn.marvel.com/content/1x/186jgr_com_crd_01.png" },
    { nombre: "WOLVERINE", url_imagen: "https://cdn.marvel.com/content/1x/034wlv_com_crd_01.jpg" },
    { nombre: "BEAST", url_imagen: "https://cdn.marvel.com/content/1x/190bhm_com_crd_01.png" }
];

function mostrarSuperheroes() {
    let tarjetas = "";
    bd.forEach((heroe) => {
        tarjetas += `
        <div class="tarjeta">
            <div class="imagen">
                <img src="${heroe.url_imagen}" alt="${heroe.nombre}" />
            </div>
            <div class="nombre">${heroe.nombre}</div>
        </div>`;
    });
    document.querySelector(".contenedor").innerHTML = tarjetas;
}

document.querySelector("button").addEventListener("click", function(e) {
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let url = document.querySelector("#url").value;

    if (nombre === "" || url === "") {
        alert("Por favor, llena todos los campos.");
        return;
    }

    bd.push({ nombre, url_imagen: url });
    mostrarSuperheroes();
});

mostrarSuperheroes();

Explicación:

bd: Un array de objetos con superhéroes predefinidos.

mostrarSuperheroes(): Genera las tarjetas en el div.contenedor.

Evento click: Captura el nuevo superhéroe y lo agrega a bd.

4. Mejoras Futuras 🚀

✅ Validar que la URL de la imagen sea correcta.
✅ Guardar los datos en localStorage para persistencia.
✅ Permitir eliminar superhéroes de la lista.
✅ Agregar estilos más atractivos con CSS Grid o Bootstrap.

5. Instrucciones de Uso 📌

Clona este repositorio:

git clone https://github.com/tuusuario/superheroes.git

Abre index.html en tu navegador.

Agrega nuevos superhéroes completando el formulario.