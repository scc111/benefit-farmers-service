<template>
  <div class="main_index">
    <div class="nav_vertical">
      <div class="head">
        产品分类
      </div>
      <div class="nav_left">
        <ul>
          <li v-for="(item,index) of verticalNavList"
              :key="index">
            <span :class="item.class"></span>
            <a :href="item.url">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main_index_center">
      <div class="nav_cross">
        <ul>
          <li v-for="(item,index) of centerNavList"
              :key="index">
            <a :class="item.class"
               href="">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="block">
          <el-carousel height="272px">
            <el-carousel-item v-for="(item,index) of bannerSrc "
                              :key="index">
              <img :src="item.src"
                   alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-index',
  data() {
    return {
      verticalNavList: [
        { name: '粮 食', key: 'ls', class: 'pic1' },
        {
          name: '干 果',
          key: 'sl',
          class: 'pic2',
          url: 'http://localhost:8081/dryFruitDetail'
        },
        { name: '水 果', key: 'yl', class: 'pic4' }
      ],
      centerNavList: [
        { name: '首页', key: 'sy', class: 'ahover' },
        { name: '产品特色', key: 'cpts', class: '' },
        { name: '公司新闻', key: 'gsxw', class: '' },
        { name: '建站', key: 'jz', class: '' },
        { name: '下载区', key: 'xzq', class: '' }
        // {name:'惠农联盟',key:'hnlm',class:''},
        // {name:'商家.商铺',key:'sj',class:''},
        // {name:'供应',key:'gy',class:''},
        // {name:'求购',key:'qg',class:''},
        // {name:'价格',key:'jg',class:''},
        // {name:'三农天地',key:'sntd',class:''},
        // {name:'商讯',key:'sx',class:'active'},
        // {name:'建站',key:'jz',class:'active'},
        // {name:'微信建设',key:'wxjs',class:'active'},
        // {name:'会员服务',key:'hyfw',class:'active'}
      ],
      bannerSrc: [
        { src: require('./../../assets/banner.png') },
        { src: require('./../../assets/banner.png') },
        { src: require('./../../assets/banner.png') }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './main-index.less';
</style>
