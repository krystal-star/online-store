<template>
    <div class="item">
        <Notification />

        <el-container>

            <el-main>
                <div class="show-imgs">
                    <div class="three-imgs">
                        <el-image :src="item.poster_img" @click="changeImg($event,0)" class="border"></el-image>
                        <el-image :src="item.detail_img1" @click="changeImg($event, 1)"></el-image>
                        <el-image :src="item.detail_img2" @click="changeImg($event, 2)"></el-image>
                    </div>
                    <div class="one-img">
                        <el-image :src="item.poster_img"></el-image>
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

                <div id="reviews" class="reviews">
                    <h2>用户评论 <span class="total-num"> 共158条评论</span></h2>

                    <div class="reviews-container">
                    <el-avatar :src="avatars.avatar2" :size="60"></el-avatar>
                    <el-badge :value="2" class="good" type="info">
                        <svg t="1616596377988" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1237" width="32" height="32"><path d="M415.136 128.48c96.032 4.256 171.616 70.72 171.616 150.656 0 19.968-0.576 39.424-1.76 58.336l-1.408 18.784-1.664 17.216h186.016c72 0 114.72 51.232 111.872 128.064l-0.416 7.296-0.672 7.424-5.024 41.024c-10.944 86.88-22.24 160.48-34.144 222.176-18.272 70.912-77.568 114.048-155.264 116.864l-8.096 0.128H176a32 32 0 0 1-31.776-28.256l-0.224-3.744V405.504a32 32 0 0 1 28.256-31.776l3.744-0.224 110.784-0.032 2.144-2.08c17.952-18.944 41.952-64.96 57.632-114.016l2.88-9.248 7.712-26.88c7.68-25.152 16.704-49.728 27.296-73.696a32 32 0 0 1 30.688-19.072z m18.88 66.464l-4.32 11.264a611.2 611.2 0 0 0-11.328 33.76l-7.616 26.496c-20.704 70.304-56.352 136.864-90.752 162.496v403.456l356.192 0.032c48.96 0 83.52-20.992 97.44-56.256l1.92-5.408 1.6-5.344 4.832-26.176c8.096-45.056 16.032-97.152 23.84-156.16l4.672-36.192 4.64-37.888c5.056-46.944-10.176-69.536-42.656-71.392l-4.544-0.128h-222.496a32 32 0 0 1-31.584-36.992c5.92-37.6 8.896-78.048 8.896-121.376 0-35.296-31.232-69.12-77.76-81.696l-6.4-1.6-4.576-0.896zM208 437.472v394.976H256V437.44H208z" p-id="1238" fill="#909399"></path></svg>
                    </el-badge>
                    <div class="fake-reviews">
                        <p class="username">禺彊 <span class="time"> 一周前</span></p>
                        <p class="content">这个商品真的不错，大家赶紧来用吧！</p>
                        <el-image :src="item.detail_img1" style="width: 10%;padding: 10px 10px 0 0;"></el-image>
                        <el-image :src="item.detail_img2" style="width: 10%;padding: 10px 10px 0 0;"></el-image>
                    </div>
                    </div>

                    <div class="reviews-container">
                        <el-avatar :src="avatars.avatar1" :size="60"></el-avatar>
                        <el-badge :value="0" class="good" type="info" >
                            <svg t="1616596377988" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1237" width="32" height="32"><path d="M415.136 128.48c96.032 4.256 171.616 70.72 171.616 150.656 0 19.968-0.576 39.424-1.76 58.336l-1.408 18.784-1.664 17.216h186.016c72 0 114.72 51.232 111.872 128.064l-0.416 7.296-0.672 7.424-5.024 41.024c-10.944 86.88-22.24 160.48-34.144 222.176-18.272 70.912-77.568 114.048-155.264 116.864l-8.096 0.128H176a32 32 0 0 1-31.776-28.256l-0.224-3.744V405.504a32 32 0 0 1 28.256-31.776l3.744-0.224 110.784-0.032 2.144-2.08c17.952-18.944 41.952-64.96 57.632-114.016l2.88-9.248 7.712-26.88c7.68-25.152 16.704-49.728 27.296-73.696a32 32 0 0 1 30.688-19.072z m18.88 66.464l-4.32 11.264a611.2 611.2 0 0 0-11.328 33.76l-7.616 26.496c-20.704 70.304-56.352 136.864-90.752 162.496v403.456l356.192 0.032c48.96 0 83.52-20.992 97.44-56.256l1.92-5.408 1.6-5.344 4.832-26.176c8.096-45.056 16.032-97.152 23.84-156.16l4.672-36.192 4.64-37.888c5.056-46.944-10.176-69.536-42.656-71.392l-4.544-0.128h-222.496a32 32 0 0 1-31.584-36.992c5.92-37.6 8.896-78.048 8.896-121.376 0-35.296-31.232-69.12-77.76-81.696l-6.4-1.6-4.576-0.896zM208 437.472v394.976H256V437.44H208z" p-id="1238" fill="#909399"></path></svg>
                        </el-badge>
                        <div class="fake-reviews">
                            <p class="username">海纳 <span class="time"> 一周前</span></p>
                            <p class="content">开启评论不要脸模式！这个商品非常棒！5分钟就穿好了！赞</p>

                            <div class="reply">
                                <el-avatar :src="avatars.avatar3" :size="50"></el-avatar>
                                <el-badge :value="0" class="good" type="info">
                                    <svg t="1616596377988" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1237" width="32" height="32"><path d="M415.136 128.48c96.032 4.256 171.616 70.72 171.616 150.656 0 19.968-0.576 39.424-1.76 58.336l-1.408 18.784-1.664 17.216h186.016c72 0 114.72 51.232 111.872 128.064l-0.416 7.296-0.672 7.424-5.024 41.024c-10.944 86.88-22.24 160.48-34.144 222.176-18.272 70.912-77.568 114.048-155.264 116.864l-8.096 0.128H176a32 32 0 0 1-31.776-28.256l-0.224-3.744V405.504a32 32 0 0 1 28.256-31.776l3.744-0.224 110.784-0.032 2.144-2.08c17.952-18.944 41.952-64.96 57.632-114.016l2.88-9.248 7.712-26.88c7.68-25.152 16.704-49.728 27.296-73.696a32 32 0 0 1 30.688-19.072z m18.88 66.464l-4.32 11.264a611.2 611.2 0 0 0-11.328 33.76l-7.616 26.496c-20.704 70.304-56.352 136.864-90.752 162.496v403.456l356.192 0.032c48.96 0 83.52-20.992 97.44-56.256l1.92-5.408 1.6-5.344 4.832-26.176c8.096-45.056 16.032-97.152 23.84-156.16l4.672-36.192 4.64-37.888c5.056-46.944-10.176-69.536-42.656-71.392l-4.544-0.128h-222.496a32 32 0 0 1-31.584-36.992c5.92-37.6 8.896-78.048 8.896-121.376 0-35.296-31.232-69.12-77.76-81.696l-6.4-1.6-4.576-0.896zM208 437.472v394.976H256V437.44H208z" p-id="1238" fill="#909399"></path></svg>
                                </el-badge>
                                <div class="reply-content">
                                    <p class="username">路离<span class="time">回复</span>海纳 <span class="time"> 一周前</span></p>
                                    <p class="content">不仅支持跑步还支持登山，真贴心 <el-link type="primary">@海纳</el-link></p>
                                </div>
                            </div>

                            <div class="reply">
                                <el-avatar :src="avatars.avatar1" :size="50"></el-avatar>
                                <el-badge :value="0" class="good" type="info">
                                    <svg t="1616596377988" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1237" width="32" height="32"><path d="M415.136 128.48c96.032 4.256 171.616 70.72 171.616 150.656 0 19.968-0.576 39.424-1.76 58.336l-1.408 18.784-1.664 17.216h186.016c72 0 114.72 51.232 111.872 128.064l-0.416 7.296-0.672 7.424-5.024 41.024c-10.944 86.88-22.24 160.48-34.144 222.176-18.272 70.912-77.568 114.048-155.264 116.864l-8.096 0.128H176a32 32 0 0 1-31.776-28.256l-0.224-3.744V405.504a32 32 0 0 1 28.256-31.776l3.744-0.224 110.784-0.032 2.144-2.08c17.952-18.944 41.952-64.96 57.632-114.016l2.88-9.248 7.712-26.88c7.68-25.152 16.704-49.728 27.296-73.696a32 32 0 0 1 30.688-19.072z m18.88 66.464l-4.32 11.264a611.2 611.2 0 0 0-11.328 33.76l-7.616 26.496c-20.704 70.304-56.352 136.864-90.752 162.496v403.456l356.192 0.032c48.96 0 83.52-20.992 97.44-56.256l1.92-5.408 1.6-5.344 4.832-26.176c8.096-45.056 16.032-97.152 23.84-156.16l4.672-36.192 4.64-37.888c5.056-46.944-10.176-69.536-42.656-71.392l-4.544-0.128h-222.496a32 32 0 0 1-31.584-36.992c5.92-37.6 8.896-78.048 8.896-121.376 0-35.296-31.232-69.12-77.76-81.696l-6.4-1.6-4.576-0.896zM208 437.472v394.976H256V437.44H208z" p-id="1238" fill="#909399"></path></svg>
                                </el-badge>
                                <div class="reply-content">
                                    <p class="username">海纳<span class="time">回复</span>路离 <span class="time"> 三分钟前</span></p>
                                    <p class="content">托儿得太明显</p>
                                </div>
                            </div>
                        </div>
                        <el-link style="font-size: 14px">查看所有评论</el-link>
                    </div>


                </div>

                <div class="recommend">
                    <p class="text">猜你喜欢</p>
                    <el-carousel height="420px" indicator-position="outside">
                        <el-carousel-item :key="1">
                            <el-row :gutter="20">
                                <el-col :span="8" v-for="(item,index) in discount">
                                    <div class="lunbo" v-if="index < 3">
                                        <el-image :src="item.img" class="image"></el-image>
                                        <p class="name" @mouseover="changeColor($event,3)" @mouseleave="recoverColor($event,3)">{{item.name}}</p>
                                        <p class="pre-price">¥{{item.previous_price}}</p>
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
                                        <p class="pre-price">¥{{item.previous_price}}</p>
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
                <div class="first-line">
                    <h1>{{item.name}}</h1>
                    <el-image class="star" src="../static/icons/heart-on.png" style="width: 10%" @click="handleStar"></el-image>
                </div>

                <div class="second-line">
                    <el-rate
                        v-model="4.5"
                        disabled
                        show-score
                        :colors="rate_color"
                        text-color="#2c3e50"
                        score-template="4.5">
                    </el-rate>
                    <span class="total-num">共158条评价</span>
                </div>

                <div class="third-line">
                    <h2 class="price">¥{{item.price}}</h2>
                    <h3 class="pre-price" v-if="item.previous_price !== null">¥{{item.previous_price}}</h3>
                </div>

                <div class="four-line">
                    <el-tag type="info" size="medium">{{item.brand}}</el-tag>
                    <el-tag type="info" size="medium">{{item.color}}</el-tag>
                    <el-tag type="info" size="medium">{{item.group}}</el-tag>
                    <el-tag type="info" size="medium">{{item.style}}</el-tag>
                </div>

                <div class="choose-size">
                    <div class="size-header">
                        <h4 class="choose">选择尺码</h4>
                        <h4 class="table" @click="dialogVisible = true">尺码表</h4>
                    </div>
                    <el-row :gutter="30" v-for="item in 3" type="flex" justify="left">
                        <el-col :span="5" v-for="subitem in 4">
                            <el-button @click="chooseSize">{{item*4+subitem+30}}</el-button>
                        </el-col>
                    </el-row>
                    <p class="stock" v-if="sizeChoosed">库存剩余{{item.stock}}件</p>
                    <p class="stock" v-else>请选择尺码</p>
                </div>

                <div class="chart">
                    <el-button round @click="addToBasket">加入购物车</el-button>
                    <p class="delivery">商品金额高于300元免费配送</p>
                </div>

                <div class="share">
                    <p>分享有礼</p>
                    <el-popover
                            placement="bottom"
                            title="关注 获取俊俊的第一手资料"
                            width="200"
                            trigger="hover"
                    >
                        <el-image style="width: 150px; height:150px;"
                                  src="../static/icons/qr-code.png"></el-image>
                    <el-image src="../static/icons/wechat2.png" style="width: 12%;padding: 0.5em" slot="reference">
                    </el-image>
                    </el-popover>
                    <el-image src="../static/icons/weibo2.png" style="width: 12%;padding: 0.5em"></el-image>
                    <el-image src="../static/icons/QQ.png" style="width: 12%;padding: 0.5em"></el-image>
                </div>
            </el-aside>
        </el-container>

        <el-dialog title="尺码表" :visible.sync="dialogVisible" >
            <el-image :src="sizeTable"></el-image>
        </el-dialog>
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
                item:{
                    id: 1,
                    name:"Air VaporMax EVO NRG",
                    poster_img: "../static/air-vapormax-evo-nrg-0.jpg",
                    detail_img1: "../static/air-vapormax-evo-nrg-1.jpg",
                    detail_img2: "../static/air-vapormax-evo-nrg-2.jpg",
                    group: "男子",
                    category:"鞋类",
                    style: "休闲鞋",
                    color: "黑色",
                    size: "40",
                    price: 1499,
                    previous_price: null,
                    stock: 30,
                    sale: 5,
                    brand: "Nike",
                    rating:3.8
                },
                discount: [
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        img: "../static/sportswear-essentials-backpack-0.jpg",
                        price: 320,
                        previous_price: 499,
                        group: "男子",
                        style: "背包",
                    },
                    {
                        id: 6,
                        brand: "Adidas",
                        name: "Tensaur",
                        img: "../static/Tensaur_Shoes_Black-0.jpg",
                        price: 210,
                        previous_price: 240,
                        group: "儿童",
                        style: "运动鞋",
                    },
                    {
                        id: 5,
                        brand: "Adidas",
                        name: "HER Studio London",
                        img: "../static/HER_Studio_London_T-Shirt-0.jpg",
                        price: 200,
                        previous_price: 290,
                        group: "女子",
                        style: "T恤",
                    },
                    {
                        id: 4,
                        brand: "Nike",
                        name: "Air Max 90",
                        img: "../static/air-max-90-eoi-0.jpg",
                        price: 390,
                        previous_price: 490,
                        group: "男子",
                        style: "运动鞋",
                    },
                    {
                        id: 6,
                        brand: "Adidas",
                        name: "Tensaur",
                        img: "../static/Tensaur_Shoes_Black-0.jpg",
                        price: 210,
                        previous_price: 240,
                        group: "儿童",
                        style: "运动鞋",
                    }
                ],
                avatars:{
                    avatar1:"../static/icons/avatar1.jpeg",
                    avatar2:"../static/icons/avatar2.jpeg",
                    avatar3:"../static/icons/avatar3.jpeg",
                },
                rate_color:["#909399"],
                dialogVisible:false,
                sizeTable: '../static/icons/size.png',
                sizeChoosed:false,
            }
        },
        created() {
            let id = window.sessionStorage.getItem('id');
            const _this = this
            axios.get('http://localhost:8181/itemInfo/'+JSON.parse(id)).then(function (resp) {
                _this.item = resp.data.data
                _this.discount = resp.data.data.related_items
                _this.item.size = resp.data.data.size   //？？？？
            })
            window.scrollTo(0,0);
        },
        mounted() {
            var badges = document.getElementsByClassName("el-badge");
            for(var i=0; i<badges.length;i++) badges[i].addEventListener("click",this.addValue);

            var star = document.getElementsByClassName("star")[0];
            star.setAttribute("is-on","false");

            var sizes = document.querySelectorAll("div.choose-size>div.el-row>div.el-col>button.el-button");
            for(var j=0; j<sizes.length;j++){
                if (sizes[j].innerText !== this.item.size){
                    sizes[j].classList.add("is-disabled");
                    sizes[j].setAttribute("disabled","disabled");
                }else{
                    sizes[j].setAttribute("is-click","false");
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
            },
            addValue: function (e) {
                var target = e.target;
                var val = Number(target.parentNode.children[1].innerHTML);
                target.parentNode.children[1].innerHTML = val+1;
            },
            handleStar: function (e) {
                var target = e.target;
                console.log(target);
                if(target.nodeName.toLowerCase() === "img"){
                    var state = target.parentNode.getAttribute("is-on");
                    if(state === "false"){
                        target.src = '../static/icons/heart-off.png';
                        target.parentNode.setAttribute("is-on","true");
                        this.$store.state.star += 1;
                    }else{
                        target.src = '../static/icons/heart-on.png';
                        target.parentNode.setAttribute("is-on","false");
                        this.$store.state.star -= 1;
                    }
                }
            },
            chooseSize: function (e) {
                var target = e.target;
                var stock = document.getElementsByClassName("stock")[0];
                if(target.nodeName.toLowerCase() === "button"){
                    var state = target.getAttribute("is-click");
                    if(state === "false"){
                        target.style = "border-width:2px; font-weight:bold; color:#606266; border-color:#606266;background-color:white";
                        target.setAttribute("is-click","true");
                        this.sizeChoosed = true;
                    }else{
                        target.style = "border-width:1px; font-weight:normal; color:#606266; border-color:#DCDFE6;background-color:white";
                        target.setAttribute("is-click","false");
                        this.sizeChoosed = false;
                    }
                }else if(target.nodeName.toLowerCase() === "span"){
                    var state = target.parentNode.getAttribute("is-click");
                    if(state === "false"){
                        target.parentNode.style = "border-width:2px; font-weight:bold; color:#606266; border-color:#606266;background-color:white";
                        target.parentNode.setAttribute("is-click","true");
                        this.sizeChoosed = true;
                    }else{
                        target.parentNode.style = "border-width:1px; font-weight:normal; color:#606266; border-color:#DCDFE6;background-color:white";
                        target.parentNode.setAttribute("is-click","false");
                        this.sizeChoosed = false;
                    }
                }
            },
            addToBasket(){
                if(this.sizeChoosed === true){
                    var id = this.item.id;
                    const _this = this;
                    axios.post('localhost:8181/cart/add?itemId='+id).then(function (resp) {
                        if (resp.data.code === 0) {
                            _this.$notify({
                                title: '成功',
                                message: '加入购物车！',
                                type: 'success'
                            });
                        } else {
                            _this.$notify.error({
                                message: resp.data.data,
                                type: 'error'
                            });
                        }
                    })
                }
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
        padding-top: 50px;
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
    .recommend{
        text-align: left;
        margin: 3%;
    }
    p.text{
        font-weight: bold;
        font-size: 24px;
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
    div.reviews .el-avatar{
        float: left;
    }
    div.fake-reviews, .reply-content{
        padding-left: 90px;
        padding-right: 90px;
        text-align: left;
        font-size: 14px;
        line-height: 2em;
    }
    div.fake-reviews .username, .time{
        color: #909399;
        font-weight: bold;
    }
    .time{
        padding-left: 0.5em;
        padding-right: 0.5em;
        font-weight: normal;
        font-size: 13px;
    }
    .good{
        float: right;
    }
    .good:hover, div.star:hover, h4.table:hover, div.share .el-image:hover{
        cursor: pointer;
        opacity: 0.5;
    }

    div.reviews-container{
        margin-top: 3em;
    }

    div.reply{
        margin-top: 3em;
    }
    div.reply .good{
        left: 12.3%;
    }

    .el-aside{
        /*border-style: solid;*/
        border-width: 1px;
        padding: 20px 30px 20px 0;
        width: 380px;
        position: fixed;
        right: 20px;
        background-color: white;
    }
    .el-aside h1, h4.choose{
        float: left;
    }
    div.star{
        float: right;
        position: relative;
        top: 1em;
    }
    .el-rate{
        float: left;
        margin-bottom: 1em;
    }
    .el-rate ::v-deep .el-rate__text{
        font-size: 16px;
    }
    .num{
        float: left;
        font-size: 14px;
        margin: 0 0 1em 1em;
    }
    div.first-line,div.second-line, div.third-line, div.four-line, div.choose-size, div.size-header{
        overflow: auto;
    }
    h2.price,h3.pre-price{
        float: left;
    }
    h3.pre-price{
        margin-left: 1em;
        color: #909399;
        text-decoration: line-through;
    }
    .el-tag{
        float: left;
        margin-right: 1em;
    }
    h4.table{
        float: right;
        text-decoration: underline;
    }
    div.choose-size .el-col{
        padding: 0.5em;
    }
    div.choose-size .el-button{
        padding: 10px 20px;
    }
    p.stock{
        color: #909399;
        font-size: 14px;
    }
    p.delivery{
        font-size: 12px;
    }
    div.share{
        border-top-style: solid;
        border-bottom-style: solid;
        border-width: 1px;
        margin:30px;
        height: 2.5em;
        overflow: auto;
        float: left;
    }
    div.share p{
        display: inline-block;
        margin: 0;
        position: relative;
        bottom: 1em;
        padding-right: 0.5em;
    }
    .el-main{
        margin-right: 300px;
    }

    div.recommend ::v-deep button.el-carousel__arrow{
        width: 50px;
        height: 50px;
        top: 35%;
        font-size: 24px;
    }
</style>