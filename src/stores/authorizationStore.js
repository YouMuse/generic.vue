import {defineStore} from 'pinia'
import {computed, reactive} from 'vue'
import {login} from '@/services/authorizationService.js'

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

        async function loginWithEmailAndPassword(email, password) {
            try {
                const data = {
                    username: email,
                    password: password
                }

                const response = await login(data)

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