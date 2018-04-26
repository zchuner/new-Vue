<template>
<div class="pos">
    <div>
        <el-row >
          <el-col :span='7' class="left">
            <h3>我是订单栏</h3>
            <el-tabs class="top">
              <el-tab-pane label="点餐">
                点餐
                <el-table :data="tableData" border show-summary style="width:100%">
                  <el-table-column label="商品" prop="goodsName">
                  </el-table-column>

                  <el-table-column label="数量" prop="count">
                  </el-table-column>

                  <el-table-column label="金额" prop="price">
                  </el-table-column>

                  <el-table-column label="操作" >
                    <template scope="scope">
                      <el-button type="text" size="small" @click="delSingleGoods(scope.row) ,getAllMoney"
                      >
                        删除
                      </el-button>
                      <el-button type="text" size="small" @click="addOrderList(scope.row)" >
                        增加
                      </el-button>
                    </template>
                  </el-table-column>

                </el-table>
                <div class="btn">
                  <el-button type="warning" style="margin:8px 18px ">挂单</el-button>
                  <el-button type="danger" style="margin:8px 18px" @click="delAllGoods">删除</el-button>
                  <el-button type="success" style="margin:8px 18px">结账</el-button>
                </div>
              </el-tab-pane>
              <el-tab-pane label="挂单" >
              挂单
              </el-tab-pane>
              <el-tab-pane label="外卖" >
              外卖
              </el-tab-pane>
            </el-tabs>
          </el-col>

            <!--商品展示-->
            <el-col :span="17" class="right">
              <h3>我是产品栏</h3>
              <div class="goods">
                <div class="title">常用商品</div>
                <div class="goodslist">
                  <ul>
                    <li v-for="item in oftenGoods" >
                      <span>{{item.goodsName}}</span>
                      <span class="listprice">￥{{item.price}}元</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="goods-type">
                <el-tabs>
                  <el-tab-pane label="汉堡">汉堡
                    <ul class="cooklist">
                      <li v-for="item in typeGoods" @click="addOrderList(item)">
                        <p class="foodimg"><img 
                        :src="item.goodsImg" width="100%" /></p>
                        <p class="foodname">{{item.goodsName}}</p>
                        <p class="foodprice">￥{{item.price}}元</p>
                      </li>
                    </ul>

                  </el-tab-pane>
                  <el-tab-pane label="小食">小食</el-tab-pane>
                  <el-tab-pane label="饮料">饮料</el-tab-pane>
                  <el-tab-pane label="套餐">套餐</el-tab-pane>
                </el-tabs>
              </div>
            </el-col>
        </el-row>


    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
 name: 'clonecenter',
 
  data () {
    return {
    	tableData: [
        {
          goodsId: 12,
          goodsName: "可口可乐",
          price: 8,
          count: 1
        },
        {
          goodsId: 1,
          goodsName: "香辣鸡腿堡",
          price: 15,
          count: 1
        },
        {
          goodsId: 13,
          goodsName: "爱心薯条",
          price: 8,
          count: 1
        },
        {
          goodsId: 14,
          goodsName: "甜筒",
          price: 8,
          count: 1
        }
      ],
      oftenGoods:[
          
      ],
      typeGoods:[
        {
          goodsId: 1,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
          goodsName: "和风汉堡",
          price: 15
        },
        {
          goodsId: 4,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
          goodsName: "快乐全家桶",
          price: 80
        },
        {
          goodsId: 5,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
          goodsName: "脆皮炸鸡腿",
          price: 10
        },
        {
          goodsId: 6,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
          goodsName: "魔法鸡块",
          price: 20
        },
        {
          goodsId: 7,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
          goodsName: "雪顶咖啡",
          price: 18
        },
        {
          goodsId: 9,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
          goodsName: "大块鸡米花",
          price: 15
        },
        {
          goodsId: 20,
          goodsImg: "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
          goodsName: "香脆鸡柳",
          price: 17
        }
      ],
      totalMoney: 0, 
      totalCount: 0

    }
  },
  created(){
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    .then(response=>{
      this.oftenGoods=response.data;
    })
    .catch(error=>{
      console.log(error);
      alert('网络错误，不能访问')
    })
  },
  methods:{
  	addOrderList(goods){
      this.totalCount=0;
      this.totalMoney=0;
      let isHave = false;
      
      for(let i=0; i<this.tableData.length;i++){        
        if(this.tableData[i].goodsId==goods.goodsId){
          isHave= true ;
        }
      }
      

      if(isHave){
        let arr=this.tableData.filter(o=>o.goodsId==goods.goodsId);
        arr[0].count++;

      }else{
        let newGoods={
          goodsId:goods.goodsId,
          goodsName:goods.goodsName,
          price:goods.price,
          count:1
        }
        this.tableData.push(newGoods);
      }
      
      this.tableData.forEach(element=>{
        this.totalCount+=element.count;
        this.totalMoney=this.totalMoney+element.price*element.count;
      });
    },
    delSingleGoods(goods){
      this.tableData=this.tableData.filter(o=>o.goodsId != goods.goodsId)
    },
    getAllMoney() {
      this.totalCount = 0;
      this.totalMoney = 0;
      if (this.tableData) {
        this.tableData.forEach(element => {
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + element.price * element.count;
        });
      }
    },
    delAllGoods(){
      this.tableData=[];
      this.totalCount=0;
      this.totalMoney=0;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pos{
  width:92%;
  float:left;
  height:100%;
  overflow: hidden;
}
.left{
  background:yellow;
}
.right{
  background:pink;
}
.top{
  overflow:hidden;
  width:100%;
}
.left-top{
  padding:5px 15px;

}
.btn{
  width:100%;
}
.btn el-button{
  padding:10px 12px;
}
.goods{
  width:100%;

}
.title{
  width:100%;
  height:20px;
  padding:10px 30px;
  background:green ;
}
.goodslist{
  height:100%;
  width:100%;
}
.goodslist ul li{
  list-style:none;
  float:left;
  border:1px solid #E5F9F2;
  padding:8px 12px;
  margin:8px;
  background-color:#fff;
}
.listprice{
  color:#58B7FF;
}
.goods-type{
  width:100%;
 float:left;
}

.cooklist{
  
}
.cooklist li{
  list-style:none;
  width:23%;
  border:1px solid #E5E9F2;
  height:auto;
  padding:2px;
  float:left;
  overflow:hidden;
  margin:3px 3px;
}
.foodimg{
  
}
.foodname{
  font-size: 18px;
  padding-left: 10px;
  color:brown;
}
.foodprice{
  font-size: 16px;
  padding-left:10px;
  padding-top:10px;
}
</style>
