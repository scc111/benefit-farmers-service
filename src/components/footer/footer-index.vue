<template>
  <div>
    <div class="footer">
      <div class="email">
        <div class="email-l">
          <span>西域电商网</span>
          <!-- <span>卓创资讯 - <a href="">西域电商网</a></span> -->
          <!-- <span class="color">客服专线：400-811-5599</span>
          <span>传真：0533-6294000 邮箱：cuipl@sci99.com</span> -->
        </div>
        <!-- <div class="email-r">
          为中国争夺大宗商品定价话语权</div> -->
      </div>
      <div class="footer-list">
        <ul>
          <li v-for="(item,index) of footerList"
              :key="index"><a href="">{{item}}</a>|</li>
        </ul>
        <p> 增值电信业务经营许可证：鲁B2-20050017号 鲁ICP备09068464号 传真：0533-6090800 Email：Master@sci99.com</p>
        <span> Copyright © 2004-2019 SCI99 Inc. All rights reserved. </span>
        <a class="m-5"
           href="">版权所有</a><span> 卓创资讯 </span>
        <a class="m-l-10"
           href="">
          <img src="./../../assets/beian.gif"
               alt="">
          鲁公网安备 37030302000038号</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerIndex',
  data() {
    return {
      footerList: [
        '关于卓创',
        '服务体系',
        '今日卓创',
        '人才招聘',
        '联系我们',
        '媒体合作',
        '法律声明',
        '隐私政策',
        '版权声明',
        '合作伙伴'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './footer-index.less';
</style>

