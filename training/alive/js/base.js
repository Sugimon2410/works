
//ヘッダー　サブナビ関連---------------------------
// .has-child要素にホバーしたときに.nav_bg要素を表示させる
document.addEventListener('DOMContentLoaded', function () {
  const hasChildElements = document.querySelectorAll('.has-child');
  const navBgElements = document.querySelectorAll('.nav_bg');

  hasChildElements.forEach((hasChild, index) => {
    hasChild.addEventListener('mouseenter', function () {
      navBgElements[index].style.display = 'block'; // または navBgElements[index].style.visibility = 'visible';
    });

    hasChild.addEventListener('mouseleave', function () {
      navBgElements[index].style.display = 'none'; // または navBgElements[index].style.visibility = 'hidden';
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const hasChildElements = document.querySelectorAll('.has-child_02');
  const navBgElements = document.querySelectorAll('.nav_bg_02');

  hasChildElements.forEach((hasChild, index) => {
    hasChild.addEventListener('mouseenter', function () {
      navBgElements[index].style.display = 'block'; // または navBgElements[index].style.visibility = 'visible';
    });

    hasChild.addEventListener('mouseleave', function () {
      navBgElements[index].style.display = 'none'; // または navBgElements[index].style.visibility = 'hidden';
    });
  });
});

//ヘッダー　サブナビ関連---------------------------

//ハンバーガーメニュー　---------------------------
//SPハンバーガーボタン

$(document).ready(function () {
  $(".openbtn").click(function () {
    $(this).toggleClass('active');
    $('#nav_hamburger').toggleClass('active');
    $('.openbtn').toggleClass('active');
  });
});

// $(document).ready(function () {
//   $(".openbtn_sp").click(function () {
//     $(this).toggleClass('active');
//     $('#nav_sp').toggleClass('active');
//     $('.openbtn_sp').toggleClass('active');
//   });
// });

$(document).ready(function () {
  $(".openbtn_sp").click(function () {
    $(this).toggleClass('active');
    $('#nav_sp').toggleClass('active');
  });
});


// sp用ドロップダウン
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordion-menu'), false);
})

//ハンバーガーメニュー　---------------------------

//ボトムバナー　---------------------------
$(function () {
    $(document).ready(function () {
        $('.banner_close').click(function() {
            $(this).parent().hide();
        });
    });
});

// スライドの数が3枚以下の場合、スライドを複製してループをスムーズにする関数
function duplicateSlides(selector) {
  const swiperContainer = document.querySelector(`${selector} .swiper-wrapper`);
  if (!swiperContainer) return; // コンテナが見つからない場合は処理を終了

  const slides = Array.from(swiperContainer.querySelectorAll('.swiper-slide'));

  // スライドの数が3枚以下の場合のみ複製
  if (slides.length <= 3) {
      for (let i = 0; i < slides.length; i++) {
          const clone = slides[i].cloneNode(true); // スライドを複製
          swiperContainer.appendChild(clone); // 複製したスライドを追加
      }
  }
}

// 複製処理を適用するクラス
const swiperSelectors = ['.swiper-blog', '.swiper-youtube', '.swiper-past_events'];
swiperSelectors.forEach(selector => duplicateSlides(selector));


var swiper = new Swiper('.swiper-past_events', {
  slidesPerView: 'auto',
  spaceBetween: 40, // デフォルトの値
  freeMode: true,
  freeModeSticky: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  breakpoints: {
    768: {
      spaceBetween: 40, // 768px以上の設定
    },
    0: { // 768px未満の設定
      spaceBetween: 25,
    }
  }
});



// Swiperの初期化
var swiper = new Swiper('.swiper-youtube', {
  slidesPerView: 'auto',
  spaceBetween: 40, // デフォルトの値
  freeMode: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  breakpoints: {
    768: {
      spaceBetween: 40, // 768px以上の設定
    },
    0: { // 768px未満の設定
      spaceBetween: 25, // 768px未満の値
    }
  }
});

// iframeをタッチ操作から除外
document.querySelectorAll('.swiper-youtube iframe').forEach(iframe => {
  iframe.style.pointerEvents = 'none'; // iframeのタッチイベントを無効化
});

// スライド操作が終わった後、iframeを有効化
document.querySelectorAll('.swiper-youtube .swiper-slide').forEach(slide => {
  slide.addEventListener('pointerup', () => {
    const iframe = slide.querySelector('iframe');
    if (iframe) {
      iframe.style.pointerEvents = 'auto'; // pointer-eventsを有効に戻す
    }
  });
});

var swiper = new Swiper('.swiper-blog', {
    slidesPerView: 'auto',
    spaceBetween: 40, // デフォルトのスライド間隔
    loop: true, // ループを有効化
    centeredSlides: false, // スライドを中央揃え
    autoplay: {
        delay: 4000,
        disableOnInteraction: false, // ユーザー操作後も自動再生を継続
    },
    breakpoints: {
      768: {
        spaceBetween: 40, // 768px以上の設定
      },
      0: { // 768px未満の設定
        spaceBetween: 25, // 768px未満の値
      }
    }
});

