$(function () {
  $(function () {
    var $header = $('.header');
    var $main = $('.main');

    // Nav Fixed
    $(window).scroll(function () {
      if ($(window).scrollTop() > 450) {
        $header.addClass('fixed');
        $main.addClass('fixed');
      } else {
        $header.removeClass('fixed');
        $main.removeClass('fixed');
      }
    });
    // Nav Toggle Button
    $('.js-button-hamburger').click(function () {
      $header.toggleClass('open');
    });
    $('.overlay').click(function () {
      $header.removeClass('open');
    });
  });
  $('.move-line').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).addClass('move');
    } else {
      // $(this).removeClass('move');
    }
  });
});
$(function () {
  var headerHeight = $('header').outerHeight(); // ヘッダーについているID、クラス名など、余白を開けたい場合は + 10を追記する。
  var urlHash = location.hash; // ハッシュ値があればページ内スクロール
  if (urlHash) { // 外部リンクからのクリック時
    $('body,html').stop().scrollTop(0); // スクロールを0に戻す
    setTimeout(function () { // ロード時の処理を待ち、時間差でスクロール実行
      var target = $(urlHash);
      var position = target.offset().top - headerHeight;
      $('body,html').stop().animate({ scrollTop: position }, 500); // スクロール速度ミリ秒
    }, 100);
  }
  // $('a[href^="#"]').click(function () { // 通常のクリック時
  //   var href = $(this).attr("href"); // ページ内リンク先を取得
  //   var target = $(href);
  //   var position = target.offset().top - headerHeight;
  //   $('body,html').stop().animate({ scrollTop: position }, 500); // スクロール速度ミリ秒
  //   return false; // #付与なし、付与したい場合は、true
  // });
});
// const width = document.documentElement.offsetWidth;
// console.log(width);

// const inner = document.querySelector('.width');

// inner.innerHTML = (width);
/*==================================================
** to-top
==================================================*/
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

  var scroll = $(window).scrollTop(); //スクロール値を取得
  if (scroll >= 200) {//200pxスクロールしたら
    $('#page-top').removeClass('DownMove');   // DownMoveというクラス名を除去して
    $('#page-top').addClass('UpMove');      // UpMoveというクラス名を追加して出現
  } else {//それ以外は
    if ($('#page-top').hasClass('UpMove')) {//UpMoveというクラス名が既に付与されていたら
      $('#page-top').removeClass('UpMove'); //  UpMoveというクラス名を除去し
      $('#page-top').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
    }
  }

  var wH = window.innerHeight; //画面の高さを取得
  var footerPos = $('.l-footer').offset().top; //footerの位置を取得
  if (scroll + wH >= (footerPos)) {
    var pos = (scroll + wH) - footerPos - 0 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
    $('#page-top').css('bottom', pos); //#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
  } else {//それ以外は
    if ($('#page-top').hasClass('UpMove')) {//UpMoveというクラス名がついていたら
      $('#page-top').css('bottom', '10px');// 下から10pxの位置にページリンクを指定
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});
// #page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate({
    scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});
/*==================================================
** loading
==================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime() {

  // ふわっ
  $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 10;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('bgLRextend');// 画面内に入ったらfadeUpというクラス名を追記
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// blurTriggerにblurというクラス名を付ける定義

function BlurTextAnimeControl() {
  $('.blurTrigger').each(function () { //blurTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
    }
  });
}
// 画面が読み込まれたらすぐに動く場合の記述
$(window).on('load', function () {
  BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動く場合の記述
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述




$(window).on('load', function () {
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1000).fadeOut('slow', function () {//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function () {
    //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
});

/*==================================================
** attention
==================================================*/
jQuery(function (a) {
  a(".js-accordion-trigger").click(function () {
    a(this).children("dt").toggleClass("is-active-accordion");
    a(this).children("dd").slideToggle();
    // $('.cuisine-menu__item dd').parents('.cuisine-menu__item').find('.cuisine-menu__item dl').toggleClass('bg-yellow');
  })
});


/*==================================================
** .slider
==================================================*/
$('.l-mv-slider').slick({
  fade: true,//切り替えをフェードで行う。初期値はfalse。
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3500,//次のスライドに切り替わる待ち時間
  speed: 3000,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: false,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: false,//下部ドットナビゲーションの表示
  pauseOnFocus: false,//フォーカスで一時停止を無効
  pauseOnHover: false,//マウスホバーで一時停止を無効
  pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});
