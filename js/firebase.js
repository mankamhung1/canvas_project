/////////// This part is for uploading to firebase:
function uploadToFirebase(name) {
  canvasReal.toBlob(function(blob) {

          var file = blob;

          // Create the file metadata
          var metadata = {
            contentType: 'image/png'
          };

          var storageRef = firebase.storage().ref();
          var canvasRef = storageRef.child('canvas_images');
          var fileName = name;
          var canvasImagesRef = canvasRef.child(fileName);

          var uploadTask = canvasImagesRef.put(file, metadata);

          console.log(blob);

          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log('Upload is running');
                  break;
              }
            }, function(error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors

            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;

              case 'storage/canceled':
                // User canceled the upload
                break;

              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }

          }, function() {
            // Upload completed successfully, now we can get the download URL
            var downloadURL = uploadTask.snapshot.downloadURL;
          });
  });
}

/////////// This part is for downloading from firebase:
function downloadFromFirebase(name) {
  // Create a reference to the file we want to download
  var storageRef = firebase.storage().ref();
  var canvasRef = storageRef.child('canvas_images');
  var fileName = name;
  var imgRef = canvasRef.child(fileName);
  //var imgRef = storageRef.child('canvas_images/canvas.jpeg');

  // Get the download URL
  imgRef.getDownloadURL().then(function(url) {
    var imgToLoad = new Image();
    imgToLoad.setAttribute('crossOrigin', 'anonymous');
    imgToLoad.src = url;
//    imgToLoad.setAttribute('crossOrigin', '*');
    imgToLoad.addEventListener("load", function() {
    contextReal.drawImage(imgToLoad, 0, 0);
    });

    // Insert url into an <img> tag to "download"
  }).catch(function(error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object_not_found':
        // File doesn't exist
        break;

      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;

      case 'storage/canceled':
        // User canceled the upload
        break;

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });
}
