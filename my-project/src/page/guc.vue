
 <template>
 
 <div class="hello">
<Navnew>购物车</Navnew>
    <div class="container">
        <div class="cart">
            <div class="page-title-normal">
                <h2 class="page-title-h2"><span>我的购物车</span></h2>
            </div>
            <div class="item-list-wrap">
                <div class="cart-item">
                    <div class="cart-item-head">
                        <ul>
                            <li>商品</li>
                            <li>价格</li>
                            <li>数量</li>
                            <li>小计</li>
                            <li>编辑</li>
                        </ul>
                    </div>
                    <ul class="cart-item-list">
                        <li v-for="(item,index) in cartList">
                            <div class="cart-tab-1">
                                <div class="cart-item-check">
                                    <a href="javascipt:;" class="checkbox-btn item-check-btn " 
                                    v-bind:class="item.checked?'check':''"
                                    v-on:click="item.checked=!item.checked"
                                   >
                                        <svg class="icon icon-ok">
                                            <use xlink:href="#icon-ok"></use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="cart-item-pic">
                                    <img v-bind:src="'../../static/img/'+item.productImage">
                                </div>
                                <div class="cart-item-title">
                                    <div class="item-name">{{item.productName}}</div>
                                </div>
                            </div>
                            <div class="cart-tab-2">
                                <div class="item-price">{{item.salePrice|qian}}</div>
                            </div>
                            <div class="cart-tab-3">
                                 <div class="item-quantity">
                                     <Numnew v-bind:num="item.productNum" v-bind:index="index" v-on:jia="jia" v-on:jian="jian"></Numnew>
                                 </div>
                            </div>
                            <div class="cart-tab-4">
                                <div class="item-price-total">{{item.salePrice*item.productNum|qian}}</div>
                            </div>
                            <div class="cart-tab-5">
                                <div class="cart-item-opration">
                                    <a href="javascript:;" class="item-edit-btn">
                                        <!-- <svg class="icon icon-del">
                                            <use xlink:href="#icon-del"></use>
                                        </svg> -->
                                        <input type="button" value="删除" v-on:click="dal(index)">
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cart-foot-wrap">
                <div class="cart-foot-inner">
                    <div class="cart-foot-l">
                        <div class="item-all-check">
                            <a href="javascipt:;">
                                <span class="checkbox-btn item-check-btn">
                      <svg class="icon icon-ok"><use xlink:href="#icon-ok"/></svg>
                  </span>
                  <span>全选</span>
                            </a>
                        </div>
                    </div>
                    <div class="cart-foot-r">
                        <div class="item-total">
                            总计: <span class="total-price">{{sum}}</span>
                        </div>
                        <div class="btn-wrap">
                            <a class="btn btn--red">结算</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>

</template>

<script>
import Navnew from"@/components/Navnew";
import bus from '@/bus.js';
import Numnew from '@/components/Numnew';
export default {
  name: 'guc',
  
     components:{
         Navnew,
         Numnew
     },
     created(){
         var self=this
         self.loadData();
      
     },
      data(){
          return{
               cartList:[]
          }
        
     },
    computed: {
      sum: function() {
          var s = 0;
          for (var i = 0; i < this.cartList.length; i++) {
              s += (this.cartList[i].salePrice * this.cartList[i].productNum)
          }
          return s
      }

  },
     methods:{
          dal:function(i,productId){
              var id=this.cartList[i].productId
              this.axios.post("/api/users/cartDel",{productId:id})
              .then((res)=>{
                    var data=res.data
                    if(data.status=="0"){
                        this.cartList.splice(i,1)
                    }
                    // console.log(res)
              })
          
      },
         loadData(){
             this.axios.get("/api/users/cartList")
             .then((res)=>{
              this.cartList=res.data.result
              this.$store.commit("update",this.cartList.length)
             })
         },
         jia(i){
            //  this.cartList[i].productNum++
            var item=this.cartList[i]
             this.axios.post("/api/users/cartEdit",{
                 productId:item.productId,
                 checked:item.checked,
                 productNum:parseInt(item.productNum)+1
             })
             .then((res)=>{
                 var data =res.data
                 if(data.status=="0")
               item.productNum++
             })
         },
         jian(i){
            //  if(this.cartList[i].productNum<=0){
            //         return;
            //  }
            // this.cartList[i].productNum--
            var item=this.cartList[i]
             this.axios.post("/api/users/cartEdit",{
                 productId:item.productId,
                 checked:item.checked,
                 productNum:parseInt(item.productNum)-1
             })
             .then((res)=>{
                 var data =res.data
                 if(data.status=="0")
                 if(item.productNum<=0){
                     return;
                 }
               item.productNum--
             })
         }
        
     }
   
    
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
