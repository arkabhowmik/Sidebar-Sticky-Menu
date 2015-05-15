jQuery(document).ready(function ($) {
    var menu = $('#cssmenu');
    menu.find('a').click(function(e){
        e.preventDefault();
    });
    menu.find('a').dblclick(function(){
        window.location = $(this).attr('href');
    });
});