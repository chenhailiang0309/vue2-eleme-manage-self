<template>
  <div class="login_page fillcontain">
    <section class="form_contianer" v-show="showLogin">
      <div class="manage_tip">
        <p>eleme后台管理系统</p>
      </div>
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item>
          <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="tip">温馨提示：</p>
      <p class="tip">未登录过的新用户，自动注册</p>
      <p class="tip">注册过的用户可凭账号密码登录</p>
    </section>
  </div>
</template>
<script type="text/javascript">
import { baseUrl, baseImgPath } from '@/config/env.js'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      // 表单数据
      loginForm: {
        username: '',
        password: '',
      },
      // 表单校验
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      showLogin: false,
    }
  },
  computed: {
    ...mapState(['adminInfo']),

  },
  mounted() {
    // console.log(this.adminInfo)
    this.showLogin = true;
    if (!this.adminInfo.id) {
      this.getAdminData()
    }
  },
  methods: {
    ...mapActions(['getAdminData']),
    submitForm(formName) {
      // 饿了么表单验证
      this.$refs[formName].validate((valid) => {
        if (valid) { // 校验成功
          this.$http({
              url: baseUrl + '/admin/login',
              method: 'POST',
              data: {
                user_name: this.loginForm.username,
                password: this.loginForm.password
              }
            })
            .then(res => {
              var data = res.data;
              // console.log(data)
              if (data.status == 1) {
                this.getAdminData()
                this.$message({
                  type: 'success',
                  message: '登陆成功'
                })
                this.$router.push('manage')
              } else {
                this.$message({
                  type: 'error',
                  message: data.message
                })
              }
            })
            .catch(error => {
              // console.log(error)
            })
        } else { // 校验失败
          this.$notify.error({
            title: '错误',
            message: '请输入正确的用户名密码',
            offset: 100
          });
          return false;
        }
      })
    }
  },
  watch: {
    adminInfo:function(newValue) {
      console.log('aaaa')
      if (newValue.id) {
        this.$message({
          type: 'success',
          message: '检测到您之前登录过，将自动登录'
        });
        this.$router.push('manage')
      }
    }
  }
}

</script>
<style lang="less" scoped>
@import '../style/mixin';

.login_page {
  background-color: #324057;
}

.manage_tip {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  p {
    font-size: 34px;
    color: #fff;
  }
}

.form_contianer {
  .wh(320px, 210px);
  .ctp(320px, 210px);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  .submit_btn {
    width: 100%;
    font-size: 16px;
  }
}

.tip {
  font-size: 12px;
  color: red;
}

</style>
