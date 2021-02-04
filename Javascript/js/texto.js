//Esto es un ejemplo de como funciona el Scope en JS
    /*var message = "in global";
    console.log("global: message = " + message);
    var a = function(){
        var message = "inside a";
        console.log("a: message = " + message);
        //function b (){
        //    console.log("b: message = " + message);
        //}
        b();
    }
    function b (){
        console.log("b: message = " + message);
    }
    a();*/

//Ahora vamos a ver los tipos en JS
    /*var x;
    console.log(x);             //Si no le damos valor a x, toma el valor undefined
    if(x == undefined){         //Como x es undefined, aparece el if
        console.log("x is undefined");
    }

    x = 5;      //Le damos valor
    if(x == undefined){
        console.log("x is undefined");
    }else{      //Ahora aparece el else
        console.log("x has been defined with the value: " + x);
    }*/

    //console.log(y)      //Como no hemos definido la Y, no es una variable undefined y aparecera un error. Es decir, si definimos una variable aunque no le demos valor, estara OK. Pero si no la definimos aparecera error.

/*//Ahora veremos Common language constructs
    //String concatination
    var palabra = "Hello";
    palabra += " ";
    palabra += "World";
    palabra += "!";
    console.log(palabra + "!!!")
    //Regular math operators
    console.log((3*4)/233);
    console.log(undefined/5);
    //Equality
    var x = 4, y = 4;
    if (x == y) {
        console.log("X is equal to y")
    }
    x="4";
    if (x == y) {
        console.log("X is equal to y")
    }
    //Strict equatily
    if (x === y) {
        console.log("X is equal to y")
    }else{
        console.log("X is NOT strict equal to y")
    }*/

//Verdadero o falso
/*    if (false || null || undefined || "" || 0 || NaN) {
        console.log("This line won't ever execute");
    } else {
        console.log("All false");
    }

    if (true && "hello" && 1 && -1 && "false") {
        console.log("All true");
    }*/
    
//Best practice for {} style
/*    function a()
    {
        return
        {
            name: "Nielsen"
        };
    }
    function b(){
        return{
            name: "Nielsen"
        };
    }
    console.log(a())
    console.log(b())*/

//Bucle FOR
/*    var sum = 0
    for (var i = 10; i > 0; i--) {
        sum = sum + i
    }
    console.log(sum)*/

//Handling default values
/*    function orderCHickeWith(sideDish) {
        console.log("Chicken with " + sideDish)
    }
    orderCHickeWith("noodles")      //Chicken with noodles
    orderCHickeWith()               //Chicken with undefined
    //Para evitar el undefined podemos dar un valor por default
    function orderCHickeWith(sideDish) {
        if (sideDish === undefined) {
            sideDish =  "nothing"
        }
        console.log("Chicken with " + sideDish)
    }
    orderCHickeWith("noodles")      //Chicken with noodles
    orderCHickeWith()               //Chicken with nothing
    //Pero JS tiene un shortcut para evitar poner el if
    function orderCHickeWith(sideDish) {
        sideDish = sideDish || "whatever!"      // El simbolo || es un OR
        console.log("Chicken with " + sideDish)
    }
    orderCHickeWith("noodles")      //Chicken with noodles
    orderCHickeWith()               //Chicken with whatever!
    var x = 10;*/