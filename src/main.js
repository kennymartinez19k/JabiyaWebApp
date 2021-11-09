import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { library } from '@fortawesome/fontawesome-svg-core' // temperature-frigid
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone)
library.add(faTwitter)


// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
