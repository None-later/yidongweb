// JavaScript Document
	$(function(){
    $("input[type=text]").focus(function(){
        $(this).parent().css("border-color", "#0089ef");
        $(this).css("color", "#0089ef");
    });
    $("input[type=text]").blur(function(){
        $(this).parent().css("border-color", "#c6c6c6");
        $(this).css("color", "#b8b8b8");
    });
    $("#search").val("请输入关键词");
  });