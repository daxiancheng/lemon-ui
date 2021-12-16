import { createRouter,  createWebHashHistory } from 'vue-router'

const routes = [{
    path: '/content',
    name: 'content',
    component: () => import('@views/content.vue'),
    children: [
        {
            path: '',
            name: 'button',
            component: () => import('@views/buttonDemo.vue')
        },
        // {
        //     path: 'button',
        //     name: 'button',
        //     component: () => import('@components/button.vue')
        // },
        {
            path: 'switch',
            name: 'switch',
            component: () => import('@views/switchDemo.vue')
        }
    ]
},{
    path: '/',
    name: 'index',
    component: () => import('@views/index.vue')
}]


const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

  export default router