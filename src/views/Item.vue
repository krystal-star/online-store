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

                </div>

                <div class="reviews">

                </div>

                <div class="recommend">

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
                }
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
            }
        }
    }
</script>

<style scoped>
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
</style>