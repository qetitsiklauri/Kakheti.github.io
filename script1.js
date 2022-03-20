function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myFunction1() {
  var w = window.open();
  w.document.open();
  w.document.write("<h2>Hello World!</h2>");
  w.document.close();
} 
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

