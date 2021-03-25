import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import About from '../views/About.vue'  🔹 Look in About componen in this file
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
    /*
        This makes the component only load when the user visits that spicific site
        The other routes are loaded when you enter the main webpage
    */
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  //redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //catchALL 404
  {
    path: '/:catchAll(.*)',
    name: '/NotFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router