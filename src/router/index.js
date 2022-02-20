import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

//异步
const Account = () => import('../views/Account/index.vue')
const RiskArea = () => import('../views/RiskArea/index.vue')
const Prevention = () => import('../views/Prevention/index.vue')
const Citys = () => import('../views/Citys/Citys.vue')
Vue.use(VueRouter)

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
    },
    {
        path: '/prevention',
        name: 'Prevention',
        component: Prevention
    },
    {
        path: '/citys/:cityname',
        name: 'Citys',
        component: Citys,
        props: true
    }
]

const router = new VueRouter({
    routes
})

export default router