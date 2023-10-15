<script>
export default{
    data(){
        return{
            arr1:[1,2,3,4,5,6,7,8,9]
        }
    }
}

</script>

<template>
<div class="header page">

</div>
<div class="sceond page">
</div>

<div class="third page">
    <div class="thirdLeft">

    </div>
    <div class="thirdRight">
        <div class="rightText">
            <h1>Title</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa at cum explicabo pariatur voluptas, distinctio odit magni non adipisci nihil sit, totam nulla dolorum sed voluptatum minima molestias dicta voluptate?
            </p>

        </div>
        <div class="rightBlocks">
            <div class="blocks" v-for="item in arr1">
                <div class="colorArea">
                    <p>Product Name</p>
                </div>
            </div>

        </div>


    </div>
</div>

<div class="footer page">

</div>

</template>

<style lang="scss" scoped>
.page{
    width: 100vw;
    display: flex;
    margin: 0;
}
.header{
    height: 10vh;
    background-color: rgba(0, 255, 255, 0.925);
}
.sceond{
    height: 30vh;
    background-color: rgba(114, 239, 227, 0.925);
    }
.third{
    height: 70vh;
    margin: 30px 0;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    // 版面都由左到右,所以預留的10%會在右邊,使用space between,會將預留10%的空間放在right&left的中間
    .thirdLeft{
        height: 100%;
        width: 30%;
        background-color: aqua;
        margin-right:5%;
    }
    .thirdRight{
        width: 70%;
        height: 100%;
        margin-right:5%;
        .rightText{
            width: 80%;
            height: 15%;
            display: flex;
            align-items: center;

        h1{
            margin-right: 5%;
        }
    
    }
    .rightBlocks{
        height: 80%;
        width: 100;
        display: flex;
        .blocks{
            width: 30%;
            height: 21%;
        }
        .colorArea{
            background-color: aqua;
        }
    }
}
}
.footer{
    height: 10vh;
    background-color:aqua;
}


</style>