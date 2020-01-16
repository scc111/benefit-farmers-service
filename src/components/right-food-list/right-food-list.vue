<template>
  <div class="food_price">
    <div class="food_title">
      <a href="">干果最新报价</a>
    </div>
    <div class="food_price_list">
      <ul>
        <li v-for="(item,index) of foodPriceList"
            :key="index">
          <span class="dryFruit name">{{item.name}}</span>
          <span class="dryFruit level">{{item.level}}</span>
          <span class="dryFruit">{{item.price}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rightFood',
  data() {
    return {
      foodPriceList: [
        {
          name: '北疆红枣',
          level: '品级 : 一级 ',
          price: '价格 : 30元/公斤',
          key: 'bjhzone'
        },
        {
          name: '北疆红枣',
          level: '品级 : 二级 ',
          price: '价格 : 25元/公斤',
          key: 'bjhztwo'
        },
        {
          name: '葡萄干',
          level: '品级 : 一级',
          price: '价格 : 38元/公斤',
          key: 'ptgone'
        },
        {
          name: '葡萄干',
          level: '品级 : 二级',
          price: '价格 : 28元/公斤',
          key: 'ptgtwo'
        },
        {
          name: '野生核桃',
          level: '品级 : 一级',
          price: '价格 : 30元/公斤',
          key: 'yshtone'
        },
        {
          name: '野生核桃',
          level: '品级 : 二级',
          price: '价格 : 25元/公斤',
          key: 'yshttwo'
        },
        {
          name: '巴旦木',
          level: '品级 : 一级',
          price: '价格 : 75元/公斤',
          key: 'bdmone'
        },
        {
          name: '巴旦木',
          level: '品级 : 二级',
          price: '价格 : 65元/公斤',
          key: 'bdmtwo'
        },
        {
          name: '蜜枣',
          level: '品级 : 一级',
          price: '价格 : 65元/公斤',
          key: 'mz'
        },
        {
          name: '树上干杏',
          level: '品级 : 一级',
          price: '价格 : 60元/公斤',
          key: 'ssgx'
        },
        {
          name: '沙枣',
          level: '品级 : 一级',
          price: '价格 : 35元/公斤',
          key: 'sz'
        },
        {
          name: '西梅干',
          level: '品级 : 一级',
          price: '价格 : 45元/公斤',
          key: 'xmg'
        },
        {
          name: '和田大枣',
          level: '品级 : 一级',
          price: '价格 : 55元/公斤',
          key: 'htdz'
        },
        {
          name: '杏仁',
          level: '品级 : 一级',
          price: '价格 : 145元/公斤',
          key: 'xr'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './right-food-list.less';
</style>
