<template>
    <div class="feedback">
        <el-button type="info" @click="drawer = true">
            <li>在</li>
            <li>线</li>
            <li>客</li>
            <li>服</li>
        </el-button>

        <el-drawer
                class="drawer"
                title="在线客服"
                :visible.sync="drawer"
                >
            <div class="dialog">
                <i class="el-icon-s-custom"></i>
                <div class="bubble">
                    您好，请输入您想询问的问题，之后会回复（也许不会）！
                </div>
            </div>
            <el-input class="input-box"
                      placeholder="请输入内容"
                      prefix-icon="el-icon-search"
                      v-model="input"
                      clearable>
            </el-input>
        </el-drawer>

    </div>
</template>

<script>
    export default {
        name: "feedback",
        data(){
            return {
                drawer: false,
                input:''
            }
        }
    }
</script>

<style scoped>
    .el-button{
        position: fixed;
        z-index: 999;
        right: 0;
        top: 50%;
        list-style: none;
        width: 40px;
        height: 100px;
        /*background-color: #E9E9EA;
        color: black;*/
    }

    .el-button /deep/ span{
        line-height: 20px;
        position: relative;
        bottom: 5px;
        right: 5px;
    }

    .drawer{
        position: fixed;
        z-index: 9999;
        top: 20%;
        bottom: 20%;
        left: 30%;
    }

    .drawer /deep/ header{
        align-items: normal;
        padding-bottom: 13px;
        padding-top: 3px;
        padding-left: 50px;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: 0.2em;
        color: white;
        background-color: #909399;
        margin-bottom: 0;
        height: 10px;
    }

    .drawer /deep/ .el-drawer.rtl{
        border-radius: 5px;
    }
    .dialog{
        height: 370px;
        padding: 20px;
    }
    .el-icon-s-custom{
        float: left;
        font-size: 24px;
        position: relative;
        top: 6%;
    }
    div.bubble{
        display: inline-block;
        width: 200px;
        font-size: 14px;
        text-align: left;
        border-width: 1px;
        border-style: solid;
        padding: 8px;
        border-radius: 5px;
    }
    .el-icon-s-promotion{
        position: absolute;

    }
</style>