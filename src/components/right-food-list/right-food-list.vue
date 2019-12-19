<template>
    <div class="food_price">
            <div class="food_title">
                <a href="">粮食最新报价</a>
            </div>
            <div class="food_price_list">
                <ul>
                    <li  v-for="(item,index) of foodPriceList" :key="index"><a href="">{{item.name}}</a></li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
  name: 'rightFood',
  data() {
    return {
       foodPriceList:[
        {name:'河北常规玉米(国标二等)12月17日报价1885',key:'ssgy'},
        {name:'河北常规玉米(国标二等)12月17日报价1885',key:'ssgy'},
        {name:'河北常规玉米(国标二等)12月17日报价1885',key:'ssgy'},
        {name:'河北常规玉米(国标二等)12月17日报价1885',key:'ssgy'},
        {name:'河北常规玉米(国标二等)12月17日报价1885',key:'ssgy'},
        {name:'河北常规玉米(国标二等)12月17日报价1885',key:'ssgy'},
        {name:'河北常规玉米(国标二等)12月17日报价1885',key:'ssgy'},
        {name:'河北常规玉米(国标二等)12月17日报价1885',key:'ssgy'},
        {name:'河北常规玉米(国标二等)12月17日报价1885',key:'ssgy'},
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 @import './right-food-list.less';

</style>
