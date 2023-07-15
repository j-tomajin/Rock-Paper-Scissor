import { createRouter, createWebHistory } from "vue-router"

import Home from '../views/Home.vue'
import RockPaperScissor from "../views/RockPaperScissor.vue"
import RockPaperScissorLizardSpock from "../views/RockPaperScissorLizardSpock.vue"
import Result from '../views/Result.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        }, 
        {
            path: '/rock-paper-scissor',
            name: 'rock-paper-scissor',
            component: RockPaperScissor,
        }, 
        {
            path: '/result',
            name: 'result',
            component: Result,
        }, 
        {
            path: '/rock-paper-scissor-lizard-spock',
            name: 'bonus',
            component: RockPaperScissorLizardSpock,
        }, 
        {
          path: '/:patchMatch(.*)*',
          name: 'notFound',
          component: NotFoundView
      }
    ]
})

export default router