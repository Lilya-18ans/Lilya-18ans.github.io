const span = document.querySelector("#prenom");

const url = window.location.search;
const parametre = new URLSearchParams(url);
span.innerHTML = parametre.get("prenom");
console.log(parametre.get("prenom"));

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupérer les valeurs des inputs
  const nom = document.getElementById("nom").value;
  const presence = document.getElementById("presence").value;
  const musique = document.getElementById("musique").value;
  const prenom = parametre.get("prenom");

  // Créer un message pour Discord
  const message = {
    content: `Nouvelle soumission du questionnaire pour **${prenom}**:\n\n**Nom**: ${nom}\n**Présence**: ${presence}\n**Musique suggérée**: ${
      musique || "aucune"
    }`,
  };

  // Envoi des données au webhook Discord
  fetch(
    "https://discordapp.com/api/webhooks/1328417047432134747/lLCQSv_yUvq583buKRDy-iR3eZhFlLKCs-TWNf40oA3ix6qIjHtAFYe3ExBOjge2n3hx",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    }
  )
    .then((response) => {
      if (response.ok) {
        alert("Votre soumission a été envoyée avec succès !");
      } else {
        alert("Erreur lors de l'envoi de la soumission.");
      }
    })
    .catch((error) => {
      console.error("Erreur:", error);
      alert("Une erreur est survenue.");
    });
});
