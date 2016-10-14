var swiper = new Swiper('.swiper-container', {
  pagination: null,
  nextButton: null,
  prevButton: null,
  scrollbar: '.swiper-scrollbar',
  scrollbarHide: false,
  slidesPerView: 3,
  slidesPerGroup: 1,
  centeredSlides: false,
  spaceBetween: 100,
  grabCursor: true,
  breakpoints: {
    // when window width is <= 320px
    320: {
      scrollbar: null,
      pagination: '.swiper-pagination',
      paginationHide: false,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetweenSlides: 10
    },
    // when window width is <= 480px
    480: {
      scrollbar: null,
      pagination: '.swiper-pagination',
      paginationHide: false,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetweenSlides: 10
    }
  }
});

(function($) {
  $(function() {
    $('#up').click(function() {
      $('html, body').animate({scrollTop: 0},1000);
      return false;
    });
  });

  $('.header-box .open_menu').on('click',(function(e){
    e.preventDefault();
    $(this)
        .toggleClass('active')
        .parent()
        .find('ul')
        .slideToggle();
  }));

})(jQuery);