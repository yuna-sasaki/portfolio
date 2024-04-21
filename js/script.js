
// CONTACTカクテルアニメーション
$(window).scroll(function () {
    $('#contact').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $('.contact_cocktail_img').addClass("fadeRight");
            $('.contact_messege_img').addClass("fadeUp");
        }
    });
});

// WORKSアコーディオン
$(function () {
	/* 表示する数を取得 */
	var contentsCount = $(".works_item").length;
	/* 初期表示の数を変数に代入 */
	var n = 6;

	/* 6以下の場合は、「もっと見る」ボタン非表示 */
	if (contentsCount <= n) {
		$(".works_more").hide();

		/* 6以上の場合は、sliceを利用して7以降のコンテンツを非表示 */
	} else {
		$(".works_item").slice(n).hide();

		/* 非表示のコンテンツがある場合、「もっと見る」ボタンを「閉じる」ボタンに変更 */
		$(".works_more").click(function () {
			if ($(".works_item").slice(n).is(':hidden')) {
				$(".works_item").slice(n).slideDown();
				$(this).text('閉じる');

				/* 非表示のコンテンツがない場合は、閉じる」ボタンを「もっと見る」ボタンに変更 */
			} else {
				$(".works_item").slice(n).slideUp();
				$(this).text('もっと見る');
			}
		});
	}
});

$(function () {
	/* 表示する数を取得 */
	var contentsCount = $(".design_item").length;
	/* 初期表示の数を変数に代入 */
	var n = 8;

	/* 8以下の場合は、「もっと見る」ボタン非表示 */
	if (contentsCount <= n) {
		$(".design_more").hide();

		/* 8以上の場合は、sliceを利用して9以降のコンテンツを非表示 */
	} else {
		$(".design_item").slice(n).hide();

		/* 非表示のコンテンツがある場合、「もっと見る」ボタンを「閉じる」ボタンに変更 */
		$(".design_more").click(function () {
			if ($(".design_item").slice(n).is(':hidden')) {
				$(".design_item").slice(n).slideDown();
				$(this).text('閉じる');

				/* 非表示のコンテンツがない場合は、閉じる」ボタンを「もっと見る」ボタンに変更 */
			} else {
				$(".design_item").slice(n).slideUp();
				$(this).text('もっと見る');
			}
		});
	}
});

// 画像アニメーション
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.fadeUp');
    var scrollAnimationFunc = function () {
        for (var i = 0; i < scrollAnimationElm.length; i++) {
            var triggerMargin = 0;
            if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
                scrollAnimationElm[i].classList.add('on');
            }
        }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
});