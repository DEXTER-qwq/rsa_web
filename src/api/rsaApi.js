import request from './request'

const test = {
    // getData(){
    //   return request.get('init')
    // },

    // getBlindData(params) {
    //     return request.get('/blind', {params})
    // },

    // getVerity(params){
    //     return request.get('/double',{params})
    // },

    // payData(params){
    //     return request.get('/pay',{params})
    // },

    // getMessage(params){
    //     return request.get('/getMessage',{params})
    // },

    getUser(params){
        return request.get('/getUser',{params})
    },

    newCurrency(params){
        return request.get('/newCurrency', {params})
    },

    showCurrency(params){
        return request.get('/showCurrency',{params})
    },

    delCurrency(params){
        return request.get('/delCurrency',{params})
    },

    userPay(params){
        return request.get('/userPay',{params})
    },

    currencyVerify(params){
        return request.get('/currencyVerify',{params})
    }
}


export default test