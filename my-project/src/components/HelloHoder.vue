<template>
  <div >
      

      <div class="site-header" style="clear:both;">
        <div class="container">
            <div class="header-logo">
                <a href="#/" title="淘大商城"><img src="/static/img/logo3.png" /></a>
            </div>
            <div class="header-nav">
                <ul class="nav-list">
                    <li class="nav-category">
                        <a class="btn-category-list" href="catalog.php" style="display:none;">全部商品分类</a>
                    </li>
                    <li class="nav-item">
                        <a class="link" href="category.php?id=76">
                            <!-- <span>电子产品</span> -->
                        </a>
                        <div class='item-children'>
                            <div class="container">
                                <ul class="children-list clearfix">
                                    <li class="first">
                                        <div class="figure figure-thumb">
                                            <a href="goods.php?id=27"><img src="" alt="小米电视2 40英寸"></a>
                                        </div>
                                        <div class="title"><a href="goods.php?id=27">小米电视2 40英寸</a></div>
                                        <p class="price">2200<em>元</em>元</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- <div class="container-user"> -->
            <div class="topbar-cart" id="ECS_CARTINFO">
                <a class="cart-mini " href="#/guc">
                    <i class="iconfont">&#xe60c;</i> 购物车
                    <span class="mini-cart-num J_cartNum" id="hd_cartnum">{{carnum}}</span>
                </a>
            </div>
            <div class="topbar-info J_userInfo" id="ECS_MEMBERZONE" v-show="userName==''">
                <a class="link" href="#" rel="nofollow" v-on:click="showModal">登录</a>
                <span class="sep">|</span>
                <a class="link" href="#" rel="nofollow"v-on:click="showModalzc">注册</a>
            </div>
            
            <div class="topbar-info J_userInfo" id="ECS_MEMBERZONE" v-show="userName!=''">
                
                {{userName}}
                 <a class="link" href="javascript:void(0)" rel="nofollow" v-on:click="tc">退出</a>
            </div>
                
            <!-- </div> -->
        </div>
        <div id="J_navMenu" class="header-nav-menu" style="display: none;">
            <div class="container"></div>
        </div>
    </div>


    <Loginnew 
        v-bind:md-show="showLogin"
        v-on:guanbi="closeModal"
        v-on:chenggong="loginOK"
    ></Loginnew>
<zcnew  v-bind:md-show="showzc"
 v-on:guanbi="closeModal"
>

</zcnew>
  </div>
</template>

<script>

import Loginnew from "@/components/Loginnew"

import zcnew from "@/components/zcnew"
export default {
  name: 'HelloHoder',
  components: {
      Loginnew,
      zcnew
  },
  data() {
      return {
          showLogin: false,
          userName: ""  ,
            showzc:false 
      }
  },
  mounted:function(){
            this.axios.get("/api/users/checkLogin")
            .then((res)=>{
                var data=res.data
                if(data.status=="0"){
                    this.userName=data.result;
                }else{
                    this.userName="";
                }
            })
   },
  computed:{
          carnum:function(){
              return this.$store.state.num;
          }
      },
  methods: {
      tc(){
          this.axios.post("/api/users/logout")
          .then((res)=>{
              var data=res.data
              if(data.status=="0"){
                    this.userName=""
                    
              }
          })
      },
      loginOK(userName) {
        this.userName = userName  
        
        console.log(this.userName)
        
        this.closeModal();        
      },
 

      showModal() {
          this.showLogin = true
      },
      showModalzc(){
          this.showzc=true
      },
      
      closeModal() {   
          this.showLogin = false
          this.showzc=false
      }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-logo a img{
    width: 200px;
    height: 100px;
}
.container{
    background: rgb(247, 247, 247)
}
</style>
