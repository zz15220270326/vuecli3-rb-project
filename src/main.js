import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// ? iView
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

// ? vue-quill-editor
import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// todo Echarts
import echarts from 'echarts'

Vue.use(ViewUI)
Vue.use(VueQuillEditor)

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

// EventBus
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#langyun')