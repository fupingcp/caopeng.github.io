<template>
  <div class="todo-list">
    <div class="todo-list__slot-name-title">
      title: <slot name="title"></slot>
    </div>
    <div class="todo-list__slot">
      <div>solt_title: 我的下面是 slot </div>
      <slot></slot>
    </div>
    <div class="todo-list__slot-name-slot-scope"
         v-for="(item, index) in todos"
         :key="index">
      <slot name="slotScope"
        :todo="item"></slot>
    </div>
    <!--<ul>-->
      <!--<li-->
        <!--v-for="(todo, index) in todos"-->
        <!--:key="index"-->
      <!--&gt;-->
        <!--<slot name='slotScope' v-bind:todo="todo">-->
          <!--&lt;!&ndash; 回退的内容 &ndash;&gt;-->
          <!--{{ todo.text }}-->
        <!--</slot>-->
      <!--</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
export default {
  name: 'todoList',
  data () {
    return {
      todos: [{
        text: 'play Dota',
        isComplete: true
      }, {
        text: 'play LOL',
        isComplete: true
      }, {
        text: 'play 王者荣耀',
        isComplete: false
      }]
    }
  }
}
</script>

<style scoped>
  .todo-list{
    padding: 10px;
    border: 1px solid blue;
  }
  .todo-list__slot-name-title{
    text-align: center;
    background-color: #333;
    color: #fff;
    padding: 20px 0;
  }
  .todo-list__slot{
    margin-left: 100px;
    border: 1px solid red;
  }
</style>
