$(function() {
    initCommnon();
    bindEventCommnon();
})

$(window).resize(function() {
    imgWidth();
});

// 页面初始化
function initCommnon() {
    // 获取头部用户登录信息
    getUserInfo();
    //banner根据屏幕变化裁切图片
    imgWidth();
    // 动态获取copyright年份
    getCopyrightYear();
    // 百度统计
    // addBaidu();
    // IE9以下，建议用户升级
    judgeBrowser();
}

// 事件绑定
function bindEventCommnon() {
    //导航划过下拉菜单 
    productsListMenu();
    // 合作案例：tab面板切换
    simpleTabToggle('hzal');
    // 合作伙伴：tab面板切换
    simpleTabToggle('hzhb');
    // 返回顶部
    backTop();
    //清空搜索框
    serchResult();
    //登录后user划过下拉菜单
    userList();
    //导航划过底部蓝边动画效果
    boderDn();
}

// 获取头部用户登录信息
function getUserInfo() {
        $.ajax({
            type: "GET",
            url: "/user/getUserInfo",
            success: function(data) {
                judgeUserInfo(data);
            }
        });
    }
    // 判断、修改头部用户登录信息
function judgeUserInfo(data) {
        var status = data.status;
        var userId, email, balance;
        if (status === 0) {
            email = data.data.email;
            balance = parseFloat(data.data.balance).toFixed(2);
            $('#login_head').hide();
            $('#logined_head').show();
            $('#logined_head .head-username').text(email);
            $('#logined_head .head-user-list .color-blue span').text(balance);
        }
    }
    //导航划过下拉菜单 
function productsListMenu() {
        var menuList = $('.pro-alert'),
            listcoment = $('.list-coment .pro-wrap-list');
        var index = 0;
        var timeout;
        menuList.hover(function() {
            clearTimeout(timeout);
            $(".list-coment").stop().show();
            var index = $(menuList).index($(this));
            $(listcoment).eq(index).siblings(listcoment).hide().end().fadeIn("fast");
        }, function() {
            timeout = setTimeout(function() {
                $(".list-coment").hide();
            }, 100)
        })
        listcoment.hover(function() {
            clearTimeout(timeout);
        }, function() {
            timeout = setTimeout(function() {
                $(".list-coment").hide();
            }, 100)
        })
    }
    // 合作案例：tab面板切换
function simpleTabToggle(className) {
        // tab面板 hover切换
        $('.' + className + ' .c-nav-tab-simple p a').mouseenter(function() {
            var $that = $(this)
            var $a = $('.' + className + ' .c-nav-tab-simple p a');
            var index = $a.index($that);

            $a.removeClass('active');
            $(this).addClass('active');
            $('.' + className + ' .c-list-pics .ul-wrap').hide();
            $('.' + className + ' .c-list-pics .ul-wrap').eq(index).show();
            return false;
        });
        // 点击‘更多’按钮，跳转到相应链接
        $('.' + className + ' .c-nav-tab-simple .a-more').click(function() {
            var src = $(this).closest('.c-nav-tab-simple').find('a.active').attr('href');
            $(this).attr('href', src);
        })
    }
    // 返回顶部
function backTop() {
        var toTop;
        var windowHeight = $(window).height();
        $('.c-backTop').hide();
        $(window).scroll(function() {
            toTop = $(document).scrollTop();
            if (toTop > windowHeight) {
                $('.c-backTop').show();
            } else {
                $('.c-backTop').hide();
            }
        })
        $('.c-backTop').click(function() {
            $('html,body').animate({
                scrollTop: '0px'
            }, 700);
            $('.c-backTop').hide();
        });
    }
    // 清除搜索框
function serchResult() {
    $('.c-help-serchclose').click(function() {
        $('.c-help-s-input').val("").attr("placeholder", "");
    })
}

//banner根据屏幕变化裁切图片
function imgWidth() {
    var screenWidth = $(window).width();
    var caseListWidth = $('.m-banner-box').width(),
        banner = $('.m-banner-box img'),
        bannerWidth = banner.width(),
        windowWidth = $(window).width(),
        offsetW = Math.abs(windowWidth - bannerWidth),
        left = offsetW / 2,
        right = windowWidth + left;
    if (screenWidth < 1920) {
        banner.css({
            "position": "absolute",
            "top": 0,
            "margin": "0 auto",
            "width": "1920px"
        });
        banner.css("left", -left);
        banner.css("clip", "rect(0," + right + "px,515px," + left + "px)");
    } else {
        banner.css({
            "position": "relative",
            "top": 0,
            "left": 0,
            "margin": "0 auto",
            "width": "100%",
            "clip": "auto"
        });
    }
}

//登录后user划过下拉菜单
function userList() {
        var bar = $('.head-user'),
            usersList = $('.head-user-list');
        bar.click(function() {
            usersList.toggle();
        });
    }
    //导航划过底部蓝边动画效果
function boderDn() {
        var liWidth, intervLeft;
        var $borderStyle = $('.border-sty'),
            $liLeft = $('.head-nav li'),
            $nav = $('.m-header-nav');
        // 初始化参数
        $liNow = $liLeft.find('.cur').parent(),
            liNowWidth = $liNow.width();
        liNowLeft = calculateLeft($liNow);
        // // 初始化长度
        // setBorderStyle(liNowWidth, liNowLeft);
        // 鼠标滑过效果
        $liLeft.mouseenter(function() {
            liWidth = $(this).width();
            intervLeft = calculateLeft($(this));
            setBorderStyle(liWidth, intervLeft);
        });
        // 鼠标离开效果
        $nav.mouseleave(function() {
                setBorderStyle(liNowWidth, liNowLeft);
            })
            // 计算left坐标
        function calculateLeft($that) {
                var left = 0;
                $that.prevAll().each(function(index, item) {
                    var width = $(this).width();
                    left += width;
                })
                return left;
            }
            // 设置底部蓝边
        function setBorderStyle(bWidth, bLeft) {
            $borderStyle.stop().animate({
                "width": bWidth,
                "left": bLeft
            }, "normal", "easeOutQuart");
        }
    }
    // 动态获取copyright年份
function getCopyrightYear() {
    var date = new Date();
    var year = date.getFullYear();
    $('.copyright-year').text(year);
}

// 判断为IE版本为9以下时，todo
function judgeBrowser() {
        var sys = {}
        var version, ua, ie;
        ua = navigator.userAgent.toLowerCase();
        ie = ua.match(/msie/);
        if (ie) {
            version = ua.match(/msie ([\d.]+)/);
            version = parseInt(version[1], 10);
            version ? sys.ie = version : null;
            if (version < 9) {
                $('.popup-browser').fadeIn('slow');
                $('.btn-link-close').click(function() {
                    $('.popup-browser').fadeOut('slow');
                    return false;
                })
            }
        }
    }
    // 百度统计
function addBaidu() {
    var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fac5eba1e1ee5d595c1528f6e345d4c38' type='text/javascript'%3E%3C/script%3E"));
}
