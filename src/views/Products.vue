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
            <el-row :gutter="20" v-for="row in num/3" class="row">
                <el-col :span="6" v-for="col in 3">
                    <div class="product-content">
                        product
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
                num: 15
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
            }
        }
    }
</script>

<style scoped>
    .product-header{
        width: 100%;
        margin-bottom: 0.5em;
        background-color: white;
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
        margin-top: 5.5%;
    }

    .show-products{
        padding: 5%;
    }

    .product-content{
        border-bottom-style: solid;
    }
</style>