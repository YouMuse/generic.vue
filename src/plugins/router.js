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
                title: 'Login'
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
            path: "/user",
            component: () => import('@/layouts/inbox.vue'),
            meta: {
                title: '用户管理'
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
        },
        {
            path: "/room",
            component: () => import('@/layouts/inbox.vue'),
            meta: {
                title: '会议室管理'
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
                title: '设施管理'
            },
            children: [
                {
                    path: "/table",
                    component: () => import('@/views/data-display/facility-list.vue'),
                    meta: {
                        title: '设施管理'
                    }
                }
            ]
        },
        {
            path: "/reserve",
            component: () => import('@/layouts/inbox.vue'),
            meta: {
                title: '预约管理'
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
            path: "/appointment",
            component: () => import('@/layouts/constrained.vue'),
            meta: {
                title: '预约会议'
            },
            children: [
                {
                    path: "/appointment",
                    component: () => import('@/views/form/appointment.vue'),
                    meta: {
                        title: '预约会议'
                    }
                }
            ]
        },
        {
            path: "/test",
            component: () => import('@/layouts/constrained.vue'),
            meta: {
                title: '测试'
            },
            children: [
                {
                    path: "/test",
                    component: () => import('@/views/form/Test.vue'),
                    meta: {
                        title: '测试'
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