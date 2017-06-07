/**
 * Created by Administrator on 2017/6/7.
 */
requirejs.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:"jquery/jquery.min",
        bootstrap:"bootstrap/js/bootstrap.min",
        cookie:"jquery-cookie/jquery.cookie",
        login:"../js/login",
        common:'../js/common'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
})