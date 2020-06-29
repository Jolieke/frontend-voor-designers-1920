/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//--------  LOADER ---------//
//loader via bron: https://www.youtube.com/watch?v=b9zyKCsUJfY
var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function () {
            loadNow(opacity - 0.05)
        }, 120);
    }
}

function displayContent() {
    loader.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById("loader");
    loadNow(3);
});

//--------  GEGEVENS AANVRAGEN ---------//
var data = 0;

var request = new XMLHttpRequest();
request.withCredentials = true;

//Opent het json file + link naar de URL van de API die ik wil gebruiken 
request.open("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php");
request.responseType = 'json'; //vertelt wat voor soort file het is: json
request.setRequestHeader("x-rapidapi-key", "800cfaec57mshb3d2fa49ac20cf9p1f6b51jsn3fcd61f320c0"); //sleutelcode die nodig is om de api te gebruiken 
request.send(data); //verzoek verzenden

//--------  VARIABELEN ---------//
var i;
var countryName;
var totalCases;
var deaths;
var sick;
var recovered;

//--------  VARIABELEN SELECTEREN UIT HTML---------//

var countryList = document.querySelector('#countryList'); //variabele die id countryList uit html selecteert

var selectCountry = document.querySelector('.selected'); //variabele die class selected uit html selecteert

var countryInfo = document.querySelector('article'); //variabele die article uit html selecteert

var deathPeople = document.querySelector('.death');
var sickPeople = document.querySelector('.sickPeople');
var recoveredPeople = document.querySelector('.healed');

makeContent(); // functie makeContent uitvoeren die elementen aan html toevoegd 

//--------  GEGEVENS AANMAKEN FORMULIER ---------//
request.onload = function () {
    console.log(request.response.countries_stat);

    var getData = request.response.countries_stat; // gewenste data gegevens ophalen

    //hulp van Vincent
    for (i = 0; i < getData.length; i++) {
        console.log('country ', getData[i]);
        var option = document.createElement('option'); //option element aanmaken 
        option.innerHTML = getData[i].country_name; //data landnamen ophalen 
        //innerHTML takes the existing DOM content of the parent node and replaces it 
        countryList.appendChild(option); //toevoegen van alle landnamen aan select in html
    }
};

//--------  ELEMENTEN TOEVOEGEN AAN HTML ---------//
function makeContent() {
    countryName = document.createElement('h1'); // waarde aan variabele geven
    totalCases = document.createElement('h2');
    deaths = document.createElement('p');
    sick = document.createElement('p');
    recovered = document.createElement('p');

    countryInfo.appendChild(countryName); //informatie uit json toevoegen aan het section in html
    countryInfo.appendChild(totalCases);
    deathPeople.appendChild(deaths); //informatie uit json toevoegen aan class in html 
    sickPeople.appendChild(sick);
    recoveredPeople.appendChild(recovered);
}

//-------- CHANGE EVENT ---------//

//change event uitvoeren bij het selecteren van een country in de form
selectCountry.addEventListener('change', function (event) {
    console.log(event);

    var getData = request.response.countries_stat; // gewenste data gegevens ophalen

    //hulp van Vincent
    //forEach = excute a function on each element in the array
    getData.forEach(function (country) {
        if (country.country_name === selectCountry.value) {
            console.log(country);

            countryName.innerHTML = [country.country_name]; //aangeven waar de informatie over landnamen te vinden is in json file 
            totalCases.textContent = 'cases: ' + [country.cases];
            deaths.textContent = [country.deaths];
            sick.textContent = [country.active_cases];
            recovered.textContent = [country.total_recovered];
        }
    }, true);
});



//poging tot het toevoegen van een library voor het optellen van statistieken, dit is niet gelukt. bron: https://www.youtube.com/watch?v=pjacOlT7a_k
//$('#countryList').click(function () {
//      var c = new CountUp("totalCases", country.cases);
//    c.start();
//});
