function download() {
    var dt = document.getElementById('canvas-real').toDataURL();
    $('#download').attr('href', dt);
}
document.getElementById('download').addEventListener('click', download, false);
