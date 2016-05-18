function init() {
	$.fn.cycle.updateActivePagerLink = function(e, i) {
		$(e).find("a").removeClass("active").filter("a:eq(" + i + ")").addClass("active")
	}, slideAutoHeight()
}

function bindEvent() {
	$("#slide_main .c-slide-cont ul").cycle({
		fx: "scrollHorz",
		easeIn: "easeOutCirc",
		timeout: 5e3,
		speed: 600,
		pagerEvent: "mouseover",
		pager: ".c-slide .c-slide-pages p"
	})
}

function slideAutoHeight() {
	var e = $(".c-slide-cont li:eq(0)").find("a");
	e[0].onload = function() {
		var i = e.height();
		$(".c-slide-main ul").height(i)
	}
}
$(function() {
	init(), bindEvent()
});