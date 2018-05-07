// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 方式一  可以在ie11下运行
import ECharts from 'vue-echarts'

// 方式二 ie11不兼容
// import ECharts from 'vue-echarts/components/ECharts'
// import 'echarts/lib/chart/pie'
// import 'echarts/lib/component/tooltip'

import App from './App'

Vue.config.productionTip = false
Vue.component('chart', ECharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
