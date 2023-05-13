// var internationalButton = document.getElementById("international-login");
var localButton = document.getElementById("local-login");

// internationalButton.addEventListener("click", function() {
//   alert("International Login");
// });

localButton.addEventListener("click", function() {
  
  window.location.assign("next.html")
  
});

function goToNewPage() {
  window.location.href = "verify.html";
}
