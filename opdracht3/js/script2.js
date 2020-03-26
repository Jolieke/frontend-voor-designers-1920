/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//Deze code heb ik wat aangepast van het origineel, zodat ik het beter begreep. Ik weet niet of dit juist is. Dit was de originele code wat alleen gaat om de aantal landen die geinfecteerd zijn: 

//var data = null;
//
//var xhr = new XMLHttpRequest();
//xhr.withCredentials = true;
//
//xhr.addEventListener("readystatechange", function () {
//	if (this.readyState === this.DONE) {
//		console.log(this.responseText);
//	}
//});
//
//xhr.open("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php");
//xhr.setRequestHeader("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com");
//xhr.setRequestHeader("x-rapidapi-key", "800cfaec57mshb3d2fa49ac20cf9p1f6b51jsn3fcd61f320c0");
//
//xhr.send(data);

//Zo heb je de volgende code voor world cases en deaths etc, (zie hieronder). 
//Zou ik deze data iedere keer op deze manier moeten inladen als ik verschillende soorten data vanuit de API wil gebruiken? 

//var data = null;
//
//var xhr = new XMLHttpRequest();
//xhr.withCredentials = true;
//
//xhr.addEventListener("readystatechange", function () {
//	if (this.readyState === this.DONE) {
//		console.log(this.responseText);
//	}
//});
//
//xhr.open("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php");
//xhr.setRequestHeader("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com");
//xhr.setRequestHeader("x-rapidapi-key", "800cfaec57mshb3d2fa49ac20cf9p1f6b51jsn3fcd61f320c0");
//
//xhr.send(data);

var data = null;

// link naar het json file wat je wilt gebruiken
var requestURL = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php";

//Nieuwe functie request die XMLHHttpRequest oproept. Dit heb je altijd nodig voor het aanroepen van een json
var request = new XMLHttpRequest();
request.withCredentials = true;

//Ik begrijp niet wat ze hier mee bedoelen.
request.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

//Open het json file die je aan de let URL hebt gelinkt.
request.open("GET", requestURL);
request.setRequestHeader("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com");
request.setRequestHeader("x-rapidapi-key", "800cfaec57mshb3d2fa49ac20cf9p1f6b51jsn3fcd61f320c0");

//verzoek verzenden
request.send(data);

//poging tot het ophalen van het land Nederland
request.onload = function () {
    var allCountries = request.response;
    console.log(request.response);
    console.log(request.response[10].affected_countries);  
}

//aantekeningen van vorige opdracht hieronder: 
/*//functie aanmaken voor het laden van het json bestand
request.onload = function () {
    //var allMovies = request.response;
    console.log(request.response);
    console.log(request.response[4].release_date);

    Movie(request.response);
    //  showMovies(allMovies);
}

//functie voor toevoegen van een header aan het json object 
function Movie(allMovies) {
    var myH1 = document.createElement('h1'); // h1 element aanmaken
    myH1.textContent = allMovies[4].title; //invulling van h1 element met link uit json file
    header.appendChild(myH1); //toevoegen van h1 aan header uit html 

    var poster = document.createElement('img');
    poster.src = allMovies[4].cover;
    header.appendChild(poster);
}

// console.log(jsonObj['title']);

//  const myPara = document.createElement('p');
//  myPara.textContent = 'plot' + jsonObj['release_date'] + ' // Formed: ' + jsonObj['formed'];
//  header.appendChild(myPara);
//}
//
//function showHeroes(jsonObj) {
//  const heroes = jsonObj['members']; //variabele voor 
//      
//  for (let i = 0; i < heroes.length; i++) {
//    const myArticle = document.createElement('article'); //element article toevoegen
//    const myH2 = document.createElement('h2'); //element h2 toevoegen
//    const myPara1 = document.createElement('p'); // element p toevoegen
//    const myPara2 = document.createElement('p');
//    const myPara3 = document.createElement('p');
//    const myList = document.createElement('ul'); //element unorderd list toevoegen
//
//    myH2.textContent = heroes[i].name; 
//    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity; //linken van content uit json file aan p1
//    myPara2.textContent = 'Age: ' + heroes[i].age; //linken van content uit json file aan p2 
//    myPara3.textContent = 'Superpowers:'; //linken van content uit json file aan p3 
//        
//    const superPowers = heroes[i].powers;
//    for (let j = 0; j < superPowers.length; j++) {
//      const listItem = document.createElement('li');
//      listItem.textContent = superPowers[j];
//      myList.appendChild(listItem);
//    }
//
//    myArticle.appendChild(myH2); //toevoegen van de h2 aan het article
//    myArticle.appendChild(myPara1); //toevoegen van p element aan article
//    myArticle.appendChild(myPara2);
//    myArticle.appendChild(myPara3);
//    myArticle.appendChild(myList); //toevoegen van list aan article 
//
//    section.appendChild(myArticle); //toevoegen van het article aan de section
//  }
//}
//*/
