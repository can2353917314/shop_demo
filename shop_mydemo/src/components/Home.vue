<template>
  <el-container class="home">
  <el-header>
    <div class="login"></div>
    <div class="loginout">欢迎登陆
      <a href="javaScript:;" style="color: darkorange;" @click="open2">退出</a>
       <!-- @click="loginoutFn" -->
    </div>
    <h1>电商后台管理系统</h1>
  </el-header>
  <!-- 侧边栏 -->

  <el-container>
    <el-aside width="200px">
       <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/users">
           <i class="el-icon-menu"></i>
           <span slot="title">用户列表</span>
         </el-menu-item>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item index="2-1">
          <i class="el-icon-menu"></i>
          <span slot="title">角色列表</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-menu"></i>
          <span slot="title">权限列表</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>

    </el-aside>
    <!-- 主体部分 -->
    <el-main>
      <!--放置users路由 -->
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    open2() {
      this.$confirm('您确定退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
          localStorage.removeItem('token')
          this.$router.push('/login')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          })
        })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  .el-header {
    background-color: #b3c1cd;
    overflow: hidden;
    .login {
      width: 180px;
      height: 60px;
      float: left;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url('../assets/logo.png');
    }
    .loginout {
      width: 180px;
      height: 60px;
      float: right;
      line-height: 60px;
      text-align: right;
      font-weight: 700;
      a {
        color: darkorange;
      }
    }
    h1 {
      text-align: center;
      color: #ffffff;
      line-height: 60px;
      font-size: 30px;
    }
  }
  .el-container {
    .el-aside {
      background-color: #545c64;
      .el-menu {
        width: 200px;
      }
    }
    .el-main {
      background-color: #d4dfe4;
    }
  }
}
</style>
