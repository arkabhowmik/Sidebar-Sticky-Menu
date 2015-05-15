jQuery(document).ready(function ($) {
    var menu = $('#cssmenu'),clicks = 0, timer = null;

    if(Modernizr.touch){

        menu.find('li.has-sub > a').on('click',function(e){
            e.preventDefault();
            clicks++;
            if(clicks == 1){
                timer = setTimeout(function() {
                    clicks = 0;
                }, 700);
            } else {
                clearTimeout(timer);
                window.location = $(this).attr('href');
            }
            return false;

        });

        menu.find('a').on('dblclick',function(e){
            e.preventDefault();
        });
    }

    var $buffer = false;
    $(".menu-toggler").on('click',function () {
        console.log('Yeah');
        if(!$buffer){
            $('#cssmenu').removeClass('menu-toggle');
            $buffer = true;
        } else{
            $('#cssmenu').addClass('menu-toggle');
            $buffer = false;
        }
    });
});