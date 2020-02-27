/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//variabelen voor de checkboxes
var checkBoxBlauw = document.querySelector('.blauw');
var checkBoxRood = document.querySelector('.rood');
var checkBoxGeel = document.querySelector('.geel');

//var checkBoxAlles = document.querySelector('.alleImages');
//var i;

//variabelen voor alle images onderverdeel op kleur
var imagesBlauw = document.querySelectorAll('.imgblauw');
var imagesRood = document.querySelectorAll('.imgrood');
var imagesGeel = document.querySelectorAll('.imggeel');
//var imagesAlles = document.querySelector('.content').children;

//console.log(imagesAlles);

//button geel 
//hulp van Vincent bij het maken van code
checkBoxBlauw.addEventListener('click', function () {
    console.log(imagesBlauw);
    imagesBlauw.forEach(function (element) {
        console.log(element);

        if (checkBoxBlauw.checked) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}, true);

//button geel 
//hulp van Vincent bij het maken van code
checkBoxRood.addEventListener('click', function () {
    console.log(imagesRood);
    imagesRood.forEach(function (element) {
        console.log(element);

        if (checkBoxRood.checked) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}, true);

//button geel 
//hulp van Vincent bij het maken van code
checkBoxGeel.addEventListener('click', function () {
    console.log(imagesGeel);
    imagesGeel.forEach(function (element) {
        console.log(element);

        if (checkBoxGeel.checked) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}, true);


//poging tot alles button via een loop
//checkBoxAlles.addEventListener('click', function () {
//    //    console.log(imagesAlles);
//    for (i = 0, i < imagesAlles.length, i++) {
//        element.style.display = 'block';
//    }
//});


//    for loop gebruiken om elementen op block te zetten 
//    imagesAlles.forEach(function (element) {
//        console.log(element);
//
//        if (checkBoxAlles.checked) {
//            element.style.display = 'block';
//        } else {
//            element.style.display = 'none';
//        }
//    });
//}, true);
