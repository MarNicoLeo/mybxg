/**
 * Created by Administrator on 2017/6/7.
 */
define(['jquery','cookie'],function ($) {
    $('#loginId').click(function () {
        $.ajax({
            type:'post',
            url:'/api/login',
            dataType:'json',
            data:$('#loginForm').serialize(),
            success: function (data) {
                if(data.code==200){
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    location.href='/index/index';
                }
            }
        });
        return false;
    })
})