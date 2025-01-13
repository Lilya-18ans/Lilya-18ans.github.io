const span = document.querySelector("#prenom");

const url = window.location.search;
const parametre = new URLSearchParams(url);
span.innerHTML = parametre.get("prenom");
console.log(parametre.get("prenom"));
