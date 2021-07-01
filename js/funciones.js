//Invocar la funcion
jQuery(document).ready(listo); 


//llamada a la funcion
function listo()         
{
    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");

        jQuery(".hamb i").toggleClass("fa-window-close");
        
    });
 
    jQuery("header .container nav a").click(function(){
         
        jQuery("header .container nav").removeClass("open");
        jQuery(".hamb i").removeClass("fa-window-close");
        var dev = jQuery(this).attr("href"); 

        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top 
        })
    })
}
