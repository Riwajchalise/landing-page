/* Header */
var header = document.getElementById('header');

headerTogger = () => {
  header.classList.toggle('responsive');
};

window.onscroll = () => {
  this.stickyHeader();
};

stickyHeader = () => {
  if (window.pageYOffset > 0) {
    header.classList.add('non-transparent-bg');
  } else {
    header.classList.remove('non-transparent-bg');
  }
};
