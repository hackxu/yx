<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
      <div class="flex main" id="LiveInfo">
        <div class="up">
          <!--参与人数-->
          <div class=" visitNum">
            <!--<div class="visitNumLeft">回放 4月27日上午10:00</div>-->
            <div class="visitNumRight flex1">{{liveInfo.VisitCountDisplay}}人参与</div>
          </div>

          <!-- 视频播放器 -->
          <div class="video">
            <video v-show="videoShow" class="player" id="player" :poster="liveInfo.ThumbUrl" :src="liveInfo.Href4live"
                   controls="controls" playsinline=""
                   x-webkit-airplay="" webkit-playsinline="" preload="auto"></video>
            <div v-if="!videoShow" style="position:relative; background:#F1F1F1;">
              <img class="noShowImg" :src="liveInfo.ThumbUrl" style="width:100%; height:auto; display:block;">
              <img class="noShowImg"
                   style="position:absolute; width:50px!important; height:50px; left:15px; bottom:15px; background:rgba(0,0,0,0)"
                   src="http://static.jstv.com/ui/litchinews/v5/btnVideoPlay.png">
              <div class="videoImg" @click="videoPlay"
                   style="position:absolute; left:0; top:0; width:100%; height:100%"></div>
            </div>

          </div>

          <div class="lineShow hide"></div>
          <!-- 分类 -->
          <div class="flex menu">
            <div v-for="(item,$index) in navList.items" @click="selectStyle (item, $index) "
                 :class="{'navmenu':true,'menuRed':item.active}">
              <span>{{item.select}}</span>
            </div>
          </div>
        </div>
        <div class="down flex1">
          <router-view/>
        </div>

      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {httpUrl} from "@/api/http_url";

  export default {
    name: "App",
    data() {
      return {
        videoShow: false,
        liveInfo: {},
        navList: {
          active: false,
          items: [
            {select: '聊天互动'},
            {select: '红包雨'},
            {select: '榜单排行'},
          ]
        },
        routeLink:["InteractiveChat","RankingList","RedPackets"]
      };
    },
    methods: {
      selectStyle(item, $index) {
        this.$nextTick(function () {
          this.navList.items.forEach(function (item, index) {
            Vue.set(item, 'active', false);
          });
          Vue.set(item, 'active', true);
          this.$router.push(this.routeLink[$index])
        });
      },
      videoPlay() {
        this.videoShow = true
        var player = document.getElementById('player')
        player.play()
        player.addEventListener("player", function () {
          console.log("played")
        })
        player.addEventListener("pause", function () {
          console.log("paused")
        })

      },
      versions() {
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
          this.isAndroid = true
          return false
        }
        if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          this.isAndroid = false
          return false
        }

      },


    },
    mounted() {
      this.$http.get(httpUrl.videolive).then(
        response => {
          this.liveInfo = response.data.Data;
        },
        err => {
          console.log(err);
        }
      );
      this.versions()
      this.selectStyle(this.navList.items[0])

    },
    computed: {},
    created() {
    },
  };

</script>
<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
