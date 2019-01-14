<template>
  <div>
    <button @click="a = !a">on</button>
    <transition name="fade">
      <div v-if="a">hello!!</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'v-transition',
  data () {
    return {
      a: true
    }
  }
}
</script>

<style scoped type="text/css">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
