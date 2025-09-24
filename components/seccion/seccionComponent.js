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

    let campoNombre = document.createElement('input');
    campoNombre.type = "text";
    campoNombre.className = "campo-nombre";
    campoNombre.placeholder = "Nombre del producto";
    cajaEditable.appendChild(campoNombre);

    let campoPrecio = document.createElement('input');
    campoPrecio.type = "text";
    campoPrecio.className = "campo-precio";
    campoPrecio.placeholder = "Precio";
    cajaEditable.appendChild(campoPrecio);

    let btnAñadir = document.createElement('button');
    btnAñadir.className = "btn-añadir";
    btnAñadir.innerText = "Añadir";
    cajaEditable.appendChild(btnAñadir);

    seccionCompras.appendChild(cajaEditable);

    let listaProductos = document.createElement('div');
    listaProductos.className = "contenedor-productos";
    seccionCompras.appendChild(listaProductos);

    function actualizarTotal() {
        let carrito = obtenerProductos();
        let total = carrito.reduce((acum, item) => acum + (parseFloat(item.precio) || 0), 0);
        totalGeneral.innerText = `Q. ${total.toFixed(2)}`;
    }

    function renderizarProductos() {
        let carrito = obtenerProductos();
        listaProductos.innerHTML = "";

        carrito.forEach((item, index) => {
            let producto = document.createElement('div');
            producto.className = "producto-item";

            let texto = document.createElement('span');
            texto.innerText = `${item.nombre} - Q. ${item.precio}`;

            let btnEliminar = document.createElement('button');
            btnEliminar.innerText = "❌";
            btnEliminar.className = "btn-eliminar";

            btnEliminar.addEventListener('click', () => {
                let carritoActual = obtenerProductos();
                carritoActual.splice(index, 1); 
                guardarProducto(carritoActual); 
                renderizarProductos();
            });

            producto.appendChild(texto);
            producto.appendChild(btnEliminar);
            listaProductos.appendChild(producto);
        });

        actualizarTotal();
    }

    btnAñadir.addEventListener('click', () => {
        let nombreProducto = campoNombre.value.trim();
        let precioProducto = campoPrecio.value.trim();

        if (!nombreProducto || !precioProducto) return;

        let carritoGuardado = obtenerProductos();
        carritoGuardado.push({ nombre: nombreProducto, precio: parseFloat(precioProducto) });
        guardarProducto(carritoGuardado);

        campoNombre.value = "";
        campoPrecio.value = "";

        renderizarProductos();
    });

    renderizarProductos();

    return seccionCompras;
}
