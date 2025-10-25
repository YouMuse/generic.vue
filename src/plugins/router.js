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
            path: "/login",
            component: () => import('@/layouts/sign-in.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: '/:pathMatch(.*)',
            redirect: '/404'
        }
    ]

    const routeArray = [
        // {
        //     path: "/",
        //     component: () => import('@/layouts/constrained.vue'),
        //     meta: {},
        //     children: [
        //         {
        //             path: "/",
        //             component: () => import('@/views/form/appointment.vue'),
        //             meta: {
        //                 title: '预约会议'
        //             }
        //         }
        //     ]
        // },
        {
            path: "/",
            component: () => import('@/layouts/constrained.vue'),
            meta: {},
            children: [
                {
                    path: "/",
                    component: () => import('@/views/form/appointment.vue'),
                    meta: {
                        title: '预约会议'
                    }
                }
            ]
        },
        {
            path: "/user",
            component: () => import('@/layouts/constrained.vue'),
            meta: {},
            children: [
                {
                    path: "/user",
                    component: () => import('@/views/form/personal-center.vue'),
                    meta: {
                        title: '我的预约'
                    }
                }
            ]
        },
        {
            path: "/room",
            component: () => import('@/layouts/inbox.vue'),
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: "/room",
                    component: () => import('@/views/data-display/room-list.vue'),
                    meta: {
                        title: '会议室管理'
                    }
                }
            ]
        },
        {
            path: "/facility",
            component: () => import('@/layouts/inbox.vue'),
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: "/facility",
                    component: () => import('@/views/data-display/facility-list.vue'),
                    meta: {
                        title: '设施管理'
                    }
                }
            ]
        },
        {
            path: "/scheduling",
            component: () => import('@/layouts/inbox.vue'),
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: "/scheduling",
                    component: () => import('@/views/data-display/scheduling-list.vue'),
                    meta: {
                        title: '排班管理'
                    }
                }
            ]
        },
        {
            path: "/reserve",
            component: () => import('@/layouts/inbox.vue'),
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: "/reserve",
                    component: () => import('@/views/data-display/reserve-list.vue'),
                    meta: {
                        title: '预约管理'
                    }
                }
            ]
        },
        {
            path: "/user",
            component: () => import('@/layouts/inbox.vue'),
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: "/user",
                    component: () => import('@/views/data-display/user-list.vue'),
                    meta: {
                        title: '用户管理'
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

        const isAuthenticated = localStorage.getItem('token')

        if (to.meta.requiresAuth && !isAuthenticated) {
            next('/login')
        } else if (to.path === '/login' && isAuthenticated) {
            next('/')
        } else {
            next()
        }
    });

    app.use(router)
}