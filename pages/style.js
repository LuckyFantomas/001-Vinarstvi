swal({
    title: "UPOZORNĚNÍ!",
    text: "Stránka je ve vývoji, makáme na ní!",
    icon: "info",
  });


var icons = $('.fa'),
    styles = {
        position: 'relative',
        zIndex: 10,
    },
    settings = { top: 200, right: 150 },
    speed = 1000;
        


icons.on('mouseenter', function () {
    icons.css(styles)
    $(this).animate(settings, speed)
    });


$('main').hide().fadeIn(1000);
$('.citat_levy').hide().fadeToggle(5000);;





$('.mainMenu').find('a').on('click', function(event) {
	
	$(this)
		.addClass('selected')
        .siblings().removeClass('selected');
        

});













/*
var a = +prompt("Enter first number");
var b = 3;

alert(a * b);


function nasob(a, b) {
    return a * b
}
var vysledek = nasob (a, b)
console.log(vysledek);*/

/*var a = +prompt("Enter first number");
var b = +prompt("Enter second number");
alert(a + b);


function scitej(a, b) {
    return a + b
}
var vysledek = scitej (a, b)
console.log (vysledek)*/