jQuery(document).ready(function($) {
    $('#UserTable').DataTable();
    
    $('#DogTable').DataTable();
    
    $('#FeedbackTable').DataTable({
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox'
        } ],
        select: {
            style:    'multi',
            selector: 'input'
        },
        order: [[ 1, 'asc' ]],
    });
    
    $('#RequestsTable').DataTable( {
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox'
        } ],
        select: {
            style:    'multi',
            selector: 'input'
        },
        order: [[ 1, 'asc' ]],
    } );
} );
