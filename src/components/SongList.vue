<template>
  <div class="song-list" :class="show?'':'hide'">
      <div class="item my-item" v-for="(x,index) of songArr" @click="handleSelect(x)">
          <mu-badge :content="(index+1)+''" circle/><span class="title">{{x.songname}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:"songList",
  props:{
  	songArr: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      show:false
    }
  },
  watch:{
    'songArr':'fresh'
  },
  mounted(){
    this.fresh()
  },
  methods:{
    fresh(){
        this.show=false;
        setTimeout(()=>{
          this.show=true;
        },300)
          console.log("fresh")
    },
    handleSelect(song){
      this.$store.commit("addHisSong",{song:song})
      this.$router.push(`/player/${song.albumid}/${song.songid}/${song.songmid}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/scss" scoped>
.song-list{
  
}
.item{
  line-height:4em;
  border-bottom:1px solid #dadada;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.item .title{
  margin-left:1.5em;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.hide{
  display:none;
}
.my-item {
    opacity: 0;
    animation-name: animationStyle1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    cursor: pointer;
}

.shown-loop(@n, @i: 1) when (@i <=@n) {
    .my-item:nth-child(@{i}) {
        animation-duration: @i*200ms;
    }
    .shown-loop(@n, (@i + 1));
}

.shown-loop(14);

@keyframes animationStyle1 {
    0% {
        opacity: 0;
        transform: rotateY(-90deg) translate3d(0, 30px, 0);
    }
    100% {
        opacity: 1;
        transform: rotate(0deg) translate3d(0, 0, 0);
    }
}
</style>