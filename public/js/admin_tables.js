$(document).ready(function() {
    $('#UserTable').DataTable();
    
    $('#DogTable').DataTable();
    
    $('#FeedbackTable').DataTable();
    
    $('#RequestsTable').DataTable( {
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox'
        } ],
        select: {
            style:    'os',
            selector: 'td'
        },
        order: [[ 1, 'asc' ]],
    } );
    
} );
