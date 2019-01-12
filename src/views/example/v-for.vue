<template>
  <div class="v-for">
    <div v-for="(item, index) in [1,2,3,4]"
      :key="index"
      class="v-for__item"
      :class="{'active': index === activeIndex}"
      @click="activeIndex = index">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'vFor',
  data () {
    return {
      activeIndex: 0
    }
  }
}
</script>

<style scoped>
.v-for{
  display: flex;
  justify-content: space-around;
}
.v-for__item{
  display: inline-flex;
  height: 40px;
  padding: 0 20px;
  text-align: center;
  line-height: 40px;
  borde: 0 solid crimson;
  cursor: pointer;
}
.active{
  color: #fff;
  border-width: 1px;
  background-color: #ccc;
}
</style>
