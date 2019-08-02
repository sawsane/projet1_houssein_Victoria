$(function() {


    /*********************************
     ******** DOM NAVIGATION *********
     *********************************/

    // si l'on click en dehors du NODAL il disparait
    $(document).click(function(event) {
        //console.log($('#nodal-login:visible').length);
        $target = $(event.target);
        //console.log($target.closest('.shape-container').length);
        if ($target.closest('.shape-container').length == 0 && $('#nodal-login:visible').length == 1 && $('#nav-button-login:hover').length == 0) {

            $("#nodal-login").animate({
                "top": "-500px",
                "opacity": 0.0
            }, 500, "swing", function() {
                $("#nodal-login").hide();

                $("#nodal-login-shape").css("opacity", "1");
                $("#nodal-login-shape").show();

                $("#nodal-forget-shape").css("display", "none");
                $("#nodal-forget-shape").css("opacity", "0");
                $("#foret-password-text").text("Reset your password");

                $("#nodal-newUser-shape").css("display", "none");
                $("#nodal-newUser-shape").css("opacity", "0");
                $(".shape-container").css("width", "400px");
            });
        }
    });


    /*****************************
     *******  LOGIN ACTION  ******
     *****************************/

    /****** BUTTON  CONNECT   ****/
    $(".nodal-login-form").submit(function(event) {
        validateEmailField("#log-email", event);
        validatePasswordField("#login-password", event);
        if (!event.isDefaultPrevented()) {
            event.preventDefault();
            $("#nodal-login").animate({
                "top": "-500px",
                "opacity": 0.0
            }, 500, "swing", function() {
                $("#nodal-login").hide();
            });
        }
    });

    /****** BUTTON BACK ****/
    $("#back-btn-login").click(function(event) {
        event.preventDefault();
        $("#nodal-login").animate({
            "top": "-500px",
            "opacity": 0.0
        }, 500, "swing", function() {
            $("#nodal-login").hide();
        });
    });

    /******  BUTTON forgot password  *****/
    $("#foret-password").click(function() {
        $("#nodal-login-shape").animate({
            "opacity": 0.0
        }, 100, "swing", function() {
            $("#nodal-login-shape").hide();
            $("#nodal-forget-shape").css("display", "block");
            $("#nodal-forget-shape").animate({
                "opacity": 1
            }, 200, "swing");
        });
    });

    /**** NEW USER BUTTON *****/
    $("#newUser_btn").click(function() {
        $("#nodal-login-shape").animate({
            "opacity": 0.0
        }, 100, "swing", function() {
            $("#nodal-login-shape").hide();
            $(".shape-container").animate({
                "width": "900px",
            }, 200, "swing", function() {
                $("#nodal-newUser-shape").css("display", "block");
                $("#nodal-newUser-shape").animate({
                    "opacity": "1"
                }, 200, "swing");
            })
        });
    });


    /***************************
     ****** FORGET ACTION  *****
     **************************/

    // on Submit
    $(".nodal-forget-form").submit(function(event) {
        validateEmailField("#foret-email", event);
        if (!event.isDefaultPrevented()) {
            $("#foret-password-text").text("IF Email exist =>HOME ELSE new user ?");
            event.preventDefault();
        }
    });

    // on button back
    $("#back-btn-forget").click(function() {
        $("#nodal-forget-shape").css("display", "none");
        $("#nodal-forget-shape").css("opacity", "0");
        $("#foret-password-text").text("Reset your password");

        $("#nodal-login-shape").css("opacity", "1");
        $("#nodal-login-shape").css("display", "block");
    });


    /*****************************
    ****** ACTION NEW USER *******
    /****************************/

    $(".nodal-newUser-form").submit(function(event) {
        validateNameField("#last-name", event);
        validateNameField("#first-name", event);
        validatePasswordField("#new-password", event);
        validateZipCodeField("#zipCode", event);
        validateCityField("#city", event);

        if ($("#new-password").val() != $("#confirm-password").val()) {
            $("#confirm-password-FB").addClass("invalid");
            event.preventDefault();
        } else {
            $("#confirm-password-FB").removeClass("invalid");
        }
        validateEmailField("#new-email", event);
        validateCheckboxField("#checkbox", event);

        if (!event.isDefaultPrevented()) {
            $("#nodal-login").animate({
                "top": "-500px",
                "opacity": "0"
            }, 500, "swing", function() {
                $("#nodal-login").hide();
                $("#nodal-newUser-shape").css("display", "none");
                $("#nodal-newUser-shape").css("opacity", "0");
                $("#nodal-login-shape").css("opacity", "1");
                $("#nodal-login-shape").show();
            });
            window.alert("merci de votre confiance un email de confirmation vous a été envoyé");
        }
    });

    // on button back
    $("#back-btn-newUser").click(function() {
        $("#nodal-newUser-shape").animate({
            "opacity": "0"
        }, 100, "swing", function() {
            $("#nodal-newUser-shape").css("display", "none");
            $(".shape-container").animate({
                "width": "400px"
            }, 100, "swing", function() {
                $("#nodal-login-shape").css("opacity", "1");
                $("#nodal-login-shape").css("display", "block");
            });
        });
    });


    /******************************
     ******  INPUT ANIMATION  *****
     ******************************/

    $("#nodal-login input").focus(function() {
        if (!$(this).val()) {
            $(this).css("background-color", "#fae4e4");
        }
    }).keyup(function() {
        $(this).css("background-color", "#EEEE");
    }).blur((function() {
        if (!$(this).val()) {
            $(this).css("background-color", "#fae4e4");
        }
    }));


    /*****************************
     **********  FUNCTION  *******
     *****************************/

    // min two char in string
    function isValidName(name) {
        return name.trim().length > 2;
    }
    // only text
    function isValidCity(city, event) {
        return /^[A-Za-z]+$/.test(city);
    }
    // only five digit
    function isValidZipCode(zip, event) {
        return /^([0-9]{5})$/.test(zip);
    }
    // min 5 char and on digit
    function isValidPassword(password) {
        return password.length > 5 && /.*[0-9].*/.test(password);
    }

    /*https://fightingforalostcause.net/content/misc/2006/compare-email-regex.php*/
    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    }

    function validateNameField(field, event) {
        var name = $(field).val();
        if (!isValidName(name)) {
            $(field).addClass("invalid");
            $(field + "-FB").addClass("invalid");
            event.preventDefault();
        } else {
            $(field).removeClass("invalid");
            $(field + "-FB").removeClass("invalid");
        }
    }

    function validateCityField(field, event) {
        var city = $(field).val();
        if (!isValidCity(city)) {
            $(field).addClass("invalid");
            $(field + "-FB").addClass("invalid");
            event.preventDefault();
        } else {
            $(field).removeClass("invalid");
            $(field + "-FB").removeClass("invalid");
        }
    }

    function validateZipCodeField(field, event) {
        var zipCode = $(field).val();
        if (!isValidZipCode(zipCode)) {
            $(field).addClass("invalid");
            $(field + "-FB").addClass("invalid");
            event.preventDefault();
        } else {
            $(field).removeClass("invalid");
            $(field + "-FB").removeClass("invalid");
        }
    }

    function validatePasswordField(field, event) {
        var password = $(field).val();
        if (!isValidPassword(password)) {
            $(field).addClass("invalid");
            $(field + "-FB").addClass("invalid");
            event.preventDefault();
        } else {
            $(field).removeClass("invalid");
            $(field + "-FB").removeClass("invalid");
        }
    }

    function validateEmailField(field, event) {
        var email = $(field).val();
        if (!isValidEmailAddress(email)) {
            $(field).addClass("invalid");
            $(field + "-FB").addClass("invalid");
            event.preventDefault();
        } else {
            $(field).removeClass("invalid");
            $(field + "-FB").removeClass("invalid");
        }
    }

    function validateCheckboxField(field, event) {
        var isChecked = $("#checkbox").is(":checked");
        if (!isChecked) {
            $(field + "-FB").css("color", "red");
            event.preventDefault();
        } else {
            $(field + "-FB").css("color", "black");
        }
    }
});