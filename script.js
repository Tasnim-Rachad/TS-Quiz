// un "total" par question, donc total = 4
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
  }
];

const banqueCases = [
  {
    question: "Quelle est la méthode correctement écrite pour sélectionner des éléments HTML dans le DOM ?",
    options: ["getElementById", "GetElementById", "getelementbyid", "getelementbyID"],
    reponse: ["0"]
  },
  {
    question: "Lesquels de ces éléments sont des événements JavaScript ?",
    options: ["click", "mouseover", "console.log", "value"],
    reponse: ["0", "1"]
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
  }
];


// Choisir des questions au hasard
let q1, q2, q3, q4;
let dejaSoumis = false;

function nouvellesQuestions() {
  // un nombre au hasard entre 0 et la longueur - 1
  // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
  q1 = banqueRadio[Math.floor(Math.random() * banqueRadio.length)];
  q2 = banqueCases[Math.floor(Math.random() * banqueCases.length)];
  q3 = banqueTexte[Math.floor(Math.random() * banqueTexte.length)];
  q4 = banqueMenu[Math.floor(Math.random() * banqueMenu.length)];

  // question 1 : la question et le texte de chaque choix raadio
  document.getElementById("texteQ1").textContent = q1.question;
  const textes1 = document.getElementById("choixRadio").getElementsByTagName("span");
  for (let i = 0; i < q1.options.length; i++) {
    textes1[i].textContent = q1.options[i];
  }

  // question 2 : choix select
  document.getElementById("texteQ2").textContent = q2.question;
  const textes2 = document.getElementById("choixCases").getElementsByTagName("span");
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

  // effacer les réponses d'avant au début du quiz
  const radios = document.getElementById("choixRadio").getElementsByTagName("input");
  for (let i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
  const cases = document.getElementById("choixCases").getElementsByTagName("input");
  for (let i = 0; i < cases.length; i++) {
    cases[i].checked = false;
  }
  document.getElementById("reponse3").value = "";
  document.getElementById("reponse4").value = "";
  document.getElementById("nom").value = "";

  dejaSoumis = false;
}


// Calculer le score
function calculerScore() {
  let score = 0;

  // question 1 : boutons radio
  const radios = document.getElementById("choixRadio").getElementsByTagName("input");
  for (let i = 0; i < radios.length; i++) {
    if ((radios[i].checked) && (radios[i].value === q1.reponse)) {
      score++;
    }
  }

  // question 2 : on forme une chaîne de caractère pour toutes les bonnes réponses select
  // et on compare avec la réponse collée
  const cases = document.getElementById("choixCases").getElementsByTagName("input");
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

  return score;
}


// Classement leaderboard
const classement = [
  { nom: "Ada", score: 4 },
  { nom: "Jean_Guy_Roulevite", score: 4 },
  { nom: "C'est Hess Hess", score: 3 },
  { nom: "Lisa Su", score: 3 },
  { nom: "Fier_Renard", score: 2 },
  { nom: "Mapetitesoeursuperénervante", score: 1 },
  { nom: "Hors di Nator", score: 0 }
];

function afficherClassement(place) {
  const lignes = document.getElementsByClassName("ligne");
  const rangs = document.getElementsByClassName("rang");
  const joueurs = document.getElementsByClassName("joueur");
  const scores = document.getElementsByClassName("score");

  // on montre les 5 premiers
  for (let i = 0; i < lignes.length; i++) {
    if (i < classement.length) {
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
  const nom = document.getElementById("nom").value.trim();

  if (nom === "") {
    evenement.preventDefault(); // on reste sur cette page
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
  dejaSoumis = true;

  document.getElementById("texteClassement").textContent =
    nom + ", tu as " + score + " / " + total + " et tu es #" + (place + 1) +
    " sur " + classement.length + " joueurs.";

  afficherClassement(place);
}


// Au début
nouvellesQuestions();
afficherClassement(-1); // -1 pour ne pas classer l'utilisateur tout de suite

document.getElementById("boutonSoumettre").addEventListener("click", soumettre);
document.getElementById("boutonRejouer").addEventListener("click", nouvellesQuestions);