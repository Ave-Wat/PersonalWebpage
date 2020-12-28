function mobileOpenNav() {
  var links = document.getElementById("navbar");
  var closeButton = document.getElementById('close_icon');
  links.style.display = "block";
  closeButton.style.display = "block";
}

function mobileCloseNav() {
  var links = document.getElementById("navbar");
  var closeButton = document.getElementById('close_icon');
  links.style.display = "none";
  closeButton.style.display = "none";
}

function initialize() {
  var mobileOpenNavButton = document.getElementById('open_icon');
  mobileOpenNavButton.onclick = mobileOpenNav;
  var mobileCloseNavButton = document.getElementById('close_icon');
  mobileCloseNavButton.onclick = mobileCloseNav;
}

window.onload = initialize;
