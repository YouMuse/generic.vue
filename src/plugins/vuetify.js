// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

import {App} from 'vue'

export function installVuetify(app: App) {
    debugger
    const vuetify = createVuetify({
        components,
        directives,
    })

    app.use(vuetify)
}