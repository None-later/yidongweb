/*!
 * 
 * jQuery form validation additional method
 * 
 * base on jQuery Validation Plugin v1.13.0
 *
 * http://fe.ksyun.com/
 *
 * Author: chaichunyan@kingsoft.com
 * 
 */

/*
 * 验证输入长度（中文两个字节） 
 */
jQuery.validator.addMethod("byteRangeLength", function(value, element, param) {
    var length = value.length;
    for(var i = 0; i < value.length; i++){
        if(value.charCodeAt(i) > 127){
            length++;
        }
    }
  return this.optional(element) || ( length >= param[0] && length <= param[1] );   
}, $.validator.format("请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)"));


// 邮政编码验证   
jQuery.validator.addMethod("isZipCode", function(value, element) {   
    var tel = /^[0-9]{6}$/;
    return this.optional(element) || (tel.test(value));
}, "请正确填写您的邮政编码");

//正确域名   
jQuery.validator.addMethod("isDomain", function(value, element) {   
    var tel = /^((\.?([A-Za-z0-9\-_])+([A-Za-z0-9\-_\.])*\.[A-Za-z]{2,})+)$/;
    return this.optional(element) || (tel.test(value));
}, "请填写正确的域名");

//IP段格式验证
jQuery.validator.addMethod("isOriginIp", function(value, element) {   
    var tel = /^(((2[0-4]\d|25[0-5]|1\d\d|0|[1-9]\d?)\.){3}(2[0-4]\d|25[0-5]|1\d\d|0|[1-9]\d?)((,|\||;)((2[0-4]\d|25[0-5]|1\d\d|0|[1-9]\d?)\.){3}(2[0-4]\d|25[0-5]|1\d\d|0|[1-9]\d?))*)$/;
    return this.optional(element) || (tel.test(value));
}, "请填写正确的IP");

//密码格式验证
jQuery.validator.addMethod("ispwd", function(value, element) {   
    var tel = /^(?=.*\d)(?=.*[A-Z])([a-zA-Z0-9]|[!-/\^\?@_~`]){6,32}$/;
    return this.optional(element) || (tel.test(value));
}, "请填写正确的密码格式");

//管理员账户关键字验证
jQuery.validator.addMethod("isKeyword", function(value, element) {   
    var tel = /^(?!(\s*root\s*|\s*ROOT\s*|\s*rdsrepladmin\s*|\s*RDSREPLADMIN\s*|\s*rdsadmin\s*|\s*RDSADMIN\s*)$).*$/;
    return this.optional(element) || (tel.test(value));
}, "输入内容为系统保留字，不允许使用");

//手机格式验证
jQuery.validator.addMethod("isPhone", function(value, element) {   
    var tel = /^1[3|4|5|7|8]\d{9}$/;
    return this.optional(element) || (tel.test(value));
}, "请填写正确的手机号码");

//备份保留天数验证
jQuery.validator.addMethod("isTime", function(value, element) {   
    var tel = /^([7-9]|1[0-5])$/;
    return this.optional(element) || (tel.test(value));
}, "请填写正确的备份保留天数");

// IP段
jQuery.validator.addMethod("isIpSection", function(value, element) {   
    var tel = /^(([01]?\d?\d|2[0-4]\d|25[0-5])\.){3}([01]?\d?\d|2[0-4]\d|25[0-5])\/(\d{1}|[0-2]{1}\d{1}|3[0-2])$/;
    return this.optional(element) || (tel.test(value));
}, "IP段格式错误");

// 用户名
jQuery.validator.addMethod("isUserName", function(value, element) {   
    var tel = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/
    return this.optional(element) || (tel.test(value));
}, "请填写正确的联系人名");

// 实例名称
jQuery.validator.addMethod("isTempName", function(value, element) {   
    var tel = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/
    return this.optional(element) || (tel.test(value));
}, "请填写正确的实例名称");

// 短信验证码
jQuery.validator.addMethod("isVerifyCode", function(value, element) {   
    var tel = /^[0-9]\d{5}$/
    return this.optional(element) || (tel.test(value));
}, "请输入6位数字验证码");

// url校验
jQuery.validator.addMethod("isURL", function(value, element) {   
    var tel = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;
    return this.optional(element) || (tel.test(value));
}, "请填写有效的游戏url");

// 身份证校验
jQuery.validator.addMethod("isIdCard", function(value, element) {   
    var tel = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/ 
    return this.optional(element) || (tel.test(value));
}, "请输入正确的身份证号");

// equalTo的相反用法（可使用在原密码与新密码不能相同的校验上）
jQuery.validator.addMethod("notequalTo", function(value, element,param) {
  return value != $(param).val();
}, "Please enter not the same value again.");

