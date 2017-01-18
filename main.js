(function(){
  var headerBg = document.querySelector('#header');
  var img = ['photos/photoretouch/cover1.jpg', 'photos/photoretouch/cover2.jpg','photos/photoretouch/cover3.jpg', 'photos/photoretouch/cover4.jpg', 'photos/photoretouch/cover5.jpg', 'photos/photoretouch/cover6.jpg'];
  var currentBg = 0;
  var bgImg = new Image();
  bgImg = img[currentBg]
  bgImg.onload = sliderShow;
  var sliderShow = setInterval(function nextSlide(){
    headerBg.style.backgroundImage = 'url(' + bgImg + ')';
    if (currentBg == img.length) {currentBg = 0;};
    bgImg.src = img[currentBg + 1];
  }, 5000);
})()
