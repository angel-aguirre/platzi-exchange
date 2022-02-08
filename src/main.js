import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';

import router from '@/router.js';
import { dollarFilter, percentFilter } from '@/filters.js';

Vue.filter('dollar', dollarFilter);
Vue.filter('percent', percentFilter);
Vue.config.productionTip = false;

new Vue({
    router: router,
    render: (h) => h(App),
}).$mount('#app');
