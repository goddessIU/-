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



export default router
