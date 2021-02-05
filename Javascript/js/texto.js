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

//Objetos
/*    var company = new Object();
    company.name = "Facebook"
    company.ceo = new Object()
    company.ceo.firstname = " Mark"
    company.ceo.color = "blue"

    console.log(company)
    console.log(company.ceo.color)

    console.log(company["name"])
    var stockPropName = "Stock of company"
    company[stockPropName] = 110
    console.log(company)
    console.log("Stock price is " + company[stockPropName])*/
    //Better way: object literal
/*    var facebook = {
        name: "Facebook",
        ceo: {
            firstname: "Mark",
            lastname: "Zuckenberg",
            color: "blue"
        },
        "Stock of company": 110
    }
    console.log(facebook)
    console.log(facebook.ceo.firstname)*/

//Funciones
/*    function multiply(x, y){
        return x*y
    }
    multiply.version = "v1.0.0"
    console.log(multiply.version)
    //Factorizacion de funciones
    function makemultiplier(multiplier){
        var myFunc = function(x){
            return multiplier * x;
        };
        return myFunc
    }
    var multiplyby3 = makemultiplier(3)
    console.log(multiplyby3(10))
    var doubleAll = makemultiplier(2)
    console.log(doubleAll(100))
    //Parando funciones como parametros
    function doOperationOn(x, operation){
        return operation(x)
    }
    var result = doOperationOn(5, multiplyby3)
    console.log(result)
    result = doOperationOn(100, doubleAll)
    console.log(result)*/

//Pasando variables por valor o por referencia
/*    //Passing by VALUE
    var a = 7
    var b = a
    console.log("a: " + a)
    console.log("b: " + b)
    b = 5
    console.log("After b update:")
    console.log("a: " + a)
    console.log("b: " + b)
    //Passsing by REFERENCE
    var a = { x: 7}
    var b = a
    console.log(a)
    console.log(b)
    b.x=5
    console.log("After b update:")
    console.log(a)
    console.log(b)*/
    //Pass by reference vs by value part 1
    function changePrimitive(primValue){
        console.log("in changePrimitive...")
        console.log("valor original:")
        console.log(primValue)
        primValue = 5
        console.log("cambio:")
        console.log(primValue)
    }
    var value = 7
    changePrimitive(7)      //In memory: primValue = value
    console.log("valor final:")
    console.log(value)      //Here are pointing in different memories. Por eso no cambia el valor de primValue y de value
    //Pass by reference vs by value part 2
    function changeObject(objValue){
        console.log("in changeObject...")
        console.log("valor original:")
        console.log(objValue)
        objValue.x = 5
        console.log("cambio:")
        console.log(objValue)
    }
    value = {x : 7}
    changeObject(value)     //In memory: objValue = value
    console.log("valor final:")
    console.log(value)      //Here are pointing to the same memory. Por eso SI cambia el valor de objValue y de value