$(function (){
	// 新需求0811 : 登录名添加验证规则
	// 规则 : 正确邮箱 或  正确邮箱#数字或字母, 如 abc@163.com#asd12
	$.validator.addMethod('email_subAccount', function(value, element){
		return this.optional(element) || /^\w+((-w+)|(\.\w+)|(\-)|(\w))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+(?:\#[A-Za-z0-9]+)?$/.test( value )
	},'子账号提示信息!');	
	
	var login = {
		init : function () {
			// 默认出发登录名, blur 事件
			$('#login_email').trigger('blur');
		},
		inputFocus: function (){	
			var $loginInput = $('#login_form input.login-input');

			$loginInput.focus(function (){
				$(this).addClass('c-border-blue');
			});
			$loginInput.blur(function (){
				$(this).removeClass('c-border-blue');
			});
		},
		validate: function (){
			var obj = {},
				obj_rules_imgCode = {},
				obj_messages_imgCode = {};

			obj.rules = {
				email: {
					required: true,
					email_subAccount: true
				},
				password: {
					required: true,
					rangelength: [6, 32]
				}
			};
			obj.messages = {
				email: {
					required: '请输入邮箱地址',
					email_subAccount: "请输入正确的邮箱格式或邮箱#子账号名称"
				},
				password: {
					required: '密码不可以为空',
					rangelength: '密码长度为{0}-{1}位'
				}
			};
			obj.rules_imgCode = {
				imgCode : {
					required: true,
					rangelength: [5, 5],
					remote: {
					    url: "/apply/verifyCode",     //后台处理程序
					    type: "post",               //数据发送方式
					    data: {                     //要传递的数据
					        imgCode: function() {
					            return $("#img-input").val();
					        }
					    }
					}
				}
			};
			obj.messages_imgCode = {
				imgCode : {
					required: '请输入验证码',
					rangelength: '验证码位数不正确',
					remote: '验证码错误'
				}
			}
			//	废弃的验证方式
			//  var status = $('.imgcode-pos').size();
			
			// 新异步验证方式
			$('#login_email').blur(function(){
				var val = $(this).val(),
					$imgcode = $('.imgcode-pos');

				$.ajax({
					type: "POST",
					url: "/user/getLoginFail",
					dataType : "json",
				    data: {      
				        email: function() {
				            return $("#login_email").val();
				        }
				    },
				    success : function(data){
				    	var status = data.status;

				    	if (status === 0) {
				    		$imgcode.hide();
							// 无验证码的表单验证
							loginValidate('noImgCode');
						} else {
							$imgcode.show();
							// 验证码的表单验证
							loginValidate('imgCode');
						}
				    },
				    
				})
			})

			function loginValidate (name) {

				if (name === 'noImgCode') {
					loginValidateMethod(obj.rules, obj.messages);
				} 
				else if (name === 'imgCode') {
					var rules = $.extend(obj.rules, obj.rules_imgCode);
					var messages = $.extend(obj.messages, obj.messages_imgCode);
					loginValidateMethod(rules,messages);
				}
			}

			function loginValidateMethod (rules, messages) {
				$('#login_form').validate({
					errorClass: 'c-error',
					// 子账号需求 : 判断是否为子账号登录
					submitHandler : function (form) {
						var $form = $('#login_form'),
                            url_account = $form.attr('action'),
							url_subAccount = url_account.replace('login-form', 'login-sub-form'),
							userName = $('#login_email').val(),
							result = userName.indexOf('#');

						if(result === -1 ) {
							$form.attr('action',url_account);
						} else {
							$form.attr('action',url_subAccount);
						}

						form.submit();
					},
					rules: rules,
					messages: messages
				});
			}
		},
		hideError: function(){
			$('.login-error-cloas').on('click',function(){
				$(this).parent().hide();
			})
		},
		//获取图片验证码
		getImgCode:function(){
			var url = '/verify/imgCode';

			setImgCodeUrl();

			$('.login-yz').on('click',function(){
				setImgCodeUrl()
			});

			function setImgCodeUrl(){
				var date = new Date().getTime();
				var newUrl = $('.login-yz').attr('src',url+'?'+date);
			};
		}
	}

	login.inputFocus();
	login.validate();
	login.hideError();
	login.getImgCode();
	login.init();
})
