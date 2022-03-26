import { createRouter } from 'vue-router';
import { createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'user',
            path: '/user',
            component: () => import('./Test.vue'),
            meta: {
                a: '111'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to.matched)
    console.log(to.fullPath)
})

export default router
