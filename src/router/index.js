/*
*
* 路由器对象模块
* */
import Vue from 'vue'
import VueRouter from "vue-router";
import MSite from "@/pages/MSite/MSite";
import Search from "@/pages/Search/Search";
import Order from "@/pages/Order/Order";
import Profile from "@/pages/Profile/Profile";
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:MSite
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/',
            redirect:MSite
        }

    ]
})
