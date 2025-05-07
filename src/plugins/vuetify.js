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
            themes: {
                light: {
                    colors: {
                        'surface-variant-alt': '#dedede',
                        primary: '#1867c0',
                        secondary: '#5CBBF6',
                        tertiary: '#E57373',
                        accent: '#005CAF',
                        quarternary: '#B0D1E8',
                        'surface-bright': '#fafafa',
                    },
                },
                dark: {
                    colors: {
                        'surface-variant-alt': '#333333',
                        primary: '#2196F3',
                        secondary: '#424242',
                        tertiary: '#E57373',
                        accent: '#FF4081',
                        quarternary: '#B0D1E8',
                        'surface-bright': '#474747',
                    },
                },
                blackguard: {
                    dark: true,
                    colors: {
                        background: '#0f0c24',
                        primary: '#e7810d',
                        surface: '#1e184a',
                        'on-surface-variant': '#4c219e',
                        info: '#9c27b0',
                        accent: '#FF4081',
                        success: '#84b38a',
                        'surface-bright': '#362b89',
                    },
                    variables: {
                        'theme-code': '#15123d',
                    },
                },
            },
        },
    })

    app.use(vuetify)
}