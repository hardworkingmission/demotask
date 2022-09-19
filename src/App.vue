<template>
  <header></header>

  <main>
    <Home />
  </main>
</template>

<script>
import Home from './components/Home.vue';
import NavBar from './components/NavBar.vue';

export default {
  components: {
    Home,
    NavBar,
  },
};
</script>

<style scoped></style>
