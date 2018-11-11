<template>
<div class="login">

 <el-form ref="form" status-icon :model="formLogin" :rules="rules" label-width="80px">
     <img src="@/assets/timg (5).jpg" alt="">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="formLogin.username" placeholder="请输入用户名" ></el-input>
  </el-form-item>
 <el-form-item label="密码" prop="password">
    <el-input v-model="formLogin.password" placeholder="请输入密码" type="password" @keyup.enter.native="loginFn"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="loginFn">登陆</el-button>
    <el-button @click="resetFrom">取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
// 导入axjos
import axios from 'axios/lib/axios'

export default {
  data() {
    return {
      formLogin: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'change' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetFrom() {
      this.$refs.form.resetFields()
    },
    loginFn() {
      // 在登陆之前整体验证表单数据 --获取到元素
      this.$refs.form.validate((valid, obj) => {
        if (valid) {
          // 通过发送ajax请求
          axios({
            url: 'http://localhost:8888/api/private/v1/login',
            method: 'post',
            data: this.formLogin
          }).then(res => {
            console.log(res.data)

            if (res.data.meta.status === 200) {
              this.$message.success('登陆成功')
              // 浏览器本地存储token
              localStorage.setItem('token', res.data.data.token)
              // 跳转到Home组件
              this.$router.push('/home')
            } else {
              // 登陆失败
              this.$message.error(res.data.meta.msg)
            }
          })
          console.log('通过了')
        } else {
          // 没通过
          console.log('没通过')

          // return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  .el-form {
    width: 400px;
    margin: 200px auto;
    background-color: #fff;
    padding: 75px 40px 15px;
    border-radius: 20px;
    position: relative;
    img {
      max-width: 130px;
      max-height: 130px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -25%;
      border: 10px solid #ffffff;
      border-radius: 50%;
    }
    .el-button + .el-button {
      margin-left: 70px;
    }
  }
}
</style>
