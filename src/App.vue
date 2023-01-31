<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/product">Products</router-link>
    <router-link to="/past-orders">Past orders</router-link>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
