<template>
  <div class="hello">
    <ul>
      <li>
        <router-link to="/sub-vue">
          vue3.x
        </router-link>
      </li>
      <li>vue3.x</li>
      <li>vue3.x</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello{
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
