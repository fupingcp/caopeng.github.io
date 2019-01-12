import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import exIndex from '@/views/example'
import vFor from '@/views/example/v-for'
import vOnClass from '@/views/example/v-on-class'
import slotScope from '@/views/example/slot-scope'
import computed from '@/views/example/computed'
import introduce from '@/views/example/IntroduceCompontents'
import translate from '@/views/example/translate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/example',
      name: 'exIndex',
      component: exIndex,
      children: [
        {
          path: '/example/v-for',
          name: 'vFor',
          component: vFor
        }, {
          path: '/example/v-on-class',
          name: 'v-on-class',
          component: vOnClass
        }, {
          path: '/example/slot-scope',
          name: 'slot-scope',
          component: slotScope
        }, {
          path: '/example/computed',
          name: 'computed',
          component: computed
        }, {
          path: '/example/introduce',
          name: 'introduce',
          component: introduce
        }, {
          path: '/example/translate',
          name: 'translate',
          component: translate
        }
      ]
    }
  ]
})
