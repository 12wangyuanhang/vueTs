import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({ 
    history: createWebHistory(), 
    routes: [
        { 
            path: '/',
            redirect:'/home',
        },{
            path:'/home',
            component: () => import('../views/test2.vue') 
        },{ 
            path: '/test3', 
            component: () => import('../views/test3.vue'),
            children: [
                {
                    path: 'child1',
                    name: 'Child1',
                    component: () => import('../views/childDome.vue')
                },
                {
                    path: 'child2',
                    name: 'Child2',
                    component: () => import('../views/childDome1.vue')
                },
            ]
        },{ 
            path: '/test5', 
            component: () => import('../views/test5.vue') 
        },{ 
            path: '/particles', 
            component: () => import('../views/particles.vue') 
        },{ 
            path: '/three', 
            component: () => import('../views/three.vue') 
        },{ 
            path: '/draggable', 
            component: () => import('../views/draggable.vue') 
        },{ 
            path: '/newTest1', 
            component: () => import('../views/newViews/test.vue') 
        },
    ] 
})
// router.beforeEach((to, form, next)=>{
//     if(to.path == '/home'){
//         next();
//     } else {
//         if(sessionStorage.getItem('token')){
//             console.log(1111111)
//             next();
//         }else {
//             next({
//                 path:'/home'
//             });
//         }
//     }
    
// })

export default router