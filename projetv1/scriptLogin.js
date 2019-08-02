$(document).ready(function() {

    //Mettre les objets dans des variables
    var password1 = $("#password1");
    var email1 = $("#email1");
    var bouton1 = $("#seConnecter");

    //Fonction vérif champ non vide

    function verifierEmail1() {
        if (email1.val() == "") {
            $("#email1_feedback").text("Veuillez renseigner votre Email");
            email1.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        }
    }

    function verifierPassword1() {
        if (password1.val() == "") {
            $("#password1_feedback").text("Veuillez renseigner votre password");
            password1.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        }
    }

    bouton1.click(function(event) { // Lors de l'événement click bouton
        verifierEmail1();
        verifierPassword1();
    });


});