<template>
  <div id="box" > 
    <!-- <div class="md-modal modal-msg md-modal-transition md-show" > -->
    <div class="md-modal modal-msg md-modal-transition" v-bind:class="mdShow?'md-show':''" >
        <div id="main">
            <div class="n-frame device-frame reg_frame">
                <button class="md-close" v-on:click="close">关闭</button>
               <h1 class="biaoti">注册淘大帐号</h1>
        <div class="row">
		
			 	<input v-model="userName" id="username" type="username" placeholder="请输入用户名" 
      		  	onfocus="if 
        		(placeholder =='请输入用户名'){placeholder =''}" onblur="if(placeholder =='')
       			 {placeholder='请输入用户名'}" />
      </div>

    	<div class="row">
			
			 	<input v-model="userPwd" id="password" type="password" placeholder="请输入密码" 
      		  	onfocus="if 
        		(placeholder =='请输入密码'){placeholder =''}" onblur="if(placeholder =='')
       			 {placeholder='请输入密码'}" />
    	</div>		
       		<div class="row_2">
       		   <input id="register" type="button" value="立即注册" v-on:click="register" />
       		</div>      
            </div>
        </div>
      </div>
      <div class="md-overlay" v-show="mdShow">
      </div>
  </div>
</template>

<script>

export default {
  name: 'zcnew',
  data(){
       return {
      userName:"",
      userPwd:""
    }
  },
  props: ["mdShow", "aaa"],
    methods:{
        register:function(){
            this.axios.post("/api/users/register",{
                userName:this.userName,
                userPwd:this.userPwd
            })  
            .then((res)=>{
                          window.location.href = "/?from=reg&"

          return ;
        
            if(this.userName==""|| this.userPwd==""){
                alert("请输入用户名或密码！");
            }else if(this.userName.length < 5){
                alert("用户名不能少于5位！");
            }
            else if(this.userPwd.length < 6){
                alert("密码不能少于6位！")
            }
            else{
                this.axios.post("/api/users/register",{
                    userName:this.userName,
                    userPwd:this.userPwd
                })
                .then((res)=>{
                    if(status==0){
                        alert("注册成功")


                    }
                    else{
                        alert("注册失败请重新注册")
                    }
                })
            }
            })       
          // this.$router.push({path: "/", query:{'from':'reg'}})

         
      },
      close: function() {
        this.$emit("guanbi")
      }
  
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-modal{
    position: fixed;
    top: 50%;
    left: 36%;
}
#main{
    text-align: center;
    margin-top: 20px;
}
.row, .row_2{
    margin-top: 20px;
     /* width: 100px;  */
    /* height: 30px;  */
    /* border: 1px solid black; */
}
.md-modal .md-close{
        position: absolute;
    top: 17px;
    right: -425px;
}

</style>
