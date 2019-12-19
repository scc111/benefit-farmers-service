<template>
    <div class="table_list clear">
        <div class="food_nav">
            <span class="pic1"></span>
            <strong>粮食</strong>
            <a v-for="(item,index) of foodNavList" :key="index" href="">{{item.name}}</a>
        </div>
        <div class="main_table">
            <div class="main-b-table">
                <div class="table_nav">
                    <ul>
                        <li v-for="(item,index) of tableNavList" :key="index">
                            <a :class="item.class" href="">{{item.name}}</a>
                        </li>
                    </ul>
                    <a class="supply_demand" href="">我要发布供求</a>
                </div>
                <div class="table-self"  ref="tableSelf">
                    <ul>
                        <li v-for="(item,index) of tableList"  :key="index">
                            <span class="w55">{{item.key}}</span>
                            <span class="w150"><a href="">{{item.name}}</a></span>
                            <span class="w109">联系人:{{item.user}}</span>
                            <span class="w143">电话:{{item.tel}}</span>
                            <span class="w245">(所在地)产地:{{item.place}}</span>
                            <span class="w85 color">{{item.price}}</span>
                        </li>
                    </ul>
                     <ul>
                        <li v-for="(item,index) of tableList"  :key="index">
                            <span class="w55">{{item.key}}</span>
                            <span class="w150"><a href="">{{item.name}}</a></span>
                            <span class="w109">联系人:{{item.user}}</span>
                            <span class="w143">电话:{{item.tel}}</span>
                            <span class="w245">(所在地)产地:{{item.place}}</span>
                            <span class="w85 color">{{item.price}}</span>
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
        timer:'',
        currentKey:'',
        foodNavList:[
        {name:'玉米',key:'ym'},
        {name:'小麦',key:'xm'},
        {name:'稻米',key:'dm'},
        {name:'高粱',key:'gl'},
        {name:'杂粮',key:'zl'}
        ],
        tableNavList:[
        {name:'实时供应',key:'ssgy',class:'hover'},
        {name:'实时求购',key:'ssqg',class:''},
        ],
        tableList:[
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
            {key:'[07-08]',name:'京东大米,泉香米',user:'胡先生',tel:'110',place:'北京',price:'4200元/吨',class:''},
        ],
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
  },
  mounted(){
         this.timer = setInterval(() => {
             this.$refs.tableSelf.scrollTop +=40
             if(this.$refs.tableSelf.scrollTop >= this.$refs.tableSelf.clientHeight){
                 this.$refs.tableSelf.scrollTop = 0
             }
         }, 500);
  }
    

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 @import './table-list.less';
</style>
