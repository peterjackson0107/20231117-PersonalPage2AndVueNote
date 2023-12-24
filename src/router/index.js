import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/VtextAndVmodel',
      name: 'VtextAndVmodel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VtextAndVmodel.vue')
    },
    {
      path: '/Vfor',
      name: 'Vfor',
      component: () => import('../views/Vfor.vue')
    },
    {
      path: '/VforKeban',
      name: 'VforKeban',
      component: () => import('../views/VforKeban.vue')
    },
    {
      path: '/Von',
      name: 'Von',
      component: () => import('../views/Von.vue')
    },
    {
      path: '/Vbind',
      name: 'Vbind',
      component: () => import('../views/Vbind.vue')
    },
    {
      path: '/VifAndVshow',
      name: 'VifAndVshow',
      component: () => import('../views/VifAndVshow.vue')
    },
    {
      path: '/WatchAndComputed',
      name: 'WatchAndComputed',
      component: () => import('../views/WatchAndComputed.vue')
    },
    {
      path: '/Storage',
      name: 'Storage',
      component: () => import('../views/Storage.vue')
    },
    {
      path: '/Props',
      name: 'Props',
      component: () => import('../views/Props.vue')
    },
    {
      path: '/Emit',
      name: 'Emit',
      component: () => import('../views/Emit.vue')
    },
    {
      path: '/Accouting',
      name: 'Accouting',
      component: () => import('../views/Accouting.vue')
    },
    {
      path: '/DataFlow',
      name: 'DataFlow',
      component: () => import('../views/DataFlow.vue')
    },
    {
      path: '/ProvideAndInject',
      name: 'ProvideAndInject',
      component: () => import('../views/ProvideAndInject.vue')
    },
    {
      path: '/User/:userId',
      name: 'User',
      component: () => import('../views/User.vue'),
      props:true
    },
    {
      path: '/RouteFam',
      name: 'RouteFam',
      component: () => import('../views/RouteFam.vue'),
      children:[
        {
          path:'RouteChild1',
          component: () => import('../components/RouteChild1.vue'),
        },
        {
          path:'RouteChild2',
          component: () => import('../components/RouteChild2.vue'),
        },
        {
          path:'BootStrapNote',
          component: () => import('../components/BootStrapNote.vue'),
          alias:"",
        }
      ]
    },
    {
      path: '/Vslot',
      name: 'Vslot',
      component: () => import('../views/Vslot.vue'),
    },
    {
      path: '/EnglishChild',
      name: 'EnglishChild',
      component: () => import('../views/EnglishChild.vue'),
    },
    {
      path: '/KoreaChild',
      name: 'KoreaChild',
      component: () => import('../views/KoreaChild.vue'),
    },
    {
      path: '/ChineseChild',
      name: 'ChineseChild',
      component: () => import('../views/ChineseChild.vue'),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component:() =>import('../views/NotFound.vue')
    }
  ]
})

export default router
