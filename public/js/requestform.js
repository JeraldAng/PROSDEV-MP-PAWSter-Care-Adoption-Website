var fname = "";
var lname = "";
var phone = "";
var email = "";
var addr = "";
var dog = "";




function exportHTML(){
       var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
       var footer = "</body></html>";
       var sourceHTML = header+document.getElementById("source-html").innerHTML+footer;
       
       var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
       var fileDownload = document.createElement("a");
       document.body.appendChild(fileDownload);
       fileDownload.href = source;
       fileDownload.download = 'PAWSter Care Adoption Form.doc';
       fileDownload.click();
       document.body.removeChild(fileDownload);
    }

function alert(field){
    alertify.set('notifier','position', 'bottom-left'); 
    
    alertify.alert("Please input your " + field, function(){
    alertify.message(field+" required");
  }).setHeader('Invalid Input');
}

function myFunction() {
  var txt;
  swal.fire("Request", "Request has been successfully sent!", "success")
}

