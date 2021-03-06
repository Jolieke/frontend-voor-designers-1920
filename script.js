/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//let is ongeveer hetzelfde als var (variabele)
// link naar het json file wat je wilt gebruiken
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

//Nieuwe functie request die XMLHHttpRequest oproept. Dit heb je altijd nodig voor het aanroepen van een json
var request = new XMLHttpRequest();

//Open het json file die je aan de let URL hebt gelinkt. 
request.open('GET', requestURL);

//vertel wat voor soort file het is. In dit geval json
request.responseType = 'json';

//verzoek verzenden
request.send();

//functie aanmaken voor het laden van het json bestand
request.onload = function () {
//    var allMovies = request.response;
    console.log(request.response);
    console.log(request.response[4].release_date);

    Movie(request.response);
//      showMovies(allMovies);
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
