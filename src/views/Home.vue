<template>
  <div class="home">
    <Notification />

    <div class="poster">
        <el-link :underline="false" class="poster" href="#">
          <el-image :src="poster" fit="scale-down"></el-image></el-link>
      </div>

    <!--一周热卖-->
    <div class="trending">
      <p class="text">一周热卖</p>
      <p class="view-all" @click="">View all</p>
      <el-carousel height="550px" indicator-position="outside">
        <el-carousel-item :key="1">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(item,index) in trending">
            <div class="lunbo" v-if="index < 3">
              <el-image v-if="item.img" :src="item.img" class="image"></el-image>
              <p class="name" @mouseover="changeColor($event,2)" @mouseleave="recoverColor($event,2)">{{item.name}}</p>
              <p class="price" @mouseover="changeColor($event,2)" @mouseleave="recoverColor($event,2)">¥{{item.price}}</p>
              <p class="group-style">{{item.group}}{{item.style}}</p>
            </div>
          </el-col>
        </el-row>
        </el-carousel-item>

        <el-carousel-item :key="2">
          <el-row :gutter="20">
            <el-col :span="8" v-for="(item,index) in trending">
              <div class="lunbo" v-if="index >= 3">
                <el-image v-if="item.img" :src="item.img" class="image"></el-image>
                <p class="name" @mouseover="changeColor($event,2)" @mouseleave="recoverColor($event,2)">{{item.name}}</p>
                <p class="price" @mouseover="changeColor($event,2)" @mouseleave="recoverColor($event,2)">¥{{item.price}}</p>
                <p class="group-style">{{item.group}}{{item.style}}</p>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--最新上架-->
    <div class="new-arrivals">
      <p class="text">最新上架</p>
      <p class="view-all" @click="">View all</p>
          <el-row :gutter="20">
            <el-col :span="12" v-for="item in new_arrivals">
                <el-image :src="item.img" class="image"></el-image>
            </el-col>
          </el-row>
    </div>

    <!--特价商品-->
    <div class="discount">
      <p class="text">特价商品</p>
      <p class="view-all" @click="">View all</p>
      <el-carousel height="550px" indicator-position="outside">
        <el-carousel-item :key="1">
          <el-row :gutter="20">
            <el-col :span="8" v-for="(item,index) in discount">
              <div class="lunbo" v-if="index < 3">
                <el-image :src="item.img" class="image"></el-image>
                <p class="name" @mouseover="changeColor($event,3)" @mouseleave="recoverColor($event,3)">{{item.name}}</p>
                <p class="pre-price">¥{{item.previousPrice}}</p>
                <p class="cur-price" @mouseover="changeColor($event,3)" @mouseleave="recoverColor($event,3)">¥{{item.price}}</p>
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
                <p class="name" @mouseover="changeColor($event,3)" @mouseleave="recoverColor($event,3)">{{item.name}}</p>
                <p class="pre-price">¥{{item.previousPrice}}</p>
                <p class="cur-price" @mouseover="changeColor($event,3)" @mouseleave="recoverColor($event,3)">¥{{item.price}}</p>
                <p class="group-style">{{item.group}}{{item.style}}</p>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--精选-->
    <div class="recommend">
      <p class="text">精选</p>
      <el-row :gutter="20">
        <el-col :span="12" v-for="item in recommend">
         <el-image :src="item.img" class="image"></el-image>
        </el-col>
      </el-row>
    </div>

    <!--更多buyer-->
    <div class="accessories">
      <p class="text">更多Buyer</p>
      <el-row :gutter="20">
        <el-col :span="8" v-for="item in accessories">
          <el-image :src="item.img" class="image"></el-image>
        </el-col>
      </el-row>
    </div>

    <!--会员中心-->
    <div class="vip-center">
      <p class="text">会员中心</p>
      <el-image :src="vip_poster" class="image"></el-image>
    </div>

    <!--<div class="contact">
      <el-divider></el-divider>
      <el-row>
        <el-col :span="4">联系我们</el-col>
        <el-col :span="4">
          <i class="el-icon-chat-dot-square"></i> 在线客服
            <span style="display: block; font-size: x-small">[仅支持中文]</span>
        </el-col>
        <el-col :span="4">
          <i class="el-icon-phone-outline"></i> 400-999-5999
          <span style="display: block; font-size: x-small">[仅支持中文]</span>
        </el-col>
        <el-col :span="4">
          <i class="el-icon-message"></i>  service@adidas.com
          <span style="display: block; font-size: x-small">[建议及投诉受理邮箱]</span>
        </el-col>
        <el-col :span="4">
          <i class="el-icon-time"></i>  9:00-22:00
        </el-col>
        <el-col :span="4">
          <i class="el-icon-document"></i>  查看订单
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src
import Notification from "./Notification";

export default {
  name: 'Home',
  components: {Notification},
  data() {
    return {
      poster: "../static/poster1.jpg",
      trending: [
        {
          id: 8,
          brand: "Nike",
          name: "Sportswear Essentials",
          img: "../static/sportswear-essentials-backpack-0.jpg",
          price: 320,
          group: "男子",
          style: "背包",
        },
        {
          id: 6,
          brand: "Adidas",
          name: "Tensaur",
          img: "../static/Tensaur_Shoes_Black-0.jpg",
          price: 210,
          group: "儿童",
          style: "运动鞋",
        },
        {
          id: 5,
          brand: "Adidas",
          name: "HER Studio London",
          img: "../static/HER_Studio_London_T-Shirt-0.jpg",
          price: 200,
          group: "女子",
          style: "T恤",
        },
        {
          id: 4,
          brand: "Nike",
          name: "Air Max 90",
          img: "../static/air-max-90-eoi-0.jpg",
          price: 390,
          group: "男子",
          style: "运动鞋",
        },
        {
          id: 6,
          brand: "Adidas",
          name: "Tensaur",
          img: "../static/Tensaur_Shoes_Black-0.jpg",
          price: 210,
          group: "儿童",
          style: "运动鞋",
        }
      ], //热卖,
      discount: [
        {
          id: 8,
          brand: "Nike",
          name: "Sportswear Essentials",
          img: "../static/sportswear-essentials-backpack-0.jpg",
          price: 320,
          previousPrice: 499,
          group: "男子",
          style: "背包",
        },
        {
          id: 6,
          brand: "Adidas",
          name: "Tensaur",
          img: "../static/Tensaur_Shoes_Black-0.jpg",
          price: 210,
          previousPrice: 240,
          group: "儿童",
          style: "运动鞋",
        },
        {
          id: 5,
          brand: "Adidas",
          name: "HER Studio London",
          img: "../static/HER_Studio_London_T-Shirt-0.jpg",
          price: 200,
          previousPrice: 290,
          group: "女子",
          style: "T恤",
        },
        {
          id: 4,
          brand: "Nike",
          name: "Air Max 90",
          img: "../static/air-max-90-eoi-0.jpg",
          price: 390,
          previousPrice: 490,
          group: "男子",
          style: "运动鞋",
        },
        {
          id: 6,
          brand: "Adidas",
          name: "Tensaur",
          img: "../static/Tensaur_Shoes_Black-0.jpg",
          price: 210,
          previousPrice: 240,
          group: "儿童",
          style: "运动鞋",
        }
      ],
      new_arrivals: [
        {
          id: 9,
          img: "../static/sportswear-heritage-hip-pack-0.jpg"
        },
        {
          id: 4,
          img: "../static/sportswear-0.jpg"
        }
      ],
      recommend:[
        {
          id: 10,
          img: "../static/sportswear-older-printed-hoodie-0.jpg",
        },
        {
          id: 8,
          img: "../static/sportswear-essentials-backpack-0.jpg",
        }
      ],
      accessories:[
        {
          id: 9,
          img: "../static/sportswear-heritage-hip-pack-0.jpg",
        },
        {
          id: 8,
          img: "../static/sportswear-essentials-backpack-0.jpg",
        },
        {
          id:7,
          img: "../static/HER_Studio_London_T-Shirt-0.jpg",
        }
      ],
      vip_poster: "../static/vip-poster.jpg"
    }
  },
  methods:{
    changeColor: function(e, val) {
        let target = e.target;
        let parent_node = target.parentNode;
        var changeNode;
      if(target.className.toLowerCase() === "name"){
        changeNode = parent_node.childNodes[val];
      }else{
        changeNode = parent_node.childNodes[1];
      }
      target.style = "opacity:0.5";
      changeNode.style = "opacity:0.5";
    },
    recoverColor: function (e,val) {
      let target = e.target;
      let parent_node = target.parentNode
      var changeNode;
      if(target.className.toLowerCase() === "name"){
        changeNode = parent_node.childNodes[val];
      }else{
        changeNode = parent_node.childNodes[1];
      }
      target.style = "opacity:1";
      changeNode.style = "opacity:1";
    }
  },
  mounted() {
    //修改箭头的样式
    var arrows = document.querySelectorAll("button.el-carousel__arrow");
    for(var i=0; i<arrows.length; i++){
      arrows[i].style = "width: 50px;height: 50px;top: 35%;font-size: 24px;";
    }
  },
  created() {
    const _this = this
    axios.get('http://localhost:8181/home').then(function (resp) {
      _this.poster = resp.data.data.poster
      _this.trending = resp.data.data.trending
      _this.discount = resp.data.data.discount
      _this.new_arrivals = resp.data.data.new_arrivals
      _this.recommend = resp.data.data.recommend
      _this.accessories = resp.data.data.accessories
      _this.vip_poster = resp.data.data.vip_poster
    })
  }
}
</script>

<style>
  div.trending, div.discount, div.new-arrivals, div.recommend, div.vip-center, div.accessories{
    text-align: left;
    padding: 10px 60px 10px;
  }
p.text, p.view-all{
  font-weight: bold;
  font-size: 26px;
  display: inline-block;
}
p.view-all, p.price, p.pre-price, p.cur-price{
  float:right;
}
p.view-all:hover{
  opacity: 0.5;
  cursor: pointer;
}
p.name, p.price, p.pre-price, p.cur-price{
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
}
p.group-style{
  margin-top: 0px;
  color: #909399;
}
.image, p.name:hover, p.price:hover, p.cur-price:hover{
  cursor: pointer;
}
p.pre-price{
  color: #909399;
  text-decoration: line-through;
  font-size: 15px;
  padding-left: 5px;
}
  span.original_price{
    text-decoration: line-through;
  }
  div.lunbo{
    text-align: left;
  }
  div.contact{
    height: 100px;
    padding-top: 20px;
  }

  div.trending ::v-deep button.el-carousel__arrow--left{
    width: 50px;
    height: 50px;
    top: 35%;
    font-size: 24px;
  }

</style>
