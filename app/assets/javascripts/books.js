 $(document).ready(function(){
       var $root = $('html, body');
        $('a').click(function(e) {
             e.preventDefault();
             var target = this.hash;
             var $target = $(target);
             
             $("html,body").animate({
                 'scrollTop': $target.offset().top
             }, 1000, function(){
                 window.location.hash = target;
             });
        });
 });