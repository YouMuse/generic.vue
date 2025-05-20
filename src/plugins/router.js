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
        },
        {
            path: "/table",
            component: () => import('@/layouts/inbox.vue'),
            meta: {
                title: 'Table'
            },
            children: [
                {
                    path: "/table",
                    component: () => import('@/views/data-display/data-tables.vue'),
                    meta: {
                        title: 'Table'
                    }
                }
            ]
        }
    ]
    routeArray.forEach(route => {
        routes.push(route)
    })

    const router = createRouter({
        history: createWebHistory(),
        routes: routes
    })

    router.beforeEach((to, from, next) => {
        if (to.meta.title) {
            document.title = to.meta.title;
        }
        next();
    });

    app.use(router)
}