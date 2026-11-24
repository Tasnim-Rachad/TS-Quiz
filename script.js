// un "total" par question, donc total = 16
let compteurs = document.getElementsByClassName("total");
let total = compteurs.length;

for (let i = 0; i < total; i++) {
  compteurs[i].textContent = String(total);
}


//https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms
//https://www.w3schools.com/html/html_forms.asp
//https://www.w3schools.com/quiztest/default.asp (ctrl-shift-I)
const banqueRadio = [
  {
    question: "Quelle instruction permet de déclarer une variable en JavaScript ?",
    options: ["var", "let", "const", "function"],
    reponse: "1"
  },
  {
    question: "Quel symbole permet de vérifier l'égalité stricte ?",
    options: ["=", "==", "===", "!="],
    reponse: "2"
  },
  {
    question: "Que est ce que DOM signifie ?",
    options: ["Document Object Model", "Document Object Modulation", "Document Operating Module", "Document Option Model"],
    reponse: "0"
  },
  {
    question: "Quelle méthode permet d'afficher un message dans la console ?",
    options: ["alert()", "console.log()", "prompt()", "document.write()"],
    reponse: "1"
  },
   {
    question: "Quel opérateur permet de vérifier si une valeur est différente d'une autre sans conversion de type ?",
    options: ["!=", "=", "!==", "=="],
    reponse: "2"
  },
  {
    question: "Quelle instruction permet de déclarer une constante en JavaScript ?",
    options: ["let", "const", "var", "define"],
    reponse: "1"
  },
  {
    question: "Quelle est la méthode correctement écrite pour sélectionner des éléments HTML dans le DOM ?",
    options: ["getElementById", "GetElementById", "getelementbyid", "getelementbyID"],
    reponse: "0"
  },
  {
    question: "Quel mot-clé permet de sortir d'une fonction en retournant une valeur ?",
    options: ["break", "continue", "return", "value"],
    reponse: "2"
  },
  {
    question: "Quelle propriété permet de modifier le contenu textuel d'un élément HTML ?",
    options: ["value", "textContent", "className", "style"],
    reponse: "1"
  },
  {
    question: "Quelle méthode permet d'ajouter un événement à un élément HTML ?",
    options: ["addEventListener()", "addEvent()", "createEvent()", "onEvent()"],
    reponse: "0"
  }
];

const banqueCases = [
  {
    question: "Quelle méthode permet de sélectionner un élément HTML grâce à son identifiant ?",
    options: ["querySelectorAll()", "getElementById()", "getElementsByClassName()", "createElement()"],
    reponse: "1"
  },
  {
    question: "Lesquels de ces éléments sont des événements JavaScript ?",
    options: ["click", "mouseover", "console.log", "value"],
    reponse: ["0", "1"]
  },
  {
    question: "Quels mots-clés permettent de déclarer des variables en JavaScript ?",
    options: ["let", "const", "variable", "function"],
    reponse: ["0", "1"]
  },
  {
    question: "Lesquelles de ces méthodes permettent de sélectionner des éléments dans le DOM ?",
    options: ["querySelector()", "querySelectorAll()", "console.log()", "alert()"],
    reponse: ["0", "1"]
  },
  {
    question: "Quels événements peuvent être déclenchés par une action de l'utilisateur ?",
    options: ["click", "keydown", "innerHTML", "mouseover"],
    reponse: ["0", "1", "3"]
  },
  {
    question: "Quelles propriétés permettent de modifier le contenu d'un élément HTML ?",
    options: ["innerHTML", "textContent", "console", "outerHTML"],
    reponse: ["0", "1", "3"]
  },
  {
    question: "Lesquelles de ces méthodes permettent de modifier les classes CSS d'un élément ?",
    options: ["classList.add()", "classList.remove()", "classList.toggle()", "getElementById()"],
    reponse: ["0", "1", "2"]
  },
  {
    question: "Quels types de boucles existent en JavaScript ?",
    options: ["for", "while", "repeat", "do...while"],
    reponse: ["0", "1", "3"]
  }
];

const banqueMenu = [
  {
    question: "Quelle propriété permet de lire le contenu d'un champ input ?",
    options: ["innerHTML", "value", "textContent"],
    reponse: "1"
  },
  {
    question: "Quel événement JavaScript se déclenche lors d'un clic ?",
    options: ["click", "change", "submit"],
    reponse: "0"
  },
  {
    question: "Quel mot-clé permet de créer une fonction classique ?",
    options: ["const", "return", "function"],
    reponse: "2"
  },
  {
    question: "Quelle méthode permet de sélectionner un élément avec un sélecteur CSS ?",
    options: ["querySelector()", "getElementById()", "createElement()"],
    reponse: "0"
  },
  {
    question: "Quelle propriété permet de modifier le texte d'un élément HTML ?",
    options: ["value", "textContent", "src"],
    reponse: "1"
  },
  {
    question: "Quelle méthode permet de supprimer un élément du DOM ?",
    options: ["remove()", "delete()", "erase()"],
    reponse: "0"
  },
  {
    question: "Quelle méthode permet d'ajouter un nouvel élément HTML dans le DOM ?",
    options: ["createElement()", "remove()", "querySelector()"],
    reponse: "0"
  },
  {
    question: "Quelle propriété permet de modifier la couleur du texte avec JavaScript ?",
    options: ["element.style.color", "element.color", "element.textColor"],
    reponse: "0"
  }
];

const banqueTexte = [
  {
    question: "Quelle fonction affiche un message dans la console ?",
    reponse: "console.log"
  },
  {
    question: "Quelle instruction permet de répéter du code tant qu'une condition est vraie ?",
    reponse: "while"
  },
  {
    question: "Quelle touche du clavier ouvre les outils de développement ?",
    reponse: "F12"
  },
  {
    question: "Quel mot-clé permet de déclarer une constante ?",
    reponse: "const"
  },
  {
    question: "Quelle méthode permet de sélectionner un élément HTML par son identifiant ?",
    reponse: "getElementById"
  },
  {
    question: "Quelle méthode permet d'ajouter un événement à un élément HTML ?",
    reponse: "addEventListener"
  },
  {
    question: "Quelle propriété permet de récupérer le contenu textuel d'un élément HTML ?",
    reponse: "textContent"
  },
  {
    question: "Quelle méthode permet de créer un nouvel élément HTML ?",
    reponse: "createElement"
  },
  {
    question: "Quelle méthode permet d'ajouter une classe CSS à un élément HTML ?",
    reponse: "classList.add"
  }
];


// Choisir des questions au hasard
let q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16;
let dejaSoumis = false;

function choisirQuestions(banque, nombre) {
  const copie = [...banque];

  //Shuffle les questions
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }

  //Garder le nbr qu'on veut
  return copie.slice(0, nombre);
}

function nouvellesQuestions() {
  // un nombre au hasard entre 0 et la longueur - 1
  // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
  q1 = banqueRadio[Math.floor(Math.random() * banqueRadio.length)];
  q2 = banqueCases[Math.floor(Math.random() * banqueCases.length)];
  q3 = banqueTexte[Math.floor(Math.random() * banqueTexte.length)];
  q4 = banqueMenu[Math.floor(Math.random() * banqueMenu.length)];
  q5 = banqueRadio[Math.floor(Math.random() * banqueRadio.length)];
  q6 = banqueCases[Math.floor(Math.random() * banqueCases.length)];
  q7 = banqueTexte[Math.floor(Math.random() * banqueTexte.length)];
  q8 = banqueMenu[Math.floor(Math.random() * banqueMenu.length)];
  q9 = banqueRadio[Math.floor(Math.random() * banqueRadio.length)];
  q10 = banqueCases[Math.floor(Math.random() * banqueCases.length)];
  q11 = banqueTexte[Math.floor(Math.random() * banqueTexte.length)];
  q12 = banqueMenu[Math.floor(Math.random() * banqueMenu.length)];
  q13 = banqueRadio[Math.floor(Math.random() * banqueRadio.length)];
  q14 = banqueCases[Math.floor(Math.random() * banqueCases.length)];
  q15 = banqueTexte[Math.floor(Math.random() * banqueTexte.length)];
  q16 = banqueMenu[Math.floor(Math.random() * banqueMenu.length)];

  // question 1 : la question et le texte de chaque choix raadio
  document.getElementById("texteQ1").textContent = q1.question;
  const textes1 = document.getElementById("choixRadio1").getElementsByTagName("span");
  for (let i = 0; i < q1.options.length; i++) {
    textes1[i].textContent = q1.options[i];
  }

  // question 2 : choix select
  document.getElementById("texteQ2").textContent = q2.question;
  const textes2 = document.getElementById("choixCases2").getElementsByTagName("span");
  for (let i = 0; i < q2.options.length; i++) {
    textes2[i].textContent = q2.options[i];
  }

  // question 3 : réponse tapée
  document.getElementById("texteQ3").textContent = q3.question;

  // question 4 : choix déroulant
  // la première option est "Choisis une réponse", donc j'avance de 1 avec i + 1
  document.getElementById("texteQ4").textContent = q4.question;
  const menu = document.getElementById("reponse4");
  for (let i = 0; i < q4.options.length; i++) {
    menu.options[i + 1].textContent = q4.options[i];
  }
  // q5
  document.getElementById("texteQ5").textContent = q5.question;
  const textes5 = document.getElementById("choixRadio5").getElementsByTagName("span");
  for (let i = 0; i < q5.options.length; i++) {
    textes5[i].textContent = q5.options[i];
  }

  // question 6 : choix select
  document.getElementById("texteQ6").textContent = q6.question;
  const textes6 = document.getElementById("choixCases6").getElementsByTagName("span");
  for (let i = 0; i < q6.options.length; i++) {
    textes6[i].textContent = q6.options[i];
  }

  // question 7 : réponse tapée
  document.getElementById("texteQ7").textContent = q7.question;

  // question 8 : choix déroulant
  // la première option est "Choisis une réponse", donc j'avance de 1 avec i + 1
  document.getElementById("texteQ8").textContent = q8.question;
  const menu2 = document.getElementById("reponse8");
  for (let i = 0; i < q8.options.length; i++) {
    menu2.options[i + 1].textContent = q8.options[i];
  }
  //q9
  document.getElementById("texteQ9").textContent = q9.question;
  const textes9 = document.getElementById("choixRadio9").getElementsByTagName("span");
  for (let i = 0; i < q9.options.length; i++) {
    textes9[i].textContent = q9.options[i];
  }

  // question 10 : choix select
  document.getElementById("texteQ10").textContent = q10.question;
  const textes10 = document.getElementById("choixCases10").getElementsByTagName("span");
  for (let i = 0; i < q10.options.length; i++) {
    textes10[i].textContent = q10.options[i];
  }

  // question 11 : réponse tapée
  document.getElementById("texteQ11").textContent = q11.question;

  // question 12 : choix déroulant
  // la première option est "Choisis une réponse", donc j'avance de 1 avec i + 1
  document.getElementById("texteQ12").textContent = q12.question;
  const menu3 = document.getElementById("reponse12");
  for (let i = 0; i < q12.options.length; i++) {
    menu3.options[i + 1].textContent = q12.options[i];
  }
  //13
  document.getElementById("texteQ13").textContent = q13.question;
  const textes13 = document.getElementById("choixRadio13").getElementsByTagName("span");
  for (let i = 0; i < q13.options.length; i++) {
    textes13[i].textContent = q13.options[i];
  }

  // question 14 : choix select
  document.getElementById("texteQ14").textContent = q14.question;
  const textes14 = document.getElementById("choixCases14").getElementsByTagName("span");
  for (let i = 0; i < q14.options.length; i++) {
    textes14[i].textContent = q14.options[i];
  }

  // question 15 : réponse tapée
  document.getElementById("texteQ15").textContent = q15.question;

  // question 16 : choix déroulant
  // la première option est "Choisis une réponse", donc j'avance de 1 avec i + 1
  document.getElementById("texteQ16").textContent = q16.question;
  const menu4 = document.getElementById("reponse16");
  for (let i = 0; i < q16.options.length; i++) {
    menu4.options[i + 1].textContent = q16.options[i];
  }



  // effacer les réponses d'avant au début du quiz
  /*const radios = document.getElementById("choixRadio").getElementsByTagName("input");
  for (let i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
  const cases = document.getElementById("choixCases").getElementsByTagName("input");
  for (let i = 0; i < cases.length; i++) {
    cases[i].checked = false;
  }*/ //Ça c'était pour le vieux quiz - j'aimerais conserver pour utilisation ultérieure.

  document.querySelectorAll(
  '#question1 input, #question2 input, #question5 input, ' +
  '#question6 input, #question9 input, #question10 input, ' +
  '#question13 input, #question14 input'
  ).forEach(input => {
  input.checked = false;
  });
  document.getElementById("reponse3").value = "";
  document.getElementById("reponse7").value = "";
  document.getElementById("reponse11").value = "";
  document.getElementById("reponse15").value = "";

  document.getElementById("reponse4").value = "";
  document.getElementById("reponse8").value = "";
  document.getElementById("reponse12").value = "";
  document.getElementById("reponse16").value = "";

  document.getElementById("nom").value = "";

  dejaSoumis = false;

  document.getElementById("texteClassement").textContent = "";

  afficherClassement(-1);  
}


// Calculer le score
function calculerScore() {
  let score = 0;

  // question 1 : boutons radio
  const radios = document.getElementById("choixRadio1").getElementsByTagName("input");
  for (let i = 0; i < radios.length; i++) {
    if ((radios[i].checked) && (radios[i].value === q1.reponse)) {
      score++;
    }
  }

  // question 2 : on forme une chaîne de caractère pour toutes les bonnes réponses select
  // et on compare avec la réponse collée
  const cases = document.getElementById("choixCases2").getElementsByTagName("input");
  let choix = "";
  for (let i = 0; i < cases.length; i++) {
    if (cases[i].checked) {
      choix = choix + cases[i].value;
    }
  }
  let bonne = "";
  for (let i = 0; i < q2.reponse.length; i++) {
    bonne = bonne + q2.reponse[i];
  }
  if (choix === bonne) {
    score++;
  }

  // question 3 : on enlève les caractères extra du texte
  const reponse3 = document.getElementById("reponse3").value.trim();
  if (reponse3 === q3.reponse) {
    score++;
  }

  // question 4 : l'option choisie doit être correcte
  if (document.getElementById("reponse4").value === q4.reponse) {
    score++;
  }

  // question 5 : boutons radio
  const radios2 = document.getElementById("choixRadio5").getElementsByTagName("input");
  for (let i = 0; i < radios2.length; i++) {
    if ((radios2[i].checked) && (radios2[i].value === q5.reponse)) {
      score++;
    }
  }

  // question 6 : on forme une chaîne de caractère pour toutes les bonnes réponses select
  // et on compare avec la réponse collée
  const cases2 = document.getElementById("choixCases6").getElementsByTagName("input");
  let choix2 = "";
  for (let i = 0; i < cases2.length; i++) {
    if (cases2[i].checked) {
      choix2 = choix2 + cases2[i].value;
    }
  }
  let bonne2 = "";
  for (let i = 0; i < q6.reponse.length; i++) {
    bonne2 = bonne2 + q6.reponse[i];
  }
  if (choix2 === bonne2) {
    score++;
  }

  // question 7 : on enlève les caractères extra du texte
  const reponse7 = document.getElementById("reponse7").value.trim();
  if (reponse7 === q7.reponse) {
    score++;
  }

  // question 8 : l'option choisie doit être correcte
  if (document.getElementById("reponse8").value === q8.reponse) {
    score++;
  }

  // question 9 : boutons radio
  const radios3 = document.getElementById("choixRadio9").getElementsByTagName("input");
  for (let i = 0; i < radios3.length; i++) {
    if ((radios3[i].checked) && (radios3[i].value === q9.reponse)) {
      score++;
    }
  }

  // question 10 : on forme une chaîne de caractère pour toutes les bonnes réponses select
  // et on compare avec la réponse collée
  const cases3 = document.getElementById("choixCases10").getElementsByTagName("input");
  let choix3 = "";
  for (let i = 0; i < cases3.length; i++) {
    if (cases3[i].checked) {
      choix3 = choix3 + cases3[i].value;
    }
  }
  let bonne3 = "";
  for (let i = 0; i < q10.reponse.length; i++) {
    bonne3 = bonne3 + q10.reponse[i];
  }
  if (choix3 === bonne3) {
    score++;
  }

  // question 11 : on enlève les caractères extra du texte
  const reponse11 = document.getElementById("reponse11").value.trim();
  if (reponse11 === q11.reponse) {
    score++;
  }

  // question 12 : l'option choisie doit être correcte
  if (document.getElementById("reponse12").value === q12.reponse) {
    score++;
  }

  // question 13 : boutons radio
  const radios4 = document.getElementById("choixRadio13").getElementsByTagName("input");
  for (let i = 0; i < radios4.length; i++) {
    if ((radios4[i].checked) && (radios4[i].value === q13.reponse)) {
      score++;
    }
  }

  // question 14 : on forme une chaîne de caractère pour toutes les bonnes réponses select
  // et on compare avec la réponse collée
  const cases4 = document.getElementById("choixCases14").getElementsByTagName("input");
  let choix4 = "";
  for (let i = 0; i < cases4.length; i++) {
    if (cases4[i].checked) {
      choix4 = choix4 + cases4[i].value;
    }
  }
  let bonne4 = "";
  for (let i = 0; i < q14.reponse.length; i++) {
    bonne4 = bonne4 + q14.reponse[i];
  }
  if (choix4 === bonne4) {
    score++;
  }

  // question 15 : on enlève les caractères extra du texte
  const reponse15 = document.getElementById("reponse15").value.trim();
  if (reponse15 === q15.reponse) {
    score++;
  }

  // question 16 : l'option choisie doit être correcte
  if (document.getElementById("reponse16").value === q16.reponse) {
    score++;
  }

  return score;
}


// Classement leaderboard
const classement = [
  { nom: "Ada", score: 16 },
  { nom: "Jean_Guy_Roulevite", score: 16 },
  { nom: "C'est Hess Hess", score: 12 },
  { nom: "Lisa Su", score: 12 },
  { nom: "Fier_Renard", score: 8 },
  { nom: "Mapetitesoeursuperénervante", score: 6 },
  { nom: "Hors di Nator", score: 0 }
];

function afficherClassement(place) {
  const lignes = document.getElementsByClassName("ligne");
  const rangs = document.getElementsByClassName("rang");
  const joueurs = document.getElementsByClassName("joueur");
  const scores = document.getElementsByClassName("score");

  // on montre les 5 premiers
  for (let i = 0; i < lignes.length; i++) {
    if (i < classement.length && i < lignes.length) {
      rangs[i].textContent = String(i + 1);
      joueurs[i].textContent = classement[i].nom;
      scores[i].textContent = classement[i].score + " / " + total;
    } else {
      rangs[i].textContent = "-";
      joueurs[i].textContent = "-";
      scores[i].textContent = "-";
    }

    // le joueur en gras
    if (i === place) {
      lignes[i].style.fontWeight = "bold";
    } else {
      lignes[i].style.fontWeight = "normal";
    }
  }
}

function soumettre(evenement) {
  //evenement.preventDefault(); // on reste sur cette page
  
  const nom = document.getElementById("nom").value.trim();

  if (nom === "") {
    alert("Inscris ton nom avant de soumettre!");
    return;
  }

  if (dejaSoumis) {// déjà dans le classement
    return; 
  }

  const score = calculerScore();
  // On classe l'utilisateur dans le leaderboard
  let place = classement.length; // sinon, à la fin
  for (let i = 0; i < classement.length; i++) {
    if (score > classement[i].score) {
      place = i;
      break;
    }
  }

  // ajouter le joueur à sa place avec splice(indice, nbr de places, contenu)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  // https://www.w3schools.com/jsref/jsref_splice.asp
  classement.splice(place, 0, { nom: nom, score: score });
  classement.splice(5);
  dejaSoumis = true;

  document.getElementById("texteClassement").textContent =
    nom + ", tu as " + score + " / " + total + " et tu es #" + (place + 1) +
    " sur " + classement.length + " joueurs. Ctrl-R la page pour générer 1 noovo qwuiz.";

  afficherClassement(place);
}


// Au début
nouvellesQuestions();
afficherClassement(-1); // -1 pour ne pas classer l'utilisateur tout de suite

document.getElementById("boutonSoumettre").addEventListener("click", soumettre);
document.getElementById("boutonRejouer").addEventListener("click", nouvellesQuestions);