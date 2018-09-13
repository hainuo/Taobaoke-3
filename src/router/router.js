
// 这里面负责写路由映射，便于管理

// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const router = new VueRouter({
    routes:[
        // { path: '/home',component:"home", component: require('../components/Home.vue').default},
        { path: '/',component:"home", component: require('../components/Home.vue').default},
    ]
})

// 输出router
export default router;

