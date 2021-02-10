//Handling events(parrafo 3). Es por si ponemos la llamada al archivo arriba del todo.
    //Lo que hace es crear un evento cuando acabe de cargar toda la pagina: HTML, CSS, fotos, etc todo.
/*    document.addEventListener("DOMContentLoaded",
        function (event){
            function sayHello2(event){}
            function funcionloquesea(event){}
        }
    )*/


//DOM manipulation
    //Llamada al id
    /*console.log(document.getElementById("title"))*/
    //Para que haga algo cuando clickamos
/*    function sayHello (event){
        //De esta forma obtenemos el valor(lo que se escribe) y lo mostramos en consola
        console.log(document.getElementById("name").value)
        //Ahora vamos a guardar dicho valor
        var name = document.getElementById("name").value
        //Guardamos la anterior variable en algo mas complejo
        var message = "Hello " + name + "!"
        //Introducimos esta variable en el DIV con ID content. Aparecerá sin recargar el mensaje, ya que está creado en el HTML.
        document.getElementById("content").textContent = message
        //Si queremos hacer lo mismo pero además, queremos que sea un "h2"
        var message2 = "<h2>Hello " + name + "!</h2>"
        document.getElementById("content2").innerHTML = message2
        //Si queremos que cuando escriban algo en especifico pase algo
        if (name === "student"){
            //Si usamos "querySelector" estamos llamando a clases e ID como si estuviesemos en CSS
            var title = document.querySelector("#title")
                        .textContent
            //recordamos que title += "algo" es lo mismo que title = title + "algo"
            title += " & lovin' it!"
            //Lo volvemos a escribir para que se produzca el cambio en la web
            document.querySelector("#title").textContent = title
            //Entonces si escriben "student" en la caja, cambiara el titulo
        //Aqui es lo mismo de antes pero mucho mas corto, sin repetir lineas de codigo
            var prueba = title + " & mas corto"
            //Ademas, podemos llamar por algo mas que ID y clases
            document.querySelector("h1").textContent = prueba
        }
        //Ademas, podemos cambiar el propio nombre del boton. Solo funciona con el boton2 porque lo hemos llamado desde el script
        this.textContent = "Dicho!"
    }*/

//Handling events
/*     //No ponemos el "onclick" en el HTML, si no que creamos un evento desde el archivo de JS
    document.querySelector("#boton2").addEventListener("click", sayHello)
    //Otro ejemplo
    //document.querySelector("#boton2").onclick = sayHello*/
    //Es Mejor poner un listener en el archivo de JS y poner la llamada en el HTML arriba -> Parrafo 1
    //Vieniendo del parrafo 1, creamos de nuevo el JS
    document.addEventListener("DOMContentLoaded",
    function (event) {
      
      function sayHello (event) {
        console.log(event);
  
        this.textContent = "Said it!";
        var name =
         document.getElementById("name").value;
         var message = "<h2>Hello " + name + "!</h2>";
  
        document
          .getElementById("content")
          .innerHTML = message;
  
        if (name === "student") {
          var title = 
            document
              .querySelector("#title")
              .textContent;
          title += " & Lovin' it!";
          document
              .querySelector("h1")
              .textContent = title;
        }
    }
    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", sayHello);

    //Aqui se acabaria la introduccion de todo lo anterior en el event Listener de toda la pagina
    //Ahora vamos a crear un listener para el raton que cuando se presione la tecla shift y se haga click aparezcan las coordenadas del raton en la consola
    document.querySelector("body")
        .addEventListener("mousemove",
            function (event) {
                if (event.shiftKey === true) {
                    console.log("x: " + event.clientX);
                    console.log("y: " + event.clientY);
                }
            }
        );
    }
);

   
