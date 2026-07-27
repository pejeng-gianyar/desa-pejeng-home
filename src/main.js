import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import id from './locales/id.json'
import en from './locales/en.json'

const savedLocale = localStorage.getItem('locale') || 'id'

const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: 'id',
  messages: { id, en },
})

createApp(App).use(router).use(i18n).mount('#app')
