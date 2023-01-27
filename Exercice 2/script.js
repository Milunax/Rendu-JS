//modification
const myQuery = document.querySelector("#p1");
myQuery.innerHTML = "CECI EST LE NOUVEAU CONTENU DU PARAGRAPHE QUE J'AI MODIFIÉ";

//insertion
myQuery.insertAdjacentHTML("afterend", "<p> CECI EST UN PARAGRAPHE QUE J'AI AJOUTÉ DANS MA PAGE GRACE AU SCRIPT JS</p> ");

//supprimer
const myQueryToDelete = document.querySelector("#p2").remove();