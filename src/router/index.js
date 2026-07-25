import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/artikel/:slug', name: 'article', component: ArticleView },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})
