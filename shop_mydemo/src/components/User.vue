<template>
<div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/user' }">用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
  </el-breadcrumb>
  <!-- 搜索框 -->
  <div style="margin-top: 15px;">
    <el-input placeholder="请输入内容" v-model="query" class="input-with-select">
    <el-button slot="append" icon="el-icon-search" @click="searchFn"></el-button>
    </el-input>
    <el-button type="success" plain>用户添加</el-button>
  </div>

   <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话"
        width="180">
      </el-table-column>
              <!-- prop="mg_state" -->
      <el-table-column
        label="状态"
        width="180"
        >
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit"  size="small" plain></el-button>
        <el-button type="danger" icon="el-icon-delete" size="small" plain></el-button>
        <el-button type="success" icon="el-icon-check" size="small" plain>分配角色</el-button>
        </template>
      </el-table-column>
    </el-table>
   <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
 </div>
</template>
<script>
// 引入axios
import axios from 'axios'
// @/axios/lib/axios
export default {
  methods: {
    getUserList() {
      // 在初始化之后就将页面渲染发送ajax请求
      axios({
        method: 'get',
        url: 'http://localhost:8888/api/private/v1/users',
        params: {
          query: this.query, // 查询的参数
          pagenum: this.currentPage, // 当前页码
          pagesize: this.pagesize // 每页显示的条数
        },
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }).then(res => {
        console.log(res.data)
        if (res.data.meta.status === 200) {
          this.tableData = res.data.data.users
          this.total = res.data.data.total
        }
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.pagesize = val
      this.getUserList()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.getUserList()
    },
    searchFn() {
      this.getUserList()
    }
  },
  created() {
    this.getUserList()
  },
  data() {
    return {
      query: '',
      currentPage: 1,
      pagesize: 2,
      total: 0,
      tableData: []
    }
  }
}
</script>
<style lang="less" scoped>
.el-breadcrumb {
  height: 30px;
  line-height: 30px;
}
.input-with-select {
  width: 400px;
  margin-bottom: 10px;
}
</style>
