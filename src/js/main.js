import Vue from 'vue';
import store from './store/index';
import App from './modules/App.vue';
import * as scripts from './modules/scripts';

// VUE js
/* eslint-disable no-undef */
new Vue({
  el: '#appVue',
  store,
  render: h => h(App),
});
/* eslint-enable no-undef */

// Regular js 
scripts.init('appJS');
