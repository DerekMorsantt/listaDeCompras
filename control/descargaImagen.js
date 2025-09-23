function downloadAsImage() {
    const contenido = document.querySelector('#todo');
    html2canvas(contenido).then(canvas => {
        const link = document.createElement('a');
        link.download = 'contenido.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

export { downloadAsImage };
