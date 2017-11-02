function readImage() {
    if (this.files && this.files[0]) {
        var FR = new FileReader();
        FR.onload = function(event) {
           var imgToLoad = new Image();
           imgToLoad.addEventListener("load", function() {
           contextReal.drawImage(imgToLoad, 0, 0);
           });
           imgToLoad.src = event.target.result;
        };
        FR.readAsDataURL(this.files[0]);
    }
}

document.getElementById("fileToLoad").addEventListener("change", readImage, false);
