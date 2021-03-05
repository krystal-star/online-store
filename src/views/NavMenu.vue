<template>
    <div class="nav-menu">
        <div class="nav-header">
            <el-link :underline="false" href="#" target="_blank">在线客服</el-link>
            <el-link :underline="false" href="#" target="_blank">登陆</el-link>
        </div>

        <el-menu
                mode="horizontal"
                @select="handleSelect"
                text-color="black"
                >
            <el-submenu index="1">
                <template slot="title">男子</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">女子</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">儿童</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">运动</template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
                <el-menu-item index="4-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">特价</template>
                <el-menu-item index="5-1">选项1</el-menu-item>
                <el-menu-item index="5-2">选项2</el-menu-item>
                <el-menu-item index="5-3">选项3</el-menu-item>
            </el-submenu>

            <el-input class="search-box"
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input"
                    clearable>
            </el-input>

            <i class="el-icon-shopping-bag-1" id="shopping-bag"></i>
            <i class="el-icon-star-off" id="star"></i>
        </el-menu>

    </div>
</template>

<script>
    export default {
        name: "NavMenu",
        data() {
            return {
                input: '',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-link{
        padding-left: 20px;
        padding-right: 20px;
        left: 500px;
        font-size: 12px;
    }
    .el-menu-item{
        padding-right: 30px;
        padding-left: 30px;
    }
    .el-menu{
        padding-left: 360px;
    }

.el-input{
    display: inline-block;
    width: 200px;
    bottom: 3px;
}
    i#shopping-bag,i#star{
        font-size: 28px;
        padding-left: 30px;
        padding-top: 15px;
        cursor: pointer;
    }
</style>