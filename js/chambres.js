function showMore(param) {
  var photoBox = param.previousElementSibling;
  photoBox.classList.toggle('shown')
};

function zoom(param){
  var squarePhoto = param.parentElement;
  var zoomEl = document.querySelector('.zoom')
  zoomContainer = document.createElement('div');
  if (zoomEl) {
    zoomEl.parentNode.removeChild(zoomEl);
  }else{
    zoomContainer.innerHTML = '<div class="zoom square-photo" style="cursor:zoom-out" onclick="zoom(this)"><img class="img-zoom" src=\"'+ param.src +'\"></div>' ;
    var header = document.querySelector('.header');
    document.body.insertBefore(zoomContainer, header);
  }
}
