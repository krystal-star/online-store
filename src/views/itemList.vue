<template>
    <div class="products">
        <Notification />
        <el-container>
        <el-header class="product-header">
            <div class="left">
                <h2><span v-if="group!==''">{{group}}</span><span v-else>所有商品</span>
                    <span v-if="category!==''"> {{category}} </span>
                    <span v-if="style!==''"> {{style}}</span>
                    <span v-if="discount === true"> Sale</span>（{{num}}）</h2>
            </div>
            <div class="right">
                <div class="hide-filter" @click="hideFilter">
                    <p class="header">隐藏筛选条件</p>
                    <el-image style="width: 20px; height: 20px" class="icons"
                            src="../static/icons/filter.png"></el-image>
                </div>

                <div class="sorting">
                    <el-dropdown trigger="click" @command="handleCommand">
                        <span class="header">排序依据
                        <el-image style="width: 20px; height: 20px" class="icons"
                                  src="../static/icons/arrow-down.png"></el-image>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="newest">最新</el-dropdown-item>
                            <el-dropdown-item command="lowToHigh">价格由低到高</el-dropdown-item>
                            <el-dropdown-item command="highToLow">价格由高到低</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </el-header>
        </el-container>

        <el-container class="bottom">
            <!--筛选条-->
            <el-aside class="filter">
            <el-scrollbar
                    wrapStyle="color:'#fff';fontSize:'16px';"
                    viewStyle="color:'#fff';fontSize:'16px';"
                    :native="false"
            >
        <div class="filter-header">
            <h3 class="topic">筛选条件</h3>
            <p class="check-all" @click="clearFilter">重置筛选</p>
        </div>

            <el-collapse v-model="activeNames">
                <el-collapse-item title="性别" name="1">
                    <el-checkbox-group v-model="checkList_group" @change="handleChange">
                        <el-checkbox label="男子" name="men"></el-checkbox>
                        <el-checkbox label="女子" name="women"></el-checkbox>
                        <el-checkbox label="儿童" name="kids"></el-checkbox>
                    </el-checkbox-group>
                </el-collapse-item>
                <el-collapse-item title="产品分类" name="2">
                    <el-checkbox-group v-model="checkList_category" @change="handleChange">
                        <el-checkbox label="鞋类" name="shoes"></el-checkbox>
                        <el-checkbox label="服装" name="clothing"></el-checkbox>
                        <el-checkbox label="配件" name="accessories"></el-checkbox>
                    </el-checkbox-group>
                </el-collapse-item>
                <el-collapse-item title="品牌" name="3">
                    <el-checkbox-group v-model="checkList_brand" @change="handleChange">
                        <el-checkbox label="Adidas" name="Adidas"></el-checkbox>
                        <el-checkbox label="Nike" name="Nike"></el-checkbox>
                        <el-checkbox label="李宁" name="Lining"></el-checkbox>
                        <el-checkbox label="安踏" name="Anta"></el-checkbox>
                        <el-checkbox label="匡威" name="Converse"></el-checkbox>
                    </el-checkbox-group>
                </el-collapse-item>
                <el-collapse-item title="颜色" name="4">
                    <el-button circle style="background-color: black" class="colors"></el-button>
                    <el-button circle style="background-color: white" class="colors"></el-button>
                    <el-button circle style="background-color: gray" class="colors"></el-button>
                    <p></p>
                    <el-button circle style="background-color: yellow" class="colors"></el-button>
                    <el-button circle style="background-color: green" class="colors"></el-button>
                    <el-button circle style="background-color: blue" class="colors"></el-button>
                    <p></p>
                    <el-button circle style="background-color: red" class="colors"></el-button>
                    <el-button circle style="background-color: pink" class="colors"></el-button>
                    <el-button circle style="background: linear-gradient(to right, red, orange, yellow, green, yellow, orange, red, orange, yellow, green, yellow, orange, red);
                -webkit-text-fill-color: transparent; " class="colors"></el-button>
                </el-collapse-item>
            </el-collapse>
            </el-scrollbar>
        </el-aside>

            <!--商品展示-->
            <el-main class="show-products">
            <el-row :gutter="25" v-for="row in Math.ceil(items.length/3)" class="row">
                <el-col :span="8" v-for="(item,index) in items">
                    <div class="product-content" v-if="parseInt(index/3)+1 === Number(row)" @click="newPage(item.id)">
                        <el-image class="image" :src="item.poster_img"></el-image>
                        <div @mouseover="showMore(index,item.poster_img)" @mouseleave="hiddenMore(index)" class="content">
                            <p class="name">{{item.name}}</p>
                            <p class="group-style">{{item.group}}{{item.style}}</p>
                            <p class="color">{{item.color}}</p>
                            <p class="cur-price">¥{{item.price}}</p>
                            <p class="pre-price" v-if="item.previousPrice !== null">¥{{item.previousPrice}}</p>

                            <div class="more">
                                <el-image class="more-images" :src="item.detail_img1"></el-image>
                                <el-image class="more-images" :src="item.detail_img2"></el-image>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-main>

            <el-button type="info" circle class="to-top" @click="toTop">
                <i class="el-icon-arrow-up"></i>
                <span class="top">顶部</span>
            </el-button>
        </el-container>
    </div>
</template>

<script>
    import Notification from "./Notification";
    export default {
        name: "Product",
        components: {Notification},
        data(){
            return{
                group: this.$store.state.groups, //'男子,女子'
                category: this.$store.state.categories,
                style:this.$store.state.styles,
                discount: this.$store.state.discount,
                num: 15,
                items:[
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: 400,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        poster_img: "../static/sportswear-essentials-backpack-0.jpg",
                        detail_img1:"../static/sportswear-essentials-backpack-1.jpg",
                        detail_img2:"../static/sportswear-essentials-backpack-2.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                    },
                ],
                temp_src: '',
                activeNames: ['1','2','3','4'],
                checkList_group: this.$store.state.groups.split(","),
                checkList_category:this.$store.state.categories.split(","),
                checkList_brand: this.$store.state.brands.split(","),
                checkList_color:[]
            }
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181'+this.$store.state.url).then(function (resp) {
                _this.items = resp.data.data.items
                _this.num = resp.data.data.items_number
            })
        },
        mounted() {
            var btn_filter = document.getElementsByClassName("hide-filter")[0];
            btn_filter.setAttribute("is-hide","false");

            window.addEventListener('scroll', this.handleScroll, true);
        },
        methods:{
            hideFilter: function () {
                var btn_filter = document.getElementsByClassName("hide-filter")[0];
                var filter = document.getElementsByClassName("filter")[0];
                var content = document.getElementsByClassName("show-products")[0];
                var text = btn_filter.children[0];
                if(btn_filter.getAttribute("is-hide") === "false"){
                    console.log("hide");
                    btn_filter.setAttribute("is-hide","true");
                    text.innerHTML = "显示筛选条件";
                    filter.style = "display:none";
                    content.style = "padding-left:5%"
                }else if(btn_filter.getAttribute("is-hide") === "true"){
                    console.log("display");
                    btn_filter.setAttribute("is-hide","false");
                    text.innerHTML = "隐藏筛选条件";
                    filter.style = "display: block";
                    content.style = "padding-left:3%"
                }
            },
            handleCommand(command) {
                console.log('click on item ' + command);
            },
            showMore: function (index,src) {
                var item = document.getElementsByClassName("product-content")[index];
                var more = item.querySelectorAll("div.more")[0];
                more.style = "visibility:visible";

                var img = item.querySelectorAll("div.image")[0];
                this.temp_src = src;
                more.onmouseover = function (event) {
                    var target = event.target;
                    if(target.className.toLowerCase() === "el-image__inner"){
                        img.children[0].src = target.src;
                    }
                }
            },
            hiddenMore: function (index) {
                var item = document.getElementsByClassName("product-content")[index];
                var more = item.querySelectorAll("div.more")[0];
                more.style = "visibility:hidden";
                var img = item.querySelectorAll("div.image")[0];
                img.children[0].src = this.temp_src;
            },
            handleScroll: function () {
                var distanceToTop = window.pageYOffset;
                var filter = document.getElementsByClassName("filter")[0];
                var content = document.getElementsByClassName("show-products")[0];
                var btn_filter = document.getElementsByClassName("hide-filter")[0];
                if(btn_filter.getAttribute("is-hide") === "false"){
                    if (distanceToTop >= 230 && distanceToTop <= 4661){
                        filter.style = "position:fixed; bottom:15%";
                        content.style = "padding-left:23%";
                    }else if(distanceToTop > 4661){
                        filter.style = "position:relative; top: 280em;";
                        content.style = "padding-left:3%";
                    }else{
                        filter.style = "position:relative;";
                        content.style = "padding-left:3%";
                    }
                }

                var btn_top = document.getElementsByClassName("to-top")[0];
                if(distanceToTop >= 750){
                    btn_top.style = "display:block";
                }else{
                    btn_top.style = "display:none";
                }
            },
            toTop: function () {
                document.documentElement.scrollTop = 0;
            },
            handleChange: function () {
                var names = {groups:[], categories: [], brands:[], colors:[]};
                var val = {groups:[], categories: [], brands:[], colors:[]};
                var checkbox_group = document.getElementsByClassName("el-checkbox-group");
                for(var i=0; i<checkbox_group.length ;i++){
                    var checkboxs = checkbox_group[i].childNodes;
                    for(var j=0; j<checkboxs.length;j++){
                        if(checkboxs[j].className.indexOf("is-checked") !== -1){
                            if(i === 0){
                                names.groups.push(checkboxs[j].querySelectorAll("input")[0].name);
                                val.groups.push(checkboxs[j].querySelectorAll("input")[0].value);
                            }else if(i === 1){
                                names.categories.push(checkboxs[j].querySelectorAll("input")[0].name);
                                val.categories.push(checkboxs[j].querySelectorAll("input")[0].value);
                            }else if(i === 2){
                                names.brands.push(checkboxs[j].querySelectorAll("input")[0].name);
                                val.brands.push(checkboxs[j].querySelectorAll("input")[0].value);
                            }
                        }
                    }
                }
                var url = [];
                console.log(val);
                if(names.groups.length !== 0){
                    url.push("groups=" + names.groups.join());
                    this.$store.state.groups = val.groups.join();
                }
                if(names.categories.length !== 0){
                    url.push("categories=" + names.categories.join());
                    this.$store.state.categories = val.categories.join();
                }
                if(names.brands.length !== 0){
                    url.push("brands=" + names.brands.join());
                    this.$store.state.brands = val.brands.join();
                }

                var path = "/itemList?"+url.join('&');
                this.$store.state.url = path;
                this.$router.push({ path: '/blank', query: { path: path } });
            },
            clearFilter: function () {
                this.$store.state.groups = '';
                this.$store.state.categories = '';
                this.$store.state.styles = '';
                this.$store.state.brands = '';
                this.$store.state.discount = false;
                this.$store.state.url = '/itemList';
                this.$router.push({ path: '/blank', query: { path: '/itemList' } });
            },
            newPage: function (id) {
                this.$store.state.id = id;
                this.$router.push('/itemInfo');
            }
        }
    }
</script>

<style scoped>
    .product-header{
        width: 100%;
        margin-bottom: 0.5em;
        background-color: white;
        position: relative;
        z-index: 1;
    }
    div.left{
        width: 50%;
        float: left;
        text-align: left;
        padding-left: 1.5%;
    }

    div.right{
        width: 40%;
        float: right;
        text-align: right;
    }

    .header{
        display: inline-block;
        margin-top: 1.5em;

        color: #909399;
        font-size: 16px;
    }
    div.hide-filter, div.sorting{
        display: inline-block;
        margin-right: 10%;
    }
    div.hide-filter:hover, div.sorting:hover{
        cursor: pointer;
    }
    .icons{
        top: 0.25em;
        padding-left: 0.5em;
    }
    .el-dropdown-menu ::v-deep .el-dropdown-menu__item:hover{
        color: white;
        background-color: #C0C4CC;
    }

    .bottom{
        margin-top: 1%;
    }

    .show-products{
        padding-left:3%;
    }

    .product-content{
        text-align: left;
    }

    p.name, p.pre-price, p.cur-price{
        font-weight: bold;
        font-size: 18px;
        display: inline-block;
        margin-bottom: 0;
        margin-top: 0.5em;
    }
    p.group-style,p.color{
        color: #909399;
        margin-bottom: 0;
        margin-top: 0;
    }
    .image:hover, .more-images:hover{
        cursor: pointer;
    }
    p.pre-price{
        color: #909399;
        text-decoration: line-through;
        font-size: 15px;
        padding-left: 5px;
    }
    p.pre-price, p.cur-price{
        float: left;
        font-size: 16px;
        margin-top: 1em;
    }

    div.more{
        background-color: white;
        position: relative;
        bottom: 6.6em;
        float: left;
        visibility: hidden;
    }

    .more-images{
        width: 20%;
        height: 20%;
        margin-right: 1em;
    }

    .filter{
        padding-left: 2.5em;
        padding-right: 2.5em;
        text-align: left;
        height: 700px;
        /*position: fixed;*/
        position: relative;
        width: 20%;
    }

    .filter-header{
        border-bottom: 1px solid #EBEEF5;
    }
    p.check-all{
        margin-left: 3em;
        bottom: 0.75em;
        display: inline-block;
    }
    p.check-all:hover{
        cursor: pointer;
        opacity: 0.5;
    }
    h3.topic{
        display: inline-block;
    }
    .el-checkbox{
        display: block;
    }

    .el-collapse ::v-deep .el-collapse-item__header, .el-checkbox, .el-checkbox ::v-deep .el-checkbox__label{
        font-size: 16px;
    }
    .el-checkbox ::v-deep .el-checkbox__input.is-checked+.el-checkbox__label{
        color:#303133;
        opacity: 0.5;
    }
    .el-checkbox ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner{
        background-color: #303133;
        border-color: #303133;
        opacity: 0.5;
    }
    .to-top{
        position: fixed;
        z-index: 999;
        right: 1%;
        top: 85%;
        display: none;
    }
    .top{
        display: block;
        margin: 0.3em;
    }
    .colors{
        border-radius: 50%;
        padding: 14px;
        margin: 0 5px;
    }
</style>