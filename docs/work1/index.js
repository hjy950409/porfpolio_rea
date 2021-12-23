
console.clear();

/*풀페이지*/ 
function Fullpageinit() {
  new fullpage('#fullpage', {

    scrollOverflow:true,
    verticalCentered:false,
    menu: ".top-bar .menu-box-1 > ul"
  });

  // 기존 섹션을 다시 활성화 하여, 최초에도 애니메이션이 발동 하도록
  const $current = $('#fullpage .section.fp-section.active');
  $current.removeClass('active');
  setTimeout(function() {
    $current.addClass('active');
  });
}



setTimeout(function() {
   Fullpageinit();
   $('.loading-box').addClass('hide');
}, 1000);

/*마우스에 반응하는 텍스트*/
const $window = $(window);

let windowWidth = $window.width();
let windowHeight = $window.height();

$window.resize(_.throttle(function () {
  windowWidth = $window.width();
  windowHeight = $window.height();
}, 100));

$window.resize(_.throttle(function () {
  MousemoveEffect1__update();
}, 100));

let MousemoveEffect1__$el = null;
let MousemoveEffect1__lastPosX = 0;
let MousemoveEffect1__lastPosY = 0;

function MousemoveEffect1__update() {
  MousemoveEffect1__$el.each(function (index, node) {
    const $node = $(node);
    const horRes = $node.data('data-mousemove-effect1-hor-res');
    const verRes = $node.data('data-mousemove-effect1-ver-res');
    
    const x = (MousemoveEffect1__lastPosX - (windowWidth / 2)) * horRes;
    const y = (MousemoveEffect1__lastPosY - (windowHeight / 2)) * verRes;
    $(node).css('transform', 'translateX(' + x + 'px) translateY(' + y + 'px)');
    
    console.log("MousemoveEffect1__lastPosX : " + MousemoveEffect1__lastPosX);
    console.log("MousemoveEffect1__lastPosY : " + MousemoveEffect1__lastPosY);
  });
}

function MousemoveEffect1__init() {
  MousemoveEffect1__$el = $('.mousemove-effect-1-el');

  MousemoveEffect1__$el.each(function (index, node) {
    const $node = $(node);
    $node.data('data-mousemove-effect1-hor-res', $node.attr('data-mousemove-effect1-hor-res') * 1);
    $node.data('data-mousemove-effect1-ver-res', $node.attr('data-mousemove-effect1-ver-res') * 1);
  });

  const MousemoveEffect1__updateThrottled = _.throttle(function () {
    MousemoveEffect1__update();
  }, 5);

  $window.mousemove(function (e) {
    MousemoveEffect1__lastPosX = e.clientX;
    MousemoveEffect1__lastPosY = e.clientY;

    MousemoveEffect1__updateThrottled();
  });
}

MousemoveEffect1__init(); 

/*슬라이더적용*/
$(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 1,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
/*연락처*/
function sendEmailForm(form) {
  if ( form._replyto.value.length == 0 ) {
    alert('이메일 주소를 입력해주세요.');
    form._replyto.focus();
    return;
  }
  
  if ( form.message.value.length == 0 ) {
    alert('메세지를 입력해주세요.');
    form.message.focus();
    return;
  }
  
  form.submit();
  
  form._replyto.value = '';
  form.message.value = '';
  form.submit1.innerHTML = '전송되었습니다.';
  form.submit1.disabled = true;
}


/*팝업*/
// function Popup__init() {
//   $('.btn-popup-1').click(function() {
//     $('.popup').addClass('active');
//   });
  
//   $('.popup .popup__btn-close, .popup').click(function() {
//     $('.popup').removeClass('active');
//   });
  
//   $('.popup .popup__content').click(function() {
//     return false;
//   });
// }
// Popup__init();


// $('.box-1').imagesLoaded(function() {
//   let $grid = $('.box-1').masonry();
  
//   $('.loading-box').addClass('hide');
// });















