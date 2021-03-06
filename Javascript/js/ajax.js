// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    // Unobtrusive event binding
    document.querySelector("#botonajax").addEventListener("click", 
        function () {
          // Call server to get the name
          $ajaxUtils.sendGetRequest("data/name.txt", 
              function (request) {
                var name = request.responseText;
                document.querySelector("#contentajax").innerHTML = "<h2>Hello " + name + "!</h2>";
              });
          }
      );
  }
);