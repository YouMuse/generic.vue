import {createApp} from 'vue'

import {installVuetify} from '@/plugins/vuetify'
import {installRouter} from '@/plugins/router'
import {installPinia} from '@/plugins/pinia'

import App from './App.vue'

const app = createApp(App)

installVuetify(app)
installRouter(app)
installPinia(app)

app.mount('#app')
