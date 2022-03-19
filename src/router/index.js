import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TasksView from '../views/TasksView.vue'
import FutureView from '../views/FutureView.vue'
import PendingView from '../views/PendingView.vue'
import PerfomanceView from '../views/PerfomanceView.vue'
import EditTaskView from '../views/EditTaskView.vue'
// import Navigator from '../components/Navigator.vue'

// component view from views
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/tasks',
    name: 'tasks',
    component: TasksView
  },
  {
    path: '/future',
    name: 'future',
    component: FutureView
  },
  {
    path: '/pending',
    name: 'pending',
    component: PendingView
  },
  {
    path: '/perfomance',
    name: 'perfomance',
    component: PerfomanceView
  },

  // Edit task route 
  {
    path: '/edittask/:taskId',
    name: 'edittask',
    component: EditTaskView
  },

  // {
  //   path: '/navigator',
  //   name: 'navigator',
  //   component: Navigator
  // },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
