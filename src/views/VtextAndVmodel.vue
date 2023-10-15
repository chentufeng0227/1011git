<script>
//test變數不用跟test.vue同名,只要路徑對就可抓到資料
import test from "../components/test.vue"
export default{
    data(){
        return{
        
            //V-text
        title:"title",
        address:"xx路",
        info:{
            name:"amy",
            age:18,
        },
            //v-model
            cool:"",
            age:18,
            selectText:"",
            lazyText:"",
            numberText:0,
            trim:"",
            checkText:[],
            radioText:"",

        }
    },
    components:{
        test
    },
    methods:{

    }
}

</script>

<template>
<h1>V-text And V-Model</h1>
<test v-text="title"/>
<p v-text="info"></p>
<p>{{ this.title }}</p>
<h1>v-model</h1>

<input type="number" v-model="age">
<h4 v-text="'age:'+age"></h4>



<select name="" id="" v-model="selectText">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>
<p>{{ this.selectText }}</p>


<!-- lazy,number,trim cc-->
<p>v-model.lazy</p>
<input type="text" v-model.lazy="lazyText"> 
<p>{{ this.lazyText }}</p>

<p>v-model.number</p>
<input type="number" v-model.number="numberText"> 
<p>{{ this.numberText }}</p>
<!-- 只能是數字 -->

<p>v-model.trim</p>
<input type="text" v-model.trim="trimText"> 
<p>{{ this.trimText }}</p>

<p>checkbox</p>
<label for="">早餐</label>
<input type="checkbox" v-model="checkText" name="meal" value="breakfast" id="breakfast"> 
<label for="">午餐</label>
<input type="checkbox" v-model="checkText" name="meal" value="lunch" id="lunch">
<label for="">晚餐</label>
<input type="checkbox" v-model="checkText" name="meal" value="dinner" id="dinner">
<p>{{ this.checkText }}</p>

<p>radio</p>
<label for="">早餐</label>
<input type="radio" v-model="radioText" name="food" value="pork" id="breakfast"> 
<label for="">午餐</label>
<input type="radio" v-model="radioText" name="food" value="chicken" id="lunch">
<label for="">晚餐</label>
<input type="radio" v-model="radioText" name="food" value="fish" id="fish">
<p>{{ this.radioText }}</p>
</template>

<style>

</style>
