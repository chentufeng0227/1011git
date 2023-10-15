<script>
export default{
    //data : function
    //ES6語法糖
    data(){
        return{
            title:"cool",
            arr1:[1],
            arr2:[1,2,3,],
        }
    },
    methods:{
        print(){//print(){}
            console.log(this.title)
        },
        sky(){//print(){}
            console.log(this.sky)
        },
        write(){//print(){}
            console.log(this.text)
        },
    
    }
}



</script>

<template>
    
    <h1>VON</h1>
    <button type="button" v-on:click="print()">btn</button>
    <button type="button"  @click="print()">btn</button>
    
    <div class="praPage">

        <div class="header page">
            <div class="headerRight">
    
            </div>
    
            <div class="headerLift">
    
            </div>
        </div>
    
        <div class="second page">
            <div class="secondLeft">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illo ex asperiores quibusdam laborum, mollitia placeat. Deleniti exercitationem cupiditate quia alias numquam dolorum maxime repellendus ratione amet veniam neque eligendi accusantium voluptate commodi error voluptatem non repellat consequuntur sed eaque cumque, mollitia modi quas ex. Et voluptatibus ullam eveniet expedita!</p>
            </div>
            <div class="secondRight">
    
            </div>
    
        </div>
    
        <div class="onSale page">
            <h1 >on Sale</h1>
            <div class="x" v-for=" item in arr1"></div>
            <div class="y" v-for=" item in arr2"></div>
                    <div class="onsaleArea">
                        <div class="onSaleImg1">
                            <img src="../../pic/2.png" alt="">
                            <button type="button" class="btn1" v-on:click="print()">item</button>
                        </div>
                        <div class="onSaleImg2"> 
                            <img src="../../pic/3.png" alt=""> 
                            <button type="button" class="btn1" v-on:click="print()">item</button>
                        </div>
                        <div class="onSaleImg3">
                            <img src="../../pic/4.png" alt="">
                            <button type="button" class="btn1" v-on:click="print()">item</button>
                        </div>    
                    </div>
        </div>
    
        <div class="News page">
            <h1>News</h1>
            <div class="x" v-for=" item in arr1"></div>
            <div class="y" v-for=" item in arr2"></div>
            <div class="CardArea">
                <div class="card1">
                    <img src="../../pic/5.png" alt="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati nisi facilis odit voluptatem saepe veritatis sint vitae autem excepturi.</p>
                    <button type="button" class="btn1" v-on:click="print()">Detail</button>
                </div>
                <div class="card1">
                    <img src="../../pic/6.png " alt="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati nisi facilis odit voluptatem saepe veritatis sint vitae autem excepturi.</p>
                    <button type="button" class="btn1" v-on:click="print()">Detail</button>
                </div>
                <div class="card1">
                    <img src="../../pic/7.png" alt="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati nisi facilis odit voluptatem saepe veritatis sint vitae autem excepturi.</p>
                    <button type="button" class="btn1" v-on:click="print()">Detail</button>
                </div>
            
            </div>
                <button type="button" class="newsBtn" v-on:click="print()">More</button>
        </div>
    
        <div class="arrival page">
            <div class="arrArea">
                <div class="arrRight">
                    <img src="../../pic/8.png" alt="">
                </div>

                    <div class="arrivalText">
                        <h1>New arrival</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt iure vitae, harum ut, doloribus aliquam fuga impedit tempora quo nobis hic qui. Corrupti illo temporibus adipisci culpa labore eum, laborum officiis reiciendis autem optio rerum natus mollitia amet corporis fuga tenetur aut ducimus consequatur tempora rem commodi quam laboriosam impedit. Ipsum dolorem omnis debitis sint impedit, veniam illum praesentium at.</p>
                    </div>
        
            </div>
    
        </div>
    
    
        <div class="footer page">
            <p>Copyright©2023 by kouhei</p>
        </div>
    </div>




</template>

<style lang="scss" scoped>
.praPage{
    background-color: #fcf9e7;
    .page{
        width: 90%;
        margin: 0 5%;
        margin-top: 5%;
        display: flex;
    }
    .header{
        height: 15vh;
        position: relative;
        .headerRight{
            width: 80px;
            height: 80px;
            background-color: rgb(254, 204, 212);
            margin-top: 20px;
        }
        .headerLift{
            width: 50px;
            height: 50px;
            background-image: url("../../pic/Group\ 10.png");
            background-repeat: no-repeat;
            position: absolute;
            right: 0px;
            top:35px
        }
    }
    .second{
        height: 60vh;
        .secondRight{
            width: 100%;
            height:100%;
            background-image: url("../../pic/1.png");
            background-repeat: no-repeat;
            background-size: 100%;
            margin-left: 300px;
        }
        .secondLeft{
            width: 80vw;
            height:100%;
            h1{
                font-size: 50pt;
                margin-left: 50px;
            }
            p{
                margin-top: 70px;
            }
        }
    }
    .onSale{
        height: 80vh; 
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .onsaleArea{
            height: 60vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

            .onSaleImg1{
                margin: 20px;
            }
            .onSaleImg2{
                margin: 20px;
            }
            .onSaleImg3{
                margin: 20px;
            }
            .btn1{
                position: absolute;
                margin-left: -250px;
                margin-top: 420px;
                width: 100px;
                height: 50px;
                color: white;
                font-size: 20pt;
                border: 0;
                background-color: rgb(236, 179, 189);
            }
        
    }
    .News{
        height: 80vh;
        margin-top: 10%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .CardArea{
            height: 60vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-left: 5px;
        }
            .card1{
                height: 450px;
                width: 392px;
                background-color: white;
            }
            p{
                width: 90%;
                margin: 0 5%;
                margin-top: 10px;
            }
            .btn1{
                height: 10%;
                width: 30%;
                font-size: 12pt;
                color: white;
                background-color: black;
                margin: 0 5%;
                margin-top: 10px;
            }
        .newsBtn{
            width: 150px;
            height: 100px;
            margin-top: 5%;
            color: white;
            font-size: 20pt;
            border: 0;
            background-color: rgb(236, 179, 189);
        }
        
    }
.arrival{
    height: 80vh;
    
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
    .arrArea{
        display: flex;
    }
    .arrRight{
        width: 50%;
        height: 100%;
        background-color: rgb(236, 179, 189);
    
    }
        img{
            width: 90%;
            height: 60%;
            margin-right: 60%;
        }
    .arrivalText{
        width: 50%;
        height: 20%;
    
    }

}    
    .footer{
        height: 10vh;
        background-color: rgb(236, 179, 189);
        p{
            text-align: center;
        }
    }

}

</style>