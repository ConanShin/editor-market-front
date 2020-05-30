import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ClickOutside from 'vue-click-outside'

Vue.config.productionTip = false

Vue.directive('click-outside', ClickOutside)

const CLIENT_ID = 'wSIpNhzz66GNU1GeCqXH'
const CALLBACK_URL = 'http://localhost:8080'

Vue.prototype.naver = new naver.LoginWithNaverId({
    clientId: CLIENT_ID,
    callbackUrl: CALLBACK_URL,
    isPopup: false,
    loginButton: {color: 'white', type: 1, height: 60}
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
