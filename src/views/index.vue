<template>
	<div>
		<div class="mu-banner">
	      <div class="mu-banner-container">
	        <div class="mu-logo">
	          M
	        </div>
	        <h1 class="mu-banner-title">
	          Muse-UI
	        </h1>
	        <h2 class="mu-banner-sub-title">
	          subTitle
	        </h2>
	        <div class="mu-banner-actions">
	          <mu-raised-button label="Get Started" href="#/install" class="mu-banner-button"/>
	        </div>
	      </div>
	      <div class="mu-banner-appbar-height"></div>
	    </div>
	    <div class="content-wrapper">
	      {{msg}}
	    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>