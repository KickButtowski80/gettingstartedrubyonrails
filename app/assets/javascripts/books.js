 $(document).ready(function(){
       var $root = $('html, body');
        $('a').click(function(e) {
             e.preventDefault();
             var target = this.hash;
             var $target = $(target);
             alert(target);
             $("html,body").animate({
                 'scrollTop': $target.offset().top
             }, 1000, 'swing', function(){
                 window.location.hash = target;
             });
        });
 });