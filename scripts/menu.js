// Effetti di transizione e colorazione del menu a tendina
$(document).ready(function() {
    
    // Chiudi tutti i menu appena caricata la pagina
    $(".menu div").hide();

    // Apri il menu a tendina con un click
    $(".menu button").click(function () {
            $(this).next(".menu div").slideToggle();(500);
        }
    );

    // Cambia colore al bottone e mantieni aperto il menu mentre scegli
    $(".menu").hover(function () {
            // Over
           $(this).children("button").addClass("active");
        }, function () {
            // Out
            $(this).children("button").removeClass("active");
            $(this).children(".menu div").slideUp(500);
        }
    );

    //Cambia colore ai link durante l'hover
    $(".menu a").hover(function() {
           $(this).toggleClass("active");
    });
})