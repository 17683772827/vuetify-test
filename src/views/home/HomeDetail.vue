<template>
<div>home detail
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'HomeDetail',
  mounted () {
    console.log(this.$route.path + '/homeMore')
  }
}
</script>

<style scoped>
</style>
