
    define(['jquery','nprogress','template','cookie'],function ($,nprogress,template) {//TODO 传参时要注意位置
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
        // 加载遮罩效果
        $(document).ajaxStart(function() {
            // 显示遮罩效果
            console.log(1);
            $('.overlay').show();
        });
        $(document).ajaxStop(function() {
            // 隐藏遮罩效果
            $('.overlay').hide();
            console.log(2);
        });

        nprogress.start();
        //
        nprogress.done();
    })

