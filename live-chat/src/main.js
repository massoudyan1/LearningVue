import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import global css
import './assets/main.css'

<<<<<<< HEAD
// import firebase auth service before app mount
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
    if(!app) {
        app = createApp(App)
        .use(router)
        .mount('#app')
    }
})

=======
createApp(App).use(router).mount('#app')
>>>>>>> c50aff4a97388bd2e4077be517b50c66b160f1ca
