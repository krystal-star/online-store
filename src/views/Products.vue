<template>
    <div class="products">
        <Notification />

        <div class="product-header">
            <div class="left">
            <h2>男子 全部商品（15）</h2>
            </div>
            <div class="right">
                <p class="header">隐藏筛选条件</p>
                <p class="header">排序依据</p>
            </div>
        </div>

        <el-aside class="filter">
        filter
        </el-aside>

        <el-main class="show-products">
            图片
        </el-main>
    </div>
</template>

<script>
    import Notification from "./Notification";
    export default {
        name: "Product",
        components: {Notification}
    }
</script>

<style scoped>
    div.left{
        width: 50%;
        float: left;
        text-align: left;
        padding-left: 3%;
        margin-bottom: 0.5em;
        margin-top: 0.3em;
    }

    div.right{
        width: 40%;
        float: right;
    }

    p.header{
        display: inline-block;
        padding-right: 5%;
        margin-top: 2em;
        margin-bottom: 2em;
    }
</style>