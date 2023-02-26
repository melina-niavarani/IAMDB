import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'

import RadialProgress from "vue3-radial-progress";

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(RadialProgress);

app.mount('#app')
