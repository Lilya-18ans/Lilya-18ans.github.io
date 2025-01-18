const span = document.querySelector("#prenom");

// Récupérer le prénom depuis le localStorage
const prenom = localStorage.getItem("prenom");

if (prenom) {
  span.innerHTML = prenom;
  console.log(prenom);
} else {
  // Si le prénom n'est pas trouvé, tu peux gérer cette situation (par exemple, rediriger l'utilisateur)
  window.location.href = "index.html"; // Rediriger vers la page d'accueil si le prénom est introuvable
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupérer les valeurs des inputs
  const nom = document.getElementById("nom").value;
  const presence = document.getElementById("presence").value;
  const musique = document.getElementById("musique").value;

  // Utiliser le prénom récupéré depuis localStorage
  const roleMention = "<@&1328439837413478484>"; // Remplacez par l'ID du rôle

  // Créer un message pour Discord avec la mention du rôle
  const message = {
    content: `${roleMention}\n\nNouvelle réponse pour : **${prenom}**  ${nom}\n\n**Présence**: ${presence}\n\n**Musique suggérée**: ${
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
