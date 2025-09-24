import { crearSeccionCompras } from "../seccion/seccionComponent.js";
import { downloadAsImage } from "../../control/descargaImagen.js";

function header() {
    let header = document.createElement('header');
    header.className = "header";

    let img = document.createElement('img');
    img.src = "assets/download.png";
    img.id = "btnDownload";
    img.className = "img";

    img.addEventListener("click", () => {
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

        setTimeout(() => {
            window.location.reload();
        }, 100);
    });

    header.appendChild(img);

    return header;
}

export { header };
