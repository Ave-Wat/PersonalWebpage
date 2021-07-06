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

function fadeIn() {
  for (var i = 0; i < contentArray.length; i ++){
    var contentBox = contentArray[i]
    var distInView = contentBox.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
      contentBox.classList.add("inView");
    } else {
      contentBox.classList.remove("inView");
    }
  }
}

function initialize() {
  var mobileOpenNavButton = document.getElementById('open_icon');
  mobileOpenNavButton.onclick = mobileOpenNav;
  var mobileCloseNavButton = document.getElementById('close_icon');
  mobileCloseNavButton.onclick = mobileCloseNav;
  contentArray = document.querySelectorAll(".content-container");
  console.log(contentArray);
  window.addEventListener('scroll', fadeIn);
  fadeIn();
}

let contentArray;
window.onload = initialize;
