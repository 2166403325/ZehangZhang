import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import { NoticeBar } from 'vant';

//异步
const Account = () => import('../views/Account/index.vue')
const RiskArea = () => import('../views/RiskArea/index.vue')

Vue.use(VueRouter)
Vue.use(NoticeBar)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/account',
        name: 'Account',
        component: Account
    },
    {
        path: '/riskArea',
        name: 'RiskArea',
        component: RiskArea
    }
]

const router = new VueRouter({
    routes
})

export default router