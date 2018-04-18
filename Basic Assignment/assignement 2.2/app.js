//  if(confirm('Do you want a greeting message')){

// }else{
//      alert("Welcome to netscape");
//  }


     var value = confirm('Do you want a greeting message');
     if (value == true) {
          document.getElementById("demo").innerHTML = 
            '<img a="Welcome.jpg></img>'
     } else {
          document.getElementById("demo").innerHTML = 
          "Welcome to netscape";
     }
