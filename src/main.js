import {createApp} from 'vue'

import {installVuetify} from '@/plugins/vuetify'
import {installRouter} from '@/plugins/router'

import App from './App.vue'

const app = createApp(App)

installVuetify(app)
installRouter(app)

app.mount('#app')
