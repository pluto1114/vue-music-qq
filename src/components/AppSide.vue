<template>
  <div class="app-side">
  	
  	<mu-drawer :open="open" :docked="docked" @close="toggle()">
  	  <mu-appbar class="exmaples-nav-appbar" :zDepth="0">
	    <a class="exmaples-appbar-title" href="/" style="display:inline-block;">播放历史</a>
	    <mu-badge content="2017" class="exmaples-version" secondary/>
	  </mu-appbar>
	  <mu-divider/>
      <mu-list>
        <mu-list-item v-for="(x,index) of hisSongArr" :title="x.songname" titleClass="my-title" @click="handleClick(index)"/>
        <mu-list-item v-if="docked" @click="handleClose" title="关闭"/>
      </mu-list>
    </mu-drawer> 
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'appSide',
  props: {
    open: {
      type: Boolean,
      default: true
    },
    docked: {
      type: Boolean,
      default: true
    }
  },
  computed:mapState(['hisSongArr']),
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleClick(index){
      let song=this.hisSongArr[index];
      this.$router.push(`/player/${song.albumid}/${song.songid}/${song.songmid}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
@import "../../src/styles/import.less";
.exmaples-drawer{
  box-shadow: none;
  border-right: 1px solid @borderColor;
}

.exmaples-nav-appbar.mu-appbar{
  background-color: @dialogBackgroundColor;
  color: @secondaryTextColor;
}
.exmaples-appbar-title{
  color: @secondaryTextColor;
}

.my-title{
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
</style>