<template>
    <div class="check-order">
        <el-header style="height: 60px">
            <el-image style="width: 200px; height: 25px"
                      src="../static/icons/bestbuyer-logo.png"
                      @click="$router.push('/')"
            ></el-image>

            <el-button class="right" @click="">
                {{username}}<i class="el-icon-user-solid"></i></el-button>

            <p class="right" style="margin-top: 1.2em;margin-right: 1em">9:30 - 22:30</p>

            <p class="right" style="margin-top: 1.1em;margin-right: 2em">在线客服：400-100-001</p>
        </el-header>

        <div class="order">
            <h1>支付成功，感谢您的订购</h1>
            <p style="margin-bottom: 2em">我们将尽快发货，当您收到货物时，请当面验收快递包裹后再签收</p>

            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="font-size: 18px;font-weight: bold">订单详情</span>
                </div>
                <div class="text">
                    <p>订单编号：{{order.order_id}}</p>
                    <p>订单状态：已支付</p>
                    <p>支付方式：{{order.payment_method}}</p>
                    <p>订单金额：{{order.total_price}}元</p>
                    <p>配送地址：{{order.address}}</p>
                    <p>配送方式：{{order.delivery_type}}</p>
                </div>
            </el-card>

            <div class="win-counts">
                <svg t="1619537672286" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1321" width="48" height="48"><path d="M906.7 375.3l-141-192.4c-3.1-4.2-8-6.7-13.3-6.7h-480c-5.2 0-10.2 2.5-13.3 6.7l-141 192.4c-4.4 6.1-4.2 14.4 0.6 20.2l381 461.2c3.3 4 8 6 12.7 6s9.4-2 12.7-6l381-461.2c4.8-5.8 5-14.1 0.6-20.2z m-97.4-24.5H690.9L580.4 240.3h147.9l81 110.5z m-492.9 57.7l100.1 247-204-247h103.9z m329.8 0L512.4 738.6 378.6 408.5h267.6z m-230.8-57.7l97-97 97 97h-194z m293 57.7h103.9l-204 247 100.1-247zM296.5 240.3h147.9L333.9 350.8H215.5l81-110.5z" fill="#231815" p-id="1322"></path></svg>
                <h3 style="margin-left: 1em">评论所购商品得积分</h3>
            </div>
            <p style="margin-top: 0">成功提交评论（并无退货情况），可将获得满1000-50元优惠券做奖励</p>
        </div>

        <div class="try">
            <h1>还可以尝试</h1>
            <el-divider></el-divider>
            <el-row :gutter="20" >
                <el-col :span="6" v-for="group in classification">
                    <h3 @click="newPage(group)">{{group.name}}</h3>
                    <div v-for="item in group.categories">
                        <p @click="newPage(group, item)">{{item.name}}</p>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="recommend">
            <p class="text">猜你喜欢</p>
            <el-carousel height="450px" indicator-position="outside">
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
    export default {
        name: "CheckOrder",
        data(){
            return{
                username:'',
                order:{
                    /*order_id:'12345678',
                    status:'已支付',
                    payment_method: '支付宝',
                    total_price: 2333.00,
                    address: 'Flat 72, River Street Tower',
                    delivery_type: '快速达',*/
                },
                classification: [
                    {
                        name: '男子',
                        url:'men',
                        categories:[
                            {name:'鞋类', url: 'shoes'},
                            {name: "服装", url: "clothing",},
                            {name: "配件", url:"accessories",}
                        ]
                    },
                    {
                        name: '女子',
                        url:'women',
                        categories:[
                            {name:'鞋类', url: 'shoes'},
                            {name: "服装", url: "clothing",},
                            {name: "配件", url:"accessories",}
                        ]
                    },
                    {
                        name: '儿童',
                        url:'kids',
                        categories:[
                            {name:'鞋类', url: 'shoes'},
                            {name: "服装", url: "clothing",},
                            {name: "配件", url:"accessories",}
                        ]
                    },
                    {
                        name: '折扣',
                        url:'',
                        categories: [
                            {name: '男子',url: 'men'},
                            {name: '女子',url: 'women'},
                            {name: '儿童',url: 'kids'},
                        ]
                    }
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
            }
        },
        created() {
            this.username = JSON.parse(window.sessionStorage.getItem('username'))
            const _this = this;
            axios.post('http://localhost:8181/order/create',
            JSON.parse(window.sessionStorage.getItem('orderDTO'))).then(function (resp) {
                    if (resp.data.data.is_paid === true){
                        _this.order = resp.data.data;
                        _this.discount = resp.data.data.related_items;
                    }
            })
            window.scrollTo(0,0);
        },
        methods:{
            newPage(group, item){
                //存储names
                var url = '';
                window.sessionStorage.setItem("groups",JSON.stringify(''));
                window.sessionStorage.setItem("categories",JSON.stringify(''));
                window.sessionStorage.setItem("styles",JSON.stringify(''));
                window.sessionStorage.setItem("brands",JSON.stringify(''));
                window.sessionStorage.setItem("discount",JSON.stringify(false));

                //点击 "男子，女子，儿童"
                if (group.name === "男子" || group.name === "女子" ||group.name === "儿童"){
                    window.sessionStorage.setItem("groups",JSON.stringify(group.name));
                    url += "groups="+group.url;
                    //鞋类，服装，配件
                    if(item){
                        window.sessionStorage.setItem("categories",JSON.stringify(item.name));
                        url += "&categories="+item.url;
                    }
                }

                //点击 "折扣"
                else if(group.name === "折扣") {
                    window.sessionStorage.setItem("discount",JSON.stringify(true));
                    url += "discount=true";
                    if (item) {
                        window.sessionStorage.setItem("groups",JSON.stringify(item.name));
                        url += "&groups=" + item.url;
                    }
                }

                var path = '/itemList?'+url;
                window.sessionStorage.setItem("url",JSON.stringify(path));
                this.$router.push({ path: '/itemList', query: { path: url } });
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
    .el-header .el-image:hover{
        opacity: 0.5;
        cursor: pointer;
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

    .order{
        margin: 5% 10%;
        text-align: left;
    }

    .box-card{
        width: 700px;
        margin-bottom: 2em;
    }
    .win-counts{
        display: inline-flex;
        align-items: center;
    }
    .try{
        margin: 5% 10%;
    }
    .try h3:hover, .try p:hover{
        opacity: 0.5;
        cursor: pointer;
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
    }
    .recommend p.name, .recommend p.pre-price, .recommend p.cur-price{
        font-weight: bold;
        font-size: 16px;
        display: inline-block;
        margin-top: 0;
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
</style>