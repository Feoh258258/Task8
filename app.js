document.addEventListener("DOMContentLoaded", function() {
  let images = document.querySelectorAll('.sliderTask2 img');
  let current = 0;

  function slider() {
    for(let i=0; i<images.length; i++){
      images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
    
  }

  //document.querySelector('.sliderTask2').onclick = slider;
  document.querySelector('.sliderBtnUp').onclick = function(){
    
    if(current - 1 == -1){
      current = images.length - 1;
    }else {
      current--;
    }
    slider();
  };
  document.querySelector('.sliderBtnDown').onclick = function(){
    if(current + 1 == images.length){
      current = 0;
    }else {
      current++;
    }
    slider();
  };

});//EndDOMLoaded