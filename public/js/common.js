    //
	// NProgress.start();
    //
	// NProgress.done();

    define(['jquery','cookie'],function ($) {
        $('.navs ul').prev('a').on('click', function () {
            $(this).next().slideToggle();
        });

        $('#logout').click(function () {
            $.ajax({
                type:'post',
                url:'/api/logout',
                dataType:'json',
                success:function (data) {
                    location.href='/login';
                }
            })
        });

        var pathname=location.pathname;
        if(pathname!='/login'&& !$.cookie('PHPSESSID')){
            location.href='/login';
        }
        var loginMes=$.cookie('loginInfo')&&JSON.parse($.cookie('loginInfo'));
        if(loginMes){
            $('.aside .profile').find('img').attr('src',loginMes.tc_avatar);
            $('.aside .profile').find('h4').text(loginMes.tc_name);
        }

    })

