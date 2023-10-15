<script setup>
// import HomeView from  "./views/HomeView.vue"
import Header from "./components/Header.vue"
import{ RouterLink, RouterView} from 'vue-router'

</script>

<template>
    <div class="topHeader">
      <Header />
    </div>
    <div class="text">
    <RouterView/>
    </div>
</template>

<style lang="scss" scoped>

</style>
