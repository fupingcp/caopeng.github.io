<template>
    <div class="VClass">
      <input type="text" v-model="v_class">
      <div :class="`${v_class}`" ref="classShow">class: {{v_class}}</div>
      <div :class="`${class2ClassName}`" ref="class2">
        {{ class2ClassName }}
      </div>
    </div>
</template>

<script>
export default {
  name: 'vOnClass',
  data () {
    return {
      v_class: ''
    }
  },
  computed: {
    class2ClassName () {
      return this.v_class === 'abc' ? 'class-is-abc' : 'class-not-abc'
    }
  },
  filters: {
    isNull (value) {
      return value ? 'class:' + value : 'I am null'
    }
  },
  mounted () {
    this.$refs.classShow.setAttribute('style', 'color: red; font-size: 100px;')
  }
}
</script>

<style scoped>

</style>
