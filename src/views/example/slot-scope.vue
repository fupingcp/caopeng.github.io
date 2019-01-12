<template>
  <div>
    <TodoList>
      <span slot="title">我是一个name=title的solt</span>
      <span>我是一个solt1</span>
      <span>我是一个solt2</span>
      <div slot-scope="{ todo, id }" slot="slotScope">
        <Todo :todo="todo" :id="id"></Todo>
      </div>
      <!--<template slot-scope="slotProps">-->
        <!--&lt;!&ndash; 为待办项自定义一个模板，&ndash;&gt;-->
        <!--&lt;!&ndash; 通过 `slotProps` 定制每个待办项。&ndash;&gt;-->
        <!--<span v-if="slotProps.todo.isComplete">✓</span>-->
        <!--{{ slotProps.todo.text }}-->
      <!--</template>-->
    </TodoList>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import Todo from '@/components/Todo'
export default {
  name: 'slot-scope',
  data () {
    return {
      id: 10
    }
  },
  components: { TodoList, Todo }
}
</script>

<style scoped>

</style>
