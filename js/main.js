$(document).ready(function() {
    // If Mobile Nav menu clicked then Navigation Nav UL Slide Down
    $("#mobile-nav").click(function() {
        // Slide Toggle Nav ul
        $("nav ul").slideToggle();

        
    });
});

// Smooth Scrolling for #
$(function() {

    // Selecting only a href to a #
  $('a[href*="#"]:not([href="#"])').click(function() {

      // Looking for the path
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      // Will animte the distance
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
