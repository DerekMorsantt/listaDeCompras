function header() {
    let header = document.createElement('header');
    header.className = "header";

    let img = document.createElement('img');
    img.src = "assets/download.png";
    img.id = "btnDownload";
    img.className = "img";

    header.appendChild(img);

    return header;
}

export { header }
