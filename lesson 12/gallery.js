var container = document.querySelector('.container');
container.addEventListener('click', function (event) {
  var imgActivBig = document.querySelector('.photo img');
  var activeElement = document.querySelector('.active-image').children[0];
  var img = event.target.closest('.image img')
  if (!img) {
    return;
  };
  imgActivBig.src = img.src;

  if (img !== activeElement) {
    activeElement.parentElement.classList.remove('active-image');
    img.parentElement.classList.add('active-image');
  }
});