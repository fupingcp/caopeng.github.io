<template>
    <div class="example">
      <div>例子: </div>
      <ul style="list-style:none; margin-bottom: 50px">
        <li v-for="item in liList" :key="item">
          <router-link :to="item">{{ item.split('/')[item.split('/').length - 1] }}</router-link>
        </li>
      </ul>
      <div class="clear"></div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'exIndex',
  data () {
    return {
      liList: [
        '/example/v-for', '/example/v-on-class', '/example/slot-scope',
        '/example/computed', '/example/introduce', '/example/translate'
      ]
    }
  }
}
</script>

<style scoped>
  .clear{
    clear: both;
  }
  .example ul li{
    float: left;
    margin-right: 20px;
  }
</style>
