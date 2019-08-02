//Galerie d'image page d'accueil

$(function() {
    var images = [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg"
    ];

    var galleryImage = $(".gallery").find("img").first();

    var i = 0;

    setInterval(function() {
        i = (i + 1) % images.length;
        galleryImage.fadeOut(function() {
            $(this).attr("src", images[i]);
            $(this).fadeIn(2000);
        });

        //console.log(galleryImage.attr("src"));  

    }, 2000)

});