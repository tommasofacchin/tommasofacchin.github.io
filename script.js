
const title = document.getElementById("title");
const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const date3 = document.getElementById("date3");
const date4 = document.getElementById("date4");
const subtitle1 = document.getElementById("subtitle1");
const subtitle2 = document.getElementById("subtitle2");
const subtitle3 = document.getElementById("subtitle3");
const subtitle4 = document.getElementById("subtitle4");
const subtitle5 = document.getElementById("subtitle5");
const desc1 = document.getElementById("desc1");
const desc2 = document.getElementById("desc2");
const desc3 = document.getElementById("desc3");
const desc4 = document.getElementById("desc4");
const desc5 = document.getElementById("desc5");
const contact1 = document.getElementById("idContact1");
const contact2 = document.getElementById("idContact2");
const myDescription = document.getElementById("myDescription");
const soft1 = document.getElementById("soft1");
const soft2 = document.getElementById("soft2");
const soft3 = document.getElementById("soft3");
const soft4 = document.getElementById("soft4");
const soft5 = document.getElementById("soft5");
const soft6 = document.getElementById("soft6");
const soft7 = document.getElementById("soft7");
const soft8 = document.getElementById("soft8");




const languageToggleBtn = document.getElementById("language-toggle");

let isEnglish = true;

languageToggleBtn.addEventListener("click", () => {
  isEnglish = !isEnglish; 
  
  if (isEnglish) {

    document.getElementById("imgIT").classList.toggle("show");
    document.getElementById("imgGB").classList.toggle("show");

    date1.textContent = "(June 2021)";
    date2.textContent = "(July 2023)";
    date3.textContent = "(2022 - current)";
    date4.textContent = "(January 2020)";
    subtitle1.textContent = "IT and telecommunications";
    subtitle2.textContent = "Bachelor's degree - data science";
    subtitle3.textContent = "Android App Development";
    subtitle4.textContent = "Software Development";
    subtitle5.textContent = "School internship";
    desc1.textContent = "Technical institute with a specialization on IT and communication where I acquired practical and theoretical skills in various fields such as programming, algorithm design, database management, and computer security.";
    desc2.textContent = "Bachelor's degree in Data Science from the University of Venice, where I gained specialized skills in programming, mathematics, data analysis, data mining, and neural networks. Key courses included: Calculus, Linear Algebra, Statistics, Data Analysis, Data and Web Mining, and Computational Intelligence.";
    desc3.textContent = "Three week internship where I had the opportunity to develop android applications using the flutter framework. My work included designing and developing customized applications using the Dart programming language, and I gained a several skills such as knowledge of the framework and the ability to create custom layouts and widgets. I also learned how to work in a professional development environment.";
    desc4.textContent = "One-month internship where I learned software and web development,  I also managed documents for digitalization 4.0. Using Windows Form and the C# language I developed a software with a user interface that could manage a web dashboard. I created the structure of this dashboard using HTML, CSS, and JavaScript. In this internship I learned how to work in a professional environment and collaborate with other team members";
    desc5.textContent = "two-week school internship in which i organized personalized tablets and installated custom applications for couriers.";
    contact1.textContent = "CONTACTS";
    contact2.textContent = "CONTACT ME";
    myDescription.textContent = "I’m a software developer studying machine learning, eager to explore its fascinating aspects.";
    soft1.textContent = "Visual studio is the main software that i use to write code.";
    soft2.textContent = "environment I used to develop mobile applications.";
    soft3.textContent = "framework I used to develop mobile applications.";
    soft4.textContent = "i use visual studio code to write html,css javascript e PHP.";
    soft5.textContent = "my first adobe software, I always had fun playing with it.";
    soft6.textContent = "I use premiere pro daily to edit all my youtube and instagram videos.";
    soft7.textContent = "I use it mainly for astrophotography and 2d asset design for my games.";
    soft8.textContent = "my favorite software, I spend most of my free time creating games on Unity.";

  
  } else {
    
    document.getElementById("imgIT").classList.toggle("show");
    document.getElementById("imgGB").classList.toggle("show");


    date1.textContent = "(Giugno 2021)";
    date2.textContent = "(Luglio 2023)";
    date3.textContent = "(2022 - corrente)";
    date4.textContent = "(Gennaio 2020)";
    subtitle1.textContent = "informatica e telecomunicazioni";
    subtitle2.textContent = "laurea in data science";
    subtitle3.textContent = "sviluppo applicazioni android";
    subtitle4.textContent = "sviluppo software";
    subtitle5.textContent = "Alternanza Scuola-Lavoro";
    desc1.textContent = "Istituto tecnico superiore con indirizzo informatico in cui ho acquisito competenze pratiche e teoriche in diversi ambiti, come programmazione, progettazione di algoritmi, gestione di database e sicurezza informatica.";
    desc2.textContent = "Laurea triennale in data science all'università di venezia, dove ho acquisito competenze specializzate in programmazione, matematica, analisi dei dati e reti neurali";
    desc3.textContent = "Stage di 3 settimane in cui ho avuto l'opportunità di sviluppare applicazioni Android utilizzando il framework Flutter. il mio lavoro ha incluso la progettazione e lo sviluppo di applicazioni personalizzate con linguaggio Dart, acquisendo una vasta gamma di competenze in Flutter, come la conoscenza del framework, la capacità di creare layout e widget personalizzati. Ho inoltre imparato a lavorare in un ambiente di sviluppo professionale.";
    desc4.textContent = "Stage di un mese durante il quale ho sviluppato un software e una dashboard web per l’azienda, ho inoltre gestito documenti per la digitalizzazione 4.0. Il software sviluppato in Windows Form, con linguaggio C#,  aveva la funzionalità di gestire la dashboard attraverso un interfaccia utente, la struttura di questa dashboard l’ho realizzata utilizzando HTML, css e javascript. Ho imparato a lavorare in un ambiente di sviluppo professionale e a collaborare con altri membri del team.";
    desc5.textContent = "Stage scolatico in azienda di 2 settimane in cui ho lavorato nella preparazione di tablet personalizzati e installazione di applicazioni per corrieri.";
    contact1.textContent = "CONTATTI";
    contact2.textContent = "CONTATTAMI";
    myDescription.textContent = "Sono uno sviluppatore software e sto studiando machine learning, desideroso di esplorare questo mondo.";
    soft1.textContent = "Visual studio è il software che uso principalmente per scrivere codice.";
    soft2.textContent = "Ambiente che ho utilizzato per sviluppare applicazioni mobile.";
    soft3.textContent = "framework che ho utilizzato per sviluppare applicazioni mobile android.";
    soft4.textContent = "utilizzo Visual studio code per programmare in html,css javascript e PHP.";
    soft5.textContent = "il mio primo software adobe, fin da piccolo mi divertivo ad usarlo.";
    soft6.textContent = "utilizzo premier pro giornalmente per editare tutti i miei video su instagram e youtube.";
    soft7.textContent = "Lo utilizzo principalmente per astrofotografia e disegno asset 2d per i miei videogiochi.";
    soft8.textContent = "il mio software preferito, passo gran parte del mio tempo libero a creare giochi su Unity.";

  
  
  
  }
});






var pallina = document.getElementById('pallina');
var delay = 200; // tempo di ritardo in millisecondi

document.addEventListener('mousemove', function(event) {
  setTimeout(function() {
    var x = event.clientX - (pallina.offsetWidth / 2);
    var y = event.clientY - (pallina.offsetHeight / 2);
    pallina.style.left = x + 'px';
    pallina.style.top = y + 'px';
  }, delay);
});







const firstRow = document.querySelector('.firstRow');
const secondRow = document.querySelector('.secondRow');
let isVisible = false;

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.addEventListener('scroll', () => {
    const distanceFromTop = firstRow.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (distanceFromTop < windowHeight * 0.9 && !isVisible) {
      isVisible = true;
      firstRow.style.transition = 'none';
      secondRow.style.transition = 'none';
      requestAnimationFrame(updateElementPosition);
    } else if (distanceFromTop > windowHeight * 0.8 && isVisible) {
      isVisible = false;
      firstRow.style.transition = 'none';
      secondRow.style.transition = 'none';
    }
  });
}

function updateElementPosition() {
  if (isVisible) {
    const distanceFromTop = firstRow.getBoundingClientRect().top;
    const distanceToMove = distanceFromTop * 0.1;

    firstRow.style.transform = `translateX(${distanceToMove}px)`;
    secondRow.style.transform = `translateX(${-distanceToMove}px)`;
  }

  requestAnimationFrame(updateElementPosition);
}


const knowHowIcons = document.querySelectorAll('.iconShow');

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

knowHowIcons.forEach(icon => {
  observer1.observe(icon);
});









// Seleziona l'elemento della linea
var socialLine = document.querySelector('.socialLine1');

// Calcola l'altezza massima della linea
var maxLineHeight = 180;

// Calcola la posizione verticale di inizio animazione
var startPosition = window.innerHeight - 400;

// Calcola la posizione verticale di fine animazione
var endPosition = startPosition + 2000;

// Inizializza la variabile per memorizzare l'altezza della linea
var prevLineHeight = 0;

// Aggiungi un gestore di eventi per l'evento di scorrimento della finestra
window.addEventListener('scroll', function() {
  // Calcola la posizione verticale corrente dell'utente
  var scrollPosition = window.scrollY + window.innerHeight / 2;
  // Calcola la percentuale di avanzamento in base alla posizione verticale corrente
  var scrollPercentage = (scrollPosition - startPosition) / (endPosition - startPosition);
  // Limita la percentuale di avanzamento tra 0 e 1
  scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);
  // Calcola la nuova altezza della linea in base alla percentuale di avanzamento
  var lineHeight = scrollPercentage * maxLineHeight;
  // Imposta la nuova altezza della linea solo se la nuova altezza è maggiore o uguale alla precedente
  if (lineHeight >= prevLineHeight) {
    socialLine.style.height = lineHeight + 'vh';
    // Aggiorna la variabile per memorizzare l'altezza della linea
    prevLineHeight = lineHeight;
  }
});


// Seleziona l'elemento della linea
var socialLine2 = document.querySelector('.socialLine2');

// Imposta la posizione di scorrimento per attivare l'animazione
var triggerPosition = 1000;

// Aggiungi un gestore di eventi per l'evento di scorrimento della finestra
window.addEventListener('scroll', function() {
  // Verifica se la posizione di scorrimento è stata raggiunta
  if (window.scrollY >= triggerPosition) {
    // Aggiungi una classe per attivare l'animazione
    socialLine2.classList.add('animate');
    // Rimuovi il gestore di eventi per evitare che l'animazione si ripeta
    window.removeEventListener('scroll', arguments.callee);
  }
});

// Seleziona l'elemento della linea
var socialLine4 = document.querySelector('.socialLine4');

// Imposta la posizione di scorrimento per attivare l'animazione
var triggerPosition2 = 1500;

// Aggiungi un gestore di eventi per l'evento di scorrimento della finestra
window.addEventListener('scroll', function() {
  // Verifica se la posizione di scorrimento è stata raggiunta
  if (window.scrollY >= triggerPosition2) {
    // Aggiungi una classe per attivare l'animazione
    socialLine4.classList.add('animate');
    // Rimuovi il gestore di eventi per evitare che l'animazione si ripeta
    window.removeEventListener('scroll', arguments.callee);
  }
});



//home -> 100
//school -> 180
//work -> 275
//skill -> 120
//contact -> 100

// 50   230   505   625

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;


  var heart1 = document.querySelector('.heartFilled1');
  var heart2 = document.querySelector('.heartFilled2');
  var heart3 = document.querySelector('.heartFilled3');
  var heart4 = document.querySelector('.heartFilled4');

  if(scrollPosition > window.innerHeight * 0.7){
    heart1.classList.add('active'); 
  }
  else{
    heart1.classList.remove('active'); 
  }

  if(scrollPosition > window.innerHeight * 2.5){
    heart2.classList.add('active'); 
  }
  else{
    heart2.classList.remove('active'); 
  }

  if(scrollPosition > window.innerHeight * 5.2){
    heart3.classList.add('active'); 
  }
  else{
    heart3.classList.remove('active'); 
  }

  if(scrollPosition > window.innerHeight * 6.4){
    heart4.classList.add('active'); 
  }
  else{
    heart4.classList.remove('active'); 
  }


});


// 100   280   555   675
const h1 = document.querySelector('#h1');
const h2 = document.querySelector('#h2');
const h3 = document.querySelector('#h3');
const h4 = document.querySelector('#h4');

h1.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});
h2.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight *2.8,
    behavior: 'smooth'
  });
});
h3.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight *5.6,
    behavior: 'smooth'
  });
});
h4.addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight *6.75,
    behavior: 'smooth'
  });
});




window.addEventListener('scroll', function() {
  var testo = document.querySelector('.name');
  var testo2 = document.querySelector('.myDescription');
  var social = document.querySelector('.socials');
  var socialLine = document.querySelector('.socialLine3');
  var background = document.querySelector('.homePage');
  var opacita = 1 - window.scrollY / 600;
  testo.style.opacity = opacita;
  testo2.style.opacity = opacita;
  social.style.opacity = opacita;
  socialLine.style.opacity = opacita;
  background.style.opacity = opacita;
});

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i<reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;
        if(revealTop < windowHeight - revealPoint){
           reveals[i].classList.add('active'); 
        }
    }

    
    var revealDivs = document.querySelectorAll('.revealDiv');

    for(var i = 0; i<revealDivs.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = revealDivs[i].getBoundingClientRect().top;
        var revealPoint = 50;
        if(revealTop < windowHeight - revealPoint){
          revealDivs[i].classList.add('active'); 
        }
    }
}

const languagesContainer = document.querySelector('#languages');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});

observer.observe(languagesContainer);


window.addEventListener('load', function() {

    setTimeout(function() {
      document.getElementById('loader').style.transform = 'translateX(100%)';
      document.getElementById('content').style.display = 'block';

      document.getElementById("imgIT").classList.toggle("show");

      

      setTimeout(function(){
        var socialIcons = document.querySelectorAll('.social');
        for (var i = 0; i < socialIcons.length; i++) {
          socialIcons[i].classList.add('show');
        }
      }, 100);
      
    date1.textContent = "(June 2021)";
    date2.textContent = "(July 2023)";
    date3.textContent = "(2022 - current)";
    date4.textContent = "(January 2020)";
    subtitle1.textContent = "IT and telecommunications";
    subtitle2.textContent = "Bachelor's degree - computer science";
    subtitle3.textContent = "Android App Development";
    subtitle4.textContent = "Software Development";
    subtitle5.textContent = "School internship";
    desc1.textContent = "Technical institute with a specialization on IT and communication where I acquired practical and theoretical skills in various fields such as programming, algorithm design, database management, and computer security.";
    desc2.textContent = "Bachelor's degree in computer science at the university of Venice, where i acquired specialized skills in programming, mathematics, and data analysis.";
    desc3.textContent = "Three week internship where I had the opportunity to develop android applications using the flutter framework. My work included designing and developing customized applications using the Dart programming language, and I gained a several skills such as knowledge of the framework and the ability to create custom layouts and widgets. I also learned how to work in a professional development environment.";
    desc4.textContent = "One-month internship where I learned software and web development,  I also managed documents for digitalization 4.0. Using Windows Form and the C# language I developed a software with a user interface that could manage a web dashboard. I created the structure of this dashboard using HTML, CSS, and JavaScript. In this internship I learned how to work in a professional environment and collaborate with other team members";
    desc5.textContent = "two-week school internship in which i organized personalized tablets and installated custom applications for couriers.";
    contact1.textContent = "CONTACTS";
    contact2.textContent = "CONTACT ME";
    myDescription.textContent = "I am a software developer with a deep passion for computer science and eager to explore its many fascinating aspects.";
    soft1.textContent = "Visual studio is the main software that i use to write code.";
    soft2.textContent = "environment I used to develop mobile applications.";
    soft3.textContent = "framework I used to develop mobile applications.";
    soft4.textContent = "i use visual studio code to write html,css javascript e PHP.";
    soft5.textContent = "my first adobe software, I always had fun playing with it.";
    soft6.textContent = "I use premiere pro daily to edit all my youtube and instagram videos.";
    soft7.textContent = "I use it mainly for astrophotography and 2d asset design for my games.";
    soft8.textContent = "my favorite software, I spend most of my free time creating games on Unity.";
}, 100);


    

  });