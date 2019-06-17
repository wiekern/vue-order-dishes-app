<template>
  <div id="app">
    <VHeader :seller=seller></VHeader>
    <VGoods :seller=seller></VGoods>
  </div>
</template>

<script>
import { getSeller } from 'api'
import VHeader from 'components/v-header/v-header'
import VGoods from 'components/goods/goods'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
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
    VHeader,
    VGoods
  }
}
</script>
<style lang="stylus">
@import "./common/stylus/mixin.styl"

</style>
