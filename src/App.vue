<template>
  <div id="app">
    <vheader :seller=seller></vheader>
    <tab class="tab-wrapper" :tabs="tabs"></tab>
    <router-view :seller=seller></router-view>
  </div>
</template>

<script>
import { getSeller } from 'api'
import vheader from 'components/v-header/v-header'
import tab from 'components/tab/tab'

export default {
  name: 'app',
  data() {
    return {
      seller: {},
      tabs: [
        '商品', '评价', '商家'
      ]
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  },
  components: {
    vheader,
    tab
  }
}
</script>
<style lang="stylus">
@import "./common/stylus/mixin.styl"

</style>
