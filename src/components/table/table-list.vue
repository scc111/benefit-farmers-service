<template>
  <div class="table_list clear">
    <div class="food_nav">
      <span class="pic1"></span>
      <strong>粮食</strong>
      <a v-for="(item,index) of foodNavList"
         :key="index"
         href="">{{item.name}}</a>
    </div>
    <div class="main_table">
      <div class="main-b-table">
        <div class="table_nav">
          <ul>
            <li v-for="(item,index) of tableNavList"
                :key="index">
              <a :class="item.class"
                 href="">{{item.name}}</a>
            </li>
          </ul>
          <a class="supply_demand"
             href="">我要发布供求</a>
        </div>
        <div class="table-self"
             ref="tableSelf">
          <ul>
            <li v-for="(item,index) of tableList"
                :key="index">
              <span class="w100">{{item.date}}</span>
              <span class="w150">购买人 : {{item.user}}</span>
              <span>购买产品 : {{item.name}}</span>
              <!-- <span class="w85 color">{{item.price}}</span> -->
            </li>
          </ul>
          <ul>
            <li v-for="(item,index) of tableList"
                :key="index">
              <span class="w100">{{item.date}}</span>
              <span class="w150">购买人 : {{item.user}}</span>
              <span>购买产品 : {{item.name}}</span>
            </li>
          </ul>
          <ul>
            <li v-for="(item,index) of tableList"
                :key="index">
              <span class="w100">{{item.date}}</span>
              <span class="w150">购买人 : {{item.user}}</span>
              <span>购买产品 : {{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tableList',
  data() {
    return {
      timer: '',
      currentKey: '',
      foodNavList: [
        { name: '玉米', key: 'ym' },
        { name: '小麦', key: 'xm' },
        { name: '稻米', key: 'dm' },
        { name: '高粱', key: 'gl' },
        { name: '杂粮', key: 'zl' }
      ],
      tableNavList: [
        { name: '实时供应', key: 'ssgy', class: 'hover' },
        { name: '实时求购', key: 'ssqg', class: '' }
      ],
      tableList: [
        {
          date: '2019-12-10',
          name: '北疆红枣,葡萄干,野生核桃',
          user: '陈女士',
          //   price: '30元/公斤,38元/公斤,30元/公斤',
          class: ''
        },
        {
          date: '2019-12-10',
          name: '北疆红枣,葡萄干,野生核桃,沙枣',
          user: '北京热云科技',
          class: ''
        },
        {
          date: '2019-12-10',
          name: '北疆红枣,葡萄干,野生核桃,巴旦木,树上干杏,沙枣,西梅干',
          user: '董先生',
          class: ''
        },
        {
          date: '2019-12-10',
          name: '北疆红枣,葡萄干,巴旦木',
          user: '姜先生',
          class: ''
        },
        {
          date: '2020-01-05',
          name:
            '北疆红枣,葡萄干,野生核桃,巴旦木,蜜枣,树上干杏,沙枣,杏仁,西梅干,和田大枣',
          user: '马先生',
          class: ''
        },
        {
          date: '2020-01-05',
          name: '北疆红枣,野生核桃,巴旦木,杏仁',
          user: '邹女士',
          class: ''
        },
        {
          date: '2020-01-05',
          name: '北疆红枣,葡萄干,野生核桃,巴旦木,杏仁',
          user: '任女士',
          class: ''
        },
        {
          date: '2020-01-05',
          name: '北疆红枣,葡萄干,巴旦木,树上干杏,沙枣,和田大枣',
          user: '益慧财务咨询公司',
          class: ''
        },
        {
          date: '2020-01-05',
          name: '北疆红枣,葡萄干,野生核桃,杏仁,西梅干,和田大枣',
          user: '段女士',
          class: ''
        }
      ]
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.$refs.tableSelf.scrollTop += 52
      if (this.$refs.tableSelf.scrollTop >= this.$refs.tableSelf.clientHeight) {
        this.$refs.tableSelf.scrollTop = 0
      }
    }, 800)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './table-list.less';
</style>
