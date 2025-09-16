import { header } from "./components/header/headerComponent.js";
import { seccion } from "./components/seccion/seccionComponent.js";
import { formulario } from "./components/formulario/formularioComponents.js";

function main() {
    let section = document.createElement('section');

    section.appendChild(header());

    section.appendChild(seccion());

    section.appendChild(formulario());

    return section;
}

document.body.appendChild(main());
