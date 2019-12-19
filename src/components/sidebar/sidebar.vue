<template>
  <div class="sidebar">
      <div class="qq">
          <a href="">
              <img src="./../../assets/qq.jpg" alt="">
          </a>
      </div>
      <div class="m-b-10">
          <a href="">
              <img src="./../../assets/feedback.jpg" alt="">
          </a>
      </div>
       <div class="m-b-10">
          <a href="">
              <img src="./../../assets/mzsm.jpg" alt="">
          </a>
      </div>
      <div class="green-food">
        <div class="food-img"></div>
        <span class="name">粮食</span>
      </div>
        <div class="green-food">
        <div class="food-img feed"></div>
        <span class="name">饲料/油料</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">
 @import './sidebar.less'; 

</style>
