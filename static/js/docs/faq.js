// JavaScript Document
$(function(){
    $("input[type=text]").focus(function(){
        $(this).parent().css("border-color", "#0089ef");
        $(this).css("color", "#000");
    });
    $("input[type=text]").blur(function(){
        $(this).parent().css("border-color", "#bdbebe");
        $(this).css("color", "#bfbfbf");
    });
    $("textarea").focus(function(){
        $(this).css("border-color", "#0089ef");
        $(this).css("color", "#000");
    });
    $("textarea").blur(function(){
        $(this).css("border-color", "#bdbebe");
        $(this).css("color", "#bfbfbf");
    });
    $(".query_btn").click(function(){
      $(".query_bd").show();
    });  
    $("#title").val("请输入20字以内咨询题目");
    $("#content").val("请输入您希望咨询的问题");
    $("#submit").click(function() {
      $(this).parent().parent().hide();
      $("#dialog1").modal();
    });
  });

  

  function textCount(textId, maxLength, remainId) {
    var objText, objRemain, textLength;
    objText = $("#" + textId);
    textLength = objText.val().length;
    objRemain = document.getElementById(remainId);
    if (maxLength >= textLength) {
      objRemain.style.color = "black";
      objRemain.innerHTML = "还可输入 " + (maxLength - textLength) + " 字";
    } else {
      objRemain.style.color = "red";
      objRemain.innerHTML = "您已超出 " + (textLength - maxLength) + " 字";
    }
  }