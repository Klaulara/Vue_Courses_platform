<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  text-decoration: none;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  background-color: #8443ac;
  color: #fff;
  text-decoration: none;
}

</style>
