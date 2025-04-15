<script>
// Lorsque le document est prêt
document.addEventListener("DOMContentLoaded", function() {
    // Création du bouton "Retour en haut"
    let button = document.createElement("button");
    button.innerHTML = "Retour en haut";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px";
    button.style.fontSize = "16px";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#333";
    button.style.color = "white";
    button.style.border = "none";
    button.style.display = "none"; // Par défaut, le bouton est caché

    // Ajouter le bouton à la page
    document.body.appendChild(button);

    // Afficher le bouton quand on fait défiler la page vers le bas
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };

    // Quand l'utilisateur clique sur le bouton, remonter en haut
    button.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
    /* fichier: style.css */
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f8f8f8;
    }

    .menu .item {
      background: white;
      border: 1px solid #ccc;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 8px;
    }

    button {
      background-color: #28a745;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    ul#panier {
      list-style: none;
      padding-left: 0;
    }

</script>
