import Vue from 'vue'
import Router from 'vue-router'
import LiveInfo from '@/components/index'
import InteractiveChat from '@/components/InteractiveChat'
import RankingList from '@/components/RankingList'
import RedPackets from '@/components/RedPackets'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'LiveInfo',
    //   component:LiveInfo,
    //   children: [
        {
          path: '/InteractiveChat',
          name: 'InteractiveChat',
          component: InteractiveChat
        },
        {
          path: '/RankingList',
          name: 'RankingList',
          component: RankingList
        },
        {
          path: '/RedPackets',
          name: 'RedPackets',
          component: RedPackets
        },
    //
    //   ]
    // },

  ]
})
