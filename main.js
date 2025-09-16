import { header } from "./components/header/headerComponent.js";
import { seccion } from "./components/seccion/seccionComponent.js";

function main() {
    let section = document.createElement('section');

    section.appendChild(header());

    section.appendChild(seccion());
    
    return section;
}

document.body.appendChild(main());
