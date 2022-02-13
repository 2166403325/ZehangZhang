import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

//异步
const Account = () => import('../views/Account/index.vue')

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
    }
]

const router = new VueRouter({
    routes
})

export default router