import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchingView from '../views/SearchingView.vue'
import CategoryListView from '../views/CategoryListView.vue'
import ErrorSendView from '../views/ErrorSendView.vue'
import SearchResultView from '../views/SearchResultView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/searching',
    name: 'searching',
    component: SearchingView
  },
  {
    path: '/errorsend',
    name: 'errorsend',
    component: ErrorSendView
  },
  {
    path: '/searchresult/:law_title',
    name: 'searchresult',
    component: SearchResultView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryListView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
