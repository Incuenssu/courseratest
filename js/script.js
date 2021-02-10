//El nombre de la funcion de JQuery es $
    $(function(){       //Igual que document.addEventListener("DOMContentLoaded") en JQuery
        //Igual que document.querySelector("#navbarToggle").addEventListener("blur", ...)
        $("#navbarToggle").blur (function(event){
            var screenWidth = window.innerWidth
            if (screenWidth < 768){
                $("#collapse").collapse('hide')
            }
        })
    }
    )