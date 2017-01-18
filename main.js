(function(){
  var headerBg = document.querySelector('#header');
  var img = ['photos/photoretouch/cover1.jpg', 'photos/photoretouch/cover2.jpg','photos/photoretouch/cover3.jpg', 'photos/photoretouch/cover4.jpg', 'photos/photoretouch/cover5.jpg', 'photos/photoretouch/cover6.jpg'];
  var currentBg = 0;
  console.log('first', currentBg);
  img.onload = setInterval(function nextSlide(){
    headerBg.style.backgroundImage = 'url(' + img[currentBg] + ')';
    currentBg = currentBg + 1
    console.log('second', currentBg);
    if (currentBg == img.length) {currentBg = 0;};
  }, 5000);
})()
