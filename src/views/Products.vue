<template>
    <div class="products">
        <Notification />
        <el-container>
        <el-header class="product-header">
            <div class="left">
            <h2>{{category}} 全部商品（{{num}}）</h2>
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
        filter
        </el-aside>

            <!--商品展示-->
        <el-main class="show-products">
            <el-row :gutter="25" v-for="row in Math.ceil(products.length/3)" class="row">
                <el-col :span="8" v-for="(item,index) in products">
                    <div class="product-content" v-if="parseInt(index/3)+1 === Number(row)">
                        <el-image class="image" :src="item.img"></el-image>
                        <div @mouseover="showMore(index)" @mouseleave="hiddenMore(index)" class="content">
                            <p class="name">{{item.name}}</p>
                            <p class="group-style">{{item.group}}{{item.style}}</p>
                            <p class="color">{{item.color}}</p>
                            <p class="cur-price">¥{{item.price}}</p>
                            <p class="pre-price" v-if="item.previousPrice !== null">¥{{item.previousPrice}}</p>

                            <div class="more">
                                <el-image class="more-images" v-for="subitem in item.detail"
                                      :src="subitem.img"></el-image>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-main>
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
                category:"男子",
                num: 15,
                products:[
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        img: "../static/sportswear-essentials-backpack-0.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                        detail:[
                            {img:"../static/sportswear-essentials-backpack-1.jpg"},
                            {img:"../static/sportswear-essentials-backpack-2.jpg"},
                        ]
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        img: "../static/sportswear-essentials-backpack-0.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                        detail:[
                            {img:"../static/sportswear-essentials-backpack-1.jpg"},
                            {img:"../static/sportswear-essentials-backpack-2.jpg"},
                        ]
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        img: "../static/sportswear-essentials-backpack-0.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                        detail:[
                            {img:"../static/sportswear-essentials-backpack-1.jpg"},
                            {img:"../static/sportswear-essentials-backpack-2.jpg"},
                        ]
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        img: "../static/sportswear-essentials-backpack-0.jpg",
                        price: 320,
                        previousPrice: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                        detail:[
                            {img:"../static/sportswear-essentials-backpack-1.jpg"},
                            {img:"../static/sportswear-essentials-backpack-2.jpg"},
                        ]
                    },
                    {
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        img: "../static/sportswear-essentials-backpack-0.jpg",
                        price: 320,
                        previousPrice: 400,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                        detail:[
                            {img:"../static/sportswear-essentials-backpack-1.jpg"},
                            {img:"../static/sportswear-essentials-backpack-2.jpg"},
                        ]
                    }
                ]
            }
        },
        mounted() {
            var filter = document.getElementsByClassName("hide-filter")[0];
            filter.setAttribute("is-hide","false");
        },
        methods:{
            hideFilter: function () {
                var filter = document.getElementsByClassName("hide-filter")[0];
                var text = filter.children[0];
                if(filter.getAttribute("is-hide") === "false"){
                    console.log("hide");
                    filter.setAttribute("is-hide","true");
                    text.innerHTML = "显示筛选条件";
                }else if(filter.getAttribute("is-hide") === "true"){
                    console.log("display");
                    filter.setAttribute("is-hide","false");
                    text.innerHTML = "隐藏筛选条件";
                }
            },
            handleCommand(command) {
                console.log('click on item ' + command);
            },
            showMore: function (index) {
                var item = document.getElementsByClassName("product-content")[index];
                var more = item.querySelectorAll("div.more")[0];
                more.style = "visibility:visible";
            },
            hiddenMore: function (index) {
                var item = document.getElementsByClassName("product-content")[index];
                var more = item.querySelectorAll("div.more")[0];
                more.style = "visibility:hidden";
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
    }
    div.left{
        width: 50%;
        float: left;
        text-align: left;
        padding-left: 3%;
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
    ul.el-popper{
        margin-top: -1.5em;
    }
    .el-dropdown-menu ::v-deep .el-dropdown-menu__item:hover{
        color: white;
        background-color: #C0C4CC;
    }

    .bottom{
        margin-top: 1%;
    }

    .show-products{
        padding: 5%;
    }

    .row{
        margin-top: -5em;
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
    p.cover{
        margin: 1.2em;
    }
</style>