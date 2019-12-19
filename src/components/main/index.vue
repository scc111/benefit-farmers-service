<template>
  <div class="container-box">
    <top-search/>   
    <main-index/> 
    <table-list/>
   <right-food-list/>
   <sidebar/>
   <div class="clear"></div>
    <footer-index/> 
  </div>
</template>

<script>
import topSearch from './../header/top-search'
import mainIndex from './../banner/main-index'
import footerIndex from './../footer/footer-index'
import tableList from './../table/table-list'
import rightFoodList from './../right-food-list/right-food-list'
import sidebar from './../sidebar/sidebar'


export default {
  name: 'index',
  components: { topSearch ,mainIndex,footerIndex ,tableList,rightFoodList,sidebar},
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-box{
    width: 1280px;
    margin: 0 auto;
}
</style>
