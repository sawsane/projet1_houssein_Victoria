$(document).ready(function() {

    //Mettre les objets dans des variables
    var domicile = $("#domicile").is(":checked");
    var adresse = $(".adresseLivraison");
    var bouton3 = $("#validerLivraison");

    //Fonction vérif champ non vide

    function verifierLivraison(isChecked) {
        if (!isChecked && adresse.val() == "") {
            $("#livraison_feedback").text("Veuillez confirmer l'adresse de livraison");
            adresse.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        }
    }

    bouton3.click(function(event) { // Lors de l'événement click bouton
        verifierLivraison(isChecked);
    });


});