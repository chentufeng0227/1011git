<script>
export default{
    data(){
        return{
            arr1:[1,2,3,]
        }
    }
}

</script>

<template>
<div class="header page">

</div>
<div class="sceond page">
    <div class="x" v-for=" item in arr1">
    </div>

</div>

<div class="third page">
    <div class="thirdLeft">

    </div>
    <div class="thirdRight">
        <div class="rightText ">
            <h1>Title</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa at cum explicabo pariatur voluptas, distinctio odit magni non adipisci nihil sit, totam nulla dolorum sed voluptatum minima molestias dicta voluptate?
            </p>

        </div>


    </div>
</div>

<div class="footer page">

</div>

</template>

<style lang="scss" scoped>
body{
    margin: 0px;
}
.page{
    width: 100vw;
    display: flex;
}
.header{
    height: 30vh;
    background-color: rgba(0, 255, 255, 0.925);
}
.sceond{
    height: 40vh;
    width: 100vw;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .x{
        height: 250px;
        width: 250px;
        background-color: rgba(0, 255, 255, 0.925);
    }

}
.third{
    height: 60vh;
    margin-top: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    // 版面都由左到右,所以預留的10%會在右邊,使用space between,會將預留10%的空間放在right&left的中間
    .thirdLeft{
        height: 450px;
        width: 450px;
        background-color: aqua;
        margin-right:400px;
    }
    .thirdRight{
        width: 50%;
        height: 50%;
        .rightText{
            width: 50%;
            height: 30%;
    }
}
}
.footer{
    height: 10vh;
    background-color:aqua;
}

</style>