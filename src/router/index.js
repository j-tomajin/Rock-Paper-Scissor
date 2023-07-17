import { createRouter, createWebHistory } from "vue-router"

import Home from '../views/Home.vue'
import RockPaperScissor from "../views/RockPaperScissor.vue"
import RockPaperScissorLizardSpock from "../views/RockPaperScissorLizardSpock.vue"
import Result from '../views/Result.vue'
import HighScore from '../views/others/HighScore.vue'

// others
import Leaderboard from '../views/others/Leaderboard.vue'
import Rules from '../views/others/Rules.vue'
import Options from '../views/others/Options.vue'

// not found
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
            path: '/rock-paper-scissor-lizard-spock',
            name: 'bonus',
            component: RockPaperScissorLizardSpock,
        }, 
        {
            path: '/result',
            name: 'result',
            component: Result,
            children: [
                {
                    path: 'high-score',
                    name: 'setHighScore',
                    component: HighScore
                }
            ]
        }, 
        {
            path: '/leaderboard',
            name: 'leaderboard',
            component: Leaderboard,
        }, 
        {
            path: '/rules',
            name: 'Rules',
            component: Rules,
        }, 
        {
            path: '/options',
            name: 'options',
            component: Options,
        }, 
        {
          path: '/:patchMatch(.*)*',
          name: 'notFound',
          component: NotFoundView
      }
    ]
})

export default router