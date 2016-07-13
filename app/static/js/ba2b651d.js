function initCommnon() {
	imgWidth(), getCopyrightYear(), judgeBrowser()
}

function bindEventCommnon() {
	productsListMenu(), simpleTabToggle("hzal"), simpleTabToggle("hzhb"), backTop(), serchResult(), userList(), boderDn(), smallTab()
}

function productsListMenu() {
	var t, i = $(".pro-alert"),
		e = $(".list-coment .pro-wrap-list");
	i.hover(function() {
		clearTimeout(t), $(".list-coment").stop().show();
		var n = $(i).index($(this));
		$(e).eq(n).siblings(e).hide().end().fadeIn("fast")
	}, function() {
		t = setTimeout(function() {
			$(".list-coment").hide()
		}, 100)
	}), e.hover(function() {
		clearTimeout(t)
	}, function() {
		t = setTimeout(function() {
			$(".list-coment").hide()
		}, 100)
	})
}

function simpleTabToggle(t) {
	$("." + t + " .c-nav-tab-simple p a").mouseenter(function() {
		var i = $(this),
			e = $("." + t + " .c-nav-tab-simple p a"),
			n = e.index(i);
		return e.removeClass("active"), $(this).addClass("active"), $("." + t + " .c-list-pics .ul-wrap").hide(), $("." + t + " .c-list-pics .ul-wrap").eq(n).show(), !1
	}), $("." + t + " .c-nav-tab-simple .a-more").click(function() {
		var t = $(this).closest(".c-nav-tab-simple").find("a.active").attr("href");
		$(this).attr("href", t)
	})
}

function backTop() {
	var t, i = $(window).height();
	$(".c-backTop").hide(), $(window).scroll(function() {
		t = $(document).scrollTop(), t > i ? $(".c-backTop").show() : $(".c-backTop").hide()
	}), $(".c-backTop").click(function() {
		$("html,body").animate({
			scrollTop: "0px"
		}, 700), $(".c-backTop").hide()
	})
}

function serchResult() {
	$(".c-help-serchclose").click(function() {
		$(".c-help-s-input").val("").attr("placeholder", "")
	})
}

function imgWidth() {
	var t = $(window).width(),
		i = ($(".m-banner-box").width(), $(".m-banner-box img")),
		e = i.width(),
		n = $(window).width(),
		o = Math.abs(n - e),
		c = o / 2,
		a = n + c;
	1920 > t ? (i.css({
		position: "absolute",
		top: 0,
		margin: "0 auto",
		width: "1920px"
	}), i.css("left", -c), i.css("clip", "rect(0," + a + "px,515px," + c + "px)")) : i.css({
		position: "relative",
		top: 0,
		left: 0,
		margin: "0 auto",
		width: "100%",
		clip: "auto"
	})
}

function userList() {
	var t = $(".head-user"),
		i = $(".head-user-list");
	t.click(function() {
		i.toggle()
	})
}

function boderDn() {
	function t(t) {
		var i = 0;
		return t.prevAll().each(function(t, e) {
			var n = $(this).width();
			i += n
		}), i
	}

	function i(t, i) {
		o.stop().animate({
			width: t,
			left: i
		}, "normal", "easeOutQuart")
	}
	var e, n, o = $(".border-sty"),
		c = $(".head-nav li"),
		a = $(".m-header-nav");
	$liNow = c.find(".cur").parent(), liNowWidth = $liNow.width(), liNowLeft = t($liNow), c.mouseenter(function() {
		e = $(this).width(), n = t($(this)), i(e, n)
	}), a.mouseleave(function() {
		i(liNowWidth, liNowLeft)
	})
}

function getCopyrightYear() {
	var t = new Date,
		i = t.getFullYear();
	$(".copyright-year").text(i)
}

function judgeBrowser() {
	var t, i, e, n = {};
	i = navigator.userAgent.toLowerCase(), e = i.match(/msie/), e && (t = i.match(/msie ([\d.]+)/), t = parseInt(t[1], 10), t ? n.ie = t : null, 9 > t && ($(".popup-browser").fadeIn("slow"), $(".btn-link-close").click(function() {
		return $(".popup-browser").fadeOut("slow"), !1
	})))
}

function addBaidu() {
	var t = "https:" == document.location.protocol ? " https://" : " http://";
	document.write(unescape("%3Cscript src='" + t + "hm.baidu.com/h.js%3Fac5eba1e1ee5d595c1528f6e345d4c38' type='text/javascript'%3E%3C/script%3E"))
}

function smallTab() {}
$(function() {
	initCommnon(), bindEventCommnon()
}), $(window).resize(function() {
	imgWidth()
});