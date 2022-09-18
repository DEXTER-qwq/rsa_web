<template>
  <div class="container">
    <h1 >面值 1 pk: n {{get10(n)}},e {{e}},Hash sha512 sk: d {{get10(d)}}</h1>
<!--    <h1 >面值 5 pk: n {{get10(n)}},e {{e}},Hash sha512 sk: d {{get10(d)}}</h1>-->
    <div class="inputDiv">
      <div>payer</div>
      <el-input v-model="input" placeholder="请输入付款方姓名"></el-input>
      <div>payee</div>
      <el-input v-model="input" placeholder="请输入收款方姓名"></el-input>
      <div>m</div>
      <el-input v-model="msg" placeholder="请输入内容"></el-input>
      <div>money</div>
      <el-input v-model="input" placeholder="请输入付款金额"></el-input>
      <el-button type="primary" style="margin-left: 10px" @click="handleClick">提交</el-button>
    </div>
    <h1>盲化后数据 M=<span style=""> {{ get10(M) }}</span>, 随机取的R={{get10(R)}}</h1>
    <h1>银行盲签名后 σ'={{get10(sigma1)}}</h1>
    <h1>除盲后 σ={{get10(sigma)}}</h1>
    <div class="inputDiv">
      <div>person</div>
      <el-input v-model="input" placeholder="请输入收款方姓名"></el-input>
      <el-button type="primary" style="margin-left: 10px" @click="verity">发送</el-button>
      <div>σ</div>
      <el-input v-model="sigmaInput"  placeholder="请输入内容"></el-input>
      <div>m</div>
      <el-input v-model="msgInput" placeholder="请输入内容"></el-input>
      <el-button type="primary" style="margin-left: 10px" @click="verity">使用</el-button>
    </div>
    <h1>state :{{state}}</h1>
    <div v-for="(each,index) in list" :key="index">
      each:{{ each }}
      index:{{ index }}
    </div>
  </div>
</template>

<script>
import rsaApi from "@/api/rsaApi";


export default {
  data(){
    return{
      n:'',
      e:'',
      d:'',
      R:'',
      msg:'',
      M:'',
      sigma1:'',
      sigma:'',
      sigmaInput:'',
      msgInput:'',
      state:'',
      input:'',
      list:[1,2,3]
    }
  },
  computed: {

  },
  methods:{
    get10(str) {
      if (str.slice(0,10))
        return str.slice(0,10)+"..."
      else
        return str.slice(0,10)
    },
    getInit(){
      rsaApi.getData().then(
          res=>{
            console.log(res)
            this.n=res.data[0]
            this.e=res.data[1]
            this.d=res.data[2]
            this.R=res.data[3]
          }
      )
    },
    handleClick(){
      rsaApi.getBlindData({
        msg:this.msg
      }).then(res => {
        console.log(res)
        // console.log(this.n)
        this.M=res.data[0]
        this.sigma1=res.data[1]
        this.sigma=res.data[2]
        this.sigmaInput=this.sigma
        this.msgInput=this.msg
      })
    },
    verity(){
      rsaApi.getVerity(
          {
            sigma: this.sigmaInput,
            msg: this.msgInput
          }
      ).then(res => {
        console.log(res)
        this.state = res.data
      })
    }
  },
  mounted() {
    this.getInit()
    // this.Sign()
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