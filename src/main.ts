import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fontsource-variable/manrope'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBz5C2kD7-tM7BLif1RkfmSqnKguQIkqUQ',
  authDomain: 'chsportnew.firebaseapp.com',
  projectId: 'chsportnew',
  storageBucket: 'chsportnew.firebasestorage.app',
  messagingSenderId: '186010716621',
  appId: '1:186010716621:web:405edf8ea944de5d39dc84',
}

initializeApp(firebaseConfig)

const app = createApp(App)
app.use(router)
app.mount('#app')
