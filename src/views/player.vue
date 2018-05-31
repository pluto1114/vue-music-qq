<template>
  <div class="autum">
    <div class="album-show rotating">
      <img :src='albumImgUrl' />
    </div>
    <div class="song-info">
      <h2>{{song.name}}</h2>
      <div>{{singer.name}}</div>
    </div>

    
    <controls :songid="songid"></controls>
    <lyric :songid="songid"></lyric>
    
  </div>
</template>

<script>
import Lyric from '../components/Lyric';
import Controls from '../components/Controls';

import { mapState } from 'vuex';

export default {
  data () {
    return {
      bottomNav: 'recents',    
      song:{},
      singer:{}
    }
  },
  computed:{
    albumid(){
      return (this.$route.params.albumid || 0)
    },
    songid(){
      return (this.$route.params.songid || '105738437')
    },
    songmid(){
      return (this.$route.params.songmid || '001Ud2bQ0u61uC')
    },
    albumImgUrl(){
      return `http://imgcache.qq.com/music/photo/album_300/${this.albumid%100}/300_albumpic_${this.albumid}_0.jpg`
    },   
  }, 
  watch:{
        '$route':'fetchdata'
  }, 
  created(){
     this.fetchdata()
   
  },
  methods:{
    fetchdata(){
      this.$store.dispatch("FETCH_SONG_INFO",this.songmid).then((resp)=>{
        this.song=resp.data.data[0];
        this.singer=resp.data.data[0].singer[0];
      });
    }
  },
  components:{Lyric,Controls}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.autumn {
background-image: radial-gradient(27% 185%, #F9F6F1 0%, #D7D0C5 100%);
height:100%;
}

.album-show{
  width:18em;
  height:18em;
  margin:2em auto;

}
.album-show img{
  width:100%;
  height:100%;
  border-radius: 50%;
  box-shadow: 0 14px 45px rgba(0,0,0,.247059), 0 10px 18px rgba(0,0,0,.219608);
}
.song-info{
  text-align: center;
}
.rotating{
  animation: rotate 30s linear 0s infinite normal both running;
}
.progress{

}
.flex-slider{
  margin:0 1em;
  padding-top: 0.8em;
}
.silder{
  display: inline;
}

@keyframes rotate
{
from {transform:rotateZ(0deg);}
to {transform:rotateZ(360deg);}
}


</style>