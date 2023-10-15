<script>
import home from "../components/home.vue"
import home2 from "../components/home2.vue"
export default{
    data(){
        return{
            arr1:[1,2,3,4,5],
            arr2:[{
                neme:"amy",
                age:18,
                address:"xx市xx區",
            },
            {
                neme:"bee",
                age:18,
                address:"xx市xx區",
            },
            {
                neme:"jack",
                age:18,
                address:"xx市xx區",
            },
            ]
        }
    },
    components:{
        home
        
    },
}

</script>

<template>
<h1>v-for</h1>
<!-- arr -->
<p v-for=" item in arr1">{{ item }}</p>
<!-- arr2 -->
<ol v-for="x in arr2">
    <li>{{ x.name }}</li>
    <li>{{ x.age }}</li>
    <li>{{ x.address }}</li>


</ol>

    <home />
    <home2 />
    

</template>

<style lang="scss" scoped>

</style>