export function seccion(){

    let seccion = document.createElement('section');
    seccion.className = "seccion";

    let title = document.createElement('h1');
    title.className = "title";
    title.innerText = "Lista De Compras";
    seccion.appendChild(title)

    return seccion;
}