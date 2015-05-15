jQuery(document).ready(function ($) {
    var menu = $('#cssmenu');

    if(Modernizr.touch){

        menu.find('li.has-sub > a').click(function(e){

            var href = $(this).attr('href');

            if (!$(this).data('timer')) {
                $(this).data('timer', setTimeout(function () {
                    console.log('Waiting');
                }, 1000));
            }

            return false;

        });

        menu.find('a').dblclick(function(){
            clearTimeout($(this).data('timer'));
            $(this).data('timer', null);
            console.log('Double Click');
            window.location = $(this).attr('href');

            return false;
        });
    }
});