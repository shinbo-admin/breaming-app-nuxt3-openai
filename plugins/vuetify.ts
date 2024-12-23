import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#8BC34A',
            secondary: '#558B2F',
            background: '#F1F8E9',
            surface: '#FFFFFF',
            header: '#689F38',
            footer: '#33691E',
            error: '#D32F2F',
            info: '#1976D2',
            success: '#388E3C',
            warning: '#FFA000',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#8BC34A',
            secondary: '#33691E',
            background: '#263238',
            surface: '#37474F',
            header: '#455A64',
            footer: '#263238',
            error: '#EF9A9A',
            info: '#90CAF9',
            success: '#A5D6A7',
            warning: '#FFE082',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
