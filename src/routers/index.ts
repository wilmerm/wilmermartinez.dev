
import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '../components/Index.vue';
import NotFound from '../components/NotFound.vue';


const routes = [
  { path: '/', name: 'Home', component: Index },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;