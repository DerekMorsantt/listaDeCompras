import { header } from "./components/header/headerComponent.js";
import { crearSeccionCompras } from "./components/seccion/seccionComponent.js";

function main() {
    let section = document.createElement('section');
    section.className = "todo";
    section.id = "todo";

    section.appendChild(header());
    section.appendChild(crearSeccionCompras());

    return section;
}

document.body.appendChild(main());




