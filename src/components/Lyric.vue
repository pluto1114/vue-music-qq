<template>
  <div class="lyric">
  	<mu-content-block>
    	<mu-list>
        <mu-list-item :title="x.lrc" v-for="x of lyricArr">
        </mu-list-item>
        </mu-list>
    </mu-content-block>   
  </div>
</template>

<script>
import {fetchSongInfo,fetchAlbum,fetchLyric} from '../store/api'
import { mapState } from 'vuex';

var Base64 = require('js-base64').Base64;
export default {
  props:['songid'],	
  data () {
    return {
		lyricArr:[]      
    }
  },
  mounted(){
  	var p=fetchLyric(this.songid).then(resp=>{
      let arr = Base64.decode(resp.data.lyric).split('\n');
      console.log(convertLrcArr(arr));
      this.lyricArr=convertLrcArr(arr);
    });
  }
}
function convertLrcArr(arr) {
    let lrcArr = [];
    let duration = 0;
    console.log(arr.length)
    for (let i = 0; i < arr.length - 1; i++) {
        let item = arr[i];
        let lrcObj = {};
        let timeStr = item.match("\\[(.+?)\\]")[1];

        //declude not time
        if (/[^0-9\.\:]/.test(timeStr)) {
            continue;
        }
        // if(/^\[.+\]$/.test(item)){
        // 	continue;
        // }
        let timeArr = timeStr.split(":");
        let time = parseInt(timeArr[0]) * 60 + parseFloat(timeArr[1]);

        lrcObj.selected = false;
        lrcObj.show = true;

        lrcObj.time = time;
        lrcObj.lrc = item.replace(/(\.\d{2,3})/g, '');
        // lrcObj.lrc = item.replace(/^\[.+\]/g, '');
        lrcArr.push(lrcObj);
    }
    return lrcArr;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>