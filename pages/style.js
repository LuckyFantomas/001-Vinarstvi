var icons = $('.fa'),
    styles = {
        position: 'relative',
        zIndex: 10,
    },
    settings = { top: 200, right: 150 },
    speed = 500;
        

icons.css(styles);

    icons.on('mouseenter', function() {
        $(this).animate(settings, speed);
    });





$('.mainMenu a').hover(function () {
    $( this ).fadeOut( 100 );
    $(this).fadeIn(1000);
  
    });




$('main').hide().fadeIn(1000);
$('.citat_levy').hide().fadeToggle(8000);

