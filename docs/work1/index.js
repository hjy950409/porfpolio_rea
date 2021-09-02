console.clear();

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