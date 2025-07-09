import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { lazyPlugin } from '@/directives'
// import {componentPlugin} from '@/components'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
// app.use(componentPlugin) 已经有了插件所以不需要手动全局注册引入也可以完成自动引入component下的组件
app.mount('#app')
