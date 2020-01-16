<template>
  <div>
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
    <div class="footer">
      <div class="email">
        <div class="email-l">
          <span>卓创资讯 - <a href="">惠农电商网</a></span>
          <span class="color">客服专线：400-811-5599</span>
          <span>传真：0533-6294000 邮箱：cuipl@sci99.com</span>
        </div>
        <div class="email-r">
          为中国争夺大宗商品定价话语权</div>
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
      <!-- <div class="text-c">
      <a href=""><img src="./../../assets/p1.jpg" alt=""></a>
      <a href=""><img src="./../../assets/p2.gif" alt=""></a>
      <a href=""><img src="./../../assets/p3.jpg" alt=""></a>
      <a href=""><img src="./../../assets/p4.jpg" alt=""></a>
      <a href=""><img src="./../../assets/p5.jpg" alt=""></a>
    </div>
      <div class="text-c">
      <a href=""><img src="./../../assets/p6.gif" alt=""></a>
      <a href=""><img src="./../../assets/p7.gif" alt=""></a>
      <a href=""><img src="./../../assets/p8.gif" alt=""></a>
      <a href=""><img src="./../../assets/p9.gif" alt=""></a>
    </div> -->
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
      ],
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './footer-index.less';
</style>

