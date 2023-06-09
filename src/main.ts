import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

if(!navigator.geolocation){
    alert("Geolocation is not supported by your browser");
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
