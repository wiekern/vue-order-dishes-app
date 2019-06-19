<template>
  <div class="tab">
    <span class="item" v-for="(item, index) in tabs" :key="index">
      <router-link :to="routeLinks[index]">{{item}}</router-link>
    </span>
  </div>
</template>

<script>

export default {
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      routeLinks: ['/goods', '/ratings', '/seller']
    }
  }
}
</script>

<style lang="stylus">
  .tab
    width: 100%
    height: 40px
    line-height: 40px
    display: flex
    .item
      flex: 1
      text-align: center
      // line-height: 14px
      font-size: 14px
      color: rgb(77, 85, 93)
</style>
