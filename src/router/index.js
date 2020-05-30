import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Home from '@/views/Home/Home.vue'
import First from '@/views/Home/First.vue'
import Second from '@/views/Home/Second.vue'
import Third from '@/views/Home/Third.vue'
import Fourth from '@/views/Home/Fourth.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'first',
                name: 'First',
                component: First
            },
            {
                path: 'second',
                name: 'Second',
                component: Second
            },
            {
                path: 'third',
                name: 'Third',
                component: Third
            },
            {
                path: 'fourth',
                name: 'Fourth',
                component: Fourth
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((from, to, next) => {
    next()
})

export default router
