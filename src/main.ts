import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { initializeApp } from 'firebase/app'
import '@fontsource-variable/manrope'

const firebaseConfig = {
  apiKey: 'AIzaSyBz5C2kD7-tM7BLif1RkfmSqnKguQIkqUQ',
  authDomain: 'chsportnew.firebaseapp.com',
  projectId: 'chsportnew',
  storageBucket: 'chsportnew.firebasestorage.app',
  messagingSenderId: '186010716621',
  appId: '1:186010716621:web:405edf8ea944de5d39dc84',
}

initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
