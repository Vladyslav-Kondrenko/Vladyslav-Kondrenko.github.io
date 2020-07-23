$(function(){

$('.products__slider').slick({
  prevArrow: '  <button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
  nextArrow: '  <button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>'

});

$('.questions__item-title').on('click', function(){
  var item = $(this).parent();
  if (item.hasClass('questions__item--active')) {
    item.removeClass('questions__item--active');
  } else {
    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().addClass('questions__item--active');
  }

})

$('.header__close-btn').on('click', function(){
  $('.header').toggleClass('header--active');
})

$('.menu__list-link').on('click', function(){
  $('.header').toggleClass('header--active');
})

$('#fullpage').fullpage({
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
  sectionSelector: '.page-section',
  anchors:['top', 'products', 'benefits', 'specification', 'questions', 'contacts'],
  normalScrollElements: '.contacts__info, .header--active',
  
  onLeave: function(){
    jQuery('.section [data-aos]').removeClass("aos-animate");
},
onSlideLeave: function(){
    jQuery('.slide [data-aos]').removeClass("aos-animate");
},
afterSlideLoad: function(){
    jQuery('.slide.active [data-aos]').addClass("aos-animate");

},
afterLoad: function(){
    jQuery('.section.active [data-aos]').addClass("aos-animate");
   jQuery('.fp-table.active .aos-init').addClass('aos-animate');

   let menu_id = $('.page-section.active').attr('data-anchor');
   $('.menu__list a').removeClass('menu__list-link--active');
   $('a[href="' + '#' + menu_id + '"]').addClass('menu__list-link--active');
}

});


$(document).ready ( function(){

  AOS.init({
    anchorPlacement: 'top-bottom',
  });

 });

});