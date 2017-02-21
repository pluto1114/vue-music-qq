<template>
  <div class="controls">
    <div class="ctrl-button">
      <i class="material-icons" @click="handlePlay()">{{playing?'pause_circle_outline':'play_circle_outline'}}</i>
    </div>
    <mu-content-block>
        <mu-flexbox>
          <span class="cur-time">{{currentTimeStr}}</span>	
          <mu-flexbox-item class="flex-slider">
          <mu-slider :max="duration" :value="currentTime" class="slider" @change="handleChange"/>
          </mu-flexbox-item> 
          <span>{{totalTimeStr}}</span>
        </mu-flexbox>
      </mu-content-block>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props:["songid"],
  data () {
    return {
      duration:0,
      loadedPercent:0,
      currentTime:this.$store.state.currentTime,    
      currentSecond:0,
      totalTimeStr:'00:00',
    }
  },
  computed:{
   
    currentTimeStr(){
      return this.convertToTime(this.currentSecond);
    },
    ...mapState(['audio','playing'])
  },  
  mounted(){
    
    var songUrl=`http://ws.stream.qqmusic.qq.com/${this.songid}.m4a?fromtag=46`

    this.audio.src=songUrl;
    
    
    this.audio.addEventListener("loadeddata",(e)=>{
      this.duration=this.audio.duration;
      this.totalTimeStr=this.convertToTime(this.duration);
    });
    this.audio.addEventListener("timeupdate",(e)=>{
      if(this.duration!=0){
        // this.duration=this.audio.duration;

        if(this.currentSecond!=parseInt(this.audio.currentTime)){
        	this.currentSecond=parseInt(this.audio.currentTime);
        }

      }
      // console.log(this.durationStr)
      this.currentTime=this.audio.currentTime;
      this.$store.commit("changeCurrentTime", this.audio.currentTime);
    });

    this.$store.commit("play");
  },
  methods:{
    convertToTime(time){
      var min = Math.floor((time / 60) % 60);
      var sec = Math.floor(time % 60);
      var cTime;
      if(sec < 10) {
          sec = '0' + sec;
      }
      if(min<10){
        min='0'+min;
      }
      cTime = min + ':' + sec
      return cTime;
    },
    handlePlay(){
      if(this.playing){
        this.$store.commit("pause");
      }else{
        this.$store.commit("play");
      }
    },
    handleChange(value){
      this.$store.commit("changePlayPos",value);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ctrl-button{
  width:100%;
  text-align: center;
  margin-top: 1.5em;
}
.ctrl-button .material-icons{
  font-size: 3.25em;
}
.flex-slider{
  margin:0 1em;
  padding-top: 1em;
}
.cur-time{
	width:2.8em;
}
.silder{
  display: inline;
}
</style>