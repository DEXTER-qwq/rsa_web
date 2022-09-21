<template>
  <div class="container">
    <h1>货币面值</h1>
    <el-row :gutter="20">
      <el-col :span="24" >
        <el-table
            :data="tableData1">
          <el-table-column
              prop="n"
              label="n">
          </el-table-column>
          <el-table-column
              prop="e"
              label="e">
          </el-table-column>
          <el-table-column
              prop="d"
              label="d">
          </el-table-column>
          <el-table-column
              prop="value"
              label="value">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <div class="inputDiv">
      <div>value</div>
      <el-input v-model="value" placeholder="请输入货币面值"></el-input>
      <el-button type="primary" style="margin-left: 10px" @click="newCurrency">新增货币</el-button>
      <el-button type="danger" style="margin-left: 10px" @click="delCurrency">删除货币</el-button>
    </div>
  </div>

</template>

<script>

import rsaApi from "@/api/rsaApi";

export default {
  name: "BankView",
  data() {
    return {
      tableData1: [
        {
          n: '1',
          e: '0x10001',
          d: '2',
          value: '1'
        },
        {
          n: '1',
          e: '0x10001',
          d: '2',
          value: '1'
        },
      ],
      value:'',
    }
  },
  methods:{
    get10(str) {
      if (str.slice(0,10))
        return str.slice(0,10)+"..."
      else
        return str.slice(0,10)
    },

    showCurrency() {
      rsaApi.showCurrency({}).then(res=>{
        console.log(res)
        this.tableData1=res.data
      })
    },

    newCurrency() {
      rsaApi.newCurrency({
        value:this.value
      }).then(res=>{
        console.log(res)
        this.showCurrency()
        alert('添加成功')
      })
    },

    delCurrency() {
      rsaApi.delCurrency({
        value:this.value
      }).then(res=>{
        console.log(res)
        this.showCurrency()
        alert('删除成功')
      })
    },
  },
  mounted(){
    this.showCurrency()
  }
}
</script>

<style scoped>
.container{
  display: flex;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap
}
.container h1{
  text-align: center
}

.inputDiv{
  display: flex
}

.inputDiv div{
  line-height: 40px;
  margin: 0 10px
}

.el-row {
  margin-bottom: 40px;
}
</style>