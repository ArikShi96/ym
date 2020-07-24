import Vue from 'mpvue';
import App from './index.vue';

// add this to handle exception
Vue.config.errorHandler = (err) => {
  if (console && console.error) {
    console.error(err);
  }
};

const app = new Vue(App);
app.$mount();
