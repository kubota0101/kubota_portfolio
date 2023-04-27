const navInput = document.getElementById('menu-btn-check')
const hamburger = document.querySelectorAll('.menu_inner_item a')
const hamburgerA = Array.from(hamburger)
hamburgerA.forEach( function(element) {
  element.addEventListener('click',function(){
    navInput.checked = false
  })
})
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.element').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
    $('.element-b').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
    $('.element-c').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
  $(document).ready( function(){
    $(document).ready(function() {
 $('#top').fadeIn(2000);
});
});
setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500);
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500);
});
$(function(){
  var secArr = new Array();
  var current = -1;
  /* ここに背景色を順に記述する*/
  var secColor = new Array('#fff','#f7f7f7', '#e8e3d7', '#f7f7f7', '#dfe2ea');
  $('.block').each(function (i) {
      secArr[i] = $(this).offset().top;
  });
  function chengeBG(secNum) {
      if (secNum != current) {
          current = secNum;
          $('body').css({backgroundColor: secColor[current]});
      }
  }
  $(window).on('load scroll resize',function(){
      for (var i = secArr.length-1; i>=0; i--) {
          if ($(window).scrollTop() > secArr[i]){
              chengeBG(i);
              break;
          }
      }
  });
});