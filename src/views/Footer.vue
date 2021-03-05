<template>
    <div class="footer">
        <el-row>
            <el-col :span="4" >
                <h3>产品</h3>
                <li><a href="#">鞋</a></li>
                <li><a href="#">衣服</a></li>
                <li><a href="#">配件</a></li>
                <li><a href="#">儿童</a></li>
                <li><a href="#">特价</a></li>

            </el-col>
            <el-col :span="4" >
                <h3>关于我们</h3>
                <li><a href="#">公司介绍</a></li>
                <li><a href="#">新闻动态</a></li>
                <li><a href="#">联系我们</a></li>
            </el-col>
            <el-col :span="4" >
                <h3>服务支持</h3>
                <li><a href="#">常见问题</a></li>
                <li><a href="#">服务网点</a></li>
                <li><a href="#">English</a></li>
                <li><a href="#">中文繁体</a></li>
                <li><a href="#">会员中心</a></li>
                <li><a href="#">退换货政策</a></li>
            </el-col>
            <el-col :span="4" >
                <h3>App下载</h3>
                <li><a href="#">Android下载</a></li>
                <li><a href="#">ios下载</a></li>
            </el-col>
            <el-col :span="8" >
                <h3>关注我们</h3>
                <li><a href="#">官方微博</a></li>
                <li><a href="#">官方微信二维码</a></li>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
.el-row{
    height: 400px;
    padding-left: 60px;
    text-align: left;
}
    li{
        list-style: none;
        padding-top: 5px;
    }
    a{
        text-decoration: none;
        color: black;
    }
    a:hover{
        color: dodgerblue;
    }
</style>