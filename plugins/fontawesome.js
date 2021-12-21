import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fal } from '@fortawesome/pro-light-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false


library.add(fal)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
