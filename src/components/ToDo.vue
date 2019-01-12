<template>
  <div>
    <span v-if="todo.isComplete">✓</span>
     {{ todo.text }}
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    todo: {
      type: Object
    },
    id: {
      type: Number
    }
  },
  created () {
    console.log('props: ', {
      todo: this.todo,
      id: this.id
    })
  }
}
</script>

<style scoped>

</style>
