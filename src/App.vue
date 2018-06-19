<template>
  <div id="app">
    <Mheader></Mheader>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Mheader from 'components/header/m-header'
import Tab from 'components/tab/tab'

export default {
  name: 'app',
  components: {
    Mheader, Tab
  }
}
</script>

<style lang="stylus">
@import "~common/stylus/variable"

#app 
  color: $color-theme

</style>
