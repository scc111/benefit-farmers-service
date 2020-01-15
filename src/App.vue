<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #3e3e3e;
}
.clear {
  clear: both;
}
li {
  list-style: none;
}
body {
  font-family: 'Microsoft Yahei', '微软雅黑', '宋体';
  font-size: 12px;
  line-height: 22px;
  border: 0;
  color: #5e5e5e;
}
.container-box {
  width: 1280px;
  margin: 0 auto;
}
.m-b-20 {
  margin-bottom: 20px;
}
</style>
