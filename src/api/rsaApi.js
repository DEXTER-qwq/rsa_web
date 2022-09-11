import request from './request'

const test = {
    getData(){
      return request.get('init')
    },

    getBlindData(params) {
        return request.get('/blind', {params})
    },

    getVerity(params){
        return request.get('/verify',{params})
    }
}


export default test