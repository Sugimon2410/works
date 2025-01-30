// ハンバーガーボタンの動作
$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $('#nav_sp').toggleClass('active');
    $('#shadow').toggleClass('active');
  });
  
  // ページ内リンクをクリックしたらハンバーガーメニューを閉じる
  $('#nav_sp a').click(function () {
    // メニューと背景のクラスを削除して閉じる
    $(".openbtn").removeClass('active');
    $('#nav_sp').removeClass('active');
    $('#shadow').removeClass('active');
  });
  
  
  // スムーススクロール
  $(function () {
    $('a[href^="#"]').click(function () {
        var adjust = 0;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
    $('area[href^="#"]').click(function () {
        var adjust = 0;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
  });

