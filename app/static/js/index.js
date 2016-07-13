// JavaScript Document
$(function()
{
    /***用户案例滑动***/
    var page = 1;
    var i = 2; //每版放2个li
    var flag = 1;

    $("span.prev").addClass("grey");
    var $parent = $("#yhal"); //根据当前点击元素获取到父元素
    var $v_show = $parent.find("ul.clearfix"); //寻找到“视频内容展示区域”
    var $v_content = $parent.find("div.v_content"); //寻找到“视频内容展示区域”外围的DIV元素
    var v_width = $v_content.width();
    var len = $v_show.find("ul").length;  //总的视频图片数    
    var page_count = Math.ceil(len / i);   
                        //只要不是整数，就往大的方向取最小的整数
    $v_show.css("width", v_width * page_count); //隐藏的“视频内容展示区域”div的总长度

    if(len <= 2)
    {
      $("#yhal_next span.next").addClass("grey");
    }
     
    //向后 按钮
    $("#yhal_next").click(function(){    //绑定click事件   
      if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
        if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
          //$v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
          //page = 1;
          return false;
        }else{
          $v_show.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
          page++;
          flag = page;
        }
          if (flag == page_count) {
            $("#yhal_next span.next").addClass("grey");
          }else{
            $("#yhal_next span.next").removeClass("grey");
          }

          if (flag == 1) {
            $("#yhal_prev span.prev").addClass("grey");
          }else{
            $("#yhal_prev span.prev").removeClass("grey");
          }

        
      }
    });

    //往前 按钮
    $("#yhal_prev").click(function(){
     if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
       if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
        //$v_show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
        //page = page_count;
        //continue;
        return false;
      }else{
        $v_show.animate({ left : '+='+v_width }, "slow");
        page--;
        flag = page;
      }
          if (flag == 1) {
            $("#yhal_prev span.prev").addClass("grey");
          }else{
            $("#yhal_prev span.prev").removeClass("grey");
          }

          if (flag == page_count) {
            $("#yhal_next span.next").addClass("grey");
          }else{
            $("#yhal_next span.next").removeClass("grey");
          }
      
    }
    });


    /***最新公告滑动***/
    var page2 = 1;
    var i = 2; //每版放2个li
    var flag2 = 1;

    $("span.prev").addClass("grey");
    var $parent2 = $("#zxgg"); //根据当前点击元素获取到父元素
    var $v_show2 = $parent2.find("ul.clearfix"); //寻找到“视频内容展示区域”
    var $v_content2 = $parent2.find("div.v_content"); //寻找到“视频内容展示区域”外围的DIV元素
    var v_width2 = $v_content2.width();
    var len2 = $v_show2.find("ul").length;  //总的视频图片数    
    var page_count2 = Math.ceil(len2 / i);   
                        //只要不是整数，就往大的方向取最小的整数
    $v_show2.css("width", v_width2 * page_count2); //隐藏的“视频内容展示区域”div的总长度
    
    if(len2 <= 2)
    {
      $("#zxgg_next span.next").addClass("grey");
    }
     
    //向后 按钮
    $("#zxgg_next").click(function(){    //绑定click事件   
      if( !$v_show2.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
        if( page2 == page_count2 ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
          //$v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
          //page = 1;
          return false;
        }else{
          $v_show2.animate({ left : '-='+v_width2 }, "slow");  //通过改变left值，达到每次换一个版面
          page2++;
          flag2 = page2;
        }
          if (flag2 == page_count2) {
            $("#zxgg_next span.next").addClass("grey");
          }else{
            $("#zxgg_next span.next").removeClass("grey");
          }

          if (flag2 == 1) {
            $("#zxgg_prev span.prev").addClass("grey");
          }else{
            $("#zxgg_prev span.prev").removeClass("grey");
          }

        
      }
    });

    //往前 按钮
    $("#zxgg_prev").click(function(){
      if( !$v_show2.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
        if( page2 == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
          //$v_show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
          //page = page_count;
          //continue;
          return false;
        }else{
          $v_show2.animate({ left : '+='+v_width2 }, "slow");
          page2--;
          flag2 = page2;
        }
          if (flag2 == 1) {
            $("#zxgg_prev span.prev").addClass("grey");
          }else{
            $("#zxgg_prev span.prev").removeClass("grey");
          }

          if (flag2 == page_count2) {
            $("#zxgg_next span.next").addClass("grey");
          }else{
            $("#zxgg_next span.next").removeClass("grey");
          }
      
      }
    });
});