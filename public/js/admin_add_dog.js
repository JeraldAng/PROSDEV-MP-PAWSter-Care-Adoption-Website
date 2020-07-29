 function previewFile(){
    var preview = document.getElementById('upload_ID'); //selects the query named img
    //    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var fileInput = document.getElementById('avatar');
    var filePath = fileInput.value;

    var allowedExtensions =  /(\.jpg|\.jpeg|\.png)$/i;

    if (!allowedExtensions.exec(filePath)){
        alert("Invalid file type!");
        fileInput = '';
        return false;
    } else{
        //preview the image
        if (fileInput.files && fileInput.files[0]){
            var reader  = new FileReader();
            reader.onload = function (e) {
                preview.src = reader.result;
            }
            reader.readAsDataURL(fileInput.files[0]); //reads the data as a URL
        }
    }
  }

  previewFile();  //calls the function named previewFile()