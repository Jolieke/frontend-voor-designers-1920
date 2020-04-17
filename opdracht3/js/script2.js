/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//--------  GEGEVENS AANVRAGEN ---------//
//var data = 0;

var request = new XMLHttpRequest();
request.withCredentials = true;

//Opent het json file + link naar de URL van de API die ik wil gebruiken 
request.open("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php");
request.responseType = 'json'; //vertelt wat voor soort file het is: json
request.setRequestHeader("x-rapidapi-key", "800cfaec57mshb3d2fa49ac20cf9p1f6b51jsn3fcd61f320c0"); //sleutelcode die nodig is om de api te gebruiken 
request.send(); //verzoek verzenden

//--------  GEGEVENS AANMAKEN ---------//
request.onload = function () {
    fromOptions(request.response);
    infoSelected(request.response.countries_stat);
};

//--------  VARIABELEN ---------//
var i;

var countryList = document.querySelector('#countryList'); //variabele die id countryList uit html selecteert

var selectCountry = document.querySelector('.selected'); //variabele die class selected uit html selecteert

var countryInfo = document.querySelector('article'); //variabele die article uit html selecteert

function fromOptions(countries_stat) {
    console.log(listOptions);
    //loop voor het toevoegen van <option> elementen aan <select> in form html 

    for (i = 0; i < countries_stat.length; i++) {
        console.log('countries ', countries_stat[i]);
        var option = document.createElement('option'); //option element aanmaken 
        option.innerHTML = countries_stat[i].country_name; //data landnamen ophalen 
        //innerHTML takes the existing DOM content of the parent node and replaces it 
        countryList.appendChild(option); //toevoegen van alle landnamen aan select in html
    };
    //}
    //
    //function infoSelected(onload.dataCheck) {
    //    //    forE(function (country) {
    //    if ((country.country_name === selectCountry.value) {
    //        console.log(country);
    //
    //        var totalCases = document.createElement('h1');
    //        var deaths = document.createElement('h2');
    //        var sick = document.createElement('h2');
    //        var recovered = document.createElement('h2');
    //
    //        totalCases.textContent = 'Totaal: ' + [country.cases];
    //        deaths.textContent = 'Doden: ' + [country.deaths];
    //        sick.textContent = 'Zieken: ' + [country.active_cases];
    //        recovered.textContent = 'Genezen: ' + [country.total_recovered];
    //
    //        countryInfo.appendChild(totalCases);
    //        countryInfo.appendChild(deaths);
    //        countryInfo.appendChild(sick);
    //        countryInfo.appendChild(recovered);
    //    }, true)}


    //selectie van een land uit de landenlijst met change
//    selectCountry.addEventListener('change', infoSelected);

    //forEach = excute a function on each element in the array
    //    data.forEach(function (country) {
    //        if (country.country_name === selectCountry.value) {
    //            console.log(country);
    //        }

    //    for (i = 0; i < allData.length; i++) {
    //
    //    function country(country.country_name === [i].value)
    //    console.log(country); }
    //}
