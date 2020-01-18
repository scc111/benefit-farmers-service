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
            <router-link :to='item.url||""'>{{item.name}}</router-link>
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
               @click.prevent="item.key==='about'?goAbout():''"
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
          key: 'gg',
          class: 'pic2',
          url: '/dryFruitDetail'
        },
        { name: '水 果', key: 'yl', class: 'pic4' }
      ],
      centerNavList: [
        { name: '首页', key: 'sy', class: 'ahover' },
        { name: '产品特色', key: 'cpts', class: '' },
        { name: '关于我们', key: 'about', class: '' },
        { name: '建站', key: 'jz', class: '' },
        { name: '下载区', key: 'xzq', class: '' }
      ],
      bannerSrc: [
        { src: require('./../../assets/巴旦木.png') },
        { src: require('./../../assets/薄皮纸核桃.png') },
        { src: require('./../../assets/碧根果.png') },
        { src: require('./../../assets/达坂城蚕豆.png') },
        { src: require('./../../assets/枸杞子.png') },
        { src: require('./../../assets/开口笑小银杏.png') },
        { src: require('./../../assets/沙漠果.png') },
        { src: require('./../../assets/圣女果.png') },
        { src: require('./../../assets/特级哈密大枣.png') },
        { src: require('./../../assets/天山乌梅.png') }
      ]
    }
  },
  methods: {
    goAbout() {
      this.$router.push({ name: 'about' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './main-index.less';
</style>
