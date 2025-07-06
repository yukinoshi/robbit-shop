<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHead.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  <LayoutNav></LayoutNav>
  <router-view></router-view>
  <LayoutHeader></LayoutHeader>
  <LayoutFooter></LayoutFooter>
</template>


<style scoped></style>