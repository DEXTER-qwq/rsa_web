<template>
  <div class="container">
    <h1 >pk: n,e,Hash  sk: d</h1>
    <div class="inputDiv">
      <div>m</div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary" style="margin-left: 10px" @click="handleClick">提交</el-button>
    </div>
    <h1>盲化后数据 M=<span style=""> {{ getM }}</span>, 随机取的R=</h1>
    <h1>银行盲签名后 σ'=</h1>
    <h1>除盲后 σ=</h1>
    <div class="inputDiv">
      <div>σ</div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <div>m</div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary" style="margin-left: 10px">检验</el-button>
    </div>
    <h1>双花/签名有效/无效</h1>
  </div>
</template>

<script>
import testApi from "@/api/testApi";


export default {
  data(){
    return{
      input:'',
      M:""
    }
  },
  computed: {
    getM() {
      return this.M.slice(0,10)
    }
  },
  methods:{
    handleClick(){
      testApi.getData().then(res => {
        console.log(res)
        this.M=res.data
      })

    }
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
</style>