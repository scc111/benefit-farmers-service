<template>
  <div class="top-search">
    <div class="logo">
      <a href="" target="_self"></a>
      <img src="./../../assets/logo.jpg" alt="农产品交易网">
    </div>
    <div class="search">
      <div class="search_tabs">
        <a class="hover" href="">商品供应</a>
        <a href="">商品求购</a>
        <a href="">商铺</a>
      </div>
      <div class="clear"></div>
      <div class="search_input">
        <div class="AutoComplete">
          <input class="search_text" type="text">
        </div>
        <input type="button" value="搜索" class="search_button">
      </div>
    </div>
    <div class="tel">
      <img src="./../../assets/tel.jpg" alt="联系电话">
    </div>
  </div>

</template>

<script>
export default {
  name: 'top',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 @import './top-search.less'; 
</style>
