import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import UIkit from 'uikit';
import servicesPlugins from './plugins'
import Icons from 'uikit/dist/js/uikit-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core' 
import { fas, faArrowLeft, faTruck, faTruckPickup, faUser } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faYoutube)
library.add(faUser)
library.add(faTruck)
library.add(faTruckPickup)
library.add(faPhone)
library.add(faArrowLeft)
library.add(faTwitter)


// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(servicesPlugins)
.use(router)
.mount('#app')
