//vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

//styles
import './assets/styles/main.scss'

library.add(faCartShopping, faPlus, faMinus)

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
