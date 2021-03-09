<template>
    <div class="nav-menu">
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
                    @mouseleave.native="toInvisibile(index1)">
                {{item.name}}
                <div class="menu-dropdown">
                    <el-row>
                        <el-col :span="6" v-for="subitem in item.categories">
                            <h4 class="cate">{{subitem.name}}</h4>
                                <li v-for="style in subitem.styles">{{style}}</li>
                        </el-col>
                    </el-row>
                </div>
            </el-menu-item>

            <el-input class="search-box"
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input"
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
                        categories: [
                            {
                                name: "鞋类",
                                styles: ["运动鞋","篮球鞋","拖鞋"]
                            },
                            {
                                name: "服装",
                                styles: ["卫衣","外套","运动裤"]
                            },
                            {
                                name: "配件",
                                styles: ["包","袜子","帽子"]
                            }
                        ]
                    },
                    {
                        name: "女子",
                        categories: [
                            {
                                name: "鞋类",
                                styles: ["运动鞋","篮球鞋","拖鞋"]
                            },
                            {
                                name: "服装",
                                styles: ["卫衣","外套","运动裤"]
                            },
                            {
                                name: "配件",
                                styles: ["包","袜子","帽子"]
                            }
                        ]
                    },
                    {
                        name: "儿童",
                        categories: [
                            {
                                name: "鞋类",
                                styles: ["运动鞋","篮球鞋","拖鞋"]
                            },
                            {
                                name: "服装",
                                styles: ["卫衣","外套","运动裤"]
                            },
                            {
                                name: "配件",
                                styles: ["包","袜子","帽子"]
                            }
                        ]
                    },
                    {
                        name: "分类",
                        categories: [
                            {
                                name: "品牌",
                                styles: ["Nike","Adidas"]
                            }
                        ]
                    },
                    {
                        name: "热卖",
                        categories: [
                            {
                                name: "男子热卖",
                                styles: ["鞋类","服装","配件"]
                            },
                            {
                                name: "女子热卖",
                                styles: ["鞋类","服装","配件"]
                            },
                            {
                                name: "儿童热卖",
                                styles: ["鞋类","服装","配件"]
                            }
                        ]
                    }
                ],
                input: '',
            };
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll, true);
            // 监听（绑定）滚轮 滚动事件
        },
        methods: {
            toVisible: function(index){
                let node = document.getElementsByClassName("menu-dropdown")[index].parentElement;
                node.style = "color: #909399";
            },
            toInvisibile: function(index){
                let node = document.getElementsByClassName("menu-dropdown")[index].parentElement;
                node.style = "color:black";
            },
            toHomePage(){
                window.location.href = "/"
            }
        }
    }
</script>

<style scoped>
    div.nav-menu {
        position: fixed;
        _position: absolute;
        z-index: 9999;
        padding-right: 28px;
    }
    div.nav-header{
        background-color: #E9E9EA;
        height: 35px;
    }
    .icons{
        padding-left: 10px;
        padding-right: 10px;
        right: 450px;
        bottom: 10px;
    }
    .el-link.right{
        padding-left: 20px;
        padding-right: 20px;
        left: 450px;
        font-size: 14px;
        color: black;
        bottom: 12px;
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
        right: 38%;
    }

.el-input{
    display: inline-block;
    width: 200px;
    top: 10px;
    right: 10%;
}
    #shopping-bag{
        cursor: pointer;
        right: 20px;
        top: 11px;
    }
    #star{
        cursor: pointer;
        left: 130px;
        bottom: 25px;
    }
    #shopping-bag:hover,#star:hover, #logo:hover, .icons:hover{
        opacity: 0.5;
    }
    .menu-dropdown{
        width: 1332px;
        margin: auto;
        padding-bottom: 40px;
        overflow: auto;
        max-height: 100vh;
        visibility: hidden;
        position: absolute;
        z-index: 999;
        background-color: white;
        left: -426px;
    }
    .el-menu-item{
        position: relative;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: 0.1em;
    }
    .el-menu-item:hover .menu-dropdown{
        visibility: visible;
    }
    .el-row{
        padding-left: 60px;
        text-align: left;
        color: black;
    }
    li{
        list-style: none;
        font-weight: normal;
        color: #606266;
        line-height: 25px;
    }
    li:hover{
        color: black;
    }
    h4.cate{
        margin-bottom: 1px;
    }
</style>