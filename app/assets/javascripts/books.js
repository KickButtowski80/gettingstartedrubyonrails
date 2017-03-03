 $(document).ready(function() {
     var $root = $('html, body');
     $('a').click(function(e) {
         e.preventDefault();
         var target = this.hash;
         var $target = $(target);
         alert(navigator.userAgent);
         if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
             window.scrollTo(200, 100) // first value for left offset, second value for top offset
         } else {
             $("html,body").animate({
                 'scrollTop': $target.offset().top
             }, 1000, function() {
                 window.location.hash = target;
             });
         }
     });
 });