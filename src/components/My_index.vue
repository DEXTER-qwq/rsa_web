<template>
  <div class="container">
    <h1 >面值 1 pk: n {{get10(n)}},e {{e}},Hash sha512 sk: d {{get10(d)}}</h1>
    <!--    <h1 >面值 5 pk: n {{get10(n)}},e {{e}},Hash sha512 sk: d {{get10(d)}}</h1>-->
    <div class="inputDiv">
      <div>payer</div>
      <el-input v-model="payer" placeholder="请输入付款方姓名"></el-input>
      <div>payee</div>
      <el-input v-model="payee" placeholder="请输入收款方姓名"></el-input>
      <div>m</div>
      <el-input v-model="msg" placeholder="请输入内容"></el-input>
      <div>money</div>
      <el-input v-model="money" placeholder="请输入付款金额"></el-input>
      <el-button type="primary" style="margin-left: 10px" @click="payData">付款请求</el-button>
    </div>
<!--    <h1>盲化后数据 M=<span style=""> {{ get10(M) }}</span>, 随机取的R={{get10(R)}}</h1>-->
<!--    <h1>银行盲签名后 σ'={{get10(sigma1)}}</h1>-->
<!--    <h1>除盲后 σ={{get10(sigma)}}</h1>-->
    <div class="inputDiv" style="margin-top: 30px">
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

    <div style="width: 60%">
      <el-row :gutter="20">
        <el-col :span="16" :push="8">
          <el-table
              :data="tableData1">
            <el-table-column
                prop="msg"
                label="msg"
                width="300">
            </el-table-column>
            <el-table-column
                prop="sigma"
                label="sigma">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="space-between">
        <el-col :span="8">
          <el-select
              v-model="user"
              placeholder="请选择用户"
              @change="onChange"
          >
            <el-option label="用户A" value="userA"></el-option>
            <el-option label="用户B" value="userB"></el-option>
          </el-select>
        </el-col>
        <el-col :span="16">
          <el-table
              :data="tableData2">
            <el-table-column
                prop="msg"
                label="msg"
                width="300">
            </el-table-column>
            <el-table-column
                prop="sigma"
                label="sigma">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
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
      payer:'',
      payee:'',
      msg:'',
      money:'',
      M:'',
      sigma1:'',
      sigma:'',
      sigmaInput:'',
      msgInput:'',
      state:'',
      input:'',
      list:[1,2,3],
      user:'userA',
      tableData1: [
        {
          sigma: '2016-05-02',
          msg: '上海市普陀区金沙江路 1518 弄'
        }, {
          sigma: '2016-05-02',
          msg: '上海市普陀区金沙江路 1518 弄'
        }],
      tableData2: [
        {
          sigma: '2016-05-02',
          msg: '上海市普陀区金沙江路 1518 弄'
        }, {
          sigma: '2016-05-02',
          msg: '上海市普陀区金沙江路 1518 弄'
        }],
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
    },
    onChange(item){
      alert(item)
    },
    payData() {
      rsaApi.payData({
        payer:this.payer,
        payee:this.payee,
        msg:this.msg,
        money:this.money
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

.el-row {
  margin-bottom: 40px;
}
</style>

