import request from './request'

const test = {
    getData(){
      return request.get('init')
    },

    getBlindData(params) {
        return request.get('/blind', {params})
    },

    getVerity(params){
        return request.get('/double',{params})
    },

    payData(params){
        return request.get('/pay',{params})
    }
}


export default test