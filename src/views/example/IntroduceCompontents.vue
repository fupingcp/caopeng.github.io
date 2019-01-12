<template>
  <div class="introduce">
    <BaseCheckbox v-model="check"></BaseCheckbox>
    <div>check: {{ check }}</div>
  </div>
</template>

<script>
import BaseCheckbox from '@/components/base-checkbox'

export default {
  name: 'IntroduceCompontents',
  data () {
    return {
      check: true
    }
  },
  components: { BaseCheckbox }
}
</script>

<style scoped>
</style>
