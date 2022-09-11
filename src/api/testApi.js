import request from './request'

const test = {
    getData() {
        return request.get('/blind')
    }
}


export default test