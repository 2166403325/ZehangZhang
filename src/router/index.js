import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

//异步
const Account = () => import('../views/Account/Account.vue')
const RiskArea = () => import('../views/RiskArea/RiskArea.vue')
const Prevention = () => import('../views/Prevention/Prevention.vue')
const Citys = () => import('../views/Citys/Citys.vue')
const Travel = () => import('../views/Travel/Travel.vue')
const SelectCity = () => import('../views/SelectCity/SelectCity.vue')
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
    },
    {
        path: '/travel',
        name: 'Travel',
        component: Travel
    },
    {
        path: '/selectCity',
        name: 'SelectCity',
        component: SelectCity
    }
]

const router = new VueRouter({
    routes
})

export default router