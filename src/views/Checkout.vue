<template>
    <div class="checkout">
        <el-header style="height: 60px">
            <el-image style="width: 200px; height: 25px"
                      src="../static/icons/bestbuyer-logo.png"></el-image>

            <el-button class="right" @click="">
                {{username}}<i class="el-icon-user-solid"></i></el-button>

            <el-link :underline="false" id="shopping-bag" href="#/basket">
                <el-image style="width: 25px; height: 25px"
                          src="../static/icons/shopping-bag.png"></el-image></el-link>

            <el-link :underline="false" id="star" href="#">
                    <el-image style="width: 30px; height: 30px"
                              src="../static/icons/heart-off.png"></el-image>
            </el-link>
        </el-header>

        <el-container style="padding-left: 5%;padding-right: 5%">
            <!--结算页-->
            <el-main>
                <h2>结算页</h2>
                <div class="hint" style="height: 40px; background-color: #E9E9EA;padding-top: 1em;margin-bottom: 2em">
                    <span style="color: #F56C6C;font-size: 14px">为保护您的个人信息和财产安全，请在付款前确认配送信息。配送地址在订单提交后便无法更改。</span>
                </div>

                <el-card class="add-address">
                    <div slot="header" class="address-header">
                        <span>1. 配送</span>
                    </div>
                    <!--表单-->
                    <el-form :model="addressForm"  ref="addressForm" label-width="100px" class="demo-ruleForm" label-position="top">
                        <el-form-item>
                            <el-col :span="10">
                                <el-form-item label="姓氏" prop="lastName" required>
                                    <el-input v-model="addressForm.lastName" placeholder="输入姓氏"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10" style="margin-left: 4em">
                                <el-form-item label="名称" prop="firstName" required>
                                    <el-input v-model="addressForm.firstName" placeholder="输入名称"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-form-item>

                        <el-form-item>
                            <el-col :span="7">
                                <el-form-item label="省份" prop="province" required>
                                    <el-select v-model="addressForm.province" placeholder="请选择" @change="setCity">
                                        <el-option
                                                v-for="item in areaData.provinces"
                                                :key="item.key"
                                                :value="item.valueOf()">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>

                            <el-col :span="7">
                                <el-form-item label="城市" prop="city" required>
                                    <el-select v-model="addressForm.city" placeholder="请选择" :disabled="addressForm.province === ''" @change="setRegion">
                                        <el-option
                                                v-for="item in areaData.cities"
                                                :key="item.key"
                                                :value="item.valueOf()">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>

                            <el-col :span="7">
                                <el-form-item label="区/县" prop="city" required>
                                    <el-select v-model="addressForm.region" placeholder="请选择" :disabled="addressForm.city === ''">
                                        <el-option
                                                v-for="item in areaData.regions"
                                                :key="item.key"
                                                :value="item.valueOf()">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-form-item>

                        <el-form-item label="详细地址" prop="address" required>
                            <el-input v-model="addressForm.address" placeholder="请输入详细地址"></el-input>
                        </el-form-item>

                        <el-form-item label="电话号码" prop="tel" required>
                            <el-input v-model="addressForm.tel" placeholder="请输入电话号码"></el-input>
                        </el-form-item>

                        <el-form-item class="btns">
                            <el-link @click="">取消</el-link>
                            <el-button type="info" @click="" style="margin-left: 3em">立即创建</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-main>

            <el-aside>
                <h4>订单摘要</h4>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
    import data from 'china-area-data'
    export default {
        name: "Checkout",
        data(){
            return{
                username:'俊俊',
                addressForm:{
                    lastName:'',
                    firstName:'',
                    province:'',
                    provinceKey:'',
                    city:'',
                    cityKey:'',
                    region:'',
                    address:'',
                    tel:''
                },
                areaData:{
                    provinces:data['86'],
                    cities:{},
                    regions:{}
                }
            }
        },
        mounted() {
            console.log(data['86'])
        },
        methods:{
            setCity(val){
                for(var key in data['86']){
                    if(data['86'][key] === val){
                        this.areaData.cities = data[key];
                        this.addressForm.provinceKey = key;
                        this.addressForm.city = '';
                    }
                }
            },
            setRegion(val){
                for(var key in data[this.addressForm.provinceKey]){
                    if(data[this.addressForm.provinceKey][key] === val){
                        this.areaData.regions = data[key];
                        this.addressForm.cityKey = key;
                        this.addressForm.region = '';
                    }
                }
            },
        }
    }
</script>

<style scoped>
    .el-header{
        background-color: #E9E9EA;
    }
    .el-header .el-image{
        float: left;
        margin-top: 1.1em;
    }
    .el-header .el-link{
        float: right;
        margin-right: 2em;
    }
    .el-header .right{
        margin-top: 0.5em;
        float: right;
        font-size: 16px;
        color: black;
        background-color:#E9E9EA ;
        border-style: none;
    }
    #shopping-bag{
        margin-top: 0.1em;
        margin-right: 1em;
    }
    .add-address{
        text-align: left;
    }
    .el-card ::v-deep .el-card__header{
        background-color: #303133;
    }
    .el-card ::v-deep .el-card__body{
        padding: 2em;
    }
    .address-header span{
        font-size: 22px;
        font-weight: bold;
        color: white;
    }
    .btns{
        float: right;
    }
</style>