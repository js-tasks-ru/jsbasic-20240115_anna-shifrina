function initCarousel() {
  const rightButton = document.querySelector('.carousel__arrow_right');
  const leftButton = document.querySelector('.carousel__arrow_left');
  const lent = document.querySelector('.carousel__inner');
  const slideCount = document.querySelectorAll(".carousel__slide").length;  
  const lentOffsetWidth = lent.offsetWidth;
  
  let currentSlide = 1; // Состояние приложения - текущий слайд
  
  const renderSlide = () => {
      let rightMoveCount = currentSlide - 1;
      lent.style.transform = `translateX(${-rightMoveCount * lentOffsetWidth}px)`;
  };
  
  const handleSlideChange = () => {
      leftButton.style.display = currentSlide === 1 ? 'none' : '';
      rightButton.style.display = currentSlide === slideCount? 'none' : '';
      renderSlide();
  };
  
  const moveRight = () => {
      if(currentSlide < slideCount){
          currentSlide++;
          handleSlideChange();    
      }
  };
  
  const moveLeft = () => {
      if(currentSlide > 1){
          currentSlide--;
          handleSlideChange();
      };
  };
      
  rightButton.addEventListener('click',moveRight);
  leftButton.addEventListener('click',moveLeft);

  handleSlideChange(); // Скрываем левую кнопку вначале
}
