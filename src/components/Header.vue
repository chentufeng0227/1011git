<script setup>
import{ RouterLink } from 'vue-router'
</script>


<template>
    <nav class="topNav">
        <RouterLink class="items" to="/">Home</RouterLink>
        <RouterLink class="items" to="/VtextAndVmodel">v-text & v-model</RouterLink>
        <RouterLink class="items" to="/vfor">v-for</RouterLink>
        <RouterLink class="items" to="/von">von</RouterLink>

    </nav>


</template>

<style lang="scss" scoped>
.topNav{
    width: 100%;
    height: 100%;
    justify-content: space-between;
    background-color: rgb(170, 208, 236);
    font-size: 24pt;

}
.items{
    width: 100%;
    height: 100%;
    // display:contents;
    // justify-content: space-between;
    font-size: 16pt;
    color: rgb(23, 10, 10);
}



</style>
