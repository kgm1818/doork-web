import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        name: 'Home',
        path: '/',
        component: () => import("@/pages/Home") 
    },
    {
        name: 'Gridcard',
        path: '/gridcard',
        component: () => import("@/pages/Gridcard") 
    },
    {
        name: 'canvas',
        path: '/canvas',
        component: () => import("@/pages/Canvas") 
    },
    {
        name: 'SeatMap',
        path: '/seat-map',
        component: () => import("@/pages/SeatMap") 
    }]
})