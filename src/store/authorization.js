import {defineStore} from 'pinia'
import {computed, reactive} from 'vue'
import {loginApi} from '@/api/authorization.js'

export const authorizationStore = defineStore(
    'authorization',
    () => {
        const authorization = reactive({
            token: '',
            userInfo: null
        })

        const isAuthenticated = computed(() => {
            return authorization.token !== ''
        })

        async function login(username, password) {
            try {
                const response = await loginApi({username: username, password: password})

                authorization.token = response.data.token
                authorization.userInfo = response.data.userInfo

            } catch (error) {
                await logout()
                throw error;
            }
        }

        async function logout() {
            authorization.token = ''
            authorization.userInfo = null
        }

        return {authorization, isAuthenticated, login}
    })