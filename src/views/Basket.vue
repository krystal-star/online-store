<template>
    <div class="basket">
        <Notification />

        <div class="main">
            <h2>购物车</h2>
            <el-checkbox  v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <span class="num">（已选择{{checkedCities.length}}件）</span>
            <el-link style="float: right; font-size: 16px; margin-right: 6%" @click="clearBasket">清空购物车</el-link>
            <div style="margin: 15px 0;border-bottom-style: solid;border-bottom-width: 0.1em;border-bottom-color: #E9E9EA"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" v-if="">
                <div class="items" v-for="(item,index) in items">
                    <el-checkbox :label="item.cart_id" :key="item.cart_id" :disabled="!item.valid"></el-checkbox>
                    <el-image
                            style="width: 150px; height: 150px; margin-left: 2%; margin-right: 5%"
                            :src="item.img"
                            fit="cover"></el-image>

                    <div class="detail">
                        <p class="name">{{item.name}}</p>
                        <p class="pre-price" v-if="item.previous_price !== null">¥{{item.previous_price}}</p>
                        <p class="hide" v-else>¥null</p>
                        <p class="price">¥{{item.current_price}}</p>
                        <p class="style">{{item.brand}} {{item.group}}{{item.style}}</p>
                        <p class="style">{{item.color}}</p>
                        <p class="style">尺码（{{item.size}}）<span> 数量 </span>
                        <el-select v-model="item.num" :placeholder="String(item.num)" size="mini" class="select" @change="changeNum(item.cart_id,item.num)">
                            <el-option
                                    v-for="i in 10"
                                    :key="i"
                                    :label="i"
                                    :value="i">
                            </el-option>
                        </el-select>
                        </p>

                        <el-popconfirm
                                title="确定删除这件商品吗？"
                                @confirm="removeItem(item.cart_id)"
                        >
                            <el-link slot="reference" type="info" class="remove">删除</el-link>
                        </el-popconfirm>

                        <p style="color: #F56C6C; margin: 0" v-if="!item.valid">Not Available Now!</p>

                    </div>
                    <el-divider></el-divider>
                </div>
            </el-checkbox-group>

            <div class="total">
                <el-button round class="checkout" @click="toCheckout"> 结算 </el-button>
                <p class="price">商品总价: {{calculatePrice}} 元</p>
            </div>
        </div>

        <div class="recommend">
            <p class="text">猜你喜欢</p>
            <el-carousel height="430px" indicator-position="outside">
                <el-carousel-item :key="1">
                    <el-row :gutter="20">
                        <el-col :span="8" v-for="(item,index) in discount">
                            <div class="lunbo" v-if="index < 3">
                                <el-image :src="item.img" class="image"></el-image>
                                <p class="name" >{{item.name}}</p>
                                <p class="pre-price">¥{{item.previous_price}}</p>
                                <p class="cur-price">¥{{item.price}}</p>
                                <p class="group-style">{{item.group}}{{item.style}}</p>
                            </div>
                        </el-col>
                    </el-row>
                </el-carousel-item>

                <el-carousel-item :key="2">
                    <el-row :gutter="20">
                        <el-col :span="8" v-for="(item,index) in discount">
                            <div class="lunbo" v-if="index >= 3">
                                <el-image :src="item.img" class="image"></el-image>
                                <p class="name">{{item.name}}</p>
                                <p class="pre-price">¥{{item.previous_price}}</p>
                                <p class="cur-price">¥{{item.price}}</p>
                                <p class="group-style">{{item.group}}{{item.style}}</p>
                            </div>
                        </el-col>
                    </el-row>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    import Notification from "./Notification";
    export default {
        name: "Basket",
        components: {Notification},
        data() {
            return {
                checkAll: true,
                checkedCities: [],
                items:[
                /*{
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
                    }*/
                ],
                discount: [
                    /*{
                        id: 8,
                        brand: "Nike",
                        name: "Sportswear Essentials",
                        img: "../static/sportswear-essentials-backpack-0.jpg",
                        price: 320,
                        previous_price: 499,
                        group: "男子",
                        style: "背包",
                    },
                    {
                        id: 6,
                        brand: "Adidas",
                        name: "Tensaur",
                        img: "../static/Tensaur_Shoes_Black-0.jpg",
                        price: 210,
                        previous_price: 240,
                        group: "儿童",
                        style: "运动鞋",
                    },
                    {
                        id: 5,
                        brand: "Adidas",
                        name: "HER Studio London",
                        img: "../static/HER_Studio_London_T-Shirt-0.jpg",
                        price: 200,
                        previous_price: 290,
                        group: "女子",
                        style: "T恤",
                    },
                    {
                        id: 4,
                        brand: "Nike",
                        name: "Air Max 90",
                        img: "../static/air-max-90-eoi-0.jpg",
                        price: 390,
                        previous_price: 490,
                        group: "男子",
                        style: "运动鞋",
                    },
                    {
                        id: 6,
                        brand: "Adidas",
                        name: "Tensaur",
                        img: "../static/Tensaur_Shoes_Black-0.jpg",
                        price: 210,
                        previous_price: 240,
                        group: "儿童",
                        style: "运动鞋",
                    }*/
                ]
            };
        },
        created() {
            const _this = this;
            axios.get('/cart').then(function (resp) {
                _this.items = resp.data.data.items;
                _this.discount = resp.data.data.recommend;
            })
        },
        methods: {
            handleCheckAllChange(val) {
                var ids = [];
                for(var i=0; i<this.items.length;i++){
                    ids.push(this.items[i].cart_id);
                }
                this.checkedCities = val ? ids : [];
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.items.length;
            },
            changeNum(id,val){
                //后端修改
                console.log(id+' '+val);
                const _this = this;
                axios.put('/cart/update?cartId='+id+'+&num='+val).then(function (resp) {
                    if (resp.data.code === 0) {
                        _this.$router.go(0);
                    } else {
                        alert("库存不足");
                        _this.$router.go(0);
                    }
                })
            },
            removeItem(id){
                //后端删除
                console.log(id);
                const _this = this;
                axios.put('/cart/delete?cartId='+id).then(function (resp) {
                    if (resp.data.code === 0) {
                        _this.$router.go(0);
                    } else {
                        alert("删除失败");
                    }
                })
            },
            toCheckout(){
                window.sessionStorage.setItem('paying_items', JSON.stringify(this.checkedCities));
                this.$router.push('/checkout');
            },
            clearBasket(){
                //清空购物车
                const _this = this;
                axios.put('/cart/deleteAll').then(function (resp) {
                        _this.$router.go(0);
                });
            }
        },
        mounted(){
            //隐藏label
            var labels = document.getElementsByClassName('el-checkbox__label');
            for(var j=1; j<labels.length; j++){
                console.log("hidden!");
                labels[j].style = 'visibility:hidden';
            }

            //全选
            var ids = [];
            for(var i=0; i<this.items.length;i++){
                if (this.items[i].valid){
                    ids.push(this.items[i].cart_id);
                }
            }
            this.checkedCities = ids;
            console.log(this.checkedCities);
        },
        computed:{
            //计算总价
            calculatePrice(){
                var total_price = 0;
                //['8','6']
                for(var i=0; i<this.items.length;i++){
                    if(this.checkedCities.indexOf(this.items[i].cart_id) !== -1){
                        total_price += this.items[i].current_price * this.items[i].num;
                    }
                }
                return total_price;
            }
        }
    }
</script>

<style scoped>
    .main{
        text-align: left;
        margin-left: 15%;
        margin-right: 15%;
        margin-bottom: 10%;
    }
    .num{
        font-weight: bold;
    }
    .items{
        /*border-bottom-style: solid;
        border-bottom-width: 0.1em;
        border-bottom-color: #E9E9EA;*/
        margin-bottom: 5%;
    }
    .items label.el-checkbox{
        bottom: 70px;
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
    .select{
        margin-left: 10px;
        width: 11%;
    }
    .price, .pre-price, .hide{
        margin-top: -1.8em;
        float:right;
        font-weight: bold;
        display: inline-block;
    }
    .pre-price, .hide{
        margin-top: -2.2em;
        color: #909399;
        text-decoration: line-through;
        font-size: 15px;
        padding-left: 5px;
    }
    .remove{
        text-decoration: #606266;
        margin-top: 1em;
    }
    .checkout{
        float: right;
    }
    .total .price{
        margin-top: 0.5em;
        margin-right: 2em;
    }
    .recommend{
        text-align: left;
        margin-left: 10%;
        margin-right: 10%;
    }
    .recommend p.text{
        font-weight: bold;
        font-size: 24px;
        display: inline-block;
    }
    .recommend p.pre-price, .recommend p.cur-price{
        float:right;
        margin-top: 0;
    }
    .recommend p.name, .recommend p.pre-price, .recommend p.cur-price{
        font-weight: bold;
        font-size: 16px;
        display: inline-block;
    }
    .recommend p.group-style{
        margin-top: 0;
        color: #909399;
        font-size: 14px;
    }
    .recommend .image, .recommend p.name:hover, .recommend p.cur-price:hover{
        cursor: pointer;
    }
    .recommend p.pre-price{
        color: #909399;
        text-decoration: line-through;
        font-size: 14px;
        padding-left: 5px;
    }
    .recommend div.lunbo{
        text-align: left;
    }
    div.recommend ::v-deep button.el-carousel__arrow{
        width: 50px;
        height: 50px;
        top: 40%;
        font-size: 24px;
    }
    .hide{
        visibility: hidden;
    }
</style>