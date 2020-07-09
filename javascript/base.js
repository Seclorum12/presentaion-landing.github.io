var toogleBtn = document.getElementById("hamburger-btn");

toogleBtn.addEventListener("click", function () {
  var overlay = document.getElementsByClassName("overlay")[0];
  var body = document.getElementsByTagName("body")[0];
  this.classList.toggle("active");
  overlay.classList.toggle("open");
  body.classList.toggle("locked");
});

document.addEventListener("scroll", function (e) {
  if (document.body.classList.contains("locked")) {
    window.scrollTo(0, 0);
  }
});
