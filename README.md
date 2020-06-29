# Frontend voor Designers 1920

![alt text](./img/F4Dsplash.png "Frontend voor Design Splash")

In het vak Frontend voor Designers heb ik geleerd hoe je met HTML, CSS en Javascript prototypes kunt maken om je ontwerpideeën te testen in een browser. We zijn gaan animeren, responsive layouts uitproberen en interactie coderen ...

Voor dit vak heb ik de 3 opdrachten uitgevoerd:

1. [Opdracht 1: Een Micro-interactie uitwerken en testen](opdracht1/)
Voor de eerste opdracht heb ik geprobeerd om m.b.v. een checklist foto's op kleur te selecteren in een lijst. Ik startte iets te enthousiast met de opdracht waardoor het mij niet helemaal gelukt is. Zo heb ik geen echte foto's kunnen toevoegen, maar heb ik wel op kleur kunnen selecteren. Hiervoor heb ik o.a. querySelector en element.style.display = 'block'/'none' leren gebruiken. 

2. [Opdracht 2: Een interactie uitwerken voor verschillende gebruikers input](opdracht2/)
Voor de tweede opdracht heb ik de basis van een portfolio website gemaakt. Tijdens deze lessen heb ik geleerd hoe ik een library kan inzetten en daarop mijn design kan aanpassen. Ook heb ik geleerd hoe ik met JavaScript keyboard events kan gebruiken.  

3. [Opdracht 3: Een interactie uitwerken met externe data](opdracht3/)
Voor mijn eindopdracht heb ik een corona counter gemaakt, die (externe) info vanuit een API(https://rapidapi.com/astsiatsko/api/coronavirus-monitor) inlaad in mijn webpagina. Zo kan je van ongeveer alle landen in de wereld de totaal aantal besmettingen zien. Daarnaast krijg je ook inzicht in het aantal doden, zieken en genezen mensen. 

Toelichting eindopdracht

Voor mijn eindopdracht heb ik geprobeerd om een Corona Counter te realiseren. 
Aangezien we allemaal in quarantaine zaten leek mij interessant om iets met deze actualiteit te doen. Ik ben opzoek gegaan naar een passende (gratis) API met veel data over Corona. Nadat ik de juiste API gevonden had heb ik bepaald welke informatie ik vanuit de json wilde gebruiken, dit was: het aantal corona cases per land en daarbij het aantal doden, zieken en genezen mensen. Het doel van de webpagina was om een wat luchtige sfeer uit te stralen. Dit heb ik gedaan door gebruik te maken van grappige afbeeldingen, GIFs en een licht kleurpalet. 

Wanneer de gebruiker de webpagina opent, ziet hij eerst een loading state met een GIF animatie. Deze gif moet de gebruiker "vermaken" als hij moet wachten op het laden van de webpagina. 

Zodra de pagina geladen is, ziet de gebruiker de Corona Counter, waar hem gevraagd wordt om een land te selecteren in het dropdown menu. Aangezien ik gebruik heb gemaakt van een form in mijn html kan de gebruiker het dropdown menu ook bedienen met zijn pijltjestoetsen. Dit maakt het gebruik dus extra makkelijk, zeker als je de webpagina op een telefoon bezoekt. 

Wanneer de gebruiker een land selecteerd zal de informatie van dat land zichtbaar worden. De gebruiker ziet nogmaals welk land hij heeft geselecteerd, hoeveel cases dat land in zijn totaliteit heeft en hoeveel doden, zieken en genezen mensen het telt. De gebruiker kan zo vaak als hij wilt een land selecteren, waar hij iedere keer actuele informatie te zien krijgt. 
Om het doel van de webpagina duidelijker te maken: het selecteren van een land, heb ik geprobeerd dit visueel opvallender te maken. Dit heb ik gedaan door een hover state toe te voegen, waarbij de achtergrond als de size(transform) van het formulier veranderd. 

Toelichting code

Voor mijn Corona Counter heb ik naar een API gezocht (externe bron): https://rapidapi.com/astsiatsko/api/coronavirus-monitor. Veel informatie uit deze API heb ik kunnen gebruiken, waaronder: lijst met alle landen van de wereld, het totaal aantal besmettingen, het totaal aantal doden, het totaal aantal zieken en het totaal aantal genezen mensen. Met de informatie uit deze externe bron heb ik mijn webpagina weten vorm te geven in HTML/CSS en JS.   

In mijn HTML heb ik niet super veel code staan. Mijn header bestaat uit twee div elementen met de loader GIF en de header IMG. Bij mijn main maak ik het formulier aan die ik later met behulp van de API jsonfile in mijn javascript invul, hetzelfde geld voor het section element wat daarna volgt. Daarnaast heb ik drie symboolcodes toegevoegd die een visuele aanvulling moeten geven aan de gebruiker op het doden-, zieken- en genezen aantal mensen. 

Mijn javascript bestand heb ik opgedeeld in verschillende delen. Per onderdeel beschrijf ik kort wat er gebeurd, verdere toelichting staat in de code als comments. 
1. LOADER(regel 5-28): in dit gedeelte staat alle code voor de loader. Ik heb via verschillende YouTube filmpjes geprobeerd dit te laten werken, maar ik had niet veel succes. Uiteindelijk is dit gelukt met deze video: https://www.youtube.com/watch?v=b9zyKCsUJfY
2. GEGEVENS AANVRAGEN(regel 29-40): de json file uit de API die gebruik wordt, wordt aangevraagd. 
3. VARIABELEN(regel 41-48): verzameling van alle variabelen die ik gebruik in mijn javacript
4. VARIABELEN SELECTER UIT HTML(regel 49-60): verschillende elementen uit mijn html worden geselecteerd en aan een variabele gekoppeld
5. GEGEVENS AANMAKEN FORMULIER (63-78): De informatie uit het json file wordt hier gebruikt om het formulier in te vullen. Dit houdt in dat de landenlijst als opties aan het dropdown menu worden toegevoegd. 
6. ELEMENTEN TOEVOEGEN AAN HTML(79-93): Functie die elementen toevoegd aan html, zodat deze daarna alleen nog maar ingevuld hoeven te worden met de juiste data informatie (change event). 
7. CHANGE EVENT(94-115): Middels een change event kan je het land selecteren uit de countrylijst in het formulier. Wanneer het de country.name gelijk is aan het geselecteerde land uit de dropdown, zal de informatie van dit land weergegeven worden. 

De comments die onderaan het bestand staan, was een poging om een counter toe te voegen voor bv. de totaal aantal cases. Eventueel ook voor aantal doden, zieken en genezen mensen. Dit is mij helaas niet meer gelukt.

Toelichting testen en verbeteren

In de eerste les heb ik geleerd hoe ik een json file moet inladen in JavaScript. Hiervoor heb ik de API met filmdata die voor deze opdracht aangedragen werd. Na deze les brak Corona uit en moesten wij allemaal in quarantaine, waardoor lessen op school niet meer mogelijk waren. Hierdoor is mijn eindopdracht een tijdje stil is komen te liggen en heb ik in mijn verdere proces op een aantal momenten hulp gekregen. 

Bij het schrijven van de js code heb ik een wat hulp gekregen van Vincent Kempers. Voor het invullen van de landenlijst van het formulier wist ik dat een loop een goede optie was. Het lukte mij niet direct om een juiste loop te schrijven en zag ik uiteindelijk niet meer wat ik nu fout deed. Hier heeft hij mij bij geholpen. 

Daarnaast had ik uitgezocht welk event ik het beste kon gebruiken voor een formulier, dat was het change event. Echter had ik deze nog nooit gebruikt en wist ik niet zo goed hoe ik deze moest toepassen. Na wat mislukte pogingen heeft vincent heeft mij hier ook bij geholpen. 

Voor de herkansing heb ik gekeken of ik een loader kon toevoegen. Dit is uiteindelijk, na het vinden van je juiste tutorial gelukt. In plaats van een pre-loader, wilde ik eigenlijk een loader die bij het laden van een nieuw land iedere keer geactiveerd werd, maar dit is mij helaas niet gelukt. Het toevoegen van een pre-loader daarin tegen wel. 
Daarnaast bleef na de selectie van een land de informatie hierover staan en werd de nieuwe informatie onderaan toegevoegd. Dat was niet zo gebruiksvriendelijk. Nu is het mij gelukt, door het aanmaken van een nieuwe functie makeContent, alleen de informatie van dat betreffende land toe te voegen. Ook na het selecteren van een nieuw land. Deze functie maakt namelijk alleen de elementen aan in de js. waarna deze met de functie die uitgevoerd word, bij het change event ingevuld worden met de juiste informatie. 

Uiteindelijk ben ik best veel tijd kwijt geweest met deze opdracht. Frontend is niet mijn sterkste vak, waardoor ik vaak veel informatie moet lezen of verschillende tutorials moet bekijken voor ik iets begrijp. Ik had redelijk ambitieuse doelen voor mijn eindopdracht, maar helaas is niet alles gelukt zoals ik wilde. Uiteindelijk ben ik wel tevreden met wat ik heb neergezet, maar vind ik het jammer dat het niet helemaal zo is geworden, zoals ik het in mijn hoofd had. 

---
- [Markup cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Getting started with GitHub Pages](https://guides.github.com/features/pages/)
