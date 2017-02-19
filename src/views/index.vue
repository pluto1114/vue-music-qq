<template>
	<div>
		<div class="mu-banner">
	      <div class="mu-banner-container">
	        <div class="mu-logo">
	          M
	        </div>
	        <h1 class="mu-banner-title">
	          qq音乐
	        </h1>
	        <h2 class="mu-banner-sub-title">
	          拥抱Vue，享受生活
	        </h2>
	        <div class="mu-banner-actions">
	          <mu-text-field hintText="搜索您喜欢的歌曲" type="text" icon="search" iconClass="color-white" hintTextClass="color-white" inputClass="color-white" underlineClass="border-white-alpha" underlineFocusClass="border-white" fullWidth/>
	        </div>
	      </div>
	      <div class="mu-banner-appbar-height"></div>
	    </div>
	    <mu-content-block>
      <mu-list>
        <mu-list-item :title="x.songname" v-for="(x,index) of hotSongArr" @click="handleSelect(x.albumid,x.songid,x.songmid)">
           <mu-badge :content="(index+1)+''" circle slot="left"/>
        </mu-list-item>
        <mu-divider />
      </mu-list>
  		</mu-content-block>
    </div>
</template>

<script>

export default {
  data () {
    return {
      hotSongArr:[]
    }
  },
  mounted(){
  	//console.log(hot_all)
    var songlist=[];
    for (var i = 0; i <20; i++) {
      
    }
    this.hotSongArr=hot_all.cdlist[0].songlist;
  },
  methods:{
    handleSelect(albumid,songid,songmid){
      this.$router.push("/player/"+albumid+"/"+songid+"/"+songmid);
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../src/styles/vars.less";
.mu-banner{
  background-color: @primaryColor;
  z-index: 100;
}

.mu-banner-appbar-height{
  height: 56px;
}

.mu-banner-container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 24px;
  padding-right: 24px;
}

.mu-logo{
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: @alternateTextColor;
  margin:  0 auto;
  color: @primaryColor;
  font-size: 50px;
  border-radius: 50%;
  margin-bottom: 16px;
}

.mu-banner-title{
  font-weight: 300;
  color: fade(@alternateTextColor, 87%);
  margin-top: 0;
  margin-bottom: 16px;
  text-align: center;
}

.mu-banner-sub-title{
  color: fade(@alternateTextColor, 87%);
  text-align: center;
  font-weight: 300;
  margin-bottom: 16px;
}
.mu-banner-actions{
  padding: 0.2em 3.5em;
}
.color-white{
  color: fade(@alternateTextColor, 87%);
}
.border-white-alpha{
  color: fade(@alternateTextColor, 50%);
  background-color: fade(@alternateTextColor, 50%);
}
.border-white{
  color: fade(@alternateTextColor, 87%);
  background-color: fade(@alternateTextColor, 87%);
}

</style>