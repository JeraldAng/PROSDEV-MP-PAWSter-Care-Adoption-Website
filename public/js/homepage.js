$(document).ready(function(){
                $("button.filter-button").click(function(){      // local disk, fat arrow is a global disk
                    $("#filterid").val($("#pref-breed").val())
                    $("#filterform").submit()
                    console.log($("#pref-breed").val())
                })
})

$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});
