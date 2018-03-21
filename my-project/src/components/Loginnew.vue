<template>

  <div> 
    <!-- <div class="md-modal modal-msg md-modal-transition md-show" > -->
    <div class="md-modal modal-msg md-modal-transition" v-bind:class="mdShow?'md-show':''" >
        <div class="md-modal-inner">
          <div class="md-top">
            <div class="md-title">登录</div>
            <button class="md-close" v-on:click="close">关闭</button>
          </div>
          <div class="md-content">
            <div class="confirm-tips">
              <div class="error-wrap" v-show="hasError">
                <span class="error error-show" >用户名或密码错误</span>
              </div>
              <ul>
                <li class="regi_form_input">
                  <input type="text" tabindex="1" name="loginname" v-model="userName" placeholder="User Name" data-type="loginname" class="regi_login_input regi_login_input_left">
                </li>
                <li class="regi_form_input noMargin">
                  <i class="icon IconPwd"></i>
                  <input type="password" tabindex="2" name="password" v-model="userPwd" placeholder="Password" class="regi_login_input regi_login_input_left login-input-no input_text" @keyup.enter="login">
                </li>
              </ul>

            </div>
            <div class="login-wrap">
              <a href="javascript:;" class="btn-login" v-on:click="login">登录</a>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="mdShow">
      </div>
  </div>
</template>

<script>
import bus from '@/bus.js'
export default {
  name: 'Loginnew',
  props: ["mdShow", "aaa"],  
  data() {             
      return {
        
        hasError: false,  
        userName: "",
        userPwd: ""
      }
  },
  methods: {

      login: function() {
          this.axios.post(
              "/api/users/login", {
                  
                      userName: this.userName,
                      userPwd: this.userPwd
                 
              })
            .then( (res) => {
                var result = res.data 
                if (result.status == 0) { 

                    this.$emit("chenggong", result.result.userName)
                     bus.$emit("loginOk")
                } else {
                    this.hasError = true; 
                }
            })

      },



      close: function() {
        this.$emit("guanbi")
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
