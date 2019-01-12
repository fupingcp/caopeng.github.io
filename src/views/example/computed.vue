<template>
  <div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <div>
      <p>"{{ fullName | isName}}"</p>
    </div>
    <input v-model="firstName" />
  </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      message: 'Hello world',
      firstName: '鹏',
      lastName: '毛'
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  filters: {
    isName: function (value) {
      return '姓名是：' + value
    }
  }
}
</script>

<style scoped>
.example{
  width: 800px;
  height: 800px;
}
</style>
