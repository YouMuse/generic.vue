import {createApp} from 'vue'

import {installVuetify} from '@/plugins/vuetify'

import App from './App.vue'

const app = createApp(App)

installVuetify(app)

app.mount('#app')
