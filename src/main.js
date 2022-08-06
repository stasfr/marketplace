//vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

//styles
import './assets/styles/main.scss'

library.add(faCartShopping)

const app = createApp(App)

app.component(FontAwesomeIcon)
app.use(store)
app.use(router)
app.mount('#app')
