<template>
  <div class="hello">
    <ul>
      <li>
        <router-link to="/vue3">
          vue3.x
        </router-link>
      </li>
      <li>
        <router-link to="/vue2">
          vue2.x
        </router-link>
      </li>
      <li>vue3.x</li>
    </ul>
    <div id="basecontainer">
    </div>
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
