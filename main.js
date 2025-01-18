const liste = [
  "morgane",
  "solal",
  "noélie",
  "ilian",
  "lisa",
  "amaya",
  "lola",
  "alyssa",
  "nathan",
  "antoine",
  "titouan",
  "bruce",
  "emilie",
  "ethan",
  "clara",
  "luce",
  "karla",
  "dorian",
  "mila",
  "pauline",
  "gerald",
  "baptiste",
  "enzo",
  "bernard",
  "mamie",
  "thibaut",
  "pia",
  "sandra",
  "guilhem",
  "laetitia",
  "guillaume",
  "helene",
  "valerie",
  "christophe",
  "charlène",
  "william",
  "jade",
];

function normalizeString(input) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

document.querySelector("#recherche").addEventListener("click", function () {
  const input = document.querySelector("#input-r");
  const prenomNormalized = normalizeString(input.value);
  console.log(prenomNormalized);
  if (
    liste.map((prenom) => normalizeString(prenom)).includes(prenomNormalized)
  ) {
    console.log("le prenom existe");

    // Stocker le prénom dans localStorage
    localStorage.setItem("prenom", input.value);

    // Rediriger vers la page du questionnaire
    window.location.href = "questionnaire.html";
  } else {
    const erreur = document.querySelector("#erreur");
    erreur.innerHTML =
      "Le nom est mal écrit ou n'existe pas. Contactez le 06 95 92 48 31 si l'erreur persiste ";
  }
});
// Récupérer le prénom depuis le localStorage
const prenom = localStorage.getItem("prenom");

// Afficher le prénom dans un élément de la page (par exemple dans un span)
const span = document.querySelector("#prenom");
if (prenom) {
  span.innerHTML = prenom;
}

console.log(prenom); // Affiche le prénom dans la console pour vérification
