//Submit Name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //Make a request to the server and send the name
    //Create a request object
   var request = new XMLHttpRequest();
   
   
   //Capture the response and store it in a variable
   request.onreadystatechange = function () {
       if (request.readystate === XMLHttpRequest.DONE) {
           //Take some action
           if (request.status === 200) {   
                //Capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
           }
       }
};
   //Make the request
   var nameInput = document.getElementById('name');
   var name = nameInput.value;
   request.open('GET', 'http://vinayachandranv.imad.hasura-app.io/submit-name?name=' + name, true);
   request.send(null);
};
