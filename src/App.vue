<template>
  <div id="app">
    <vheader :seller=seller></vheader>
    <tab class="tab-wrapper" :tabs="tabs"></tab>
    <router-view :seller=seller></router-view>
  </div>
</template>

<script>
import { getSeller } from 'api'
import { urlParse } from 'common/js/util'
import vheader from 'components/v-header/v-header'
import tab from 'components/tab/tab'

export default {
  name: 'app',
  data() {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      },
      tabs: [
        '商品', '评价', '商家'
      ]
    }
  },
  created() {
    this._getSeller(urlParse())
  },
  methods: {
    _getSeller(params) {
      getSeller(params).then((seller) => {
        this.seller = Object.assign({}, this.seller, seller)
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
