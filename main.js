(function(){
  var headerBg = document.querySelector('#header');
  var img = ['photos/photoretouch/cover1.jpg', 'photos/photoretouch/cover2.jpg','photos/photoretouch/cover3.jpg', 'photos/photoretouch/cover4.jpg', 'photos/photoretouch/cover5.jpg', 'photos/photoretouch/cover6.jpg'];
  var currentBg = 0;
  var bgImg = new Image()
  var slideInterval = setInterval(nextSlide,5000);
  function nextSlide(){
    bgImg = img[currentBg];
    headerBg.style.backgroundImage = 'url(' + bgImg + ')';
    currentBg = currentBg + 1;
    if (currentBg == img.length) {
      currentBg = 0;
    };
  };
})()
