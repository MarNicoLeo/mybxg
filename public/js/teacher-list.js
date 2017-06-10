/**
 * Created by Administrator on 2017/6/9.
 */
define (['jquery','template','bootstrap'],function ($,template) {
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function (data) {
            //讲师列表加载
            var html=template('teacherInfoTpl',{list:data.result});
            $('#teacherInfo').html(html);

            //讲师模态框加载
            $('#teacherInfo a:first-child').click(function () {
                var tcId=$(this).closest('td').attr('data-id');
                $.ajax({
                    type:'get',
                    url:'/api/teacher/view', //TODO 看清接口地址，两层
                    data:{tc_id:tcId},
                    dataType:'json',
                    success:function (data) {
                        data.result.tc_hometown=data.result.tc_hometown.split('|').join(' ');
                        var html=template('teachcerModalTpl',data.result);
                        $('#teachcerModal').html(html);
                        $('#tc-modal').modal();
                    }
                });
            });

            //讲师禁/启用
            $('#teacherInfo a:last-child').click(function () {
                // var that=$(this);
                var that=this;
                var tcStatus=$(this).closest('td').attr('data-status');
                var tcId=$(this).closest('td').attr('data-id');
                $.ajax({
                    type:'post',
                    data:{
                        tc_id:tcId,
                        tc_status:tcStatus
                    },
                    dataType:'json',
                    url:'/api/teacher/handle',
                    success:function (data) {
                        if(data.code==200){//TODO   ajax 回调中的this指的是这个对象（在一个对象中）
                            $(that).closest('td').attr('data-status',data.result.tc_status);//TODO 状态位为1时处于启用状态，为0时为禁用状态
                            if(data.result.tc_status==1){
                                $(that).text('启 用');
                            }else{
                                $(that).text('注 销');
                            }
                        }
                    }
                })
            })


        }
    })
})