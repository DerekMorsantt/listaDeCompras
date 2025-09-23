import { guardarProducto, obtenerProductos } from "../../control/localStorage.js";
export function crearSeccionCompras() {
    let seccionCompras = document.createElement('section');
    seccionCompras.className = "seccion-compras";

    let encabezado = document.createElement('h1');
    encabezado.className = "encabezado-compras";
    encabezado.innerText = "Lista de Compras";
    seccionCompras.appendChild(encabezado);

    let totalGeneral = document.createElement('h3');
    totalGeneral.className = "monto-total";
    totalGeneral.innerText = "Q. 00.00";
    seccionCompras.appendChild(totalGeneral);

    let subtitulo = document.createElement('h3');
    subtitulo.className = "subtitulo-lista";
    subtitulo.innerText = "Productos";
    seccionCompras.appendChild(subtitulo);

    let cajaEditable = document.createElement('div');
    cajaEditable.className = "caja-editable";

    let campoNombre = document.createElement('div');
    campoNombre.className = "campo-nombre";
    campoNombre.setAttribute("contentEditable", "true");
    campoNombre.innerText = "Nombre del producto";
    cajaEditable.appendChild(campoNombre);

    let campoPrecio = document.createElement('div');
    campoPrecio.className = "campo-precio";
    campoPrecio.setAttribute("contentEditable", "true");
    campoPrecio.innerText = "Precio o cantidad";
    cajaEditable.appendChild(campoPrecio);

    let btnAñadir = document.createElement('button');
    btnAñadir.className = "btn-añadir";
    btnAñadir.innerText = "Añadir";
    cajaEditable.appendChild(btnAñadir);

    seccionCompras.appendChild(cajaEditable);

    let listaProductos = document.createElement('div');
    listaProductos.className = "contenedor-productos";
    seccionCompras.appendChild(listaProductos);

    btnAñadir.addEventListener('click', () => {
        let nombreProducto = campoNombre.innerText.trim(); 
        let precioProducto = campoPrecio.innerText.trim();

        if (!nombreProducto || !precioProducto) return;

        let producto = document.createElement('div');
        producto.className = "producto-item";
        producto.innerText = `${nombreProducto} - Q. ${precioProducto}`;
        listaProductos.appendChild(producto);

 
        let carritoGuardado = obtenerProductos();
        carritoGuardado.push({ nombre: nombreProducto, precio: precioProducto });
        guardarProducto(carritoGuardado);
    });

    return seccionCompras;
}
