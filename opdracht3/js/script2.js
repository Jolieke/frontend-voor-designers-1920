/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

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

var countryList = document.querySelector('#countryList'); //variabele die id countryList uit html selecteert

var selectCountry = document.querySelector('.selected'); //variabele die class selected uit html selecteert

var countryInfo = document.querySelector('article'); //variabele die article uit html selecteert


//--------  GEGEVENS AANMAKEN ---------//
request.onload = function () {
    console.log(request.response.countries_stat);

    //hulp van Vincent
    var getData = request.response.countries_stat; // gewenste data gegevens ophalen

    for (i = 0; i < getData.length; i++) {
        console.log('country ', getData[i]);
        var option = document.createElement('option'); //option element aanmaken 
        option.innerHTML = getData[i].country_name; //data landnamen ophalen 
        //innerHTML takes the existing DOM content of the parent node and replaces it 
        countryList.appendChild(option); //toevoegen van alle landnamen aan select in html
    }
};

   //hulp van Vincent
selectCountry.addEventListener('change', function (event) {
    console.log(event);
    var getData = request.response.countries_stat; // gewenste data gegevens ophalen
    //forEach = excute a function on each element in the array
    getData.forEach(function (country) {
            if (country.country_name === selectCountry.value) {
                console.log(country);

                var totalCases = document.createElement('h1');
                var deaths = document.createElement('h2');
                var sick = document.createElement('h2');
                var recovered = document.createElement('h2');

                totalCases.textContent = 'Totaal: ' + [country.cases];
                deaths.textContent = 'Doden: ' + [country.deaths];
                sick.textContent = 'Zieken: ' + [country.active_cases];
                recovered.textContent = 'Genezen: ' + [country.total_recovered];

                countryInfo.appendChild(totalCases);
                countryInfo.appendChild(deaths);
                countryInfo.appendChild(sick);
                countryInfo.appendChild(recovered);
            }
//kwam hier niet meer uit 
            if (country.country_name === selectCountry.value > 1) {
                countryInfo[i++].remove;
            }
        }



        , true);
})
