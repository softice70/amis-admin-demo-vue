import Vue from 'vue'
import App from './App.vue'
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'amis/lib/themes/default.css';
//import 'amis/lib/themes/antd.css';
//import 'amis/lib/themes/cxd.css';
//import 'amis/lib/themes/dark.css';
import 'amis/lib/helper.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
