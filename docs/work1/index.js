console.clear();
/*풀페이지*/ 
function Fullpage__init() {
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

Fullpage__init();
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