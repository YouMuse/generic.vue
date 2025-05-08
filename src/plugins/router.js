import {createRouter, createWebHistory} from 'vue-router'


export function installRouter(app) {
    const routes = [
        {
            path: "/",
            redirect: "/",
            component: () => import('@/layouts/inbox.vue'),
            meta: {
                title: 'Home'
            },
            children: [
                {
                    path: "/",
                    name: "Home",
                    component: () => import('@/components/v-main/dashboard.vue'),
                    meta: {
                        title: 'Dashboard'
                    }
                }
            ]
        },
        {
            path: '/404',
            name: "NotFound",
            component: () => import('@/layouts/not-found.vue'),
            meta: {
                title: 'NotFound'
            }
        },
        {
            path: '/:pathMatch(.*)',
            redirect: '/404'
        }
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

    app.use(router)
}