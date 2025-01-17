const liste = [
  "morgane",
  "solal",
  "noélie",
  "ilian",
  "noah",
  "amaya",
  "lola",
  "alyssa",
  "nathan",
  "antoine",
  "titouan",
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
    .replace(/[:-_.~]/g, "")
    .toLowerCase();
}
document.querySelector("#recherche").addEventListener("click", function () {
  const input = document.querySelector("#input-r");
  if (
    liste
      .map((prenom) => normalizeString(prenom))
      .includes(normalizeString(input.value))
  ) {
    console.log("le prenom existe");
    window.location.href = "questionnaire.html?prenom=" + input.value;
  } else {
    const erreur = document.querySelector("#erreur");
    erreur.innerHTML =
      "Le nom est mal écrit ou n'existe pas. Contactez le 06 95 92 48 31 si l'erreur persiste ";
  }
});
