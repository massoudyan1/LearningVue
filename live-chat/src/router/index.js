import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
<<<<<<< HEAD
import { projectAuth } from '../firebase/config'

// auth guards
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('current user in auth guard: ', user)
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}
=======
>>>>>>> c50aff4a97388bd2e4077be517b50c66b160f1ca

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
<<<<<<< HEAD
    component: Chatroom,
    beforeEnter: requireAuth
=======
    component: Chatroom
>>>>>>> c50aff4a97388bd2e4077be517b50c66b160f1ca
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

<<<<<<< HEAD
export default router
=======
export default router
>>>>>>> c50aff4a97388bd2e4077be517b50c66b160f1ca
