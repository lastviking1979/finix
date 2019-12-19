$(function(){
  
  // slick slaider

  $('.slaider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left arrow__icon"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right arrow__icon"></i></button>',    
  });

  $('.slaider-mini').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left arrow__icon"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right arrow__icon"></i></button>',    
  });

  $('.slaider-text').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left arrow__icon"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right arrow__icon"></i></button>',    
  });

  //Menu

  $('.hamburger').click(function() {
    $('.menu-collapse').toggleClass('nav-none');
    $('.nav__list').toggleClass('nav__list_open');
    $('.nav__list_menu-hiden_main').toggleClass('d-block');
    $('.hamburger__item').toggleClass('hamburger__item_open');
  });
  
  $('.sub > a').click(function(){
    $('.sub ul').slideUp();
      if ($(this).next().is(":visible")){
          $(this).next().slideUp();
      } else {
        $(this).next().slideToggle();
      }
    return false;
  });

    $('.menu-collapse > ul > li > a').click(function(){
      $('.menu-collapse > ul > li > a, .sub a').removeClass('active');
      $(this).addClass('active');
      }),
      $('.sub ul li a').click(function(){
        $('.sub ul li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.sub1 > a').click(function(){
        $('.sub1 ul').slideUp();
        if ($(this).next().is(":visible")){
            $(this).next().slideUp();
        } else {
          $(this).next().slideToggle();
        }
      return false;
    });

    $('.menu-collapse > ul > li > a').click(function(){
      $('.menu-collapse > ul > li > a, .sub1 a').removeClass('active');
      $(this).addClass('active');
      }),
      $('.sub1 ul li a').click(function(){
        $('.sub1 ul li a').removeClass('active');
        $(this).addClass('active');
    });

//Read-more-button

  $('.read__more').click(function(e) {
        e.preventDefault();
    $('.read__more_open').toggleClass('d-block');    
  });

//Modal

  $('.videozone__btn').click(function(e) {
        e.preventDefault();
		$('#exampleModal').arcticmodal();
	});

  $('.item__standart_btn').click(function(e) {
        e.preventDefault();
        $('#exampleModal2').arcticmodal();
    });

}); // jQuery