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

        <el-container style="padding: 0 3%">
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
                    <!--表单(地址不存在）-->
                    <el-form
                            v-if="showForm"
                            :model="addressForm"
                            :rules="rules"
                             ref="addressForm"
                             label-width="100px"
                             class="demo-ruleForm"
                             label-position="top">
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
                            <el-link @click="handleCancel">取消</el-link>
                            <el-button type="info" @click="onSubmit('addressForm')" style="margin-left: 3em">保存并继续</el-button>
                        </el-form-item>
                    </el-form>

                    <!--地址存在-->
                    <div v-else>
                    <el-link type="info" class="add-new-btn" @click="showForm = true">+新增地址</el-link><br>
                    <div class="show-address" v-for="(item,index) in existedAddress" @click="choseAddress(index)">
                        <div class="flex-box">
                            <div class="icon">
                                <el-icon class="el-icon-location" style="font-size: 24px"/>
                            </div>
                            <div class="lines">
                                <p>{{item.name}}</p>
                                <p>{{item.tel}}</p>
                                <p>{{item.address1}}</p>
                                <p>{{item.address2}}</p>
                            </div>
                        </div>
                        <el-link type="info" class="remove-btn" @click="removeAddress(item.payment_id)">删除</el-link>
                        <el-link type="info" class="remove-btn" @click="editAddress(item.payment_id)">编辑</el-link>
                    </div>

                    <div class="delivery">
                        <h2 class="text">选择配送速度</h2>

                        <el-select v-model="deliveryVal" placeholder="请选择" style="width: 100%">
                            <el-option
                                    v-for="item in deliveryOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                <div style="float: left">
                                    <el-icon class="el-icon-location" style="font-size: 16px;margin: 0 1em"/>
                                    <span>{{item.label}}（预计在{{item.time}}前送达）</span>
                                </div>
                                    <span style="float:right;">{{ item.value }}</span>
                            </el-option>
                        </el-select>

                        <p style="color: #606266">下午04时 后提交的订单将于下一个工作日开始处理。</p>
                        <div class="btns" style="margin-bottom: 2em">
                            <el-link @click="$router.go(-1)">取消</el-link>
                            <el-button type="info" @click="goOnCheckout" style="margin-left: 3em">继续付款</el-button>
                        </div>
                    </div>
                    </div>
                </el-card>

                <el-card class="checkout-box">
                    <div slot="header" class="address-header">
                        <span>2. 付款</span>
                    </div>
                    <div v-if="addressComplete">
                    <el-radio-group v-model="radioPay" style="display: inline-flex;padding: 2%;">
                            <el-radio :label="1">
                                <el-image :src="alipayIcon" fit="scale-down" style="width: 50%"></el-image>
                            </el-radio>
                            <el-radio :label="2">
                                <el-image :src="wechatIcon" fit="scale-down" style="width: 50%"></el-image>
                            </el-radio>
                    </el-radio-group>
                    <el-button type="info"
                               @click="confirmOrder"
                               class="complete-btn">下单</el-button>
                    </div>
                </el-card>
            </el-main>

            <el-aside style="margin-top: 8%;margin-left: 2%;width: 350px;">
                <el-card class="order-abstract">
                    <div slot="header" class="abstract-header">
                        <h3>订单摘要</h3>
                        <el-button style="float: right;padding: 4px 0" type="text" @click="$router.push('/basket')">编辑</el-button>
                    </div>
                    <div class="show-basket">
                        <div style="height: 575px;overflow: scroll">
                        <div class="items" v-for="(item,index) in basket">
                            <el-image
                                    style="width: 100px; height: 100px; margin-left: 2%; margin-right: 5%"
                                    :src="item.img"
                                    fit="cover"></el-image>

                            <div class="detail">
                                <p class="name">{{item.name}}</p>
                                <p class="style">{{item.brand}} {{item.group}}{{item.style}}</p>
                                <p class="style">{{item.color}}</p>
                                <p class="style">尺码（{{item.size}}）<span> 数量 {{item.num}}</span></p>
                                <p class="price">¥{{item.current_price}}</p>

                            </div>
                        </div>
                        </div>
                        <el-divider></el-divider>

                        <div class="total-price" style="font-weight: bold">
                            <span >商品金额</span><span style="float: right">{{total_price}}元</span><br/>
                            <span>运费</span>
                            <span style="float: right" v-if="deliveryVal === '免费'">0元</span>
                            <span style="float: right" v-else>30元</span><br/>
                            <span>商品总价</span>
                            <span style="float: right" v-if="deliveryVal === '免费'">{{total_price}}元</span>
                            <span style="float: right" v-else>{{total_price +30 }}元</span><br/>
                        </div>
                    </div>
                </el-card>
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
                username:'',
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
                },
                radioPay:1,
                alipayIcon:'../static/icons/alipay-pay.png',
                wechatIcon:'../static/icons/wechat-pay.png',
                existedAddress:[
                    {
                        payment_id:1,
                        name:'李英俊',
                        tel:'12345678901',
                        address1:'xxxxxxxx',
                        address2:'xxxxxxxxxxxx',
                    },
                    {
                        payment_id:2,
                        name:'李英俊',
                        tel:'12345678901',
                        address1:'xxxxxxxx',
                        address2:'xxxxxxxxxxxx',
                    }
                ],
                deliveryOptions:[
                    {
                        label:'普通达',
                        value:'免费',
                        time:'',
                    },
                    {
                        label: '超级快递达',
                        value:'+30元',
                        time:'',
                    }
                ],
                deliveryVal:'免费',
                addressComplete:false,
                showForm:'',
                rules:{
                    firstName: [
                        {required:true, message: '请输入姓名',trigger: 'blur'},
                    ],
                    lastName: [
                        {required:true, message: '请输入姓名',trigger: 'blur'},
                    ],
                    province:[
                        {required:true, message: '请选择省份',trigger: 'blur'},
                    ],
                    city:[
                        {required:true, message: '请选择城市',trigger: 'blur'},
                    ],
                    region:[
                        {required:true, message: '请选择区/县',trigger: 'blur'},
                    ],
                    address:[
                        {required:true, message: '请填写详细地址',trigger: 'blur'},
                    ],
                    tel:[
                        {required:true, message: '请填写电话号码',trigger: 'blur'},
                        {min:11, max:11, message: "请输入正确的电话号码",trigger: 'blur'}
                    ]
                },
                chosenAddressIndex:'',
                basket:[
                    {
                        cart_id: 3,
                        item_id: 1,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        img: "../static/sportswear-essentials-backpack-0.jpg",
                        current_price: 320,
                        previous_price: null,
                        group: "男子",
                        style: "背包",
                        color: "黑色",
                        size: '均码',
                        num:10,
                        valid:true,
                    },
                    {
                        cart_id: 5,
                        item_id: 4,
                        brand: "Adidas",
                        name: "Tensaur",
                        img: "../static/Tensaur_Shoes_Black-0.jpg",
                        current_price: 210,
                        group: "儿童",
                        style: "运动鞋",
                        color: "黑色",
                        previous_price: 300,
                        size: "40",
                        num:1,
                        valid: true
                    },
                ],
                total_price:2333,
                fullscreenLoading:false,
                paying_items: JSON.parse(window.sessionStorage.getItem('paying_items')),
            }
        },
        created() {
            const _this = this;
            axios.get('/payment').then(function (resp) {
                _this.existedAddress = resp.data.data.info;
                _this.showForm = resp.data.data.info.length === 0;
            })

            axios.get('/payment/payingItems?cartIds='+this.paying_items.toString())
                .then(function (resp) {
                _this.basket = resp.data.data.items;
                _this.total_price = resp.data.data.total_price;
            })

            let username = window.sessionStorage.getItem('username');
            if(username) {
                this.username = JSON.parse(username);
            }
        },
        mounted() {
            //计算预计到达时间
            var d1 = new Date();
            var d2 = new Date();
            var weekday=new Array(7);
            weekday[0]="周日";
            weekday[1]="周一";
            weekday[2]="周二";
            weekday[3]="周三";
            weekday[4]="周四";
            weekday[5]="周五";
            weekday[6]="周六";
            d1.setDate(d1.getDate()+7);
            d2.setDate(d2.getDate()+2);
            var month1 = d1.getMonth()+1;
            var month2 = d2.getMonth()+1;

            this.deliveryOptions[0].time = month1+'月'+d1.getDate()+'日 '+weekday[d1.getDay()];
            this.deliveryOptions[1].time = month2+'月'+d2.getDate()+'日 '+weekday[d2.getDay()];
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
            onSubmit(form_name){
                this.$refs[form_name].validate((valid) => {
                    if (valid) {
                        let paymentDTO = {
                            familyName: this.addressForm.lastName,
                            givenName: this.addressForm.firstName,
                            province: this.addressForm.province,
                            city: this.addressForm.city,
                            district: this.addressForm.region,
                            address: this.addressForm.address,
                            tel: this.addressForm.tel
                        }
                        console.log(paymentDTO);
                        const _this = this;
                        axios.post('/payment/add', paymentDTO).then(function (resp) {
                            if (resp.data.code === 0) {
                                _this.$router.go(0);
                            }
                        })
                    }
                });
            },
            removeAddress(id){
                this.$confirm('确定删除此地址？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });

                    const _this = this;
                    axios.put('/payment/delete?paymentId='+id).then(function (resp) {
                        if(resp.data.code === 0){
                            _this.$router.go(0);
                        }
                    })
                }).catch(() => {});
            },
            handleCancel(){
                if (this.existedAddress.length === 0){
                    this.$router.go(-1);
                }else{
                    this.showForm = false;
                }
            },
            choseAddress(index){
                if(this.chosenAddressIndex !==''){
                    var beforeAddress = document.getElementsByClassName('show-address')[this.chosenAddressIndex];
                    beforeAddress.style = 'border-width:1px';
                }
                var chosenAddress = document.getElementsByClassName('show-address')[index];
                chosenAddress.style = 'border-width:3px';
                this.chosenAddressIndex = index;
            },
            goOnCheckout(){
                if(this.chosenAddressIndex === ''){
                    this.$alert('请先选择好收货地址再下单!', 'BESTBUYER', {
                        confirmButtonText: '知道了',
                    });
                }else{
                    this.addressComplete = true
                }
            },
            editAddress(id){
                const _this = this;
                axios.put('/payment/delete?paymentId='+id).then(function (resp) {});
                axios.get('/payment/choose?paymentId='+id).then(function (resp) {
                    _this.addressForm.lastName = resp.data.data.familyName;
                    _this.addressForm.firstName = resp.data.data.givenName;
                    _this.addressForm.province = resp.data.data.province;
                    _this.addressForm.city = resp.data.data.city;
                    _this.addressForm.region = resp.data.data.district;
                    _this.addressForm.address = resp.data.data.address;
                    _this.addressForm.tel = resp.data.data.tel;
                    _this.showForm = true;
                });

                /*this.addressForm.lastName = "fassdf";
                this.addressForm.firstName = "ffff";
                this.addressForm.province = "dddd";
                this.addressForm.city = "fdffa";
                this.addressForm.region = "dddd";
                this.addressForm.address = 'dsadafsada';
                this.addressForm.tel = "2323";
                this.showForm = true;*/
            },
            confirmOrder(){
                /*orderDTO:
                    private Integer[] cartIds;
                    private Integer paymentId;
                    private String deliveryType;
                    private String paymentMethod;*/
                let orderDTO = {
                    cartIds: this.paying_items,
                    paymentId: this.existedAddress[this.chosenAddressIndex].payment_id,
                    deliveryType: this.deliveryVal === '免费'? '普通达' : '超级快递达',
                    paymentMethod: this.radioPay === 1? '支付宝':'微信支付'
                }

                window.sessionStorage.setItem('orderDTO', JSON.stringify(orderDTO));

                const loading = this.$loading({
                    lock: true,
                    text: '支付中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                    this.$router.push('/check_order');
                }, 2000);
            }
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
    .add-address, .checkout-box{
        text-align: left;
        margin-bottom: 5%;
    }
    .el-card.add-address ::v-deep .el-card__header, .checkout-box ::v-deep .el-card__header{
        background-color: #303133;
    }
    .el-card.add-address ::v-deep .el-card__body, .checkout-box ::v-deep .el-card__body{
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
    .checkout .el-radio{
        display: inline-flex;
        align-items: center;
    }
    .complete-btn{
        margin-bottom: 3em;
        float:right;
        width: 112px;
    }
    .show-address{
        padding: 1em 1em 1em 2em;
        margin-top: 1em;
        border-style: solid;
        border-width: 1px;
        border-color: #909399;
    }
    .show-address:hover{
        cursor: pointer;
    }
    .lines{
        margin-left: 2em;
        color: #606266;
    }
    .lines p{
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        font-weight: 500;
    }
    .add-new-btn{
        font-size: 16px;
        margin-right: 1em;
        float: right
    }
    .remove-btn{
        font-size: 16px;
        color: #606266;
        float: right;
        margin-left: 1em;
    }
    .flex-box{
        display: inline-flex;
        align-items: center;
    }
    .text{
        font-weight: bold;
    }
    .order-abstract{
        text-align: left;
    }
    .abstract-header h3{
        margin-top: 0;
        margin-bottom: 0;
        display: inline-block;
    }
    .items{
        /*border-bottom-style: solid;
        border-bottom-width: 0.1em;
        border-bottom-color: #E9E9EA;*/
        margin-bottom: 5%;
        display: flex;
    }
    .detail{
        font-size: 16px;
        vertical-align: top;
        display: inline-block;
        width: 70%;
    }
    .name{
        margin-top: 0;
        margin-bottom: 0.5em;
        font-weight: bold;
    }
    .style{
        margin-top: 0;
        margin-bottom: 0.5em;
        font-size: 14px;
        color: #909399;
    }
    .price{
        margin: 0;
        font-weight: bold;
    }
</style>