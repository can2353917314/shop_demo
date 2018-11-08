<template>
<div class="login">

 <el-form ref="form" :model="form" label-width="80px">
     <img src="@/assets/avatar.jpg" alt="">
  <el-form-item label="用户名">
    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
  </el-form-item>
 <el-form-item label="密码">
    <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登陆</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 9 个字符', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    onSubmit() {
      console.log('submit!')
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
