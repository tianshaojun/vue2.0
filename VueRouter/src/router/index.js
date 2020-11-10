import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      }
    }, {
      path: '/hi',
      name: 'hi',
      components: {
        default: HelloWorld,
        left: Hi2,
        right: Hi1
      }
    }, {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params,
      beforeEnter: (to, from, next) => {
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
      }
    }, {
      path: '/goback',
      redirect: '/'
    }, {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    }, {
      path: '/hi1',
      component: Hi1,
      alias: '/jspang'
    }, {
      path: '/',
      component: HelloWorld,
      alias: '/home'
    }, {
      path: '*',
      component: Error
    }
  ]
})
