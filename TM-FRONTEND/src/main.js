import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.baseURL = 'http://localhost:5000/api';

const token = Cookies.get('token');
if (token) {
  axios.defaults.headers.common['x-auth-token'] = token;
}

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
