import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faCalendar, faCheckCircle, faTimesCircle, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';

library.add(faCheckCircle);
library.add(faRedo);
library.add(faTimesCircle);
library.add(faHome);
library.add(faCalendar);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
