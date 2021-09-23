// Event handling


const togglecontent = () => {
  document.querySelector(".card")
    .classList.toggle("hidden");
};


document.querySelector("button")
  .addEventListener("click", togglecontent);




document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = 
                res.firstName + " " + res.lastName
              if (res.likesChineseFood) {
                message += " likes Chinese food";
              }
              else {
                message += " doesn't like Chinese food";
              }
              message += " and uses ";
              message += res.numberOfDisplays;
              message += " displays for coding.";

              var divcontent = document.querySelector("#content");
              divcontent.innerHTML = message

              // document.querySelector("#content")
              //   .appendChild(message); 
              //   // .innerHtml= "<h2>" + message + "</h2>";
            });

          $ajaxUtils
          .sendGetRequest("data/name.json",
            function (res) {
              var name =
                res.firstName;

              document.querySelector("#name").innerHTML = "name: " + name; 
            });
      });
  }
);








