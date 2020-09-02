$(document).ready(function(){
                $("button.filter-button").click(function(){      // local disk, fat arrow is a global disk
                    $("#filterid").val($("#pref-breed").val())
                    $("#filterform").submit()
                })
})

$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


