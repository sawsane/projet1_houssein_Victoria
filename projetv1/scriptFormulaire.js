$(document).ready(function() {

    //Mettre les objets dans des variables
    var nom = $("#nom");
    var prenom = $("#prenom");
    var rue = $("#rue");
    var code = $("#codePostal");
    var ville = $("#ville");
    var password = $("#password");
    var email = $("#email");
    var bouton = $("#validerForm");

    //Fonction vérif champ non vide

    function verifierNom() {
        if (nom.val() == "") {
            $("#nom_feedback").text("Champ 'Nom' vide");
            nom.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        }
    }

    function verifierPrenom() {
        if (prenom.val() == "") {
            $("#prenom_feedback").text("Champ 'Prenom' vide");
            prenom.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        }
    }

    function verifierRue() {
        if (rue.val() == "") {
            $("#rue_feedback").text("Champ 'Rue' vide");
            rue.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        }
    }


    function verifierCode() {
        if (code.val() == "") {
            $("#code_feedback").text("Champ 'Code Postal' vide");
            code.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        }
    }

    function verifierVille() {
        if (ville.val() == "") {
            $("#ville_feedback").text("Champ 'Ville' vide");
            ville.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        }
    }



    function verifierEmail() {
        var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
        if (!regex.test(email.val())) {
            $("#email_feedback").text("Email incorrect");
            email.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        } else {
            $("#email_feedback").text("");
            email.css({
                borderColor: "green",
                color: "green"
            });
        }
    }

    function verifierPassword() {
        if (password.val() == "") {
            $("#password_feedback").text("Champ 'Password' vide");
            password.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        } else if (password.val().trim().length < 5) {
            alert("Le mot de passe doit contenir 5 chiffres");
            password.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        } else {
            $("#password_feedback").text("");
            password.css({
                borderColor: "green",
                color: "green"
            });
        }
    }

    bouton.click(function(event) { // Lors de l'événement click bouton
        verifierNom();
        verifierPrenom();
        verifierRue();
        verifierCode();
        verifierVille();
        verifierEmail();
        verifierPassword();

    });
});