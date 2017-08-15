//Counter code
var button = document.getElementById('counter');

button.onclick = function () {
   
   //Create a request
   var request = new XMLHttpRequest();
   
   
   //Capture the request and store it in a variable
   request.onreadystatechange = function () {
       if (request.readystate === XMLHttpRequest.DONE) {
           //Take some action
           if (request.status === 200) {
               var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTMl = counter.toString();
           }
       }
       //Not done yet
   };
   //Make the request
   request.open('GET', 'http://vinayachandranv.imad.hasura-app.io/counter', true);
   request.send(null);
   
   
};
