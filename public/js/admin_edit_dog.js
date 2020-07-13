$(document).ready(
function getBreed(breed){
        var value = breed;
        $("#select_breed").children("option[value='" + breed + "']").prop('selected',true)
        });