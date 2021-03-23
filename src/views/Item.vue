<template>
    <div class="item">
        <Notification />

        <el-container>

            <el-main>
                <div class="show-imgs">
                    <div class="three-imgs">
                        <el-image :src="data.poster_img" @click="changeImg($event,0)" class="border"></el-image>
                        <el-image :src="data.detail_img1" @click="changeImg($event, 1)"></el-image>
                        <el-image :src="data.detail_img2" @click="changeImg($event, 2)"></el-image>
                    </div>
                    <div class="one-img">
                        <el-image :src="data.poster_img"></el-image>
                    </div>
                </div>

                <div class="description">
                    <h2>商品介绍</h2>
                    <p>A dynamic panel contains a state for each slide. The arrows have Click interactions that set the dynamic panel to its Next or Previous state with a Fade animation. The arrows also update the text on the slide counter.
                    </p>
                    <p>The dynamic panel has a Panel State Changed interaction that uses conditional case logic to disable the left arrow when the panel's first state is showing and the right arrow when the panel's final state is showing.
                    </p>
                    <p>The dynamic panel also has Swipe interactions that Fire the Click events of the arrows, allowing users to interact with the slideshow on mobile devices.
                    </p>
                </div>

                <div class="reviews">
                    <h2>用户评论 <span class="total-num"> 共158条评论</span></h2>
                </div>

                <div class="recommend">
                    <p class="text">猜你喜欢</p>
                    <el-carousel height="400px" indicator-position="outside">
                        <el-carousel-item :key="1">
                            <el-row :gutter="20">
                                <el-col :span="8" v-for="(item,index) in discount">
                                    <div class="lunbo" v-if="index < 3">
                                        <el-image :src="item.img" class="image"></el-image>
                                        <p class="name" @mouseover="changeColor($event,3)" @mouseleave="recoverColor($event,3)">{{item.name}}</p>
                                        <p class="pre-price">¥{{item.previousPrice}}</p>
                                        <p class="cur-price" @mouseover="changeColor($event,3)" @mouseleave="recoverColor($event,3)">¥{{item.price}}</p>
                                        <p class="group-style">{{item.group}}{{item.style}}</p>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-carousel-item>

                        <el-carousel-item :key="2">
                            <el-row :gutter="20">
                                <el-col :span="8" v-for="(item,index) in discount">
                                    <div class="lunbo" v-if="index >= 3">
                                        <el-image :src="item.img" class="image"></el-image>
                                        <p class="name" @mouseover="changeColor($event,3)" @mouseleave="recoverColor($event,3)">{{item.name}}</p>
                                        <p class="pre-price">¥{{item.previousPrice}}</p>
                                        <p class="cur-price" @mouseover="changeColor($event,3)" @mouseleave="recoverColor($event,3)">¥{{item.price}}</p>
                                        <p class="group-style">{{item.group}}{{item.style}}</p>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-main>

            <el-aside>
                111
            </el-aside>
        </el-container>
    </div>
</template>

<script>
    import Notification from "./Notification";
    export default {
        name: "Item",
        components: {
            Notification
        },
        data(){
            return{
                data:{
                    id: 1,
                    name:"Air VaporMax EVO NRG",
                    poster_img: "../static/air-vapormax-evo-nrg-0.jpg",
                    detail_img1: "../static/air-vapormax-evo-nrg-1.jpg",
                    detail_img2: "../static/air-vapormax-evo-nrg-2.jpg",
                    group: "男子",
                    category:"鞋类",
                    style: "休闲鞋",
                    color: "黑色",
                    size: "42",
                    price: 1499,
                    previousPrice: null,
                    brand: "Nike"
                },
                discount: [
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        img: "../static/sportswear-essentials-backpack-0.jpg",
                        price: 320,
                        previousPrice: 499,
                        group: "男子",
                        style: "背包",
                    },
                    {
                        id: 6,
                        brand: "Adidas",
                        name: "Tensaur",
                        img: "../static/Tensaur_Shoes_Black-0.jpg",
                        price: 210,
                        previousPrice: 240,
                        group: "儿童",
                        style: "运动鞋",
                    },
                    {
                        id: 5,
                        brand: "Adidas",
                        name: "HER Studio London",
                        img: "../static/HER_Studio_London_T-Shirt-0.jpg",
                        price: 200,
                        previousPrice: 290,
                        group: "女子",
                        style: "T恤",
                    },
                    {
                        id: 4,
                        brand: "Nike",
                        name: "Air Max 90",
                        img: "../static/air-max-90-eoi-0.jpg",
                        price: 390,
                        previousPrice: 490,
                        group: "男子",
                        style: "运动鞋",
                    },
                    {
                        id: 6,
                        brand: "Adidas",
                        name: "Tensaur",
                        img: "../static/Tensaur_Shoes_Black-0.jpg",
                        price: 210,
                        previousPrice: 240,
                        group: "儿童",
                        style: "运动鞋",
                    }
                ],
            }
        },
        methods:{
            changeImg:function (e,index) {
                var target = e.target;

                var oneImg = document.querySelectorAll("div.one-img > div > img.el-image__inner")[0];
                var imgs = document.querySelectorAll("div.three-imgs > div.el-image");
                for(var i=0;i<imgs.length ;i++){
                    if(i !== index){
                        imgs[i].classList.remove("border");
                    }else {
                        imgs[i].classList.add("border");
                    }
                }

                if(target.className.toLowerCase() === "el-image__inner"){
                    oneImg.src = target.src;
                }
            },
            changeColor: function(e, val) {
                let target = e.target;
                let parent_node = target.parentNode;
                var changeNode;
                if(target.className.toLowerCase() === "name"){
                    changeNode = parent_node.childNodes[val];
                }else{
                    changeNode = parent_node.childNodes[1];
                }
                target.style = "opacity:0.5";
                changeNode.style = "opacity:0.5";
            },
            recoverColor: function (e,val) {
                let target = e.target;
                let parent_node = target.parentNode
                var changeNode;
                if(target.className.toLowerCase() === "name"){
                    changeNode = parent_node.childNodes[val];
                }else{
                    changeNode = parent_node.childNodes[1];
                }
                target.style = "opacity:1";
                changeNode.style = "opacity:1";
            }
        }
    }
</script>

<style scoped>
    div.show-imgs{
        display: flex;
    }
    div.three-imgs{
        width: 10%;
        height: 500px;
        padding: 30px;
        display: inline-block;
        float: left;
    }
    div.three-imgs .el-image{
        margin-bottom: 10px;
        display: block;
        top: 120px;
        border-width: 1px;
        border-color: #303133;
    }

    div.one-img{
        display: inline-block;
        width: 60%;
        float: left;
        padding: 20px;
        margin-left: 20px;
    }

    div.three-imgs .el-image:hover{
        cursor: pointer;
    }

    .border{
        border-style: solid;
    }

    div.description{
        background-color: rgba(144, 147, 153, 0.2);
        margin: 30px;
        padding: 120px;
    }

    div.description p{
        text-align: left;
    }

    div.reviews{
        background-color: rgba(144, 147, 153, 0.2);
        margin: 30px;
        padding: 30px;
    }

    div.reviews h2{
        text-align: left;
    }

    .total-num{
        font-size: 13px;
        font-weight: normal;
        padding: 10px;
        color: #909399;
    }

    p.text{
        font-weight: bold;
        font-size: 26px;
        display: inline-block;
    }
    p.pre-price, p.cur-price{
        float:right;
    }
    p.name, p.pre-price, p.cur-price{
        font-weight: bold;
        font-size: 18px;
        display: inline-block;
    }
    p.group-style{
        margin-top: 0px;
        color: #909399;
    }
    .image, p.name:hover, p.cur-price:hover{
        cursor: pointer;
    }
    p.pre-price{
        color: #909399;
        text-decoration: line-through;
        font-size: 15px;
        padding-left: 5px;
    }

    div.lunbo{
        text-align: left;
    }
</style>