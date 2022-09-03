import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import router from './routers';
import './style.css';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
