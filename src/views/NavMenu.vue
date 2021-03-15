<template>
    <div class="nav-menu">
        <div class="search">
            <el-image style="width: 200px; height: 25px;top: 45px; right: 15%;"
                      src="../static/icons/bestbuyer-logo.png"></el-image>
            <el-input class="search-box2"
                      placeholder="请输入内容"
                      prefix-icon="el-icon-search"
                      v-model="input"
                      clearable>
            </el-input>
            <i class="el-icon-circle-close" @click="closeSearchBox"></i>
            <div class="hint">
                <h4>热门搜索词</h4>
                <p>Air Jordan</p>
                <p>Ultraboost</p>
                <p>Air Force 1</p>
            </div>
        </div>
        <div class="nav-header">
            <el-link :underline="false" class="icons" href="https://www.nike.com/cn/">
                <el-image style="width: 50px; height: 50px"
                          src="../static/icons/nike-logo-black.png"></el-image></el-link>
            <el-link :underline="false" class="icons" href="https://www.adidas.com.cn/">
                <el-image style="width: 40px; height: 40px"
                          src="../static/icons/adidas-logo-black.png"></el-image></el-link>
            <el-link :underline="false" class="right" href="#" target="_blank">
                帮助<i class="el-icon-question"></i></el-link>
            <el-link :underline="false" class="right" href="#" target="_blank">
                加入我们<i class="el-icon-phone"></i></el-link>
            <el-link :underline="false" class="right" href="#" target="_blank">
                登陆<i class="el-icon-user-solid"></i></el-link>
        </div>


        <el-menu mode="horizontal" text-color="black" style="height: 60px;" >

            <el-menu-item id="logo" @click="toHomePage">
                    <el-image style="width: 200px; height: 25px"
                              src="../static/icons/bestbuyer-logo.png"></el-image>
            </el-menu-item>

            <el-menu-item
                    v-for="(item,index1) in classification"
                    :index="index1.toString()"
                    @mouseover.native="toVisible(index1)"
                    @mouseleave.native="toInvisibile(index1)"
                    >
                {{item.name}}
            </el-menu-item>
                <div class="menu-dropdown">
                    <el-row>
                        <el-col :span="6" v-for="subitem in getItem()">
                            <h4 class="cate" @click="newPage(subitem.url)">{{subitem.name}}</h4>
                            <li v-for="style in subitem.styles">{{style.name}}</li>
                        </el-col>
                    </el-row>
                </div>

            <el-input class="search-box1"
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                      @focus="openSearchBox"
                    clearable>
            </el-input>

            <el-link :underline="false" id="shopping-bag" href="#">
                <el-image style="width: 25px; height: 25px"
                          src="../static/icons/shopping-bag.png"></el-image></el-link>
            <el-link :underline="false" id="star" href="#">
                <el-image style="width: 30px; height: 30px"
                          src="../static/icons/heart-off.png"></el-image></el-link>
        </el-menu>

    </div>
</template>

<script>
    export default {
        name: "NavMenu",
        data() {
            return {
                classification:[
                    {
                        name: "男子",
                        url: "/findByCategory/men",
                        categories: [
                            {
                                name: "鞋类",
                                url: "shoes",
                                styles: [
                                    {name:"跑鞋", url:"running_shoes"},
                                    {name:"篮球鞋", url:"basketball_shoes"},
                                    {name:"足球鞋", url: "football_shoes"},
                                    {name:"休闲鞋", url: "lifestyle_shoes"},
                                    {name:"拖鞋", url: "slippers"}
                                ]
                            },
                            {
                                name: "服装",
                                url: "clothing",
                                styles: [
                                    {name:"卫衣", url:"sweatshirt"},
                                    {name:"外套", url:"jacket"},
                                    {name:"运动服", url: "sportswear"},
                                    {name:"T恤", url: "T-shirt"},
                                    {name:"休闲裤", url: "trouser"},
                                    {name:"短裤", url: "shorts"}
                                ]
                            },
                            {
                                name: "配件",
                                url:"accessories",
                                styles: [
                                    {name:"包", url:"bag"},
                                    {name:"帽子", url:"hat"},
                                    {name:"袜子", url: "socks"},
                                    {name:"其他", url: "others"},
                                ]
                            }
                        ]
                    },
                    {
                        name: "女子",
                        url: "/findByCategory/women",
                        categories: [
                            {
                                name: "鞋类",
                                url: "shoes",
                                styles: [
                                    {name:"跑鞋", url:"running_shoes"},
                                    {name:"篮球鞋", url:"basketball_shoes"},
                                    {name:"足球鞋", url: "football_shoes"},
                                    {name:"休闲鞋", url: "lifestyle_shoes"},
                                    {name:"拖鞋", url: "slippers"}
                                ]
                            },
                            {
                                name: "服装",
                                url: "clothing",
                                styles: [
                                    {name:"卫衣", url:"sweatshirt"},
                                    {name:"外套", url:"jacket"},
                                    {name:"运动服", url: "sportswear"},
                                    {name:"T恤", url: "T-shirt"},
                                    {name:"休闲裤", url: "trouser"},
                                    {name:"短裤", url: "shorts"}
                                ]
                            },
                            {
                                name: "配件",
                                url:"accessories",
                                styles: [
                                    {name:"包", url:"bag"},
                                    {name:"帽子", url:"hat"},
                                    {name:"袜子", url: "socks"},
                                    {name:"其他", url: "others"},
                                ]
                            }
                        ]
                    },
                    {
                        name: "儿童",
                        url:"/findByCategory/kids",
                        categories: [
                            {
                                name: "鞋类",
                                url: "shoes",
                                styles: [
                                    {name:"跑鞋", url:"running_shoes"},
                                    {name:"篮球鞋", url:"basketball_shoes"},
                                    {name:"足球鞋", url: "football_shoes"},
                                    {name:"休闲鞋", url: "lifestyle_shoes"},
                                    {name:"拖鞋", url: "slippers"}
                                ]
                            },
                            {
                                name: "服装",
                                url: "clothing",
                                styles: [
                                    {name:"卫衣", url:"sweatshirt"},
                                    {name:"外套", url:"jacket"},
                                    {name:"运动服", url: "sportswear"},
                                    {name:"T恤", url: "T-shirt"},
                                    {name:"休闲裤", url: "trouser"},
                                    {name:"短裤", url: "shorts"}
                                ]
                            },
                            {
                                name: "配件",
                                url:"accessories",
                                styles: [
                                    {name:"包", url:"bag"},
                                    {name:"帽子", url:"hat"},
                                    {name:"袜子", url: "socks"},
                                    {name:"其他", url: "others"},
                                ]
                            }
                        ]
                    },
                    {
                        url: "/findByBrand",
                        name: "分类",
                        categories: [
                            {
                                name: "品牌",
                                styles: [
                                    {name:"Nike",url:"Nike"},
                                    {name:"Adidas",url:"Nike"},
                                    {name:"李宁",url: "Lining"},
                                    {name:"安踏",url: "Anta"},
                                    {name:"匡威",url: "Converse"}
                                    ]
                            }
                        ]
                    },
                    {
                        name: "折扣",
                        url: "/findDiscountByCategory",
                        categories: [
                            {
                                name: "男子",
                                url:"men",
                                styles: [
                                    {name: "鞋类", url: "shoes"},
                                    {name: "服装", url: "clothing"},
                                    {name: "配件", url:"accessories"}
                                ]
                            },
                            {
                                name: "女子",
                                url:"women",
                                styles: [
                                    {name: "鞋类", url: "shoes"},
                                    {name: "服装", url: "clothing"},
                                    {name: "配件", url:"accessories"}
                                ]
                            },
                            {
                                name: "儿童",
                                url:"kids",
                                styles: [
                                    {name: "鞋类", url: "shoes"},
                                    {name: "服装", url: "clothing"},
                                    {name: "配件", url:"accessories"}
                                ]
                            }
                        ]
                    }
                ],
                input: '',
                temp: '',
            }
        },
        mounted () {
        },
        methods: {
            toVisible: function(index){
                let node = document.getElementsByClassName("el-menu-item")[index+1];
                node.style = "color: #909399";
                let menu = document.getElementsByClassName("menu-dropdown")[0];
                menu.style = "visibility: visible";
                this.temp = index;
            },
            toInvisibile: function(index){
                let node = document.getElementsByClassName("el-menu-item")[index+1];
                node.style = "color:black";
                let menu = document.getElementsByClassName("menu-dropdown")[0];
                menu.style = "visibility: hidden";
                this.temp = '';
            },
            toHomePage(){
                window.location.href = "/dist"
            },
            closeSearchBox: function () {
                let node = document.getElementsByClassName("search")[0];
                node.style = "visibility: hidden";
            },
            openSearchBox: function () {
                let node = document.getElementsByClassName("search")[0];
                node.style = "visibility: visible";
            },
            getItem: function () {
                return this.classification[Number(this.temp)].categories;
            },
            newPage: function (url) {
                console.log(url);
            }
        }
    }
</script>

<style scoped>
    div.search{
        position: absolute;
        background: white;
        z-index: 99;
        left: -20px;
        width: 100%;
        height: 300px;
        visibility: hidden;
    }
    div.search i{
        top: 48px;
        position: relative;
        font-size: 35px;
        left: 15%;
    }
    div.search-box2{
        width: 600px;
        top: 40px;
        right: 5%;
    }
    div.hint{
        width: 200px;
        position: relative;
        left: 30%;
        text-align: left;
        top: 20%;
    }
    div.hint h4{
        color: #909399;
    }
    div.hint p{
        font-weight: bold;
        font-size: 20px;
        line-height: 20px;
    }
    div.hint p:hover, div.search i:hover, h4.cate:hover{
        cursor: pointer;
        color: #909399;
    }
    div.nav-menu {
        width: 100%;
    }
    div.nav-header{
        background-color: #E9E9EA;
        height: 35px;
    }
    .icons{
        padding-left: 10px;
        padding-right: 10px;
        right: 33%;
        bottom: 25%;
    }
    .el-link.right{
        padding-left: 20px;
        padding-right: 20px;
        left: 35%;
        font-size: 14px;
        color: black;
        bottom: 30%;
    }
    .el-link.right:hover{
        color: #909399;
    }
    .el-menu-item{
        padding-right: 30px;
        padding-left: 30px;
        right: 20%;
    }
    .el-menu{
        padding-left: 360px;
        text-align: left;
    }

    #logo{
        right: 35%;
    }

.el-input{
    display: inline-block;
    width: 200px;
    top: 10px;
    right: 10%;
}
    #shopping-bag{
        cursor: pointer;
        right: 60px;
        top: 11px;
    }
    #star{
        cursor: pointer;
        right: 30px;
        top: 10px;
    }
    #shopping-bag:hover,#star:hover, #logo:hover, .icons:hover{
        opacity: 0.5;
    }
    .menu-dropdown{
        max-height: 100vh;
        visibility: hidden;
        position: absolute;
        z-index: 999;
        background-color: white;
        width: 100%;
        left: 0;
        top: 60px;
        padding-bottom: 40px;
        text-align: center;
    }
    .menu-dropdown .el-row{
        padding-left: 0;
        left: 15%;
    }
    .menu-dropdown .el-col{
        width: 25%;
        text-align: center;
        line-height: 50px;
    }
    .el-menu-item{
        position: relative;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: 0.1em;
    }
    .el-row{
        padding-left: 60px;
        text-align: left;
        color: black;
    }
    li{
        list-style: none;
        font-weight: bold;
        color: #606266;
        line-height: 25px;
        font-size: 14px;
    }
    li:hover{
        color: black;
        cursor: pointer;
    }
    h4.cate{
        margin-bottom: 1px;
    }
</style>