$(document).ready(function(){    
    $('td.reqDate').each(function(i, obj) {
        var date = new Date(this.innerHTML);
        var newdate = date.toDateString();
        
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        
        this.innerHTML = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    });
            
    if ($('.table tbody').children().length == 0) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.setAttribute('colSpan', '4');
        td.style.padding = '100px 20px';
        td.style.fontSize = '50px';
        td.style.color = '#7C7373';
        td.innerHTML = "No Pending Requests";
        tr.appendChild(td);
        tr.style.backgroundColor = "#F2EEE5";
        $("tbody").append(tr);
    }
    
    $('#ChangesSavedModal').modal('hide');
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('changes');
    
    // myParam determines whether it is username or email that's taken
    if(myParam != "") {
        $('#changes-modal-text').append("Your profile has been successfully updated. The system has detected the following changes:<br>"); 
        if(myParam.includes("1"))
            $('#changes-modal-text').append("<br>username");
        if(myParam.includes("2"))
            $('#changes-modal-text').append("<br>email address");
        if(myParam.includes("3"))
            $('#changes-modal-text').append("<br>password");
        
        $('#ChangesSavedModal').modal('show');
    }
    else{
        $('#changes-modal-header').html("No changes detected!");
        $('#changes-modal-text').append("Your profile information is unchanged."); 
        $('#ChangesSavedModal').modal('show');
    }
    
});