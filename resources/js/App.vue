<script setup>
import Menu from "./components/Menu.vue";

</script>
<template>
  <Menu class="sticky-header" />
  <router-view></router-view>
</template>
<style scoped>
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color:pink;
  padding: 10px;
  z-index: 1000;
  /* Ajoutez d'autres styles selon vos besoins */
}
</style>