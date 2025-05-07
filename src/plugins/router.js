import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: "/",
        component: () => import('@/components/Dashboard.vue'),
    },
    {
        path: '/404',
        name: "NotFound",
        component: () => import('@/components/NotFound.vue'),
        meta: {title: 'iNeeko - 404', requireAuth: false, isPublic: true}
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]

export function installRouter(app) {
    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    app.use(router)
}