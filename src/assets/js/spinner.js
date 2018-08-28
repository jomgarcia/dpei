document.querySelector(".jumbotron p").style.display = "none";
document.querySelector(".jumbotron").classList.add("spinner-1");

// Mimic Server Request
setTimeout(() => {
  document.querySelector(".jumbotron").classList.remove("spinner-1");
  document.querySelector(".jumbotron p").style.display = "block";
}, 4000);
