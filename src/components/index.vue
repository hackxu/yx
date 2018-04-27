<template>
    <div class="flex main" id="LiveInfo">
        <div class="up">
            <!-- 视频播放器 -->
            <div class="video">
                <div style="position:relative; background:#F1F1F1;"> <img class="noShowImg" :src="liveInfo.ThumbUrl" style="width:100%; height:auto; display:block;"> <img class="noShowImg" style="position:absolute; width:50px!important; height:50px; left:15px; bottom:15px; background:rgba(0,0,0,0)" src="http://static.jstv.com/ui/litchinews/v5/btnVideoPlay.png">
                    <div class="videoImg" style="position:absolute; left:0; top:0; width:100%; height:100%"> </div>
                </div>
            </div>
            <div class="lineShow hide"></div>
            <!-- 时间 信息 -->
            <div class="flex visitNum">
                <div class="visitNumLeft">回放 4月27日上午10:00</div>
                <div class="visitNumRight flex1">36225人</div>
            </div>
        </div>
</template>

<script>
import { httpUrl } from "@/api/http_url";
export default {
    name: "LiveInfo",
    data() {
        return {
            liveInfo: {
                ThumbUrl: "fdsf"
            }
        };
    },
    methods: {},
    mounted() {
        this.$http.get(httpUrl.videolive).then(
            response => {
                this.liveInfo = response.data.Data;
                console.log(this.liveInfo.ThumbUrl);
            },
            err => {
                console.log(err);
            }
        );
    },
    created() {}
};
</script>


