// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import Home from './pages/Home.vue'
import router from './router'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import './assets/css/font-awesome.min.css'
import './assets/css/animate.min.css'
import './assets/js/wow.min'
import './assets/js/main'
import './assets/css/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  template: '<Home/>',
  components: { Home }
})
