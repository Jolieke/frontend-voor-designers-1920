/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//totaal aantal cases over de wereld
var dataWorldStat = null;

var requestWorldStat = new XMLHttpRequest();
requestWorldStat.withCredentials = true;

requestWorldStat.open("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php");
requestWorldStat.responseType = 'json';
requestWorldStat.setRequestHeader("x-rapidapi-key", "800cfaec57mshb3d2fa49ac20cf9p1f6b51jsn3fcd61f320c0");

//verzoek verzenden
requestWorldStat.send(dataWorldStat);

requestWorldStat.onload = function () {
    console.log(requestWorldStat.response);
};

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

var main = document.querySelector('section');
var nederland = document.createElement('p');



//
//requestCountryStat.onload = function () {
//    //hier kun je nu iets doen met de data
//    setupdata(requestCountryStat.response);
//}
//
////in je html staat een section, daar ga je alle data koppelen
//var main = document.querySelector("section");
////maak een ul element aan om de landen uit de json in te zetten
//var lijst = document.createElement("ul");
//lijst.textContent = 'Kies Land: ';
//
//function setupdata(virusdata) {
//    for (country of virusdata.countries_stat) {
//        console.log("land: ", country);
//        var li = document.createElement("li");
//        li.textContent = country;
//        lijst.appendChild(li);
//    } 
//    main.appendChild(lijst); }
