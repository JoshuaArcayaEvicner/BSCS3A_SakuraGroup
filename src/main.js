import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import sakuraComponents from 'sakura-component';
import "../dist/style.css";

const app = createApp(App);

app.use(sakuraComponents);

app.mount('#app');
