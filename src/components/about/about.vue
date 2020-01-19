<template>
  <div class="container-box">
    <div class="top-search">
      <div class="logo">
        <a href="/"
           target="_self">西域电商</a>
      </div>
      <div class="title">
        关于我们
      </div>
      <div class="tel">
        <!-- <img src="./../../assets/tel.jpg"
             alt="联系电话"> -->
      </div>
    </div>
    <div class="shareholder">
      <div class="company"
           v-for="(item,index) of companyList"
           :key="index">
        <span class="shareholder-name">股东方 : {{item.name}}</span>
        <span>{{item.person}}</span>
        <span>{{item.cost}}</span>
        <span>{{item.date}}</span>
        <p>主要经营：{{item.management}}</p>
        <p>注册地址：{{item.place}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      companyList: [
        {
          name: '霍尔果斯麻辣盛宴企业管理有限公司',
          person: '公司法人 : 马琦',
          date: '成立时间 : 2018年4月',
          cost: '注册资本 : 500万',
          management:
            '代理记账，财务咨询，贸易咨询、企业管理咨询，创业指导，法律咨询，广告创意策划制作、会展服务等。',
          place: '新疆伊犁州霍尔果斯市金桥华府商业楼2号楼3单元202号'
        },
        {
          name: '霍尔果斯热云数据科技有限公司',
          person: '公司法人 : 白冬立',
          date: '成立时间 : 2017年3月',
          cost: '注册资本 : 500万',
          management:
            '互联网技术开发、技术咨询，技术服务，企业营销策划，企业管理咨询服务，会务服务等。',
          place: '新疆伊犁州霍尔果斯市亚欧路28号琪瑞大厦7层701室'
        },
        {
          name: '霍尔果斯市西域龙珠葡萄种植专业合作社',
          person: '',
          management:
            '为合资公司业务合作伙伴,主要以葡萄及附属产业，蔬菜瓜果种植，储藏，烘干，保鲜购销相关技术及配套农资购销',
          place: '新疆伊犁州霍尔果斯市莫乎尔牧场保鲜库'
        }
      ]
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
@import './about.less';
</style>