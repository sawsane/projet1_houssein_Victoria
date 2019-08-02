$(document).ready(function() {

    //Mettre les objets dans des variables
    var nom = $("#nom");
    var prenom = $("#prenom");
    var password = $("#password2");
    var email = $("#email2");
    var confirm = $("#confirmPassword");
    var bouton = $("#creerCompte");

    //Fonction vérif champ non vide

    function verifierNom() {
        if (nom.val() == "") {
            $("#nom_feedback").text("Champ 'Nom' vide");
            nom.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        } else if (nom.val().trim().length < 3) {
            alert("Le nom doit être supérieur à 3 caractères");
            nom.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        } else {
            $("#nom_feedback").text("");
            nom.css({
                borderColor: "green",
                color: "green"
            });
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
        } else if (prenom.val().trim().length < 3) {
            alert("Le prenom doit être supérieur à 3 caractères");
            prenom.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        } else {
            $("#prenom_feedback").text("");
            prenom.css({
                borderColor: "green",
                color: "green"
            });
        }
    }


    function verifierEmail() {
        var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
        if (!regex.test(email.val())) {
            $("#email2_feedback").text("Email incorrect");
            email.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();
        } else {
            $("#email2_feedback").text("");
            email.css({
                borderColor: "green",
                color: "green"
            });
        }
    }

    function verifierPassword() {
        if (password.val() == "") {
            $("#password2_feedback").text("Champ 'Password' vide");
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
            $("#password2_feedback").text("");
            password.css({
                borderColor: "green",
                color: "green"
            });
        }
    }


    //Vérif confirmation password = password
    confirm.keyup(function() {
        if (password.val() == confirm.val()) {
            confirm.css({
                borderColor: "green",
                color: "green"
            });
        } else {
            $("#confirmPassword_feedback").text("Le mot de passe doit être identique");
            confirm.css({
                borderColor: "red",
                color: "red"
            });
            event.preventDefault();

        }
    });

    bouton.click(function(event) { // Lors de l'événement click bouton
        verifierNom();
        verifierPrenom();
        verifierEmail();
        verifierPassword();

    });



















});