import { header } from "./components/header/headerComponent.js";
import { crearSeccionCompras } from "./components/seccion/seccionComponent.js";
import { downloadAsImage } from "./control/descargaImagen.js";

function main() {
    let section = document.createElement('section');
    section.className = "todo";
    section.id = "todo";

    section.appendChild(header());
    section.appendChild(crearSeccionCompras());

    return section;
}

document.body.appendChild(main());

document.querySelector("#btnDownload").addEventListener("click", () => {

    document.querySelector(".encabezado-compras").classList.add("ocultar");
    document.querySelector(".monto-total").classList.add("ocultar");
    document.querySelector(".caja-editable").classList.add("ocultar");
    document.querySelector("header").classList.add("ocultar");

    downloadAsImage();

    document.querySelector(".subtitulo-lista").classList.remove("ocultar");
    document.querySelector(".contenedor-productos").classList.remove("ocultar");
       
    document.querySelector(".encabezado-compras").classList.add("mostrar");
    document.querySelector(".monto-total").classList.add("mostrar");
    document.querySelector(".caja-editable").classList.add("mostrar");
    document.querySelector("header").classList.add("mostrar");

});


