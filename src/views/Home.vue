<template>
  <div class="home">
    <div class="poster">
      <el-carousel height="500px">
        <el-carousel-item v-for="(item,index) in posters" :key="index">
          <el-image :src="item.img" class="image"></el-image>
        </el-carousel-item>
      </el-carousel><br/>
    </div>

    <div class="hot">
      <p class="text">热门商品</p>
      <el-carousel height="450px">
        <el-carousel-item :key="1">
        <el-row :gutter="20">
          <el-col :span="6" v-for="(item,index) in hot">
            <div class="lunbo" v-if="index < 4">
              <el-image :src="item.img" class="image"></el-image>
              <p>{{item.name}}</p>
              <p>{{item.price}}</p>
              <p>{{item.group}}{{item.style}}</p>
            </div>
          </el-col>
        </el-row>
        </el-carousel-item>

        <el-carousel-item :key="2">
          <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in hot">
              <div class="lunbo" v-if="index >= 4">
                <el-image :src="item.img" class="image"></el-image>
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
                <p>{{item.group}}{{item.style}}</p>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div><br/>

    <div class="sales">
      <p class="text">特价商品</p>
      <el-carousel height="450px">
        <el-carousel-item :key="1">
        <el-row :gutter="20">
          <el-col :span="6" v-for="(item,index) in sales" :key="item.id">
            <div class="lunbo" v-if="index < 4">
              <el-image :src="item.img" class="image"></el-image>
              <p>{{item.name}}</p>
              <p>{{item.price}} <span class="original_price"> {{item.previousPrice}}</span></p>
              <p>{{item.group}}{{item.style}}</p>
            </div>
          </el-col>
        </el-row>
        </el-carousel-item>

        <el-carousel-item :key="2">
          <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in sales" :key="item.id">
              <div class="lunbo" v-if="index >= 4">
                <el-image :src="item.img" class="image"></el-image>
                <p>{{item.name}}</p>
                <p>{{item.price}} <span class="original_price"> {{item.previousPrice}}</span></p>
                <p>{{item.group}}{{item.style}}</p>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div><br/>

    <div class="new">
      <p class="text">最新上架</p>
      <el-carousel height="450px">
        <el-carousel-item :key="1">
          <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in hot">
              <div class="lunbo" v-if="index < 4">
                <el-image :src="item.img" class="image"></el-image>
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
                <p>{{item.group}}{{item.style}}</p>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>

        <el-carousel-item :key="2">
          <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in hot">
              <div class="lunbo" v-if="index >= 4">
                <el-image :src="item.img" class="image"></el-image>
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
                <p>{{item.group}}{{item.style}}</p>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div><br/>

    <div class="vip-center">
      <p class="text">会员中心</p>
      <el-image :src="vip_center" class="image"></el-image>
    </div>

    <div class="contact">
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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      posters: [
        {
          id: 1,
          img: "../static/1.jpg"
        },
        {
          id: 2,
          img: "../static/2.jpg"
        }
      ],
      hot: [
        {
          id: 1,
          name: "Nike Air Force 1",
          price: 800.00,
          group: "男子",
          style: "运动鞋",
          img: "../static/g1.jpg"
        },
        {
          id: 2,
          name: "Nike Air Max",
          original_price: 599.00,
          group: "男子",
          style: "运动鞋",
          img: "../static/g2.jpg"
        },
        {
          id: 3,
          name: "Air Jordan",
          original_price: 1499.00,
          group: "男子",
          style: "篮球鞋",
          img: "../static/g3.jpg"
        }
        /*{
          id: 4,
          name: "Nike Cosmic Unity EP",
          original_price: 1199.00,
          category: "男/女篮球鞋",
          thumb: "../static/g4.jpg"
        },
        {
          id: 5,
          name: "Nike Blazer Low LE",
          original_price: 599.00,
          category: "女子运动鞋",
          thumb: "../static/g5.jpg"
        }*/
      ],
      sales: [
        {
          id: 1,
          name: "Nike Air Force 1",
          price: 699.00,
          previousPrice: 800.00,
          group: "男子",
          style: "运动鞋",
          img: "../static/g1.jpg"
        },
        {
          id: 2,
          name: "Nike Air Max",
          price: 499.00,
          previousPrice: 599.00,
          group: "男子",
          style: "运动鞋",
          img: "../static/g2.jpg"
        },
        {
          id: 3,
          name: "Air Jordan",
          price: 1399.00,
          previousPrice: 1499.00,
          group: "男子",
          style: "篮球鞋",
          img: "../static/g3.jpg"
        },
        /*{
          id: 4,
          name: "Nike Cosmic Unity EP",
          current_price: 1099.00,
          original_price: 1199.00,
          category: "男/女篮球鞋",
          thumb: "../static/g4.jpg"
        },
        {
          id: 5,
          name: "Nike Blazer Low LE",
          current_price: 399.00,
          original_price: 599.00,
          category: "女子运动鞋",
          thumb: "../static/g5.jpg"
        }*/
      ],
      new_arrivals: [
        {
          id: 1,
          name: "Nike Air Force 1",
          price: 800.00,
          group: "男子",
          style: "运动鞋",
          img: "../static/g1.jpg"
        },
        {
          id: 2,
          name: "Nike Air Max",
          price: 599.00,
          group: "男子",
          style: "运动鞋",
          img: "../static/g2.jpg"
        },
        {
          id: 3,
          name: "Air Jordan",
          original_price: 1499.00,
          group: "男子",
          style: "篮球鞋",
          img: "../static/g3.jpg"
        },
        /*{
          id: 4,
          name: "Nike Cosmic Unity EP",
          original_price: 1199.00,
          category: "男/女篮球鞋",
          thumb: "../static/g4.jpg"
        },
        {
          id: 5,
          name: "Nike Blazer Low LE",
          original_price: 599.00,
          category: "女子运动鞋",
          thumb: "../static/g5.jpg"
        }*/
      ],
      vip_center: "../static/3.jpg"
    }
  },
  /*created() {
    const _this = this
    axios.get('http://localhost:8181/home').then(function (resp) {
      _this.hot = resp.data.data.trending
      _this.sales = resp.data.data.discount
      _this.new_arrivals = resp.data.data.new_arrivals
      _this.posters = resp.data.data.poster

    })
  }*/
}
</script>

<style>
.text{
  font-weight: bold;
  font-size: 28px;
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
</style>
