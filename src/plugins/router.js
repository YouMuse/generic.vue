import {createRouter, createWebHistory} from 'vue-router'


export function installRouter(app) {
    const routes = [
        {
            path: '/404',
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

    const routeArray = [
        {
            path: "/",
            component: () => import('@/layouts/inbox.vue'),
            meta: {
                title: 'Home'
            },
            children: [
                {
                    path: "/",
                    component: () => import('@/views/dashboard.vue'),
                    meta: {
                        title: 'Dashboard'
                    }
                }
            ]
        },
        {
            path: "/list",
            component: () => import('@/layouts/extended-toolbar.vue'),
            meta: {
                title: 'List'
            },
            children: [
                {
                    path: "/list",
                    component: () => import('@/views/dashboard.vue'),
                    meta: {
                        title: 'List'
                    }
                }
            ]
        },
        {
            path: "/login",
            component: () => import('@/layouts/sign-in.vue'),
            meta: {
                title: 'Login'
            }
        }
    ]
    routeArray.forEach(route => {
        routes.push(route)
    })

    const router = createRouter({
        history: createWebHistory(),
        routes: routes
    })

    app.use(router)
}