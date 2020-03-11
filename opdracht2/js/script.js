/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/*Glider library gebruikt bron: https://nickpiscitelli.github.io/Glider.js/ 
Hierna css nog wat aangepast in bestand van de bron*/

//Uit library gekopieerd. aantal frames voor mobile, tablet en desktop gekozen
new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },

    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.10
            }
    }, {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.10
            }
    }
  ]
});

//Keydown event voor rechtermuisknop aangemaakt
//Samen met de hulp van Anne 
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
        //variabele button aanmaken en deze koppelen aan class glider-next
        var button = document.querySelector('.glider-next');
        console.log(button);
        button.click();
    }
});

//Keydown event voor linkermuisknop aangemaakt
//Samen met de hulp van Anne
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        var button =
        //variabele button aanmaken en deze koppelen aan class glider-prev
        document.querySelector('.glider-prev');
        console.log(button);
        button.click();
    }

});
