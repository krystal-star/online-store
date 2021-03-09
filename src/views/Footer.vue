<template>
    <div class="footer">
        <el-row>
            <el-col :span="4" >
                <p>产品</p>
                <el-divider class="one"></el-divider>
                <li><a href="#">鞋</a></li>
                <li><a href="#">衣服</a></li>
                <li><a href="#">配件</a></li>
                <li><a href="#">儿童</a></li>
                <li><a href="#">特价</a></li>

            </el-col>
            <el-col :span="4" >
                <p>关于我们</p>
                <el-divider class="two"></el-divider>
                <li><a href="#">公司介绍</a></li>
                <li><a href="#">新闻动态</a></li>
                <li><a href="#">联系我们</a></li>
            </el-col>
            <el-col :span="4" >
                <p>服务支持</p>
                <el-divider class="two"></el-divider>
                <li><a href="#">常见问题</a></li>
                <li><a href="#">服务网点</a></li>
                <li><a href="#">English</a></li>
                <li><a href="#">中文繁体</a></li>
                <li><a href="#">会员中心</a></li>
                <li><a href="#">退换货政策</a></li>
            </el-col>
            <el-col :span="4" >
                <p>App下载</p>
                <el-divider class="two"></el-divider>
                <li><a href="#">Android下载</a></li>
                <li><a href="#">ios下载</a></li>
            </el-col>
            <el-col :span="8" >
                <el-link :underline="false" href="#" class="media">
                    <el-image style="width: 60px; height:60px"
                              src="../static/icons/weibo-icon.png"></el-image>
                </el-link>

                <el-popover
                        placement="bottom"
                        title="关注 获取俊俊的第一手资料"
                        width="200"
                        trigger="hover"
                        >
                    <el-image style="width: 200px; height:200px;"
                              src="../static/icons/qr-code.png"></el-image>
                <el-image style="width: 54px; height:54px;top: 22px;"
                          src="../static/icons/wechat-icon.png"
                          slot="reference"></el-image>
                </el-popover>
            </el-col>
        </el-row>
        <p class="copyright">Copyright © 2021-2022 米哥英俊与小邓的工作室 版权所有 ICP备0000000号</p>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
.el-row{
    height: 300px;
    padding-left: 60px;
    text-align: center;
}
    li{
        list-style: none;
        padding-top: 10px;
    }
    a{
        text-decoration: none;
        color: #C0C4CC;
    }
    a:hover{
        color: #606266;
    }
    .footer{
        background-color: #303133;
        color: #C0C4CC;
        padding: 40px 40px 10px;
        font-size: 14px;
    }
.el-divider{
    margin: 10px;
    opacity: 0.5;
}
.el-divider.one{
    width: 30%;
    left: 30%;
}
.el-divider.two{
    width: 50%;
    left: 20%;
}
    .media{
        padding-right: 50px;
    }
</style>