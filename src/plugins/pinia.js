import {createPinia} from 'pinia'

export function installPinia(app) {
    const pinia = createPinia()
    app.use(pinia)
}