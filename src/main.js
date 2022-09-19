import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import routes from './routes/routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUserSecret,
  faHome,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret, faHome, faChevronDown);

createApp(App)
  .use(routes)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
