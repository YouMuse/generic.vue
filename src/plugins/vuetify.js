// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

export function installVuetify(app) {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'system'
        },
    })

    app.use(vuetify)
}