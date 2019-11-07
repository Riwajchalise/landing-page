function headerTogger() {
  var x = document.getElementById('header');
  x.classList.toggle('responsive');
}

window.onscroll = function() { this.stickyHeader() };
var header = document.getElementById("header");
function stickyHeader() {
  if(window.pageYOffset > 0) {
    header.classList.add("sticky-header");
  }
  else {
    header.classList.remove("sticky-header");
  }
}
