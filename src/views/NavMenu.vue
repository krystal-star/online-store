<template>
    <div class="nav-menu">
        <div class="search">
            <el-image style="width: 200px; height: 25px;top: 45px; right: 15%;"
                      src="../static/icons/bestbuyer-logo.png"></el-image>
            <el-input class="search-box2"
                      placeholder="请输入内容"
                      prefix-icon="el-icon-search"
                      v-model="input"
                      clearable>
            </el-input>
            <i class="el-icon-circle-close" @click="closeSearchBox"></i>
            <div class="hint">
                <h4>热门搜索词</h4>
                <p>Air Jordan</p>
                <p>Ultraboost</p>
                <p>Air Force 1</p>
            </div>
        </div>
        <div class="nav-header">
            <el-link :underline="false" class="icons" href="https://www.nike.com/cn/">
                <el-image style="width: 50px; height: 50px"
                          src="../static/icons/nike-logo-black.png"></el-image></el-link>
            <el-link :underline="false" class="icons" href="https://www.adidas.com.cn/">
                <el-image style="width: 40px; height: 40px"
                          src="../static/icons/adidas-logo-black.png"></el-image></el-link>
            <el-button class="right" @click="dialogLoginVisible = true" v-if="user.id === null">
                登陆<i class="el-icon-user-solid"></i></el-button>
            <el-button class="right" v-else @click="dropdownVisible">
                {{user.id}}<i class="el-icon-user-solid"></i></el-button>
            <el-button class="right">
                加入我们<i class="el-icon-phone"></i></el-button>
            <el-button class="right">
                帮助<i class="el-icon-question"></i></el-button>

            <ul class="dropdown">
                <li class="dropdown-item">收藏</li>
                <li class="dropdown-item">购物车</li>
                <li class="dropdown-item">已购买</li>
                <li class="dropdown-item">待评价</li>
                <li class="dropdown-item">账户管理</li>
                <li class="dropdown-item" @click="logout">注销登录</li>
            </ul>

            <!--登陆-->
            <el-dialog :visible.sync="dialogLoginVisible" :modal-append-to-body='false' width="40%">
                <el-image style="width: 200px; height: 25px"
                          src="../static/icons/bestbuyer-logo.png"></el-image>
                <h1>您的会员账户从此开启</h1>

                <el-form :model="loginForm" :rules="rules" ref="loginForm">
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" placeholder="用户名/手机号" class="number" style="width: 315px;">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginForm.password" placeholder="密码" class="psw" style="width: 315px;" show-password></el-input>
                    </el-form-item>
                    <p class="login-fail">账号或密码错误，请重新输入</p>
                    <div>
                        <p class="login-phone">用手机号登陆</p>
                    </div>
                    <el-form-item class="one-line">
                        <el-checkbox v-model="loginForm.radio" label="true" class="keep-login">保持登陆状态</el-checkbox>
                        <el-link type="info" class="forget-psw">忘记密码</el-link>
                    </el-form-item>
                    <p>一旦登陆，即表示你同意BESTBUYER的隐私政策和用户条款。</p>
                    <el-form-item>
                        <el-button type="info" @click="onSubmit('loginForm')" style="width: 315px;">登陆</el-button>
                    </el-form-item>
                    <p>还不是会员? <el-link type="info" style="margin-block-end:0.2em" @click="moveToSignIn">加入我们</el-link></p>
                </el-form>
            </el-dialog>


            <!--注册-->
            <el-dialog :visible.sync="dialogSigninVisible" :modal-append-to-body='false' width="40%">
                <el-image style="width: 200px; height: 25px"
                          src="../static/icons/bestbuyer-logo.png"></el-image>
                <h1>完成创建您的BESTBUYER账户</h1>

                <el-form :model="signinForm" :rules="rulesSign" ref="signinForm">
                    <label class="labels">设置自己喜欢的昵称</label>
                    <el-form-item prop="username">
                        <el-input v-model="signinForm.username" placeholder="输入昵称" class="number" style="width: 315px;">
                        </el-input>
                    </el-form-item>

                    <label class="labels">绑定手机号</label>
                    <el-form-item prop="user_tel">
                        <el-input v-model="signinForm.user_tel" placeholder="输入手机号" class="number" style="width: 315px;">
                        </el-input>
                    </el-form-item>

                    <label class="labels">设置密码</label>
                    <el-form-item prop="password1">
                        <el-input v-model="signinForm.password1" placeholder="输入密码" class="psw" style="width: 315px;" show-password></el-input>
                    </el-form-item>

                    <label class="labels">确认密码</label>
                    <el-form-item prop="password2">
                        <el-input v-model="signinForm.password2" placeholder="输入密码" class="psw" style="width: 315px;" show-password></el-input>
                    </el-form-item>

                    <p class="signin-fail">{{this.error_msg}}</p>

                    <el-form-item class="one-line">
                        <el-checkbox v-model="signinForm.radio" label="true" class="keep-login">注册接收通讯内容，以获取 Bestbuyer 最新动态</el-checkbox>
                    </el-form-item>

                    <p>一旦登陆，即表示你同意BESTBUYER的隐私政策和用户条款。</p>
                    <el-form-item>
                        <el-button type="info" @click="onSubmit('signinForm')" style="width: 315px;">加入我们</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="moveToLogIn" style="width: 315px;">返回登陆</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>

        </div>


        <el-menu mode="horizontal" text-color="black" style="height: 60px;" >

            <el-menu-item id="logo" @click="toHomePage">
                    <el-image style="width: 200px; height: 25px"
                              src="../static/icons/bestbuyer-logo.png"></el-image>
            </el-menu-item>

            <el-menu-item
                    v-for="(item,index1) in classification"
                    :index="index1.toString()"
                    @mouseover.native="toVisible(index1)"
                    @mouseleave.native="toInvisibile(index1)"
                    @click="newPage(item)">
                {{item.name}}
            </el-menu-item>
                <div class="menu-dropdown">
                    <el-row v-if="getItem() !== null">
                        <el-col :span="6" v-for="subitem in getItem().categories">
                            <h4 class="cate" @click="newPage(getItem(),subitem)">{{subitem.name}}</h4>
                            <li v-for="style in subitem.styles" @click="newPage(getItem(), subitem, style)">{{style.name}}</li>
                        </el-col>
                    </el-row>
                </div>

            <el-input class="search-box1"
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                      @focus="openSearchBox"
                    clearable>
            </el-input>

            <el-link :underline="false" id="shopping-bag" href="#">
                <el-image style="width: 25px; height: 25px"
                          src="../static/icons/shopping-bag.png"></el-image></el-link>

            <el-link :underline="false" id="star" href="#">
                <el-badge :value="this.$store.state.star">
                <el-image style="width: 30px; height: 30px"
                          src="../static/icons/heart-off.png"></el-image></el-badge>
            </el-link>
        </el-menu>

    </div>
</template>

<script>
    export default {
        name: "NavMenu",
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.signinForm.password2 !== '') {
                        this.$refs.signinForm.validateField('password2');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.signinForm.password1) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                classification:[
                    {
                        name: "男子",
                        url: "men",
                        categories: [
                            {
                                name: "鞋类",
                                url: "shoes",
                                styles: [
                                    {name:"跑鞋", url:"running_shoes"},
                                    {name:"篮球鞋", url:"basketball_shoes"},
                                    {name:"足球鞋", url: "football_shoes"},
                                    {name:"休闲鞋", url: "lifestyle_shoes"},
                                    {name:"拖鞋", url: "slippers"}
                                ]
                            },
                            {
                                name: "服装",
                                url: "clothing",
                                styles: [
                                    {name:"卫衣", url:"sweatshirt"},
                                    {name:"外套", url:"jacket"},
                                    {name:"运动服", url: "sportswear"},
                                    {name:"T恤", url: "T-shirt"},
                                    {name:"休闲裤", url: "trouser"},
                                    {name:"短裤", url: "shorts"}
                                ]
                            },
                            {
                                name: "配件",
                                url:"accessories",
                                styles: [
                                    {name:"包", url:"bag"},
                                    {name:"帽子", url:"hat"},
                                    {name:"袜子", url: "socks"},
                                    {name:"其他", url: "others"},
                                ]
                            }
                        ]
                    },
                    {
                        name: "女子",
                        url: "women",
                        categories: [
                            {
                                name: "鞋类",
                                url: "shoes",
                                styles: [
                                    {name:"跑鞋", url:"running_shoes"},
                                    {name:"篮球鞋", url:"basketball_shoes"},
                                    {name:"足球鞋", url: "football_shoes"},
                                    {name:"休闲鞋", url: "lifestyle_shoes"},
                                    {name:"拖鞋", url: "slippers"}
                                ]
                            },
                            {
                                name: "服装",
                                url: "clothing",
                                styles: [
                                    {name:"卫衣", url:"sweatshirt"},
                                    {name:"外套", url:"jacket"},
                                    {name:"运动服", url: "sportswear"},
                                    {name:"T恤", url: "T-shirt"},
                                    {name:"休闲裤", url: "trouser"},
                                    {name:"短裤", url: "shorts"}
                                ]
                            },
                            {
                                name: "配件",
                                url:"accessories",
                                styles: [
                                    {name:"包", url:"bag"},
                                    {name:"帽子", url:"hat"},
                                    {name:"袜子", url: "socks"},
                                    {name:"其他", url: "others"},
                                ]
                            }
                        ]
                    },
                    {
                        name: "儿童",
                        url:"kids",
                        categories: [
                            {
                                name: "鞋类",
                                url: "shoes",
                                styles: [
                                    {name:"跑鞋", url:"running_shoes"},
                                    {name:"篮球鞋", url:"basketball_shoes"},
                                    {name:"足球鞋", url: "football_shoes"},
                                    {name:"休闲鞋", url: "lifestyle_shoes"},
                                    {name:"拖鞋", url: "slippers"}
                                ]
                            },
                            {
                                name: "服装",
                                url: "clothing",
                                styles: [
                                    {name:"卫衣", url:"sweatshirt"},
                                    {name:"外套", url:"jacket"},
                                    {name:"运动服", url: "sportswear"},
                                    {name:"T恤", url: "T-shirt"},
                                    {name:"休闲裤", url: "trouser"},
                                    {name:"短裤", url: "shorts"}
                                ]
                            },
                            {
                                name: "配件",
                                url:"accessories",
                                styles: [
                                    {name:"包", url:"bag"},
                                    {name:"帽子", url:"hat"},
                                    {name:"袜子", url: "socks"},
                                    {name:"其他", url: "others"},
                                ]
                            }
                        ]
                    },
                    {
                        url: '',
                        name: "分类",
                        categories: [
                            {
                                name: "品牌",
                                url:'',
                                styles: [
                                    {name:"Nike",url:"Nike"},
                                    {name:"Adidas",url:"Adidas"},
                                    {name:"李宁",url: "Lining"},
                                    {name:"安踏",url: "Anta"},
                                    {name:"匡威",url: "Converse"}
                                    ]
                            }
                        ]
                    },
                    {
                        name: "折扣",
                        url: "",
                        categories: [
                            {
                                name: "男子",
                                url:"men",
                                styles: [
                                    {name: "鞋类", url: "shoes"},
                                    {name: "服装", url: "clothing"},
                                    {name: "配件", url:"accessories"}
                                ]
                            },
                            {
                                name: "女子",
                                url:"women",
                                styles: [
                                    {name: "鞋类", url: "shoes"},
                                    {name: "服装", url: "clothing"},
                                    {name: "配件", url:"accessories"}
                                ]
                            },
                            {
                                name: "儿童",
                                url:"kids",
                                styles: [
                                    {name: "鞋类", url: "shoes"},
                                    {name: "服装", url: "clothing"},
                                    {name: "配件", url:"accessories"}
                                ]
                            }
                        ]
                    }
                ],
                input: '',
                temp: '',
                dialogLoginVisible: false,
                dialogSigninVisible:false,
                loginForm:{
                    username:'',
                    password:'',
                    radio: false,
                },
                signinForm:{
                    username:'',
                    user_tel:'',
                    password1:'',
                    password2:'',
                    radio:false
                },
                rules:{
                    username: [
                        {required:true, message: "请输入手机号码或者用户名", trigger:'blur'},
                    ],
                    password:[
                        {required:true, message: "请输入密码", trigger:'blur'},
                    ]
                },

                rulesSign:{
                    username: [
                        {required:true, message: "请输入用户名", trigger:'blur'},
                    ],
                    user_tel: [
                        {required:true, message: "请输入手机号", trigger:'blur'},
                        {min:11, max:11, message: "请输入正确的手机号", trigger:'blur'}
                    ],
                    password1: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    password2: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                },
                user:{
                    id: null,
                },
                error_msg:'',
            }
        },
        mounted () {
            let menu = document.getElementsByClassName("menu-dropdown")[0];
            menu.onmouseleave = function () {
                menu.style = "visibility: hidden";
            }

            let id = window.sessionStorage.getItem('username');
            if(id){
                this.user.id = JSON.parse(id);
            }
        },
        methods: {
            toVisible: function(index){
                let node = document.getElementsByClassName("el-menu-item")[index+1];
                node.style = "color: #909399";
                this.temp = index;
                let menu = document.getElementsByClassName("menu-dropdown")[0];
                menu.style = "visibility: visible";

            },
            toInvisibile: function(index){
                let node = document.getElementsByClassName("el-menu-item")[index+1];
                node.style = "color:black";
            },
            toHomePage(){
                window.location.href = "/dist"
            },
            closeSearchBox: function () {
                let node = document.getElementsByClassName("search")[0];
                node.style = "visibility: hidden";
            },
            openSearchBox: function () {
                let node = document.getElementsByClassName("search")[0];
                node.style = "visibility: visible";
            },
            getItem: function () {
                if(this.temp !== ''){
                    return this.classification[Number(this.temp)];
                }else {
                    return null;
                }
            },
            newPage: function (i1,i2,i3) {
                //存储names
                var url = '';
                this.$store.state.groups = '';
                this.$store.state.categories = '';
                this.$store.state.styles = '';
                this.$store.state.discount = false;
                this.$store.state.brands = '';

                //点击 "男子，女子，儿童"
                if (i1.name === "男子" || i1.name === "女子" ||i1.name === "儿童"){
                    this.$store.state.groups = i1.name;
                    url += "groups="+i1.url;
                    //鞋类，服装，配件
                    if(i2 !== undefined){
                        this.$store.state.categories = i2.name;
                        url += "&categories="+i2.url;
                    }
                    //xx鞋，xx衣服
                    if(i3 !== undefined){
                        this.$store.state.styles = i3.name;
                        url += "&styles="+i3.url;
                    }
                }

                //点击 "品牌"
                else if (i1.name === "分类" && i3 !== undefined){
                    this.$store.state.brands = i3.name;
                    url += "brands="+i3.url;
                }

                //点击 "折扣"
                else if(i1.name === "折扣") {
                    this.$store.state.discount = true;
                    url += "discount=true";
                    if (i2 !== undefined) {
                        this.$store.state.groups = i2.name;
                        url += "&groups=" + i2.url;
                    }
                    if (i3 !== undefined) {
                        this.$store.state.categories = i3.name;
                        url += "&categories=" + i3.url;
                    }
                }

                var path = '/itemList?'+url;
                this.$store.state.url = path;
                this.$router.push({ path: '/blank', query: { path: path } });
            },
            onSubmit: function (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (formName === 'loginForm') {
                            var path = 'username='+this.loginForm.username+'&password='+this.loginForm.password;
                            const _this = this;
                            axios.post('http://localhost:8181/login?'+path).then(function (resp) {
                                if(resp.data.code === 0){
                                    window.sessionStorage.setItem("username", JSON.stringify(resp.data.data));
                                    _this.$router.go(0);
                                }else{
                                    var failMsg = document.getElementsByClassName("login-fail")[0];
                                    failMsg.style.visibility = "visible";
                                }
                            })

                            /*if(this.loginForm.username ==='junjun' && this.loginForm.password === '123'){
                                window.sessionStorage.setItem("username", JSON.stringify("俊俊"));
                                this.$router.go(0);
                            }else {
                                var failMsg = document.getElementsByClassName("login-fail")[0];
                                failMsg.style.visibility = "visible";
                            }*/
                        }

                        if(formName === 'signinForm'){
                            let infoForm = {
                                userName: this.signinForm.username,
                                userTel: this.signinForm.user_tel,
                                passcode: this.signinForm.password1
                            }
                            console.log(infoForm);
                            const _this = this;
                            axios.post('http://localhost:8181/register', infoForm).then(function (resp) {
                            if(resp.data.code === 0){
                                window.sessionStorage.setItem("username", JSON.stringify(resp.data.data));
                                _this.$router.go(0);
                            }else{
                                    _this.error_msg = resp.data.data;
                                    var failMsg = document.getElementsByClassName('signin-fail')[0];
                                    failMsg.style.visibility = 'visible';
                            }
                            })

                            /*window.sessionStorage.setItem("username", JSON.stringify("俊俊"));
                            this.$router.go(0);*/
                        }
                    } else {
                        return false;
                    }
                });
            },
            dropdownVisible: function () {
                var dropdown = document.getElementsByClassName("dropdown")[0];
                if(dropdown.style.display === "none"){
                    dropdown.style.display = "block";
                }else{
                    dropdown.style.display = "none";
                }
            },
            logout:function () {
                window.sessionStorage.removeItem('username');
                this.$router.go(0);
            },
            moveToSignIn: function () {
                this.dialogLoginVisible = false;
                this.dialogSigninVisible = true;
            },
            moveToLogIn: function () {
                this.dialogSigninVisible = false;
                this.dialogLoginVisible = true;
            }
        }
    }
</script>

<style scoped>
    div.search{
        position: absolute;
        background: white;
        z-index: 99;
        left: -20px;
        width: 100%;
        height: 300px;
        visibility: hidden;
    }
    div.search i{
        top: 48px;
        position: relative;
        font-size: 35px;
        left: 15%;
    }
    div.search-box2{
        width: 600px;
        top: 40px;
        right: 5%;
    }
    div.hint{
        width: 200px;
        position: relative;
        left: 30%;
        text-align: left;
        top: 20%;
    }
    div.hint h4{
        color: #909399;
    }
    div.hint p{
        font-weight: bold;
        font-size: 20px;
        line-height: 20px;
    }
    div.hint p:hover, div.search i:hover, h4.cate:hover{
        cursor: pointer;
        color: #909399;
    }
    div.nav-menu {
        width: 100%;
    }
    div.nav-header{
        background-color: #E9E9EA;
        height: 35px;
    }
    .icons{
        padding-left: 10px;
        padding-right: 10px;
        right: 33%;
        bottom: 25%;
    }
    .el-button.right{
        float: right;
        font-size: 14px;
        color: black;
        background-color:#E9E9EA ;
        border-style: none;
    }
    .el-button.right:hover{
        color: #909399;
    }
    .el-menu-item{
        padding-right: 30px;
        padding-left: 30px;
        right: 20%;
    }
    .el-menu{
        padding-left: 360px;
        text-align: left;
    }

    #logo{
        right: 35%;
    }

.el-input{
    display: inline-block;
    width: 200px;
    top: 10px;
    right: 10%;
}
    #shopping-bag{
        cursor: pointer;
        right: 60px;
        top: 11px;
    }
    #star{
        cursor: pointer;
        right: 30px;
        top: 10px;
    }
    #shopping-bag:hover,#star:hover, #logo:hover, .icons:hover{
        opacity: 0.5;
    }
    .menu-dropdown{
        max-height: 100vh;
        visibility: hidden;
        position: absolute;
        z-index: 99;
        background-color: white;
        width: 100%;
        left: 0;
        top: 60px;
        padding-bottom: 40px;
        text-align: center;
    }
    .menu-dropdown .el-row{
        padding-left: 0;
        left: 15%;
    }
    .menu-dropdown .el-col{
        width: 25%;
        text-align: center;
        line-height: 50px;
    }
    .el-menu-item{
        position: relative;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: 0.1em;
    }
    .el-row{
        padding-left: 60px;
        text-align: left;
        color: black;
    }
    li{
        list-style: none;
        font-weight: bold;
        color: #606266;
        line-height: 25px;
        font-size: 14px;
    }
    li:hover{
        color: black;
        cursor: pointer;
    }
    h4.cate{
        margin-bottom: 1px;
    }
    .el-dialog{
        width: 250px;
        padding: 0 40px 40px;
    }

    .el-menu ::v-deep .el-menu-item.is-active{
        border-style: none;
    }
    .keep-login{
        float: left;
        display: inline-block;
        line-height:30px;
    }
    .forget-psw{
        float: right;
        padding-bottom: 0;
        line-height:30px;
    }
    .one-line{
        margin-left: 21.5%;
        margin-right: 20%;
    }
    .number, .psw {
        margin-left: 20%;
    }
    div.is-error ::v-deep .el-form-item__error{
        left: 20%;
        top: 4em;
    }
    .login-fail, .signin-fail{
        margin: 0;
        color: #F56C6C;
        visibility: hidden;
        float: left;
        margin-left: 21%;
    }
    .login-phone{
        margin-right: 10%;
    }
    .login-phone:hover{
        cursor: pointer;
        opacity: 0.5;
    }
    .dropdown{
        position: absolute;
        top: 30px;
        right: 0;
        padding: 10px 0;
        margin: 5px 0;
        background-color: #FFF;
        border: 1px solid #EBEEF5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0 0 0 0.1);
        transform-origin: center top;
        z-index: 2003;
        display: none;
    }
    .dropdown-item{
        list-style: none;
        line-height: 36px;
        padding: 0 20px;
        margin: 0;
        font-size: 14px;
        color: #606266;
        cursor: pointer;
        outline: 0;
    }
    .dropdown-item:hover{
        color: white;
        background-color: #C0C4CC;
    }
    .labels{
        float: left;
        margin-left: 21%;
    }
    .keep-login ::v-deep .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #606278;
        opacity: 0.5;
    }
    .keep-login ::v-deep .el-checkbox__input.is-focus .el-checkbox__inner, .keep-login ::v-deep .el-checkbox__inner:hover{
        border-color: #606278;
        opacity: 0.5;
    }
    .keep-login ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner, .myRedCheckBox .el-checkbox__input.is-indeterminate .el-checkbox__inner{
        background-color: #606278;
        border-color: #606278;
        opacity: 0.5;
    }

</style>