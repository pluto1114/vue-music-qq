<template>
  <div>
    {{mid}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    	mid:(this.$route.params.mid || '307525'),
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>