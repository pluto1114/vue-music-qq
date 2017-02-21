<template>
  <div class="lyric">
  	<mu-content-block>
    	<ul :style="{marginTop:lrcMarginTop}">
        <li v-for="x of lyricArr" :class="x.selected?selectedColor:defaultColor">{{x.lrc}}
        </li>
      </ul>
    </mu-content-block>   
  </div>
</template>

<script>

import { mapState } from 'vuex';

var Base64 = require('js-base64').Base64;
export default {
  props:['songid'],	
  data () {
    return {
		  defaultColor:'t-gra',
      selectedColor:'t-blu',
      // lrcCurIndex:this.$store.state.lrcCurIndex
    }
  },
  computed:{
    ...mapState({
      lyricArr:state=>state.lyricArr,
      lrcCurIndex:state=>state.lrcCurIndex
    }),
    lrcMarginTop(){
      return this.lrcCurIndex*(-2)+4+'em'
    }
  },
  mounted(){  	
    this.$store.dispatch("FETCH_LYRIC",this.songid).then((resp)=>{
      let arr = Base64.decode(resp.data.lyric).split('\n');
      this.$store.commit("loadLyric",{lyricArr:convertLrcArr(arr)})
    }); 
  },
  methods:{

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
<style>
.lyric{
  height:12em;
  overflow-x:hidden; 
  overflow-y: scroll;
  font-size: 1.5em;
}
.lyric ul {
  /*transition: transform 1s;*/
  transition: all 1s;
}
.lyric li{
  list-style: none;
  line-height: 2em;
  transition:0.25s ease;
}
.t-gra{
  color: #999;
}
.t-blu{
  color:#22c;
  
}
</style>