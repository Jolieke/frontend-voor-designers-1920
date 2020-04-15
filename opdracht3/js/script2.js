/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//totaal aantal cases per land
var dataCountryStat = null;

var requestCountryStat = new XMLHttpRequest();
requestCountryStat.withCredentials = true;

requestCountryStat.open("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php");
requestCountryStat.responseType = 'json';
requestCountryStat.setRequestHeader("x-rapidapi-key", "800cfaec57mshb3d2fa49ac20cf9p1f6b51jsn3fcd61f320c0");

requestCountryStat.send(dataCountryStat);

requestCountryStat.onload = function () {
    console.log(requestCountryStat.response);
    console.log(requestCountryStat.response.countries_stat[10]);
};

//
//var section = document.querySelector('section'); 
//
//var container = document.createElement('div');
//section.appendChild(container);
//
//var death = document.createElement('article');
//container.appendChild(death);
//
//var sick = document.createElement('article');
//container.appendChild(sick);
//
//var recovered = document.createElement('article');
//container.appendChild(recovered);
//
//var selectCountry = document.querySelector('.selectCountry');
//var list = document.querySelector('.countryList');
//var listItems = document.querySelectorAll('ul>li');
//var showCountry = document.querySelector('.chosen');
//
//selectCountry.addEventListener('click', function () {
//  // check if your drop down is already open
//  if (list.style.display === 'block') {
//    // if so it needs to be closed
//    list.style.display = 'none';
//  } else {
//    // if not it needs to be open.
//    list.style.display = 'block';
//    allItemsGetClicked();
//  }
//}, true);
//
//function allItemsGetClicked() {
//  listItems.forEach(function (element) {
//    console.log(element);
//    element.addEventListener('click', function (event) {
//      console.log(event.target.innerHTML);
//      showCountry.innerHTML = event.target.innerHTML;
//    }, true)
//  })
//}
//
