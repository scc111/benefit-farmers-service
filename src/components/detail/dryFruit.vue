<template>
  <div class="container-box">
    <div class="top-search">
      <div class="logo">
        <a href=""
           target="_self"></a>
        <img src="./../../assets/logo.jpg"
             alt="农产品交易网">
      </div>
      <div class="title">
        新疆特产干果
      </div>
      <div class="tel">
        <img src="./../../assets/tel.jpg"
             alt="联系电话">
      </div>
    </div>
    <div class="title-introduce m-b-20">
      新疆，远离海洋，深居内陆，地域辽阔，是中国陆地面积第一大的省级行政区，新疆总面积占中国陆地面积六分之一（166万平方千米），其地风光旖旎，特产资源十分丰裕。
      在群山峻岭、绿洲戈壁之间，有着数不尽的“粮仓”、“肉库”、“油盆”、“煤海”，以及美味特产，比如葡萄干。
      当然，除了葡萄干，新疆还有很多久负盛名的特产干果。那么，都有哪些呢，赶紧跟着我们一起来看看吧！
    </div>
    <div class="content">
      <p class="content-title m-b-20">巴旦木</p>
      <div class="showimg m-b-20">
        <img src="./../../assets/巴旦木.png"
             alt="">
      </div>
      <p class="content-text m-b-20">巴旦杏仁是维吾尔人传统的健身滋补品，它的营养比同重量的牛肉高六倍。
        每日睡觉前细嚼十余粒，开水冲下，长期食用，夜间能通宵熟睡无梦，身体抵抗力显著增强，保持身强体壮。</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      contentList: [
        { name: '首页', key: 'sy', class: 'ahover' },
        { name: '产品特色', key: 'cpts', class: '' },
        { name: '公司新闻', key: 'gsxw', class: '' },
        { name: '建站', key: 'jz', class: '' },
        { name: '下载区', key: 'xzq', class: '' }
      ]
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
@import './dryFruit.less';
</style>