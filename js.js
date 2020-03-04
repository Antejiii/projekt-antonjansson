/*Script för att ta bort och ta fram search bar*/

function myFunction() {
  var x = document.getElementById("javaknapp");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
